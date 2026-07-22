import type {
  ChatResourceSearchResponse,
  HomeContextRef,
  HomeUnifiedResourceItem,
} from "@bioagent/shared";

import type { ApiClient } from "@/lib/api";

export interface ChatResourceSkillOption {
  id: string;
  badge: string;
  description: string;
  source: string;
  disabled: boolean;
  disabledReason?: string;
}

export interface ChatResourceFileOption {
  id: string;
  name: string;
  projectId: string;
  projectName: string;
  sourceType: "项目文件";
  isRecent: boolean;
  operatedAt?: string;
}

export interface ChatResourceCatalog {
  skills: ChatResourceSkillOption[];
  files: ChatResourceFileOption[];
  contextRefsById: ReadonlyMap<string, HomeContextRef>;
}

export interface ChatResourceReference {
  type: "skill" | "doc";
  label: string;
  sourceId?: string;
}

export interface ChatResourceSelection {
  selectedSkillSlugs: string[];
  contextRefs: HomeContextRef[];
}

export function createEmptyChatResourceCatalog(): ChatResourceCatalog {
  return { skills: [], files: [], contextRefsById: new Map() };
}

function optionalString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function skillSlug(item: HomeUnifiedResourceItem) {
  return optionalString(item.metadata?.slug) || item.id;
}

function skillSource(item: HomeUnifiedResourceItem) {
  return optionalString(item.metadata?.category) || "已安装";
}

function skillBadge(item: HomeUnifiedResourceItem) {
  return (item.title || skillSlug(item)).trim().charAt(0).toUpperCase() || "S";
}

function skillSupportsHome(item: HomeUnifiedResourceItem) {
  const scenes = item.metadata?.supportedScenes;
  return (
    !Array.isArray(scenes) ||
    scenes.length === 0 ||
    scenes.some((scene) => scene === "home")
  );
}

function miraContextRef(item: HomeUnifiedResourceItem): HomeContextRef {
  return (
    item.ref || {
      type: "mira_node",
      id: item.id,
      title: item.title,
      summary: item.description,
      source: "picker",
      metadata: item.metadata,
    }
  );
}

function miraProjectName(item: HomeUnifiedResourceItem) {
  const path = optionalString(item.metadata?.path) || item.subtitle;
  if (!path) return "Mira";
  const [root] = path.split(".").filter(Boolean);
  return root || "Mira";
}

export function mapChatResourceCatalog(
  response: ChatResourceSearchResponse,
): ChatResourceCatalog {
  const contextRefsById = new Map<string, HomeContextRef>();
  const skills = response.items
    .filter((item) => item.type === "skill")
    .map((item) => {
      const supportsHome = skillSupportsHome(item);
      const disabledReason = supportsHome
        ? item.disabledReason
        : "不支持当前首页对话场景";
      return {
        id: skillSlug(item),
        badge: skillBadge(item),
        description: item.description || item.title,
        source: skillSource(item),
        disabled: !item.selectable || !supportsHome,
        ...(disabledReason ? { disabledReason } : {}),
      };
    });
  const files = response.items
    .filter((item) => item.type === "mira_node" && item.selectable)
    .map((item) => {
      const ref = miraContextRef(item);
      contextRefsById.set(item.id, ref);
      return {
        id: item.id,
        name: item.title,
        projectId: miraProjectName(item),
        projectName: miraProjectName(item),
        sourceType: "项目文件" as const,
        isRecent: true,
        ...(optionalString(item.metadata?.updatedAt)
          ? { operatedAt: optionalString(item.metadata?.updatedAt) }
          : {}),
      };
    });

  return { skills, files, contextRefsById };
}

export async function loadChatResourceCatalog(
  api: ApiClient,
  options: { query?: string; signal?: AbortSignal } = {},
) {
  const params = new URLSearchParams({
    types: "skill,mira_node",
    limit: "30",
  });
  const query = options.query?.trim();
  if (query) params.set("q", query);

  const response = await api.get<ChatResourceSearchResponse>(
    `/api/chat/resources?${params.toString()}`,
    { signal: options.signal },
  );
  return mapChatResourceCatalog(response);
}

export function resolveChatResourceSelection(
  references: readonly ChatResourceReference[],
  catalog: ChatResourceCatalog,
): ChatResourceSelection {
  const selectableSkills = new Set(
    catalog.skills.filter((skill) => !skill.disabled).map((skill) => skill.id),
  );
  const selectedSkillSlugs = new Set<string>();
  const contextRefs = new Map<string, HomeContextRef>();

  for (const reference of references) {
    const sourceId = reference.sourceId || reference.label;
    if (reference.type === "skill" && selectableSkills.has(sourceId)) {
      selectedSkillSlugs.add(sourceId);
      continue;
    }
    if (reference.type !== "doc" || !reference.sourceId) continue;
    const contextRef = catalog.contextRefsById.get(reference.sourceId);
    if (contextRef) contextRefs.set(`${contextRef.type}:${contextRef.id}`, contextRef);
  }

  return {
    selectedSkillSlugs: [...selectedSkillSlugs],
    contextRefs: [...contextRefs.values()],
  };
}

export function mergeChatContextRefs(
  ...groups: ReadonlyArray<readonly HomeContextRef[]>
) {
  const merged = new Map<string, HomeContextRef>();
  for (const group of groups) {
    for (const ref of group) merged.set(`${ref.type}:${ref.id}`, ref);
  }
  return [...merged.values()];
}

export function resolveChatSendScope(
  references: readonly ChatResourceReference[],
  catalog: ChatResourceCatalog,
  attachmentContextRefs: readonly HomeContextRef[] = [],
) {
  const selection = resolveChatResourceSelection(references, catalog);
  const contextRefs = mergeChatContextRefs(
    selection.contextRefs,
    attachmentContextRefs,
  );

  return {
    selectedSkillSlugs:
      selection.selectedSkillSlugs.length > 0
        ? selection.selectedSkillSlugs
        : undefined,
    contextRefs: contextRefs.length > 0 ? contextRefs : undefined,
  };
}
