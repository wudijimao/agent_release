import type {
  ChatAttachmentDto,
  ChatAttachmentRefDto,
  ChatHistoryDetailResponse,
  HomeAssistantDisplay,
  HomeContextRef,
} from "@bioagent/shared";
import { normalizeHomeAssistantDisplay } from "@bioagent/shared";
import type {
  ChatAttachment,
  ChatDisplayCardViewModel,
  ChatMessage,
  ChatReference,
  InputSendPayload,
  SearchStep,
  StatusPhase,
} from "@bioagent/chatui";

import { ApiError, ChatStreamTimeoutError, type ApiClient } from "@/lib/api";
import {
  mapMiraDocumentDraft,
  type MiraDocumentDraftAction,
} from "@/adapters/mira-document-drafts";

export interface ChatSessionViewModel {
  id: string;
  title: string;
  messages: ChatMessage[];
  messageIds: string[];
  miraDraftActions: Record<string, MiraDocumentDraftAction>;
  deferredActions: Record<string, ChatDeferredAction>;
  isReplying: boolean;
}

export type ChatDeferredAction =
  | {
      kind: "mcp";
      actionKey: string;
      toolCallId: string;
      status: "pending_confirmation" | "pending_approval";
    }
  | {
      kind: "route";
      actionKey: string;
      confirmPath: string;
      cancelPath?: string;
      confirmBody?: Record<string, unknown>;
    };

export interface ChatStreamViewState {
  sessionId?: string;
  messages: ChatMessage[];
  statusPhase: StatusPhase;
  statusLabel?: string;
  statusVisible: boolean;
  searchSteps: SearchStep[];
  hasReceivedAssistantChunk: boolean;
  runStatus?: AgentRunStatus;
  activeTaskTraceId?: string;
  lastTaskTraceSequence?: number;
  activeDisplay?: HomeAssistantDisplay;
  deferredActions?: Record<string, ChatDeferredAction>;
  miraDraftActions?: Record<string, MiraDocumentDraftAction>;
  error?: string;
}

type AgentRunStatus =
  | "queued"
  | "running"
  | "awaiting_clarification"
  | "awaiting_confirmation"
  | "awaiting_approval"
  | "completed"
  | "failed"
  | "cancelled";

export class ChatStreamDisconnectedError extends Error {
  constructor(options: { cause?: unknown } = {}) {
    super("连接意外中断，未确认服务端完成回答，请重试。", options);
    this.name = "ChatStreamDisconnectedError";
  }
}

export function isChatSessionNotFoundError(error: unknown) {
  return (
    error instanceof ApiError &&
    error.status === 404 &&
    error.message.trim().toLowerCase() === "session not found"
  );
}

const CHAT_RECONCILIATION_RETRY_DELAYS_MS = [0, 250, 500, 1_000] as const;

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value !== null
    ? (value as Record<string, unknown>)
    : null;
}

function asTrimmedString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function asStringList(value: unknown) {
  return Array.isArray(value)
    ? value
        .map(asTrimmedString)
        .filter((item): item is string => Boolean(item))
    : [];
}

export function formatChatActionExpiry(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  const parts = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const read = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";
  return `${read("year")}年${read("month")}月${read("day")}日 ${read("hour")}:${read("minute")}`;
}

const DISPLAY_STATUS_LABELS: Partial<
  Record<HomeAssistantDisplay["state"], string>
> = {
  streaming: "生成中",
  waiting_confirmation: "等待确认",
  blocked: "已阻塞",
  completed: "已完成",
};

function collectDisplayItems(payload: Record<string, unknown>) {
  const keys = [
    "missingItems",
    "recommendedActions",
    "recoveryActions",
    "nextActions",
    "blockers",
    "warnings",
    "limitations",
  ];
  return keys.flatMap((key) => asStringList(payload[key])).slice(0, 8);
}

