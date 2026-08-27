import assert from "node:assert/strict";
import test from "node:test";

import { proxyStorageRequest, resolveStorageProxyConfig } from "./proxy";

test("storage proxy uses the stable service domain by default", () => {
  assert.deepEqual(resolveStorageProxyConfig({}), {
    storageUrl: "https://helialab.cn",
    publicHost: "helialab.cn",
  });
});

test("storage proxy only changes its upstream when explicitly configured", () => {
  assert.deepEqual(
    resolveStorageProxyConfig({
      storageUrl: "http://storage.internal:9000/",
      publicStorageUrl: "http://39.106.18.219/",
    }),
    {
      storageUrl: "http://storage.internal:9000",
      publicHost: "39.106.18.219",
    },
  );
});

test("storage proxy preserves path, query, method, body, and signed host", async () => {
  let capturedUrl = "";
  let capturedInit: RequestInit | undefined;
  const request = new Request(
    "http://localhost:3000/bioagent-docs/avatars/user%201/a.png?signature=abc",
    { method: "PUT", headers: { "Content-Type": "image/png" }, body: "image" },
  );

  const response = await proxyStorageRequest(request, {
    path: ["avatars", "user 1", "a.png"],
    storageUrl: "http://127.0.0.1:9100",
    publicHost: "39.106.18.219",
    fetch: async (input, init) => {
      capturedUrl = String(input);
      capturedInit = init;
      return new Response("ok", { status: 200, headers: { ETag: "avatar" } });
    },
  });

  assert.equal(
    capturedUrl,
    "http://127.0.0.1:9100/bioagent-docs/avatars/user%201/a.png?signature=abc",
  );
  assert.equal(capturedInit?.method, "PUT");
  assert.equal(new Headers(capturedInit?.headers).get("host"), "39.106.18.219");
  assert.equal(await new Response(capturedInit?.body).text(), "image");
  assert.equal(response.headers.get("etag"), "avatar");
  assert.equal(await response.text(), "ok");
});
