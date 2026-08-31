import assert from "node:assert/strict";
import test from "node:test";

import type { ChatHistoryDetailResponse } from "@bioagent/shared";

import { ApiError, ChatStreamTimeoutError } from "@/lib/api";

import {
  beginChatStream,
  buildChatRegeneratePayload,
  ChatStreamDisconnectedError,
  getChatStreamErrorMessage,
  formatChatActionExpiry,
  interruptChatStream,
  isChatSessionNotFoundError,
  loadChatSession,
  mapChatAttachmentRef,
  mapChatContextRef,
  mapChatDisplayCard,
  mapChatHistoryDetail,
  reconcileChatStream,
  reduceChatStreamEvent,
  settleChatStreamState,
  shouldReconcileChatStreamFailure,
  updateLatestUserMessageAttachments,
} from "./chat-session";

test("identifies missing chat sessions that require a history refresh", () => {
  assert.equal(
    isChatSessionNotFoundError(
      new ApiError("NOT_FOUND", "Session not found", 404),
    ),
    true,
  );
  assert.equal(
    isChatSessionNotFoundError(
      new ApiError("NOT_FOUND", "Project not found", 404),
    ),
    false,
  );
  assert.equal(
    isChatSessionNotFoundError(
      new ApiError("NOT_FOUND", "Session not found", 500),
    ),
    false,
  );
});

test("formats action expiry as readable Beijing time", () => {
  assert.equal(
    formatChatActionExpiry("2026-08-03T18:00:00Z"),
    "2026年8月4日 02:00",
  );
  assert.equal(formatChatActionExpiry("not-a-date"), "not-a-date");
});

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
        id: "user-1",
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
      { id: "assistant-1", role: "assistant", content: "回答", attachments: [] },
    ],
    miraDraftActions: {},
    deferredActions: {},
    isReplying: false,
  });
});

test("mapChatHistoryDetail restores an active assistant snapshot after returning to a chat", () => {
  const result = mapChatHistoryDetail({
    ...detail,
    messages: detail.messages.slice(0, 2),
    runs: [
      {
        id: "run-active-1",
        sessionId: "session-1",
        status: "running",
        createdAt: "2026-08-31T09:58:30Z",
      },
    ],
    activeRunState: {
      runId: "run-active-1",
      status: "streaming",
      phase: "executing",
      assistantMessageId: "assistant-active-1",
      updatedAt: "2026-08-31T10:00:00Z",
      snapshot: {
        content: "正在检索相关文献",
        reasoning: "先确认检索范围",
        attachments: [
          {
            id: "snapshot-file-1",
            name: "result.csv",
            mimeType: "text/csv",
            kind: "csv",
          },
        ],
        traceSteps: [
          {
            id: "tool:literature-search",
            title: "检索近期文献",
            category: "retrieval",
            status: "running",
            sequence: 3,
          },
        ],
        display: {
          schemaVersion: "home-display.v1",
          intentClass: "general_answer",
          cardType: "answer",
          title: "检索进度",
          state: "streaming",
          payload: { markdown: "正在检索相关文献" },
        },
      },
    },
  });

  assert.equal(result.isReplying, true);
  assert.equal(result.messages.length, 2);
  assert.deepEqual(result.messages.at(-1), {
    id: "assistant-active-1",
    role: "assistant",
    content: "正在检索相关文献",
    reasoning: "先确认检索范围",
    attachments: [
      {
        id: "snapshot-file-1",
        name: "result.csv",
        mimeType: "text/csv",
        status: "ready",
      },
    ],
  });
  assert.equal(result.liveStreamState?.statusPhase, "searching");
  assert.equal(result.liveStreamState?.hasReceivedAssistantChunk, true);
  assert.equal(
    result.liveStreamState?.replyStartedAtMs,
    new Date("2026-08-31T09:58:30Z").getTime(),
  );
  assert.equal(result.liveStreamState?.activeDisplay?.title, "检索进度");
  assert.deepEqual(result.liveStreamState?.searchSteps, [
    {
      id: "tool:literature-search",
      type: "knowledge",
      label: "检索近期文献",
      status: "running",
    },
  ]);

  const settled = settleChatStreamState(
    {
      messages: [],
      statusPhase: "analyzing",
      statusVisible: false,
      searchSteps: [],
      hasReceivedAssistantChunk: false,
    },
    result,
  );
  assert.equal(settled.statusVisible, true);
  assert.equal(settled.statusPhase, "searching");
  assert.equal(settled.hasReceivedAssistantChunk, true);
  assert.deepEqual(settled.searchSteps, result.liveStreamState?.searchSteps);
});

