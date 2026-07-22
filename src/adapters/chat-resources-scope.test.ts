import assert from "node:assert/strict";
import test from "node:test";

import type { ChatResourceSearchResponse } from "@bioagent/shared";

import {
  mapChatResourceCatalog,
  mergeChatContextRefs,
  resolveChatSendScope,
} from "./chat-resources";

const miraRef = {
  type: "mira_node" as const,
  id: "mira-node-1",
  title: "EGFR notes",
};

const response: ChatResourceSearchResponse = {
  query: "",
  items: [
    {
      type: "skill",
      id: "skill-row-1",
      title: "Paper search",
      source: "skill",
      selectable: true,
      metadata: { slug: "paper-search" },
    },
    {
      type: "mira_node",
      id: miraRef.id,
      title: miraRef.title,
      source: "mira",
      selectable: true,
      ref: miraRef,
    },
    {
      type: "skill",
      id: "experiment-only",
      title: "Experiment-only skill",
      source: "skill",
      selectable: true,
      metadata: { supportedScenes: ["experiment"] },
    },
  ],
};

test("send scope combines selected resources with attachment context without duplicates", () => {
  const catalog = mapChatResourceCatalog(response);
  const attachmentRef = {
    type: "attachment" as const,
    id: "attachment-1",
    title: "notes.txt",
  };

  assert.deepEqual(
    resolveChatSendScope(
      [
        { type: "skill", label: "Paper search", sourceId: "paper-search" },
        { type: "doc", label: "EGFR notes", sourceId: miraRef.id },
      ],
      catalog,
      [miraRef, attachmentRef],
    ),
    {
      selectedSkillSlugs: ["paper-search"],
      contextRefs: [miraRef, attachmentRef],
    },
  );

  assert.deepEqual(mergeChatContextRefs([], []), []);
});

test("resource catalog disables skills that cannot run in the home scene", () => {
  const catalog = mapChatResourceCatalog(response);
  const skill = catalog.skills.find((item) => item.id === "experiment-only");

  assert.equal(skill?.id, "experiment-only");
  assert.equal(skill?.badge, "E");
  assert.equal(skill?.disabled, true);
  assert.equal(skill?.disabledReason, "不支持当前首页对话场景");
  assert.deepEqual(
    resolveChatSendScope(
      [{ type: "skill", label: skill?.description || "", sourceId: skill?.id }],
      catalog,
    ),
    { selectedSkillSlugs: undefined, contextRefs: undefined },
  );
});
