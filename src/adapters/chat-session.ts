import type {
  ChatAttachmentDto,
  ChatAttachmentRefDto,
  ChatHistoryDetailResponse,
  HomeContextRef,
} from "@bioagent/shared";
import type {
  ChatAttachment,
  ChatMessage,
  ChatReference,
  InputSendPayload,
  SearchStep,
  StatusPhase,
} from "@bioagent/chatui";

import { ApiError, ChatStreamTimeoutError, type ApiClient } from "@/lib/api";

export interface ChatSessionViewModel {
  id: string;
  title: string;
  messages: ChatMessage[];
  messageIds: string[];
}

export interface ChatStreamViewState {
  sessionId?: string;
  messages: ChatMessage[];
  statusPhase: StatusPhase;
  searchSteps: SearchStep[];
  hasReceivedAssistantChunk: boolean;
  error?: string;
}

export class ChatStreamDisconnectedError extends Error {
  constructor(options: { cause?: unknown } = {}) {
    super("连接意外中断，未确认服务端完成回答，请重试。", options);
    this.name = "ChatStreamDisconnectedError";
  }
}

const CHAT_RECONCILIATION_RETRY_DELAYS_MS = [0, 250, 500, 1_000] as const;

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value !== null
    ? (value as Record<string, unknown>)
    : null;
}

export function mapChatAttachmentRef(
  attachment: ChatAttachmentRefDto,
): ChatAttachment {
  const attachmentRecord = asRecord(attachment);
  const previewUrl =
    attachment.kind === "image" && typeof attachmentRecord?.url === "string"
      ? attachmentRecord.url.trim()
      : "";

  return {
    id: attachment.id,
    name: attachment.name,
    mimeType: attachment.mimeType,
    status: "ready",
    ...(previewUrl ? { previewUrl } : {}),
  };
}

export function mapChatContextRef(
  reference: HomeContextRef,
): ChatReference | null {
  if (reference.type === "attachment") return null;

  const label = reference.title?.trim() || reference.summary?.trim();
  if (!label) return null;

  return {
    id: `${reference.type}:${reference.id}`,
    type: "doc",
    label,
    sourceId: reference.id,
  };
}

export function mapChatHistoryDetail(
  response: ChatHistoryDetailResponse,
): ChatSessionViewModel {
  const attachmentDetails = new Map<string, ChatAttachmentDto>(
    response.attachments.map((attachment) => [attachment.id, attachment]),
  );

  return {
    id: response.sessionId,
    title: response.session.title?.trim() || "新对话",
    messageIds: response.messages.map((message) => message.id),
    messages: response.messages
      .filter(
        (message) =>
          (message.role === "user" || message.role === "assistant") &&
          typeof message.content === "string",
      )
      .map((message) => {
        const references =
          message.role === "user"
            ? (message.contextRefsSnapshot ?? [])
                .map(mapChatContextRef)
                .filter(
                  (reference): reference is ChatReference => reference !== null,
                )
            : [];

        return {
          role: message.role as "user" | "assistant",
          content: message.content,
          attachments: (message.attachmentRefs ?? []).map((attachment) =>
            mapChatAttachmentRef(
              attachmentDetails.get(attachment.id) ?? attachment,
            ),
          ),
          ...(references.length > 0 ? { references } : {}),
        };
      }),
  };
}

async function fetchChatSessionDetail(
  api: ApiClient,
  sessionId: string,
  signal?: AbortSignal,
) {
  return api.get<ChatHistoryDetailResponse>(
    `/api/chat/history?sessionId=${encodeURIComponent(sessionId)}`,
    { signal },
  );
}

export async function loadChatSession(
  api: ApiClient,
  sessionId: string,
  options: { signal?: AbortSignal } = {},
) {
  const response = await fetchChatSessionDetail(api, sessionId, options.signal);
  return mapChatHistoryDetail(response);
}

