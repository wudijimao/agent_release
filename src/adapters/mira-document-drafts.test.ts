import assert from "node:assert/strict";
import test from "node:test";

import type { HomeAssistantDisplay } from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

import {
  confirmMiraDocumentDraft,
  mapMiraDocumentDraft,
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
  });
  assert.equal(mapped?.action?.confirmPath, "/api/mira/drafts/draft-1/confirm");
  assert.equal(mapped?.action?.markdown, "# CRISPR 论文分析\n\n正文");
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
