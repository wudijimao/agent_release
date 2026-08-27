import type {
  HomeAssistantDisplay,
  MiraArchivePreviewCardPayload,
  ProjectKnowledgeSection,
  ProjectKnowledgeType,
} from "@bioagent/shared";
import type {
  ChatPreviewItemViewModel,
  MiraDraftCardViewModel,
} from "@bioagent/chatui";

import type { ApiClient } from "@/lib/api";

export interface MiraDocumentDraftAction {
  actionKey: string;
  actionId: string;
  confirmationToken?: string;
  draftHash?: string;
  confirmPath: string;
  cancelPath: string;
  title: string;
  markdown: string;
  projectKnowledgeType?: ProjectKnowledgeType | string;
  projectKnowledgeSection?: ProjectKnowledgeSection | "knowledge" | "experiment" | "data";
}

export interface MiraDraftTarget {
  projectId: string;
  projectName: string;
  parentNodeId?: string | null;
}

export interface MappedMiraDocumentDraft {
  card: MiraDraftCardViewModel;
  action?: MiraDocumentDraftAction;
}

const terminalStatuses = new Set(["completed", "failed", "cancelled", "skipped"]);

export function mapMiraDocumentDraft(
  display: HomeAssistantDisplay | null | undefined,
  actionKey: string,
  targetLabel?: string,
): MappedMiraDocumentDraft | null {
  if (!display || display.cardType !== "mira_archive_preview") return null;

  const payload = display.payload as MiraArchivePreviewCardPayload;
  const confirmation = payload.confirmation;
  const status = confirmation?.status;
  const isSaved = status === "completed";
  const isFailed = status === "failed" || status === "cancelled" || status === "skipped";
  const isActionable = Boolean(
    confirmation?.actionId
      && confirmation.confirmationToken
      && !terminalStatuses.has(status ?? ""),
  );
  const title = payload.title.trim() || display.title.trim() || "未命名文档";
  const documentId = payload.targetWikiNodeId?.trim();
  const rawSummary = payload.sections.find((section) => section.summary.trim())?.summary.trim();
  const summary =
    rawSummary && rawSummary.replace(/\s+/g, " ") !== title.replace(/\s+/g, " ")
      ? rawSummary
      : undefined;
  const card: MiraDraftCardViewModel = {
    actionKey,
    title,
    ...(documentId ? { documentId } : {}),
    ...(targetLabel ? { targetLabel } : {}),
    ...(summary ? { summary } : {}),
    status: isSaved ? "saved" : isFailed ? "error" : "waiting",
    previewable: isSaved ? Boolean(documentId) : isActionable,
    actionable: isActionable,
    ...(isFailed ? { errorMessage: "草稿未能保存，请重新生成后再试。" } : {}),
  };

  if (
    !confirmation?.actionId
    || !confirmation.confirmationToken
    || terminalStatuses.has(status ?? "")
  ) {
    return { card };
  }

  return {
    card,
    action: {
      actionKey,
      actionId: confirmation.actionId,
      confirmationToken: confirmation.confirmationToken,
      draftHash: confirmation.draftHash,
      confirmPath:
        confirmation.confirmAction?.path
        || `/api/mira/drafts/${encodeURIComponent(confirmation.actionId)}/confirm`,
      cancelPath:
        confirmation.cancelAction?.path
        || `/api/mira/drafts/${encodeURIComponent(confirmation.actionId)}/cancel`,
      title: card.title,
      markdown: payload.markdown ?? "",
      projectKnowledgeType: payload.projectKnowledgeType,
      projectKnowledgeSection: payload.projectKnowledgeSection,
    },
  };
}

interface PatchedDraftResponse {
  draftHash?: string;
  confirmationToken?: string;
}

export async function confirmMiraDocumentDraft(
  api: ApiClient,
  action: MiraDocumentDraftAction,
  target: MiraDraftTarget,
) {
  const patched = await api.patch<PatchedDraftResponse>(
    `/api/home/draft-confirmations/${encodeURIComponent(action.actionId)}`,
    {
      draft: {
        mode: "create",
        title: action.title,
        markdown: action.markdown,
        targetPath: target.projectName,
        targetParentNodeId: target.parentNodeId || undefined,
        projectId: target.projectId,
        projectKnowledgeType: action.projectKnowledgeType || "other",
        projectKnowledgeSection: action.projectKnowledgeSection || "knowledge",
      },
    },
  );

  return api.post<{ nodeId?: string; outputRef?: { nodeId?: string } }>(
    action.confirmPath,
    {
      confirmationToken: patched.confirmationToken || action.confirmationToken,
      draftHash: patched.draftHash || action.draftHash,
    },
  );
}

export async function cancelMiraDocumentDraft(
  api: ApiClient,
  action: MiraDocumentDraftAction,
) {
  return api.post(action.cancelPath);
}

export function mapMiraDocumentDraftPreview(
  action: MiraDocumentDraftAction,
  projectName: string,
): ChatPreviewItemViewModel {
  return {
    key: `draft:${action.actionKey}`,
    type: "draft",
    title: action.title,
    subtitle: `${projectName} · 待确认草稿`,
    actions: [
      { id: "cancel", label: "取消", tone: "secondary" },
      { id: "edit", label: "编辑", tone: "secondary" },
      { id: "confirm", label: "确认保存", tone: "primary" },
    ],
    document: {
      id: action.actionId,
      title: action.title,
      markdown: action.markdown,
      tags: [],
      createdByName: "Helia",
      updatedByName: "Helia",
      updatedAt: "刚刚",
      canEdit: true,
      attachments: [],
      index: {
        status: "disabled",
        statusLabel: "保存后建立索引",
        detail: "草稿确认保存后，服务端将继续处理文档索引。",
      },
    },
  };
}
