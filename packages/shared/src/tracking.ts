import {
  calculateMaterialTaskReadiness,
  type MaterialRequirement,
  type MaterialTaskReadiness,
} from './material-requirements.js';

export const TRACKING_SIGNAL_PRIORITIES = ['high', 'medium', 'low', 'uncertain'] as const;
export const TRACKING_EVIDENCE_STRENGTHS = ['strong', 'moderate', 'weak', 'unknown'] as const;
export const TRACKING_NOVELTY_LEVELS = ['new', 'incremental', 'unclear'] as const;
export const TRACKING_SOURCE_QUALITIES = ['high', 'medium', 'low', 'unknown'] as const;
export const TRACKING_FETCH_TRIGGERS = ['manual', 'scheduled'] as const;
export const TRACKING_FETCH_STATUSES = ['running', 'succeeded', 'failed'] as const;
export const FEED_ITEM_AI_SUMMARY_STATUSES = [
  'queued',
  'running',
  'succeeded',
  'failed',
  'skipped',
] as const;
export const FEED_ITEM_AI_SUMMARY_TRIGGER_TYPES = [
  'scheduled_fetch',
  'manual_fetch',
] as const;
export const FEED_ITEM_AI_SUMMARY_COVERAGE = [
  'full_text',
  'abstract',
  'metadata',
  'insufficient',
] as const;
export const FEED_ITEM_AI_SUMMARY_ERROR_CODES = [
  'summary_owner_missing',
  'fulltext_unavailable',
  'fulltext_fetch_blocked',
  'memory_search_failed',
  'llm_parse_failed',
  'llm_generation_failed',
  'summary_worker_failed',
] as const;
export const TRACKING_FEED_BRIEFING_GROUPS = [
  'all',
  'literature',
  'community',
  'vendor',
] as const;
export const TRACKING_ACTION_TYPES = [
  'literature_note',
  'hypothesis_draft',
  'future_task',
  'ignore',
  'read_later',
] as const;
export const TRACKING_ACTION_STATUSES = ['draft', 'completed', 'dismissed'] as const;
export const TRACKING_TARGET_TYPES = ['kb_node', 'future_task', 'none'] as const;
export const TRACKING_BRIEFING_STATUSES = ['generated', 'failed'] as const;
export const TRACKING_NOTIFICATION_STATUSES = ['none', 'sent', 'failed'] as const;
export const EXPERIMENT_FUTURE_TASK_TYPES = [
  'qpcr',
  'wb',
  'ko_kd',
  'drug_treatment',
  'if_imaging',
] as const;
export const EXPERIMENT_FUTURE_TASK_STATUSES = [
  'draft',
  'confirmed',
  'planned',
  'in_progress',
  'blocked',
  'completed',
  'dismissed',
] as const;
export const EXPERIMENT_FUTURE_TASK_EXECUTION_STATUSES = [
  'not_started',
  'in_progress',
  'blocked',
  'completed',
] as const;

export type TrackingSignalPriority = (typeof TRACKING_SIGNAL_PRIORITIES)[number];
export type TrackingEvidenceStrength = (typeof TRACKING_EVIDENCE_STRENGTHS)[number];
export type TrackingNoveltyLevel = (typeof TRACKING_NOVELTY_LEVELS)[number];
export type TrackingSourceQuality = (typeof TRACKING_SOURCE_QUALITIES)[number];
export type TrackingFetchTrigger = (typeof TRACKING_FETCH_TRIGGERS)[number];
export type TrackingFetchStatus = (typeof TRACKING_FETCH_STATUSES)[number];
export type FeedItemAiSummaryStatus = (typeof FEED_ITEM_AI_SUMMARY_STATUSES)[number];
export type FeedItemAiSummaryTriggerType = (typeof FEED_ITEM_AI_SUMMARY_TRIGGER_TYPES)[number];
export type FeedItemAiSummaryCoverage = (typeof FEED_ITEM_AI_SUMMARY_COVERAGE)[number];
export type FeedItemAiSummaryErrorCode = (typeof FEED_ITEM_AI_SUMMARY_ERROR_CODES)[number];
export type TrackingFeedBriefingGroup = (typeof TRACKING_FEED_BRIEFING_GROUPS)[number];
export type TrackingActionType = (typeof TRACKING_ACTION_TYPES)[number];
export type TrackingActionStatus = (typeof TRACKING_ACTION_STATUSES)[number];
export type TrackingTargetType = (typeof TRACKING_TARGET_TYPES)[number];
export type TrackingBriefingStatus = (typeof TRACKING_BRIEFING_STATUSES)[number];
export type TrackingNotificationStatus = (typeof TRACKING_NOTIFICATION_STATUSES)[number];
export type ExperimentFutureTaskType = (typeof EXPERIMENT_FUTURE_TASK_TYPES)[number];
export type ExperimentFutureTaskStatus = (typeof EXPERIMENT_FUTURE_TASK_STATUSES)[number];
export type ExperimentFutureTaskExecutionStatus = (typeof EXPERIMENT_FUTURE_TASK_EXECUTION_STATUSES)[number];

