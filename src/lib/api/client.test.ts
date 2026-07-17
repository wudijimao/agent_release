import assert from "node:assert/strict";
import test from "node:test";

import {
  BIOAGENT_REQUEST_ID_HEADER,
  FALLBACK_REQUEST_ID_HEADER,
  LAB_ID_HEADER,
} from "@bioagent/shared";

import { ApiError } from "./api-error";
import { createApiClient } from "./client";

test("request sends credentials, active lab, and a trace id", async () => {
  let capturedUrl = "";
  let capturedInit: RequestInit | undefined;
  const client = createApiClient({
    baseUrl: "https://api.example.test/",
    getLabId: () => "lab-1",
    fetch: async (input, init) => {
      capturedUrl = String(input);
      capturedInit = init;
      return Response.json({ data: { ok: true } });
    },
  });

  const result = await client.get<{ ok: boolean }>("/api/example");
  const headers = new Headers(capturedInit?.headers);

  assert.deepEqual(result, { ok: true });
  assert.equal(capturedUrl, "https://api.example.test/api/example");
  assert.equal(capturedInit?.credentials, "include");
  assert.equal(headers.get(LAB_ID_HEADER), "lab-1");
  assert.match(headers.get(BIOAGENT_REQUEST_ID_HEADER) || "", /^next-/);
});

test("request preserves an existing fallback trace id", async () => {
  const client = createApiClient({
    baseUrl: "https://api.example.test",
    fetch: async (_input, init) => {
      const headers = new Headers(init?.headers);
      assert.equal(headers.get(BIOAGENT_REQUEST_ID_HEADER), "caller-request-id");
      return Response.json({ data: null });
    },
  });

  await client.get("/api/example", {
    headers: { [FALLBACK_REQUEST_ID_HEADER]: "caller-request-id" },
  });
});

test("request converts the server error envelope into ApiError", async () => {
  const client = createApiClient({
    baseUrl: "https://api.example.test",
    fetch: async () =>
      Response.json(
        {
          error: {
            code: "LAB_ACCESS_DENIED",
            message: "No access",
            details: { labId: "lab-2" },
          },
        },
        {
          status: 403,
          headers: { [BIOAGENT_REQUEST_ID_HEADER]: "server-request-id" },
        },
      ),
  });

  await assert.rejects(
    () => client.get("/api/example"),
    (error: unknown) => {
      assert.ok(error instanceof ApiError);
      assert.equal(error.code, "LAB_ACCESS_DENIED");
      assert.equal(error.status, 403);
      assert.equal(error.requestId, "server-request-id");
      assert.deepEqual(error.details, { labId: "lab-2" });
      return true;
    },
  );
});

test("401 handling is injected and can be disabled per request", async () => {
  const unauthorizedPaths: string[] = [];
  const client = createApiClient({
    baseUrl: "https://api.example.test",
    onUnauthorized: ({ path }) => unauthorizedPaths.push(path),
    fetch: async () =>
      Response.json(
        { error: { code: "UNAUTHORIZED", message: "Login required" } },
        { status: 401 },
      ),
  });

  await assert.rejects(() => client.get("/api/private"), ApiError);
  await assert.rejects(
    () => client.get("/api/session", { handleUnauthorized: false }),
    ApiError,
  );

  assert.deepEqual(unauthorizedPaths, ["/api/private"]);
});

test("request forwards cancellation without wrapping the abort error", async () => {
  const controller = new AbortController();
  const abortError = new Error("aborted");
  abortError.name = "AbortError";
  const client = createApiClient({
    baseUrl: "https://api.example.test",
    fetch: async (_input, init) => {
      assert.equal(init?.signal, controller.signal);
      throw abortError;
    },
  });

  await assert.rejects(
    () => client.get("/api/example", { signal: controller.signal }),
    (error: unknown) => error === abortError,
  );
});

test("request accepts the raw health response outside the API envelope", async () => {
  const client = createApiClient({
    baseUrl: "https://api.example.test",
    fetch: async () => Response.json({ status: "ok" }),
  });

  assert.deepEqual(await client.get<{ status: string }>("/health"), {
    status: "ok",
  });
});
