import assert from "node:assert/strict";
import test from "node:test";

import {
  createLiteratureSubscriptions,
  EMPTY_LITERATURE_SUBSCRIPTION,
  mapLiteratureSubscriptions,
} from "./literature-subscriptions";

test("literature subscription creation preserves old Web fields and creates one source per selection", async () => {
  const calls: Array<{ method: string; path: string; body?: unknown }> = [];
  let created = 0;
  const api = {
    async post<T>(path: string, body?: unknown) {
      calls.push({ method: "POST", path, body });
      created += 1;
      return { id: `sub-${created}` } as T;
    },
    async put<T>(path: string, body?: unknown) {
      calls.push({ method: "PUT", path, body });
      return {} as T;
    },
    async delete<T>(path: string) {
      calls.push({ method: "DELETE", path });
      return {} as T;
    },
    async get<T>() {
      return {} as T;
    },
  };

  await createLiteratureSubscriptions(api, {
    ...EMPTY_LITERATURE_SUBSCRIPTION,
    topic: "CRISPR",
    sourceTypes: ["pubmed", "biorxiv"],
    keywords: "CRISPR, prime editing",
    pubmedMatchMode: "advanced",
    advancedQuery: "CRISPR[Title]",
    projectNodeIds: ["project-node-1"],
  });

  assert.equal(calls.length, 4);
  assert.deepEqual(calls[0]?.body, {
    name: "PubMed · CRISPR",
    type: "pubmed",
    config: {
      keywords: ["CRISPR", "prime editing"],
      frequency: "daily",
      lookbackDays: 30,
      queryMode: "advanced",
      advancedQuery: "CRISPR[Title]",
    },
    enabled: true,
  });
  assert.deepEqual(calls[1], {
    method: "PUT",
    path: "/api/knowledge/subscriptions/sub-1/projects",
    body: { projectNodeIds: ["project-node-1"] },
  });
});

test("literature subscription table maps source, schedule, counts, and binding count", () => {
  const [item] = mapLiteratureSubscriptions([
    {
      id: "sub-1",
      labId: "lab-1",
      name: "PubMed · CRISPR",
      type: "pubmed",
      config: {
        frequency: "weekly",
        lookbackDays: 14,
        keywords: ["CRISPR"],
      },
      enabled: true,
      createdBy: "user-1",
      createdAt: "2026-07-01T00:00:00.000Z",
      totalItems: 20,
      unreadItems: 4,
      savedItems: 2,
      boundProjectCount: 3,
    },
  ]);

  assert.equal(item?.source, "PubMed");
  assert.equal(item?.schedule, "每周 · 回看 14 天");
  assert.equal(item?.itemStats, "共 20 · 未读 4 · 收藏 2");
  assert.equal(item?.projectStats, "关联 3 个项目");
});
