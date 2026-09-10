import type {
  LiteratureSubscriptionListItemViewModel,
  LiteratureTaskEditorValue,
} from "@bioagent/chatui";
import type { Subscription, SubscriptionType } from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

type LiteratureApi = Pick<ApiClient, "delete" | "get" | "post" | "put">;

export interface LiteratureSubscription
  extends Omit<Subscription, "config" | "lastFetchAt"> {
  lastFetchAt?: string | null;
  scheduledTaskId?: string | null;
  mainSessionId?: string | null;
  totalItems?: number;
  unreadItems?: number;
  savedItems?: number;
  boundProjectCount?: number;
  config: Subscription["config"] & {
    queryMode?: "and" | "or" | "advanced";
    advancedQuery?: string;
  };
}

interface SubscriptionProjectsResponse {
  projectNodeIds: string[];
}

const sourceLabels: Partial<Record<SubscriptionType, string>> = {
  pubmed: "PubMed",
  biorxiv: "bioRxiv",
};

function localDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addMonths(date: Date, months: number) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

function dateInputInTimeZone(value: unknown, timezone = "Asia/Shanghai") {
  if (typeof value !== "string" || !value) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  try {
    const parts = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: timezone,
    }).formatToParts(date);
    const part = (type: Intl.DateTimeFormatPartTypes) =>
      parts.find((entry) => entry.type === type)?.value ?? "";
    return `${part("year")}-${part("month")}-${part("day")}`;
  } catch {
    return "";
  }
}

function scheduleBoundary(date: string, boundary: "start" | "end") {
  if (!date) return "";
  const time = boundary === "start" ? "00:00:00" : "23:59:59";
  const parsed = new Date(`${date}T${time}+08:00`);
  return Number.isNaN(parsed.getTime()) ? "" : parsed.toISOString();
}

const defaultLiteratureStartDate = localDate();
const defaultLiteratureEndDate = localDate(addMonths(new Date(), 2));

export const EMPTY_LITERATURE_SUBSCRIPTION: LiteratureTaskEditorValue = {
  topic: "",
  frequency: "daily",
  startDate: defaultLiteratureStartDate,
  endDate: defaultLiteratureEndDate,
  scheduleTime: "09:00",
  scheduleWeekday: 1,
  sourceTypes: ["pubmed"],
  lookbackDays: 30,
  keywords: "",
  pubmedMatchMode: "all",
  advancedQuery: "",
  enabled: true,
  projectNodeIds: [],
};

export async function listLiteratureSubscriptions(api: LiteratureApi) {
  return api.get<LiteratureSubscription[]>("/api/knowledge/subscriptions");
}

export async function loadLiteratureSubscriptionDraft(
  api: LiteratureApi,
  subscription: LiteratureSubscription,
): Promise<LiteratureTaskEditorValue> {
  const bindings = await api.get<SubscriptionProjectsResponse>(
    `/api/knowledge/subscriptions/${encodeURIComponent(subscription.id)}/projects`,
  );
  const queryMode = subscription.config.queryMode ?? "and";
  const timezone = typeof subscription.config.timezone === "string"
    ? subscription.config.timezone
    : "Asia/Shanghai";

  return {
    topic: subscription.name,
    frequency: subscription.config.frequency,
    startDate:
      dateInputInTimeZone(subscription.config.scheduleStartAt, timezone) ||
      defaultLiteratureStartDate,
    endDate:
      dateInputInTimeZone(subscription.config.scheduleEndAt, timezone) ||
      defaultLiteratureEndDate,
    scheduleTime:
      typeof subscription.config.scheduleTime === "string"
        ? subscription.config.scheduleTime
        : "09:00",
    scheduleWeekday:
      typeof subscription.config.scheduleWeekday === "number"
        ? subscription.config.scheduleWeekday
        : 1,
    sourceTypes:
      subscription.type === "pubmed" || subscription.type === "biorxiv"
        ? [subscription.type]
        : ["pubmed"],
    lookbackDays: subscription.config.lookbackDays ?? 30,
    keywords: (subscription.config.keywords ?? []).join(", "),
    pubmedMatchMode:
      queryMode === "and" ? "all" : queryMode === "or" ? "any" : "advanced",
    advancedQuery: subscription.config.advancedQuery ?? "",
    enabled: subscription.enabled,
    projectNodeIds: bindings.projectNodeIds,
  };
}

