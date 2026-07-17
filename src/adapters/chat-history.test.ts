import assert from "node:assert/strict";
import test from "node:test";

import type { ChatSessionListResponse } from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

import {
  formatChatSessionDate,
  loadAppShellChats,
  mapChatSessionToAppShell,
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
    },
  );
});

test("chat history dates cover yesterday, current year, older years, and invalid input", () => {
  assert.equal(formatChatSessionDate("2026-07-15T16:40:00+08:00", now), "昨天 16:40");
  assert.equal(formatChatSessionDate("2026-06-03T09:00:00+08:00", now), "6月3日");
  assert.equal(formatChatSessionDate("2025-12-31T09:00:00+08:00", now), "2025年12月31日");
  assert.equal(formatChatSessionDate("invalid", now), "");
});

test("chat history adapter requests the real session endpoint and maps empty titles", async () => {
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
  assert.equal(chats[0]?.title, "新对话");
  assert.equal(chats[0]?.date, "昨天 16:40");
});
