"use client";

import {
  BaseButton,
  ChatComposerDock,
  ChatConversationViewport,
  ChatPreviewPanel,
  ChatProjectFilesPanel,
  ChatWorkspaceFrame,
  ChatWorkspaceHeader,
  ChatWorkspaceHeaderAction,
  ChatWorkspaceSidePanel,
  InputArea,
  useNavigation,
  type ChatMessage,
  type ChatPreviewItemViewModel,
  type InputSendPayload,
} from "@bioagent/chatui";
import { Folder } from "lucide-react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";

import {
  beginChatStream,
  getChatStreamErrorMessage,
  interruptChatStream,
  loadChatSession,
  mapChatAttachmentRef,
  reconcileChatStream,
  reduceChatStreamEvent,
  shouldReconcileChatStreamFailure,
  type ChatStreamViewState,
  updateLatestUserMessageAttachments,
} from "@/adapters/chat-session";
import {
  CHAT_ATTACHMENT_ACCEPT,
  uploadChatAttachments,
  validateChatAttachmentFile,
} from "@/adapters/chat-attachments";
import { resolveChatSendScope } from "@/adapters/chat-resources";
import {
  loadProjectDetail,
  mapProjectChatWorkspace,
  type ProjectChatWorkspaceViewModel,
} from "@/adapters/projects";
import { streamChat } from "@/lib/api";
import { useApiClient, useAuth } from "@/providers/AuthProvider";
import { useLab } from "@/providers/LabProvider";

import { useChatShell } from "../../WorkspaceShell";
import { useChatResourceCatalog } from "../useChatResourceCatalog";

type PageStatus = "loading" | "ready";

type StreamAttempt = {
  payload: InputSendPayload;
  baseMessages: ChatMessage[];
};

