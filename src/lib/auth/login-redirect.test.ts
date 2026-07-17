import assert from "node:assert/strict";
import test from "node:test";

import { resolveLoginDestination } from "./login-redirect";

test("login destination preserves safe internal paths", () => {
  assert.equal(
    resolveLoginDestination("/chat/session-1?panel=files#result"),
    "/chat/session-1?panel=files#result",
  );
});

test("login destination rejects external, ambiguous, encoded, and recursive targets", () => {
  const unsafeValues = [
    undefined,
    ["/chat/one", "/chat/two"],
    "https://example.com/steal",
    "//example.com/steal",
    "/\\example.com/steal",
    "/%2Fexample.com/steal",
    "/%255Cexample.com/steal",
    "/login",
    "/chat/%E0%A4%A",
  ];

  for (const value of unsafeValues) {
    assert.equal(resolveLoginDestination(value), "/chat/new");
  }
});