test("mapChatHistoryDetail replaces a persisted assistant with its active snapshot", () => {
  const result = mapChatHistoryDetail({
    ...detail,
    activeRunState: {
      runId: "run-active-2",
      status: "reconciling",
      phase: "reconciling",
      assistantMessageId: "assistant-1",
      updatedAt: "2026-08-31T10:00:01Z",
      snapshot: { content: "回答（仍在整理）" },
    },
  });

  assert.equal(result.messages.length, 2);
  assert.equal(result.messages.at(-1)?.id, "assistant-1");
  assert.equal(result.messages.at(-1)?.content, "回答（仍在整理）");
  assert.equal(result.liveStreamState?.statusPhase, "generating");
});

test("settling a chat stream reuses messages when only persisted ids changed", () => {
  const session = mapChatHistoryDetail(detail);
  const streamedMessages = session.messages.map((message) => ({
    ...message,
    id: undefined,
  }));
  const current = {
    messages: streamedMessages,
    statusPhase: "generating" as const,
    statusVisible: false,
    searchSteps: [],
    hasReceivedAssistantChunk: true,
    deferredActions: {},
  };

  const settled = settleChatStreamState(current, session);

  assert.equal(settled.messages, streamedMessages);
  assert.equal(settled.messages[0], streamedMessages[0]);
  assert.equal(settled.messages[1], streamedMessages[1]);
});

test("settling a chat stream only replaces messages whose rendered content changed", () => {
  const session = mapChatHistoryDetail(detail);
  const current = {
    messages: session.messages.map((message) => ({
      ...message,
      id: undefined,
    })),
    statusPhase: "generating" as const,
    statusVisible: false,
    searchSteps: [],
    hasReceivedAssistantChunk: true,
    deferredActions: {},
  };
  const changedSession = {
    ...session,
    messages: session.messages.map((message, index) =>
      index === 1 ? { ...message, content: "更新后的回答" } : message,
    ),
  };

  const settled = settleChatStreamState(current, changedSession);

  assert.notEqual(settled.messages, current.messages);
  assert.equal(settled.messages[0], current.messages[0]);
  assert.equal(settled.messages[1], changedSession.messages[1]);
});

test("mapChatHistoryDetail restores MCP confirmation actions from history", () => {
  const result = mapChatHistoryDetail({
    ...detail,
    pendingMcpToolCalls: [
      {
        id: "tool-call-1",
        status: "pending_confirmation",
        riskLevel: "write_low",
        dataTypes: ["project_document"],
        inputSummary: "保存实验记录",
        expiresAt: "2026-08-03T18:00:00Z",
        toolName: "保存实验记录",
        serverName: "Mira",
      },
    ],
  });

  assert.deepEqual(result.deferredActions, {
    "mcp:tool-call-1": {
      kind: "mcp",
      actionKey: "mcp:tool-call-1",
      toolCallId: "tool-call-1",
      status: "pending_confirmation",
    },
  });
  assert.deepEqual(result.messages.at(-1)?.displayCard?.actions, [
    { id: "confirm", label: "确认执行", tone: "primary" },
    { id: "cancel", label: "取消", tone: "secondary" },
  ]);
});

