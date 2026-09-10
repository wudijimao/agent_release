import assert from "node:assert/strict";
import test from "node:test";

import {
  ChatStreamControllerRegistry,
  removeChatStreamMemorySnapshot,
  storeChatStreamMemorySnapshot,
  type ChatStreamMemorySnapshot,
} from "./chat-stream-memory";

function createSnapshot(sessionId: string): ChatStreamMemorySnapshot {
  return {
    sessionId,
    state: {
      sessionId,
      messages: [],
      statusPhase: "analyzing",
      statusVisible: true,
      searchSteps: [],
      hasReceivedAssistantChunk: false,
    },
    isStreaming: true,
  };
}

test("chat stream memory keeps snapshots for multiple conversations", () => {
  const first = createSnapshot("session-1");
  const second = createSnapshot("session-2");
  const snapshots = storeChatStreamMemorySnapshot(
    storeChatStreamMemorySnapshot({}, first),
    second,
  );

  assert.equal(snapshots["session-1"], first);
  assert.equal(snapshots["session-2"], second);

  const remaining = removeChatStreamMemorySnapshot(snapshots, "session-1");
  assert.equal(remaining["session-1"], undefined);
  assert.equal(remaining["session-2"], second);
});

test("chat stream controllers are cancelled and released per conversation", () => {
  const registry = new ChatStreamControllerRegistry();
  const first = new AbortController();
  const second = new AbortController();
  registry.register("session-1", first);
  registry.register("session-2", second);

  assert.equal(registry.cancel("session-1"), true);
  assert.equal(first.signal.aborted, true);
  assert.equal(second.signal.aborted, false);

  const replacement = new AbortController();
  registry.register("session-2", replacement);
  assert.equal(second.signal.aborted, true);
  registry.release("session-2", second);
  assert.equal(registry.cancel("session-2"), true);
  assert.equal(replacement.signal.aborted, true);
});
