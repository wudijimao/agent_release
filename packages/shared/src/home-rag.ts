import { HOME_RAG_TIME_FIELDS, type HomeRagTimeField } from './experiment-time.js';

export const HOME_RAG_DOCUMENT_KINDS = [
  'experiment_note',
  'protocol',
  'literature_note',
  'plasmid_record',
  'cell_line_record',
  'antibody_record',
  'troubleshooting',
  'general_mira_doc',
] as const;

export const HOME_RAG_SORT_MODES = ['relevance', 'recent', 'hybrid'] as const;
export const HOME_RAG_QUERY_MODES = ['semantic', 'metadata', 'hybrid'] as const;
export const HOME_RAG_SCOPE_TYPES = ['node', 'subtree'] as const;

export const HOME_RAG_TIME_PRESETS = [
  'today',
  'yesterday',
  'this_week',
  'this_month',
  'recent_7d',
  'recent_30d',
  'recent_90d',
] as const;

export type HomeRagDocumentKind = (typeof HOME_RAG_DOCUMENT_KINDS)[number];
export type HomeRagSortMode = (typeof HOME_RAG_SORT_MODES)[number];
export type HomeRagQueryMode = (typeof HOME_RAG_QUERY_MODES)[number];
export type HomeRagScopeType = (typeof HOME_RAG_SCOPE_TYPES)[number];
export type HomeRagTimePreset = (typeof HOME_RAG_TIME_PRESETS)[number];

export type HomeRagOwnerFilter =
  | { type: 'me' }
  | { type: 'user_id'; userId: string }
  | { type: 'name'; name: string };

export interface HomeRagTimeFilter {
  field?: HomeRagTimeField;
  after?: string;
  before?: string;
  preset?: HomeRagTimePreset;
  hard?: boolean;
}

export interface HomeRagSearchFilters {
  owner?: HomeRagOwnerFilter;
  time?: HomeRagTimeFilter;
  documentKind?: HomeRagDocumentKind | HomeRagDocumentKind[];
  tagsAny?: string[];
  tagsAll?: string[];
  titleContains?: string;
  pathContains?: string;
}

export interface HomeRagFallbackPolicy {
  allowRelaxTime?: boolean;
  allowRelaxDocumentKind?: boolean;
  allowRelaxOwner?: boolean;
}

export interface HomeRagScope {
  type: HomeRagScopeType;
  rootNodeId: string;
  includeRoot?: boolean;
}

export interface HomeRagSearchInput {
  query: string;
  top_k?: number;
  scope?: HomeRagScope;
  filters?: HomeRagSearchFilters;
  sort?: HomeRagSortMode;
  queryMode?: HomeRagQueryMode;
  fallbackPolicy?: HomeRagFallbackPolicy;
}

export interface NormalizedHomeRagSearchInput {
  query: string;
  topK: number;
  scope?: HomeRagScope;
  filters?: HomeRagSearchFilters;
  sort: HomeRagSortMode;
  queryMode: HomeRagQueryMode;
  fallbackPolicy: Required<HomeRagFallbackPolicy>;
  warnings: string[];
}

export interface HomeRagFilterSummary {
  label?: string;
  appliedFilters: string[];
  relaxedFilters: string[];
  warnings: string[];
  sort: HomeRagSortMode;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function cleanString(value: unknown, maxLength = 120) {
  if (typeof value !== 'string') return undefined;
  const text = value.replace(/\s+/g, ' ').trim();
  return text ? text.slice(0, maxLength) : undefined;
}

function isOneOf<T extends readonly string[]>(value: unknown, allowed: T): value is T[number] {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value);
}

function normalizeStringArray(value: unknown, maxItems = 10) {
  if (!Array.isArray(value)) return undefined;
  const items = Array.from(
    new Set(
      value
        .map((item) => cleanString(item, 60))
        .filter((item): item is string => Boolean(item)),
    ),
  ).slice(0, maxItems);
  return items.length > 0 ? items : undefined;
}

function normalizeOwnerFilter(value: unknown, warnings: string[]): HomeRagOwnerFilter | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  if (record.type === 'me') return { type: 'me' };
  if (record.type === 'user_id') {
    const userId = cleanString(record.userId, 80);
    if (!userId) {
      warnings.push('rag_filter_owner_user_id_missing');
      return undefined;
    }
    return { type: 'user_id', userId };
  }
  if (record.type === 'name') {
    const name = cleanString(record.name, 80);
    if (!name) {
      warnings.push('rag_filter_owner_name_missing');
      return undefined;
    }
    return { type: 'name', name };
  }
  warnings.push('rag_filter_owner_invalid');
  return undefined;
}

function normalizeTimeFilter(value: unknown, warnings: string[]): HomeRagTimeFilter | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const field = isOneOf(record.field, HOME_RAG_TIME_FIELDS)
    ? record.field
    : undefined;
  const preset = isOneOf(record.preset, HOME_RAG_TIME_PRESETS) ? record.preset : undefined;
  const after = cleanString(record.after, 40);
  const before = cleanString(record.before, 40);
  if (record.field !== undefined && !field) warnings.push('rag_filter_time_field_invalid');
  if (record.preset !== undefined && !preset) warnings.push('rag_filter_time_preset_invalid');
  if (!field && !preset && !after && !before && typeof record.hard !== 'boolean') return undefined;
  return {
    ...(field ? { field } : {}),
    ...(after ? { after } : {}),
    ...(before ? { before } : {}),
    ...(preset ? { preset } : {}),
    ...(typeof record.hard === 'boolean' ? { hard: record.hard } : {}),
  };
}