test("display mapper exposes server-declared draft routes as actions", () => {
  const state = reduceChatStreamEvent(
    beginChatStream([], { role: "user", content: "创建订阅" }),
    "display_done",
    {
      display: {
        schemaVersion: "home-display.v1",
        intentClass: "action",
        cardType: "tracking_subscription_preview",
        title: "文献订阅草稿",
        state: "waiting_confirmation",
        payload: {
          sourceName: "PubMed",
          sourceType: "pubmed",
          keywords: ["EGFR"],
          frequency: "weekly",
          lookbackDays: 7,
          projectNodeIds: [],
          draftEnvelope: {
            schemaVersion: "home-draft-envelope/v1",
            draftId: "draft-route-1",
            objectType: "tracking_subscription",
            action: "create",
            targetModule: "tracking",
            draftSchemaVersion: "v1",
            draft: {},
            sourceRefs: [],
            provenance: {
              toolName: "create_subscription",
              runId: "run-1",
              createdAt: "2026-08-03T10:00:00Z",
            },
            validation: { status: "valid", missingFields: [], warnings: [] },
            confirmation: {
              required: true,
              confirmRoute: "/api/tracking/subscription-drafts/draft-route-1/confirm",
              confirmMethod: "POST",
              confirmPayload: { confirmationToken: "token-1" },
              cancelRoute: "/api/tracking/subscription-drafts/draft-route-1/cancel",
            },
          },
        },
      },
    },
  );

  assert.deepEqual(state.messages.at(-1)?.displayCard?.actions, [
    { id: "confirm", label: "确认", tone: "primary" },
    { id: "cancel", label: "取消", tone: "secondary" },
  ]);
  assert.deepEqual(state.deferredActions?.["draft-route:draft-route-1"], {
    kind: "route",
    actionKey: "draft-route:draft-route-1",
    confirmPath: "/api/tracking/subscription-drafts/draft-route-1/confirm",
    cancelPath: "/api/tracking/subscription-drafts/draft-route-1/cancel",
    confirmBody: { confirmationToken: "token-1" },
  });
});

test("stream reducer renders a live Mira document draft", () => {
  const state = reduceChatStreamEvent(
    beginChatStream([], { role: "user", content: "整理成文档" }),
    "display_done",
    {
      display: {
        schemaVersion: "home-display.v1",
        intentClass: "write_or_archive",
        cardType: "mira_archive_preview",
        title: "文档草稿",
        state: "waiting_confirmation",
        payload: {
          targetPath: "当前项目",
          mode: "create",
          title: "实验记录",
          markdown: "## 结果\n\n实验结果正文",
          sections: [{ heading: "结果", summary: "实验结果正文" }],
          sourceRefs: [],
          warnings: [],
          confirmation: {
            actionId: "mira-draft-1",
            confirmationToken: "token-1",
            draftHash: "hash-1",
            status: "waiting_approval",
            confirmAction: {
              method: "POST",
              path: "/api/mira/drafts/mira-draft-1/confirm",
              requiresConfirmationToken: true,
            },
            cancelAction: {
              method: "POST",
              path: "/api/mira/drafts/mira-draft-1/cancel",
              requiresConfirmationToken: false,
            },
          },
        },
      },
    },
  );

  assert.equal(state.messages.at(-1)?.miraDraft?.title, "实验记录");
  assert.equal(state.messages.at(-1)?.miraDraft?.actionKey, "mira:mira-draft-1");
  assert.equal(
    state.miraDraftActions?.["mira:mira-draft-1"]?.markdown,
    "## 结果\n\n实验结果正文",
  );
  assert.equal(state.statusVisible, false);
});

test("mapChatHistoryDetail restores a pending assistant turn for an active run", () => {
  const activeDetail: ChatHistoryDetailResponse = {
    ...detail,
    messages: detail.messages.filter((message) => message.role !== "assistant"),
    runs: [
      {
        id: "run-2",
        sessionId: "session-1",
        status: "running",
        createdAt: "2026-07-16T00:00:03Z",
      },
    ],
  };

  const result = mapChatHistoryDetail(activeDetail);

  assert.equal(result.isReplying, true);
  assert.deepEqual(result.messages.at(-1), {
    role: "assistant",
    content: "",
    attachments: [],
  });
  assert.equal(
    result.liveStreamState?.replyStartedAtMs,
    new Date("2026-07-16T00:00:03Z").getTime(),
  );
});

