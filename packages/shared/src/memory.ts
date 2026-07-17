export const MEMORY_ENTRY_STATUSES = ['pending', 'confirmed', 'rejected', 'archived'] as const;
export const MEMORY_REVIEW_POLICIES = [
  'never',
  'after_30_days',
  'after_90_days',
  'project_end',
  'low_confidence',
] as const;
export const MEMORY_REVIEW_STATUSES = ['current', 'due', 'snoozed'] as const;

export const MEMORY_ENTRY_KINDS = [
  'fact',
  'preference_candidate',
  'decision_principle',
  'workflow_pattern',
] as const;

export const MEMORY_SCOPES = ['user', 'lab', 'project', 'function'] as const;

export const MEMORY_EVIDENCE_SOURCE_TYPES = [
  'message',
  'run_event',
  'mira_node',
  'analysis_artifact',
  'tracking_signal',
  'manual',
] as const;

export const MEMORY_CREATED_BY_VALUES = ['user', 'system', 'meta_agent'] as const;
export const MEMORY_CANDIDATE_ORIGINS = MEMORY_CREATED_BY_VALUES;
export const MEMORY_REPLAY_DECISIONS = ['used', 'excluded'] as const;
export const MEMORY_REPLAY_REASON_CODES = [
  'confirmed',
  'pending',
  'rejected',
  'archived',
  'superseded',
  'conflict_loser',
  'same_as',
  'ranked_out',
  'scope_mismatch',
  'user_mismatch',
  'project_context_missing',
  'manual_forget',
  'policy_filtered',
  'not_selected',
] as const;

export const MEMORY_REPLAY_EXPLANATION_ACTIONS = [
  'open_memory',
  'review_candidate',
  'resolve_conflict',
  'adjust_scope',
  'restore_memory',
  'none',
] as const;

export const MEMORY_PUBLICATION_TYPES = ['snapshot', 'section', 'linked_block'] as const;

export const MEMORY_RELATION_TYPES = [
  'supersedes',
  'conflicts_with',
  'derived_from',
  'same_as',
] as const;

export const MEMORY_CANDIDATE_SOURCE_TYPES = [
  'user_explicit',
  'agent_candidate',
  'workflow_closeout',
  'system',
  'manual',
] as const;

export const MEMORY_INBOX_RISK_LEVELS = [
  'none',
  'duplicate',
  'replace',
  'conflict',
  'unknown',
] as const;

export const MEMORY_BATCH_REVIEW_ACTIONS = [
  'confirm_no_action',
  'reject',
  'archive',
] as const;

export type MemoryEntryStatus = (typeof MEMORY_ENTRY_STATUSES)[number];
export type MemoryReviewPolicy = (typeof MEMORY_REVIEW_POLICIES)[number];
export type MemoryReviewStatus = (typeof MEMORY_REVIEW_STATUSES)[number];
export type MemoryEntryKind = (typeof MEMORY_ENTRY_KINDS)[number];
export type MemoryScope = (typeof MEMORY_SCOPES)[number];
export type MemoryEvidenceSourceType = (typeof MEMORY_EVIDENCE_SOURCE_TYPES)[number];
export type MemoryCreatedBy = (typeof MEMORY_CREATED_BY_VALUES)[number];
export type MemoryCandidateOrigin = (typeof MEMORY_CANDIDATE_ORIGINS)[number];
export type MemoryReplayDecision = (typeof MEMORY_REPLAY_DECISIONS)[number];
export type MemoryReplayReasonCode = (typeof MEMORY_REPLAY_REASON_CODES)[number];
export type MemoryReplayExplanationAction = (typeof MEMORY_REPLAY_EXPLANATION_ACTIONS)[number];
export type MemoryReplayDisplayTone = 'success' | 'warning' | 'danger' | 'neutral';
export type MemoryPublicationType = (typeof MEMORY_PUBLICATION_TYPES)[number];
export type MemoryRelationType = (typeof MEMORY_RELATION_TYPES)[number];
export type MemoryCandidateSourceType = (typeof MEMORY_CANDIDATE_SOURCE_TYPES)[number];
export type MemoryInboxRiskLevel = (typeof MEMORY_INBOX_RISK_LEVELS)[number];
export type MemoryBatchReviewAction = (typeof MEMORY_BATCH_REVIEW_ACTIONS)[number];

export interface MemoryEvidenceRef {
  sourceType: MemoryEvidenceSourceType;
  sourceId?: string;
  sourceKey?: string;
  summary: string;
  sourceTitle?: string;
  sourceUrl?: string;
  createdAt?: string;
}