export interface TrackingSourceIdentifiers {
  pmid?: string;
  doi?: string;
  canonicalUrl?: string;
  sourceId?: string;
  [key: string]: unknown;
}

export interface FeedItemAiSummaryMemoryConnection {
  evidenceType: 'confirmed_memory' | 'conversation_chunk' | 'session_summary';
  evidenceId: string;
  label: string;
  reason: string;
}

export interface FeedItemAiSummaryPayload {
  overviewText: string;
  aiSummaryText: string;
  keyPoints: string[];
  memoryConnections: FeedItemAiSummaryMemoryConnection[];
  suggestedNextActions: string[];
  coverage: FeedItemAiSummaryCoverage;
  warnings: string[];
}

export interface FeedItemAiSummaryPreview {
  status: FeedItemAiSummaryStatus | 'none';
  overviewText?: string;
  aiSummaryText?: string;
  keyPoints?: string[];
  memoryConnections?: FeedItemAiSummaryMemoryConnection[];
  suggestedNextActions?: string[];
  coverage?: FeedItemAiSummaryCoverage;
  warnings?: string[];
  generatedAt?: string;
  triggerType?: FeedItemAiSummaryTriggerType;
  errorCode?: FeedItemAiSummaryErrorCode | string | null;
  errorMessage?: string | null;
  trace?: {
    jobId?: string;
    feedItemId?: string;
    subscriptionId?: string;
    fetchRunId?: string | null;
    triggerType?: FeedItemAiSummaryTriggerType;
    promptVersion?: string;
    workKeyShort?: string;
    articleSourceHashShort?: string;
    attemptCount?: number;
    createdAt?: string;
    updatedAt?: string;
    startedAt?: string | null;
    lastAttemptAt?: string | null;
    nextRetryAt?: string | null;
    finishedAt?: string | null;
    workerEnabled?: boolean;
    aiSummaryWorkerEnabled?: boolean;
    maxJobsPerTick?: number;
    reason?:
      | 'no_job'
      | 'tracking_worker_disabled'
      | 'ai_summary_worker_disabled'
      | 'waiting_for_worker_claim'
      | 'worker_claimed'
      | 'waiting_retry'
      | 'failed_final'
      | 'skipped'
      | 'succeeded';
  };
}

export interface TrackingFeedBriefingBreakdown {
  literature: number;
  community: number;
  vendor: number;
}

export interface TrackingFeedBriefingItem {
  id: string;
  title: string;
  url: string | null;
  summary: string | null;
  tags: string[] | null;
  relevanceScore: number | null;
  fetchedAt: string;
  subscriptionName: string | null;
  subscriptionType: string | null;
  aiSummaryStatus?: FeedItemAiSummaryPreview['status'];
  aiSummaryText?: string;
}

export interface TrackingFeedBriefingPayload {
  date: string;
  count: number;
  summary: string;
  breakdown: TrackingFeedBriefingBreakdown;
  items: TrackingFeedBriefingItem[];
  generatedAt?: string;
  triggerType?: FeedItemAiSummaryTriggerType;
  sourceFetchRunId?: string | null;
}

