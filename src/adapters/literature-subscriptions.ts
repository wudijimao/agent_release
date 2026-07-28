import type {
  LiteratureSubscriptionListItemViewModel,
  LiteratureTaskEditorValue,
  ScheduledTaskEditorProject,
} from "@bioagent/chatui";
import type { Subscription, SubscriptionType } from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

type LiteratureApi = Pick<ApiClient, "delete" | "get" | "post" | "put">;

export interface LiteratureSubscription
  extends Omit<Subscription, "config" | "lastFetchAt"> {
  lastFetchAt?: string | null;
  totalItems?: number;
  unreadItems?: number;
  savedItems?: number;
  boundProjectCount?: number;
  config: Subscription["config"] & {
    queryMode?: "and" | "or" | "advanced";
    advancedQuery?: string;
  };
}

interface TrackingProjectsResponse {
  items: Array<{ id: string; title: string }>;
}

interface SubscriptionProjectsResponse {
  projectNodeIds: string[];
}

const frequencyLabels = {
  hourly: "每小时",
  daily: "每天",
  weekly: "每周",
} as const;

const sourceLabels: Partial<Record<SubscriptionType, string>> = {
  pubmed: "PubMed",
  biorxiv: "bioRxiv",
};

const dateFormatter = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export const EMPTY_LITERATURE_SUBSCRIPTION: LiteratureTaskEditorValue = {
  topic: "",
  frequency: "daily",
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

export async function listLiteratureProjects(
  api: LiteratureApi,
): Promise<ScheduledTaskEditorProject[]> {
  const payload = await api.get<TrackingProjectsResponse>(
    "/api/knowledge/tracking/projects?limit=50",
  );
  return payload.items.map((item) => ({ id: item.id, name: item.title }));
}

export async function loadLiteratureSubscriptionDraft(
  api: LiteratureApi,
  subscription: LiteratureSubscription,
): Promise<LiteratureTaskEditorValue> {
  const bindings = await api.get<SubscriptionProjectsResponse>(
    `/api/knowledge/subscriptions/${encodeURIComponent(subscription.id)}/projects`,
  );
  const queryMode = subscription.config.queryMode ?? "and";

  return {
    topic: subscription.name,
    frequency: subscription.config.frequency,
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

export function fetchLiteratureSubscription(
  api: LiteratureApi,
  subscriptionId: string,
) {
  return api.post(
    `/api/knowledge/subscriptions/${encodeURIComponent(subscriptionId)}/fetch`,
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
    schedule: `${frequencyLabels[item.config.frequency]} · 回看 ${item.config.lookbackDays ?? 30} 天`,
    lastFetch: item.lastFetchAt
      ? dateFormatter.format(new Date(item.lastFetchAt))
      : "尚未抓取",
    itemStats: `共 ${item.totalItems ?? 0} · 未读 ${item.unreadItems ?? 0} · 收藏 ${item.savedItems ?? 0}`,
    projectStats: `关联 ${item.boundProjectCount ?? 0} 个项目`,
    isEnabled: item.enabled,
  }));
}
