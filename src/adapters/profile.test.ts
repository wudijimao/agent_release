import assert from "node:assert/strict";
import test from "node:test";

import type { ApiClient } from "@/lib/api";

import { updateCurrentUserAvatar, validateAvatarFile } from "./profile";

test("avatar validation matches the server type and size contract", () => {
  assert.equal(validateAvatarFile({ size: 128, type: "image/png" }), "");
  assert.equal(validateAvatarFile({ size: 128, type: "image/jpeg" }), "");
  assert.equal(validateAvatarFile({ size: 128, type: "image/webp" }), "");
  assert.equal(
    validateAvatarFile({ size: 128, type: "image/gif" }),
    "头像仅支持 PNG、JPG、WEBP",
  );
  assert.equal(
    validateAvatarFile({ size: 2 * 1024 * 1024 + 1, type: "image/png" }),
    "头像大小不能超过 2MB",
  );
});

test("avatar update sends one multipart avatar field to the authenticated endpoint", async () => {
  const calls: Array<{ path: string; body: unknown }> = [];
  const api = {
    async patch<T>(path: string, body?: unknown) {
      calls.push({ path, body });
      return { user: { id: "user-1", avatarUrl: "https://example.test/avatar.png" } } as T;
    },
  } as Pick<ApiClient, "patch">;
  const file = new File(["avatar"], "avatar.png", { type: "image/png" });

  const response = await updateCurrentUserAvatar(api, file);

  assert.equal(response.user.avatarUrl, "https://example.test/avatar.png");
  assert.equal(calls.length, 1);
  assert.equal(calls[0]?.path, "/api/auth/me/avatar");
  assert.ok(calls[0]?.body instanceof FormData);
  const sentFile = (calls[0]?.body as FormData).get("avatar");
  assert.ok(sentFile instanceof File);
  assert.equal(sentFile.name, "avatar.png");
});