export interface FeedItemAiSummaryProvenance {
  source:
    | 'feed_content'
    | 'feed_summary'
    | 'metadata'
    | 'pubmed_metadata'
    | 'biorxiv_metadata'
    | 'controlled_url_fetch';
  url?: string;
  contentType?: string;
  truncated?: boolean;
  warning?: string;
}

export interface FeedItemArticleContextJson {
  title: string;
  url?: string;
  sourceType?: string;
  sourceIdentifiers: TrackingSourceIdentifiers;
  publishedAt?: string;
  subscriptionKeywords: string[];
  excerpt: string;
  coverage: FeedItemAiSummaryCoverage;
  articleSourceHash: string;
}

export interface FeedItemMemoryContextJson {
  query: string;
  confirmedMemory: Array<{
    id: string;
    kind?: string;
    scope?: string;
    statement: string;
  }>;
  conversationEvidence: Array<{
    id: string;
    evidenceType: 'conversation_chunk';
    sessionId?: string;
    summary?: string;
    contentPreview: string;
    score?: number;
  }>;
  summaryEvidence: Array<{
    id: string;
    evidenceType: 'session_summary';
    sessionId?: string;
    title?: string;
    summary?: string;
    contentPreview: string;
    score?: number;
  }>;
  warnings: string[];
  memoryContextHash: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function cleanString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value.trim() : fallback;
}

function cleanStringArray(value: unknown, max = 12) {
  return Array.isArray(value)
    ? value
        .filter((item): item is string => typeof item === 'string')
        .map((item) => item.trim())
        .filter(Boolean)
        .slice(0, max)
    : [];
}

function normalizeMemoryConnections(value: unknown): FeedItemAiSummaryMemoryConnection[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!isRecord(item)) return null;
      const evidenceType = cleanString(item.evidenceType);
      if (
        evidenceType !== 'confirmed_memory' &&
        evidenceType !== 'conversation_chunk' &&
        evidenceType !== 'session_summary'
      ) {
        return null;
      }
      const evidenceId = cleanString(item.evidenceId);
      if (!evidenceId) return null;
      return {
        evidenceType,
        evidenceId,
        label: cleanString(item.label, evidenceType),
        reason: cleanString(item.reason),
      };
    })
    .filter((item): item is FeedItemAiSummaryMemoryConnection => Boolean(item));
}

export function normalizeFeedItemAiSummaryPayload(
  value: unknown,
): FeedItemAiSummaryPayload | null {
  if (!isRecord(value)) return null;

  const coverage = cleanString(value.coverage);
  const normalizedCoverage = FEED_ITEM_AI_SUMMARY_COVERAGE.includes(
    coverage as FeedItemAiSummaryCoverage,
  )
    ? (coverage as FeedItemAiSummaryCoverage)
    : 'metadata';
  const overviewText = cleanString(value.overviewText);
  const aiSummaryText = cleanString(value.aiSummaryText);

  if (!overviewText && !aiSummaryText) return null;

  return {
    overviewText,
    aiSummaryText: aiSummaryText || overviewText,
    keyPoints: cleanStringArray(value.keyPoints, 8),
    memoryConnections: normalizeMemoryConnections(value.memoryConnections),
    suggestedNextActions: cleanStringArray(value.suggestedNextActions, 6),
    coverage: normalizedCoverage,
    warnings: cleanStringArray(value.warnings, 20),
  };
}

export interface TrackingProjectProfile {
  id: string;
  labId: string;
  wikiNodeId: string;
  currentHypotheses: string[];
  candidateTargets: string[];
  keyModels: string[];
  readouts: string[];
  knownRisks: string[];
  excludedDirections: string[];
  briefingTimeLocal: string;
  timezone: string;
  createdAt: string;
  updatedAt: string;
}

export interface SubscriptionProjectBinding {
  id: string;
  labId: string;
  subscriptionId: string;
  wikiNodeId: string;
  createdBy?: string | null;
  createdAt: string;
}