test("mapChatHistoryDetail treats only the latest queued or running run as replying", () => {
  const completedDetail: ChatHistoryDetailResponse = {
    ...detail,
    runs: [
      {
        id: "run-2",
        sessionId: "session-1",
        status: "completed",
        createdAt: "2026-07-16T00:00:03Z",
      },
      {
        id: "run-1",
        sessionId: "session-1",
        status: "running",
        createdAt: "2026-07-16T00:00:01Z",
      },
    ],
  };

  assert.equal(mapChatHistoryDetail(completedDetail).isReplying, false);
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
    { content: "第二次问题", attachments: [], references: [], thinkingLevel: "low" },
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

test("stream reducer accumulates live reasoning before answer text", () => {
  let state = beginChatStream([], { role: "user", content: "问题" });
  assert.equal(state.replyStartedAtMs, undefined);

  state = reduceChatStreamEvent(state, "reasoning", { content: "先分析" });
  state = reduceChatStreamEvent(state, "reasoning", { content: "，再判断" });

  assert.equal(state.messages.at(-1)?.reasoning, "先分析，再判断");
  assert.equal(state.messages.at(-1)?.content, "");
  assert.equal(state.statusPhase, "thinking");

  state = reduceChatStreamEvent(state, "text", { content: "结论" });
  assert.equal(state.messages.at(-1)?.reasoning, "先分析，再判断");
  assert.equal(state.messages.at(-1)?.content, "结论");
  assert.equal(state.statusPhase, "generating");
});

test("stream reducer keeps consuming ordered task status after the first text chunk", () => {
  let state = beginChatStream([], { role: "user", content: "问题" });
  assert.equal(state.statusPhase, "analyzing");
  assert.equal(state.statusVisible, true);

  state = reduceChatStreamEvent(state, "meta", { sessionId: "session-2" });
  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      id: "generation",
      title: "准备生成回复",
      category: "generation",
      status: "running",
      sequence: 1,
    },
  });
  assert.equal(state.statusPhase, "analyzing");
  assert.deepEqual(state.searchSteps, [
    {
      id: "generation",
      type: "generation",
      label: "准备生成回复",
      status: "running",
    },
  ]);

  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      id: "context",
      title: "分析任务和上下文",
      category: "context",
      status: "running",
      sequence: 2,
    },
  });
  assert.equal(state.statusPhase, "analyzing");
  assert.equal(state.statusLabel, undefined);
  assert.deepEqual(state.searchSteps, [
    {
      id: "context",
      type: "context",
      label: "分析任务和上下文",
      status: "running",
    },
  ]);

  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      id: "context",
      title: "已分析任务和上下文",
      detail: "已读取当前项目资料",
      category: "context",
      status: "completed",
      sequence: 3,
    },
  });
  assert.equal(state.statusVisible, true);
  assert.deepEqual(state.searchSteps, [
    {
      id: "context",
      type: "context",
      label: "已分析任务和上下文",
      status: "completed",
      detail: "已读取当前项目资料",
    },
  ]);

  state = reduceChatStreamEvent(state, "text", { content: "答" });
  state = reduceChatStreamEvent(state, "text", { content: "案" });
  assert.equal(state.statusPhase, "generating");
  assert.equal(state.statusLabel, undefined);

  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      id: "tool:literature-search",
      title: "检索近期文献",
      category: "retrieval",
      status: "running",
      sequence: 4,
    },
  });
  assert.equal(state.statusPhase, "searching");
  assert.equal(state.statusLabel, undefined);
  assert.equal(state.searchSteps.length, 1);

  const orderedState = state;
  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      id: "tool:old",
      title: "迟到的旧状态",
      category: "tool",
      status: "running",
      sequence: 3,
    },
  });
  assert.equal(state, orderedState);

  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      id: "tool:literature-search",
      title: "已检索近期文献",
      category: "retrieval",
      status: "completed",
      resultCount: 12,
      sequence: 5,
    },
  });

  assert.equal(state.sessionId, "session-2");
  assert.equal(state.statusPhase, "generating");
  assert.equal(state.statusLabel, undefined);
  assert.equal(state.statusVisible, true);
  assert.deepEqual(state.searchSteps, [
    {
      id: "tool:literature-search",
      type: "knowledge",
      label: "已检索近期文献",
      status: "completed",
      resultCount: 12,
    },
  ]);
  assert.equal(state.messages.at(-1)?.content, "答案");
  assert.equal(state.hasReceivedAssistantChunk, true);

  state = reduceChatStreamEvent(state, "status", { status: "completed" });
  assert.equal(state.statusVisible, false);
  assert.equal(state.searchSteps.length, 0);
});

