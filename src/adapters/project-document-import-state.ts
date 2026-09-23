import type { KbAttachment } from "@bioagent/shared";

export interface DocumentImportBlock {
  id: string;
  type: string;
  props?: Record<string, unknown>;
  content?: unknown;
}

export function getDocumentImportBlocks(content: unknown): DocumentImportBlock[] {
  const document = content as { content?: unknown; blocks?: unknown } | null;
  const blocks = Array.isArray(content) ? content : Array.isArray(document?.content) ? document.content : document?.blocks;
  return Array.isArray(blocks) ? blocks : [];
}

export function isPendingDocumentImport(block: DocumentImportBlock) {
  return block.type === "convertingPlaceholder" && block.props?.frontendManaged === true;
}

export function isDocumentContentProcessing(content: unknown, attachments: readonly KbAttachment[]) {
  return getDocumentImportBlocks(content).some(isPendingDocumentImport) || attachments.some(
    (attachment) => attachment.convertInsertMode === "replace_placeholder"
      && (attachment.convertStatus === "pending" || attachment.convertStatus === "processing"),
  );
}

// Same-origin tabs share this lock; the persisted placeholders survive closing every tab.
export async function withDocumentMutationLock<T>(nodeId: string, action: () => Promise<T>): Promise<T> {
  if (typeof navigator !== "undefined" && navigator.locks) {
    return navigator.locks.request(`bioagent-document:${nodeId}`, action);
  }
  return action();
}