export interface TrackingFetchRun {
  id: string;
  labId: string;
  subscriptionId: string;
  trigger: TrackingFetchTrigger;
  status: TrackingFetchStatus;
  startedAt: string;
  finishedAt?: string | null;
  totalFetched: number;
  newCount: number;
  duplicateCount: number;
  errorCount: number;
  errorMessage?: string | null;
  metadata: Record<string, unknown>;
}

export interface TrackingMatchedEntities {
  matchedHypotheses: string[];
  matchedTargets: string[];
  matchedModels: string[];
  matchedReadouts: string[];
  matchedRisks: string[];
  [key: string]: unknown;
}

export interface TrackingSignalReasons {
  whyRelevant: string;
  limitations: string[];
  scoringNotes: string[];
  [key: string]: unknown;
}

export interface TrackingRoleNotes {
  pi: string;
  postdoc: string;
  student: string;
  [key: string]: unknown;
}

export interface TrackingSuggestedAction {
  type: 'save_literature_note' | 'hypothesis_draft' | 'future_task';
  label: string;
  taskType?: ExperimentFutureTaskType;
  context?: Record<string, unknown>;
}

export interface TrackingSignalScore {
  id: string;
  labId: string;
  feedItemId: string;
  projectNodeId: string;
  priority: TrackingSignalPriority;
  relevanceScore: number;
  actionabilityScore: number;
  evidenceStrength: TrackingEvidenceStrength;
  novelty: TrackingNoveltyLevel;
  isCounterSignal: boolean;
  matchedEntities: TrackingMatchedEntities;
  reasons: TrackingSignalReasons;
  roleNotes: TrackingRoleNotes;
  suggestedActions: TrackingSuggestedAction[];
  createdAt: string;
}

export interface TrackingBriefingSections {
  high: string[];
  counter: string[];
  actionable: string[];
  reading: string[];
  uncertain: string[];
  [key: string]: unknown;
}

export interface TrackingDailyBriefing {
  id: string;
  labId: string;
  projectNodeId: string;
  briefingDate: string;
  generatedAt: string;
  status: TrackingBriefingStatus;
  summary: string;
  sections: TrackingBriefingSections;
  notificationStatus: TrackingNotificationStatus;
  errorMessage?: string | null;
}

export interface TrackingWeeklyDigest {
  labId: string;
  projectNodeId: string;
  startDate: string;
  endDate: string;
  generatedAt: string;
  dayCount: number;
  summary: string;
  totals: {
    high: number;
    counter: number;
    actionable: number;
    reading: number;
    uncertain: number;
  };
  topBriefingDates: string[];
  sourceReliabilityNotes: string[];
}

export interface TrackingSignalAction {
  id: string;
  labId: string;
  feedItemId: string;
  signalScoreId?: string | null;
  projectNodeId?: string | null;
  actionType: TrackingActionType;
  status: TrackingActionStatus;
  targetType: TrackingTargetType;
  targetId?: string | null;
  outputJson: Record<string, unknown>;
  createdBy?: string | null;
  createdAt: string;
}

export interface ExperimentFutureTaskSourceRef {
  feedItemId?: string;
  signalId?: string;
  pmid?: string;
  doi?: string;
  url?: string;
  [key: string]: unknown;
}

export interface ExperimentFutureTaskEvidenceRef {
  feedItemId?: string;
  sourceType?: 'tracking_signal' | 'structural_mutation' | 'analysis' | 'manual' | 'wiki';
  analysisProjectId?: string;
  resultId?: string;
  artifactId?: string;
  selectionId?: string;
  packageId?: string;
  hitId?: string;
  gene?: string;
  pmid?: string;
  doi?: string;
  url?: string;
  [key: string]: unknown;
}

export interface ExperimentFutureTaskRequiredParameters {
  sample?: string;
  model?: string;
  control?: string;
  readout?: string;
  owner?: string;
  dueDate?: string;
  [key: string]: unknown;
}