test("stream reducer maps run lifecycle and preserves waiting states from late traces", () => {
  let state = beginChatStream([], { role: "user", content: "问题" });

  state = reduceChatStreamEvent(state, "status", { status: "queued" });
  assert.equal(state.statusPhase, "queued");

  state = reduceChatStreamEvent(state, "status", { status: "running" });
  assert.equal(state.statusPhase, "analyzing");

  state = reduceChatStreamEvent(state, "status", {
    status: "awaiting_clarification",
  });
  assert.equal(state.statusPhase, "awaiting_clarification");
  assert.equal(state.statusVisible, true);

  state = reduceChatStreamEvent(state, "task_trace", {
    step: {
      id: "generation",
      title: "生成回复",
      category: "generation",
      status: "completed",
      sequence: 10,
    },
  });
  assert.equal(state.statusPhase, "awaiting_clarification");
  assert.equal(state.statusVisible, true);
  assert.deepEqual(state.searchSteps, [
    {
      id: "generation",
      type: "generation",
      label: "生成回复",
      status: "completed",
    },
  ]);

  state = reduceChatStreamEvent(state, "done", { type: "done" });
  assert.equal(state.statusVisible, true);

  state = reduceChatStreamEvent(state, "status", { status: "running" });
  assert.equal(state.statusPhase, "analyzing");

  state = reduceChatStreamEvent(state, "status", {
    status: "awaiting_confirmation",
  });
  assert.equal(state.statusPhase, "awaiting_confirmation");

  state = reduceChatStreamEvent(state, "status", {
    status: "awaiting_approval",
  });
  assert.equal(state.statusPhase, "awaiting_approval");

  state = reduceChatStreamEvent(state, "status", { status: "cancelled" });
  assert.equal(state.statusVisible, false);
});

test("stream reducer exposes warnings and failures without treating warnings as errors", () => {
  let state = beginChatStream([], { role: "user", content: "问题" });

  state = reduceChatStreamEvent(state, "warning", {
    message: "部分来源暂时不可用",
  });
  assert.equal(state.statusPhase, "warning");
  assert.equal(state.statusLabel, undefined);
  assert.deepEqual(state.searchSteps.at(-1), {
    id: "warning:0",
    type: "action",
    label: "部分来源暂时不可用",
    status: "warning",
  });
  assert.equal(state.error, undefined);

  state = reduceChatStreamEvent(state, "error", { error: "模型不可用" });
  assert.equal(state.statusPhase, "failed");
  assert.deepEqual(state.searchSteps.at(-1), {
    id: "stream:error",
    type: "action",
    label: "处理失败",
    status: "failed",
  });
  assert.equal(state.error, "模型不可用");
});

