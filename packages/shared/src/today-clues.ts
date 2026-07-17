export const TODAY_CLUES_SCHEMA_VERSION = 'today-clues/v1';
export const TODAY_CLUES_SYNTHESIS_SCHEMA_VERSION = 'today-clues-synthesis/v1';
export const TODAY_CLUES_TITLE = '猜你想做';

export type TodayClueType =
  | 'next_action'
  | 'research_direction'
  | 'project_progress'
  | 'reading'
  | 'follow_up';

export type TodayClueConfidence = 'high' | 'medium' | 'low';

export type TodayCluesResponseStatus = 'accepted' | 'partial' | 'empty' | 'disabled';

export type TodayClueSynthesisStatus = 'accepted' | 'partial' | 'empty' | 'failed';

export type TodayClueSourceStatusName =
  | 'tracking'
  | 'scheduled_tasks'
  | 'mira'
  | 'working_context'
  | 'memory_policy'
  | 'llm_synthesis';

export type TodayClueSourceStatusValue = 'used' | 'empty' | 'failed' | 'skipped';

export type TodayClueEvidenceSourceType =
  | 'tracking_signal'
  | 'tracking_briefing'
  | 'scheduled_task'
  | 'mira_note'
  | 'working_context';

export type TodayClueActionKind =
  | 'open_tracking'
  | 'open_mira'
  | 'open_scheduled_task'
  | 'open_chat'
  | 'open_experiment';

export type TodayClueFeedbackEvent =
  | 'viewed'
  | 'clicked'
  | 'dismissed'
  | 'not_relevant'
  | 'snoozed';

export type TodayCluesTraceMode = 'snapshot_read' | 'manual_refresh' | 'scheduled_refresh';

export type TodayCluesSnapshotStatus = 'found' | 'missing' | 'saved' | 'disabled';

export interface TodayClueSourceRef {
  type: TodayClueEvidenceSourceType;
  id: string;
  title: string;
  href?: string;
  updatedAt?: string;
}

export interface TodayClueAction {
  kind: TodayClueActionKind;
  label: string;
  href?: string;
  prompt?: string;
}

export interface TodayClue {
  id: string;
  clueKey: string;
  type: TodayClueType;
  title: string;
  reason: string;
  evidence: string[];
  confidence: TodayClueConfidence;
  sourceRefs: TodayClueSourceRef[];
  actions: TodayClueAction[];
  generatedAt: string;
}

export interface TodayClueCandidate {
  candidateId: string;
  clueKey: string;
  type: TodayClueType;
  sourceType: TodayClueEvidenceSourceType;
  sourceId: string;
  sourceTitle: string;
  sourceHref?: string;
  sourceUpdatedAt?: string;
  title: string;
  summary: string;
  evidenceText: string;
  score: number;
  actions: TodayClueAction[];
  metadata?: Record<string, unknown>;
}

export interface TodayClueSourceStatus {
  name: TodayClueSourceStatusName;
  status: TodayClueSourceStatusValue;
  count: number;
  error?: string;
  updatedAt?: string;
}

export interface TodayCluesSynthesisMetadata {
  mode: 'llm';
  status: Exclude<TodayClueSynthesisStatus, 'empty' | 'failed'>;
  schemaVersion: typeof TODAY_CLUES_SYNTHESIS_SCHEMA_VERSION;
  candidateCount: number;
  acceptedCandidateCount: number;
  provider?: string;
  model?: string;
  latencyMs?: number;
  warnings: string[];
}

export interface TodayCluesResponse {
  schemaVersion: typeof TODAY_CLUES_SCHEMA_VERSION;
  status: TodayCluesResponseStatus;
  date: string;
  timezone: string;
  title: string;
  clues: TodayClue[];
  sourceStatus: TodayClueSourceStatus[];
  synthesis?: TodayCluesSynthesisMetadata;
  trace?: TodayCluesTrace;
  generatedAt: string;
  emptyReason?: string;
}

export interface TodayCluesTrace {
  mode: TodayCluesTraceMode;
  snapshotStatus: TodayCluesSnapshotStatus;
  trigger?: 'manual' | 'scheduled';
  generatedAt?: string;
  snapshotSavedAt?: string;
  emptyReason?: string;
  candidateCount?: number;
  acceptedCandidateCount?: number;
  sourceCount: number;
  warnings: string[];
}

export interface TodayClueSynthesisItem {
  clueKey: string;
  type: TodayClueType;
  title: string;
  reason: string;
  evidence: string[];
  confidence: TodayClueConfidence;
  sourceCandidateIds: string[];
  actions: TodayClueAction[];
}

export interface TodayClueSynthesisResult {
  schemaVersion: typeof TODAY_CLUES_SYNTHESIS_SCHEMA_VERSION;
  status: TodayClueSynthesisStatus;
  items: TodayClueSynthesisItem[];
  warnings: string[];
}

