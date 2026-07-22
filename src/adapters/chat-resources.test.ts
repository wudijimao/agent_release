import assert from "node:assert/strict";
import test from "node:test";

import type { ChatResourceSearchResponse } from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

import {
  loadChatResourceCatalog,
  mapChatResourceCatalog,
  resolveChatResourceSelection,
} from "./chat-resources";

const response: ChatResourceSearchResponse = {
  query: "",
  items: [
    {
      type: "skill",
      id: "skill-row-1",
      title: "文献检索",
      description: "检索并整理文献",
      source: "skill",
      selectable: true,
      metadata: { slug: "paper-search", category: "科研" },
    },
    {
      type: "skill",
      id: "disabled-skill",
      title: "受限 Skill",
      source: "skill",
      selectable: false,
      disabledReason: "缺 Secret",
    },
    {
      type: "mira_node",
      id: "mira-node-1",
      title: "EGFR 实验记录",
      description: "耐药实验摘要",
      subtitle: "项目甲.EGFR",
      source: "mira",
      selectable: true,
      ref: {
        type: "mira_node",
        id: "mira-node-1",
        title: "EGFR 实验记录",
        source: "picker",
        metadata: { permission: "view_comment" },
      },
      metadata: { path: "项目甲.EGFR", updatedAt: "2026-07-17T10:00:00.000Z" },
    },
  ],
};

test("resource mapper keeps stable skill slugs, disabled state, and Mira ids", () => {
  const catalog = mapChatResourceCatalog(response);

  assert.deepEqual(catalog.skills, [
    {
      id: "paper-search",
      badge: "文",
      description: "检索并整理文献",
      source: "科研",
      disabled: false,
    },
    {
      id: "disabled-skill",
      badge: "受",
      description: "受限 Skill",
      source: "已安装",
      disabled: true,
      disabledReason: "缺 Secret",
    },
  ]);
  assert.equal(catalog.files[0]?.id, "mira-node-1");
  assert.equal(catalog.files[0]?.projectName, "项目甲");
  assert.equal(catalog.contextRefsById.get("mira-node-1")?.type, "mira_node");
});

test("resource selection emits only selectable skills and stable context refs", () => {
  const catalog = mapChatResourceCatalog(response);
  const selection = resolveChatResourceSelection(
    [
      { type: "skill", label: "文献检索", sourceId: "paper-search" },
      { type: "skill", label: "受限 Skill", sourceId: "disabled-skill" },
      { type: "doc", label: "EGFR 实验记录", sourceId: "mira-node-1" },
      { type: "doc", label: "未知", sourceId: "missing" },
    ],
    catalog,
  );

  assert.deepEqual(selection.selectedSkillSlugs, ["paper-search"]);
  assert.deepEqual(selection.contextRefs, [response.items[2]?.ref]);
});

test("resource loader uses the authenticated chat resource endpoint", async () => {
  const calls: string[] = [];
  const api = {
    get: async (path: string) => {
      calls.push(path);
      return response;
    },
  } as ApiClient;

  const catalog = await loadChatResourceCatalog(api, { query: " EGFR " });

  assert.equal(
    calls[0],
    "/api/chat/resources?types=skill%2Cmira_node&limit=30&q=EGFR",
  );
  assert.equal(catalog.files[0]?.name, "EGFR 实验记录");
});
