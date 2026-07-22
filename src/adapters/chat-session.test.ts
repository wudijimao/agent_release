import assert from "node:assert/strict";
import test from "node:test";

import type { ChatHistoryDetailResponse } from "@bioagent/shared";

import { ChatStreamTimeoutError } from "@/lib/api";

import {
  beginChatStream,
  buildChatRegeneratePayload,
  ChatStreamDisconnectedError,
  getChatStreamErrorMessage,
  interruptChatStream,
  loadChatSession,
  mapChatAttachmentRef,
  mapChatContextRef,
  mapChatHistoryDetail,
  reconcileChatStream,
  reduceChatStreamEvent,
  shouldReconcileChatStreamFailure,
  updateLatestUserMessageAttachments,
} from "./chat-session";

const detail: ChatHistoryDetailResponse = {
  sessionId: "session-1",
  session: { id: "session-1", title: "  实验分析  " },
  messages: [
    {
      id: "system-1",
      sessionId: "session-1",
      role: "system",
      content: "hidden",
      createdAt: "2026-07-16T00:00:00Z",
    },
    {
      id: "user-1",
      sessionId: "session-1",
      role: "user",
      content: "问题",
      attachmentRefs: [
        { id: "file-1", name: "result.csv", mimeType: "text/csv", kind: "csv" },
      ],
      contextRefsSnapshot: [
        {
          type: "attachment",
          id: "file-1",
          title: "result.csv",
          source: "upload",
        },
        {
          type: "mira_node",
          id: "mira-node-1",
          title: "CRISPR screen",
          source: "picker",
        },
      ],
      createdAt: "2026-07-16T00:00:01Z",
    },
    {
      id: "assistant-1",
      sessionId: "session-1",
      role: "assistant",
      content: "回答",
      createdAt: "2026-07-16T00:00:02Z",
    },
  ],
  runs: [],
  pendingMcpToolCalls: [],
  attachments: [],
  currentContextRefs: null,
};

test("mapChatHistoryDetail produces the UI view model and hides system messages", () => {
  assert.deepEqual(mapChatHistoryDetail(detail), {
    id: "session-1",
    title: "实验分析",
    messageIds: ["system-1", "user-1", "assistant-1"],
    messages: [
      {
        role: "user",
        content: "问题",
        attachments: [
          {
            id: "file-1",
            name: "result.csv",
            mimeType: "text/csv",
            status: "ready",
          },
        ],
        references: [
          {
            id: "mira_node:mira-node-1",
            type: "doc",
            label: "CRISPR screen",
            sourceId: "mira-node-1",
          },
        ],
      },
      { role: "assistant", content: "回答", attachments: [] },
    ],
  });
});

test("context mapper restores named Mira references and ignores attachment duplicates", () => {
  assert.deepEqual(
    mapChatContextRef({
      type: "mira_node",
      id: "node-1",
      summary: "Mira summary",
      source: "history",
    }),
    {
      id: "mira_node:node-1",
      type: "doc",
      label: "Mira summary",
      sourceId: "node-1",
    },
  );
  assert.equal(
    mapChatContextRef({ type: "attachment", id: "file-1", title: "file.csv" }),
    null,
  );
  assert.equal(mapChatContextRef({ type: "mira_node", id: "node-2" }), null);
});

test("attachment mapper and stream updater keep transport DTOs outside the UI", () => {
  const readyAttachment = mapChatAttachmentRef({
    id: "file-1",
    name: "result.csv",
    mimeType: "text/csv",
    kind: "csv",
  });
  const waiting = beginChatStream([], {
    role: "user",
    content: "问题",
    attachments: [
      {
        id: "local-file",
        name: "result.csv",
        mimeType: "text/csv",
        status: "uploading",
      },
    ],
  });

  const updated = updateLatestUserMessageAttachments(waiting, [
    readyAttachment,
  ]);

  assert.equal(updated.messages[0]?.attachments?.[0]?.id, "file-1");
  assert.equal(updated.messages[0]?.attachments?.[0]?.status, "ready");
  assert.equal(updated.messages[1]?.role, "assistant");
});

test("regenerate payload reuses the closest previous user message without stale local files", () => {
  assert.deepEqual(
    buildChatRegeneratePayload(
      [
        { role: "user", content: "第一次问题" },
        { role: "assistant", content: "第一次回答" },
        {
          role: "user",
          content: "第二次问题",
          attachments: [
            {
              id: "local-file",
              name: "local.txt",
              mimeType: "text/plain",
              file: new File(["local"], "local.txt"),
            },
          ],
          references: [
            { id: "skill:test", type: "skill", label: "测试 Skill" },
          ],
        },
        { role: "assistant", content: "第二次回答" },
      ],
      3,
    ),
    { content: "第二次问题", attachments: [], references: [] },
  );

  assert.equal(
    buildChatRegeneratePayload([{ role: "assistant", content: "孤立回答" }], 0),
    null,
  );
});

test("loadChatSession calls the real history detail endpoint", async () => {
  const calls: string[] = [];
  const result = await loadChatSession(
    {
      get: async (path) => {
        calls.push(path);
        return detail;
      },
    } as never,
    "session/1",
  );

  assert.deepEqual(calls, ["/api/chat/history?sessionId=session%2F1"]);
  assert.equal(result.id, "session-1");
});