function collectDisplayLinks(payload: Record<string, unknown>) {
  const candidates = [payload.papers, payload.results, payload.sources]
    .filter(Array.isArray)
    .flat() as unknown[];

  return candidates
    .map((candidate) => {
      const record = asRecord(candidate);
      if (!record) return null;
      const label =
        asTrimmedString(record.title) || asTrimmedString(record.label);
      const href =
        asTrimmedString(record.url) ||
        asTrimmedString(record.href) ||
        (asTrimmedString(record.doi)
          ? `https://doi.org/${record.doi}`
          : asTrimmedString(record.pmid)
            ? `https://pubmed.ncbi.nlm.nih.gov/${record.pmid}/`
            : undefined);
      return label && href && /^https?:\/\//i.test(href)
        ? { label, href }
        : null;
    })
    .filter(
      (link): link is { label: string; href: string } => link !== null,
    )
    .slice(0, 6);
}

function mapDisplayDeferredAction(
  display: HomeAssistantDisplay | null | undefined,
): ChatDeferredAction | null {
  if (
    !display
    || display.cardType === "mira_archive_preview"
    || display.state !== "waiting_confirmation"
  ) return null;
  const payload = asRecord(display.payload);
  if (!payload) return null;

  const draftEnvelope = asRecord(payload.draftEnvelope);
  const draftConfirmation = asRecord(draftEnvelope?.confirmation);
  const draftId = asTrimmedString(draftEnvelope?.draftId);
  const confirmPath = asTrimmedString(draftConfirmation?.confirmRoute);
  const cancelPath = asTrimmedString(draftConfirmation?.cancelRoute);
  const confirmBody = asRecord(draftConfirmation?.confirmPayload);
  if (draftId && confirmPath) {
    return {
      kind: "route",
      actionKey: `draft-route:${draftId}`,
      confirmPath,
      ...(cancelPath ? { cancelPath } : {}),
      ...(confirmBody ? { confirmBody } : {}),
    };
  }

  const confirmation = asRecord(payload.confirmation);
  const actionId = asTrimmedString(confirmation?.actionId);
  const confirmAction = asRecord(confirmation?.confirmAction);
  const cancelAction = asRecord(confirmation?.cancelAction);
  const actionConfirmPath = asTrimmedString(confirmAction?.path);
  const actionCancelPath = asTrimmedString(cancelAction?.path);
  const confirmationToken = asTrimmedString(confirmation?.confirmationToken);
  const draftHash = asTrimmedString(confirmation?.draftHash);
  if (!actionId || !actionConfirmPath) return null;
  return {
    kind: "route",
    actionKey: `display-route:${actionId}`,
    confirmPath: actionConfirmPath,
    ...(actionCancelPath ? { cancelPath: actionCancelPath } : {}),
    confirmBody: {
      ...(confirmationToken ? { confirmationToken } : {}),
      ...(draftHash ? { draftHash } : {}),
    },
  };
}

export function mapChatDisplayCard(
  display: HomeAssistantDisplay | null | undefined,
): ChatDisplayCardViewModel | null {
  if (
    !display ||
    display.cardType === "answer" ||
    display.cardType === "mira_archive_preview"
  ) {
    return null;
  }

  const payload = asRecord(display.payload) ?? {};
  const deferredAction = mapDisplayDeferredAction(display);
  const items = collectDisplayItems(payload);
  const links = collectDisplayLinks(payload);
  let kind: ChatDisplayCardViewModel["kind"] = "result";
  let summary = display.summary;

  if (display.cardType === "clarification") {
    kind = "clarification";
    summary = asTrimmedString(payload.question) || summary;
    const recommendedNext = asTrimmedString(payload.recommendedNext);
    if (recommendedNext) items.push(`建议下一步：${recommendedNext}`);
  } else if (display.cardType === "confirmation") {
    kind = "confirmation";
    summary = asTrimmedString(payload.draftSummary) || summary;
  } else if (display.cardType === "blocked" || display.state === "blocked") {
    kind = "blocked";
    summary = asTrimmedString(payload.reason) || summary;
  } else if (display.state === "needs_clarification") {
    kind = "clarification";
  } else if (display.state === "waiting_confirmation") {
    kind = "confirmation";
  } else if (display.cardType === "quiet_preference_notice") {
    kind = "info";
    summary = asTrimmedString(payload.markdown) || summary;
  }

  return {
    kind,
    title: display.title,
    ...(summary ? { summary } : {}),
    ...(items.length > 0 ? { items } : {}),
    ...(links.length > 0 ? { links } : {}),
    ...(DISPLAY_STATUS_LABELS[display.state]
      ? { statusLabel: DISPLAY_STATUS_LABELS[display.state] }
      : {}),
    ...(deferredAction
      ? {
          actionKey: deferredAction.actionKey,
          actions: [
            { id: "confirm", label: "确认", tone: "primary" as const },
            ...(deferredAction.kind === "route" && deferredAction.cancelPath
              ? [{ id: "cancel", label: "取消", tone: "secondary" as const }]
              : []),
          ],
        }
      : {}),
  };
}

