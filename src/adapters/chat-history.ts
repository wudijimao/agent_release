import type { AppShellChat } from "@bioagent/chatui";
import type {
  ChatSessionListItem,
  ChatSessionListResponse,
} from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

const DEFAULT_CHAT_TITLE = "新对话";

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
  };
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

  return response.items.map((session) =>
    mapChatSessionToAppShell(session, options.now),
  );
}
