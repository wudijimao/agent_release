import type {
  HomeContextRef,
  HomeUnifiedResourceItem,
} from "./context-engineering.js";
import type { HomeAssistantDisplay } from "./home-display.js";
import type { AttachmentFileKind } from "./attachment-files.js";

export interface ChatSendRequest {
  message: string;
  sessionId?: string;
  draftId?: string;
  selectedSkillSlugs?: string[];
  contextRefs?: HomeContextRef[];
}

export interface ChatResourceSearchResponse {
  query: string;
  items: HomeUnifiedResourceItem[];
}

export type ChatAttachmentKind = AttachmentFileKind;

export interface ChatAttachmentRefDto {
  id: string;
  name: string;
  mimeType: string;
  kind: ChatAttachmentKind;
}

/** @deprecated Use ChatAttachmentRefDto for both history and live chat payloads. */
export type ChatHistoryAttachmentRefDto = ChatAttachmentRefDto;

export interface ChatAttachmentDto extends ChatAttachmentRefDto {
  fileSize: number;
  status: "ready" | "deleted";
  contextEnabled: boolean;
  contextDisabledAt?: string | null;
  url?: string;
  createdAt: string;
  message?: string;
}

export interface ChatAttachmentPresignRequest {
  sessionId?: string;
  draftId?: string;
  fileName: string;
  mimeType?: string;
  fileSize: number;
}

export interface ChatAttachmentPresignResponse {
  draftId?: string;
  objectKey: string;
  uploadUrl: string;
  storageUrl: string;
}

export interface ChatAttachmentRegisterRequest {
  sessionId?: string;
  draftId?: string;
  originalName: string;
  mimeType?: string;
  fileSize: number;
  objectKey: string;
}

export interface ChatAttachmentListQuery {
  sessionId?: string;
  draftId?: string;
}

export interface ChatAttachmentListResponse {
  items: ChatAttachmentDto[];
}

export interface ChatAttachmentContextRequest {
  enabled: boolean;
}

export interface ChatAttachmentDeleteResponse {
  deleted: true;
}

export interface ChatHistoryMessageDto {
  id: string;
  sessionId: string;
  role: "user" | "assistant" | "system";
  content: string;
  attachmentRefs?: ChatHistoryAttachmentRefDto[] | null;
  contextRefsSnapshot?: HomeContextRef[] | null;
  display?: HomeAssistantDisplay | null;
  createdAt: string;
}

export interface ChatHistorySessionDto {
  id: string;
  title?: string | null;
  scene?: string;
  currentContextRefs?: HomeContextRef[] | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface ChatHistoryDetailResponse {
  session: ChatHistorySessionDto;
  sessionId: string;
  messages: ChatHistoryMessageDto[];
  runs: unknown[];
  pendingMcpToolCalls: unknown[];
  attachments: unknown[];
  currentContextRefs: HomeContextRef[] | null;
  sessionSummary?: unknown;
}

export interface ChatStreamMetaEvent {
  type: "meta";
  runId: string;
  sessionId: string;
  selectedSkillSlugs?: string[];
  attachments?: unknown[];
}

export interface ChatStreamTextEvent {
  type: "text";
  content: string;
}

export interface ChatStreamTaskTraceEvent {
  type: "task_trace";
  step: unknown;
}

export interface ChatStreamDisplayStartEvent {
  type: "display_start";
  display: HomeAssistantDisplay;
}

export interface ChatStreamDisplayPatchEvent {
  type: "display_patch";
  patch: Partial<HomeAssistantDisplay>;
}

export interface ChatStreamDisplayDoneEvent {
  type: "display_done";
  display: HomeAssistantDisplay;
}

export interface ChatStreamErrorEvent {
  type: "error";
  error: string;
}

export type ChatStreamKnownEvent =
  | ChatStreamMetaEvent
  | ChatStreamTextEvent
  | ChatStreamTaskTraceEvent
  | ChatStreamDisplayStartEvent
  | ChatStreamDisplayPatchEvent
  | ChatStreamDisplayDoneEvent
  | ChatStreamErrorEvent;

/** SSE 解析器保留未知事件，页面适配器仅消费已经识别的 Chat v1 事件。 */
export interface ChatStreamEnvelope {
  type: string;
  data: unknown;
}