export interface MemoryEntry {
  id: string;
  labId: string;
  userId: string;
  scope: MemoryScope;
  projectRefId?: string | null;
  functionId?: string | null;
  kind: MemoryEntryKind;
  statement: string;
  evidence: MemoryEvidenceRef[];
  confidence: number;
  status: MemoryEntryStatus;
  createdBy: MemoryCreatedBy;
  reviewPolicy?: MemoryReviewPolicy;
  reviewStatus?: MemoryReviewStatus;
  reviewDueAt?: string | null;
  lastReviewedAt?: string | null;
  reviewSnoozedUntil?: string | null;
  reviewReason?: string | null;
  confirmedAt?: string | null;
  rejectedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface MemoryPublication {
  id: string;
  labId: string;
  memoryEntryId: string;
  publishedNodeId: string;
  publishedVersionId?: string | null;
  publishedScene: 'mira' | 'wiki2';
  publicationType: MemoryPublicationType;
  snapshotHash?: string | null;
  publishedBy: string;
  publishedAt: string;
  updatedAt: string;
}

export interface MemoryRelation {
  id: string;
  labId: string;
  fromMemoryEntryId: string;
  toMemoryEntryId: string;
  relationType: MemoryRelationType;
  reason?: string | null;
  createdBy: string;
  createdAt: string;
}

export interface MemorySnapshotEntry {
  id: string;
  kind: MemoryEntryKind;
  scope: MemoryScope;
  statement: string;
  confidence: number;
  evidenceRefCount: number;
  decision?: MemoryReplayDecision;
  reasonCode?: MemoryReplayReasonCode;
  reasonText?: string;
  rankScore?: number;
  relationIds?: string[];
  createdBy?: MemoryCandidateOrigin;
  projectRefId?: string | null;
  functionId?: string | null;
  publicationIds?: string[];
  confirmedAt?: string | null;
  updatedAt?: string;
}

export interface MemoryReplayEntry {
  memoryEntryId: string;
  kind: MemoryEntryKind;
  scope: MemoryScope;
  status: 'confirmed';
  decision: 'used';
  reasonCode: MemoryReplayReasonCode;
  reasonText: string;
  rankScore: number;
  evidenceRefCount: number;
  publicationIds?: string[];
  relationIds?: string[];
  createdBy?: MemoryCandidateOrigin;
  resolvedFromPreference?: boolean;
  projectRefId?: string | null;
  functionId?: string | null;
  confirmedAt?: string | null;
}

export interface MemoryReplayExcludedEntry {
  memoryEntryId?: string;
  kind?: MemoryEntryKind;
  scope?: MemoryScope;
  status?: MemoryEntryStatus;
  decision: 'excluded';
  reasonCode: MemoryReplayReasonCode;
  reasonText: string;
  rankScore?: number;
  evidenceRefCount?: number;
  publicationIds?: string[];
  relationIds?: string[];
  createdBy?: MemoryCandidateOrigin;
  projectRefId?: string | null;
  functionId?: string | null;
}

export interface MemoryReplayMetadata {
  resolverVersion: string;
  policyVersion?: string;
  entries: MemoryReplayEntry[];
  excluded?: MemoryReplayExcludedEntry[];
}

export interface MemoryReplaySimulationInput {
  message: string;
  scene: 'home' | 'wiki' | 'experiment' | 'memory';
  projectRefId?: string | null;
  functionId?: string | null;
  includeLabScope: boolean;
}

export interface MemoryReplayExplanationItem {
  memoryEntryId?: string;
  decision: MemoryReplayDecision;
  label: string;
  reasonCode: MemoryReplayReasonCode;
  reasonText: string;
  userReason?: string;
  impactSummary?: string;
  scopeSummary?: string;
  actionSummary?: string;
  tone?: MemoryReplayDisplayTone;
  scope?: MemoryScope;
  kind?: MemoryEntryKind;
  status?: MemoryEntryStatus;
  rankScore?: number;
  evidenceRefCount?: number;
  relationIds?: string[];
  statement?: string;
  recommendedActions: MemoryReplayExplanationAction[];
}

export interface MemoryReplayEvidenceExplanation {
  id: string;
  source: 'conversation_evidence' | 'session_summary';
  label: string;
  summary: string;
  relevanceLabel?: string;
  usedInPrompt: boolean;
  clarificationRequired: boolean;
}

export interface MemoryReplayClarificationExplanation {
  required: boolean;
  summary: string;
  candidateCount: number;
  candidates: Array<{
    id: string;
    title: string;
    summary: string;
    sourceType: 'conversation' | 'session_summary' | 'confirmed_memory';
    relevanceLabel?: string;
  }>;
}

export interface MemoryReplayExplanation {
  version: 'memory/replay-explanation/v1';
  resolverVersion: string;
  policyVersion?: string;
  simulationInput?: MemoryReplaySimulationInput;
  userSummary?: string;
  used: MemoryReplayExplanationItem[];
  excluded: MemoryReplayExplanationItem[];
  evidence: MemoryReplayEvidenceExplanation[];
  clarification?: MemoryReplayClarificationExplanation;
  sourceTrace: string[];
  totals: {
    used: number;
    excluded: number;
    evidence: number;
    clarificationCandidates: number;
    actionable: number;
  };
}

export interface MemoryImpactPreviewEffect {
  label: string;
  summary: string;
  tone: 'neutral' | 'success' | 'warning' | 'danger';
}

export interface MemoryImpactPreviewExample {
  question: string;
  effect: string;
}

export interface MemoryImpactPreview {
  version: 'memory/impact-preview/v1';
  entryId: string;
  scene: 'home' | 'wiki' | 'experiment' | 'memory';
  resolverVersion: string;
  policyVersion?: string;
  scope: MemoryScope;
  kind: MemoryEntryKind;
  status: MemoryEntryStatus;
  confidence: number;
  riskLevel: MemoryInboxRiskLevel;
  summary: string;
  scopeSummary: string;
  impactSummary: string;
  effects: MemoryImpactPreviewEffect[];
  examples: MemoryImpactPreviewExample[];
  preview: MemoryReplayExplanation;
  warnings: string[];
  updatedAt?: string;
}

export const MEMORY_CONFLICT_WIZARD_ACTIONS = [
  'keep_current',
  'keep_candidate',
  'merge',
  'replace',
  'keep_both_scoped',
] as const;

export type MemoryConflictWizardAction = (typeof MEMORY_CONFLICT_WIZARD_ACTIONS)[number];
export type MemoryConflictWizardDecision =
  | 'no_action'
  | 'suggest_merge'
  | 'possible_duplicate'
  | 'suggest_replace'
  | 'possible_conflict';

export interface MemoryConflictWizardCandidate {
  entryId: string;
  label: string;
  reason: string;
  action: MemoryConflictWizardAction;
  relationType?: MemoryRelationType;
  scope?: MemoryScope;
  kind?: MemoryEntryKind;
  status?: MemoryEntryStatus;
}

export interface MemoryConflictWizardPayload {
  decision: MemoryConflictWizardDecision;
  summary: string;
  source: 'runtime' | 'rule';
  candidates: MemoryConflictWizardCandidate[];
  recommendedAction?: MemoryConflictWizardAction;
  notes?: string[];
}

export interface MemorySnapshot {
  entries: MemorySnapshotEntry[];
  trace: string[];
  replay: MemoryReplayMetadata;
}

export interface MemoryCandidateSourceSummary {
  source: MemoryCandidateSourceType;
  label: string;
  evidenceSourceType?: MemoryEvidenceSourceType;
  sourceId?: string;
  title?: string;
  summary?: string;
  createdAt?: string;
  href?: string;
}

export interface MemoryInboxRiskSummary {
  level: MemoryInboxRiskLevel;
  label: string;
  decision?: string;
  summary?: string;
  confidence?: number;
}

export interface MemoryInboxItem {
  entry: MemoryEntry;
  source: MemoryCandidateSourceSummary;
  risk: MemoryInboxRiskSummary;
  benefitSummary?: string;
  reviewReason?: string;
  actionHint?: string;
  selected?: boolean;
}

export interface MemoryInboxGroup {
  id: string;
  title: string;
  source: MemoryCandidateSourceType;
  total: number;
  riskCount: number;
  latestUpdatedAt?: string;
  items: MemoryInboxItem[];
}

export interface MemoryInbox {
  version: string;
  groups: MemoryInboxGroup[];
  totals: {
    pending: number;
    risk: number;
    due: number;
  };
}

export interface MemoryBatchReviewItemResult {
  entryId: string;
  status: 'completed' | 'blocked' | 'failed';
  action: MemoryBatchReviewAction;
  reason?: string;
  entry?: MemoryEntry;
}

export interface MemoryBatchReviewResult {
  action: MemoryBatchReviewAction;
  total: number;
  completed: number;
  blocked: number;
  failed: number;
  items: MemoryBatchReviewItemResult[];
}

function isOneOf<T extends readonly string[]>(value: unknown, allowed: T): value is T[number] {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value);
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function cleanString(value: unknown, maxLength = 500) {
  if (typeof value !== 'string') return undefined;
  const text = value.replace(/\s+/g, ' ').trim();
  return text ? text.slice(0, maxLength) : undefined;
}

function cleanNumber(value: unknown, min = 0, max = 100, fallback = 0) {
  return typeof value === 'number' && Number.isFinite(value)
    ? Math.max(min, Math.min(max, Math.trunc(value)))
    : fallback;
}

function normalizeReasonCode(value: unknown, fallback: MemoryReplayReasonCode) {
  return isOneOf(value, MEMORY_REPLAY_REASON_CODES) ? value : fallback;
}

function normalizeReplayExplanationActions(value: unknown): MemoryReplayExplanationAction[] {
  const actions = asArray(value)
    .filter((item): item is MemoryReplayExplanationAction => isOneOf(item, MEMORY_REPLAY_EXPLANATION_ACTIONS))
    .slice(0, 8);
  return actions.length > 0 ? actions : ['none'];
}

function normalizeEvidence(value: unknown): MemoryEvidenceRef[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      const record = asRecord(item);
      if (!record || !isOneOf(record.sourceType, MEMORY_EVIDENCE_SOURCE_TYPES)) return undefined;
      const summary = cleanString(record.summary, 500);
      if (!summary) return undefined;
        return {
          sourceType: record.sourceType,
          ...(cleanString(record.sourceId, 120) ? { sourceId: cleanString(record.sourceId, 120) } : {}),
          ...(cleanString(record.sourceKey, 160) ? { sourceKey: cleanString(record.sourceKey, 160) } : {}),
          summary,
          ...(cleanString(record.sourceTitle, 200) ? { sourceTitle: cleanString(record.sourceTitle, 200) } : {}),
          ...(cleanString(record.sourceUrl, 500) ? { sourceUrl: cleanString(record.sourceUrl, 500) } : {}),
        ...(cleanString(record.createdAt, 80) ? { createdAt: cleanString(record.createdAt, 80) } : {}),
      } satisfies MemoryEvidenceRef;
    })
    .filter((item): item is MemoryEvidenceRef => Boolean(item));
}

