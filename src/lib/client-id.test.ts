import assert from "node:assert/strict";
import test from "node:test";

import { createClientId } from "./client-id";

const UUID_V4_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

test("client ids prefer crypto.randomUUID when available", () => {
  const id = createClientId("next", {
    randomUUID: () => "11111111-1111-4111-8111-111111111111",
  });
  assert.equal(id, "next-11111111-1111-4111-8111-111111111111");
});

test("client ids remain valid when randomUUID is unavailable", () => {
  const id = createClientId("", {
    getRandomValues: (values) => {
      values.fill(1);
      return values;
    },
  });
  assert.match(id, UUID_V4_PATTERN);
});

test("client ids fall back when the Web Crypto API is unavailable", () => {
  assert.match(createClientId("block", {}), new RegExp(`^block-${UUID_V4_PATTERN.source.slice(1)}`));
});
