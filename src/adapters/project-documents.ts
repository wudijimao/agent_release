import {
  ATTACHMENT_DOCUMENT_MAX_BYTES,
  ATTACHMENT_IMAGE_MAX_BYTES,
  ATTACHMENT_WIKI2_AI_RECOGNITION_EXTRA_ACCEPT_FRAGMENTS,
  buildAttachmentAcceptString,
  getAttachmentFileSizeError,
  inferAttachmentFileKind,
  isUnsupportedOfficeFileName,
  type KbAttachment,
  type ProjectKnowledgeSection,
  type ProjectKnowledgeType,
} from "@bioagent/shared";

import {
  ATTACHMENT_TOO_LARGE_MESSAGE,
  isPayloadTooLargeError,
  type ApiClient,
} from "@/lib/api";
import { createClientId } from "@/lib/client-id";

type ProjectDocumentCreateApi = Pick<ApiClient, "post">;
type ProjectDocumentImportApi = Pick<ApiClient, "delete" | "post">;

interface CreatedKnowledgeNode {
  id: string;
}

interface KbAttachmentPresignResponse {
  key: string;
  objectKey: string;
  uploadUrl: string;
  storageUrl: string;
}

const PROJECT_DOCUMENT_SEQUENCE_EXTENSIONS = new Set([
  ".gb",
  ".gbk",
  ".genbank",
  ".fasta",
  ".fa",
  ".fna",
  ".faa",
  ".dna",
]);

export const PROJECT_DOCUMENT_IMPORT_ACCEPT = buildAttachmentAcceptString({
  extraFragments: ATTACHMENT_WIKI2_AI_RECOGNITION_EXTRA_ACCEPT_FRAGMENTS,
});

export const PROJECT_DOCUMENT_IMPORT_MAX_BYTES =
  ATTACHMENT_DOCUMENT_MAX_BYTES;

export const PROJECT_DOCUMENT_IMPORT_FORMATS_LABEL =
  "TXT、Markdown、CSV、图片、PDF、DOCX、PPTX、XLSX、GenBank、FASTA、DNA";

export const PROJECT_DOCUMENT_IMPORT_DESCRIPTION =
  `支持 ${PROJECT_DOCUMENT_IMPORT_FORMATS_LABEL}；TXT/Markdown 不超过 2MB，图片不超过 10MB，其他文档不超过 100MB`;

interface KnowledgeBlock {
  id: string;
  type: string;
  props?: Record<string, unknown>;
  content?: string;
}

export interface ImportProjectDocumentsInput {
  projectId: string;
  parentNodeId: string;
  files: readonly File[];
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

export interface ImportedProjectDocument {
  nodeId: string;
  attachment: KbAttachment;
}

function fileExtension(fileName: string) {
  const normalized = fileName.trim().toLowerCase();
  const dotIndex = normalized.lastIndexOf(".");
  return dotIndex >= 0 ? normalized.slice(dotIndex) : "";
}

function importedDocumentTitle(fileName: string) {
  const trimmed = fileName.trim();
  const dotIndex = trimmed.lastIndexOf(".");
  return (dotIndex > 0 ? trimmed.slice(0, dotIndex) : trimmed).trim() || "导入文档";
}

export function validateProjectDocumentImportFile(file: File) {
  if (isUnsupportedOfficeFileName(file.name)) {
    return "暂不支持旧版 Office 格式，请转换为 DOCX、PPTX 或 XLSX 后重试。";
  }

  const kind = inferAttachmentFileKind(
    file.name,
    file.type || "application/octet-stream",
  );
  const isSequence = PROJECT_DOCUMENT_SEQUENCE_EXTENSIONS.has(
    fileExtension(file.name),
  );
  const isImage = file.type.toLowerCase().startsWith("image/");

  if (!kind && !isSequence && !isImage) {
    return `不支持“${file.name}”，仅支持 ${PROJECT_DOCUMENT_IMPORT_FORMATS_LABEL} 文件。`;
  }

  if (kind) {
    const sizeError = getAttachmentFileSizeError(kind, file.size);
    if (sizeError) return sizeError;
  } else if (isImage && file.size > ATTACHMENT_IMAGE_MAX_BYTES) {
    return "图片不能超过 10MB。";
  } else if (file.size > ATTACHMENT_DOCUMENT_MAX_BYTES) {
    return "文档不能超过 100MB。";
  }

  return null;
}

function block(
  type: string,
  content?: string,
  props?: Record<string, unknown>,
): KnowledgeBlock {
  return {
    id: createClientId(),
    type,
    ...(props ? { props } : {}),
    ...(content === undefined ? {} : { content }),
  };
}

export function markdownToKnowledgeDocument(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: KnowledgeBlock[] = [];
  let paragraph: string[] = [];
  let code: string[] = [];
  let inCodeBlock = false;

  const flushParagraph = () => {
    const text = paragraph.join("\n").trim();
    paragraph = [];
    if (text) blocks.push(block("paragraph", text));
  };

  const flushCode = () => {
    if (code.length > 0) {
      blocks.push(block("codeBlock", code.join("\n")));
      code = [];
    }
  };

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();

    if (trimmed.startsWith("```")) {
      flushParagraph();
      if (inCodeBlock) flushCode();
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) {
      code.push(rawLine);
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      continue;
    }

    const heading = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      blocks.push(
        block("heading", heading[2], { level: heading[1]?.length ?? 1 }),
      );
      continue;
    }