function normalizeMemoryCandidateSourceSummary(value: unknown): MemoryCandidateSourceSummary {
  const record = asRecord(value) || {};
  const source = isOneOf(record.source, MEMORY_CANDIDATE_SOURCE_TYPES) ? record.source : 'manual';
  const evidenceSourceType = isOneOf(record.evidenceSourceType, MEMORY_EVIDENCE_SOURCE_TYPES)
    ? record.evidenceSourceType
    : undefined;
  return {
    source,
    label: cleanString(record.label, 120) || source,
    ...(evidenceSourceType ? { evidenceSourceType } : {}),
    ...(cleanString(record.sourceId, 120) ? { sourceId: cleanString(record.sourceId, 120) } : {}),
    ...(cleanString(record.title, 200) ? { title: cleanString(record.title, 200) } : {}),
    ...(cleanString(record.summary, 500) ? { summary: cleanString(record.summary, 500) } : {}),
    ...(cleanString(record.createdAt, 80) ? { createdAt: cleanString(record.createdAt, 80) } : {}),
    ...(cleanString(record.href, 500) ? { href: cleanString(record.href, 500) } : {}),
  };
}

function normalizeMemoryInboxRiskSummary(value: unknown): MemoryInboxRiskSummary {
  const record = asRecord(value) || {};
  const level = isOneOf(record.level, MEMORY_INBOX_RISK_LEVELS) ? record.level : 'unknown';
  const fallbackLabel =
    level === 'none'
      ? '无风险'
      : level === 'duplicate'
        ? '可能重复'
        : level === 'replace'
          ? '建议替代'
          : level === 'conflict'
            ? '可能冲突'
            : '风险未知';
  return {
    level,
    label: cleanString(record.label, 120) || fallbackLabel,
    ...(cleanString(record.decision, 120) ? { decision: cleanString(record.decision, 120) } : {}),
    ...(cleanString(record.summary, 500) ? { summary: cleanString(record.summary, 500) } : {}),
    ...(typeof record.confidence === 'number' && Number.isFinite(record.confidence)
      ? { confidence: cleanNumber(record.confidence, 0, 100) }
      : {}),
  };
}

function normalizeMemoryReplayDisplayTone(value: unknown): MemoryReplayDisplayTone | undefined {
  return typeof value === 'string' && ['success', 'warning', 'danger', 'neutral'].includes(value)
    ? (value as MemoryReplayDisplayTone)
    : undefined;
}

export function normalizeMemoryEntry(value: unknown): MemoryEntry | null {
  const record = asRecord(value);
  if (!record) return null;
  const id = cleanString(record.id, 120);
  const labId = cleanString(record.labId, 120);
  const userId = cleanString(record.userId, 120);
  const statement = cleanString(record.statement, 1000);
  const createdAt = cleanString(record.createdAt, 80);
  const updatedAt = cleanString(record.updatedAt, 80);
  if (!id || !labId || !userId || !statement || !createdAt || !updatedAt) return null;
  const scope = isOneOf(record.scope, MEMORY_SCOPES) ? record.scope : 'user';
  const kind = isOneOf(record.kind, MEMORY_ENTRY_KINDS) ? record.kind : 'fact';
  const status = isOneOf(record.status, MEMORY_ENTRY_STATUSES) ? record.status : 'pending';
  const createdBy = isOneOf(record.createdBy, MEMORY_CREATED_BY_VALUES) ? record.createdBy : 'system';
  const reviewPolicy = isOneOf(record.reviewPolicy, MEMORY_REVIEW_POLICIES) ? record.reviewPolicy : undefined;
  const reviewStatus = isOneOf(record.reviewStatus, MEMORY_REVIEW_STATUSES) ? record.reviewStatus : undefined;
  const confidence =
    typeof record.confidence === 'number' && Number.isFinite(record.confidence)
      ? Math.max(0, Math.min(100, Math.trunc(record.confidence)))
      : 0;
  return {
    id,
    labId,
    userId,
    scope,
    ...(cleanString(record.projectRefId, 120) ? { projectRefId: cleanString(record.projectRefId, 120) } : {}),
    ...(cleanString(record.functionId, 120) ? { functionId: cleanString(record.functionId, 120) } : {}),
    kind,
    statement,
    evidence: normalizeEvidence(record.evidence),
    confidence,
    status,
    createdBy,
    ...(reviewPolicy ? { reviewPolicy } : {}),
    ...(reviewStatus ? { reviewStatus } : {}),
    ...(cleanString(record.reviewDueAt, 80) ? { reviewDueAt: cleanString(record.reviewDueAt, 80) } : {}),
    ...(cleanString(record.lastReviewedAt, 80) ? { lastReviewedAt: cleanString(record.lastReviewedAt, 80) } : {}),
    ...(cleanString(record.reviewSnoozedUntil, 80)
      ? { reviewSnoozedUntil: cleanString(record.reviewSnoozedUntil, 80) }
      : {}),
    ...(cleanString(record.reviewReason, 500) ? { reviewReason: cleanString(record.reviewReason, 500) } : {}),
    ...(cleanString(record.confirmedAt, 80) ? { confirmedAt: cleanString(record.confirmedAt, 80) } : {}),
    ...(cleanString(record.rejectedAt, 80) ? { rejectedAt: cleanString(record.rejectedAt, 80) } : {}),
    createdAt,
    updatedAt,
  };
}