test("stream reducer renders deferred requests and final display cards", () => {
  let state = beginChatStream([], { role: "user", content: "查找文献" });

  state = reduceChatStreamEvent(state, "clarification_required", {
    requestId: "request-1",
    summary: {
      question: "你想查询哪个研究方向？",
      reason: "需要主题才能检索",
      missingItems: ["主题关键词", "时间范围"],
      recommendedNext: "补充一个疾病或基因名称",
    },
  });
  assert.deepEqual(state.messages.at(-1)?.displayCard, {
    kind: "clarification",
    title: "需要补充信息",
    summary: "你想查询哪个研究方向？",
    items: [
      "主题关键词",
      "时间范围",
      "建议下一步：补充一个疾病或基因名称",
    ],
  });

  state = reduceChatStreamEvent(state, "display_done", {
    display: {
      schemaVersion: "home-display.v1",
      intentClass: "general_answer",
      cardType: "clarification",
      title: "请补充检索范围",
      payload: {
        question: "请提供疾病、基因、通路或技术关键词。",
        missingItems: ["文献主题关键词"],
      },
      state: "needs_clarification",
    },
  });
  assert.deepEqual(state.messages.at(-1)?.displayCard, {
    kind: "clarification",
    title: "请补充检索范围",
    summary: "请提供疾病、基因、通路或技术关键词。",
    items: ["文献主题关键词"],
  });
  assert.equal(state.statusPhase, "awaiting_clarification");
  assert.equal(state.statusVisible, false);

  state = reduceChatStreamEvent(state, "display_done", {
    display: {
      schemaVersion: "home-display.v1",
      intentClass: "general_answer",
      cardType: "answer",
      title: "回答完成",
      payload: { markdown: "最终回答" },
      state: "completed",
    },
  });
  assert.equal(state.statusVisible, false);
  assert.deepEqual(state.searchSteps, []);
});

test("stream reducer maps approvals, artifacts, and structured research results", () => {
  let state = beginChatStream([], { role: "user", content: "生成报告" });

  state = reduceChatStreamEvent(state, "approval_required", {
    requestId: "request-2",
    expiresAt: "2026-08-03T12:00:00Z",
    summary: {
      toolDisplayName: "写入实验记录",
      inputSummary: "将结果保存到当前项目",
    },
  });
  assert.equal(state.messages.at(-1)?.displayCard?.kind, "approval");
  assert.equal(
    state.messages.at(-1)?.displayCard?.title,
    "等待审批：写入实验记录",
  );

  state = reduceChatStreamEvent(state, "artifact", {
    artifact: {
      id: "artifact-1",
      type: "report",
      name: "实验报告.pdf",
      url: "https://files.example/report.pdf",
    },
  });
  assert.deepEqual(state.messages.at(-1)?.displayCard?.links, [
    { label: "打开产物", href: "https://files.example/report.pdf" },
  ]);

  state = reduceChatStreamEvent(state, "structured_payload", {
    structuredPayload: {
      kind: "research_answer",
      data: {
        title: "近期研究",
        summary: ["发现 2 篇高相关文献"],
        papers: [
          {
            title: "EGFR resistance",
            pmid: "12345",
          },
        ],
      },
    },
  });
  assert.deepEqual(state.messages.at(-1)?.displayCard, {
    kind: "result",
    title: "近期研究",
    summary: "发现 2 篇高相关文献",
    links: [
      {
        label: "EGFR resistance",
        href: "https://pubmed.ncbi.nlm.nih.gov/12345/",
      },
    ],
    statusLabel: "已完成",
  });
  assert.equal(state.statusVisible, true);

  state = reduceChatStreamEvent(state, "status", { status: "completed" });
  assert.equal(state.statusVisible, false);
});

test("display mapper ignores answer and Mira cards handled by existing renderers", () => {
  assert.equal(
    mapChatDisplayCard({ cardType: "answer" } as never),
    null,
  );
  assert.equal(
    mapChatDisplayCard({ cardType: "mira_archive_preview" } as never),
    null,
  );
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
    getChatStreamErrorMessage(new ApiError("HTTP_413", "Request failed", 413)),
    "附件尺寸过大",
  );
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
