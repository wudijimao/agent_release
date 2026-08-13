import type {
  AdminTokenLedgerItem,
  AdminUsageEventItem,
  AdminUsageSummaryResponse,
} from "@bioagent/shared";
import type {
  AiUsageFilterOption,
  AiUsageOverviewCard,
  AiUsageRechargeRecord,
} from "@bioagent/chatui";

import type { ApiClient } from "@/lib/api";

type AiUsageApi = Pick<ApiClient, "get">;

export interface AiUsagePayload {
  summary: AdminUsageSummaryResponse;
  events: AdminUsageEventItem[];
  ledger: AdminTokenLedgerItem[];
}

export interface AiUsageViewModel {
  overviewCards: AiUsageOverviewCard[];
  memberOptions: AiUsageFilterOption[];
  monthOptions: AiUsageFilterOption[];
  trendPoints: number[];
  trendLabels: string[];
  trendTotal: number;
  rechargeRecords: AiUsageRechargeRecord[];
}

const numberFormatter = new Intl.NumberFormat("zh-CN");
const currencyFormatter = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "CNY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const dateTimeFormatter = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export async function loadAiUsage(api: AiUsageApi): Promise<AiUsagePayload> {
  const [summary, events, ledger] = await Promise.all([
    api.get<AdminUsageSummaryResponse>("/api/admin/usage/summary"),
    api.get<AdminUsageEventItem[]>("/api/admin/usage/events?limit=200"),
    api.get<AdminTokenLedgerItem[]>("/api/admin/token-ledger?limit=200"),
  ]);

  return { summary, events, ledger };
}

export async function loadAiUsageReminder(
  api: AiUsageApi,
): Promise<AdminUsageSummaryResponse> {
  return api.get<AdminUsageSummaryResponse>("/api/admin/usage/summary");
}

export function shouldShowAiUsageReminder(
  summary: AdminUsageSummaryResponse,
): boolean {
  return (
    (summary.billing
      ? summary.billing.remainingAmountCents <= 0
      : summary.tokenBalance <= 0) ||
    (summary.estimatedRemainingDays !== null &&
      summary.estimatedRemainingDays !== undefined &&
      summary.estimatedRemainingDays <= 7)
  );
}

export function createAiUsageMonthOptions(
  now = new Date(),
  count = 12,
): AiUsageFilterOption[] {
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - index, 1);
    const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    return {
      value,
      label: `${date.getFullYear()}年${date.getMonth() + 1}月`,
    };
  });
}

function daysInMonth(month: string) {
  const [year, monthNumber] = month.split("-").map(Number);
  return new Date(year, monthNumber, 0).getDate();
}

function eventMonthAndDay(createdAt: string) {
  const date = new Date(createdAt);
  if (Number.isNaN(date.getTime())) return null;

  return {
    month: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`,
    day: date.getDate(),
  };
}

export function mapAiUsageViewModel(
  payload: AiUsagePayload,
  filters: { memberId: string; month: string },
  now = new Date(),
): AiUsageViewModel {
  const { summary, events, ledger } = payload;
  const monthOptions = createAiUsageMonthOptions(now);
  const memberOptions: AiUsageFilterOption[] = [
    { label: "全部成员", value: "all" },
    ...summary.byMember.map((member) => ({
      label: member.name.trim() || member.email,
      value: member.userId,
    })),
  ];
  const pointCount = daysInMonth(filters.month);
  const trendPoints = Array.from({ length: pointCount }, () => 0);

  for (const event of events) {
    const date = eventMonthAndDay(event.createdAt);
    if (!date || date.month !== filters.month) continue;
    if (filters.memberId !== "all" && event.userId !== filters.memberId) continue;
    trendPoints[date.day - 1] += event.totalTokens;
  }

  const estimatedDays = summary.estimatedRemainingDays;
  const warning =
    estimatedDays !== null &&
    estimatedDays !== undefined &&
    estimatedDays <= 7;
  const remainingAmountCents = summary.billing?.remainingAmountCents ?? 0;
  const overviewCards: AiUsageOverviewCard[] = [
    {
      title: "账户余额",
      value: currencyFormatter.format(remainingAmountCents / 100),
      helper: "实验室共享额度",
      ...(remainingAmountCents <= 0 ? { warningLabel: "余额不足" } : {}),
    },
    {
      title: "本月 Token 消耗",
      value: numberFormatter.format(summary.monthTokenUsage),
      helper: `近 7 天 ${numberFormatter.format(summary.last7dTokenUsage)}`,
    },
    {
      title: "预计可用天数",
      value:
        estimatedDays === null || estimatedDays === undefined
          ? "—"
          : `${Math.max(0, Math.round(estimatedDays))} 天`,
      helper: "按近 7 天平均消耗估算",
      ...(warning ? { warningLabel: "用量提醒" } : {}),
    },
  ];

  return {
    overviewCards,
    memberOptions,
    monthOptions,
    trendPoints,
    trendLabels: trendPoints.map((_, index) => `${index + 1}日`),
    trendTotal: trendPoints.reduce((total, point) => total + point, 0),
    rechargeRecords: ledger
      .filter((item) => item.entryType === "recharge")
      .map((item) => ({
        id: item.id,
        amount: `${item.amountTokens >= 0 ? "+" : ""}${numberFormatter.format(item.amountTokens)} Token`,
        rechargeTime: dateTimeFormatter.format(new Date(item.createdAt)),
      })),
  };
}
