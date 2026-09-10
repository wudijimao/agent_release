import type { ChatStreamViewState } from "@/adapters/chat-session";

export interface ChatStreamMemorySnapshot {
  sessionId: string;
  state: ChatStreamViewState;
  isStreaming: boolean;
  notice?: string;
}

export type ChatStreamMemorySnapshots = Readonly<
  Record<string, ChatStreamMemorySnapshot>
>;

export function storeChatStreamMemorySnapshot(
  current: ChatStreamMemorySnapshots,
  snapshot: ChatStreamMemorySnapshot,
): ChatStreamMemorySnapshots {
  return { ...current, [snapshot.sessionId]: snapshot };
}

export function removeChatStreamMemorySnapshot(
  current: ChatStreamMemorySnapshots,
  sessionId: string,
): ChatStreamMemorySnapshots {
  if (!current[sessionId]) return current;
  const next = { ...current };
  delete next[sessionId];
  return next;
}

export class ChatStreamControllerRegistry {
  private readonly controllers = new Map<string, AbortController>();

  register(sessionId: string, controller: AbortController) {
    const current = this.controllers.get(sessionId);
    if (current && current !== controller) current.abort();
    this.controllers.set(sessionId, controller);
  }

  release(sessionId: string, controller: AbortController) {
    if (this.controllers.get(sessionId) === controller) {
      this.controllers.delete(sessionId);
    }
  }

  cancel(sessionId: string) {
    const controller = this.controllers.get(sessionId);
    if (!controller) return false;
    controller.abort();
    this.controllers.delete(sessionId);
    return true;
  }

  abortAll() {
    this.controllers.forEach((controller) => controller.abort());
    this.controllers.clear();
  }
}