function updateLatestAssistantDisplay(
  messages: readonly ChatMessage[],
  displayCard: ChatDisplayCardViewModel,
): ChatMessage[] {
  let targetIndex = -1;
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    if (messages[index]?.role === "assistant") {
      targetIndex = index;
      break;
    }
  }
  if (targetIndex < 0) return [...messages];

  return messages.map((message, index) =>
    index === targetIndex
      ? { ...message, displayCard }
      : message,
  );
}

function mapLiveMiraDraft(
  display: HomeAssistantDisplay,
): ReturnType<typeof mapMiraDocumentDraft> {
  if (display.cardType !== "mira_archive_preview") return null;
  const payload = asRecord(display.payload);
  const confirmation = asRecord(payload?.confirmation);
  const actionId = asTrimmedString(confirmation?.actionId) ?? "pending";
  return mapMiraDocumentDraft(display, `mira:${actionId}`);
}

function updateLatestAssistantMiraDraft(
  messages: readonly ChatMessage[],
  draft: NonNullable<ReturnType<typeof mapMiraDocumentDraft>>["card"],
) {
  let targetIndex = -1;
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    if (messages[index]?.role === "assistant") {
      targetIndex = index;
      break;
    }
  }
  if (targetIndex < 0) return [...messages];
  return messages.map((message, index) =>
    index === targetIndex
      ? { ...message, miraDraft: draft, displayCard: undefined }
      : message,
  );
}

function mapDeferredRequest(
  eventType: "clarification_required" | "confirmation_required" | "approval_required",
  payload: Record<string, unknown>,
): { card: ChatDisplayCardViewModel; action?: ChatDeferredAction } | null {
  const summary = asRecord(payload.summary);
  if (!summary) return null;

  if (eventType === "clarification_required") {
    const question = asTrimmedString(summary.question);
    if (!question) return null;
    const items = asStringList(summary.missingItems);
    const recommendedNext = asTrimmedString(summary.recommendedNext);
    if (recommendedNext) items.push(`建议下一步：${recommendedNext}`);
    return {
      card: {
        kind: "clarification",
        title: "需要补充信息",
        summary: question,
        ...(items.length > 0 ? { items } : {}),
      },
    };
  }

  const toolName =
    asTrimmedString(summary.toolDisplayName) ||
    asTrimmedString(summary.toolName) ||
    "外部操作";
  const inputSummary = asTrimmedString(summary.inputSummary);
  const expiresAt = asTrimmedString(payload.expiresAt);
  const toolCallId =
    asTrimmedString(summary.toolCallId) || asTrimmedString(payload.requestId);
  const actionKey = toolCallId ? `mcp:${toolCallId}` : undefined;
  const status = eventType === "approval_required"
    ? "pending_approval" as const
    : "pending_confirmation" as const;
  return {
    card: {
      kind: eventType === "approval_required" ? "approval" : "confirmation",
      title:
        eventType === "approval_required"
          ? `等待审批：${toolName}`
          : `需要确认：${toolName}`,
      ...(inputSummary ? { summary: inputSummary } : {}),
      ...(expiresAt
        ? { items: [`有效期至：${formatChatActionExpiry(expiresAt)}`] }
        : {}),
      statusLabel: eventType === "approval_required" ? "等待审批" : "等待确认",
      ...(actionKey
        ? {
            actionKey,
            actions: status === "pending_confirmation"
              ? [
                  { id: "confirm", label: "确认执行", tone: "primary" as const },
                  { id: "cancel", label: "取消", tone: "secondary" as const },
                ]
              : [{ id: "cancel", label: "取消请求", tone: "secondary" as const }],
          }
        : {}),
    },
    ...(actionKey && toolCallId
      ? { action: { kind: "mcp" as const, actionKey, toolCallId, status } }
      : {}),
  };
}

