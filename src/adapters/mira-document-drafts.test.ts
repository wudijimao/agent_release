import assert from "node:assert/strict";
import test from "node:test";

import type { HomeAssistantDisplay } from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

import {
  cancelMiraDocumentDraft,
  confirmMiraDocumentDraft,
  mapMiraDocumentDraft,
  mapMiraDocumentDraftPreview,
} from "./mira-document-drafts";

const display: HomeAssistantDisplay = {
  schemaVersion: "home-display.v1",
  intentClass: "action",
  cardType: "mira_archive_preview",
  title: "文档草稿",
  state: "waiting_confirmation",
  validation: { status: "valid", issues: [] },
  payload: {
    targetPath: "Mira",
    mode: "create",
    title: "CRISPR 论文分析",
    markdown: "# CRISPR 论文分析\n\n正文",
    sections: [{ heading: "摘要", summary: "一份待归档的论文分析。" }],
    sourceRefs: [],
    warnings: [],
    confirmation: {
      actionId: "draft-1",
      confirmationToken: "token-1",
      draftHash: "hash-1",
      status: "waiting_approval",
    },
  },
};

test("mira draft mapper produces a compact UI card and a separate action", () => {
  const mapped = mapMiraDocumentDraft(display, "message-1", "肿瘤项目");

  assert.deepEqual(mapped?.card, {
    actionKey: "message-1",
    title: "CRISPR 论文分析",
    targetLabel: "肿瘤项目",
    summary: "一份待归档的论文分析。",
    status: "waiting",
    previewable: true,
    actionable: true,
  });
  assert.equal(mapped?.action?.confirmPath, "/api/mira/drafts/draft-1/confirm");
  assert.equal(mapped?.action?.cancelPath, "/api/mira/drafts/draft-1/cancel");
  assert.equal(mapped?.action?.markdown, "# CRISPR 论文分析\n\n正文");
});

test("mira draft preview reuses the project document preview view model", () => {
  const mapped = mapMiraDocumentDraft(display, "message-1", "肿瘤项目");
  assert.ok(mapped?.action);

  const preview = mapMiraDocumentDraftPreview(mapped.action, "肿瘤项目");
  assert.equal(preview.type, "draft");
  assert.equal(preview.document?.title, "CRISPR 论文分析");
  assert.equal(preview.document?.markdown, "# CRISPR 论文分析\n\n正文");
  assert.equal(preview.document?.canEdit, true);
  assert.deepEqual(preview.actions, [
    { id: "cancel", label: "取消", tone: "secondary" },
    { id: "edit", label: "编辑", tone: "secondary" },
    { id: "confirm", label: "确认保存", tone: "primary" },
  ]);
});

test("completed mira draft exposes its persisted document for preview", () => {
  const completedDisplay: HomeAssistantDisplay = {
    ...display,
    state: "completed",
    payload: {
      ...display.payload,
      targetWikiNodeId: "node-1",
      confirmation: {
        ...display.payload.confirmation!,
        status: "completed",
        confirmationToken: undefined,
      },
    },
  };

  const mapped = mapMiraDocumentDraft(completedDisplay, "message-1", "肿瘤项目");

  assert.equal(mapped?.action, undefined);
  assert.equal(mapped?.card.status, "saved");
  assert.equal(mapped?.card.documentId, "node-1");
  assert.equal(mapped?.card.previewable, true);
});

test("mira draft cancellation uses the server-provided cancel route", async () => {
  const calls: string[] = [];
  const api = {
    post: async (path: string) => {
      calls.push(path);
      return { status: "cancelled" };
    },
  } as unknown as ApiClient;
  const mapped = mapMiraDocumentDraft(display, "message-1", "肿瘤项目");
  assert.ok(mapped?.action);

  await cancelMiraDocumentDraft(api, mapped.action);
  assert.deepEqual(calls, ["/api/mira/drafts/draft-1/cancel"]);
});

test("mira draft confirmation patches the current project before confirming", async () => {
  const calls: Array<{ method: string; path: string; body: unknown }> = [];
  const api = {
    patch: async (path: string, body: unknown) => {
      calls.push({ method: "PATCH", path, body });
      return { draftHash: "hash-2" };
    },
    post: async (path: string, body: unknown) => {
      calls.push({ method: "POST", path, body });
      return { outputRef: { nodeId: "node-1" } };
    },
  } as unknown as ApiClient;
  const mapped = mapMiraDocumentDraft(display, "message-1", "肿瘤项目");

  assert.ok(mapped?.action);
  await confirmMiraDocumentDraft(api, mapped.action, {
    projectId: "project-1",
    projectName: "肿瘤项目",
    parentNodeId: "kb-root-1",
  });

  assert.deepEqual(calls, [
    {
      method: "PATCH",
      path: "/api/home/draft-confirmations/draft-1",
      body: {
        draft: {
          mode: "create",
          title: "CRISPR 论文分析",
          markdown: "# CRISPR 论文分析\n\n正文",
          targetPath: "肿瘤项目",
          targetParentNodeId: "kb-root-1",
          projectId: "project-1",
          projectKnowledgeType: "other",
          projectKnowledgeSection: "knowledge",
        },
      },
    },
    {
      method: "POST",
      path: "/api/mira/drafts/draft-1/confirm",
      body: { confirmationToken: "token-1", draftHash: "hash-2" },
    },
  ]);
});