const clueTypes: ReadonlySet<string> = new Set([
  'next_action',
  'research_direction',
  'project_progress',
  'reading',
  'follow_up',
]);

const confidenceValues: ReadonlySet<string> = new Set(['high', 'medium', 'low']);

const responseStatusValues: ReadonlySet<string> = new Set([
  'accepted',
  'partial',
  'empty',
  'disabled',
]);

const synthesisStatusValues: ReadonlySet<string> = new Set([
  'accepted',
  'partial',
  'empty',
  'failed',
]);

const sourceStatusNames: ReadonlySet<string> = new Set([
  'tracking',
  'scheduled_tasks',
  'mira',
  'working_context',
  'memory_policy',
  'llm_synthesis',
]);

const sourceStatusValues: ReadonlySet<string> = new Set([
  'used',
  'empty',
  'failed',
  'skipped',
]);

const sourceTypes: ReadonlySet<string> = new Set([
  'tracking_signal',
  'tracking_briefing',
  'scheduled_task',
  'mira_note',
  'working_context',
]);

const actionKinds: ReadonlySet<string> = new Set([
  'open_tracking',
  'open_mira',
  'open_scheduled_task',
  'open_chat',
  'open_experiment',
]);

const traceModes: ReadonlySet<string> = new Set([
  'snapshot_read',
  'manual_refresh',
  'scheduled_refresh',
]);

const snapshotStatuses: ReadonlySet<string> = new Set([
  'found',
  'missing',
  'saved',
  'disabled',
]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function asString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function asStringArray(value: unknown, limit: number): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => asString(item))
    .filter((item): item is string => Boolean(item))
    .slice(0, limit);
}

function asNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function normalizeAction(value: unknown): TodayClueAction | undefined {
  if (!isRecord(value)) return undefined;
  const kind = asString(value.kind);
  const label = asString(value.label);
  if (!kind || !actionKinds.has(kind) || !label) return undefined;

  const action: TodayClueAction = {
    kind: kind as TodayClueActionKind,
    label,
  };
  const href = asString(value.href);
  const prompt = asString(value.prompt);
  if (href) action.href = href;
  if (prompt) action.prompt = prompt;
  return action;
}

function normalizeSourceRef(value: unknown): TodayClueSourceRef | undefined {
  if (!isRecord(value)) return undefined;
  const type = asString(value.type);
  const id = asString(value.id);
  const title = asString(value.title);
  if (!type || !sourceTypes.has(type) || !id || !title) return undefined;

  const ref: TodayClueSourceRef = {
    type: type as TodayClueEvidenceSourceType,
    id,
    title,
  };
  const href = asString(value.href);
  const updatedAt = asString(value.updatedAt);
  if (href) ref.href = href;
  if (updatedAt) ref.updatedAt = updatedAt;
  return ref;
}

function normalizeSourceStatus(value: unknown): TodayClueSourceStatus | undefined {
  if (!isRecord(value)) return undefined;
  const name = asString(value.name);
  const status = asString(value.status);
  if (!name || !sourceStatusNames.has(name) || !status || !sourceStatusValues.has(status)) {
    return undefined;
  }

  const result: TodayClueSourceStatus = {
    name: name as TodayClueSourceStatusName,
    status: status as TodayClueSourceStatusValue,
    count: Math.max(0, Math.floor(asNumber(value.count, 0))),
  };
  const error = asString(value.error);
  const updatedAt = asString(value.updatedAt);
  if (error) result.error = error;
  if (updatedAt) result.updatedAt = updatedAt;
  return result;
}

function normalizeTrace(value: unknown): TodayCluesTrace | undefined {
  if (!isRecord(value)) return undefined;
  const mode = asString(value.mode);
  const snapshotStatus = asString(value.snapshotStatus);
  if (!mode || !traceModes.has(mode) || !snapshotStatus || !snapshotStatuses.has(snapshotStatus)) {
    return undefined;
  }

  const trace: TodayCluesTrace = {
    mode: mode as TodayCluesTraceMode,
    snapshotStatus: snapshotStatus as TodayCluesSnapshotStatus,
    sourceCount: Math.max(0, Math.floor(asNumber(value.sourceCount, 0))),
    warnings: asStringArray(value.warnings, 12),
  };
  const trigger = asString(value.trigger);
  if (trigger === 'manual' || trigger === 'scheduled') trace.trigger = trigger;
  const generatedAt = asString(value.generatedAt);
  const snapshotSavedAt = asString(value.snapshotSavedAt);
  const emptyReason = asString(value.emptyReason);
  if (generatedAt) trace.generatedAt = generatedAt;
  if (snapshotSavedAt) trace.snapshotSavedAt = snapshotSavedAt;
  if (emptyReason) trace.emptyReason = emptyReason;
  if (typeof value.candidateCount === 'number') trace.candidateCount = Math.max(0, Math.floor(value.candidateCount));
  if (typeof value.acceptedCandidateCount === 'number') {
    trace.acceptedCandidateCount = Math.max(0, Math.floor(value.acceptedCandidateCount));
  }
  return trace;
}