function hasPersistedAssistantResponse(
  response: ChatHistoryDetailResponse,
  knownMessageIds: ReadonlySet<string>,
  userContent: string,
) {
  const newMessages = response.messages.filter(
    (message) => !knownMessageIds.has(message.id),
  );
  const normalizedUserContent = userContent.trim();

  for (let index = newMessages.length - 1; index >= 0; index -= 1) {
    const message = newMessages[index];
    if (
      message.role !== "user" ||
      message.content.trim() !== normalizedUserContent
    ) {
      continue;
    }

    return newMessages
      .slice(index + 1)
      .some(
        (candidate) =>
          candidate.role === "assistant" &&
          (candidate.content.trim().length > 0 || Boolean(candidate.display)),
      );
  }

  return false;
}

function isRetryableReconciliationError(error: unknown) {
  return (
    !(error instanceof ApiError) || error.status === 404 || error.status >= 500
  );
}

function waitForReconciliationRetry(delayMs: number, signal?: AbortSignal) {
  if (delayMs <= 0) {
    signal?.throwIfAborted();
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    if (signal?.aborted) {
      reject(signal.reason);
      return;
    }

    const handleAbort = () => {
      globalThis.clearTimeout(timeout);
      reject(signal?.reason);
    };
    const timeout = globalThis.setTimeout(() => {
      signal?.removeEventListener("abort", handleAbort);
      resolve();
    }, delayMs);
    signal?.addEventListener("abort", handleAbort, { once: true });
  });
}

export async function reconcileChatStream(
  api: ApiClient,
  sessionId: string,
  options: {
    userContent: string;
    knownMessageIds?: readonly string[];
    signal?: AbortSignal;
    retryDelaysMs?: readonly number[];
    wait?: (delayMs: number, signal?: AbortSignal) => Promise<void>;
  },
): Promise<ChatSessionViewModel> {
  const knownMessageIds = new Set(options.knownMessageIds ?? []);
  const retryDelaysMs = options.retryDelaysMs?.length
    ? options.retryDelaysMs
    : CHAT_RECONCILIATION_RETRY_DELAYS_MS;
  const wait = options.wait ?? waitForReconciliationRetry;
  let lastError: unknown;

  for (const delayMs of retryDelaysMs) {
    await wait(delayMs, options.signal);

    try {
      const detail = await fetchChatSessionDetail(
        api,
        sessionId,
        options.signal,
      );
      if (
        hasPersistedAssistantResponse(
          detail,
          knownMessageIds,
          options.userContent,
        )
      ) {
        return mapChatHistoryDetail(detail);
      }
    } catch (error) {
      options.signal?.throwIfAborted();
      if (!isRetryableReconciliationError(error)) throw error;
      lastError = error;
    }
  }

  throw new ChatStreamDisconnectedError({ cause: lastError });
}

export function beginChatStream(
  messages: readonly ChatMessage[],
  userMessage: ChatMessage,
): ChatStreamViewState {
  return {
    messages: [...messages, userMessage, { role: "assistant", content: "" }],
    statusPhase: "analyzing",
    searchSteps: [],
    hasReceivedAssistantChunk: false,
  };
}

export function updateLatestUserMessageAttachments(
  state: ChatStreamViewState,
  attachments: ChatAttachment[],
): ChatStreamViewState {
  let userMessageIndex = -1;
  for (let index = state.messages.length - 1; index >= 0; index -= 1) {
    if (state.messages[index]?.role !== "user") continue;
    userMessageIndex = index;
    break;
  }
  if (userMessageIndex < 0) return state;

  return {
    ...state,
    messages: state.messages.map((message, index) =>
      index === userMessageIndex ? { ...message, attachments } : message,
    ),
  };
}

export function buildChatRegeneratePayload(
  messages: readonly ChatMessage[],
  assistantIndex: number,
): InputSendPayload | null {
  for (let index = assistantIndex - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (message?.role !== "user" || !message.content.trim()) continue;

    return {
      content: message.content,
      attachments: [],
      references: [],
    };
  }

  return null;
}

