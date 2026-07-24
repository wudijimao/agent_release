import assert from "node:assert/strict";
import test from "node:test";

import type { ChatHistoryDetailResponse } from "@bioagent/shared";

import { ApiError, ChatStreamTimeoutError } from "@/lib/api";

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
        {
          id: "image-1",
          name: "cells.jpg",
          mimeType: "image/jpeg",
          kind: "image",
        },
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
  attachments: [
    {
      id: "image-1",
      name: "cells.jpg",
      mimeType: "image/jpeg",
      kind: "image",
      fileSize: 1024,
      status: "ready",
      contextEnabled: true,
      url: "https://storage.test/cells.jpg",
      createdAt: "2026-07-16T00:00:01Z",
    },
  ],
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
          {
            id: "image-1",
            name: "cells.jpg",
            mimeType: "image/jpeg",
            status: "ready",
            previewUrl: "https://storage.test/cells.jpg",
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

test("attachment mapper exposes a preview only for image attachment URLs", () => {
  assert.deepEqual(
    mapChatAttachmentRef({
      id: "image-1",
      name: "cells.png",
      mimeType: "image/png",
      kind: "image",
      fileSize: 1024,
      status: "ready",
      contextEnabled: true,
      url: "https://storage.test/cells.png",
      createdAt: "2026-07-16T00:00:01Z",
    }),
    {
      id: "image-1",
      name: "cells.png",
      mimeType: "image/png",
      status: "ready",
      previewUrl: "https://storage.test/cells.png",
    },
  );

  assert.deepEqual(
    mapChatAttachmentRef({
      id: "file-1",
      name: "notes.txt",
      mimeType: "text/plain",
      kind: "txt",
      fileSize: 20,
      status: "ready",
      contextEnabled: true,
      url: "https://storage.test/notes.txt",
      createdAt: "2026-07-16T00:00:01Z",
    }),
    {
      id: "file-1",
      name: "notes.txt",
      mimeType: "text/plain",
      status: "ready",
    },
  );
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
  assert.equal(state.statusPhase, "analyzing");

  state = reduceChatStreamEvent(state, "meta", { sessionId: "session-2" });
  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      title: "准备生成回复",
      category: "generation",
      status: "running",
    },
  });
  assert.equal(state.statusPhase, "analyzing");
  assert.deepEqual(state.searchSteps, []);

  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      title: "分析任务和上下文",
      category: "context",
      status: "running",
    },
  });
  assert.equal(state.statusPhase, "analyzing");
  assert.deepEqual(state.searchSteps, [
    { type: "tool", label: "分析任务和上下文" },
  ]);

  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      title: "已完成上下文分析",
      category: "context",
      status: "completed",
    },
  });
  assert.deepEqual(state.searchSteps, [
    { type: "tool", label: "分析任务和上下文" },
  ]);

  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      title: "检索知识库",
      category: "retrieval",
      status: "running",
    },
  });
  assert.equal(state.statusPhase, "searching");
  assert.deepEqual(state.searchSteps, [
    { type: "knowledge", label: "检索知识库" },
  ]);

  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      detail: "正在分析检索结果",
      category: "tool",
      status: "running",
    },
  });
  assert.equal(state.statusPhase, "executing");
  assert.deepEqual(state.searchSteps, [
    { type: "tool", label: "正在分析检索结果" },
  ]);

  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      title: "生成回复",
      category: "generation",
      status: "completed",
    },
  });
  assert.equal(state.statusPhase, "executing");

  state = reduceChatStreamEvent(state, "text", { content: "答" });
  state = reduceChatStreamEvent(state, "text", { content: "案" });
  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      title: "迟到的知识库检索",
      category: "retrieval",
      status: "running",
    },
  });

  assert.equal(state.sessionId, "session-2");
  assert.equal(state.statusPhase, "generating");
  assert.deepEqual(state.searchSteps, [
    { type: "tool", label: "正在分析检索结果" },
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

test("getChatStreamErrorMessage reduces technical failures to four user-facing categories", () => {
  assert.equal(
    getChatStreamErrorMessage(
      new ChatStreamTimeoutError("connect"),
    ),
    "AI 响应超时，请重试。",
  );
  assert.equal(
    getChatStreamErrorMessage(new ChatStreamTimeoutError("idle")),
    "AI 响应超时，请重试。",
  );
  assert.equal(
    getChatStreamErrorMessage(
      new Error(
        "Generic driver upstream request failed: HTTP 502 Bad Gateway. "
          + "Upstream model gateway returned Cloudflare 502 Bad Gateway. "
          + 'Response preview: {"error_name":"origin_bad_gateway"}',
      ),
    ),
    "AI 服务暂时不可用，请稍后重试。",
  );
  assert.equal(
    getChatStreamErrorMessage(
      new ApiError("STREAM_FAILED", "Too Many Requests", 429),
    ),
    "请求过于频繁，请稍后重试。",
  );
  assert.equal(
    getChatStreamErrorMessage(new Error("service failed")),
    "AI 服务异常，请稍后重试。",
  );
  assert.equal(
    getChatStreamErrorMessage(null),
    "AI 服务异常，请稍后重试。",
  );
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
