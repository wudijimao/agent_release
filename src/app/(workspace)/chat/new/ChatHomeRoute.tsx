"use client";

import {
  BaseButton,
  ChatComposerDock,
  ChatConversationViewport,
  ChatHomePage,
  ChatWorkspaceFrame,
  ChatWorkspaceHeader,
  InputArea,
  useNavigation,
  type ChatMessage,
  type InputSendPayload,
} from "@bioagent/chatui";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  beginChatStream,
  getChatStreamErrorMessage,
  interruptChatStream,
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
import { createProject } from "@/adapters/projects";
import { streamChat } from "@/lib/api";
import { useApiClient } from "@/providers/AuthProvider";
import { useLab } from "@/providers/LabProvider";

import { useChatShell } from "../../WorkspaceShell";
import { useChatResourceCatalog } from "../useChatResourceCatalog";

export function ChatHomeRoute() {
  const navigation = useNavigation();
  const api = useApiClient();
  const { activeLab } = useLab();
  const {
    isSidebarOpen,
    openChat,
    openSidebar,
    projects,
    refreshChats,
    refreshProjects,
  } = useChatShell();
  const { catalog: resourceCatalog, error: resourceError } =
    useChatResourceCatalog();
  const [notice, setNotice] = useState("");
  const [noticeRole, setNoticeRole] = useState<"status" | "alert">("status");
  const [streamState, setStreamState] = useState<ChatStreamViewState | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [lastPayload, setLastPayload] = useState<InputSendPayload | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string>();
  const selectableProjects = useMemo(
    () => projects.filter((project) => project.selectable !== false),
    [projects],
  );
  const streamControllerRef = useRef<AbortController | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => () => streamControllerRef.current?.abort(), []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [isStreaming, streamState?.messages, streamState?.searchSteps]);

  const runNewChat = useCallback(
    async (payload: InputSendPayload) => {
      if (isStreaming || !payload.content.trim()) return;

      streamControllerRef.current?.abort();
      const controller = new AbortController();
      streamControllerRef.current = controller;
      setLastPayload(payload);
      setNotice("");
      setNoticeRole("status");
      setIsStreaming(true);

      let nextState = beginChatStream([], {
        role: "user",
        content: payload.content.trim(),
        attachments: payload.attachments.map((attachment) => ({
          ...attachment,
          status: "uploading" as const,
        })),
        references: payload.references,
      });
      let uploadCompleted = payload.attachments.length === 0;
      setStreamState(nextState);

      try {
        const files = payload.attachments.map((attachment) => {
          if (!attachment.file) {
            throw new Error("附件本地文件不可用，请重新选择");
          }
          return attachment.file;
        });
        const uploaded = await uploadChatAttachments({
          api,
          files,
          signal: controller.signal,
        });
        uploadCompleted = true;
        nextState = updateLatestUserMessageAttachments(
          nextState,
          uploaded.attachments.map(mapChatAttachmentRef),
        );
        setStreamState(nextState);

        const sendScope = resolveChatSendScope(
          payload.references,
          resourceCatalog,
          uploaded.contextRefs,
        );

        for await (const event of streamChat(
          {
            message: payload.content.trim(),
            draftId: uploaded.draftId,
            projectId: selectedProjectId,
            ...sendScope,
          },
          {
            signal: controller.signal,
            labId: activeLab?.id,
            onUnauthorized: () =>
              navigation.replace("/login?next=%2Fchat%2Fnew"),
          },
        )) {
          nextState = reduceChatStreamEvent(nextState, event.type, event.data);
          setStreamState(nextState);
          if (nextState.error) throw new Error(nextState.error);
        }

        if (!nextState.sessionId) {
          throw new Error("服务端未返回新会话标识，请重试");
        }

        await reconcileChatStream(api, nextState.sessionId, {
          userContent: payload.content,
          signal: controller.signal,
        });
        setLastPayload(null);
        await refreshChats();
        await openChat(nextState.sessionId, { replace: true });
      } catch (streamError) {
        if (controller.signal.aborted) return;
        let reportedError = streamError;
        if (
          nextState.sessionId &&
          shouldReconcileChatStreamFailure(streamError, nextState)
        ) {
          try {
            await reconcileChatStream(api, nextState.sessionId, {
              userContent: payload.content,
              signal: controller.signal,
            });
            setLastPayload(null);
            await refreshChats();
            await openChat(nextState.sessionId, { replace: true });
            return;
          } catch (recoveryError) {
            if (controller.signal.aborted) return;
            reportedError = recoveryError;
          }
        }
        const errorMessage = getChatStreamErrorMessage(reportedError);
        setStreamState((current) => {
          if (!current) return current;
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
        setNotice(errorMessage);
        setNoticeRole("alert");
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
      openChat,
      refreshChats,
      resourceCatalog,
      selectedProjectId,
    ],
  );

  const handleSend = (payload: string | InputSendPayload) => {
    const normalizedPayload: InputSendPayload =
      typeof payload === "string"
        ? { content: payload, attachments: [], references: [] }
        : payload;
    void runNewChat(normalizedPayload);
  };

  const handleCancel = useCallback(() => {
    const controller = streamControllerRef.current;
    if (!controller) return;

    controller.abort();
    setStreamState((current) =>
      current ? interruptChatStream(current) : current,
    );
    setNoticeRole("status");
    setNotice("已停止生成，你可以重新发送或重试。");
    setIsStreaming(false);
  }, []);

  const handleUploadValidationError = useCallback((message: string) => {
    setNoticeRole("alert");
    setNotice(message);
  }, []);

  const handleCreateProject = useCallback(
    async (name: string) => {
      setNotice("");
      setNoticeRole("status");
      try {
        const created = await createProject(api, {
          type: "personal",
          name,
        });
        await refreshProjects();
        setSelectedProjectId(created.id);
      } catch (createError) {
        setNoticeRole("alert");
        setNotice(
          createError instanceof Error ? createError.message : "项目创建失败",
        );
      }
    },
    [api, refreshProjects],
  );

  return (
      <div className="relative flex h-full w-full">
        {streamState ? (
          <ChatWorkspaceFrame
            header={
              <ChatWorkspaceHeader
                isSidebarOpen={isSidebarOpen}
                onOpenSidebar={openSidebar}
              />
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
                getMessageKey={(_message: ChatMessage, index: number) =>
                  `new-chat-${index}`
                }
              />
            </div>
            <ChatComposerDock>
              {notice && (
                <div
                  role={noticeRole}
                  className="mb-3 flex items-center justify-between gap-3 rounded-lg border border-lineSubtle bg-surfaceMuted px-4 py-2 text-sm text-secondaryText"
                >
                  <span>{notice}</span>
                  {lastPayload && (
                    <BaseButton
                      type="secondary"
                      size="small"
                      disabled={isStreaming}
                      onClick={() => void runNewChat(lastPayload)}
                    >
                      重试
                    </BaseButton>
                  )}
                </div>
              )}
              <InputArea
                onSend={handleSend}
                onCancel={handleCancel}
                disabled={isStreaming}
                isStreaming={isStreaming}
                skillOptions={resourceCatalog.skills}
                fileOptions={resourceCatalog.files}
                uploadAccept={CHAT_ATTACHMENT_ACCEPT}
                validateUploadFile={validateChatAttachmentFile}
                onUploadValidationError={handleUploadValidationError}
              />
            </ChatComposerDock>
          </ChatWorkspaceFrame>
        ) : (
          <ChatHomePage
            projects={selectableProjects}
            selectedProjectId={selectedProjectId}
            disabled={isStreaming}
            isSidebarOpen={isSidebarOpen}
            onOpenSidebar={openSidebar}
            onSelectProject={(projectId) =>
              setSelectedProjectId(projectId ?? undefined)
            }
            onCreateProject={(name) => void handleCreateProject(name)}
            onSend={handleSend}
            skillOptions={resourceCatalog.skills}
            fileOptions={resourceCatalog.files}
            uploadAccept={CHAT_ATTACHMENT_ACCEPT}
            validateUploadFile={validateChatAttachmentFile}
            onUploadValidationError={handleUploadValidationError}
          />
        )}
        {!streamState && (notice || resourceError) && (
          <div
            role={notice ? noticeRole : "alert"}
            className="absolute bottom-6 left-1/2 z-20 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-lineSubtle bg-white px-4 py-2 text-sm text-secondaryText shadow-md"
          >
            {notice || resourceError}
          </div>
        )}
      </div>
  );
}
