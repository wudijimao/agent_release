import assert from "node:assert/strict";
import test from "node:test";

import type { SkillCatalogItemDto } from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

import { installSkills, loadSkillsPage, uninstallSkills } from "./skills";
import { mapSkillsPage } from "./skills-view-model";

type ApiCall = { method: string; path: string; body?: unknown };

const catalogSkill: SkillCatalogItemDto = {
  id: "catalog-1",
  slug: "literature-review",
  displayName: "Literature Review",
  description: "整理并复核文献证据。",
  category: "literature",
  executionMode: "prompt",
  riskLevel: "high",
  sourceRepo: "bio-lab-agent/skills",
  sourcePath: "skills/literature-review",
  supportsP1: true,
  metadata: {
    sourceType: "certified-dir",
    capabilities: ["证据复核", "长文整理"],
  },
  createdAt: "2026-07-24T00:00:00.000Z",
  updatedAt: "2026-07-24T00:00:00.000Z",
};

function createApi(calls: ApiCall[]) {
  return {
    async get<T>(path: string) {
      calls.push({ method: "GET", path });
      return (path.endsWith("/catalog")
        ? { items: [catalogSkill] }
        : { items: [{ id: "install-1", slug: catalogSkill.slug, status: "disabled" }] }) as T;
    },
    async post<T>(path: string, body?: unknown) {
      calls.push({ method: "POST", path, body });
      return { items: [] } as T;
    },
  } as Pick<ApiClient, "get" | "post">;
}

test("loadSkillsPage merges catalog and installed state without adding UI logic to the API adapter", async () => {
  const calls: ApiCall[] = [];
  const data = await loadSkillsPage(createApi(calls));

  assert.deepEqual(calls, [
    { method: "GET", path: "/api/skills/catalog" },
    { method: "GET", path: "/api/skills/installed" },
  ]);
  assert.equal(data.installedSlugs.has(catalogSkill.slug), true);
  assert.deepEqual(mapSkillsPage(data), [{
    id: "literature-review",
    name: "Literature Review",
    source: "bio-lab-agent/skills · certified-dir",
    description: "整理并复核文献证据。",
    tags: ["文献", "Prompt", "证据复核"],
    riskLevel: "high",
    installed: true,
  }]);
});

test("skill batch mutations use their dedicated server endpoints", async () => {
  const calls: ApiCall[] = [];
  const api = createApi(calls);

  await installSkills(api, ["one", "two"]);
  await uninstallSkills(api, ["two"]);

  assert.deepEqual(calls, [
    { method: "POST", path: "/api/skills/install-many", body: { slugs: ["one", "two"] } },
    { method: "POST", path: "/api/skills/uninstall-many", body: { slugs: ["two"] } },
  ]);
});
