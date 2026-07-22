"use client";

import { useEffect, useState } from "react";

import {
  createEmptyChatResourceCatalog,
  loadChatResourceCatalog,
  type ChatResourceCatalog,
} from "@/adapters/chat-resources";
import type { ApiClient } from "@/lib/api";
import { useApiClient } from "@/providers/AuthProvider";

interface ChatResourceState {
  owner: ApiClient | null;
  catalog: ChatResourceCatalog;
  error: string;
}

const emptyState: ChatResourceState = {
  owner: null,
  catalog: createEmptyChatResourceCatalog(),
  error: "",
};

export function useChatResourceCatalog(enabled = true) {
  const api = useApiClient();
  const [state, setState] = useState<ChatResourceState>(() => ({
    owner: api,
    catalog: createEmptyChatResourceCatalog(),
    error: "",
  }));

  useEffect(() => {
    const controller = new AbortController();
    if (!enabled) return () => controller.abort();

    void loadChatResourceCatalog(api, { signal: controller.signal })
      .then((catalog) => {
        if (!controller.signal.aborted) setState({ owner: api, catalog, error: "" });
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        setState({
          owner: api,
          catalog: createEmptyChatResourceCatalog(),
          error:
            error instanceof Error
              ? error.message
              : "Skill 与引用资源加载失败，请刷新后重试",
        });
      });

    return () => controller.abort();
  }, [api, enabled]);

  return enabled && state.owner === api ? state : emptyState;
}
