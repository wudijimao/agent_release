import assert from "node:assert/strict";
import test from "node:test";

import { ApiError } from "./api-error";
import { isPayloadTooLargeError } from "./upload-errors";

test("payload-too-large detection covers status and common proxy messages", () => {
  assert.equal(
    isPayloadTooLargeError(new ApiError("HTTP_413", "Request failed", 413)),
    true,
  );
  assert.equal(isPayloadTooLargeError(new Error("413 Request Entity Too Large")), true);
  assert.equal(isPayloadTooLargeError(new Error("Payload Too Large")), true);
  assert.equal(isPayloadTooLargeError(new Error("HTTP 500")), false);
});