test("stream reducer covers meta, task trace, text chunks, and errors", () => {
  let state = beginChatStream([], { role: "user", content: "问题" });
  state = reduceChatStreamEvent(state, "meta", { sessionId: "session-2" });
  state = reduceChatStreamEvent(state, "task_trace", {
    step: { title: "检索知识库", category: "context" },
  });
  state = reduceChatStreamEvent(state, "text", { content: "答" });
  state = reduceChatStreamEvent(state, "text", { content: "案" });

  assert.equal(state.sessionId, "session-2");
  assert.equal(state.statusPhase, "generating");
  assert.deepEqual(state.searchSteps, [
    { type: "knowledge", label: "检索知识库" },
  ]);
  assert.equal(state.messages.at(-1)?.content, "答案");
  assert.equal(state.hasReceivedAssistantChunk, true);

  state = reduceChatStreamEvent(state, "error", { error: "模型不可用" });
  assert.equal(state.error, "模型不可用");
});

test("interruptChatStream removes only an empty assistant placeholder", () => {
  const waiting = beginChatStream([], { role: "user", content: "问题" });
  assert.deepEqual(interruptChatStream(waiting).messages, [
    { role: "user", content: "问题" },
  ]);

  const partial = reduceChatStreamEvent(waiting, "text", {
    content: "部分回答",
  });
  assert.deepEqual(interruptChatStream(partial).messages, [
    { role: "user", content: "问题" },
    { role: "assistant", content: "部分回答" },
  ]);
});

test("getChatStreamErrorMessage maps timeout phases to retryable notices", () => {
  assert.equal(
    getChatStreamErrorMessage(
      new ChatStreamTimeoutError("connect"),
      "fallback",
    ),
    "连接对话服务超时，请重试。",
  );
  assert.equal(
    getChatStreamErrorMessage(new ChatStreamTimeoutError("idle"), "fallback"),
    "回答长时间没有更新，已停止生成，请重试。",
  );
  assert.equal(
    getChatStreamErrorMessage(new Error("service failed"), "fallback"),
    "service failed",
  );
  assert.equal(getChatStreamErrorMessage(null, "fallback"), "fallback");
});

test("reconcileChatStream waits for the newly persisted assistant response", async () => {
  const oldUser = detail.messages[1];
  const newUser: ChatHistoryDetailResponse["messages"][number] = {
    id: "user-2",
    sessionId: "session-1",
    role: "user",
    content: oldUser.content,
    createdAt: "2026-07-16T00:00:03Z",
  };
  const newAssistant: ChatHistoryDetailResponse["messages"][number] = {
    id: "assistant-2",
    sessionId: "session-1",
    role: "assistant",
    content: "新回答",
    createdAt: "2026-07-16T00:00:04Z",
  };
  let calls = 0;
  const waits: number[] = [];

  const reconciled = await reconcileChatStream(
    {
      get: async () => {
        calls += 1;
        return {
          ...detail,
          messages:
            calls === 1
              ? [...detail.messages, newUser]
              : [...detail.messages, newUser, newAssistant],
        };
      },
    } as never,
    "session-1",
    {
      userContent: oldUser.content,
      knownMessageIds: detail.messages.map((message) => message.id),
      retryDelaysMs: [0, 25],
      wait: async (delayMs) => {
        waits.push(delayMs);
      },
    },
  );

  assert.equal(calls, 2);
  assert.deepEqual(waits, [0, 25]);
  assert.equal(reconciled.messages.at(-1)?.content, "新回答");
  assert.equal(reconciled.messageIds.at(-1), "assistant-2");
});

test("reconcileChatStream rejects an EOF without a persisted response", async () => {
  const newUser: ChatHistoryDetailResponse["messages"][number] = {
    id: "user-2",
    sessionId: "session-1",
    role: "user",
    content: "尚未回答的问题",
    createdAt: "2026-07-16T00:00:03Z",
  };
  let calls = 0;

  await assert.rejects(
    reconcileChatStream(
      {
        get: async () => {
          calls += 1;
          return { ...detail, messages: [...detail.messages, newUser] };
        },
      } as never,
      "session-1",
      {
        userContent: newUser.content,
        knownMessageIds: detail.messages.map((message) => message.id),
        retryDelaysMs: [0, 25, 50],
        wait: async () => undefined,
      },
    ),
    ChatStreamDisconnectedError,
  );
  assert.equal(calls, 3);
});

test("only transport failures are eligible for history recovery", () => {
  const state = beginChatStream([], { role: "user", content: "问题" });

  assert.equal(
    shouldReconcileChatStreamFailure(new TypeError("terminated"), state),
    true,
  );
  assert.equal(
    shouldReconcileChatStreamFailure(new ChatStreamTimeoutError("idle"), state),
    false,
  );
  assert.equal(
    shouldReconcileChatStreamFailure(new ChatStreamDisconnectedError(), state),
    false,
  );
  assert.equal(
    shouldReconcileChatStreamFailure(new TypeError("terminated"), {
      ...state,
      error: "服务端生成失败",
    }),
    false,
  );
});
