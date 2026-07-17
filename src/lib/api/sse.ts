import {
  BIOAGENT_REQUEST_ID_HEADER,
  LAB_ID_HEADER,
  type ChatSendRequest,
  type ChatStreamEnvelope,
} from "@bioagent/shared";

import { ApiError } from "./api-error";

export interface StreamChatOptions {
  fetch?: typeof fetch;
  signal?: AbortSignal;
  labId?: string | null;
  connectTimeoutMs?: number;
  idleTimeoutMs?: number;
  onUnauthorized?: (error: ApiError) => void;
}

export const CHAT_STREAM_CONNECT_TIMEOUT_MS = 30_000;
export const CHAT_STREAM_IDLE_TIMEOUT_MS = 120_000;

export type ChatStreamTimeoutPhase = "connect" | "idle";

export class ChatStreamTimeoutError extends Error {
  readonly phase: ChatStreamTimeoutPhase;

  constructor(phase: ChatStreamTimeoutPhase) {
    super(
      phase === "connect"
        ? "Chat stream connection timed out"
        : "Chat stream became idle",
    );
    this.name = "ChatStreamTimeoutError";
    this.phase = phase;
  }
}

function createRequestId() {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return `next-chat-${globalThis.crypto.randomUUID()}`;
  }

  return `next-chat-${Date.now().toString(36)}`;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value !== null
    ? (value as Record<string, unknown>)
    : null;
}

export function parseSseEventBlock(block: string): ChatStreamEnvelope | null {
  let type = "message";
  const dataLines: string[] = [];

  for (const line of block.split(/\r?\n/)) {
    if (!line || line.startsWith(":")) continue;

    const separatorIndex = line.indexOf(":");
    const field = separatorIndex >= 0 ? line.slice(0, separatorIndex) : line;
    const rawValue = separatorIndex >= 0 ? line.slice(separatorIndex + 1) : "";
    const value = rawValue.startsWith(" ") ? rawValue.slice(1) : rawValue;

    if (field === "event") type = value;
    if (field === "data") dataLines.push(value);
  }

  if (dataLines.length === 0) return null;

  const dataText = dataLines.join("\n");
  try {
    return { type, data: JSON.parse(dataText) as unknown };
  } catch {
    return { type, data: dataText };
  }
}

async function createStreamError(response: Response, requestId: string) {
  const payload = await response
    .clone()
    .json()
    .catch(() => null);
  const record = asRecord(payload);
  const errorRecord = asRecord(record?.error);
  const code =
    typeof errorRecord?.code === "string" ? errorRecord.code : "STREAM_FAILED";
  const message =
    typeof errorRecord?.message === "string"
      ? errorRecord.message
      : `Stream failed: ${response.status}`;

  return new ApiError(code, message, response.status, errorRecord?.details, requestId);
}

export async function* readSseResponse(
  response: Response,
  options: {
    requestId: string;
    idleTimeoutMs?: number;
    onIdleTimeout?: (error: ChatStreamTimeoutError) => void;
    onUnauthorized?: (error: ApiError) => void;
  },
): AsyncGenerator<ChatStreamEnvelope> {
  if (!response.ok) {
    const error = await createStreamError(response, options.requestId);
    if (response.status === 401) options.onUnauthorized?.(error);
    throw error;
  }

  if (!response.body) {
    throw new ApiError(
      "STREAM_BODY_MISSING",
      "Chat stream response has no body",
      response.status,
      undefined,
      options.requestId,
    );
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  const readNextChunk = () => {
    const timeoutMs = options.idleTimeoutMs;
    if (!timeoutMs || timeoutMs <= 0) return reader.read();

    return new Promise<ReadableStreamReadResult<Uint8Array>>((resolve, reject) => {
      const timeout = globalThis.setTimeout(() => {
        const error = new ChatStreamTimeoutError("idle");
        options.onIdleTimeout?.(error);
        void reader.cancel(error).catch(() => undefined);
        reject(error);
      }, timeoutMs);

      reader.read().then(resolve, reject).finally(() => {
        globalThis.clearTimeout(timeout);
      });
    });
  };

  while (true) {
    const { done, value } = await readNextChunk();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const blocks = buffer.split(/\r?\n\r?\n/);
    buffer = blocks.pop() ?? "";

    for (const block of blocks) {
      const event = parseSseEventBlock(block);
      if (event) yield event;
    }
  }

  buffer += decoder.decode();
  if (buffer.trim()) {
    const event = parseSseEventBlock(buffer);
    if (event) yield event;
  }
}

export async function* streamChat(
  request: ChatSendRequest,
  options: StreamChatOptions = {},
): AsyncGenerator<ChatStreamEnvelope> {
  const requestId = createRequestId();
  const controller = new AbortController();
  const forwardAbort = () => controller.abort(options.signal?.reason);
  if (options.signal?.aborted) {
    forwardAbort();
  } else {
    options.signal?.addEventListener("abort", forwardAbort, { once: true });
  }
  const headers = new Headers({
    Accept: "text/event-stream",
    "Content-Type": "application/json",
    [BIOAGENT_REQUEST_ID_HEADER]: requestId,
  });
  if (options.labId) headers.set(LAB_ID_HEADER, options.labId);

  const connectTimeoutMs =
    options.connectTimeoutMs ?? CHAT_STREAM_CONNECT_TIMEOUT_MS;
  let connectTimeout: ReturnType<typeof globalThis.setTimeout> | undefined;

  try {
    const fetchPromise = (options.fetch ?? globalThis.fetch)("/api/chat", {
      method: "POST",
      headers,
      body: JSON.stringify(request),
      credentials: "include",
      signal: controller.signal,
    });
    const response = await Promise.race([
      fetchPromise,
      new Promise<never>((_resolve, reject) => {
        if (connectTimeoutMs <= 0) return;
        connectTimeout = globalThis.setTimeout(() => {
          const error = new ChatStreamTimeoutError("connect");
          controller.abort(error);
          reject(error);
        }, connectTimeoutMs);
      }),
    ]);

    if (connectTimeout) globalThis.clearTimeout(connectTimeout);

    yield* readSseResponse(response, {
      requestId,
      idleTimeoutMs: options.idleTimeoutMs ?? CHAT_STREAM_IDLE_TIMEOUT_MS,
      onIdleTimeout: (error) => controller.abort(error),
      onUnauthorized: options.onUnauthorized,
    });
  } finally {
    if (connectTimeout) globalThis.clearTimeout(connectTimeout);
    options.signal?.removeEventListener("abort", forwardAbort);
  }
}