function mapPendingMcpToolCall(
  item: ChatHistoryDetailResponse["pendingMcpToolCalls"][number],
) {
  const actionKey = `mcp:${item.id}`;
  const action: ChatDeferredAction = {
    kind: "mcp",
    actionKey,
    toolCallId: item.id,
    status: item.status,
  };
  const card: ChatDisplayCardViewModel = {
    kind: item.status === "pending_approval" ? "approval" : "confirmation",
    title: item.status === "pending_approval"
      ? `等待审批：${item.toolName}`
      : `需要确认：${item.toolName}`,
    ...(item.inputSummary ? { summary: item.inputSummary } : {}),
    ...(item.expiresAt
      ? { items: [`有效期至：${formatChatActionExpiry(item.expiresAt)}`] }
      : {}),
    statusLabel: item.status === "pending_approval" ? "等待审批" : "等待确认",
    actionKey,
    actions: item.status === "pending_confirmation"
      ? [
          { id: "confirm", label: "确认执行", tone: "primary" },
          { id: "cancel", label: "取消", tone: "secondary" },
        ]
      : [{ id: "cancel", label: "取消请求", tone: "secondary" }],
  };
  return { action, card };
}

function mapArtifactCard(payload: Record<string, unknown>) {
  const artifact = asRecord(payload.artifact);
  const name = asTrimmedString(artifact?.name);
  if (!artifact || !name) return null;
  const href = asTrimmedString(artifact.url);
  return {
    kind: "result" as const,
    title: "已生成产物",
    summary: name,
    ...(href && /^https?:\/\//i.test(href)
      ? { links: [{ label: "打开产物", href }] }
      : {}),
    statusLabel: "已完成",
  } satisfies ChatDisplayCardViewModel;
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
  options: { projectName?: string } = {},
): ChatSessionViewModel {
  const attachmentDetails = new Map<string, ChatAttachmentDto>(
    response.attachments.map((attachment) => [attachment.id, attachment]),
  );
  const latestRun = response.runs[0];
  const isReplying =
    latestRun?.status === "queued" || latestRun?.status === "running";

  const miraDraftActions: Record<string, MiraDocumentDraftAction> = {};
  const deferredActions: Record<string, ChatDeferredAction> = {};
  const messages: ChatMessage[] = response.messages
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
      const mappedDraft =
        message.role === "assistant"
          ? mapMiraDocumentDraft(message.display, message.id, options.projectName)
          : null;
      const displayCard =
        message.role === "assistant"
          ? mapChatDisplayCard(message.display)
          : null;
      const deferredAction =
        message.role === "assistant"
          ? mapDisplayDeferredAction(message.display)
          : null;
      if (mappedDraft?.action) {
        miraDraftActions[mappedDraft.action.actionKey] = mappedDraft.action;
      }
      if (deferredAction) {
        deferredActions[deferredAction.actionKey] = deferredAction;
      }

      return {
        id: message.id,
        role: message.role as "user" | "assistant",
        content: message.content,
        attachments: (message.attachmentRefs ?? []).map((attachment) =>
          mapChatAttachmentRef(
            attachmentDetails.get(attachment.id) ?? attachment,
          ),
        ),
        ...(references.length > 0 ? { references } : {}),
        ...(mappedDraft ? { miraDraft: mappedDraft.card } : {}),
        ...(displayCard ? { displayCard } : {}),
      };
    });

  const pendingActionMessages = response.pendingMcpToolCalls.map((item) => {
    const mapped = mapPendingMcpToolCall(item);
    deferredActions[mapped.action.actionKey] = mapped.action;
    return {
      id: `mcp-pending-${item.id}`,
      role: "assistant" as const,
      content: "",
      displayCard: mapped.card,
    };
  });

  return {
    id: response.sessionId,
    title: response.session.title?.trim() || "新对话",
    messageIds: response.messages.map((message) => message.id),
    messages: messages
      .concat(
        isReplying &&
          response.messages
            .filter(
              (message) =>
                message.role === "user" || message.role === "assistant",
            )
            .at(-1)?.role === "user"
          ? [{ role: "assistant" as const, content: "", attachments: [] }]
          : [],
      )
      .concat(pendingActionMessages),
    miraDraftActions,
    deferredActions,
    isReplying,
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
  options: { signal?: AbortSignal; projectName?: string } = {},
) {
  const response = await fetchChatSessionDetail(api, sessionId, options.signal);
  return mapChatHistoryDetail(response, { projectName: options.projectName });
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
    projectName?: string;
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
        return mapChatHistoryDetail(detail, { projectName: options.projectName });
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
    statusVisible: true,
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
    statusVisible: false,
    searchSteps: [],
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

function isWaitingForUser(status: AgentRunStatus | undefined) {
  return (
    status === "awaiting_clarification" ||
    status === "awaiting_confirmation" ||
    status === "awaiting_approval"
  );
}

function mapTaskTraceType(category: string): SearchStep["type"] {
  if (category === "planning") return "planning";
  if (category === "context") return "context";
  if (category === "retrieval") return "knowledge";
  if (category === "generation") return "generation";
  if (category === "action") return "action";
  return "tool";
}

function mapTaskTracePhase(
  category: string,
  hasReceivedAssistantChunk: boolean,
): StatusPhase {
  if (category === "retrieval") return "searching";
  if (category === "tool" || category === "action") return "executing";
  if (category === "generation" && hasReceivedAssistantChunk) {
    return "generating";
  }
  return "analyzing";
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

  if (eventType === "display_start" || eventType === "display_done") {
    const display = normalizeHomeAssistantDisplay(payload.display);
    if (!display) return state;
    const displayCard = mapChatDisplayCard(display);
    const deferredAction = mapDisplayDeferredAction(display);
    const miraDraft = mapLiveMiraDraft(display);
    const settled =
      eventType === "display_done" &&
      (display.state === "ready" ||
        display.state === "completed" ||
        display.state === "blocked");
    const waitingPhase: StatusPhase | undefined =
      eventType === "display_done" && display.state === "needs_clarification"
        ? "awaiting_clarification"
        : eventType === "display_done" &&
            display.state === "waiting_confirmation"
          ? "awaiting_confirmation"
          : undefined;
    return {
      ...state,
      activeDisplay: display,
      messages: miraDraft
        ? updateLatestAssistantMiraDraft(state.messages, miraDraft.card)
        : displayCard
          ? updateLatestAssistantDisplay(state.messages, displayCard)
          : state.messages,
      ...(deferredAction
        ? {
            deferredActions: {
              ...state.deferredActions,
              [deferredAction.actionKey]: deferredAction,
            },
          }
        : {}),
      ...(miraDraft?.action
        ? {
            miraDraftActions: {
              ...state.miraDraftActions,
              [miraDraft.action.actionKey]: miraDraft.action,
            },
          }
        : {}),
      ...(settled
        ? {
            statusVisible: false,
            statusLabel: undefined,
            activeTaskTraceId: undefined,
            searchSteps: [],
          }
        : waitingPhase
          ? {
              runStatus: waitingPhase,
              statusPhase: waitingPhase,
              // 最终操作卡片已经完整表达等待状态，避免卡片下方重复显示状态条。
              statusVisible: false,
              statusLabel: undefined,
              activeTaskTraceId: undefined,
              searchSteps: [],
            }
          : {}),
    };
  }

  if (eventType === "display_patch") {
    const patch = asRecord(payload.patch);
    if (!patch || !state.activeDisplay) return state;
    const display = normalizeHomeAssistantDisplay({
      ...state.activeDisplay,
      ...patch,
      payload:
        asRecord(patch.payload) && asRecord(state.activeDisplay.payload)
          ? { ...asRecord(state.activeDisplay.payload), ...asRecord(patch.payload) }
          : patch.payload ?? state.activeDisplay.payload,
    });
    if (!display) return state;
    const displayCard = mapChatDisplayCard(display);
    const deferredAction = mapDisplayDeferredAction(display);
    const miraDraft = mapLiveMiraDraft(display);
    return {
      ...state,
      activeDisplay: display,
      messages: miraDraft
        ? updateLatestAssistantMiraDraft(state.messages, miraDraft.card)
        : displayCard
          ? updateLatestAssistantDisplay(state.messages, displayCard)
          : state.messages,
      ...(deferredAction
        ? {
            deferredActions: {
              ...state.deferredActions,
              [deferredAction.actionKey]: deferredAction,
            },
          }
        : {}),
      ...(miraDraft?.action
        ? {
            miraDraftActions: {
              ...state.miraDraftActions,
              [miraDraft.action.actionKey]: miraDraft.action,
            },
          }
        : {}),
    };
  }

  if (
    eventType === "clarification_required" ||
    eventType === "confirmation_required" ||
    eventType === "approval_required"
  ) {
    const mapped = mapDeferredRequest(eventType, payload);
    if (!mapped) return state;
    return {
      ...state,
      messages: updateLatestAssistantDisplay(state.messages, mapped.card),
      ...(mapped.action
        ? {
            deferredActions: {
              ...state.deferredActions,
              [mapped.action.actionKey]: mapped.action,
            },
          }
        : {}),
    };
  }

  if (eventType === "artifact") {
    const displayCard = mapArtifactCard(payload);
    if (!displayCard) return state;
    return {
      ...state,
      messages: updateLatestAssistantDisplay(state.messages, displayCard),
    };
  }

  if (
    eventType === "draft_created" ||
    eventType === "draft_updated" ||
    eventType === "draft_confirmed" ||
    eventType === "draft_cancelled"
  ) {
    const objectType = asTrimmedString(payload.objectType) || "操作";
    const labels = {
      draft_created: ["confirmation", "草稿已创建", "等待确认"] as const,
      draft_updated: ["info", "草稿已更新", "已更新"] as const,
      draft_confirmed: ["result", "草稿已确认", "已完成"] as const,
      draft_cancelled: ["warning", "草稿已取消", "已取消"] as const,
    };
    const [kind, title, statusLabel] = labels[eventType];
    return {
      ...state,
      messages: updateLatestAssistantDisplay(state.messages, {
        kind,
        title,
        summary: objectType,
        statusLabel,
      }),
    };
  }

  if (eventType === "structured_payload") {
    const structuredPayload = asRecord(payload.structuredPayload);
    const data = asRecord(structuredPayload?.data);
    if (!data) return state;
    const title = asTrimmedString(data.title) || "结构化结果";
    const summaryItems = asStringList(data.summary);
    const links = collectDisplayLinks(data);
    return {
      ...state,
      messages: updateLatestAssistantDisplay(state.messages, {
        kind: "result",
        title,
        ...(summaryItems.length > 0
          ? { summary: summaryItems.join("\n") }
          : {}),
        ...(links.length > 0 ? { links } : {}),
        statusLabel: "已完成",
      }),
    };
  }

  if (eventType === "module_handoff") {
    const handoff = asRecord(payload.handoff);
    if (!handoff) return state;
    const target =
      asTrimmedString(handoff.targetModule) ||
      asTrimmedString(handoff.module) ||
      "后续模块";
    return {
      ...state,
      messages: updateLatestAssistantDisplay(state.messages, {
        kind: "info",
        title: "任务已转交",
        summary: `将由${target}继续处理`,
        statusLabel: "已转交",
      }),
    };
  }

  if (eventType === "task_trace") {
    const step = asRecord(payload.step);
    const id = typeof step?.id === "string" ? step.id : "";
    const rawStatus = typeof step?.status === "string" ? step.status : "";
    const status: SearchStep["status"] =
      rawStatus === "running" ||
      rawStatus === "completed" ||
      rawStatus === "failed" ||
      rawStatus === "skipped"
        ? rawStatus
        : undefined;
    const category = typeof step?.category === "string" ? step.category : "";
    const sequence =
      typeof step?.sequence === "number" && Number.isFinite(step.sequence)
        ? step.sequence
        : undefined;
    if (
      sequence !== undefined &&
      state.lastTaskTraceSequence !== undefined &&
      sequence <= state.lastTaskTraceSequence
    ) {
      return state;
    }

    const label =
      typeof step?.title === "string"
        ? step.title
        : typeof step?.detail === "string"
          ? step.detail
          : "正在处理任务";
    const sequenceState =
      sequence === undefined ? {} : { lastTaskTraceSequence: sequence };
    const nextSearchStep: SearchStep = {
      id: id || `task-trace:${sequence ?? state.searchSteps.length}`,
      type: mapTaskTraceType(category),
      label,
      status,
      ...(typeof step?.detail === "string" && step.detail.trim()
        ? { detail: step.detail.trim() }
        : {}),
      ...(typeof step?.resultCount === "number" &&
      Number.isFinite(step.resultCount)
        ? { resultCount: step.resultCount }
        : {}),
    };

    if (isWaitingForUser(state.runStatus)) {
      return {
        ...state,
        ...sequenceState,
        searchSteps: [nextSearchStep],
      };
    }

    if (status === "failed") {
      return {
        ...state,
        ...sequenceState,
        activeTaskTraceId: undefined,
        statusPhase: "failed",
        statusLabel: undefined,
        statusVisible: true,
        searchSteps: [nextSearchStep],
      };
    }

    if (status !== "running") {
      return {
        ...state,
        ...sequenceState,
        activeTaskTraceId: undefined,
        statusPhase: state.hasReceivedAssistantChunk
          ? "generating"
          : "analyzing",
        statusLabel: undefined,
        statusVisible: true,
        searchSteps: [nextSearchStep],
      };
    }

    return {
      ...state,
      ...sequenceState,
      activeTaskTraceId: id || undefined,
      statusPhase: mapTaskTracePhase(
        category,
        state.hasReceivedAssistantChunk,
      ),
      statusLabel: undefined,
      statusVisible: true,
      searchSteps: [nextSearchStep],
    };
  }

  if (eventType === "status" && typeof payload.status === "string") {
    const runStatus = payload.status as AgentRunStatus;
    if (runStatus === "queued") {
      return {
        ...state,
        runStatus,
        statusPhase: "queued",
        statusLabel: undefined,
        statusVisible: true,
      };
    }
    if (runStatus === "running") {
      const shouldResetPhase =
        state.runStatus === "queued" ||
        state.runStatus === "awaiting_clarification" ||
        state.runStatus === "awaiting_confirmation" ||
        state.runStatus === "awaiting_approval";
      return {
        ...state,
        runStatus,
        statusPhase: shouldResetPhase
          ? state.hasReceivedAssistantChunk
            ? "generating"
            : "analyzing"
          : state.statusPhase,
        statusLabel: shouldResetPhase ? undefined : state.statusLabel,
        statusVisible: true,
      };
    }
    if (
      runStatus === "awaiting_clarification" ||
      runStatus === "awaiting_confirmation" ||
      runStatus === "awaiting_approval"
    ) {
      return {
        ...state,
        runStatus,
        statusPhase: runStatus,
        statusLabel: undefined,
        statusVisible: true,
        activeTaskTraceId: undefined,
      };
    }
    if (runStatus === "failed") {
      return {
        ...state,
        runStatus,
        statusPhase: "failed",
        statusLabel: undefined,
        statusVisible: true,
        activeTaskTraceId: undefined,
      };
    }
    if (runStatus === "completed" || runStatus === "cancelled") {
      return {
        ...state,
        runStatus,
        statusVisible: false,
        statusLabel: undefined,
        activeTaskTraceId: undefined,
        searchSteps: [],
      };
    }
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
      statusLabel: undefined,
      statusVisible: true,
      hasReceivedAssistantChunk: true,
    };
  }

  if (eventType === "warning" && typeof payload.message === "string") {
    const searchStep: SearchStep = {
      id: `warning:${state.searchSteps.length}`,
      type: "action",
      label: payload.message,
      status: "warning",
    };
    return {
      ...state,
      statusPhase: "warning",
      statusLabel: undefined,
      statusVisible: true,
      activeTaskTraceId: undefined,
      searchSteps: [searchStep],
    };
  }

  if (eventType === "done") {
    const waiting =
      state.runStatus === "awaiting_clarification" ||
      state.runStatus === "awaiting_confirmation" ||
      state.runStatus === "awaiting_approval";
    return waiting
      ? state
      : {
          ...state,
          statusVisible: false,
          statusLabel: undefined,
          activeTaskTraceId: undefined,
        };
  }

  if (eventType === "error") {
    return {
      ...state,
      statusPhase: "failed",
      statusLabel: undefined,
      statusVisible: true,
      activeTaskTraceId: undefined,
      searchSteps: [{
        id: "stream:error",
        type: "action",
        label: "处理失败",
        status: "failed",
      }],
      error: typeof payload.error === "string" ? payload.error : "对话失败",
    };
  }

  return state;
}