export function normalizeMemoryInboxItem(value: unknown): MemoryInboxItem | null {
  const record = asRecord(value);
  if (!record) return null;
  const entry = normalizeMemoryEntry(record.entry);
  if (!entry) return null;
  return {
    entry,
    source: normalizeMemoryCandidateSourceSummary(record.source),
    risk: normalizeMemoryInboxRiskSummary(record.risk),
    ...(cleanString(record.benefitSummary, 500) ? { benefitSummary: cleanString(record.benefitSummary, 500) } : {}),
    ...(cleanString(record.reviewReason, 500) ? { reviewReason: cleanString(record.reviewReason, 500) } : {}),
    ...(cleanString(record.actionHint, 160) ? { actionHint: cleanString(record.actionHint, 160) } : {}),
    ...(record.selected === true ? { selected: true } : {}),
  };
}

export function normalizeMemoryInbox(value: unknown): MemoryInbox {
  const record = asRecord(value) || {};
  const groups = asArray(record.groups)
    .map((item): MemoryInboxGroup | null => {
      const groupRecord = asRecord(item);
      if (!groupRecord) return null;
      const source = isOneOf(groupRecord.source, MEMORY_CANDIDATE_SOURCE_TYPES)
        ? groupRecord.source
        : 'manual';
      const items = asArray(groupRecord.items)
        .map(normalizeMemoryInboxItem)
        .filter((entry): entry is MemoryInboxItem => Boolean(entry))
        .slice(0, 100);
      const id = cleanString(groupRecord.id, 120) || source;
      return {
        id,
        title: cleanString(groupRecord.title, 120) || id,
        source,
        total: cleanNumber(groupRecord.total, 0, 10000, items.length),
        riskCount: cleanNumber(
          groupRecord.riskCount,
          0,
          10000,
          items.filter((entry) => entry.risk.level !== 'none').length,
        ),
        ...(cleanString(groupRecord.latestUpdatedAt, 80)
          ? { latestUpdatedAt: cleanString(groupRecord.latestUpdatedAt, 80) }
          : {}),
        items,
      };
    })
    .filter((item): item is MemoryInboxGroup => Boolean(item));
  const totalsRecord = asRecord(record.totals) || {};
  return {
    version: cleanString(record.version, 120) || 'memory/p25-inbox/v1',
    groups,
    totals: {
      pending: cleanNumber(totalsRecord.pending, 0, 100000, groups.reduce((sum, group) => sum + group.total, 0)),
      risk: cleanNumber(totalsRecord.risk, 0, 100000, groups.reduce((sum, group) => sum + group.riskCount, 0)),
      due: cleanNumber(totalsRecord.due, 0, 100000, 0),
    },
  };
}

export function normalizeMemoryBatchReviewResult(value: unknown): MemoryBatchReviewResult {
  const record = asRecord(value) || {};
  const action = isOneOf(record.action, MEMORY_BATCH_REVIEW_ACTIONS) ? record.action : 'reject';
  const items = asArray(record.items)
    .map((item): MemoryBatchReviewItemResult | null => {
      const itemRecord = asRecord(item);
      const entryId = cleanString(itemRecord?.entryId, 120);
      if (!itemRecord || !entryId) return null;
      const status = isOneOf(itemRecord.status, ['completed', 'blocked', 'failed'] as const)
        ? itemRecord.status
        : 'failed';
      const itemAction = isOneOf(itemRecord.action, MEMORY_BATCH_REVIEW_ACTIONS)
        ? itemRecord.action
        : action;
      const entry = normalizeMemoryEntry(itemRecord.entry);
      return {
        entryId,
        status,
        action: itemAction,
        ...(cleanString(itemRecord.reason, 500) ? { reason: cleanString(itemRecord.reason, 500) } : {}),
        ...(entry ? { entry } : {}),
      };
    })
    .filter((item): item is MemoryBatchReviewItemResult => Boolean(item));
  const completed = items.filter((item) => item.status === 'completed').length;
  const blocked = items.filter((item) => item.status === 'blocked').length;
  const failed = items.filter((item) => item.status === 'failed').length;
  return {
    action,
    total: cleanNumber(record.total, 0, 10000, items.length),
    completed: cleanNumber(record.completed, 0, 10000, completed),
    blocked: cleanNumber(record.blocked, 0, 10000, blocked),
    failed: cleanNumber(record.failed, 0, 10000, failed),
    items,
  };
}

