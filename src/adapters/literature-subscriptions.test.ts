import assert from "node:assert/strict";
import test from "node:test";

import {
  createLiteratureSubscriptions,
  EMPTY_LITERATURE_SUBSCRIPTION,
  loadLiteratureSubscriptionDraft,
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
      scheduleStartAt: new Date(
        `${EMPTY_LITERATURE_SUBSCRIPTION.startDate}T00:00:00+08:00`,
      ).toISOString(),
      scheduleEndAt: new Date(
        `${EMPTY_LITERATURE_SUBSCRIPTION.endDate}T23:59:59+08:00`,
      ).toISOString(),
      scheduleTime: "09:00",
      timezone: "Asia/Shanghai",
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

test("literature subscription table maps the shared task columns and conversation", () => {
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
        scheduleTime: "10:30",
        scheduleWeekday: 2,
        scheduleEndAt: "2026-11-07T15:59:59.000Z",
        timezone: "Asia/Shanghai",
      },
      enabled: true,
      createdBy: "user-1",
      createdAt: "2026-07-01T00:00:00.000Z",
      totalItems: 20,
      unreadItems: 4,
      savedItems: 2,
      boundProjectCount: 3,
      mainSessionId: "session-1",
    },
  ]);

  assert.equal(item?.source, "PubMed");
  assert.equal(item?.trigger, "每周二 10:30");
  assert.match(item?.nextRun ?? "", /^\d{1,2}\.\d{2} 10:30$/);
  assert.equal(item?.scheduleEnd, "截止 11.07 23:59");
  assert.equal(item?.itemStats, "共 20 · 未读 4 · 收藏 2");
  assert.equal(item?.projectStats, "关联 3 个项目");
  assert.equal(item?.mainSessionId, "session-1");
});

test("literature subscription editor restores the server task period", async () => {
  let getCalls = 0;
  const api = {
    async get<T>() {
      getCalls += 1;
      return { projectNodeIds: ["project-node-1"] } as T;
    },
    async post<T>() { return {} as T; },
    async put<T>() { return {} as T; },
    async delete<T>() { return {} as T; },
  };

  const draft = await loadLiteratureSubscriptionDraft(api, {
    id: "sub-1",
    labId: "lab-1",
    name: "CRISPR",
    type: "pubmed",
    config: {
      frequency: "daily",
      scheduleStartAt: "2026-09-07T00:00:00+08:00",
      scheduleEndAt: "2026-11-07T23:59:59+08:00",
      scheduleTime: "09:30",
      timezone: "Asia/Shanghai",
      keywords: ["CRISPR"],
    },
    enabled: true,
    createdBy: "user-1",
    createdAt: "2026-09-01T00:00:00.000Z",
  });

  assert.equal(getCalls, 1);
  assert.equal(draft.startDate, "2026-09-07");
  assert.equal(draft.endDate, "2026-11-07");
  assert.equal(draft.scheduleTime, "09:30");
  assert.deepEqual(draft.projectNodeIds, ["project-node-1"]);
});
