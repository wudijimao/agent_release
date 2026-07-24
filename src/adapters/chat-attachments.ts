import {
  ATTACHMENT_FILE_RULES,
  type ChatAttachmentContextRequest,
  type ChatAttachmentDeleteResponse,
  type ChatAttachmentDto,
  type ChatAttachmentListResponse,
  type ChatAttachmentPresignRequest,
  type ChatAttachmentPresignResponse,
  type ChatAttachmentRegisterRequest,
  type HomeContextRef,
} from "@bioagent/shared";

import type { ApiClient, ApiRequestOptions } from "@/lib/api";

const CHAT_ATTACHMENTS_PATH = "/api/chat/attachments";
const DEFAULT_MIME_TYPE = "application/octet-stream";

export const CHAT_ATTACHMENT_ALLOWED_EXTENSIONS = [
  ...ATTACHMENT_FILE_RULES.txt.extensions,
  ...ATTACHMENT_FILE_RULES.md.extensions,
  ...ATTACHMENT_FILE_RULES.csv.extensions,
  ...ATTACHMENT_FILE_RULES.image.extensions,
  ...ATTACHMENT_FILE_RULES.pdf.extensions,
  ...ATTACHMENT_FILE_RULES.office.extensions,
] satisfies readonly string[];
export const CHAT_ATTACHMENT_ACCEPT =
  CHAT_ATTACHMENT_ALLOWED_EXTENSIONS.join(",");
export const CHAT_ATTACHMENT_ALLOWED_FORMATS_LABEL =
  "TXT、Markdown、CSV、JPG、PNG、WEBP、PDF、DOCX、PPTX、XLSX";

type ChatAttachmentApi = Pick<ApiClient, "delete" | "get" | "patch" | "post">;

export interface ChatAttachmentUploadScope {
  sessionId?: string;
  draftId?: string;
}

export type ChatAttachmentListScope =
  | { sessionId: string; draftId?: never }
  | { sessionId?: never; draftId: string };

export type ChatAttachmentUploadErrorCode =
  | "ATTACHMENT_DRAFT_ID_MISSING"
  | "ATTACHMENT_FILE_TYPE_UNSUPPORTED"
  | "ATTACHMENT_OBJECT_UPLOAD_FAILED";

export class ChatAttachmentUploadError extends Error {
  constructor(
    public readonly code: ChatAttachmentUploadErrorCode,
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = "ChatAttachmentUploadError";
  }
}

export interface UploadChatAttachmentOptions {
  api: ChatAttachmentApi;
  file: File;
  scope?: ChatAttachmentUploadScope;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

export interface UploadChatAttachmentResult {
  attachment: ChatAttachmentDto;
  draftId?: string;
}

export interface UploadChatAttachmentsOptions {
  api: ChatAttachmentApi;
  files: readonly File[];
  scope?: ChatAttachmentUploadScope;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

export interface UploadChatAttachmentsResult {
  attachments: ChatAttachmentDto[];
  contextRefs: HomeContextRef[];
  draftId?: string;
}

function requestOptions(signal?: AbortSignal): ApiRequestOptions | undefined {
  return signal ? { signal } : undefined;
}

function fileMimeType(file: File) {
  return file.type || DEFAULT_MIME_TYPE;
}

export function validateChatAttachmentFile(file: File): string | null {
  const normalizedName = file.name.trim().toLowerCase();
  const supported = CHAT_ATTACHMENT_ALLOWED_EXTENSIONS.some((extension) =>
    normalizedName.endsWith(extension),
  );

  return supported
    ? null
    : `不支持“${file.name}”，仅支持 ${CHAT_ATTACHMENT_ALLOWED_FORMATS_LABEL} 文件`;
}

function buildListPath(scope: ChatAttachmentListScope) {
  const query = new URLSearchParams();
  if (scope.sessionId) query.set("sessionId", scope.sessionId);
  if (scope.draftId) query.set("draftId", scope.draftId);
  return `${CHAT_ATTACHMENTS_PATH}?${query.toString()}`;
}

async function uploadPresignedObject(options: {
  file: File;
  uploadUrl: string;
  fetch: typeof fetch;
  signal?: AbortSignal;
}) {
  let response: Response;
  const fetchRequest = options.fetch;
  try {
    response = await fetchRequest(options.uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": fileMimeType(options.file) },
      body: options.file,
      signal: options.signal,
    });
  } catch (error) {
    if (options.signal?.aborted) throw error;
    throw new ChatAttachmentUploadError(
      "ATTACHMENT_OBJECT_UPLOAD_FAILED",
      error instanceof Error ? error.message : "附件上传失败",
    );
  }

