"use client";

import {
  BaseButton,
  BaseModal,
  ChatComposerDock,
  ChatConversationViewport,
  ChatPreviewPanel,
  ChatProjectFilesPanel,
  ProjectDocumentEditor,
  ChatTimelineNavigation,
  ChatWorkspaceFrame,
  ChatWorkspaceHeader,
  ChatWorkspaceHeaderAction,
  ChatWorkspaceSidePanel,
  InputArea,
  useNavigation,
  type ChatMessage,
  type ChatPreviewItemViewModel,
  type ChatTimelineItem,
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
import { flushSync } from "react-dom";

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
  isUnassignedProject,
  loadProjectDetail,
  mapProjectChatWorkspace,
  type ProjectChatWorkspaceViewModel,
} from "@/adapters/projects";
import {
  cancelMiraDocumentDraft,
  confirmMiraDocumentDraft,
  mapMiraDocumentDraftPreview,
  type MiraDocumentDraftAction,
} from "@/adapters/mira-document-drafts";
import { loadProjectDocumentDetail } from "@/adapters/project-document-detail";
import { streamChat } from "@/lib/api";
import { useApiClient, useAuth } from "@/providers/AuthProvider";
import { useLab } from "@/providers/LabProvider";

import { useChatShell } from "../../WorkspaceShell";
import { useChatResourceCatalog } from "../useChatResourceCatalog";
import {
  clampChatPreviewWidth,
  resolveChatPreviewLayout,
} from "../chat-preview-layout";

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
  statusVisible: false,
  searchSteps: [],
  hasReceivedAssistantChunk: false,
  deferredActions: {},
};

interface MiraDraftEditState {
  title: string;
  markdown: string;
}

interface MiraDraftTargetSelection {
  actionKey: string;
  editedContent?: MiraDraftEditState;
  previewItemKey?: string;
}

const PANEL_MIN_WIDTH = 200;
const PANEL_MAX_WIDTH = 440;
const DEFAULT_PROJECT_PANEL_WIDTH = 260;
const DEFAULT_PREVIEW_PANEL_WIDTH = 520;
const CHAT_TIMELINE_MIN_ITEMS = 5;

function measureWorkspaceWidth(container: HTMLDivElement | null) {
  if (!container) return 0;
  let measuredWidth = container.getBoundingClientRect().width;
  let ancestor = container.parentElement;
  while (ancestor && ancestor.tagName !== "MAIN") {
    measuredWidth = Math.max(measuredWidth, ancestor.getBoundingClientRect().width);
    ancestor = ancestor.parentElement;
  }
  return measuredWidth;
}

function normalizeTimelinePreview(content: string) {
  const normalized = content.replace(/\s+/g, " ").trim();
  if (!normalized) return "空白消息";
  return normalized.length > 56
    ? `${normalized.slice(0, 56)}...`
    : normalized;
}

