import assert from "node:assert/strict";
import test from "node:test";

import type {
  AdminTokenLedgerItem,
  AdminUsageEventItem,
  AdminUsageSummaryResponse,
} from "@bioagent/shared";

import {
  loadAiUsage,
  mapAiUsageViewModel,
  shouldShowAiUsageReminder,
} from "./ai-usage";

const summary: AdminUsageSummaryResponse = {
  tokenBalance: 12_000,
  monthTokenUsage: 3_000,
  last7dTokenUsage: 700,
  estimatedRemainingDays: 6,
  byMember: [
    {
      userId: "user-1",
      name: "Mira",
      email: "mira@example.com",
      totalTokens: 2_000,
    },
  ],
  byProject: [],
};

const events: AdminUsageEventItem[] = [
  {
    id: "event-1",
    userId: "user-1",
    inputTokens: 60,
    outputTokens: 40,
    totalTokens: 100,
    eventSource: "home_chat",
    createdAt: "2026-07-02T10:00:00.000Z",
  },
  {
    id: "event-2",
    userId: "user-2",
    inputTokens: 120,
    outputTokens: 80,
    totalTokens: 200,
    eventSource: "home_chat",
    createdAt: "2026-07-02T11:00:00.000Z",
  },
];

const ledger: AdminTokenLedgerItem[] = [
  {
    id: "ledger-1",
    entryType: "recharge",
    amountTokens: 10_000,
    createdAt: "2026-07-01T09:00:00.000Z",
  },
  {
    id: "ledger-2",
    entryType: "usage_debit",
    amountTokens: -100,
    createdAt: "2026-07-02T10:00:00.000Z",
  },
];

test("AI usage adapter loads all existing admin usage endpoints", async () => {
  const paths: string[] = [];
  const api = {
    async get<T>(path: string) {
      paths.push(path);
      if (path.includes("summary")) return summary as T;
      if (path.includes("events")) return events as T;
      return ledger as T;
    },
  };

  assert.deepEqual(await loadAiUsage(api), { summary, events, ledger });
  assert.deepEqual(paths, [
    "/api/admin/usage/summary",
    "/api/admin/usage/events?limit=200",
    "/api/admin/token-ledger?limit=200",
  ]);
});

test("AI usage view model filters trend by month and member", () => {
  const view = mapAiUsageViewModel(
    { summary, events, ledger },
    { memberId: "user-1", month: "2026-07" },
    new Date("2026-07-25T00:00:00.000Z"),
  );

  assert.equal(view.trendPoints.length, 31);
  assert.equal(view.trendPoints[1], 100);
  assert.equal(view.trendTotal, 100);
  assert.equal(view.rechargeRecords.length, 1);
  assert.equal(view.memberOptions[1]?.label, "Mira");
  assert.equal(view.overviewCards[2]?.warningLabel, "用量提醒");
});

test("AI usage reminder follows the fixed seven-day threshold", () => {
  assert.equal(shouldShowAiUsageReminder(summary), true);
  assert.equal(
    shouldShowAiUsageReminder({ ...summary, estimatedRemainingDays: 8 }),
    false,
  );
  assert.equal(
    shouldShowAiUsageReminder({
      ...summary,
      tokenBalance: 0,
      estimatedRemainingDays: null,
    }),
    true,
  );
});