function normalizeKeywords(value: string) {
  return value
    .split(/[,，\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function requestFor(
  value: LiteratureTaskEditorValue,
  sourceType: "pubmed" | "biorxiv",
  name = value.topic.trim(),
) {
  return {
    name,
    type: sourceType,
    config: {
      keywords: normalizeKeywords(value.keywords),
      frequency: value.frequency,
      lookbackDays: Math.max(1, Math.min(365, Math.floor(value.lookbackDays))),
      scheduleStartAt: scheduleBoundary(value.startDate, "start"),
      scheduleEndAt: scheduleBoundary(value.endDate, "end"),
      ...(value.frequency === "hourly"
        ? {}
        : { scheduleTime: value.scheduleTime || "09:00" }),
      ...(value.frequency === "weekly"
        ? { scheduleWeekday: value.scheduleWeekday }
        : {}),
      timezone: "Asia/Shanghai",
      ...(sourceType === "pubmed"
        ? {
            queryMode:
              value.pubmedMatchMode === "all"
                ? "and"
                : value.pubmedMatchMode === "any"
                  ? "or"
                  : "advanced",
            ...(value.pubmedMatchMode === "advanced"
              ? { advancedQuery: value.advancedQuery.trim() }
              : {}),
          }
        : {}),
    },
    enabled: value.enabled,
  };
}

async function saveBindings(
  api: LiteratureApi,
  subscriptionId: string,
  projectNodeIds: string[],
) {
  return api.put(
    `/api/knowledge/subscriptions/${encodeURIComponent(subscriptionId)}/projects`,
    { projectNodeIds },
  );
}

export async function createLiteratureSubscriptions(
  api: LiteratureApi,
  value: LiteratureTaskEditorValue,
) {
  const created: LiteratureSubscription[] = [];
  try {
    for (const sourceType of value.sourceTypes) {
      const sourceLabel = sourceLabels[sourceType] ?? sourceType;
      const item = await api.post<LiteratureSubscription>(
        "/api/knowledge/subscriptions",
        requestFor(
          value,
          sourceType,
          value.sourceTypes.length > 1
            ? `${sourceLabel} · ${value.topic.trim()}`
            : value.topic.trim(),
        ),
      );
      created.push(item);
      await saveBindings(api, item.id, value.projectNodeIds);
    }
    return created;
  } catch (error) {
    await Promise.allSettled(
      created.map((item) =>
        api.delete(
          `/api/knowledge/subscriptions/${encodeURIComponent(item.id)}`,
        ),
      ),
    );
    throw error;
  }
}

export async function updateLiteratureSubscription(
  api: LiteratureApi,
  subscriptionId: string,
  value: LiteratureTaskEditorValue,
) {
  const sourceType = value.sourceTypes[0] ?? "pubmed";
  const updated = await api.put<LiteratureSubscription>(
    `/api/knowledge/subscriptions/${encodeURIComponent(subscriptionId)}`,
    requestFor(value, sourceType),
  );
  await saveBindings(api, subscriptionId, value.projectNodeIds);
  return updated;
}

export function deleteLiteratureSubscription(
  api: LiteratureApi,
  subscriptionId: string,
) {
  return api.delete(
    `/api/knowledge/subscriptions/${encodeURIComponent(subscriptionId)}`,
  );
}

export function setLiteratureSubscriptionEnabled(
  api: LiteratureApi,
  subscription: LiteratureSubscription,
  enabled: boolean,
) {
  return api.put<LiteratureSubscription>(
    `/api/knowledge/subscriptions/${encodeURIComponent(subscription.id)}`,
    {
      name: subscription.name,
      type: subscription.type,
      config: subscription.config,
      enabled,
    },
  );
}

export function mapLiteratureSubscriptions(
  subscriptions: LiteratureSubscription[],
): LiteratureSubscriptionListItemViewModel[] {
  return subscriptions.map((item) => ({
    id: item.id,
    name: item.name,
    source: sourceLabels[item.type] ?? item.type,
    keywords: (item.config.keywords ?? []).join("、"),
    nextRun: formatNextLiteratureRun(item),
    ...(typeof item.config.scheduleEndAt === "string"
      ? {
          scheduleEnd: `截止 ${formatShortDateTime(
            new Date(item.config.scheduleEndAt),
            typeof item.config.timezone === "string"
              ? item.config.timezone
              : "Asia/Shanghai",
          )}`,
        }
      : {}),
    trigger: formatLiteratureTrigger(item),
    itemStats: `共 ${item.totalItems ?? 0} · 未读 ${item.unreadItems ?? 0} · 收藏 ${item.savedItems ?? 0}`,
    projectStats: `关联 ${item.boundProjectCount ?? 0} 个项目`,
    ...(item.mainSessionId ? { mainSessionId: item.mainSessionId } : {}),
    isEnabled: item.enabled,
  }));
}

const weekdayLabels = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"] as const;

function formatLiteratureTrigger(item: LiteratureSubscription) {
  if (item.config.frequency === "hourly") return "每小时";
  const scheduleTime = typeof item.config.scheduleTime === "string"
    ? item.config.scheduleTime
    : "09:00";
  if (item.config.frequency === "weekly") {
    const weekday = typeof item.config.scheduleWeekday === "number"
      ? weekdayLabels[item.config.scheduleWeekday] ?? "周一"
      : "周一";
    return `每${weekday} ${scheduleTime}`;
  }
  return `每天 ${scheduleTime}`;
}

function formatShortDateTime(value: Date, timezone: string) {
  if (Number.isNaN(value.getTime())) return "即将运行";
  try {
    const parts = new Intl.DateTimeFormat("zh-CN", {
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
      timeZone: timezone,
    }).formatToParts(value);
    const part = (type: Intl.DateTimeFormatPartTypes) =>
      parts.find((entry) => entry.type === type)?.value ?? "";
    return `${part("month")}.${part("day")} ${part("hour")}:${part("minute")}`;
  } catch {
    return "即将运行";
  }
}

function formatNextLiteratureRun(item: LiteratureSubscription) {
  if (!item.enabled) return "--";
  const timezone = typeof item.config.timezone === "string"
    ? item.config.timezone
    : "Asia/Shanghai";
  if (item.config.frequency === "hourly") {
    if (!item.lastFetchAt) return "即将运行";
    const next = new Date(new Date(item.lastFetchAt).getTime() + 60 * 60 * 1000);
    return next.getTime() <= Date.now() ? "即将运行" : formatShortDateTime(next, timezone);
  }

  let nowParts: Intl.DateTimeFormatPart[];
  try {
    nowParts = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
      timeZone: timezone,
    }).formatToParts(new Date());
  } catch {
    return "即将运行";
  }
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    nowParts.find((entry) => entry.type === type)?.value ?? "";
  const year = Number(part("year"));
  const month = Number(part("month"));
  const day = Number(part("day"));
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(part("weekday"));
  const currentTime = `${part("hour")}:${part("minute")}`;
  const scheduleTime = typeof item.config.scheduleTime === "string"
    ? item.config.scheduleTime
    : "09:00";
  let daysUntil = currentTime < scheduleTime ? 0 : 1;
  if (item.config.frequency === "weekly") {
    const targetWeekday = typeof item.config.scheduleWeekday === "number"
      ? item.config.scheduleWeekday
      : 1;
    daysUntil = (targetWeekday - Math.max(weekday, 0) + 7) % 7;
    if (daysUntil === 0 && currentTime >= scheduleTime) daysUntil = 7;
  }
  const nextLocalDate = new Date(Date.UTC(year, month - 1, day + daysUntil));
  return `${nextLocalDate.getUTCMonth() + 1}.${String(nextLocalDate.getUTCDate()).padStart(2, "0")} ${scheduleTime}`;
}