export function buildMemorySnapshot(entries: MemoryEntry[], resolverVersion = 'memory/p1-confirmed-only'): MemorySnapshot {
  const confirmed = entries.filter((entry) => entry.status === 'confirmed');
  return {
    entries: confirmed.map((entry) => ({
      id: entry.id,
      kind: entry.kind,
      scope: entry.scope,
      statement: entry.statement,
      confidence: entry.confidence,
      evidenceRefCount: entry.evidence.length,
      decision: 'used',
      reasonCode: 'confirmed',
      reasonText: 'confirmed memory selected',
      rankScore: 100,
      createdBy: entry.createdBy,
      ...(entry.projectRefId ? { projectRefId: entry.projectRefId } : {}),
      ...(entry.functionId ? { functionId: entry.functionId } : {}),
      ...(entry.confirmedAt ? { confirmedAt: entry.confirmedAt } : {}),
      updatedAt: entry.updatedAt,
    })),
    trace:
      confirmed.length > 0
        ? confirmed.map((entry) => `长期记忆：${entry.statement}（${entry.scope} scope）。`)
        : ['本轮未使用长期记忆。'],
    replay: {
      resolverVersion,
      entries: confirmed.map((entry) => ({
        memoryEntryId: entry.id,
        kind: entry.kind,
        scope: entry.scope,
        status: 'confirmed',
        decision: 'used',
        reasonCode: 'confirmed',
        reasonText: 'confirmed memory selected',
        rankScore: 100,
        evidenceRefCount: entry.evidence.length,
        createdBy: entry.createdBy,
        ...(entry.projectRefId ? { projectRefId: entry.projectRefId } : {}),
        ...(entry.functionId ? { functionId: entry.functionId } : {}),
        ...(entry.confirmedAt ? { confirmedAt: entry.confirmedAt } : {}),
      })),
      excluded: entries
        .filter((entry) => entry.status !== 'confirmed')
        .map((entry) => ({
          memoryEntryId: entry.id,
          decision: 'excluded',
          reasonCode: entry.status === 'pending' ? 'pending' : entry.status === 'rejected' ? 'rejected' : 'archived',
          reasonText:
            entry.status === 'pending'
              ? 'pending candidate'
              : entry.status === 'rejected'
                ? 'rejected memory'
                : 'archived memory',
          scope: entry.scope,
          status: entry.status,
          createdBy: entry.createdBy,
          evidenceRefCount: entry.evidence.length,
        })),
    },
  };
}

export function buildResolvedMemorySnapshot(input: {
  used: Array<{
    entry: MemoryEntry;
    rankScore?: number;
    reasonCode?: MemoryReplayReasonCode;
    reasonText?: string;
    relationIds?: string[];
    resolvedFromPreference?: boolean;
  }>;
  excluded?: Array<{
    entry?: MemoryEntry;
    memoryEntryId?: string;
    reasonCode: MemoryReplayReasonCode;
    reasonText: string;
    rankScore?: number;
    relationIds?: string[];
  }>;
  resolverVersion?: string;
  policyVersion?: string;
}): MemorySnapshot {
  const used = input.used.map(({ entry, rankScore, reasonCode, reasonText, relationIds, resolvedFromPreference }) => ({
    id: entry.id,
    kind: entry.kind,
    scope: entry.scope,
    statement: entry.statement,
    confidence: entry.confidence,
    evidenceRefCount: entry.evidence.length,
    decision: 'used' as const,
    reasonCode: reasonCode || 'confirmed',
    reasonText: reasonText || 'confirmed memory selected',
    rankScore: rankScore ?? 100,
    relationIds,
    createdBy: entry.createdBy,
    ...(entry.projectRefId ? { projectRefId: entry.projectRefId } : {}),
    ...(entry.functionId ? { functionId: entry.functionId } : {}),
    ...(entry.confirmedAt ? { confirmedAt: entry.confirmedAt } : {}),
    updatedAt: entry.updatedAt,
    ...(resolvedFromPreference ? { resolvedFromPreference } : {}),
  }));
  const excluded = (input.excluded || []).map(({ entry, memoryEntryId, reasonCode, reasonText, rankScore, relationIds }) => ({
    memoryEntryId: memoryEntryId || entry?.id,
    decision: 'excluded' as const,
    reasonCode,
    reasonText,
    rankScore,
    relationIds,
    scope: entry?.scope,
    status: entry?.status,
    createdBy: entry?.createdBy,
    evidenceRefCount: entry?.evidence.length,
    ...(entry?.projectRefId ? { projectRefId: entry.projectRefId } : {}),
    ...(entry?.functionId ? { functionId: entry.functionId } : {}),
  }));
  return {
    entries: used,
    trace:
      used.length > 0
        ? used.map((entry) => `长期记忆：${entry.statement}（${entry.scope} scope）。`)
        : ['本轮未使用长期记忆。'],
    replay: {
      resolverVersion: input.resolverVersion || 'memory/p2-ranked-conflict/v1',
      ...(input.policyVersion ? { policyVersion: input.policyVersion } : {}),
      entries: used.map((entry) => ({
        memoryEntryId: entry.id,
        kind: entry.kind,
        scope: entry.scope,
        status: 'confirmed',
        decision: 'used',
        reasonCode: entry.reasonCode || 'confirmed',
        reasonText: entry.reasonText || 'confirmed memory selected',
        rankScore: entry.rankScore ?? 100,
        evidenceRefCount: entry.evidenceRefCount,
        relationIds: entry.relationIds,
        createdBy: entry.createdBy,
        resolvedFromPreference: entry.resolvedFromPreference,
        projectRefId: entry.projectRefId,
        functionId: entry.functionId,
        confirmedAt: entry.confirmedAt,
      })),
      ...(excluded.length > 0
        ? {
            excluded: excluded.map((entry) => ({
              ...entry,
              reasonCode: normalizeReasonCode(entry.reasonCode, 'not_selected'),
              reasonText: entry.reasonText,
            })),
          }
        : {}),
    },
  };
}

function normalizeMemorySnapshotEntry(value: unknown): MemorySnapshotEntry | null {
  const record = asRecord(value);
  if (!record) return null;
  const id = cleanString(record.id, 120);
  const statement = cleanString(record.statement, 1000);
  if (!id || !statement) return null;
  return {
    id,
    kind: isOneOf(record.kind, MEMORY_ENTRY_KINDS) ? record.kind : 'fact',
    scope: isOneOf(record.scope, MEMORY_SCOPES) ? record.scope : 'user',
    statement,
    confidence: cleanNumber(record.confidence),
    evidenceRefCount: cleanNumber(record.evidenceRefCount, 0, 1000),
    ...(isOneOf(record.decision, MEMORY_REPLAY_DECISIONS) ? { decision: record.decision } : {}),
    ...(isOneOf(record.reasonCode, MEMORY_REPLAY_REASON_CODES) ? { reasonCode: record.reasonCode } : {}),
    ...(cleanString(record.reasonText, 240) ? { reasonText: cleanString(record.reasonText, 240) } : {}),
    ...(typeof record.rankScore === 'number' && Number.isFinite(record.rankScore)
      ? { rankScore: Math.max(0, Math.min(1000, Math.trunc(record.rankScore))) }
      : {}),
    ...(Array.isArray(record.relationIds)
      ? { relationIds: record.relationIds.map((item) => cleanString(item, 120)).filter((item): item is string => Boolean(item)) }
      : {}),
    ...(isOneOf(record.createdBy, MEMORY_CREATED_BY_VALUES) ? { createdBy: record.createdBy } : {}),
    ...(cleanString(record.projectRefId, 120) ? { projectRefId: cleanString(record.projectRefId, 120) } : {}),
    ...(cleanString(record.functionId, 120) ? { functionId: cleanString(record.functionId, 120) } : {}),
    ...(Array.isArray(record.publicationIds)
      ? { publicationIds: record.publicationIds.map((item) => cleanString(item, 120)).filter((item): item is string => Boolean(item)) }
      : {}),
    ...(cleanString(record.confirmedAt, 80) ? { confirmedAt: cleanString(record.confirmedAt, 80) } : {}),
    ...(cleanString(record.updatedAt, 80) ? { updatedAt: cleanString(record.updatedAt, 80) } : {}),
  };
}

