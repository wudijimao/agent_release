import assert from "node:assert/strict";
import test from "node:test";

import type { CurrentUserResponse } from "@bioagent/shared";

import { ApiError } from "@/lib/api";

import {
  authenticatedSessionState,
  buildLoginHref,
  failedSessionState,
} from "./session-state";

const session: CurrentUserResponse = {
  user: {
    id: "user-1",
    email: "researcher@example.test",
    name: "Researcher",
    createdAt: "2026-07-16T00:00:00.000Z",
  },
  labs: [],
  activeLab: null,
  activeLabRole: null,
};

test("session state distinguishes authenticated, unauthorized, and server errors", () => {
  assert.equal(authenticatedSessionState(session).status, "authenticated");

  const unauthorized = failedSessionState(
    new ApiError("UNAUTHORIZED", "Login required", 401),
  );
  assert.equal(unauthorized.status, "unauthenticated");
  assert.equal(unauthorized.error, null);

  const unavailable = failedSessionState(
    new ApiError("INTERNAL_ERROR", "Unavailable", 503),
  );
  assert.equal(unavailable.status, "error");
  assert.equal(unavailable.error?.status, 503);
});

test("login redirect preserves the full current location", () => {
  assert.equal(
    buildLoginHref("/chat/session-1", "?panel=files"),
    "/login?next=%2Fchat%2Fsession-1%3Fpanel%3Dfiles",
  );
  assert.equal(buildLoginHref("/login"), null);
  assert.equal(buildLoginHref("/register"), null);
});
