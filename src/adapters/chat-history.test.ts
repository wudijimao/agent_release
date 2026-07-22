import assert from "node:assert/strict";
import test from "node:test";

import type { ChatSessionListResponse } from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

import {
  deleteChatSession,
  formatChatSessionDate,
  loadAppShellChats,
  mapChatSessionToAppShell,
  renameChatSession,
  setChatSessionPinned,
  touchAppShellChat,
} from "./chat-history";

const now = new Date("2026-07-16T12:00:00+08:00");

test("chat history mapper produces AppShell view models", () => {
  assert.deepEqual(
    mapChatSessionToAppShell(
      {
        id: "session-1",
        title: "  文献汇总  ",
        scene: "home",
        createdAt: "2026-07-16T01:00:00+08:00",
        updatedAt: "2026-07-16T10:25:00+08:00",
      },
      now,
    ),
    {
      id: "session-1",
      title: "文献汇总",
      date: "今天 10:25",
      count: 0,
      updatedAt: "2026-07-16T10:25:00+08:00",
    },
  );
});

test("chat history dates cover yesterday, current year, older years, and invalid input", () => {
  assert.equal(formatChatSessionDate("2026-07-15T16:40:00+08:00", now), "昨天 16:40");
  assert.equal(formatChatSessionDate("2026-06-03T09:00:00+08:00", now), "6月3日");
  assert.equal(formatChatSessionDate("2025-12-31T09:00:00+08:00", now), "2025年12月31日");
  assert.equal(formatChatSessionDate("invalid", now), "");
});

test("chat history adapter sorts newest sessions first and maps empty titles", async () => {
  const calls: string[] = [];
  const response: ChatSessionListResponse = {
    items: [
      {
        id: "session-2",
        title: null,
        scene: "home",
        createdAt: "2026-07-15T10:00:00+08:00",
        updatedAt: "2026-07-15T16:40:00+08:00",
      },
      {
        id: "session-3",
        title: "最新对话",
        scene: "home",
        createdAt: "2026-07-16T10:00:00+08:00",
        updatedAt: "2026-07-16T11:30:00+08:00",
      },
    ],
  };
  const api = {
    get: async (path: string) => {
      calls.push(path);
      return response;
    },
  } as ApiClient;

  const chats = await loadAppShellChats(api, { limit: 5, now });

  assert.deepEqual(calls, ["/api/chat/history?limit=5"]);
  assert.deepEqual(chats.map((chat) => chat.id), ["session-3", "session-2"]);
  assert.equal(chats[0]?.title, "最新对话");
  assert.equal(chats[1]?.title, "新对话");
  assert.equal(chats[1]?.date, "昨天 16:40");
});

test("touching an existing chat moves it to the newest local position", () => {
  const chats = [
    {
      id: "session-newer",
      title: "较新对话",
      date: "今天 10:00",
      count: 0,
      updatedAt: "2026-07-16T10:00:00+08:00",
    },
    {
      id: "session-older",
      title: "较早对话",
      date: "昨天 16:00",
      count: 0,
      updatedAt: "2026-07-15T16:00:00+08:00",
    },
  ];

  const touched = touchAppShellChat(
    chats,
    "session-older",
    new Date("2026-07-16T11:45:00+08:00"),
  );

  assert.deepEqual(touched.map((chat) => chat.id), [
    "session-older",
    "session-newer",
  ]);
  assert.equal(touched[0]?.date, "今天 11:45");
  assert.equal(touched[0]?.updatedAt, "2026-07-16T03:45:00.000Z");
});

test("chat history mutations use the agent session API", async () => {
  const calls: Array<{ method: string; path: string; body?: unknown }> = [];
  const api = {
    patch: async (path: string, body: unknown) => {
      calls.push({ method: "PATCH", path, body });
    },
    delete: async (path: string) => {
      calls.push({ method: "DELETE", path });
    },
  } as ApiClient;

  await renameChatSession(api, "session-1", "新标题");
  await setChatSessionPinned(api, "session-1", true);
  await deleteChatSession(api, "session-1");

  assert.deepEqual(calls, [
    {
      method: "PATCH",
      path: "/api/agent/sessions/session-1",
      body: { title: "新标题" },
    },
    {
      method: "PATCH",
      path: "/api/agent/sessions/session-1",
      body: { isPinned: true },
    },
    {
      method: "DELETE",
      path: "/api/agent/sessions/session-1",
    },
  ]);
});