function normalizeClue(value: unknown): TodayClue | undefined {
  if (!isRecord(value)) return undefined;
  const id = asString(value.id);
  const clueKey = asString(value.clueKey);
  const type = asString(value.type);
  const title = asString(value.title);
  const reason = asString(value.reason);
  const confidence = asString(value.confidence);
  const generatedAt = asString(value.generatedAt);
  const sourceRefs = Array.isArray(value.sourceRefs)
    ? value.sourceRefs
        .map(normalizeSourceRef)
        .filter((item): item is TodayClueSourceRef => Boolean(item))
        .slice(0, 4)
    : [];

  if (
    !id ||
    !clueKey ||
    !type ||
    !clueTypes.has(type) ||
    !title ||
    !reason ||
    !confidence ||
    !confidenceValues.has(confidence) ||
    !generatedAt ||
    sourceRefs.length === 0
  ) {
    return undefined;
  }

  return {
    id,
    clueKey,
    type: type as TodayClueType,
    title,
    reason,
    evidence: asStringArray(value.evidence, 4),
    confidence: confidence as TodayClueConfidence,
    sourceRefs,
    actions: Array.isArray(value.actions)
      ? value.actions
          .map(normalizeAction)
          .filter((item): item is TodayClueAction => Boolean(item))
          .slice(0, 3)
      : [],
    generatedAt,
  };
}

export function normalizeTodayClueSynthesisResult(input: unknown): TodayClueSynthesisResult | undefined {
  if (!isRecord(input)) return undefined;
  const status = asString(input.status);
  if (!status || !synthesisStatusValues.has(status)) return undefined;

  const items = Array.isArray(input.items)
    ? input.items
        .map((item): TodayClueSynthesisItem | undefined => {
          if (!isRecord(item)) return undefined;
          const clueKey = asString(item.clueKey);
          const type = asString(item.type);
          const title = asString(item.title);
          const reason = asString(item.reason);
          const confidence = asString(item.confidence);
          const sourceCandidateIds = asStringArray(item.sourceCandidateIds, 4);
          if (
            !clueKey ||
            !type ||
            !clueTypes.has(type) ||
            !title ||
            !reason ||
            !confidence ||
            !confidenceValues.has(confidence) ||
            sourceCandidateIds.length === 0
          ) {
            return undefined;
          }
          return {
            clueKey,
            type: type as TodayClueType,
            title,
            reason,
            evidence: asStringArray(item.evidence, 4),
            confidence: confidence as TodayClueConfidence,
            sourceCandidateIds,
            actions: Array.isArray(item.actions)
              ? item.actions
                  .map(normalizeAction)
                  .filter((action): action is TodayClueAction => Boolean(action))
                  .slice(0, 3)
              : [],
          };
        })
        .filter((item): item is TodayClueSynthesisItem => Boolean(item))
        .slice(0, 3)
    : [];

  return {
    schemaVersion: TODAY_CLUES_SYNTHESIS_SCHEMA_VERSION,
    status: status as TodayClueSynthesisStatus,
    items,
    warnings: asStringArray(input.warnings, 10),
  };
}

export function normalizeTodayCluesResponse(input: unknown): TodayCluesResponse | undefined {
  if (!isRecord(input)) return undefined;
  const status = asString(input.status);
  const date = asString(input.date);
  const timezone = asString(input.timezone);
  const title = asString(input.title);
  const generatedAt = asString(input.generatedAt);
  if (!status || !responseStatusValues.has(status) || !date || !timezone || !title || !generatedAt) {
    return undefined;
  }
  const normalizedTitle = title === '今日线索' ? TODAY_CLUES_TITLE : title;

  const clues = Array.isArray(input.clues)
    ? input.clues
        .map(normalizeClue)
        .filter((item): item is TodayClue => Boolean(item))
        .slice(0, 3)
    : [];
  const sourceStatus = Array.isArray(input.sourceStatus)
    ? input.sourceStatus
        .map(normalizeSourceStatus)
        .filter((item): item is TodayClueSourceStatus => Boolean(item))
    : [];

  const response: TodayCluesResponse = {
    schemaVersion: TODAY_CLUES_SCHEMA_VERSION,
    status: status as TodayCluesResponseStatus,
    date,
    timezone,
    title: normalizedTitle,
    clues,
    sourceStatus,
    generatedAt,
  };
  const trace = normalizeTrace(input.trace);
  if (trace) response.trace = trace;
  const emptyReason = asString(input.emptyReason);
  if (emptyReason) response.emptyReason = emptyReason;
  return response;
}
