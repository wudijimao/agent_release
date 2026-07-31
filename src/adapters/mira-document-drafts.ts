import type {
  HomeAssistantDisplay,
  MiraArchivePreviewCardPayload,
  ProjectKnowledgeSection,
  ProjectKnowledgeType,
} from "@bioagent/shared";
import type { MiraDraftCardViewModel } from "@bioagent/chatui";

import type { ApiClient } from "@/lib/api";

export interface MiraDocumentDraftAction {
  actionKey: string;
  actionId: string;
  confirmationToken?: string;
  draftHash?: string;
  confirmPath: string;
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
  const title = payload.title.trim() || display.title.trim() || "未命名文档";
  const rawSummary = payload.sections.find((section) => section.summary.trim())?.summary.trim();
  const summary =
    rawSummary && rawSummary.replace(/\s+/g, " ") !== title.replace(/\s+/g, " ")
      ? rawSummary
      : undefined;
  const card: MiraDraftCardViewModel = {
    actionKey,
    title,
    ...(targetLabel ? { targetLabel } : {}),
    ...(summary ? { summary } : {}),
    status: isSaved ? "saved" : isFailed ? "error" : "waiting",
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
      confirmPath: `/api/mira/drafts/${encodeURIComponent(confirmation.actionId)}/confirm`,
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