export interface ExperimentFutureTaskLinkedWorkspace {
  workspaceType: 'validation' | 'cloning' | 'calculators' | 'wiki';
  workspaceId?: string;
  route: string;
  mode?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export interface ExperimentFutureTaskMaterials {
  requirements: MaterialRequirement[];
  readiness: MaterialTaskReadiness;
  consumeDrafts?: Array<{
    requirementId: string;
    resourceType: 'inventory' | 'sample';
    resourceId: string;
    quantity?: number;
    unit?: string;
    note?: string;
    confirmed?: boolean;
  }>;
}

export interface ExperimentFutureTask {
  id: string;
  labId: string;
  projectNodeId?: string | null;
  sourceType: 'tracking_signal' | 'structural_mutation' | 'manual' | 'analysis';
  sourceRef: ExperimentFutureTaskSourceRef;
  taskType: ExperimentFutureTaskType;
  status: ExperimentFutureTaskStatus;
  title: string;
  rationale: string;
  hypothesis: string;
  evidenceRefs: ExperimentFutureTaskEvidenceRef[];
  requiredParameters: ExperimentFutureTaskRequiredParameters;
  materials?: ExperimentFutureTaskMaterials;
  executionStatus?: ExperimentFutureTaskExecutionStatus;
  blockedReason?: string;
  completionSummary?: string;
  linkedWorkspace?: ExperimentFutureTaskLinkedWorkspace;
  linkedEvidenceBoardId?: string;
  linkedEvidenceItemIds?: string[];
  linkedWikiNodeId?: string;
  lastExecutedAt?: string;
  createdBy?: string | null;
  createdAt: string;
  updatedAt: string;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function asString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback;
}

function asNumber(value: unknown, fallback = 0) {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function asBoolean(value: unknown, fallback = false) {
  return typeof value === 'boolean' ? value : fallback;
}

function asStringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function asRecordArray(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is Record<string, unknown> => Boolean(asRecord(item)))
    : [];
}

function asEnumValue<T extends readonly string[]>(
  value: unknown,
  allowed: T,
  fallback: T[number],
) {
  return typeof value === 'string' && allowed.includes(value) ? (value as T[number]) : fallback;
}

export function normalizeTrackingSourceIdentifiers(value: unknown): TrackingSourceIdentifiers {
  const record = asRecord(value) ?? {};
  return {
    ...record,
    pmid: typeof record.pmid === 'string' ? record.pmid : undefined,
    doi: typeof record.doi === 'string' ? record.doi : undefined,
    canonicalUrl: typeof record.canonicalUrl === 'string' ? record.canonicalUrl : undefined,
    sourceId: typeof record.sourceId === 'string' ? record.sourceId : undefined,
  };
}

export function normalizeTrackingMatchedEntities(value: unknown): TrackingMatchedEntities {
  const record = asRecord(value) ?? {};
  return {
    ...record,
    matchedHypotheses: asStringArray(record.matchedHypotheses),
    matchedTargets: asStringArray(record.matchedTargets),
    matchedModels: asStringArray(record.matchedModels),
    matchedReadouts: asStringArray(record.matchedReadouts),
    matchedRisks: asStringArray(record.matchedRisks),
  };
}

export function normalizeTrackingSignalReasons(value: unknown): TrackingSignalReasons {
  const record = asRecord(value) ?? {};
  return {
    ...record,
    whyRelevant: asString(record.whyRelevant),
    limitations: asStringArray(record.limitations),
    scoringNotes: asStringArray(record.scoringNotes),
  };
}

export function normalizeTrackingRoleNotes(value: unknown): TrackingRoleNotes {
  const record = asRecord(value) ?? {};
  return {
    ...record,
    pi: asString(record.pi),
    postdoc: asString(record.postdoc),
    student: asString(record.student),
  };
}

export function normalizeTrackingSuggestedAction(value: unknown): TrackingSuggestedAction {
  const record = asRecord(value) ?? {};
  return {
    type: asEnumValue(
      record.type,
      ['save_literature_note', 'hypothesis_draft', 'future_task'] as const,
      'save_literature_note',
    ),
    label: asString(record.label),
    taskType: record.taskType
      ? asEnumValue(record.taskType, EXPERIMENT_FUTURE_TASK_TYPES, 'qpcr')
      : undefined,
    context: asRecord(record.context) ?? undefined,
  };
}

export function normalizeTrackingBriefingSections(value: unknown): TrackingBriefingSections {
  const record = asRecord(value) ?? {};
  return {
    ...record,
    high: asStringArray(record.high),
    counter: asStringArray(record.counter),
    actionable: asStringArray(record.actionable),
    reading: asStringArray(record.reading),
    uncertain: asStringArray(record.uncertain),
  };
}

export function normalizeExperimentFutureTaskSourceRef(value: unknown): ExperimentFutureTaskSourceRef {
  const record = asRecord(value) ?? {};
  return {
    ...record,
    feedItemId: typeof record.feedItemId === 'string' ? record.feedItemId : undefined,
    signalId: typeof record.signalId === 'string' ? record.signalId : undefined,
    pmid: typeof record.pmid === 'string' ? record.pmid : undefined,
    doi: typeof record.doi === 'string' ? record.doi : undefined,
    url: typeof record.url === 'string' ? record.url : undefined,
  };
}

export function normalizeExperimentFutureTaskEvidenceRef(value: unknown): ExperimentFutureTaskEvidenceRef {
  const record = asRecord(value) ?? {};
  return {
    ...record,
    feedItemId: asString(record.feedItemId),
    sourceType: record.sourceType
      ? asEnumValue(record.sourceType, ['tracking_signal', 'structural_mutation', 'analysis', 'manual', 'wiki'] as const, 'manual')
      : undefined,
    analysisProjectId: typeof record.analysisProjectId === 'string' ? record.analysisProjectId : undefined,
    resultId: typeof record.resultId === 'string' ? record.resultId : undefined,
    artifactId: typeof record.artifactId === 'string' ? record.artifactId : undefined,
    selectionId: typeof record.selectionId === 'string' ? record.selectionId : undefined,
    packageId: typeof record.packageId === 'string' ? record.packageId : undefined,
    hitId: typeof record.hitId === 'string' ? record.hitId : undefined,
    gene: typeof record.gene === 'string' ? record.gene : undefined,
    pmid: typeof record.pmid === 'string' ? record.pmid : undefined,
    doi: typeof record.doi === 'string' ? record.doi : undefined,
    url: typeof record.url === 'string' ? record.url : undefined,
  };
}

export function normalizeExperimentFutureTaskRequiredParameters(
  value: unknown,
): ExperimentFutureTaskRequiredParameters {
  return asRecord(value) ?? {};
}

function normalizeFutureTaskMaterials(value: unknown): ExperimentFutureTaskMaterials | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const requirements = asRecordArray(record.requirements)
    .map((item) => ({
      ...(item as unknown as MaterialRequirement),
      matchCandidates: Array.isArray(item.matchCandidates) ? item.matchCandidates : [],
      sourceRefs: Array.isArray(item.sourceRefs) ? item.sourceRefs : [],
      notes: Array.isArray(item.notes) ? item.notes : [],
      warnings: Array.isArray(item.warnings) ? item.warnings : [],
    }))
    .filter((item) => typeof item.label === 'string' && item.label.trim().length > 0);

