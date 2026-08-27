"use client";

import {
  AppShell,
  BaseButton,
  useNavigation,
  type AppShellChat,
  type AppShellProject,
} from "@bioagent/chatui";
import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  deleteChatSession,
  loadAppShellChats,
  renameChatSession,
  setChatSessionPinned,
  touchAppShellChat,
  upsertAppShellChat,
} from "@/adapters/chat-history";
import type { ChatStreamViewState } from "@/adapters/chat-session";
import {
  loadAiUsageReminder,
  shouldShowAiUsageReminder,
} from "@/adapters/ai-usage";
import { loadProjectsBootstrap, mapProjectsToShell } from "@/adapters/projects";
import {
  canAccessWorkspacePath,
  getWorkspaceAccess,
} from "@/adapters/workspace-access";
import { useApiClient, useAuth } from "@/providers/AuthProvider";
import { useLab } from "@/providers/LabProvider";

interface OpenChatOptions {
  replace?: boolean;
}

interface ChatShellContextValue {
  isSidebarOpen: boolean;
  openSidebar(): void;
  chats: readonly AppShellChat[];
  projects: readonly AppShellProject[];
  defaultProjectId?: string;
  openChat(sessionId: string, options?: OpenChatOptions): void;
  refreshChats(): Promise<void>;
  refreshProjects(): Promise<void>;
  touchChat(sessionId: string): void;
  upsertChat(chat: AppShellChat): void;
  chatStreamHandoff?: ChatStreamHandoff;
  publishChatStreamHandoff(handoff: ChatStreamHandoff): void;
  clearChatStreamHandoff(sessionId: string): void;
}

interface ChatStreamHandoff {
  sessionId: string;
  state: ChatStreamViewState;
  isStreaming: boolean;
  notice?: string;
}

const ChatShellContext = createContext<ChatShellContextValue | null>(null);
const NOTICE_AUTO_HIDE_MS = 4_000;

function ShellStatus({
  message,
  action,
}: {
  message: string;
  action?: { label: string; onClick(): void };
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bgLight px-6 text-primaryText">
      <div className="space-y-4 text-center">
        <p className="text-sm text-secondaryText">{message}</p>
        {action && (
          <BaseButton type="secondary" size="small" onClick={action.onClick}>
            {action.label}
          </BaseButton>
        )}
      </div>
    </main>
  );
}

