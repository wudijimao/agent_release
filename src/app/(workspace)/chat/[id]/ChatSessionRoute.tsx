"use client";

import {
  BaseButton,
  ChatAttachmentManager,
  ChatAttachmentManagerTrigger,
  ChatComposerDock,
  ChatConversationViewport,
  ChatWorkspaceFrame,
  ChatWorkspaceHeader,
  ChatWorkspaceSidePanel,
  InputArea,
  useNavigation,
  type ChatMessage,
  type AssistantFeedback,
  type InputSendPayload,
  type ManagedChatAttachment,
} from "@bioagent/chatui";
import type { ChatAttachmentDto } from "@bioagent/shared";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import {
  beginChatStream,
  buildChatRegeneratePayload,
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
  deleteChatAttachment,
  listChatAttachments,
  updateChatAttachmentContext,
  uploadChatAttachments,
} from "@/adapters/chat-attachments";
import { resolveChatSendScope } from "@/adapters/chat-resources";
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
  statusPhase: "thinking",
  searchSteps: [],
  hasReceivedAssistantChunk: false,
};

export function ChatSessionRoute({ sessionId }: { sessionId: string }) {
  const navigation = useNavigation();
  const api = useApiClient();
  const {
    getCachedSession,
    isSidebarOpen,
    openSidebar,
    refreshChats,
    touchChat,
  } = useChatShell();
  const cachedSession = getCachedSession(sessionId);
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
  const [attachments, setAttachments] = useState<ChatAttachmentDto[]>([]);
  const [attachmentsLoading, setAttachmentsLoading] = useState(true);
  const [attachmentsError, setAttachmentsError] = useState("");
  const [pendingAttachmentId, setPendingAttachmentId] = useState<string>();
  const [showAttachmentPanel, setShowAttachmentPanel] = useState(false);
  const [feedbackByMessageKey, setFeedbackByMessageKey] = useState<
    Record<string, AssistantFeedback>
  >({});
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

  const loadAttachments = useCallback(
    async (signal?: AbortSignal) => {
      setAttachmentsLoading(true);
      setAttachmentsError("");
      try {
        const response = await listChatAttachments(
          api,
          { sessionId },
          signal ? { signal } : undefined,
        );
        if (!signal?.aborted) setAttachments(response.items);
      } catch (loadError) {
        if (signal?.aborted) return;
        setAttachmentsError(
          loadError instanceof Error ? loadError.message : "附件加载失败",
        );
      } finally {
        if (!signal?.aborted) setAttachmentsLoading(false);
      }
    },
    [api, sessionId],
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
        void loadAttachments(controller.signal);
      }
    });
    return () => controller.abort();
  }, [loadAttachments, loadPage, status]);

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
        setAttachments((current) => {
          const uploadedIds = new Set(
            uploaded.attachments.map((item) => item.id),
          );
          return [
            ...current.filter((item) => !uploadedIds.has(item.id)),
            ...uploaded.attachments,
          ];
        });
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
        const errorMessage = getChatStreamErrorMessage(
          reportedError,
          "对话失败，请重试",
        );
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

  const handleFeedback = useCallback(
    (messageKey: string, feedback: AssistantFeedback) => {
      setFeedbackByMessageKey((current) => {
        if (current[messageKey] === feedback) {
          const next = { ...current };
          delete next[messageKey];
          return next;
        }
        return { ...current, [messageKey]: feedback };
      });
    },
    [],
  );

  const handleRegenerate = useCallback(
    (assistantIndex: number) => {
      if (isStreaming) return;
      const payload = buildChatRegeneratePayload(
        streamState.messages,
        assistantIndex,
      );
      if (payload) void runStream(payload);
    },
    [isStreaming, runStream, streamState.messages],
  );

  const handleToggleAttachmentContext = useCallback(
    async (attachment: ManagedChatAttachment, enabled: boolean) => {
      setPendingAttachmentId(attachment.id);
      setAttachmentsError("");
      try {
        const updated = await updateChatAttachmentContext(
          api,
          attachment.id,
          enabled,
        );
        setAttachments((current) =>
          current.map((item) => (item.id === updated.id ? updated : item)),
        );
      } catch (updateError) {
        setAttachmentsError(
          updateError instanceof Error
            ? updateError.message
            : "附件上下文更新失败",
        );
      } finally {
        setPendingAttachmentId(undefined);
      }
    },
    [api],
  );

  const handleDeleteAttachment = useCallback(
    async (attachment: ManagedChatAttachment) => {
      setPendingAttachmentId(attachment.id);
      setAttachmentsError("");
      try {
        await deleteChatAttachment(api, attachment.id);
        setAttachments((current) =>
          current.filter((item) => item.id !== attachment.id),
        );
      } catch (deleteError) {
        setAttachmentsError(
          deleteError instanceof Error ? deleteError.message : "附件删除失败",
        );
      } finally {
        setPendingAttachmentId(undefined);
      }
    },
    [api],
  );

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
      header={
        <ChatWorkspaceHeader
          isSidebarOpen={isSidebarOpen}
          title={title}
          divided={showAttachmentPanel}
          onOpenSidebar={openSidebar}
          actions={(
            <ChatAttachmentManagerTrigger
              active={showAttachmentPanel}
              count={attachments.length}
              onClick={() => setShowAttachmentPanel((current) => !current)}
            />
          )}
        />
      }
      sidePanels={
        <ChatWorkspaceSidePanel
          open={showAttachmentPanel}
          width={360}
        >
          <ChatAttachmentManager
            attachments={attachments}
            loading={attachmentsLoading}
            error={attachmentsError}
            pendingAttachmentId={pendingAttachmentId}
            onClose={() => setShowAttachmentPanel(false)}
            onToggleContext={(attachment, enabled) =>
              void handleToggleAttachmentContext(attachment, enabled)
            }
            onDelete={(attachment) => void handleDeleteAttachment(attachment)}
          />
        </ChatWorkspaceSidePanel>
      }
    >
      <div className="relative min-h-0 flex-1">
        <ChatConversationViewport
          messages={streamState.messages}
          isTyping={isStreaming}
          statusPhase={streamState.statusPhase}
          searchSteps={streamState.searchSteps}
          hasReceivedAssistantChunk={streamState.hasReceivedAssistantChunk}
          scrollContainerRef={scrollContainerRef}
          feedbackByMessageKey={feedbackByMessageKey}
          onFeedback={handleFeedback}
          onRegenerate={handleRegenerate}
          getMessageKey={(_message: ChatMessage, index: number) =>
            `${sessionId}-${index}`
          }
        />
      </div>

      <ChatComposerDock>
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
        />
      </ChatComposerDock>
    </ChatWorkspaceFrame>
  );
}