export function normalizeMemoryReplayMetadata(
  value: unknown,
  resolverVersion = 'memory/p1-confirmed-only',
): MemoryReplayMetadata {
  const record = asRecord(value) || {};
  const entries = asArray(record.entries)
    .map((item) => {
      const itemRecord = asRecord(item);
      const memoryEntryId = cleanString(itemRecord?.memoryEntryId, 120);
      if (!itemRecord || !memoryEntryId) return null;
      return {
        memoryEntryId,
        kind: isOneOf(itemRecord.kind, MEMORY_ENTRY_KINDS) ? itemRecord.kind : 'fact',
        scope: isOneOf(itemRecord.scope, MEMORY_SCOPES) ? itemRecord.scope : 'user',
        status: 'confirmed' as const,
        decision: 'used' as const,
        reasonCode: normalizeReasonCode(itemRecord.reasonCode, 'confirmed'),
        reasonText: cleanString(itemRecord.reasonText, 240) || 'confirmed memory selected',
        rankScore: cleanNumber(itemRecord.rankScore, 0, 1000, 100),
        ...(Array.isArray(itemRecord.publicationIds)
          ? { publicationIds: itemRecord.publicationIds.map((item) => cleanString(item, 120)).filter((item): item is string => Boolean(item)) }
          : {}),
        ...(Array.isArray(itemRecord.relationIds)
          ? { relationIds: itemRecord.relationIds.map((item) => cleanString(item, 120)).filter((item): item is string => Boolean(item)) }
          : {}),
        ...(isOneOf(itemRecord.createdBy, MEMORY_CREATED_BY_VALUES) ? { createdBy: itemRecord.createdBy } : {}),
        evidenceRefCount: cleanNumber(itemRecord.evidenceRefCount, 0, 1000),
        resolvedFromPreference: itemRecord.resolvedFromPreference === true,
        ...(cleanString(itemRecord.projectRefId, 120) ? { projectRefId: cleanString(itemRecord.projectRefId, 120) } : {}),
        ...(cleanString(itemRecord.functionId, 120) ? { functionId: cleanString(itemRecord.functionId, 120) } : {}),
        ...(cleanString(itemRecord.confirmedAt, 80) ? { confirmedAt: cleanString(itemRecord.confirmedAt, 80) } : {}),
      };
    })
    .filter(Boolean) as MemoryReplayEntry[];
  const excluded = asArray(record.excluded)
    .map((item): MemoryReplayExcludedEntry | null => {
      const itemRecord = asRecord(item);
      const reasonText =
        cleanString(itemRecord?.reasonText, 240) ||
        cleanString(itemRecord?.reason, 200) ||
        'not_selected';
      if (!itemRecord || !reasonText) return null;
      return {
        ...(cleanString(itemRecord.memoryEntryId, 120) ? { memoryEntryId: cleanString(itemRecord.memoryEntryId, 120) } : {}),
        decision: 'excluded' as const,
        reasonCode: normalizeReasonCode(itemRecord.reasonCode, 'not_selected'),
        reasonText,
        ...(typeof itemRecord.rankScore === 'number' && Number.isFinite(itemRecord.rankScore)
          ? { rankScore: Math.max(0, Math.min(1000, Math.trunc(itemRecord.rankScore))) }
          : {}),
        ...(Array.isArray(itemRecord.relationIds)
          ? { relationIds: itemRecord.relationIds.map((item) => cleanString(item, 120)).filter((item): item is string => Boolean(item)) }
          : {}),
        ...(isOneOf(itemRecord.scope, MEMORY_SCOPES) ? { scope: itemRecord.scope } : {}),
        ...(isOneOf(itemRecord.status, MEMORY_ENTRY_STATUSES) ? { status: itemRecord.status } : {}),
        ...(isOneOf(itemRecord.createdBy, MEMORY_CREATED_BY_VALUES) ? { createdBy: itemRecord.createdBy } : {}),
        ...(cleanString(itemRecord.projectRefId, 120) ? { projectRefId: cleanString(itemRecord.projectRefId, 120) } : {}),
        ...(cleanString(itemRecord.functionId, 120) ? { functionId: cleanString(itemRecord.functionId, 120) } : {}),
        ...(typeof itemRecord.evidenceRefCount === 'number' && Number.isFinite(itemRecord.evidenceRefCount)
          ? { evidenceRefCount: cleanNumber(itemRecord.evidenceRefCount, 0, 1000) }
          : {}),
      };
    })
    .filter((item): item is MemoryReplayExcludedEntry => Boolean(item));
  return {
    resolverVersion: cleanString(record.resolverVersion, 120) || resolverVersion,
    ...(cleanString(record.policyVersion, 120) ? { policyVersion: cleanString(record.policyVersion, 120) } : {}),
    entries,
    ...(excluded.length > 0 ? { excluded } : {}),
  };
}

export function normalizeMemoryReplaySimulationInput(value: unknown): MemoryReplaySimulationInput | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const message = cleanString(record.message, 2000);
  if (!message) return undefined;
  const scene = isOneOf(record.scene, ['home', 'wiki', 'experiment', 'memory'] as const)
    ? record.scene
    : 'home';
  return {
    message,
    scene,
    ...(cleanString(record.projectRefId, 120) ? { projectRefId: cleanString(record.projectRefId, 120) } : {}),
    ...(cleanString(record.functionId, 160) ? { functionId: cleanString(record.functionId, 160) } : {}),
    includeLabScope: record.includeLabScope === true,
  };
}

