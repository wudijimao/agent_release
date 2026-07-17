import assert from "node:assert/strict";
import test from "node:test";

import {
  buildChatProxyRequestHeaders,
  buildChatProxyResponseHeaders,
  proxyChatRequest,
  resolveChatBackendUrl,
} from "./proxy";

test("resolveChatBackendUrl uses explicit configuration before the shared default", () => {
  assert.equal(
    resolveChatBackendUrl({ backendUrl: "http://server/" }),
    "http://server/api/chat",
  );
  assert.equal(
    resolveChatBackendUrl({}),
    "http://39.106.18.219/api/chat",
  );
});

test("proxy header policies preserve auth context and disable stream buffering", () => {
  const requestHeaders = buildChatProxyRequestHeaders(
    new Headers({
      cookie: "session=1",
      "x-lab-id": "lab-1",
      "content-type": "application/json",
      connection: "keep-alive",
    }),
  );
  assert.equal(requestHeaders.get("cookie"), "session=1");
  assert.equal(requestHeaders.get("x-lab-id"), "lab-1");
  assert.equal(requestHeaders.get("accept"), "text/event-stream");
  assert.equal(requestHeaders.get("accept-encoding"), "identity");
  assert.equal(requestHeaders.get("connection"), null);

  const responseHeaders = buildChatProxyResponseHeaders(
    new Headers({
      "content-type": "text/event-stream",
      "content-encoding": "gzip",
      "content-length": "100",
      "x-upstream": "yes",
    }),
  );
  assert.equal(responseHeaders.get("content-encoding"), null);
  assert.equal(responseHeaders.get("content-length"), null);
  assert.equal(responseHeaders.get("cache-control"), "no-cache, no-transform");
  assert.equal(responseHeaders.get("x-accel-buffering"), "no");
  assert.equal(responseHeaders.get("x-upstream"), "yes");
});

test("proxyChatRequest forwards the body and streams the upstream response", async () => {
  const calls: Array<{ url: string; init?: RequestInit }> = [];
  const fetchMock: typeof fetch = async (input, init) => {
    calls.push({ url: String(input), init });
    return new Response('event: text\ndata: {"content":"A"}\n\n', {
      status: 200,
      headers: { "Content-Type": "text/event-stream" },
    });
  };
  const request = new Request("http://localhost/api/chat", {
    method: "POST",
    headers: { cookie: "session=1", "Content-Type": "application/json" },
    body: '{"message":"hello"}',
  });

  const response = await proxyChatRequest(request, {
    backendUrl: "http://server/api/chat",
    fetch: fetchMock,
  });

  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "http://server/api/chat");
  assert.equal(calls[0].init?.body, '{"message":"hello"}');
  assert.equal(calls[0].init?.signal, request.signal);
  assert.equal(response.headers.get("x-accel-buffering"), "no");
  assert.equal(await response.text(), 'event: text\ndata: {"content":"A"}\n\n');
});

test("proxyChatRequest converts connection failures into a stable 502 envelope", async () => {
  const response = await proxyChatRequest(
    new Request("http://localhost/api/chat", { method: "POST", body: "{}" }),
    {
      backendUrl: "http://server/api/chat",
      fetch: async () => {
        throw new Error("offline");
      },
    },
  );

  assert.equal(response.status, 502);
  assert.deepEqual(await response.json(), {
    error: {
      code: "STREAM_PROXY_FAILED",
      message: "Chat stream proxy failed",
    },
  });
});