  return {
    requirements,
    readiness: calculateMaterialTaskReadiness(requirements),
    consumeDrafts: asRecordArray(record.consumeDrafts).map((item) => ({
      requirementId: asString(item.requirementId),
      resourceType: asEnumValue(item.resourceType, ['inventory', 'sample'] as const, 'inventory'),
      resourceId: asString(item.resourceId),
      quantity: typeof item.quantity === 'number' ? item.quantity : undefined,
      unit: typeof item.unit === 'string' ? item.unit : undefined,
      note: typeof item.note === 'string' ? item.note : undefined,
      confirmed: typeof item.confirmed === 'boolean' ? item.confirmed : undefined,
    })),
  };
}

export function normalizeExperimentFutureTaskLinkedWorkspace(
  value: unknown,
): ExperimentFutureTaskLinkedWorkspace | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const route = asString(record.route);
  if (!route) return undefined;
  return {
    ...record,
    workspaceType: asEnumValue(record.workspaceType, ['validation', 'cloning', 'calculators', 'wiki'] as const, 'validation'),
    workspaceId: typeof record.workspaceId === 'string' ? record.workspaceId : undefined,
    route,
    mode: typeof record.mode === 'string' ? record.mode : undefined,
    updatedAt: typeof record.updatedAt === 'string' ? record.updatedAt : undefined,
  };
}

