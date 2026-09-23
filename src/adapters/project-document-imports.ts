import type { KbAttachment, KbNodeDetail } from "@bioagent/shared";
import type { ApiClient } from "@/lib/api";
import { createClientId } from "@/lib/client-id";
import { mapProjectDocumentDetail, type ProjectDocumentDetailPayload } from "./project-document-detail";
import { markdownToKnowledgeDocument, uploadProjectDocumentAttachment, validateProjectDocumentImportFile } from "./project-documents";
import { getDocumentImportBlocks, isDocumentContentProcessing, isPendingDocumentImport, withDocumentMutationLock } from "./project-document-import-state";

type ImportApi = Pick<ApiClient, "get" | "post" | "put" | "delete">;
export type DocumentFileDestination = "body" | "attachment";
const nodePath = (id: string) => `/api/knowledge/wiki2/nodes/${encodeURIComponent(id)}`;

export function validateDocumentFiles(files: readonly File[], destinations: readonly DocumentFileDestination[]) {
  if (!files.length || files.length > 5) throw new Error("每次请选择 1–5 个文件");
  if (destinations.length !== files.length) throw new Error("请选择每个文件的用途");
  files.forEach((file, index) => {
    const error = destinations[index] === "body"
      ? validateProjectDocumentImportFile(file)
      : file.size > 100 * 1024 * 1024 ? "附件不能超过 100MB。" : null;
    if (error) throw new Error(error);
  });
}

// Register all files before persisting placeholders. Recognition never writes the node:
// one reconciliation below replaces this batch against the latest saved content.
export async function appendProjectDocumentFiles(api: ImportApi, input: {
  nodeId: string;
  files: readonly File[];
  destinations: readonly DocumentFileDestination[];
  fetch?: typeof fetch;
}) {
  validateDocumentFiles(input.files, input.destinations);
  return withDocumentMutationLock(input.nodeId, async () => {
    const payload = await api.get<ProjectDocumentDetailPayload>(nodePath(input.nodeId));
    if (isDocumentContentProcessing(payload.node.content, payload.attachments)) {
      throw new Error("文档正在识别文件，请完成后再添加");
    }
    const attachments: KbAttachment[] = [];
    let committed = false;
    try {
      for (const file of input.files) {
        attachments.push(await uploadProjectDocumentAttachment(api, input.nodeId, file, input.fetch ?? globalThis.fetch, undefined));
      }
      const pending = attachments.flatMap((attachment, index) => input.destinations[index] === "body" ? [{
        id: createClientId(), type: "convertingPlaceholder",
        props: { frontendManaged: true, attachmentId: attachment.id, originalName: attachment.originalName },
      }] : []);
      if (pending.length) {
        const content = payload.node.content;
        const document = Array.isArray(content) ? { type: "kb-doc", version: 2, properties: {} } : (content ?? {});
        // A lost response does not mean the write failed. Keep registered files so
        // reopening can recover even when the server committed this request.
        committed = true;
        await api.put(nodePath(input.nodeId), {
          content: { ...document, content: [...getDocumentImportBlocks(content), ...pending] },
          changeSummary: "添加待识别文件",
        });
      }
      committed = true;
      return attachments;
    } finally {
      if (!committed) {
        // Only remove uploads registered by this attempt. Existing document data is untouched.
        await Promise.allSettled(attachments.map((attachment) => api.delete(`/api/knowledge/wiki2/attachments/${encodeURIComponent(attachment.id)}`)));
      }
    }
  });
}

export async function resumeProjectDocumentImports(api: ImportApi, nodeId: string) {
  return withDocumentMutationLock(nodeId, async () => {
    const payload = await api.get<ProjectDocumentDetailPayload>(nodePath(nodeId));
    const blocks = getDocumentImportBlocks(payload.node.content);
    const pending = blocks.filter(isPendingDocumentImport);
    if (!pending.length || (payload.node.effectivePermission !== "edit" && payload.node.effectivePermission !== "admin")) {
      return mapProjectDocumentDetail(payload);
    }
    const byId = new Map(payload.attachments.map((attachment) => [attachment.id, attachment]));
    for (const block of pending) {
      const attachment = byId.get(String(block.props?.attachmentId));
      if (attachment && attachment.convertStatus !== "done" && attachment.convertStatus !== "error"
        && !attachment.convertRequestedEngine && !attachment.lastConvertEngine) {
        const queued = await api.post<KbAttachment>(`/api/knowledge/wiki2/attachments/${encodeURIComponent(attachment.id)}/convert-jobs`, {
          engine: "docling", insertMode: "none",
        });
        byId.set(attachment.id, queued);
      }
    }
    payload.attachments = [...byId.values()];
    const terminal = pending.every((block) => {
      const attachment = byId.get(String(block.props?.attachmentId));
      return !attachment || attachment.convertStatus === "done" || attachment.convertStatus === "error";
    });
    if (terminal) {
      const content = payload.node.content;
      const document = Array.isArray(content) ? { type: "kb-doc", version: 2, properties: {} } : (content ?? {});
      const nextBlocks = blocks.flatMap((block) => {
        if (!isPendingDocumentImport(block)) return [block];
        const attachment = byId.get(String(block.props?.attachmentId));
        const name = String(block.props?.originalName || "文件");
        const markdown = attachment?.convertStatus === "done"
          ? attachment.markdownContent || attachment.extractedText || "（未识别到正文内容）"
          : `文件“${name}”识别失败：${attachment?.convertError || "附件已移除"}`;
        return [
          { id: createClientId(), type: "heading", props: { level: 2 }, content: name },
          ...(attachment?.convertStatus === "done" ? [{
            id: createClientId(), type: "aiRecognitionResult", props: {
              attachmentId: attachment.id, originalName: name,
              markdownContent: markdown, summary: attachment.extractedText || markdown,
              storageUrl: attachment.storageUrl, mimeType: attachment.mimeType,
              engine: attachment.lastConvertEngine || "docling", displayMode: "body", collapsed: true,
            },
          }] : markdownToKnowledgeDocument(markdown).content),
        ];
      });
      payload.node = await api.put<KbNodeDetail>(nodePath(nodeId), {
        content: { ...document, content: nextBlocks }, changeSummary: "文件识别结果写入正文",
      });
    }
    return mapProjectDocumentDetail(payload);
  });
}

export async function importMergedProjectDocument(api: ImportApi, input: {
  projectId: string; parentNodeId: string; files: readonly File[]; fetch?: typeof fetch;
}) {
  const destinations = input.files.map(() => "body" as const);
  validateDocumentFiles(input.files, destinations);
  const firstTitle = input.files[0].name.replace(/\.[^.]+$/, "");
  const node = await api.post<{ id: string }>("/api/knowledge/wiki2/nodes", {
    title: input.files.length > 1 ? `${firstTitle} 等 ${input.files.length} 个文件` : firstTitle,
    projectId: input.projectId, parentId: input.parentNodeId,
    projectKnowledgeType: "other", projectKnowledgeSection: "knowledge", projectVisibility: "project_default",
    content: markdownToKnowledgeDocument(""),
  });
  try {
    await appendProjectDocumentFiles(api, { nodeId: node.id, files: input.files, destinations, fetch: input.fetch });
  } catch (error) {
    // Keep the new document: an interrupted response may hide a successful write.
    // Deleting it here could discard uploaded files and durable recovery markers.
    throw error;
  }
  // Queue submission may be interrupted; persisted placeholders allow reopening to resume.
  await resumeProjectDocumentImports(api, node.id).catch(() => undefined);
  return node;
}
