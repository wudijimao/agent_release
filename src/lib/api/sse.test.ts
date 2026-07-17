import assert from "node:assert/strict";
import test from "node:test";

import { ApiError } from "./api-error";
import {
  ChatStreamTimeoutError,
  parseSseEventBlock,
  readSseResponse,
  streamChat,
} from "./sse";

test("parseSseEventBlock parses JSON, multiline data, comments, and plain text", () => {
  assert.deepEqual(
    parseSseEventBlock(': keepalive\nevent: text\ndata: {"type":"text","content":"A"}'),
    { type: "text", data: { type: "text", content: "A" } },
  );
  assert.deepEqual(parseSseEventBlock("event: note\ndata: first\ndata: second"), {
    type: "note",
    data: "first\nsecond",
  });
  assert.equal(parseSseEventBlock("event: empty"), null);
});

test("readSseResponse preserves events split across network chunks", async () => {
  const encoder = new TextEncoder();
  const response = new Response(
    new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode('event: meta\ndata: {"sessionId":"s-1"}\n'));
        controller.enqueue(encoder.encode('\nevent: text\ndata: {"content":"Hello"}\n\n'));
        controller.close();
      },
    }),
    { status: 200, headers: { "Content-Type": "text/event-stream" } },
  );

  const events = [];
  for await (const event of readSseResponse(response, { requestId: "request-1" })) {
    events.push(event);
  }

  assert.deepEqual(events, [
    { type: "meta", data: { sessionId: "s-1" } },
    { type: "text", data: { content: "Hello" } },
  ]);
});

test("readSseResponse exposes structured HTTP failures and unauthorized callback", async () => {
  let unauthorizedError: ApiError | null = null;
  const response = Response.json(
    { error: { code: "UNAUTHORIZED", message: "请先登录" } },
    { status: 401 },
  );

  await assert.rejects(
    async () => {
      for await (const _event of readSseResponse(response, {
        requestId: "request-401",
        onUnauthorized(error) {
          unauthorizedError = error;
        },
      })) {
        void _event;
      }
    },
    (error: unknown) =>
      error instanceof ApiError &&
      error.code === "UNAUTHORIZED" &&
      error.status === 401,
  );
  assert.ok(unauthorizedError instanceof ApiError);
});

test("streamChat sends the shared request contract to the local streaming proxy", async () => {
  const calls: Array<{ url: string; init?: RequestInit }> = [];
  const fetchMock: typeof fetch = async (input, init) => {
    calls.push({ url: String(input), init });
    return new Response('event: text\ndata: {"content":"A"}\n\n', { status: 200 });
  };

  const events = [];
  for await (const event of streamChat(
    { message: "hello", sessionId: "session-1" },
    { fetch: fetchMock, labId: "lab-1" },
  )) {
    events.push(event);
  }

  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "/api/chat");
  assert.equal(calls[0].init?.method, "POST");
  assert.equal(new Headers(calls[0].init?.headers).get("X-Lab-Id"), "lab-1");
  assert.equal(calls[0].init?.body, '{"message":"hello","sessionId":"session-1"}');
  assert.deepEqual(events, [{ type: "text", data: { content: "A" } }]);
});

test("streamChat aborts a connection that does not return response headers", async () => {
  let upstreamSignal: AbortSignal | undefined;
  const fetchMock: typeof fetch = async (_input, init) => {
    upstreamSignal = init?.signal ?? undefined;
    return await new Promise<Response>((_resolve, reject) => {
      upstreamSignal?.addEventListener(
        "abort",
        () => reject(upstreamSignal?.reason),
        { once: true },
      );
    });
  };

  await assert.rejects(
    async () => {
      for await (const _event of streamChat(
        { message: "hello" },
        { fetch: fetchMock, connectTimeoutMs: 10, idleTimeoutMs: 0 },
      )) {
        void _event;
      }
    },
    (error: unknown) =>
      error instanceof ChatStreamTimeoutError && error.phase === "connect",
  );
  assert.equal(upstreamSignal?.aborted, true);
});

test("streamChat resets an idle timer around response body reads", async () => {
  let upstreamSignal: AbortSignal | undefined;
  let streamCancelled = false;
  const fetchMock: typeof fetch = async (_input, init) => {
    upstreamSignal = init?.signal ?? undefined;
    return new Response(
      new ReadableStream({
        cancel() {
          streamCancelled = true;
        },
      }),
      { status: 200, headers: { "Content-Type": "text/event-stream" } },
    );
  };

  await assert.rejects(
    async () => {
      for await (const _event of streamChat(
        { message: "hello" },
        { fetch: fetchMock, connectTimeoutMs: 0, idleTimeoutMs: 10 },
      )) {
        void _event;
      }
    },
    (error: unknown) =>
      error instanceof ChatStreamTimeoutError && error.phase === "idle",
  );
  assert.equal(upstreamSignal?.aborted, true);
  assert.equal(streamCancelled, true);
});

test("streamChat preserves an explicit caller cancellation", async () => {
  const controller = new AbortController();
  const fetchMock: typeof fetch = async (_input, init) =>
    await new Promise<Response>((_resolve, reject) => {
      init?.signal?.addEventListener(
        "abort",
        () => reject(init.signal?.reason),
        { once: true },
      );
    });

  const streamPromise = (async () => {
    for await (const _event of streamChat(
      { message: "hello" },
      {
        fetch: fetchMock,
        signal: controller.signal,
        connectTimeoutMs: 1_000,
      },
    )) {
      void _event;
    }
  })();
  const cancellation = new Error("cancelled by user");
  controller.abort(cancellation);

  await assert.rejects(streamPromise, (error: unknown) => error === cancellation);
});