function normalizeMemoryReplayExplanationItem(
  value: unknown,
  decisionFallback: MemoryReplayDecision,
): MemoryReplayExplanationItem | null {
  const record = asRecord(value);
  if (!record) return null;
  const reasonText =
    cleanString(record.reasonText, 240) ||
    cleanString(record.reason, 200) ||
    (decisionFallback === 'used' ? 'confirmed memory selected' : 'not_selected');
  const memoryEntryId = cleanString(record.memoryEntryId, 120);
  const label =
    cleanString(record.label, 200) ||
    cleanString(record.statement, 200) ||
    memoryEntryId ||
    (decisionFallback === 'used' ? 'Used memory' : 'Excluded memory');
  const status = isOneOf(record.status, MEMORY_ENTRY_STATUSES)
    ? record.status
    : decisionFallback === 'used'
      ? 'confirmed'
      : undefined;
  return {
    ...(memoryEntryId ? { memoryEntryId } : {}),
    decision: isOneOf(record.decision, MEMORY_REPLAY_DECISIONS) ? record.decision : decisionFallback,
    label,
    reasonCode: normalizeReasonCode(
      record.reasonCode,
      decisionFallback === 'used' ? 'confirmed' : 'not_selected',
    ),
    reasonText,
    ...(cleanString(record.userReason, 500) ? { userReason: cleanString(record.userReason, 500) } : {}),
    ...(cleanString(record.impactSummary, 500) ? { impactSummary: cleanString(record.impactSummary, 500) } : {}),
    ...(cleanString(record.scopeSummary, 240) ? { scopeSummary: cleanString(record.scopeSummary, 240) } : {}),
    ...(cleanString(record.actionSummary, 240) ? { actionSummary: cleanString(record.actionSummary, 240) } : {}),
    ...(normalizeMemoryReplayDisplayTone(record.tone) ? { tone: normalizeMemoryReplayDisplayTone(record.tone) } : {}),
    ...(isOneOf(record.scope, MEMORY_SCOPES) ? { scope: record.scope } : {}),
    ...(isOneOf(record.kind, MEMORY_ENTRY_KINDS) ? { kind: record.kind } : {}),
    ...(status ? { status } : {}),
    ...(typeof record.rankScore === 'number' && Number.isFinite(record.rankScore)
      ? { rankScore: Math.max(0, Math.min(1000, Math.trunc(record.rankScore))) }
      : {}),
    ...(typeof record.evidenceRefCount === 'number' && Number.isFinite(record.evidenceRefCount)
      ? { evidenceRefCount: cleanNumber(record.evidenceRefCount, 0, 1000) }
      : {}),
    ...(Array.isArray(record.relationIds)
      ? { relationIds: record.relationIds.map((item) => cleanString(item, 120)).filter((item): item is string => Boolean(item)) }
      : {}),
    ...(cleanString(record.statement, 1000) ? { statement: cleanString(record.statement, 1000) } : {}),
    recommendedActions: normalizeReplayExplanationActions(record.recommendedActions),
  };
}

function normalizeMemoryReplayEvidenceExplanation(value: unknown): MemoryReplayEvidenceExplanation | null {
  const record = asRecord(value);
  if (!record) return null;
  const id = cleanString(record.id, 120);
  const summary = cleanString(record.summary, 500);
  if (!id || !summary) return null;
  const source = record.source === 'session_summary' ? 'session_summary' : 'conversation_evidence';
  return {
    id,
    source,
    label: cleanString(record.label, 120) || (source === 'session_summary' ? '会话摘要' : '历史对话'),
    summary,
    ...(cleanString(record.relevanceLabel, 80) ? { relevanceLabel: cleanString(record.relevanceLabel, 80) } : {}),
    usedInPrompt: record.usedInPrompt === true,
    clarificationRequired: record.clarificationRequired === true,
  };
}

function normalizeMemoryReplayClarificationExplanation(value: unknown): MemoryReplayClarificationExplanation | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const candidates = asArray(record.candidates)
    .map((item) => {
      const itemRecord = asRecord(item);
      if (!itemRecord) return null;
      const id = cleanString(itemRecord.id, 120);
      const title = cleanString(itemRecord.title, 200);
      const summary = cleanString(itemRecord.summary, 500);
      if (!id || !title || !summary) return null;
      const sourceType =
        itemRecord.sourceType === 'session_summary' || itemRecord.sourceType === 'confirmed_memory'
          ? itemRecord.sourceType
          : 'conversation';
      return {
        id,
        title,
        summary,
        sourceType,
        ...(cleanString(itemRecord.relevanceLabel, 80) ? { relevanceLabel: cleanString(itemRecord.relevanceLabel, 80) } : {}),
      };
    })
    .filter((item): item is MemoryReplayClarificationExplanation['candidates'][number] => Boolean(item))
    .slice(0, 5);
  return {
    required: record.required === true,
    summary: cleanString(record.summary, 500) || (candidates.length ? '需要确认要使用哪个历史上下文。' : '本轮不需要额外确认。'),
    candidateCount: cleanNumber(record.candidateCount, 0, 100, candidates.length),
    candidates,
  };
}

function normalizeMemoryConflictWizardAction(value: unknown): MemoryConflictWizardAction | null {
  return typeof value === 'string' && MEMORY_CONFLICT_WIZARD_ACTIONS.includes(value as MemoryConflictWizardAction)
    ? (value as MemoryConflictWizardAction)
    : null;
}

export function normalizeMemoryConflictWizardPayload(value: unknown): MemoryConflictWizardPayload {
  const record = asRecord(value) || {};
  const decision = typeof record.decision === 'string' &&
    ['no_action', 'suggest_merge', 'possible_duplicate', 'suggest_replace', 'possible_conflict'].includes(record.decision)
    ? (record.decision as MemoryConflictWizardDecision)
    : 'no_action';
  const candidates = asArray(record.candidates)
    .map((item): MemoryConflictWizardCandidate | null => {
      const itemRecord = asRecord(item);
      if (!itemRecord) return null;
      const entryId = cleanString(itemRecord?.entryId, 120);
      const label = cleanString(itemRecord?.label, 200);
      const reason = cleanString(itemRecord?.reason, 500);
      const action = normalizeMemoryConflictWizardAction(itemRecord?.action) || 'keep_current';
      if (!entryId || !label || !reason) return null;
      return {
        entryId,
        label,
        reason,
        action,
        ...(isOneOf(itemRecord.scope, MEMORY_SCOPES) ? { scope: itemRecord.scope } : {}),
        ...(isOneOf(itemRecord.kind, MEMORY_ENTRY_KINDS) ? { kind: itemRecord.kind } : {}),
        ...(isOneOf(itemRecord.status, MEMORY_ENTRY_STATUSES) ? { status: itemRecord.status } : {}),
        ...(isOneOf(itemRecord.relationType, MEMORY_RELATION_TYPES) ? { relationType: itemRecord.relationType } : {}),
      };
    })
    .filter((item): item is MemoryConflictWizardCandidate => Boolean(item));
  const notes = asArray(record.notes)
    .map((item) => cleanString(item, 240))
    .filter((item): item is string => Boolean(item));
  const recommendedAction = normalizeMemoryConflictWizardAction(record.recommendedAction) || undefined;
  return {
    decision,
    summary: cleanString(record.summary, 240) || '已有治理建议。',
    source: record.source === 'rule' ? 'rule' : 'runtime',
    candidates,
    ...(recommendedAction ? { recommendedAction } : {}),
    ...(notes.length ? { notes } : {}),
  };
}