function normalizeDocumentKinds(value: unknown, warnings: string[]) {
  const values = Array.isArray(value) ? value : value ? [value] : [];
  const kinds = Array.from(
    new Set(values.filter((item): item is HomeRagDocumentKind => isOneOf(item, HOME_RAG_DOCUMENT_KINDS))),
  ).slice(0, 10);
  if (values.length > 0 && kinds.length === 0) warnings.push('rag_filter_document_kind_invalid');
  return kinds.length > 0 ? kinds : undefined;
}

function normalizeRagScope(value: unknown, warnings: string[]): HomeRagScope | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const type = isOneOf(record.type, HOME_RAG_SCOPE_TYPES) ? record.type : undefined;
  const rootNodeId = cleanString(record.rootNodeId, 80);
  if (!type) warnings.push('rag_scope_type_invalid');
  if (!rootNodeId) warnings.push('rag_scope_root_missing');
  if (!type || !rootNodeId) return undefined;
  return {
    type,
    rootNodeId,
    ...(typeof record.includeRoot === 'boolean' ? { includeRoot: record.includeRoot } : {}),
  };
}

export function normalizeHomeRagSearchInput(value: unknown): NormalizedHomeRagSearchInput {
  const record = asRecord(value) || {};
  const warnings: string[] = [];
  const query = cleanString(record.query, 500) || '';
  const topK =
    typeof record.top_k === 'number' && Number.isFinite(record.top_k)
      ? Math.min(20, Math.max(1, Math.trunc(record.top_k)))
      : 5;
  const sort = isOneOf(record.sort, HOME_RAG_SORT_MODES) ? record.sort : 'hybrid';
  const rawQueryMode = isOneOf(record.queryMode, HOME_RAG_QUERY_MODES)
    ? record.queryMode
    : undefined;
  const rawFallback = asRecord(record.fallbackPolicy) || {};
  const fallbackPolicy = {
    allowRelaxTime:
      typeof rawFallback.allowRelaxTime === 'boolean' ? rawFallback.allowRelaxTime : true,
    allowRelaxDocumentKind:
      typeof rawFallback.allowRelaxDocumentKind === 'boolean'
        ? rawFallback.allowRelaxDocumentKind
        : true,
    allowRelaxOwner:
      typeof rawFallback.allowRelaxOwner === 'boolean' ? rawFallback.allowRelaxOwner : false,
  };
  if (record.sort !== undefined && !isOneOf(record.sort, HOME_RAG_SORT_MODES)) {
    warnings.push('rag_sort_invalid');
  }
  if (record.queryMode !== undefined && !rawQueryMode) {
    warnings.push('rag_query_mode_invalid');
  }

  const rawFilters = asRecord(record.filters);
  let filters: HomeRagSearchFilters | undefined;
  if (rawFilters) {
    const owner = normalizeOwnerFilter(rawFilters.owner, warnings);
    const time = normalizeTimeFilter(rawFilters.time, warnings);
    const documentKinds = normalizeDocumentKinds(rawFilters.documentKind, warnings);
    const tagsAny = normalizeStringArray(rawFilters.tagsAny);
    const tagsAll = normalizeStringArray(rawFilters.tagsAll);
    const titleContains = cleanString(rawFilters.titleContains, 120);
    const pathContains = cleanString(rawFilters.pathContains, 120);
    filters = {
      ...(owner ? { owner } : {}),
      ...(time ? { time } : {}),
      ...(documentKinds
        ? { documentKind: documentKinds.length === 1 ? documentKinds[0] : documentKinds }
        : {}),
      ...(tagsAny ? { tagsAny } : {}),
      ...(tagsAll ? { tagsAll } : {}),
      ...(titleContains ? { titleContains } : {}),
      ...(pathContains ? { pathContains } : {}),
    };
    if (Object.keys(filters).length === 0) filters = undefined;
  }

  const queryMode: HomeRagQueryMode = rawQueryMode || 'hybrid';
  const scope = normalizeRagScope(record.scope, warnings);
  if (!query && !(queryMode === 'metadata' && (filters || scope))) warnings.push('rag_query_missing');

  return {
    query,
    topK,
    ...(scope ? { scope } : {}),
    ...(filters ? { filters } : {}),
    sort,
    queryMode,
    fallbackPolicy,
    warnings,
  };
}

export function normalizeHomeRagFilterSummary(value: unknown): HomeRagFilterSummary | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const appliedFilters = normalizeStringArray(record.appliedFilters, 10) || [];
  const relaxedFilters = normalizeStringArray(record.relaxedFilters, 10) || [];
  const warnings = normalizeStringArray(record.warnings, 10) || [];
  const sort = isOneOf(record.sort, HOME_RAG_SORT_MODES) ? record.sort : 'hybrid';
  if (appliedFilters.length === 0 && relaxedFilters.length === 0 && warnings.length === 0 && !record.label) {
    return undefined;
  }
  return {
    label: cleanString(record.label, 160),
    appliedFilters,
    relaxedFilters,
    warnings,
    sort,
  };
}