    const task = trimmed.match(/^[-*]\s+\[([ xX])]\s+(.+)$/);
    if (task) {
      flushParagraph();
      blocks.push(block("checkListItem", task[2], { checked: task[1] !== " " }));
      continue;
    }

    const bullet = trimmed.match(/^[-*+]\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      blocks.push(block("bulletListItem", bullet[1]));
      continue;
    }

    const numbered = trimmed.match(/^\d+[.)]\s+(.+)$/);
    if (numbered) {
      flushParagraph();
      blocks.push(block("numberedListItem", numbered[1]));
      continue;
    }

    const quote = trimmed.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      blocks.push(block("paragraph", quote[1], { textAlignment: "left" }));
      continue;
    }

    if (/^(---|\*\*\*|___)$/.test(trimmed)) {
      flushParagraph();
      continue;
    }

    paragraph.push(rawLine);
  }

  flushParagraph();
  flushCode();

  return {
    type: "kb-doc",
    version: 2,
    properties: {},
    content: blocks.length > 0 ? blocks : [block("paragraph", "")],
  };
}

export async function createProjectDocument(
  api: ProjectDocumentCreateApi,
  input: {
    projectId: string;
    parentNodeId: string;
    title: string;
    markdown: string;
    templateId: string;
    knowledgeType: ProjectKnowledgeType;
    section: ProjectKnowledgeSection;
  },
) {
  const created = await api.post<CreatedKnowledgeNode>(
    "/api/knowledge/wiki2/nodes",
    {
      title: input.title,
      parentId: input.parentNodeId,
      projectId: input.projectId,
      templateId: input.templateId,
      projectKnowledgeType: input.knowledgeType,
      projectKnowledgeSection: input.section,
      projectVisibility: "project_default",
      content: markdownToKnowledgeDocument(input.markdown),
    },
  );

  return created;
}

async function uploadProjectDocumentAttachment(
  api: ProjectDocumentImportApi,
  nodeId: string,
  file: File,
  fetchImpl: typeof fetch,
  conversion: {
    insertMode: "none" | "replace_placeholder";
    targetBlockId?: string;
  },
  signal?: AbortSignal,
) {
  const mimeType = file.type || "application/octet-stream";
  const encodedNodeId = encodeURIComponent(nodeId);
  let presigned: KbAttachmentPresignResponse;
  try {
    presigned = await api.post<KbAttachmentPresignResponse>(
      `/api/knowledge/wiki2/nodes/${encodedNodeId}/attachments/presign`,
      { fileName: file.name },
      signal ? { signal } : undefined,
    );
  } catch (error) {
    if (isPayloadTooLargeError(error)) {
      throw new Error(ATTACHMENT_TOO_LARGE_MESSAGE);
    }
    throw error;
  }

  const uploadResponse = await fetchImpl(presigned.uploadUrl, {
    method: "PUT",
    headers: { "Content-Type": mimeType },
    body: file,
    signal,
  });
  if (!uploadResponse.ok) {
    throw new Error(
      uploadResponse.status === 413
        ? ATTACHMENT_TOO_LARGE_MESSAGE
        : `文档上传失败（HTTP ${uploadResponse.status}）`,
    );
  }

  const attachment = await api.post<KbAttachment>(
    `/api/knowledge/wiki2/nodes/${encodedNodeId}/attachments`,
    {
      originalName: file.name,
      mimeType,
      fileSize: file.size,
      objectKey: presigned.objectKey || presigned.key,
    },
    signal ? { signal } : undefined,
  );

  return api.post<KbAttachment>(
    `/api/knowledge/wiki2/attachments/${encodeURIComponent(attachment.id)}/convert-jobs`,
    {
      engine: "docling",
      insertMode: conversion.insertMode,
      ...(conversion.targetBlockId
        ? { targetBlockId: conversion.targetBlockId }
        : {}),
    },
    signal ? { signal } : undefined,
  );
}