export function normalizeTrackingSignalScore(value: unknown): TrackingSignalScore {
  const record = asRecord(value) ?? {};
  return {
    id: asString(record.id),
    labId: asString(record.labId),
    feedItemId: asString(record.feedItemId),
    projectNodeId: asString(record.projectNodeId),
    priority: asEnumValue(record.priority, TRACKING_SIGNAL_PRIORITIES, 'low'),
    relevanceScore: asNumber(record.relevanceScore),
    actionabilityScore: asNumber(record.actionabilityScore),
    evidenceStrength: asEnumValue(record.evidenceStrength, TRACKING_EVIDENCE_STRENGTHS, 'unknown'),
    novelty: asEnumValue(record.novelty, TRACKING_NOVELTY_LEVELS, 'unclear'),
    isCounterSignal: asBoolean(record.isCounterSignal),
    matchedEntities: normalizeTrackingMatchedEntities(record.matchedEntities),
    reasons: normalizeTrackingSignalReasons(record.reasons),
    roleNotes: normalizeTrackingRoleNotes(record.roleNotes),
    suggestedActions: asRecordArray(record.suggestedActions).map(normalizeTrackingSuggestedAction),
    createdAt: asString(record.createdAt),
  };
}

export function normalizeExperimentFutureTask(value: unknown): ExperimentFutureTask {
  const record = asRecord(value) ?? {};
  return {
    id: asString(record.id),
    labId: asString(record.labId),
    projectNodeId: typeof record.projectNodeId === 'string' ? record.projectNodeId : null,
    sourceType: asEnumValue(record.sourceType, ['tracking_signal', 'structural_mutation', 'manual', 'analysis'] as const, 'manual'),
    sourceRef: normalizeExperimentFutureTaskSourceRef(record.sourceRef),
    taskType: asEnumValue(record.taskType, EXPERIMENT_FUTURE_TASK_TYPES, 'qpcr'),
    status: asEnumValue(record.status, EXPERIMENT_FUTURE_TASK_STATUSES, 'draft'),
    title: asString(record.title),
    rationale: asString(record.rationale),
    hypothesis: asString(record.hypothesis),
    evidenceRefs: asRecordArray(record.evidenceRefs).map(normalizeExperimentFutureTaskEvidenceRef),
    requiredParameters: normalizeExperimentFutureTaskRequiredParameters(record.requiredParameters),
    materials: normalizeFutureTaskMaterials(record.materials),
    executionStatus: record.executionStatus
      ? asEnumValue(record.executionStatus, EXPERIMENT_FUTURE_TASK_EXECUTION_STATUSES, 'not_started')
      : undefined,
    blockedReason: typeof record.blockedReason === 'string' ? record.blockedReason : undefined,
    completionSummary: typeof record.completionSummary === 'string' ? record.completionSummary : undefined,
    linkedWorkspace: normalizeExperimentFutureTaskLinkedWorkspace(record.linkedWorkspace),
    linkedEvidenceBoardId: typeof record.linkedEvidenceBoardId === 'string' ? record.linkedEvidenceBoardId : undefined,
    linkedEvidenceItemIds: asStringArray(record.linkedEvidenceItemIds),
    linkedWikiNodeId: typeof record.linkedWikiNodeId === 'string' ? record.linkedWikiNodeId : undefined,
    lastExecutedAt: typeof record.lastExecutedAt === 'string' ? record.lastExecutedAt : undefined,
    createdBy: typeof record.createdBy === 'string' ? record.createdBy : null,
    createdAt: asString(record.createdAt),
    updatedAt: asString(record.updatedAt),
  };
}