function RouteStatus({
  message,
  action,
}: {
  message: string;
  action?: { label: string; onClick(): void };
}) {
  return (
    <main className="flex h-full w-full items-center justify-center bg-white px-6 text-primaryText">
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

const initialStreamState: ChatStreamViewState = {
  messages: [],
  statusPhase: "analyzing",
  searchSteps: [],
  hasReceivedAssistantChunk: false,
};

const PANEL_MIN_WIDTH = 200;
const PANEL_MAX_WIDTH = 440;
const DEFAULT_PROJECT_PANEL_WIDTH = 260;
const DEFAULT_PREVIEW_PANEL_WIDTH = 320;

export function ChatSessionRoute({ sessionId }: { sessionId: string }) {
  const navigation = useNavigation();
  const api = useApiClient();
  const {
    chats,
    getCachedSession,
    isSidebarOpen,
    openSidebar,
    projects,
    refreshChats,
    touchChat,
  } = useChatShell();
  const cachedSession = getCachedSession(sessionId);
  const currentChat = chats.find((chat) => chat.id === sessionId);
  const currentProject = projects.find(
    (project) => project.id === currentChat?.projectId,
  );
  const { activeLab } = useLab();
  const { status, error: authError, refreshSession } = useAuth();
  const { catalog: resourceCatalog, error: resourceError } =
    useChatResourceCatalog(status === "authenticated");
  const [pageStatus, setPageStatus] = useState<PageStatus>(
    cachedSession ? "ready" : "loading",
  );
  const [title, setTitle] = useState(cachedSession?.title ?? "新对话");
  const [streamState, setStreamState] = useState<ChatStreamViewState>(() => ({
    ...initialStreamState,
    messages: cachedSession?.messages ?? [],
  }));
  const [isStreaming, setIsStreaming] = useState(false);
  const [pageError, setPageError] = useState("");
  const [streamNotice, setStreamNotice] = useState("");
  const [lastAttempt, setLastAttempt] = useState<StreamAttempt | null>(null);
  const [projectWorkspace, setProjectWorkspace] =
    useState<ProjectChatWorkspaceViewModel | null>(null);
  const [projectPanelError, setProjectPanelError] = useState("");
  const [showProjectPanel, setShowProjectPanel] = useState(false);
  const [showPreviewPanel, setShowPreviewPanel] = useState(false);
  const [fileSearchQuery, setFileSearchQuery] = useState("");
  const [previewTabs, setPreviewTabs] = useState<ChatPreviewItemViewModel[]>([]);
  const [activePreviewKey, setActivePreviewKey] = useState<string | null>(null);
  const [projectPanelWidth, setProjectPanelWidth] = useState(
    DEFAULT_PROJECT_PANEL_WIDTH,
  );
  const [previewPanelWidth, setPreviewPanelWidth] = useState(
    DEFAULT_PREVIEW_PANEL_WIDTH,
  );
  const [resizingPanel, setResizingPanel] = useState<
    "project" | "preview" | null
  >(null);
  const resizeStartXRef = useRef(0);
  const resizeStartWidthRef = useRef(0);
  const workspaceContainerRef = useRef<HTMLDivElement | null>(null);
  const streamControllerRef = useRef<AbortController | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const positionedSessionIdRef = useRef<string | null>(null);
  const historyLoadedSessionIdRef = useRef<string | null>(null);
  const persistedMessageIdsRef = useRef<string[]>([]);

  const loadPage = useCallback(
    async (signal?: AbortSignal) => {
      try {
        const session = await loadChatSession(api, sessionId, { signal });
        if (signal?.aborted) return;
        setTitle(session.title);
        setStreamState({ ...initialStreamState, messages: session.messages });
        setShowProjectPanel(false);
        setShowPreviewPanel(false);
        setFileSearchQuery("");
        setPreviewTabs([]);
        setActivePreviewKey(null);
        persistedMessageIdsRef.current = session.messageIds;
        historyLoadedSessionIdRef.current = sessionId;
      } catch (loadError) {
        if (signal?.aborted) return;
        setPageError(
          loadError instanceof Error ? loadError.message : "对话加载失败",
        );
      } finally {
        if (!signal?.aborted) setPageStatus("ready");
      }
    },
    [api, sessionId],
  );

  const loadProjectWorkspace = useCallback(
    async (signal?: AbortSignal) => {
      const projectId = currentChat?.projectId;
      if (!projectId) {
        setProjectWorkspace(null);
        setProjectPanelError("");
        return;
      }

      setProjectPanelError("");
      setProjectWorkspace(null);
      try {
        const project = await loadProjectDetail(api, projectId);
        if (!signal?.aborted) {
          setProjectWorkspace(mapProjectChatWorkspace(project));
        }
      } catch (loadError) {
        if (signal?.aborted) return;
        setProjectWorkspace(null);
        setProjectPanelError(
          loadError instanceof Error ? loadError.message : "项目文件加载失败",
        );
      }
    },
    [api, currentChat?.projectId],
  );

  useEffect(() => {
    if (status === "unauthenticated") {
      navigation.replace(
        `/login?next=${encodeURIComponent(`/chat/${sessionId}`)}`,
      );
    }
  }, [navigation, sessionId, status]);

  useEffect(() => {
    if (status !== "authenticated") return;
    const controller = new AbortController();
    queueMicrotask(() => {
      if (!controller.signal.aborted) {
        void loadPage(controller.signal);
      }
    });
    return () => controller.abort();
  }, [loadPage, status]);

  useEffect(() => {
    if (status !== "authenticated") return;
    const controller = new AbortController();
    queueMicrotask(() => {
      if (!controller.signal.aborted) {
        void loadProjectWorkspace(controller.signal);
      }
    });
    return () => controller.abort();
  }, [loadProjectWorkspace, status]);

  useEffect(() => () => streamControllerRef.current?.abort(), []);

  useLayoutEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (positionedSessionIdRef.current !== sessionId) {
      const positionAtBottom = () => {
        container.scrollTop = container.scrollHeight;
      };
      positionAtBottom();
      positionedSessionIdRef.current = sessionId;

      const content = container.firstElementChild;
      if (!content) return;

      const resizeObserver = new ResizeObserver(positionAtBottom);
      resizeObserver.observe(content);
      const stopObserving = window.setTimeout(
        () => resizeObserver.disconnect(),
        2000,
      );

      return () => {
        window.clearTimeout(stopObserving);
        resizeObserver.disconnect();
      };
    }

    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [isStreaming, sessionId, streamState.messages, streamState.searchSteps]);

  const runStream = useCallback(
    async (payload: InputSendPayload, baseMessages = streamState.messages) => {
      if (isStreaming || !payload.content.trim()) return;

      streamControllerRef.current?.abort();
      const controller = new AbortController();
      streamControllerRef.current = controller;
      setLastAttempt({ payload, baseMessages });
      setPageError("");
      setStreamNotice("");
      setIsStreaming(true);
      touchChat(sessionId);

      let nextState = beginChatStream(baseMessages, {
        role: "user",
        content: payload.content.trim(),
        attachments: payload.attachments.map((attachment) => ({
          ...attachment,
          status: "uploading" as const,
        })),
        references: payload.references,
      });
      let resolvedSessionId = sessionId;
      let knownMessageIds = persistedMessageIdsRef.current;
      let streamStarted = false;
      let uploadCompleted = payload.attachments.length === 0;
      setStreamState(nextState);

      try {
        if (historyLoadedSessionIdRef.current !== sessionId) {
          const baseline = await loadChatSession(api, sessionId, {
            signal: controller.signal,
          });
          knownMessageIds = baseline.messageIds;
          persistedMessageIdsRef.current = baseline.messageIds;
          historyLoadedSessionIdRef.current = sessionId;
        }

        const files = payload.attachments.map((attachment) => {
          if (!attachment.file) {
            throw new Error("附件本地文件不可用，请重新选择");
          }
          return attachment.file;
        });
        const uploaded = await uploadChatAttachments({
          api,
          files,
          scope: { sessionId },
          signal: controller.signal,
        });
        uploadCompleted = true;
        nextState = updateLatestUserMessageAttachments(
          nextState,
          uploaded.attachments.map(mapChatAttachmentRef),
        );

        setStreamState(nextState);
        streamStarted = true;
        const sendScope = resolveChatSendScope(
          payload.references,
          resourceCatalog,
          uploaded.contextRefs,
        );
        for await (const event of streamChat(
          {
            message: payload.content.trim(),
            sessionId,
            ...sendScope,
          },
          {
            signal: controller.signal,
            labId: activeLab?.id,
            onUnauthorized: () => {
              navigation.replace(
                `/login?next=${encodeURIComponent(`/chat/${sessionId}`)}`,
              );
            },
          },
        )) {
          nextState = reduceChatStreamEvent(nextState, event.type, event.data);
          if (nextState.sessionId) resolvedSessionId = nextState.sessionId;
          setStreamState(nextState);
          if (nextState.error) throw new Error(nextState.error);
        }

        const reconciled = await reconcileChatStream(api, resolvedSessionId, {
          userContent: payload.content,
          knownMessageIds,
          signal: controller.signal,
        });
        setTitle(reconciled.title);
        setStreamState({
          ...initialStreamState,
          messages: reconciled.messages,
        });
        persistedMessageIdsRef.current = reconciled.messageIds;
        historyLoadedSessionIdRef.current = resolvedSessionId;
        setLastAttempt(null);
        await refreshChats();
      } catch (streamError) {
        if (controller.signal.aborted) return;
        let reportedError = streamError;
        if (
          streamStarted &&
          shouldReconcileChatStreamFailure(streamError, nextState)
        ) {
          try {
            const recovered = await reconcileChatStream(
              api,
              resolvedSessionId,
              {
                userContent: payload.content,
                knownMessageIds,
                signal: controller.signal,
              },
            );
            setTitle(recovered.title);
            setStreamState({
              ...initialStreamState,
              messages: recovered.messages,
            });
            persistedMessageIdsRef.current = recovered.messageIds;
            historyLoadedSessionIdRef.current = recovered.id;
            setLastAttempt(null);
            await refreshChats();
            return;
          } catch (recoveryError) {
            if (controller.signal.aborted) return;
            reportedError = recoveryError;
          }
        }
        const errorMessage = getChatStreamErrorMessage(reportedError);
        setStreamState((current) => {
          const interrupted = interruptChatStream(current);
          return uploadCompleted
            ? interrupted
            : updateLatestUserMessageAttachments(
                interrupted,
                payload.attachments.map((attachment) => ({
                  ...attachment,
                  status: "error",
                  errorMessage,
                })),
              );
        });
        setPageError(errorMessage);
      } finally {
        if (streamControllerRef.current === controller) {
          streamControllerRef.current = null;
          setIsStreaming(false);
        }
      }
    },
    [
      activeLab?.id,
      api,
      isStreaming,
      navigation,
      resourceCatalog,
      sessionId,
      refreshChats,
      streamState.messages,
      touchChat,
    ],
  );

  const handleCancel = useCallback(() => {
    const controller = streamControllerRef.current;
    if (!controller) return;

    controller.abort();
    setStreamState(interruptChatStream);
    setStreamNotice("已停止生成，你可以重新发送或重试。");
    setIsStreaming(false);
  }, []);

  const normalizedFileSearchQuery = fileSearchQuery.trim().toLowerCase();
  const displayedProjectContent = useMemo(() => {
    const knowledgeDocs = projectWorkspace?.knowledgeDocs ?? [];
    const experiments = projectWorkspace?.experiments ?? [];
    if (!normalizedFileSearchQuery) return { knowledgeDocs, experiments };

    const matches = (value: string) =>
      value.toLowerCase().includes(normalizedFileSearchQuery);
    return {
      knowledgeDocs: knowledgeDocs.filter(
        (item) =>
          matches(item.title) || item.tags.some((tag) => matches(tag)),
      ),
      experiments: experiments.filter(
        (item) =>
          matches(item.title)
          || matches(item.status)
          || item.tags.some((tag) => matches(tag)),
      ),
    };
  }, [normalizedFileSearchQuery, projectWorkspace]);

  const openPreviewItem = useCallback((item: ChatPreviewItemViewModel) => {
    setPreviewTabs((current) => {
      const existingIndex = current.findIndex((tab) => tab.key === item.key);
      if (existingIndex < 0) return [...current, item];
      return current.map((tab, index) => (index === existingIndex ? item : tab));
    });
    setActivePreviewKey(item.key);
    setShowPreviewPanel(true);
  }, []);

  const openProjectFilePreview = useCallback(
    (key: string) => {
      const item = projectWorkspace?.previewItems.find(
        (preview) => preview.key === key,
      );
      if (item) openPreviewItem(item);
    },
    [openPreviewItem, projectWorkspace],
  );

  const closePreviewTab = useCallback((targetKey: string) => {
    setPreviewTabs((current) => {
      const closingIndex = current.findIndex((tab) => tab.key === targetKey);
      if (closingIndex < 0) return current;
      const next = current.filter((tab) => tab.key !== targetKey);
      setActivePreviewKey((activeKey) => {
        if (activeKey !== targetKey) return activeKey;
        if (next.length === 0) {
          setShowPreviewPanel(false);
          return null;
        }
        return next[Math.min(closingIndex, next.length - 1)]?.key ?? null;
      });
      return next;
    });
  }, []);

  const startPanelResize = useCallback(
    (
      panel: "project" | "preview",
      event: ReactMouseEvent<HTMLDivElement>,
    ) => {
      resizeStartXRef.current = event.clientX;
      resizeStartWidthRef.current =
        panel === "project" ? projectPanelWidth : previewPanelWidth;
      setResizingPanel(panel);
    },
    [previewPanelWidth, projectPanelWidth],
  );

  useEffect(() => {
    if (!resizingPanel) return;

    const handleMouseMove = (event: MouseEvent) => {
      const delta = resizeStartXRef.current - event.clientX;
      const nextWidth = Math.max(
        PANEL_MIN_WIDTH,
        Math.min(PANEL_MAX_WIDTH, resizeStartWidthRef.current + delta),
      );
      if (resizingPanel === "project") setProjectPanelWidth(nextWidth);
      else setPreviewPanelWidth(nextWidth);
    };
    const handleMouseUp = () => setResizingPanel(null);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [resizingPanel]);

  if (status === "loading" || status === "unauthenticated") {
    return <RouteStatus message="正在恢复登录状态…" />;
  }

  if (status === "error") {
    return (
      <RouteStatus
        message={authError?.message || "登录状态加载失败"}
        action={{ label: "重新加载", onClick: () => void refreshSession() }}
      />
    );
  }

  if (pageStatus === "loading") {
    return <RouteStatus message="正在加载对话…" />;
  }

  if (pageError && streamState.messages.length === 0) {
    return (
      <RouteStatus
        message={pageError}
        action={{
          label: "重新加载",
          onClick: () => {
            setPageStatus("loading");
            setPageError("");
            void loadPage();
          },
        }}
      />
    );
  }

  return (
    <ChatWorkspaceFrame
      ref={workspaceContainerRef}
      header={
        <ChatWorkspaceHeader
          isSidebarOpen={isSidebarOpen}
          title={title}
          divided={showProjectPanel || showPreviewPanel}
          onOpenSidebar={openSidebar}
          actions={
            <ChatWorkspaceHeaderAction
              active={showProjectPanel}
              icon={<Folder size={14} className="text-secondaryText" />}
              label="项目"
              onClick={() => setShowProjectPanel((current) => !current)}
            />
          }
        />
      }
      sidePanels={
        <>
          <ChatWorkspaceSidePanel
            open={showPreviewPanel}
            width={previewPanelWidth}
            resizing={resizingPanel === "preview"}
          >
            <ChatPreviewPanel
              tabs={previewTabs}
              activeKey={activePreviewKey}
              onSelectTab={setActivePreviewKey}
              onCloseTab={closePreviewTab}
              onClose={() => {
                setShowPreviewPanel(false);
                setPreviewTabs([]);
                setActivePreviewKey(null);
              }}
              onResizeStart={(event) => startPanelResize("preview", event)}
            />
          </ChatWorkspaceSidePanel>
          <ChatWorkspaceSidePanel
            open={showProjectPanel}
            width={projectPanelWidth}
            resizing={resizingPanel === "project"}
          >
            <ChatProjectFilesPanel
              projectName={
                projectWorkspace?.projectName
                ?? currentProject?.name
                ?? "未归属项目"
              }
              searchQuery={fileSearchQuery}
              knowledgeDocs={displayedProjectContent.knowledgeDocs}
              experiments={displayedProjectContent.experiments}
              activePreviewKey={activePreviewKey}
              error={projectPanelError}
              onSearchQueryChange={setFileSearchQuery}
              onOpenKnowledge={(id) =>
                openProjectFilePreview(`knowledge:${id}`)
              }
              onOpenExperiment={(id) =>
                openProjectFilePreview(`experiment:${id}`)
              }
              onResizeStart={(event) => startPanelResize("project", event)}
            />
          </ChatWorkspaceSidePanel>
        </>
      }
    >
      <div className="relative min-h-0 flex-1">
        <ChatConversationViewport
          messages={streamState.messages}
          isTyping={isStreaming}
          statusPhase={streamState.statusPhase}
          searchSteps={streamState.searchSteps}
          hasReceivedAssistantChunk={streamState.hasReceivedAssistantChunk}
          contentMaxWidth={showPreviewPanel ? "100%" : 800}
          scrollContainerRef={scrollContainerRef}
          getMessageKey={(_message: ChatMessage, index: number) =>
            `${sessionId}-${index}`
          }
        />
      </div>

      <ChatComposerDock maxWidth={showPreviewPanel ? "100%" : 840}>
        {(pageError || streamNotice || resourceError) && (
          <div
            role={pageError || resourceError ? "alert" : "status"}
            className="mb-3 flex items-center justify-between gap-3 rounded-lg border border-lineSubtle bg-surfaceMuted px-4 py-2 text-sm text-secondaryText"
          >
            <span>{pageError || streamNotice || resourceError}</span>
            {lastAttempt && (
              <BaseButton
                type="secondary"
                size="small"
                disabled={isStreaming}
                onClick={() =>
                  void runStream(
                    lastAttempt.payload,
                    lastAttempt.baseMessages,
                  )
                }
              >
                重试
              </BaseButton>
            )}
          </div>
        )}
        <InputArea
          onSend={(payload) => void runStream(payload)}
          onCancel={handleCancel}
          disabled={isStreaming}
          isStreaming={isStreaming}
          skillOptions={resourceCatalog.skills}
          fileOptions={resourceCatalog.files}
          uploadAccept={CHAT_ATTACHMENT_ACCEPT}
          validateUploadFile={validateChatAttachmentFile}
          onUploadValidationError={setStreamNotice}
        />
      </ChatComposerDock>
    </ChatWorkspaceFrame>
  );
}