  if (!response.ok) {
    throw new ChatAttachmentUploadError(
      "ATTACHMENT_OBJECT_UPLOAD_FAILED",
      `附件上传失败（HTTP ${response.status}）`,
      response.status,
    );
  }
}

export async function uploadChatAttachment({
  api,
  file,
  scope = {},
  fetch: fetchImpl = (...args) => globalThis.fetch(...args),
  signal,
}: UploadChatAttachmentOptions): Promise<UploadChatAttachmentResult> {
  const validationError = validateChatAttachmentFile(file);
  if (validationError) {
    throw new ChatAttachmentUploadError(
      "ATTACHMENT_FILE_TYPE_UNSUPPORTED",
      validationError,
    );
  }

  const mimeType = fileMimeType(file);
  const presignRequest: ChatAttachmentPresignRequest = {
    ...scope,
    fileName: file.name,
    mimeType,
    fileSize: file.size,
  };
  const presigned = await api.post<ChatAttachmentPresignResponse>(
    `${CHAT_ATTACHMENTS_PATH}/presign`,
    presignRequest,
    requestOptions(signal),
  );
  const draftId = presigned.draftId || scope.draftId;

  if (!scope.sessionId && !draftId) {
    throw new ChatAttachmentUploadError(
      "ATTACHMENT_DRAFT_ID_MISSING",
      "服务端未返回附件草稿标识，请重试",
    );
  }

  await uploadPresignedObject({
    file,
    uploadUrl: presigned.uploadUrl,
    fetch: fetchImpl,
    signal,
  });

  const registerRequest: ChatAttachmentRegisterRequest = {
    ...(scope.sessionId ? { sessionId: scope.sessionId } : { draftId }),
    originalName: file.name,
    mimeType,
    fileSize: file.size,
    objectKey: presigned.objectKey,
  };
  const attachment = await api.post<ChatAttachmentDto>(
    CHAT_ATTACHMENTS_PATH,
    registerRequest,
    requestOptions(signal),
  );

  return { attachment, draftId };
}

function attachmentContextRef(attachment: ChatAttachmentDto): HomeContextRef {
  return {
    type: "attachment",
    id: attachment.id,
    title: attachment.name,
    source: "upload",
    metadata: {
      kind: attachment.kind,
      mimeType: attachment.mimeType,
      fileSize: attachment.fileSize,
    },
  };
}

export async function uploadChatAttachments({
  api,
  files,
  scope = {},
  fetch,
  signal,
}: UploadChatAttachmentsOptions): Promise<UploadChatAttachmentsResult> {
  const attachments: ChatAttachmentDto[] = [];
  let draftId = scope.draftId;

  try {
    for (const file of files) {
      const uploaded = await uploadChatAttachment({
        api,
        file,
        scope: scope.sessionId ? { sessionId: scope.sessionId } : { draftId },
        fetch,
        signal,
      });
      attachments.push(uploaded.attachment);
      draftId = uploaded.draftId || draftId;
    }
  } catch (error) {
    await Promise.allSettled(
      attachments.map((attachment) =>
        deleteChatAttachment(api, attachment.id, { handleUnauthorized: false }),
      ),
    );
    throw error;
  }

  return {
    attachments,
    contextRefs: attachments.map(attachmentContextRef),
    draftId,
  };
}

export function listChatAttachments(
  api: ChatAttachmentApi,
  scope: ChatAttachmentListScope,
  options?: ApiRequestOptions,
) {
  return api.get<ChatAttachmentListResponse>(buildListPath(scope), options);
}

export function updateChatAttachmentContext(
  api: ChatAttachmentApi,
  attachmentId: string,
  enabled: boolean,
  options?: ApiRequestOptions,
) {
  const body: ChatAttachmentContextRequest = { enabled };
  return api.patch<ChatAttachmentDto>(
    `${CHAT_ATTACHMENTS_PATH}/${encodeURIComponent(attachmentId)}/context`,
    body,
    options,
  );
}

export function deleteChatAttachment(
  api: ChatAttachmentApi,
  attachmentId: string,
  options?: ApiRequestOptions,
) {
  return api.delete<ChatAttachmentDeleteResponse>(
    `${CHAT_ATTACHMENTS_PATH}/${encodeURIComponent(attachmentId)}`,
    options,
  );
}