export function normalizeMemoryReplayExplanation(value: unknown): MemoryReplayExplanation {
  const record = asRecord(value) || {};
  const simulationInput = normalizeMemoryReplaySimulationInput(record.simulationInput);
  const used = asArray(record.used)
    .map((item) => normalizeMemoryReplayExplanationItem(item, 'used'))
    .filter((item): item is MemoryReplayExplanationItem => Boolean(item));
  const excluded = asArray(record.excluded)
    .map((item) => normalizeMemoryReplayExplanationItem(item, 'excluded'))
    .filter((item): item is MemoryReplayExplanationItem => Boolean(item));
  const sourceTrace = asArray(record.sourceTrace)
    .map((item) => cleanString(item, 500))
    .filter((item): item is string => Boolean(item))
    .slice(0, 20);
  const evidence = asArray(record.evidence)
    .map(normalizeMemoryReplayEvidenceExplanation)
    .filter((item): item is MemoryReplayEvidenceExplanation => Boolean(item))
    .slice(0, 20);
  const clarification = normalizeMemoryReplayClarificationExplanation(record.clarification);
  const actionableFallback = [...used, ...excluded].filter((item) => !item.recommendedActions.includes('none')).length;
  const totalsRecord = asRecord(record.totals) || {};
  return {
    version: 'memory/replay-explanation/v1',
    resolverVersion: cleanString(record.resolverVersion, 120) || 'memory/p1-confirmed-only',
    ...(cleanString(record.policyVersion, 120) ? { policyVersion: cleanString(record.policyVersion, 120) } : {}),
    ...(simulationInput ? { simulationInput } : {}),
    ...(cleanString(record.userSummary, 500) ? { userSummary: cleanString(record.userSummary, 500) } : {}),
    used,
    excluded,
    evidence,
    ...(clarification ? { clarification } : {}),
    sourceTrace,
    totals: {
      used: cleanNumber(totalsRecord.used, 0, 10000, used.length),
      excluded: cleanNumber(totalsRecord.excluded, 0, 10000, excluded.length),
      evidence: cleanNumber(totalsRecord.evidence, 0, 10000, evidence.length),
      clarificationCandidates: cleanNumber(
        totalsRecord.clarificationCandidates,
        0,
        10000,
        clarification?.candidateCount || 0,
      ),
      actionable: cleanNumber(totalsRecord.actionable, 0, 10000, actionableFallback),
    },
  };
}

function normalizeMemoryImpactPreviewEffect(value: unknown): MemoryImpactPreviewEffect | null {
  const record = asRecord(value);
  if (!record) return null;
  const label = cleanString(record.label, 120);
  const summary = cleanString(record.summary, 500);
  if (!label || !summary) return null;
  const tone = isOneOf(record.tone, ['neutral', 'success', 'warning', 'danger'] as const)
    ? record.tone
    : 'neutral';
  return { label, summary, tone };
}

function normalizeMemoryImpactPreviewExample(value: unknown): MemoryImpactPreviewExample | null {
  const record = asRecord(value);
  if (!record) return null;
  const question = cleanString(record.question, 240);
  const effect = cleanString(record.effect, 500);
  if (!question || !effect) return null;
  return { question, effect };
}

export function normalizeMemoryImpactPreview(value: unknown): MemoryImpactPreview | null {
  const record = asRecord(value);
  if (!record) return null;
  const entryId = cleanString(record.entryId, 120);
  const summary = cleanString(record.summary, 500);
  const scopeSummary = cleanString(record.scopeSummary, 500);
  const impactSummary = cleanString(record.impactSummary, 500);
  const preview = normalizeMemoryReplayExplanation(record.preview);
  if (!entryId || !summary || !scopeSummary || !impactSummary || !preview) return null;
  const scene = isOneOf(record.scene, ['home', 'wiki', 'experiment', 'memory'] as const)
    ? record.scene
    : 'home';
  const effects = asArray(record.effects)
    .map(normalizeMemoryImpactPreviewEffect)
    .filter((item): item is MemoryImpactPreviewEffect => Boolean(item));
  const examples = asArray(record.examples)
    .map(normalizeMemoryImpactPreviewExample)
    .filter((item): item is MemoryImpactPreviewExample => Boolean(item));
  const warnings = asArray(record.warnings)
    .map((item) => cleanString(item, 240))
    .filter((item): item is string => Boolean(item));
  return {
    version: 'memory/impact-preview/v1',
    entryId,
    scene,
    resolverVersion: cleanString(record.resolverVersion, 120) || preview.resolverVersion,
    ...(cleanString(record.policyVersion, 120) ? { policyVersion: cleanString(record.policyVersion, 120) } : {}),
    scope: isOneOf(record.scope, MEMORY_SCOPES) ? record.scope : 'user',
    kind: isOneOf(record.kind, MEMORY_ENTRY_KINDS) ? record.kind : 'fact',
    status: isOneOf(record.status, MEMORY_ENTRY_STATUSES) ? record.status : 'pending',
    confidence: cleanNumber(record.confidence, 0, 100, 0),
    riskLevel: isOneOf(record.riskLevel, MEMORY_INBOX_RISK_LEVELS) ? record.riskLevel : 'unknown',
    summary,
    scopeSummary,
    impactSummary,
    effects,
    examples,
    preview,
    warnings,
    ...(cleanString(record.updatedAt, 80) ? { updatedAt: cleanString(record.updatedAt, 80) } : {}),
  };
}

export function normalizeMemorySnapshot(value: unknown): MemorySnapshot {
  const record = asRecord(value) || {};
  const entries = asArray(record.entries).map(normalizeMemorySnapshotEntry).filter((item): item is MemorySnapshotEntry => Boolean(item));
  const trace = asArray(record.trace)
    .map((item) => cleanString(item, 500))
    .filter((item): item is string => Boolean(item));
  return {
    entries,
    trace: trace.length > 0 ? trace : entries.length > 0 ? entries.map((entry) => `长期记忆：${entry.statement}。`) : ['本轮未使用长期记忆。'],
    replay: normalizeMemoryReplayMetadata(record.replay),
  };
}
