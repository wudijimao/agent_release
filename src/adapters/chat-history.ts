import type { AppShellChat } from "@bioagent/chatui";
import type {
  ChatSessionListItem,
  ChatSessionListResponse,
} from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

const DEFAULT_CHAT_TITLE = "新对话";

function sortChatsByUpdatedAt(chats: readonly AppShellChat[]) {
  return chats
    .map((chat, index) => ({ chat, index }))
    .sort((left, right) => {
      const leftTime = left.chat.updatedAt ? Date.parse(left.chat.updatedAt) : 0;
      const rightTime = right.chat.updatedAt ? Date.parse(right.chat.updatedAt) : 0;
      const normalizedLeft = Number.isNaN(leftTime) ? 0 : leftTime;
      const normalizedRight = Number.isNaN(rightTime) ? 0 : rightTime;
      return normalizedRight - normalizedLeft || left.index - right.index;
    })
    .map(({ chat }) => chat);
}

function isSameLocalDay(left: Date, right: Date) {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

function formatTime(value: Date) {
  return `${String(value.getHours()).padStart(2, "0")}:${String(value.getMinutes()).padStart(2, "0")}`;
}

export function formatChatSessionDate(value: string, now = new Date()) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  if (isSameLocalDay(date, now)) return `今天 ${formatTime(date)}`;

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (isSameLocalDay(date, yesterday)) return `昨天 ${formatTime(date)}`;

  if (date.getFullYear() === now.getFullYear()) {
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  }

  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

export function mapChatSessionToAppShell(
  session: ChatSessionListItem,
  now = new Date(),
): AppShellChat {
  return {
    id: session.id,
    title: session.title?.trim() || DEFAULT_CHAT_TITLE,
    date: formatChatSessionDate(session.updatedAt, now),
    count: 0,
    updatedAt: session.updatedAt,
    ...(session.projectId ? { projectId: session.projectId } : {}),
    ...(session.isPinned ? { isPinned: true } : {}),
    ...(session.sessionKind === "task" ? { isTaskConversation: true } : {}),
  };
}

export function touchAppShellChat(
  chats: readonly AppShellChat[],
  sessionId: string,
  now = new Date(),
) {
  const updatedAt = now.toISOString();
  return sortChatsByUpdatedAt(
    chats.map((chat) => chat.id === sessionId
      ? {
          ...chat,
          updatedAt,
          date: formatChatSessionDate(updatedAt, now),
        }
      : chat),
  );
}

export async function renameChatSession(
  api: ApiClient,
  sessionId: string,
  title: string,
) {
  await api.patch(`/api/agent/sessions/${sessionId}`, { title });
}

export async function setChatSessionPinned(
  api: ApiClient,
  sessionId: string,
  isPinned: boolean,
) {
  await api.patch(`/api/agent/sessions/${sessionId}`, { isPinned });
}

export async function deleteChatSession(api: ApiClient, sessionId: string) {
  await api.delete(`/api/agent/sessions/${sessionId}`);
}

export async function loadAppShellChats(
  api: ApiClient,
  options: { limit?: number; now?: Date; signal?: AbortSignal } = {},
) {
  const limit = Math.min(Math.max(options.limit ?? 50, 1), 100);
  const response = await api.get<ChatSessionListResponse>(
    `/api/chat/history?limit=${limit}`,
    { signal: options.signal },
  );

  return sortChatsByUpdatedAt(
    response.items.map((session) => mapChatSessionToAppShell(session, options.now)),
  );
}