export async function uploadProjectDocumentAttachments(
  api: ProjectDocumentImportApi,
  input: {
    nodeId: string;
    files: readonly File[];
    fetch?: typeof fetch;
    signal?: AbortSignal;
  },
) {
  for (const file of input.files) {
    const validationError = validateProjectDocumentImportFile(file);
    if (validationError) throw new Error(validationError);
  }

  const fetchImpl =
    input.fetch ?? ((...args) => globalThis.fetch(...args));
  const attachments: KbAttachment[] = [];
  for (const file of input.files) {
    attachments.push(
      await uploadProjectDocumentAttachment(
        api,
        input.nodeId,
        file,
        fetchImpl,
        { insertMode: "none" },
        input.signal,
      ),
    );
  }
  return attachments;
}

async function createImportedProjectDocumentNode(
  api: ProjectDocumentImportApi,
  input: {
    projectId: string;
    parentNodeId: string;
    title: string;
    fileName: string;
  },
) {
  const placeholder = block("convertingPlaceholder", undefined, {
    originalName: input.fileName,
    attachmentId: "",
    progress: 0.1,
    status: "queued",
    engine: "docling",
    message: "正在后台识别文档内容",
  });
  const node = await api.post<CreatedKnowledgeNode>(
    "/api/knowledge/wiki2/nodes",
    {
      title: input.title,
      parentId: input.parentNodeId,
      projectId: input.projectId,
      projectKnowledgeType: "other",
      projectKnowledgeSection: "knowledge",
      projectVisibility: "project_default",
      content: {
        type: "kb-doc",
        version: 2,
        properties: {},
        content: [
          block("paragraph", input.title),
          placeholder,
        ],
      },
    },
  );

  return { node, targetBlockId: placeholder.id };
}

export async function importProjectDocuments(
  api: ProjectDocumentImportApi,
  {
    projectId,
    parentNodeId,
    files,
    fetch: fetchImpl = (...args) => globalThis.fetch(...args),
    signal,
  }: ImportProjectDocumentsInput,
): Promise<ImportedProjectDocument[]> {
  for (const file of files) {
    const validationError = validateProjectDocumentImportFile(file);
    if (validationError) throw new Error(validationError);
  }

  const imported: ImportedProjectDocument[] = [];
  const createdNodeIds: string[] = [];
  try {
    for (const file of files) {
      const title = importedDocumentTitle(file.name);
      const { node, targetBlockId } = await createImportedProjectDocumentNode(api, {
        projectId,
        parentNodeId,
        title,
        fileName: file.name,
      });
      createdNodeIds.push(node.id);
      const attachment = await uploadProjectDocumentAttachment(
        api,
        node.id,
        file,
        fetchImpl,
        {
          insertMode: "replace_placeholder",
          targetBlockId,
        },
        signal,
      );
      imported.push({ nodeId: node.id, attachment });
    }
    return imported;
  } catch (error) {
    await Promise.allSettled(
      createdNodeIds.map((nodeId) =>
        api.delete(
          `/api/knowledge/wiki2/nodes/${encodeURIComponent(nodeId)}`,
          { handleUnauthorized: false },
        ),
      ),
    );
    throw error;
  }
}