export function interruptChatStream(
  state: ChatStreamViewState,
): ChatStreamViewState {
  const lastMessage = state.messages.at(-1);
  const messages =
    lastMessage?.role === "assistant" && !lastMessage.content
      ? state.messages.slice(0, -1)
      : state.messages;

  return {
    ...state,
    messages,
    error: undefined,
  };
}

export function getChatStreamErrorMessage(error: unknown): string {
  if (error instanceof ChatStreamTimeoutError) {
    return "AI 响应超时，请重试。";
  }

  if (error instanceof ChatStreamDisconnectedError) {
    return "AI 服务暂时不可用，请稍后重试。";
  }

  const status = error instanceof ApiError ? error.status : undefined;
  const rawMessage = error instanceof Error ? error.message : "";

  if (status === 429 || /\b(?:HTTP\s*)?429\b|rate.?limit|too many requests/i.test(rawMessage)) {
    return "请求过于频繁，请稍后重试。";
  }

  if (status === 408 || /\b(?:HTTP\s*)?408\b|time(?:d)?\s*out/i.test(rawMessage)) {
    return "AI 响应超时，请重试。";
  }

  if (
    status === 502
    || status === 503
    || status === 504
    || status === 529
    || /\b(?:HTTP\s*)?(?:502|503|504|529)\b|bad gateway|origin_bad_gateway|network request failed/i.test(rawMessage)
  ) {
    return "AI 服务暂时不可用，请稍后重试。";
  }

  return "AI 服务异常，请稍后重试。";
}

export function shouldReconcileChatStreamFailure(
  error: unknown,
  state: ChatStreamViewState,
) {
  return (
    !state.error &&
    !(error instanceof ApiError) &&
    !(error instanceof ChatStreamTimeoutError) &&
    !(error instanceof ChatStreamDisconnectedError)
  );
}

export function reduceChatStreamEvent(
  state: ChatStreamViewState,
  eventType: string,
  eventData: unknown,
): ChatStreamViewState {
  const payload = asRecord(eventData);
  if (!payload) return state;

  if (eventType === "meta" && typeof payload.sessionId === "string") {
    return { ...state, sessionId: payload.sessionId };
  }

  if (eventType === "task_trace") {
    const step = asRecord(payload.step);
    const status = typeof step?.status === "string" ? step.status : "";
    if (
      state.hasReceivedAssistantChunk
      || status !== "running"
    ) {
      return state;
    }

    const label =
      typeof step?.title === "string"
        ? step.title
        : typeof step?.detail === "string"
          ? step.detail
          : "正在处理任务";
    const category = typeof step?.category === "string" ? step.category : "";
    // 服务端会在工具调用前就发出 generation/running；它表示整轮生成任务已开始，
    // 不是用户可见的“即将输出正文”。真正开始生成以首个 text 事件为准。
    if (category === "generation") return state;

    const statusPhase: StatusPhase =
      category === "retrieval"
        ? "searching"
        : category === "tool" || category === "action"
          ? "executing"
          : "analyzing";
    const type: SearchStep["type"] =
      category === "retrieval" ? "knowledge" : "tool";

    return {
      ...state,
      statusPhase,
      // 产品策略：回复过程中只展示最新状态，避免任务轨迹持续占用对话空间。
      // 若后续需要恢复完整执行轨迹，可改回在 state.searchSteps 后追加当前步骤。
      searchSteps: [{ type, label }],
    };
  }

  if (eventType === "text" && typeof payload.content === "string") {
    const messages = [...state.messages];
    const lastIndex = messages.length - 1;
    const lastMessage = messages[lastIndex];
    if (lastMessage?.role !== "assistant") return state;

    messages[lastIndex] = {
      ...lastMessage,
      content: `${lastMessage.content}${payload.content}`,
    };
    return {
      ...state,
      messages,
      statusPhase: "generating",
      hasReceivedAssistantChunk: true,
    };
  }

  if (eventType === "error") {
    return {
      ...state,
      error: typeof payload.error === "string" ? payload.error : "对话失败",
    };
  }

  return state;
}
