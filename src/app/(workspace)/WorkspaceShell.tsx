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
} from "@/adapters/chat-history";
import {
  loadChatSession,
  type ChatSessionViewModel,
} from "@/adapters/chat-session";
import { loadProjectsBootstrap, mapProjectsToShell } from "@/adapters/projects";
import { useApiClient, useAuth } from "@/providers/AuthProvider";

interface OpenChatOptions {
  replace?: boolean;
}

interface ChatShellContextValue {
  isSidebarOpen: boolean;
  openSidebar(): void;
  chats: readonly AppShellChat[];
  projects: readonly AppShellProject[];
  getCachedSession(sessionId: string): ChatSessionViewModel | undefined;
  openChat(sessionId: string, options?: OpenChatOptions): Promise<void>;
  refreshChats(): Promise<void>;
  refreshProjects(): Promise<void>;
  touchChat(sessionId: string): void;
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
  const [chats, setChats] = useState<AppShellChat[]>([]);
  const [projects, setProjects] = useState<AppShellProject[]>([]);
  const [historyStatus, setHistoryStatus] = useState<"loading" | "ready">(
    "loading",
  );
  const [notice, setNotice] = useState("");
  const sessionCacheRef = useRef(new Map<string, ChatSessionViewModel>());

  const refreshChats = useCallback(async () => {
    try {
      const items = await loadAppShellChats(api);
      setChats(items);
      setNotice("");
    } catch (loadError) {
      setNotice(
        loadError instanceof Error ? loadError.message : "历史对话加载失败",
      );
    } finally {
      setHistoryStatus("ready");
    }
  }, [api]);

  const refreshProjects = useCallback(async () => {
    const payload = await loadProjectsBootstrap(api);
    setProjects(mapProjectsToShell(payload.projects));
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
        setChats(items);
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
  }, [api, navigation, pathname, status]);

  useEffect(() => {
    if (status !== "authenticated") return;

    let cancelled = false;
    loadProjectsBootstrap(api)
      .then((payload) => {
        if (!cancelled) setProjects(mapProjectsToShell(payload.projects));
      })
      .catch(() => {
        if (!cancelled) setProjects([]);
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
    async (sessionId: string, options?: OpenChatOptions) => {
      setNotice("");
      try {
        const session = await loadChatSession(api, sessionId);
        sessionCacheRef.current.set(sessionId, session);
        const href = `/chat/${sessionId}`;
        if (options?.replace) navigation.replace(href);
        else navigation.push(href);
      } catch (loadError) {
        setNotice(
          loadError instanceof Error ? loadError.message : "对话加载失败",
        );
      }
    },
    [api, navigation],
  );

  const contextValue = useMemo<Omit<ChatShellContextValue, "isSidebarOpen" | "openSidebar" | "chats" | "touchChat">>(
    () => ({
      projects,
      getCachedSession: (sessionId) => sessionCacheRef.current.get(sessionId),
      openChat,
      refreshChats,
      refreshProjects,
    }),
    [openChat, projects, refreshChats, refreshProjects],
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
      sessionCacheRef.current.delete(sessionId);
      await refreshChats();
    } catch (mutationError) {
      setNotice(
        mutationError instanceof Error ? mutationError.message : "对话删除失败",
      );
      await refreshChats();
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

  const handleNavigate = (href: string, options?: OpenChatOptions) => {
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

    if (href === "/members" || href === "/projects" || href === "/system-settings" || href === "/tools") {
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
        chatActions={{ rename: true, share: true, pin: true, delete: true }}
        onNavigate={handleNavigate}
        onLogout={() => void signOut()}
        onRenameChat={(sessionId, title) => void handleRenameChat(sessionId, title)}
        onTogglePinChat={(sessionId, isPinned) => void handleTogglePinChat(sessionId, isPinned)}
        onShareChat={() => setNotice("分享对话功能正在接入服务端，入口已按高保真原型保留。")}
        onDeleteChat={(sessionId) => void handleDeleteChat(sessionId)}
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