export function ChatSessionRoute({ sessionId }: { sessionId: string }) {
  const navigation = useNavigation();
  const api = useApiClient();
  const {
    chats,
    defaultProjectId,
    getCachedSession,
    isSidebarOpen,
    openSidebar,
    projects,
    refreshChats,
    refreshProjects,
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
    statusVisible: cachedSession?.isReplying ?? false,
  }));
  const [miraDraftActions, setMiraDraftActions] = useState<
    Record<string, MiraDocumentDraftAction>
  >({});
  const [miraDraftEdits, setMiraDraftEdits] = useState<
    Record<string, MiraDraftEditState>
  >({});
  const [miraDraftTargetSelection, setMiraDraftTargetSelection] =
    useState<MiraDraftTargetSelection | null>(null);
  const [selectedMiraTargetProjectId, setSelectedMiraTargetProjectId] =
    useState<string>();
  const [pendingDisplayActionKey, setPendingDisplayActionKey] = useState<string>();
  const [pendingMiraActionKey, setPendingMiraActionKey] = useState<string>();
  const [isStreaming, setIsStreaming] = useState(false);
  const [isRemoteReplying, setIsRemoteReplying] = useState(
    cachedSession?.isReplying ?? false,
  );
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
  const [workspaceWidth, setWorkspaceWidth] = useState(0);
  const streamControllerRef = useRef<AbortController | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const messageElementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const positionedSessionIdRef = useRef<string | null>(null);
  const historyLoadedSessionIdRef = useRef<string | null>(null);
  const persistedMessageIdsRef = useRef<string[]>([]);
  const [timelineSelection, setTimelineSelection] = useState<{
    sessionId: string;
    messageIndex: number;
  } | null>(null);

  const chatTimelineItems = useMemo<ChatTimelineItem[]>(
    () =>
      streamState.messages.reduce<ChatTimelineItem[]>(
        (items, message, messageIndex) => {
          if (message.role !== "user") return items;
          items.push({
            messageIndex,
            preview: normalizeTimelinePreview(message.content),
          });
          return items;
        },
        [],
      ),
    [streamState.messages],
  );
  const activeTimelineMessageIndex = useMemo(() => {
    if (
      timelineSelection?.sessionId === sessionId
      && chatTimelineItems.some(
        (item) => item.messageIndex === timelineSelection.messageIndex,
      )
    ) {
      return timelineSelection.messageIndex;
    }
    return chatTimelineItems.at(-1)?.messageIndex ?? 0;
  }, [chatTimelineItems, sessionId, timelineSelection]);
  const updateTimelineSelection = useCallback(
    (messageIndex: number) => {
      setTimelineSelection((current) =>
        current?.sessionId === sessionId
        && current.messageIndex === messageIndex
          ? current
          : { sessionId, messageIndex },
      );
    },
    [sessionId],
  );

  const syncActiveTimelineByScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || chatTimelineItems.length === 0) return;

    const firstMessageIndex = chatTimelineItems[0].messageIndex;
    const lastMessageIndex =
      chatTimelineItems[chatTimelineItems.length - 1].messageIndex;
    const distanceToBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight;

    if (container.scrollTop <= 2) {
      updateTimelineSelection(firstMessageIndex);
      return;
    }

    if (distanceToBottom <= 2) {
      updateTimelineSelection(lastMessageIndex);
      return;
    }

    const viewportAnchor =
      container.scrollTop + Math.min(container.clientHeight * 0.35, 220);
    let nextActiveMessageIndex = firstMessageIndex;

    chatTimelineItems.forEach((item) => {
      const anchorElement = messageElementRefs.current[item.messageIndex];
      if (anchorElement && anchorElement.offsetTop <= viewportAnchor) {
        nextActiveMessageIndex = item.messageIndex;
      }
    });
    updateTimelineSelection(nextActiveMessageIndex);
  }, [chatTimelineItems, updateTimelineSelection]);

  const scrollToTimelineMessage = useCallback((messageIndex: number) => {
    const container = scrollContainerRef.current;
    const anchorElement = messageElementRefs.current[messageIndex];
    if (!container || !anchorElement) return;

    updateTimelineSelection(messageIndex);
    container.scrollTo({
      top: Math.max(anchorElement.offsetTop - 88, 0),
      behavior: "smooth",
    });
  }, [updateTimelineSelection]);

  const loadPage = useCallback(
    async (signal?: AbortSignal) => {
      try {
        const session = await loadChatSession(api, sessionId, {
          signal,
          projectName: currentProject?.name,
        });
        if (signal?.aborted) return;
        setTitle(session.title);
        setStreamState({
          ...initialStreamState,
          messages: session.messages,
          statusVisible: session.isReplying,
          deferredActions: session.deferredActions,
        });
        setMiraDraftActions(session.miraDraftActions);
        setIsRemoteReplying(session.isReplying);
        setShowProjectPanel(false);
        setShowPreviewPanel(false);
        setFileSearchQuery("");
        setPreviewTabs([]);
        setActivePreviewKey(null);
        persistedMessageIdsRef.current = session.messageIds;
        historyLoadedSessionIdRef.current = sessionId;
      } catch (loadError) {
        if (signal?.aborted) return;
        setIsRemoteReplying(false);
        setPageError(
          loadError instanceof Error ? loadError.message : "对话加载失败",
        );
      } finally {
        if (!signal?.aborted) setPageStatus("ready");
      }
    },
    [api, currentProject, sessionId],
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

  useEffect(() => {
    if (
      status !== "authenticated" ||
      !isRemoteReplying ||
      isStreaming
    ) {
      return;
    }

    const controller = new AbortController();
    let pollTimer: number | undefined;

    const pollReplyState = async () => {
      try {
        const session = await loadChatSession(api, sessionId, {
          signal: controller.signal,
          projectName: currentProject?.name,
        });
        if (controller.signal.aborted) return;

        setTitle(session.title);
        setStreamState({
          ...initialStreamState,
          messages: session.messages,
          statusVisible: session.isReplying,
          deferredActions: session.deferredActions,
        });
        setMiraDraftActions(session.miraDraftActions);
        setIsRemoteReplying(session.isReplying);
        persistedMessageIdsRef.current = session.messageIds;
        historyLoadedSessionIdRef.current = sessionId;

        if (!session.isReplying) {
          await refreshChats();
          return;
        }
      } catch {
        if (controller.signal.aborted) return;
      }

      pollTimer = window.setTimeout(pollReplyState, 1_500);
    };

    pollTimer = window.setTimeout(pollReplyState, 1_500);
    return () => {
      controller.abort();
      if (pollTimer !== undefined) window.clearTimeout(pollTimer);
    };
  }, [
    api,
    currentProject?.name,
    isRemoteReplying,
    isStreaming,
    refreshChats,
    sessionId,
    status,
  ]);

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

  }, [sessionId, streamState.messages.length]);

  useEffect(() => {
    messageElementRefs.current.length = streamState.messages.length;
  }, [streamState.messages.length]);

  const runStream = useCallback(
    async (payload: InputSendPayload, baseMessages = streamState.messages) => {
      if (isStreaming || isRemoteReplying || !payload.content.trim()) return;

      streamControllerRef.current?.abort();
      const controller = new AbortController();
      streamControllerRef.current = controller;
      setLastAttempt({ payload, baseMessages });
      setPageError("");
      setStreamNotice("");
      setIsStreaming(true);
      setIsRemoteReplying(false);
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
            projectName: currentProject?.name,
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
          if (nextState.miraDraftActions) {
            setMiraDraftActions((current) => ({
              ...current,
              ...nextState.miraDraftActions,
            }));
          }
          if (nextState.error) throw new Error(nextState.error);
        }

        const reconciled = await reconcileChatStream(api, resolvedSessionId, {
          userContent: payload.content,
          knownMessageIds,
          signal: controller.signal,
          projectName: currentProject?.name,
        });
        setTitle(reconciled.title);
        setStreamState({
          ...initialStreamState,
          messages: reconciled.messages,
          deferredActions: reconciled.deferredActions,
        });
        setMiraDraftActions(reconciled.miraDraftActions);
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
                projectName: currentProject?.name,
              },
            );
            setTitle(recovered.title);
            setStreamState({
              ...initialStreamState,
              messages: recovered.messages,
              deferredActions: recovered.deferredActions,
            });
            setMiraDraftActions(recovered.miraDraftActions);
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
      currentProject?.name,
      isRemoteReplying,
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

  const handleConfirmMiraDraft = useCallback(
    async (
      actionKey: string,
      editedContent?: MiraDraftEditState,
      selectedTargetProjectId?: string,
      previewItemKey?: string,
    ) => {
      if (pendingMiraActionKey) return false;
      const sourceAction = miraDraftActions[actionKey];
      if (!sourceAction) return false;

      const conversationProjectId = currentChat?.projectId;
      const conversationIsUnassigned = isUnassignedProject(
        conversationProjectId,
        defaultProjectId,
      );
      if (conversationIsUnassigned && !selectedTargetProjectId) {
        setSelectedMiraTargetProjectId(undefined);
        setMiraDraftTargetSelection({
          actionKey,
          editedContent,
          previewItemKey,
        });
        return false;
      }
      const projectId = selectedTargetProjectId ?? conversationProjectId;
      if (!projectId) return false;
      const action = editedContent
        ? { ...sourceAction, ...editedContent }
        : sourceAction;

      const updateDraftCard = (
        patch: Partial<NonNullable<ChatMessage["miraDraft"]>>,
      ) => {
        setStreamState((current) => ({
          ...current,
          messages: current.messages.map((message) =>
            message.miraDraft?.actionKey === actionKey
              ? { ...message, miraDraft: { ...message.miraDraft, ...patch } }
              : message,
          ),
        }));
      };

      updateDraftCard({ status: "saving", errorMessage: undefined });
      setPendingMiraActionKey(actionKey);
      setStreamNotice("");
      try {
        const selectedProject = selectedTargetProjectId
          ? await loadProjectDetail(api, selectedTargetProjectId)
          : null;
        const confirmation = await confirmMiraDocumentDraft(api, action, {
          projectId,
          projectName:
            selectedProject?.name
            ?? projectWorkspace?.projectName
            ?? currentProject?.name
            ?? "当前项目",
          parentNodeId:
            selectedProject?.defaultKbNodeId
            ?? projectWorkspace?.defaultKbNodeId,
        });
        const documentId = confirmation.nodeId ?? confirmation.outputRef?.nodeId;
        updateDraftCard({
          status: "saved",
          errorMessage: undefined,
          ...(documentId
            ? { documentId, previewable: true }
            : { previewable: false }),
        });
        setMiraDraftActions((current) => {
          const next = { ...current };
          delete next[actionKey];
          return next;
        });
        await Promise.all([loadProjectWorkspace(), refreshProjects()]);
        return true;
      } catch (error) {
        updateDraftCard({
          status: "error",
          errorMessage:
            error instanceof Error ? error.message : "文档保存失败，请重试。",
        });
        return false;
      } finally {
        setPendingMiraActionKey(undefined);
      }
    },
    [
      api,
      currentChat,
      currentProject,
      defaultProjectId,
      loadProjectWorkspace,
      miraDraftActions,
      pendingMiraActionKey,
      projectWorkspace,
      refreshProjects,
    ],
  );

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
    setShowPreviewPanel((current) => {
      if (!current) {
        const layout = resolveChatPreviewLayout(
          measureWorkspaceWidth(workspaceContainerRef.current) || workspaceWidth,
          showProjectPanel ? projectPanelWidth : 0,
        );
        setPreviewPanelWidth(layout.defaultWidth);
      }
      return true;
    });
  }, [projectPanelWidth, showProjectPanel, workspaceWidth]);

  const openProjectFilePreview = useCallback(
    async (key: string) => {
      const item = projectWorkspace?.previewItems.find(
        (preview) => preview.key === key,
      );
      if (!item) return;

      openPreviewItem({ ...item, loading: true, error: undefined, document: undefined });
      try {
        const document = await loadProjectDocumentDetail(
          api,
          key.slice(key.indexOf(":") + 1),
        );
        openPreviewItem({ ...item, document, loading: false, error: undefined });
      } catch (loadError) {
        openPreviewItem({
          ...item,
          loading: false,
          error: loadError instanceof Error ? loadError.message : "文档加载失败",
        });
      }
    },
    [api, openPreviewItem, projectWorkspace],
  );

  const previewLayout = useMemo(
    () => resolveChatPreviewLayout(
      workspaceWidth,
      showProjectPanel ? projectPanelWidth : 0,
      previewPanelWidth,
    ),
    [previewPanelWidth, projectPanelWidth, showProjectPanel, workspaceWidth],
  );
  const effectivePreviewPanelWidth = clampChatPreviewWidth(
    previewPanelWidth,
    previewLayout,
  );

  useLayoutEffect(() => {
    const container = workspaceContainerRef.current;
    if (!container) return;
    const updateWidth = () => setWorkspaceWidth(measureWorkspaceWidth(container));
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(container);
    return () => observer.disconnect();
  }, [pageStatus]);

  const closePreviewTab = useCallback((targetKey: string) => {
    if (targetKey.startsWith("draft:")) {
      const actionKey = targetKey.slice("draft:".length);
      setMiraDraftEdits((current) => {
        if (!(actionKey in current)) return current;
        const next = { ...current };
        delete next[actionKey];
        return next;
      });
    }
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

  const handlePreviewMiraDraft = useCallback(
    async (actionKey: string) => {
      const savedDraft = streamState.messages.find(
        (message) => message.miraDraft?.actionKey === actionKey,
      )?.miraDraft;
      if (savedDraft?.documentId) {
        const item: ChatPreviewItemViewModel = {
          key: `saved-draft:${savedDraft.documentId}`,
          type: "knowledge",
          title: savedDraft.title,
          subtitle: `${savedDraft.targetLabel ?? "项目"} · 已保存文档`,
        };
        openPreviewItem({ ...item, loading: true });
        try {
          const document = await loadProjectDocumentDetail(
            api,
            savedDraft.documentId,
          );
          openPreviewItem({ ...item, document, loading: false });
        } catch (loadError) {
          openPreviewItem({
            ...item,
            loading: false,
            error:
              loadError instanceof Error ? loadError.message : "文档加载失败",
          });
        }
        return;
      }

      const action = miraDraftActions[actionKey];
      if (!action) return;
      setMiraDraftEdits((current) => ({
        ...current,
        [actionKey]: {
          title: action.title,
          markdown: action.markdown,
        },
      }));
      openPreviewItem(
        mapMiraDocumentDraftPreview(
          action,
          projectWorkspace?.projectName ?? currentProject?.name ?? "当前项目",
        ),
      );
    },
    [
      api,
      currentProject?.name,
      miraDraftActions,
      openPreviewItem,
      projectWorkspace?.projectName,
      streamState.messages,
    ],
  );

  const handleCancelMiraDraft = useCallback(
    async (actionKey: string) => {
      if (pendingMiraActionKey) return;
      const action = miraDraftActions[actionKey];
      if (!action) return;

      setPendingMiraActionKey(actionKey);
      setStreamNotice("");
      try {
        await cancelMiraDocumentDraft(api, action);
        setStreamState((current) => ({
          ...current,
          messages: current.messages.map((message) =>
            message.miraDraft?.actionKey === actionKey
              ? {
                  ...message,
                  miraDraft: {
                    ...message.miraDraft,
                    status: "error",
                    errorMessage: "草稿已取消",
                    previewable: false,
                    actionable: false,
                  },
                }
              : message,
          ),
        }));
        setMiraDraftActions((current) => {
          const next = { ...current };
          delete next[actionKey];
          return next;
        });
        closePreviewTab(`draft:${actionKey}`);
      } catch (error) {
        setStreamNotice(error instanceof Error ? error.message : "草稿取消失败，请重试。");
      } finally {
        setPendingMiraActionKey(undefined);
      }
    },
    [api, closePreviewTab, miraDraftActions, pendingMiraActionKey],
  );

  const handleDisplayCardAction = useCallback(
    async (actionKey: string, actionId: string) => {
      if (pendingDisplayActionKey) return;
      const action = streamState.deferredActions?.[actionKey];
      if (!action) return;
      if (actionId !== "confirm" && actionId !== "cancel") return;
      if (
        action.kind === "mcp"
        && actionId === "confirm"
        && action.status !== "pending_confirmation"
      ) return;
      if (action.kind === "route" && actionId === "cancel" && !action.cancelPath) return;

      setPendingDisplayActionKey(actionKey);
      setStreamNotice("");
      try {
        if (action.kind === "mcp") {
          await api.post(
            `/api/mcp/tool-calls/${encodeURIComponent(action.toolCallId)}/${actionId}`,
          );
        } else {
          await api.post(
            actionId === "confirm" ? action.confirmPath : action.cancelPath!,
            actionId === "confirm" ? action.confirmBody : undefined,
          );
        }
        await loadPage();
        setStreamNotice(actionId === "confirm" ? "操作已确认执行" : "操作已取消");
      } catch (error) {
        setStreamNotice(error instanceof Error ? error.message : "操作失败，请重试。");
      } finally {
        setPendingDisplayActionKey(undefined);
      }
    },
    [api, loadPage, pendingDisplayActionKey, streamState.deferredActions],
  );

  const handlePreviewAction = useCallback(
    (itemKey: string, actionId: string) => {
      if (!itemKey.startsWith("draft:")) return;
      const actionKey = itemKey.slice("draft:".length);
      if (actionId === "confirm") {
        void handleConfirmMiraDraft(actionKey).then((confirmed) => {
          if (confirmed) closePreviewTab(itemKey);
        });
      } else if (actionId === "cancel") {
        void handleCancelMiraDraft(actionKey);
      }
    },
    [closePreviewTab, handleCancelMiraDraft, handleConfirmMiraDraft],
  );

  const renderPreviewContent = useCallback(
    (item: ChatPreviewItemViewModel) => {
      if (!item.key.startsWith("draft:")) return undefined;
      const actionKey = item.key.slice("draft:".length);
      const action = miraDraftActions[actionKey];
      const edit = miraDraftEdits[actionKey];
      if (!action || !edit) return undefined;

      return (
        <ProjectDocumentEditor
          projectName={
            projectWorkspace?.projectName ?? currentProject?.name ?? "当前项目"
          }
          title={edit.title}
          initialMarkdown={edit.markdown}
          createdByName="Helia"
          updatedByName="Helia"
          updatedAt="刚刚"
          index={{
            status: "disabled",
            statusLabel: "保存后建立索引",
            detail: "草稿确认保存后，服务端将继续处理文档索引。",
          }}
          layout="panel"
          saving={pendingMiraActionKey === actionKey}
          onTitleChange={(title) =>
            setMiraDraftEdits((current) => {
              const currentEdit = current[actionKey] ?? edit;
              return {
                ...current,
                [actionKey]: { ...currentEdit, title },
              };
            })
          }
          onMarkdownChange={(markdown) =>
            setMiraDraftEdits((current) => {
              const currentEdit = current[actionKey] ?? edit;
              return {
                ...current,
                [actionKey]: { ...currentEdit, markdown },
              };
            })
          }
          onSave={() => {
            void handleConfirmMiraDraft(
              actionKey,
              edit,
              undefined,
              item.key,
            ).then((confirmed) => {
              if (confirmed) closePreviewTab(item.key);
            });
          }}
          onClose={() => closePreviewTab(item.key)}
        />
      );
    },
    [
      closePreviewTab,
      currentProject?.name,
      handleConfirmMiraDraft,
      miraDraftActions,
      miraDraftEdits,
      pendingMiraActionKey,
      projectWorkspace?.projectName,
    ],
  );

  const startPanelResize = useCallback(
    (
      panel: "project" | "preview",
      event: ReactMouseEvent<HTMLDivElement>,
    ) => {
      event.preventDefault();
      const renderedPanelWidth =
        event.currentTarget.closest("aside")?.getBoundingClientRect().width;
      const startWidth = renderedPanelWidth && renderedPanelWidth > 0
        ? renderedPanelWidth
        : panel === "project"
          ? projectPanelWidth
          : effectivePreviewPanelWidth;
      resizeStartXRef.current = event.clientX;
      resizeStartWidthRef.current = startWidth;
      flushSync(() => {
        if (panel === "project") setProjectPanelWidth(startWidth);
        else setPreviewPanelWidth(startWidth);
        setResizingPanel(panel);
      });
    },
    [effectivePreviewPanelWidth, projectPanelWidth],
  );

  useEffect(() => {
    if (!resizingPanel) return;

    const handleMouseMove = (event: MouseEvent) => {
      const delta = resizeStartXRef.current - event.clientX;
      const requestedWidth = resizeStartWidthRef.current + delta;
      if (resizingPanel === "project") {
        setProjectPanelWidth(Math.max(
          PANEL_MIN_WIDTH,
          Math.min(PANEL_MAX_WIDTH, requestedWidth),
        ));
      } else {
        setPreviewPanelWidth(clampChatPreviewWidth(requestedWidth, previewLayout));
      }
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
  }, [previewLayout, resizingPanel]);

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
            width={effectivePreviewPanelWidth}
            resizing={resizingPanel === "preview"}
            overlay={previewLayout.overlay}
            overlayRight={showProjectPanel ? projectPanelWidth : 0}
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
              pendingActionKey={
                pendingMiraActionKey ? `draft:${pendingMiraActionKey}` : undefined
              }
              onAction={handlePreviewAction}
              renderContent={renderPreviewContent}
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
                void openProjectFilePreview(`knowledge:${id}`)
              }
              onOpenExperiment={(id) =>
                void openProjectFilePreview(`experiment:${id}`)
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
          isTyping={isStreaming || isRemoteReplying}
          statusPhase={streamState.statusPhase}
          statusLabel={streamState.statusLabel}
          statusVisible={streamState.statusVisible}
          searchSteps={streamState.searchSteps}
          hasReceivedAssistantChunk={streamState.hasReceivedAssistantChunk}
          contentMaxWidth={showPreviewPanel ? "100%" : 800}
          scrollContainerRef={scrollContainerRef}
          onScroll={syncActiveTimelineByScroll}
          onMessageElement={(index, element) => {
            messageElementRefs.current[index] = element;
          }}
          getMessageKey={(_message: ChatMessage, index: number) =>
            _message.id ?? `${sessionId}-${index}`
          }
          onConfirmMiraDraft={handleConfirmMiraDraft}
          onPreviewMiraDraft={handlePreviewMiraDraft}
          onCancelMiraDraft={handleCancelMiraDraft}
          pendingDisplayActionKey={pendingDisplayActionKey}
          onDisplayCardAction={handleDisplayCardAction}
        />

        {chatTimelineItems.length >= CHAT_TIMELINE_MIN_ITEMS && (
          <ChatTimelineNavigation
            items={chatTimelineItems}
            activeMessageIndex={activeTimelineMessageIndex}
            onSelect={scrollToTimelineMessage}
          />
        )}
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
          disabled={isStreaming || isRemoteReplying}
          isStreaming={isStreaming}
          skillOptions={resourceCatalog.skills}
          fileOptions={resourceCatalog.files}
          uploadAccept={CHAT_ATTACHMENT_ACCEPT}
          validateUploadFile={validateChatAttachmentFile}
          onUploadValidationError={setStreamNotice}
        />
      </ChatComposerDock>

      <BaseModal
        visible={miraDraftTargetSelection !== null}
        title="选择文档保存项目"
        width={440}
        maskClosable={false}
        okText="保存到该项目"
        cancelText="取消"
        confirmLoading={Boolean(pendingMiraActionKey)}
        okButtonProps={{
          disabled: !selectedMiraTargetProjectId || Boolean(pendingMiraActionKey),
        }}
        cancelButtonProps={{ disabled: Boolean(pendingMiraActionKey) }}
        onCancel={() => {
          if (pendingMiraActionKey) return;
          setMiraDraftTargetSelection(null);
          setSelectedMiraTargetProjectId(undefined);
        }}
        onConfirm={async () => {
          const selection = miraDraftTargetSelection;
          const targetProjectId = selectedMiraTargetProjectId;
          if (!selection || !targetProjectId) return;
          const confirmed = await handleConfirmMiraDraft(
            selection.actionKey,
            selection.editedContent,
            targetProjectId,
          );
          if (!confirmed) return;
          setMiraDraftTargetSelection(null);
          setSelectedMiraTargetProjectId(undefined);
          if (selection.previewItemKey) {
            closePreviewTab(selection.previewItemKey);
          }
        }}
      >
        <p className="mb-3 text-sm leading-6 text-secondaryText">
          当前对话属于“未归属”项目，请选择文档最终保存的位置。
        </p>
        <div className="max-h-72 space-y-2 overflow-y-auto pr-1">
          {projects.filter((project) => project.selectable !== false).length ? (
            projects
              .filter((project) => project.selectable !== false)
              .map((project) => {
                const selected = selectedMiraTargetProjectId === project.id;
                return (
                  <button
                    key={project.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSelectedMiraTargetProjectId(project.id)}
                    className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                      selected
                        ? "border-primary bg-primary-soft text-primary"
                        : "border-lineSubtle bg-surface text-primaryText hover:bg-surfaceMuted"
                    }`}
                  >
                    <span className="block truncate font-medium">{project.name}</span>
                  </button>
                );
              })
          ) : (
            <div className="rounded-lg bg-surfaceMuted px-4 py-3 text-sm text-secondaryText">
              暂无可保存的项目，请先创建项目。
            </div>
          )}
        </div>
      </BaseModal>
    </ChatWorkspaceFrame>
  );
}