export function WorkspaceShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const navigation = useNavigation();
  const api = useApiClient();
  const { status, user, error, refreshSession, signOut } = useAuth();
  const { activeLabRole } = useLab();
  const workspaceAccess = useMemo(
    () => getWorkspaceAccess(activeLabRole),
    [activeLabRole],
  );
  const canAccessCurrentPath = canAccessWorkspacePath(pathname, workspaceAccess);
  const [chats, setChats] = useState<AppShellChat[]>([]);
  const [projects, setProjects] = useState<AppShellProject[]>([]);
  const [defaultProjectId, setDefaultProjectId] = useState<string>();
  const [historyStatus, setHistoryStatus] = useState<"loading" | "ready">(
    "loading",
  );
  const [notice, setNotice] = useState("");
  const [aiUsageWarningActive, setAiUsageWarningActive] = useState(false);
  const [chatStreamHandoff, setChatStreamHandoff] =
    useState<ChatStreamHandoff>();
  const chatRefreshRequestIdRef = useRef(0);
  const optimisticChatsRef = useRef(new Map<string, AppShellChat>());

  const mergeOptimisticChats = useCallback((items: AppShellChat[]) => {
    let merged = items;
    optimisticChatsRef.current.forEach((chat, sessionId) => {
      if (items.some((item) => item.id === sessionId)) {
        optimisticChatsRef.current.delete(sessionId);
        return;
      }
      merged = upsertAppShellChat(merged, chat);
    });
    return merged;
  }, []);

  const refreshChats = useCallback(async () => {
    const requestId = ++chatRefreshRequestIdRef.current;
    try {
      const items = await loadAppShellChats(api);
      if (requestId !== chatRefreshRequestIdRef.current) return;
      setChats(mergeOptimisticChats(items));
      setNotice("");
    } catch (loadError) {
      if (requestId !== chatRefreshRequestIdRef.current) return;
      setNotice(
        loadError instanceof Error ? loadError.message : "历史对话加载失败",
      );
    } finally {
      setHistoryStatus("ready");
    }
  }, [api, mergeOptimisticChats]);

  const refreshProjects = useCallback(async () => {
    const payload = await loadProjectsBootstrap(api);
    setProjects(mapProjectsToShell(payload.projects));
    setDefaultProjectId(payload.defaultProject.id);
  }, [api]);

  useEffect(() => {
    if (status === "unauthenticated") {
      navigation.replace(`/login?next=${encodeURIComponent(pathname)}`);
      return;
    }
    if (status !== "authenticated") return;

    const controller = new AbortController();
    loadAppShellChats(api, { signal: controller.signal })
      .then((items) => {
        if (controller.signal.aborted) return;
        setChats(mergeOptimisticChats(items));
        setNotice("");
        setHistoryStatus("ready");
      })
      .catch((loadError: unknown) => {
        if (controller.signal.aborted) return;
        setNotice(
          loadError instanceof Error ? loadError.message : "历史对话加载失败",
        );
        setHistoryStatus("ready");
      });

    return () => controller.abort();
  }, [api, mergeOptimisticChats, navigation, pathname, status]);

  useEffect(() => {
    if (status !== "authenticated") return;

    let cancelled = false;
    loadProjectsBootstrap(api)
      .then((payload) => {
        if (!cancelled) {
          setProjects(mapProjectsToShell(payload.projects));
          setDefaultProjectId(payload.defaultProject.id);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setProjects([]);
          setDefaultProjectId(undefined);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [api, status]);

  useEffect(() => {
    if (status === "authenticated" && !canAccessCurrentPath) {
      navigation.replace("/chat/new");
    }
  }, [canAccessCurrentPath, navigation, status]);

  useEffect(() => {
    if (status !== "authenticated") return;

    let cancelled = false;
    loadAiUsageReminder(api)
      .then((summary) => {
        if (!cancelled) {
          setAiUsageWarningActive(shouldShowAiUsageReminder(summary));
        }
      })
      .catch(() => {
        if (!cancelled) setAiUsageWarningActive(false);
      });

    return () => {
      cancelled = true;
    };
  }, [api, status]);

  useEffect(() => {
    if (!notice) return;

    const timerId = window.setTimeout(() => {
      setNotice("");
    }, NOTICE_AUTO_HIDE_MS);

    return () => window.clearTimeout(timerId);
  }, [notice]);

  const openChat = useCallback(
    (sessionId: string, options?: OpenChatOptions) => {
      setNotice("");
      const href = `/chat/${sessionId}`;
      if (options?.replace) navigation.replace(href);
      else navigation.push(href);
    },
    [navigation],
  );

  const publishChatStreamHandoff = useCallback((handoff: ChatStreamHandoff) => {
    setChatStreamHandoff(handoff);
  }, []);

  const clearChatStreamHandoff = useCallback((sessionId: string) => {
    setChatStreamHandoff((current) =>
      current?.sessionId === sessionId ? undefined : current,
    );
  }, []);

  const contextValue = useMemo<Omit<ChatShellContextValue, "isSidebarOpen" | "openSidebar" | "chats" | "touchChat" | "upsertChat">>(
    () => ({
      projects,
      defaultProjectId,
      openChat,
      refreshChats,
      refreshProjects,
      chatStreamHandoff,
      publishChatStreamHandoff,
      clearChatStreamHandoff,
    }),
    [
      chatStreamHandoff,
      clearChatStreamHandoff,
      defaultProjectId,
      openChat,
      projects,
      publishChatStreamHandoff,
      refreshChats,
      refreshProjects,
    ],
  );

  const shellUser = useMemo(
    () => ({
      name: user?.name?.trim() || user?.email || "研究员",
      avatarText: (user?.name?.trim() || user?.email || "研").slice(0, 1),
      avatarUrl: user?.avatarUrl,
    }),
    [user?.avatarUrl, user?.email, user?.name],
  );

  const handleRenameChat = useCallback(async (sessionId: string, title: string) => {
    try {
      await renameChatSession(api, sessionId, title);
      await refreshChats();
    } catch (mutationError) {
      setNotice(
        mutationError instanceof Error ? mutationError.message : "对话重命名失败",
      );
      await refreshChats();
    }
  }, [api, refreshChats]);

  const handleTogglePinChat = useCallback(async (sessionId: string, isPinned: boolean) => {
    try {
      await setChatSessionPinned(api, sessionId, isPinned);
      await refreshChats();
    } catch (mutationError) {
      setNotice(
        mutationError instanceof Error ? mutationError.message : "对话置顶状态更新失败",
      );
      await refreshChats();
    }
  }, [api, refreshChats]);

  const handleDeleteChat = useCallback(async (sessionId: string) => {
    try {
      await deleteChatSession(api, sessionId);
      await refreshChats();
    } catch (mutationError) {
      await refreshChats();
      throw mutationError;
    }
  }, [api, refreshChats]);

  if (status === "loading" || status === "unauthenticated") {
    return <ShellStatus message="正在恢复登录状态…" />;
  }

  if (status === "error") {
    return (
      <ShellStatus
        message={error?.message || "登录状态加载失败"}
        action={{ label: "重新加载", onClick: () => void refreshSession() }}
      />
    );
  }

  if (historyStatus === "loading") {
    return <ShellStatus message="正在加载工作台…" />;
  }

  if (!canAccessCurrentPath) {
    return <ShellStatus message="正在返回工作台…" />;
  }

  const handleNavigate = (href: string, options?: OpenChatOptions) => {
    if (!canAccessWorkspacePath(href, workspaceAccess)) {
      setNotice("当前账号无权访问该页面。");
      return;
    }

    if (href === "/chat/new") {
      if (options?.replace) navigation.replace(href);
      else navigation.push(href);
      return;
    }

    const sessionId = href.match(/^\/chat\/([^/?]+)/)?.[1];
    if (sessionId) {
      void openChat(sessionId, options);
      return;
    }

    if (href === "/skills") {
      navigation.push("/chat/skills");
      return;
    }

    if (
      href === "/members" ||
      href === "/projects" ||
      href === "/system-settings" ||
      href === "/tools" ||
      href === "/ai-usage"
    ) {
      navigation.push(href);
      return;
    }

    setNotice("该页面将在后续模块接入真实服务后开放。");
  };

  return (
    <AppShell
        currentPath={pathname}
        projects={projects}
        initialChats={chats}
        logoUrl="/helia-logo.png"
        user={shellUser}
        aiUsageWarningActive={
          workspaceAccess.canViewAiUsage && aiUsageWarningActive
        }
        canViewAiUsage={workspaceAccess.canViewAiUsage}
        canManageMembers={workspaceAccess.canManageMembers}
        chatActions={{ rename: true, share: false, pin: true, delete: true }}
        onNavigate={handleNavigate}
        onLogout={() => void signOut()}
        onRenameChat={(sessionId, title) => void handleRenameChat(sessionId, title)}
        onTogglePinChat={(sessionId, isPinned) => void handleTogglePinChat(sessionId, isPinned)}
        onDeleteChat={handleDeleteChat}
      >
        {({ chats: shellChats, isSidebarOpen, setIsSidebarOpen, setChats: setShellChats }) => (
          <ChatShellContext.Provider value={{
            ...contextValue,
            chats: shellChats,
            isSidebarOpen,
            openSidebar: () => setIsSidebarOpen(true),
            touchChat: (sessionId) => {
              setShellChats((current) => touchAppShellChat(current, sessionId));
            },
            upsertChat: (chat) => {
              optimisticChatsRef.current.set(chat.id, chat);
              setChats((current) => upsertAppShellChat(current, chat));
              setShellChats((current) => upsertAppShellChat(current, chat));
            },
          }}>
            <div className="relative flex h-full w-full">
              {children}
              {notice && (
                <div
                  role="status"
                  className="absolute bottom-6 left-1/2 z-20 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-lineSubtle bg-white px-4 py-2 text-sm text-secondaryText shadow-md"
                >
                  {notice}
                </div>
              )}
            </div>
          </ChatShellContext.Provider>
        )}
      </AppShell>
  );
}

export function useChatShell() {
  const value = useContext(ChatShellContext);
  if (!value) throw new Error("useChatShell must be used within WorkspaceShell");
  return value;
}
