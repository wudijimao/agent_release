import {
  normalizeLabOSActionCardPayload,
  type HomeContextPacket,
  type HomeContextRef as ContextEngineeringRef,
  type LabOSActionCardPayload,
  type LabOSActionCardRouteAction,
  type LabOSActionStatus,
  type ModuleHandoffPayload,
} from './context-engineering.js';
import {
  normalizeResearchAnswer,
  normalizeResearchRenderPayload,
  type ResearchAnswer,
  type ResearchRenderPayload,
} from './research-answer.js';
import {
  normalizeHomeRagFilterSummary,
  type HomeRagDocumentKind,
  type HomeRagFilterSummary,
} from './home-rag.js';
import {
  normalizeRagResultExperimentTime,
  type RagResultExperimentTime,
} from './experiment-time.js';
import type {
  MemoryCandidateSourceSummary,
  MemoryEntryKind,
  MemoryEntryStatus,
  MemoryEvidenceRef,
  MemoryInboxRiskLevel,
  MemoryScope,
} from './memory.js';
import {
  normalizeMemoryClarificationCandidate,
  normalizeMemoryQuietDecision,
  type MemoryClarificationCandidate,
  type MemoryQuietDecision,
} from './memory-experience.js';
import {
  normalizePresentationDraftCardPayload,
  type PresentationDraftCardPayload,
} from './presentation.js';
import {
  normalizeHomeDraftEnvelope,
  type HomeDraftEnvelope,
} from './home-draft.js';

export interface HomeDisplayCitation {
  sourceType?: 'document' | 'wiki';
  sourceId?: string;
  documentId?: string;
  wikiPageId?: string;
  sourceUrl?: string;
  chunkId: string;
  page?: number;
  text: string;
  documentTitle: string;
  createdBy?: string | null;
  createdByName?: string | null;
  createdAt?: string;
  updatedAt?: string;
  documentKind?: HomeRagDocumentKind | 'unknown';
  experimentTime?: RagResultExperimentTime;
}

export interface InternalWikiSearchEmptyState {
  title: string;
  description: string;
  recoveryActions: string[];
}

export const HOME_INTENT_CLASSES = [
  'general_answer',
  'literature_search',
  'evidence_synthesis',
  'data_interpretation',
  'experiment_planning',
  'write_or_archive',
  'workflow_orchestration',
  'status_or_resume',
] as const;

export const HOME_ASSISTANT_CARD_TYPES = [
  'answer',
  'internal_wiki_search',
  'literature_search',
  'evidence_synthesis',
  'data_interpretation',
  'experiment_plan',
  'candidate_ranking',
  'validation_draft',
  'evidence_propose',
  'mira_archive_preview',
  'data_quality',
  'workflow_decision',
  'workflow_overview',
  'workflow_step',
  'workflow_status',
  'memory_proposal',
  'tracking_subscription_preview',
  'tracking_subscription_list',
  'tracking_subscription_delete_confirm',
  'scheduled_task_create_preview',
  'scheduled_task_delete_confirm',
  'scheduled_task_list',
  'presentation_draft',
  'confirmation',
  'clarification',
  'blocked',
  'handoff',
  'memory_context_clarification',
  'quiet_preference_notice',
] as const;

export const HOME_ASSISTANT_DISPLAY_STATES = [
  'ready',
  'streaming',
  'needs_clarification',
  'blocked',
  'waiting_confirmation',
  'completed',
] as const;

export type HomeIntentClass = (typeof HOME_INTENT_CLASSES)[number];
export type HomeAssistantCardType = (typeof HOME_ASSISTANT_CARD_TYPES)[number];
export type HomeAssistantDisplayState = (typeof HOME_ASSISTANT_DISPLAY_STATES)[number];

export interface HomeSourceSummary {
  usedSources: Array<{
    id: string;
    type: string;
    title: string;
    summary?: string;
  }>;
  blockedSources: Array<{
    id?: string;
    type: string;
    title?: string;
    reason: string;
  }>;
  citationCount: number;
}

export interface HomeActionSummary {
  requiresConfirmation: boolean;
  allowedActions: string[];
  blockedActions: string[];
  nextActionLabel?: string;
}

export interface HomeDisplayValidationSummary {
  schemaValid: boolean;
  provenanceValid: boolean;
  permissionValid: boolean;
  warnings: string[];
}

export interface HomeCardProvenance {
  sourceRefs: Array<{
    type: string;
    id: string;
    title?: string;
  }>;
  toolRunIds: string[];
  citationIds: string[];
  literatureResultRefs?: Array<{
    pmid?: string;
    doi?: string;
    url?: string;
    titleHash?: string;
  }>;
}

export interface AnswerCardAction {
  id: string;
  label: string;
  href?: string;
}

export interface AnswerCardPayload {
  markdown: string;
  actions?: AnswerCardAction[];
}

export interface InternalWikiSearchCardPayload {
  query?: string;
  answerMarkdown?: string;
  answerReferences?: Array<{
    sourceId: string;
    label: string;
  }>;
  filterSummary?: HomeRagFilterSummary;
  emptyState?: InternalWikiSearchEmptyState;
  results: Array<{
    id: string;
    sourceId?: string;
    title: string;
    href?: string;
    snippet: string;
    pages: number[];
    sourceType: 'wiki' | 'document';
    createdByName?: string | null;
    createdAt?: string;
    updatedAt?: string;
    documentKind?: HomeRagDocumentKind | 'unknown';
    experimentTime?: RagResultExperimentTime;
    matchReason?: string;
  }>;
}

const INTERNAL_WIKI_NO_RELEVANT_PATTERNS = [
  /未找到.*(相关|匹配|可用|内部|wiki|mira|知识库|文档|记录)/i,
  /没有(找到|检索到|命中).*(相关|匹配|可用|内部|wiki|mira|知识库|文档|记录)/i,
  /(没有|暂无).*(相关|匹配).*(内部|wiki|mira|知识库|文档|记录)/i,
  /(内部|wiki|mira|知识库|文档|记录).*(不相关|无关|低相关)/i,
  /检索结果.*(不相关|无关|不足以|不能支撑)/i,
  /\b(no relevant|not relevant|no matching|no results|not found)\b/i,
] as const;

export function isRelevantInternalWikiAnswerText(value?: string | null) {
  const text = (value || '').replace(/\s+/g, ' ').trim();
  if (text.length < 8) return false;
  return !INTERNAL_WIKI_NO_RELEVANT_PATTERNS.some((pattern) => pattern.test(text));
}

export interface DataInterpretationCardPayload {
  inputTitle: string;
  inputType: 'attachment' | 'analysis_artifact' | 'analysis_selection' | 'table' | 'unknown';
  observations: string[];
  caveats: string[];
  nextSteps: string[];
  bodyMarkdown?: string;
}

export interface ExperimentPlanCardPayload {
  goal: string;
  readouts: string[];
  samplesAndControls: string[];
  steps: string[];
  risks: string[];
  successCriteria: string[];
}

export interface CandidateRankingCardPayload {
  question: string;
  candidates: Array<{
    id: string;
    title: string;
    rank: number;
    confidence: 'low' | 'medium' | 'high';
    support: string[];
    against: string[];
    nextStep: string;
  }>;
  recommendation?: string;
}

export interface ValidationDraftCardPayload {
  packageTitle: string;
  hypothesis: string;
  readouts: string[];
  samplesAndControls: string[];
  acceptanceCriteria: string[];
  risks: string[];
  targetModule?: string;
  confirmationRequired: boolean;
}

export interface EvidenceProposeCardPayload {
  claim: string;
  confidence: 'low' | 'medium' | 'high';
  supportingEvidence: string[];
  opposingEvidence: string[];
  gaps: string[];
  clueOnly: boolean;
  targetBoard?: string;
}

export interface TrackingSubscriptionPreviewCardPayload {
  draftEnvelope?: HomeDraftEnvelope;
  sourceName: string;
  sourceType: 'pubmed' | 'biorxiv' | 'twitter' | 'web' | 'lab-tracking';
  summary?: string;
  keywords: string[];
  queryMode?: 'and' | 'or' | 'advanced';
  advancedQuery?: string;
  url?: string;
  frequency: 'hourly' | 'daily' | 'weekly';
  lookbackDays: number;
  projectNodeIds: string[];
  confirmation?: {
    status?: 'pending' | 'completed' | 'cancelled' | 'failed';
    subscriptionId?: string;
    error?: string;
  };
}

export interface TrackingSubscriptionDeleteConfirmCardPayload {
  draftEnvelope?: HomeDraftEnvelope;
  subscriptionId: string;
  sourceName: string;
  sourceType: 'pubmed' | 'biorxiv' | 'twitter' | 'web' | 'lab-tracking';
  enabled: boolean;
  keywords: string[];
  url?: string;
  frequency?: 'hourly' | 'daily' | 'weekly';
  lookbackDays?: number;
  lastFetchAt?: string;
  createdAt?: string;
  totalItems: number;
  unreadItems: number;
  savedItems: number;
  due: boolean;
  confirmation?: TrackingSubscriptionPreviewCardPayload['confirmation'];
}

export interface TrackingSubscriptionListCardPayload {
  title?: string;
  summary?: string;
  mode?: 'list' | 'delete_candidates';
  total: number;
  enabledTotal: number;
  items: Array<{
    id: string;
    name: string;
    matchReason?: string;
    sourceType: 'pubmed' | 'biorxiv' | 'twitter' | 'web' | 'lab-tracking';
    enabled: boolean;
    keywords: string[];
    url?: string;
    frequency?: 'hourly' | 'daily' | 'weekly';
    lookbackDays?: number;
    lastFetchAt?: string;
    createdAt?: string;
    totalItems: number;
    unreadItems: number;
    savedItems: number;
    due: boolean;
  }>;
  emptyState?: {
    title: string;
    description: string;
    recoveryActions: string[];
  };
}

export type ScheduledTaskScheduleKind = 'once' | 'daily' | 'weekly' | 'monthly';

export interface ScheduledTaskScheduleConfig {
  time?: string;
  weekday?: number;
  dayOfMonth?: number;
  runAt?: string;
}

export interface ScheduledTaskResolution {
  status?: 'pending' | 'completed' | 'cancelled' | 'failed';
  taskId?: string;
  error?: string;
}

export interface ScheduledTaskCreatePreviewCardPayload {
  draftEnvelope?: HomeDraftEnvelope;
  name: string;
  prompt: string;
  promptSummary?: string;
  scheduleKind: ScheduledTaskScheduleKind;
  scheduleConfig: ScheduledTaskScheduleConfig;
  scheduleLabel: string;
  timezone: string;
  titleTemplate: string;
  nextRunAt?: string;
  warnings: string[];
  confirmation?: ScheduledTaskResolution;
}

export interface ScheduledTaskDeleteConfirmCardPayload {
  draftEnvelope?: HomeDraftEnvelope;
  taskId: string;
  name: string;
  status: 'active' | 'paused' | 'running' | 'error' | 'disabled';
  scheduleKind: ScheduledTaskScheduleKind;
  scheduleLabel: string;
  timezone?: string;
  nextRunAt?: string;
  lastRunAt?: string;
  confirmation?: ScheduledTaskResolution;
}

export interface ScheduledTaskListCardPayload {
  title?: string;
  summary?: string;
  mode: 'list' | 'delete_candidates';
  total: number;
  activeTotal: number;
  items: Array<{
    id: string;
    name: string;
    prompt?: string;
    matchReason?: string;
    status: 'active' | 'paused' | 'running' | 'error' | 'disabled';
    scheduleKind: ScheduledTaskScheduleKind;
    scheduleLabel: string;
    timezone?: string;
    nextRunAt?: string;
    lastRunAt?: string;
    createdAt?: string;
    pendingDraft?: {
      runId: string;
      href: string;
      title?: string;
      updatedAt?: string;
    };
  }>;
  emptyState?: {
    title: string;
    description: string;
    recoveryActions: string[];
  };
}

export interface MiraArchivePreviewCardPayload {
  draftEnvelope?: HomeDraftEnvelope;
  draftId?: string;
  targetPath: string;
  targetParentNodeId?: string;
  targetWikiNodeId?: string;
  mode: 'append' | 'create' | 'overwrite_proposal';
  title: string;
  topic?: string;
  markdown?: string;
  sections: Array<{
    heading: string;
    summary: string;
  }>;
  sourceRefs: string[];
  warnings: string[];
  editorMode?: 'compact_card' | 'side_panel';
  editorState?: 'ready' | 'dirty' | 'saving_draft' | 'saved' | 'failed';
  editorUpdatedAt?: string;
  confirmation?: {
    actionId: string;
    workflowRunId?: string;
    workflowStepId?: string;
    confirmationToken?: string;
    draftHash?: string;
    status?: LabOSActionStatus;
    confirmAction?: LabOSActionCardRouteAction;
    cancelAction?: LabOSActionCardRouteAction;
    draftSummary?: string;
    targetLocation?: string;
  };
}

export interface DataQualityCardPayload {
  datasetTitle: string;
  datasetType: 'attachment' | 'analysis_artifact' | 'analysis_selection' | 'table' | 'unknown';
  readiness: 'ready' | 'needs_review' | 'blocked';
  checks: Array<{
    label: string;
    status: 'pass' | 'warning' | 'fail';
    detail: string;
  }>;
  missingFields: string[];
  recommendedActions: string[];
}

export interface WorkflowDecisionCardPayload {
  prompt: string;
  recommendedOptionId?: string;
  options: Array<{
    id: string;
    title: string;
    description: string;
    tradeoffs: string[];
    nextAction: string;
    requiresConfirmation: boolean;
  }>;
}

export interface WorkflowOverviewCardPayload {
  goal: string;
  currentStage: string;
  stages: Array<{
    id: string;
    title: string;
    status: 'pending' | 'active' | 'waiting_confirmation' | 'completed' | 'blocked' | 'failed' | 'cancelled';
    summary?: string;
    kind?: string;
    expectedOutputs: string[];
    requiresConfirmation: boolean;
  }>;
  nextActions: string[];
}

export interface WorkflowStepCardPayload {
  stage: string;
  title: string;
  summary: string;
  inputRefs: string[];
  outputRefs: string[];
  sourceRefs: string[];
  status: string;
}

export interface WorkflowStatusCardPayload {
  runId?: string;
  currentStage: string;
  status: string;
  blockers: string[];
  resumeActions: string[];
}

export interface ClarificationCardPayload {
  question: string;
  reason?: string;
  missingItems: string[];
  recommendedNext?: string;
}

export interface MemoryClarificationCardAction {
  id: 'select_context' | 'ignore_memory';
  label: string;
  candidateId?: string;
}

export interface MemoryClarificationResolution {
  status: 'selected' | 'ignored';
  selectedCandidateId?: string;
  updatedAt?: string;
}

export interface MemoryClarificationCardPayload {
  question: string;
  candidates: MemoryClarificationCandidate[];
  actions: MemoryClarificationCardAction[];
  resolution?: MemoryClarificationResolution;
}

export interface QuietPreferenceNoticeResolution {
  status: 'applied' | 'undone';
  updatedAt?: string;
}

export interface QuietPreferenceNoticeCardPayload {
  markdown: string;
  decision: MemoryQuietDecision;
  actions?: AnswerCardAction[];
  resolution?: QuietPreferenceNoticeResolution;
}

export interface BlockedCardPayload {
  title: string;
  reason: string;
  blockedSources: string[];
  recoveryActions: string[];
}

export interface HandoffCardPayload {
  handoff: ModuleHandoffPayload;
}

export interface MemoryProposalAction {
  id: 'confirm' | 'cancel' | 'edit' | 'reject' | 'snooze' | 'open_console';
  label: string;
}

export interface MemoryProposalMatch {
  id: string;
  statement: string;
  scope: MemoryScope;
  kind: MemoryEntryKind;
  status: MemoryEntryStatus;
  score: number;
  confidence: number;
  evidenceCount: number;
  updatedAt?: string;
  reason?: string;
}

export interface MemoryProposalDraft {
  statement: string;
  scope: MemoryScope;
  kind: MemoryEntryKind;
  confidence: number;
  reason?: string;
  evidence: MemoryEvidenceRef[];
  selectedEntryId?: string;
  rememberedContext?: string;
  projectRefId?: string | null;
  functionId?: string | null;
}

export interface MemoryProposalScopeSuggestion {
  scope: MemoryScope;
  confidence: number;
  requiresElevatedConfirmation: boolean;
  reason?: string;
  projectRefId?: string | null;
  functionId?: string | null;
}

export interface MemoryProposalTriageSummary {
  decision: string;
  riskLevel: MemoryInboxRiskLevel;
  confidence: number;
  summary?: string;
}

export interface MemoryProposalResolution {
  status: 'confirmed' | 'cancelled' | 'rejected' | 'snoozed' | 'opened_in_console';
  entryId?: string;
  label?: string;
  updatedAt?: string;
}

export interface MemoryProposalCardPayload {
  mode: 'remember' | 'forget';
  title: string;
  summary: string;
  proposal: MemoryProposalDraft;
  matches: MemoryProposalMatch[];
  actions: MemoryProposalAction[];
  entryId?: string;
  sourceSummary?: MemoryCandidateSourceSummary;
  editable?: boolean;
  scopeSuggestion?: MemoryProposalScopeSuggestion;
  triage?: MemoryProposalTriageSummary;
  resolution?: MemoryProposalResolution;
}

export type HomeAssistantDisplayPayload =
  | AnswerCardPayload
  | InternalWikiSearchCardPayload
  | ResearchAnswer
  | ResearchRenderPayload
  | DataInterpretationCardPayload
  | ExperimentPlanCardPayload
  | CandidateRankingCardPayload
  | ValidationDraftCardPayload
  | EvidenceProposeCardPayload
  | TrackingSubscriptionPreviewCardPayload
  | TrackingSubscriptionListCardPayload
  | TrackingSubscriptionDeleteConfirmCardPayload
  | ScheduledTaskCreatePreviewCardPayload
  | ScheduledTaskDeleteConfirmCardPayload
  | ScheduledTaskListCardPayload
  | PresentationDraftCardPayload
  | MiraArchivePreviewCardPayload
  | DataQualityCardPayload
  | WorkflowDecisionCardPayload
  | WorkflowOverviewCardPayload
  | WorkflowStepCardPayload
  | WorkflowStatusCardPayload
  | MemoryProposalCardPayload
  | MemoryClarificationCardPayload
  | QuietPreferenceNoticeCardPayload
  | LabOSActionCardPayload
  | ClarificationCardPayload
  | BlockedCardPayload
  | HandoffCardPayload;

export interface HomeAssistantDisplay {
  schemaVersion: 'home-display.v1';
  intentClass: HomeIntentClass;
  cardType: HomeAssistantCardType;
  title: string;
  summary?: string;
  payload: HomeAssistantDisplayPayload;
  state: HomeAssistantDisplayState;
  sourceSummary?: HomeSourceSummary;
  actionSummary?: HomeActionSummary;
  validation: HomeDisplayValidationSummary;
  provenance?: HomeCardProvenance;
}

export type HomeAttachmentKind = 'txt' | 'image' | 'pdf' | 'office';

export type HomeUIEvent =
  | { type: 'display_start'; display: HomeAssistantDisplay }
  | { type: 'display_patch'; patch: Partial<HomeAssistantDisplay> }
  | { type: 'display_done'; display: HomeAssistantDisplay }
  | { type: 'workflow_progress'; payload: unknown }
  | { type: 'sources'; payload: HomeDisplayCitation[] }
  | { type: 'attachment_refs'; payload: Array<{ id: string; name: string; mimeType: string; kind: HomeAttachmentKind }> }
  | { type: 'artifact_refs'; payload: Array<{ id: string; type: string; name: string; url: string }> }
  | { type: 'error'; error: { code: string; message: string } };

type HomeAttachmentRefEventPayload = Extract<HomeUIEvent, { type: 'attachment_refs' }>['payload'];
type HomeArtifactRefEventPayload = Extract<HomeUIEvent, { type: 'artifact_refs' }>['payload'];

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function asString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback;
}

function asOptionalString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value : undefined;
}

function asBoolean(value: unknown, fallback = false) {
  return typeof value === 'boolean' ? value : fallback;
}

function asNumber(value: unknown, fallback = 0) {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function asPercent(value: unknown, fallback = 0) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return fallback;
  if (value >= 0 && value <= 1) return Math.max(0, Math.min(100, Math.round(value * 100)));
  return Math.max(0, Math.min(100, Math.round(value)));
}

function asStringArray(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    : [];
}

function asOptionalIsoString(value: unknown) {
  if (typeof value === 'string' && value.trim()) return value;
  if (value instanceof Date && Number.isFinite(value.getTime())) return value.toISOString();
  return undefined;
}

function asEnumValue<T extends readonly string[]>(
  value: unknown,
  allowed: T,
  fallback: T[number],
): T[number] {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value)
    ? (value as T[number])
    : fallback;
}

function normalizeValidationSummary(value: unknown): HomeDisplayValidationSummary {
  const record = asRecord(value) || {};
  return {
    schemaValid: asBoolean(record.schemaValid, true),
    provenanceValid: asBoolean(record.provenanceValid, true),
    permissionValid: asBoolean(record.permissionValid, true),
    warnings: asStringArray(record.warnings),
  };
}

function normalizeSourceSummary(value: unknown): HomeSourceSummary | undefined {
  const record = asRecord(value);
  if (!record) return undefined;

  const usedSources: HomeSourceSummary['usedSources'] = [];
  for (const item of Array.isArray(record.usedSources) ? record.usedSources : []) {
    const source = asRecord(item);
    if (!source) continue;
    const id = asString(source.id).trim();
    const type = asString(source.type).trim();
    const title = asString(source.title).trim();
    if (!id || !type || !title) continue;
    const summary = asOptionalString(source.summary);
    usedSources.push(summary ? { id, type, title, summary } : { id, type, title });
  }

  const blockedSources: HomeSourceSummary['blockedSources'] = [];
  for (const item of Array.isArray(record.blockedSources) ? record.blockedSources : []) {
    const source = asRecord(item);
    if (!source) continue;
    const type = asString(source.type).trim();
    const reason = asString(source.reason).trim();
    if (!type || !reason) continue;
    const id = asOptionalString(source.id);
    const title = asOptionalString(source.title);
    blockedSources.push({
      ...(id ? { id } : {}),
      type,
      ...(title ? { title } : {}),
      reason,
    });
  }

  return {
    usedSources,
    blockedSources,
    citationCount:
      typeof record.citationCount === 'number' && Number.isFinite(record.citationCount)
        ? record.citationCount
        : 0,
  };
}

function normalizeActionSummary(value: unknown): HomeActionSummary | undefined {
  const record = asRecord(value);
  if (!record) return undefined;

  return {
    requiresConfirmation: asBoolean(record.requiresConfirmation),
    allowedActions: asStringArray(record.allowedActions),
    blockedActions: asStringArray(record.blockedActions),
    nextActionLabel: asOptionalString(record.nextActionLabel),
  };
}

function normalizeProvenance(value: unknown): HomeCardProvenance | undefined {
  const record = asRecord(value);
  if (!record) return undefined;

  const sourceRefs: HomeCardProvenance['sourceRefs'] = [];
  for (const item of Array.isArray(record.sourceRefs) ? record.sourceRefs : []) {
    const ref = asRecord(item);
    if (!ref) continue;
    const type = asString(ref.type).trim();
    const id = asString(ref.id).trim();
    if (!type || !id) continue;
    const title = asOptionalString(ref.title);
    sourceRefs.push(title ? { type, id, title } : { type, id });
  }

  const literatureResultRefs: NonNullable<HomeCardProvenance['literatureResultRefs']> = [];
  for (const item of Array.isArray(record.literatureResultRefs) ? record.literatureResultRefs : []) {
    const ref = asRecord(item);
    if (!ref) continue;
    const pmid = asOptionalString(ref.pmid);
    const doi = asOptionalString(ref.doi);
    const url = asOptionalString(ref.url);
    const titleHash = asOptionalString(ref.titleHash);
    if (!pmid && !doi && !url && !titleHash) continue;
    literatureResultRefs.push({
      ...(pmid ? { pmid } : {}),
      ...(doi ? { doi } : {}),
      ...(url ? { url } : {}),
      ...(titleHash ? { titleHash } : {}),
    });
  }

  return {
    sourceRefs,
    toolRunIds: asStringArray(record.toolRunIds),
    citationIds: asStringArray(record.citationIds),
    ...(literatureResultRefs.length ? { literatureResultRefs } : {}),
  };
}

function normalizeAnswerPayload(value: unknown): AnswerCardPayload {
  const record = asRecord(value);
  const actions = Array.isArray(record?.actions)
    ? record.actions
        .map((item): AnswerCardAction | null => {
          const action = asRecord(item);
          if (!action) return null;
          const id = asString(action.id).trim();
          const label = asString(action.label).trim();
          if (!id || !label) return null;
          const href = asOptionalString(action.href);
          return {
            id,
            label,
            ...(href ? { href } : {}),
          };
        })
        .filter((item): item is AnswerCardAction => Boolean(item))
    : [];
  return {
    markdown: record ? asString(record.markdown || record.content) : asString(value),
    ...(actions.length > 0 ? { actions } : {}),
  };
}

function normalizeInternalWikiSearchEmptyState(value: unknown): InternalWikiSearchEmptyState | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const title = asOptionalString(record.title) || '未找到可用结果';
  const description =
    asOptionalString(record.description || record.message) || '当前过滤条件下没有检索到内部文档。';
  const recoveryActions = asStringArray(record.recoveryActions);
  return {
    title,
    description,
    recoveryActions:
      recoveryActions.length > 0
        ? recoveryActions
        : ['放宽时间范围', '改用更宽泛的关键词', '去掉作者或类型限制'],
  };
}

function normalizeInternalWikiSearchPayload(value: unknown): InternalWikiSearchCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;

  const results: InternalWikiSearchCardPayload['results'] = [];
  for (const item of Array.isArray(record.results) ? record.results : []) {
    const result = asRecord(item);
    if (!result) continue;
    const id = asString(result.id || result.key).trim();
    const title = asString(result.title).trim();
    const snippet = asString(result.snippet || result.summary).replace(/\s+/g, ' ').trim();
    if (!id || !title) continue;
    const href = asOptionalString(result.href);
    const rawPages = Array.isArray(result.pages) ? result.pages : [];
    const pages = rawPages
      .map((page) => (typeof page === 'number' && Number.isFinite(page) ? Math.trunc(page) : null))
      .filter((page): page is number => page !== null && page > 0);
    results.push({
      id,
      title,
      ...(asOptionalString(result.sourceId) ? { sourceId: asOptionalString(result.sourceId) } : {}),
      ...(href ? { href } : {}),
      snippet,
      pages: Array.from(new Set(pages)).sort((left, right) => left - right),
      sourceType: asEnumValue(result.sourceType, ['wiki', 'document'] as const, 'wiki'),
      ...(asOptionalString(result.createdByName) ? { createdByName: asOptionalString(result.createdByName) } : {}),
      ...(asOptionalString(result.createdAt) ? { createdAt: asOptionalString(result.createdAt) } : {}),
      ...(asOptionalString(result.updatedAt) ? { updatedAt: asOptionalString(result.updatedAt) } : {}),
      ...(normalizeRagResultExperimentTime(result.experimentTime)
        ? { experimentTime: normalizeRagResultExperimentTime(result.experimentTime) }
        : {}),
      ...(asOptionalString(result.matchReason) ? { matchReason: asOptionalString(result.matchReason) } : {}),
      ...(asEnumValue(
        result.documentKind,
        [
          'experiment_note',
          'protocol',
          'literature_note',
          'plasmid_record',
          'cell_line_record',
          'antibody_record',
          'troubleshooting',
          'general_mira_doc',
          'unknown',
        ] as const,
        'unknown',
      )
        ? {
            documentKind: asEnumValue(
              result.documentKind,
              [
                'experiment_note',
                'protocol',
                'literature_note',
                'plasmid_record',
                'cell_line_record',
                'antibody_record',
                'troubleshooting',
                'general_mira_doc',
                'unknown',
              ] as const,
              'unknown',
            ),
        }
        : {}),
    });
  }

  const emptyState = normalizeInternalWikiSearchEmptyState(record.emptyState);
  if (results.length === 0 && !emptyState) return null;

  return {
    query: asOptionalString(record.query),
    answerMarkdown: asOptionalString(record.answerMarkdown),
    answerReferences: Array.isArray(record.answerReferences)
      ? record.answerReferences
          .map((item) => {
            const reference = asRecord(item);
            if (!reference) return null;
            const sourceId = asString(reference.sourceId).trim();
            const label = asString(reference.label).trim();
            if (!sourceId || !label) return null;
            return { sourceId, label };
          })
          .filter((item): item is { sourceId: string; label: string } => Boolean(item))
      : undefined,
    filterSummary: normalizeHomeRagFilterSummary(record.filterSummary),
    ...(emptyState ? { emptyState } : {}),
    results,
  };
}

function normalizeClarificationPayload(value: unknown): ClarificationCardPayload {
  const record = asRecord(value) || {};
  return {
    question: asString(record.question, '需要补充信息').trim() || '需要补充信息',
    reason: asOptionalString(record.reason),
    missingItems: asStringArray(record.missingItems),
    recommendedNext: asOptionalString(record.recommendedNext),
  };
}

function normalizeMemoryClarificationAction(value: unknown): MemoryClarificationCardAction | null {
  const record = asRecord(value);
  if (!record) return null;
  const id = asOptionalString(record.id);
  const label = asOptionalString(record.label);
  if (id !== 'select_context' && id !== 'ignore_memory') return null;
  if (!label) return null;
  return {
    id,
    label,
    ...(asOptionalString(record.candidateId) ? { candidateId: asOptionalString(record.candidateId) } : {}),
  };
}

function normalizeMemoryClarificationResolution(value: unknown): MemoryClarificationResolution | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const status = asOptionalString(record.status);
  if (status !== 'selected' && status !== 'ignored') return undefined;
  return {
    status,
    ...(asOptionalString(record.selectedCandidateId)
      ? { selectedCandidateId: asOptionalString(record.selectedCandidateId) }
      : {}),
    ...(asOptionalString(record.updatedAt) ? { updatedAt: asOptionalString(record.updatedAt) } : {}),
  };
}

function normalizeMemoryClarificationPayload(value: unknown): MemoryClarificationCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const question = asString(record.question).trim();
  if (!question) return null;
  const candidates = (Array.isArray(record.candidates) ? record.candidates : [])
    .map(normalizeMemoryClarificationCandidate)
    .filter((item): item is MemoryClarificationCandidate => Boolean(item));
  if (candidates.length === 0) return null;
  const actions = (Array.isArray(record.actions) ? record.actions : [])
    .map(normalizeMemoryClarificationAction)
    .filter((item): item is MemoryClarificationCardAction => Boolean(item));
  const normalizedActions =
    actions.length > 0
      ? actions
      : [
          ...candidates.map((candidate) => ({
            id: 'select_context' as const,
            label: `选择 ${candidate.title}`,
            candidateId: candidate.id,
          })),
          { id: 'ignore_memory' as const, label: '忽略这些记忆' },
        ];
  return {
    question,
    candidates,
    actions: normalizedActions,
    ...(normalizeMemoryClarificationResolution(record.resolution)
      ? { resolution: normalizeMemoryClarificationResolution(record.resolution) }
      : {}),
  };
}

function normalizeQuietPreferenceNoticeResolution(
  value: unknown,
): QuietPreferenceNoticeResolution | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const status = asOptionalString(record.status);
  if (status !== 'applied' && status !== 'undone') return undefined;
  return {
    status,
    ...(asOptionalString(record.updatedAt) ? { updatedAt: asOptionalString(record.updatedAt) } : {}),
  };
}

function normalizeQuietPreferenceNoticePayload(value: unknown): QuietPreferenceNoticeCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const markdown = asOptionalString(record.markdown || record.content);
  const decision = normalizeMemoryQuietDecision(record.decision);
  if (!markdown || !decision) return null;
  const actions = normalizeAnswerPayload(record).actions;
  return {
    markdown,
    decision,
    ...(actions?.length ? { actions } : {}),
    ...(normalizeQuietPreferenceNoticeResolution(record.resolution)
      ? { resolution: normalizeQuietPreferenceNoticeResolution(record.resolution) }
      : {}),
  };
}

const MEMORY_EVIDENCE_SOURCE_TYPES = [
  'message',
  'run_event',
  'mira_node',
  'analysis_artifact',
  'tracking_signal',
  'manual',
] as const;

const MEMORY_ENTRY_KINDS = [
  'fact',
  'preference_candidate',
  'decision_principle',
  'workflow_pattern',
] as const;

const MEMORY_SCOPES = ['user', 'lab', 'project', 'function'] as const;
const MEMORY_ENTRY_STATUSES = ['pending', 'confirmed', 'rejected', 'archived'] as const;
const MEMORY_CANDIDATE_SOURCE_TYPES = ['user_explicit', 'agent_candidate', 'workflow_closeout', 'system', 'manual'] as const;
const MEMORY_INBOX_RISK_LEVELS = ['none', 'duplicate', 'replace', 'conflict', 'unknown'] as const;
const MEMORY_PROPOSAL_ACTION_IDS = ['confirm', 'cancel', 'edit', 'reject', 'snooze', 'open_console'] as const;

function normalizeMemoryEvidencePayload(value: unknown): MemoryEvidenceRef[] {
  const evidence: MemoryEvidenceRef[] = [];
  for (const item of Array.isArray(value) ? value : []) {
    const record = asRecord(item);
    if (!record) continue;
    const sourceType = asEnumValue(record.sourceType, MEMORY_EVIDENCE_SOURCE_TYPES, 'manual');
    const summary = asString(record.summary).trim();
    if (!summary) continue;
    evidence.push({
      sourceType,
      ...(asOptionalString(record.sourceId) ? { sourceId: asOptionalString(record.sourceId) } : {}),
      summary,
      ...(asOptionalString(record.sourceTitle) ? { sourceTitle: asOptionalString(record.sourceTitle) } : {}),
      ...(asOptionalString(record.sourceUrl) ? { sourceUrl: asOptionalString(record.sourceUrl) } : {}),
      ...(asOptionalString(record.createdAt) ? { createdAt: asOptionalString(record.createdAt) } : {}),
    });
  }
  return evidence.slice(0, 20);
}

function normalizeMemoryProposalMatch(value: unknown): MemoryProposalMatch | null {
  const record = asRecord(value);
  if (!record) return null;
  const id = asString(record.id).trim();
  const statement = asString(record.statement).trim();
  if (!id || !statement) return null;
  return {
    id,
    statement,
    scope: asEnumValue(record.scope, MEMORY_SCOPES, 'user'),
    kind: asEnumValue(record.kind, MEMORY_ENTRY_KINDS, 'fact'),
    status: asEnumValue(record.status, MEMORY_ENTRY_STATUSES, 'pending'),
    score: asPercent(record.score, asPercent(record.confidence, 0)),
    confidence: asPercent(record.confidence, 0),
    evidenceCount:
      typeof record.evidenceCount === 'number' && Number.isFinite(record.evidenceCount)
        ? Math.max(0, Math.trunc(record.evidenceCount))
        : 0,
    ...(asOptionalString(record.updatedAt) ? { updatedAt: asOptionalString(record.updatedAt) } : {}),
    ...(asOptionalString(record.reason) ? { reason: asOptionalString(record.reason) } : {}),
  };
}

function normalizeMemoryProposalActions(value: unknown, mode: MemoryProposalCardPayload['mode']) {
  const fallback: MemoryProposalAction[] = [
    { id: 'confirm', label: mode === 'remember' ? '确认记住' : '确认忘记' },
    { id: 'cancel', label: '取消' },
    { id: 'open_console', label: '打开 Memory Console' },
  ];
  if (!Array.isArray(value)) return fallback;
  const actions = value
    .map((item): MemoryProposalAction | null => {
      const record = asRecord(item);
      if (!record) return null;
      const rawId = asString(record.id).trim();
      if (!rawId || !(MEMORY_PROPOSAL_ACTION_IDS as readonly string[]).includes(rawId)) return null;
      const label = asString(record.label).trim();
      if (!label) return null;
      return { id: rawId as MemoryProposalAction['id'], label };
    })
    .filter((item): item is MemoryProposalAction => Boolean(item));
  return actions.length ? actions : fallback;
}

function normalizeMemoryCandidateSourceSummaryPayload(value: unknown): MemoryCandidateSourceSummary | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const source = asEnumValue(record.source, MEMORY_CANDIDATE_SOURCE_TYPES, 'manual');
  const evidenceSourceType = asEnumValue(record.evidenceSourceType, MEMORY_EVIDENCE_SOURCE_TYPES, 'manual');
  return {
    source,
    label: asOptionalString(record.label) || source,
    evidenceSourceType,
    ...(asOptionalString(record.sourceId) ? { sourceId: asOptionalString(record.sourceId) } : {}),
    ...(asOptionalString(record.title) ? { title: asOptionalString(record.title) } : {}),
    ...(asOptionalString(record.summary) ? { summary: asOptionalString(record.summary) } : {}),
    ...(asOptionalString(record.createdAt) ? { createdAt: asOptionalString(record.createdAt) } : {}),
    ...(asOptionalString(record.href) ? { href: asOptionalString(record.href) } : {}),
  };
}

function normalizeMemoryProposalScopeSuggestion(value: unknown): MemoryProposalScopeSuggestion | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  return {
    scope: asEnumValue(record.scope, MEMORY_SCOPES, 'user'),
    confidence: asPercent(record.confidence, 0),
    requiresElevatedConfirmation: record.requiresElevatedConfirmation === true,
    ...(asOptionalString(record.reason) ? { reason: asOptionalString(record.reason) } : {}),
    ...(asOptionalString(record.projectRefId) ? { projectRefId: asOptionalString(record.projectRefId) } : {}),
    ...(asOptionalString(record.functionId) ? { functionId: asOptionalString(record.functionId) } : {}),
  };
}

function normalizeMemoryProposalTriageSummary(value: unknown): MemoryProposalTriageSummary | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const decision = asOptionalString(record.decision);
  if (!decision) return undefined;
  return {
    decision,
    riskLevel: asEnumValue(record.riskLevel || record.level, MEMORY_INBOX_RISK_LEVELS, 'unknown'),
    confidence: asPercent(record.confidence, 0),
    ...(asOptionalString(record.summary) ? { summary: asOptionalString(record.summary) } : {}),
  };
}

function normalizeMemoryProposalResolution(value: unknown): MemoryProposalResolution | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const status = asOptionalString(record.status);
  if (
    status !== 'confirmed' &&
    status !== 'cancelled' &&
    status !== 'rejected' &&
    status !== 'snoozed' &&
    status !== 'opened_in_console'
  ) {
    return undefined;
  }
  return {
    status,
    ...(asOptionalString(record.entryId) ? { entryId: asOptionalString(record.entryId) } : {}),
    ...(asOptionalString(record.label) ? { label: asOptionalString(record.label) } : {}),
    ...(asOptionalString(record.updatedAt) ? { updatedAt: asOptionalString(record.updatedAt) } : {}),
  };
}

function normalizeMemoryProposalPayload(value: unknown): MemoryProposalCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const mode = asEnumValue(record.mode, ['remember', 'forget'] as const, 'remember');
  const proposalRecord: Record<string, unknown> = asRecord(record.proposal) || {};
  const matches = (Array.isArray(record.matches) ? record.matches : [])
    .map(normalizeMemoryProposalMatch)
    .filter((item): item is MemoryProposalMatch => Boolean(item));
  const selectedEntryId =
    asOptionalString(proposalRecord.selectedEntryId) ||
    (mode === 'forget' ? matches[0]?.id : undefined);
  const matchedStatement =
    selectedEntryId
      ? matches.find((item) => item.id === selectedEntryId)?.statement
      : matches[0]?.statement;
  const statement =
    (asOptionalString(proposalRecord.statement) || asOptionalString(record.statement) || matchedStatement || '')
      .trim();
  if (!statement) return null;

  const summary =
    (asOptionalString(record.summary) || asOptionalString(proposalRecord.reason) || '')
      .trim() ||
    (mode === 'remember'
      ? '确认后会创建一条待确认长期记忆。'
      : selectedEntryId
        ? '确认后会将所选长期记忆归档停用。'
        : '请选择一条要停用的长期记忆。');

  return {
    mode,
    title:
      (asOptionalString(record.title) || '').trim() ||
      (mode === 'remember' ? '记住这条长期记忆' : '忘记这条长期记忆'),
    summary,
    proposal: {
      statement,
      scope: asEnumValue(proposalRecord.scope, MEMORY_SCOPES, 'user'),
      kind: asEnumValue(
        proposalRecord.kind,
        MEMORY_ENTRY_KINDS,
        mode === 'remember' ? 'decision_principle' : 'fact',
      ),
      confidence: asPercent(proposalRecord.confidence, mode === 'remember' ? 80 : 60),
      ...(asOptionalString(proposalRecord.reason) ? { reason: asOptionalString(proposalRecord.reason) } : {}),
      evidence: normalizeMemoryEvidencePayload(proposalRecord.evidence),
      ...(selectedEntryId ? { selectedEntryId } : {}),
      ...(asOptionalString(proposalRecord.rememberedContext)
        ? { rememberedContext: asOptionalString(proposalRecord.rememberedContext) }
        : {}),
      ...(asOptionalString(proposalRecord.projectRefId)
        ? { projectRefId: asOptionalString(proposalRecord.projectRefId) }
        : {}),
      ...(asOptionalString(proposalRecord.functionId)
        ? { functionId: asOptionalString(proposalRecord.functionId) }
        : {}),
    },
    matches,
    actions: normalizeMemoryProposalActions(record.actions, mode),
    ...(asOptionalString(record.entryId) ? { entryId: asOptionalString(record.entryId) } : {}),
    ...(normalizeMemoryCandidateSourceSummaryPayload(record.sourceSummary)
      ? { sourceSummary: normalizeMemoryCandidateSourceSummaryPayload(record.sourceSummary) }
      : {}),
    ...(typeof record.editable === 'boolean' ? { editable: record.editable } : {}),
    ...(normalizeMemoryProposalScopeSuggestion(record.scopeSuggestion)
      ? { scopeSuggestion: normalizeMemoryProposalScopeSuggestion(record.scopeSuggestion) }
      : {}),
    ...(normalizeMemoryProposalTriageSummary(record.triage)
      ? { triage: normalizeMemoryProposalTriageSummary(record.triage) }
      : {}),
    ...(normalizeMemoryProposalResolution(record.resolution)
      ? { resolution: normalizeMemoryProposalResolution(record.resolution) }
      : {}),
  };
}

function normalizeBlockedPayload(value: unknown): BlockedCardPayload {
  const record = asRecord(value) || {};
  return {
    title: asString(record.title, '本轮无法继续').trim() || '本轮无法继续',
    reason: asString(record.reason, '请求被策略或权限边界阻断。').trim() || '请求被策略或权限边界阻断。',
    blockedSources: asStringArray(record.blockedSources),
    recoveryActions: asStringArray(record.recoveryActions),
  };
}

function normalizeDataInterpretationPayload(value: unknown): DataInterpretationCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const inputTitle = asString(record.inputTitle).trim();
  if (!inputTitle) return null;
  return {
    inputTitle,
    inputType: asEnumValue(
      record.inputType,
      ['attachment', 'analysis_artifact', 'analysis_selection', 'table', 'unknown'] as const,
      'unknown',
    ),
    observations: asStringArray(record.observations),
    caveats: asStringArray(record.caveats),
    nextSteps: asStringArray(record.nextSteps),
    bodyMarkdown: asOptionalString(record.bodyMarkdown),
  };
}

function normalizeExperimentPlanPayload(value: unknown): ExperimentPlanCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const goal = asString(record.goal).trim();
  if (!goal) return null;
  return {
    goal,
    readouts: asStringArray(record.readouts),
    samplesAndControls: asStringArray(record.samplesAndControls),
    steps: asStringArray(record.steps),
    risks: asStringArray(record.risks),
    successCriteria: asStringArray(record.successCriteria),
  };
}

function normalizeCandidateRankingPayload(value: unknown): CandidateRankingCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const question = asString(record.question).trim();
  if (!question) return null;
  const candidates: CandidateRankingCardPayload['candidates'] = [];
  for (const item of Array.isArray(record.candidates) ? record.candidates : []) {
    const candidate = asRecord(item);
    if (!candidate) continue;
    const id = asString(candidate.id).trim();
    const title = asString(candidate.title).trim();
    if (!id || !title) continue;
    candidates.push({
      id,
      title,
      rank: Math.max(1, Math.trunc(asNumber(candidate.rank, candidates.length + 1))),
      confidence: asEnumValue(candidate.confidence, ['low', 'medium', 'high'] as const, 'medium'),
      support: asStringArray(candidate.support),
      against: asStringArray(candidate.against),
      nextStep: asString(candidate.nextStep, '继续补充证据').trim() || '继续补充证据',
    });
  }
  if (candidates.length === 0) return null;
  return {
    question,
    candidates: candidates.sort((left, right) => left.rank - right.rank),
    recommendation: asOptionalString(record.recommendation),
  };
}

function normalizeValidationDraftPayload(value: unknown): ValidationDraftCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const packageTitle = asString(record.packageTitle || record.title).trim();
  const hypothesis = asString(record.hypothesis).trim();
  if (!packageTitle || !hypothesis) return null;
  return {
    packageTitle,
    hypothesis,
    readouts: asStringArray(record.readouts),
    samplesAndControls: asStringArray(record.samplesAndControls),
    acceptanceCriteria: asStringArray(record.acceptanceCriteria),
    risks: asStringArray(record.risks),
    targetModule: asOptionalString(record.targetModule),
    confirmationRequired: asBoolean(record.confirmationRequired, true),
  };
}

function normalizeEvidenceProposePayload(value: unknown): EvidenceProposeCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const claim = asString(record.claim).trim();
  if (!claim) return null;
  return {
    claim,
    confidence: asEnumValue(record.confidence, ['low', 'medium', 'high'] as const, 'medium'),
    supportingEvidence: asStringArray(record.supportingEvidence),
    opposingEvidence: asStringArray(record.opposingEvidence),
    gaps: asStringArray(record.gaps),
    clueOnly: asBoolean(record.clueOnly),
    targetBoard: asOptionalString(record.targetBoard),
  };
}

function normalizeTrackingSubscriptionPreviewConfirmation(
  value: unknown,
): TrackingSubscriptionPreviewCardPayload['confirmation'] {
  const record = asRecord(value);
  if (!record) return undefined;
  const status = asOptionalString(record.status);
  if (status !== 'pending' && status !== 'completed' && status !== 'cancelled' && status !== 'failed') {
    return undefined;
  }
  return {
    status,
    ...(asOptionalString(record.subscriptionId) ? { subscriptionId: asOptionalString(record.subscriptionId) } : {}),
    ...(asOptionalString(record.error) ? { error: asOptionalString(record.error) } : {}),
  };
}

function normalizeTrackingSubscriptionPreviewPayload(value: unknown): TrackingSubscriptionPreviewCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const sourceName = asString(record.sourceName || record.title).trim();
  if (!sourceName) return null;
  const lookbackDays =
    typeof record.lookbackDays === 'number' && Number.isFinite(record.lookbackDays)
      ? Math.max(1, Math.min(365, Math.trunc(record.lookbackDays)))
      : 30;
  const confirmation = normalizeTrackingSubscriptionPreviewConfirmation(record.confirmation);
  const draftEnvelope = normalizeHomeDraftEnvelope(record.draftEnvelope);
  const queryModeRaw = asOptionalString(record.queryMode);
  const queryMode =
    queryModeRaw === 'and' || queryModeRaw === 'or' || queryModeRaw === 'advanced'
      ? queryModeRaw
      : undefined;
  return {
    ...(draftEnvelope ? { draftEnvelope } : {}),
    sourceName,
    sourceType: asEnumValue(record.sourceType, ['pubmed', 'biorxiv', 'twitter', 'web', 'lab-tracking'] as const, 'pubmed'),
    ...(asOptionalString(record.summary) ? { summary: asOptionalString(record.summary) } : {}),
    keywords: asStringArray(record.keywords),
    ...(queryMode ? { queryMode } : {}),
    ...(asOptionalString(record.advancedQuery) ? { advancedQuery: asOptionalString(record.advancedQuery) } : {}),
    ...(asOptionalString(record.url) ? { url: asOptionalString(record.url) } : {}),
    frequency: asEnumValue(record.frequency, ['hourly', 'daily', 'weekly'] as const, 'daily'),
    lookbackDays,
    projectNodeIds: asStringArray(record.projectNodeIds),
    ...(confirmation ? { confirmation } : {}),
  };
}

function normalizeTrackingSubscriptionDeleteConfirmPayload(
  value: unknown,
): TrackingSubscriptionDeleteConfirmCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const subscriptionId = asString(record.subscriptionId || record.id).trim();
  const sourceName = asString(record.sourceName || record.name || record.title).trim();
  if (!subscriptionId || !sourceName) return null;
  const frequencyRaw = asOptionalString(record.frequency);
  const frequency =
    frequencyRaw === 'hourly' || frequencyRaw === 'daily' || frequencyRaw === 'weekly'
      ? frequencyRaw
      : undefined;
  const lookbackDays =
    typeof record.lookbackDays === 'number' && Number.isFinite(record.lookbackDays)
      ? Math.max(1, Math.min(365, Math.trunc(record.lookbackDays)))
      : undefined;
  const confirmation = normalizeTrackingSubscriptionPreviewConfirmation(record.confirmation);
  const draftEnvelope = normalizeHomeDraftEnvelope(record.draftEnvelope);

  return {
    ...(draftEnvelope ? { draftEnvelope } : {}),
    subscriptionId,
    sourceName,
    sourceType: asEnumValue(record.sourceType || record.type, ['pubmed', 'biorxiv', 'twitter', 'web', 'lab-tracking'] as const, 'pubmed'),
    enabled: asBoolean(record.enabled, true),
    keywords: asStringArray(record.keywords),
    ...(asOptionalString(record.url) ? { url: asOptionalString(record.url) } : {}),
    ...(frequency ? { frequency } : {}),
    ...(lookbackDays ? { lookbackDays } : {}),
    ...(asOptionalIsoString(record.lastFetchAt) ? { lastFetchAt: asOptionalIsoString(record.lastFetchAt) } : {}),
    ...(asOptionalIsoString(record.createdAt) ? { createdAt: asOptionalIsoString(record.createdAt) } : {}),
    totalItems: Math.max(0, Math.trunc(asNumber(record.totalItems, 0))),
    unreadItems: Math.max(0, Math.trunc(asNumber(record.unreadItems, 0))),
    savedItems: Math.max(0, Math.trunc(asNumber(record.savedItems, 0))),
    due: asBoolean(record.due),
    ...(confirmation ? { confirmation } : {}),
  };
}

function normalizeTrackingSubscriptionListItem(
  value: unknown,
): TrackingSubscriptionListCardPayload['items'][number] | null {
  const record = asRecord(value);
  if (!record) return null;
  const config = asRecord(record.config) || {};
  const id = asString(record.id).trim();
  if (!id) return null;
  const sourceType = asEnumValue(
    record.sourceType || record.type,
    ['pubmed', 'biorxiv', 'twitter', 'web', 'lab-tracking'] as const,
    'web',
  );
  const keywords = asStringArray(record.keywords).length > 0
    ? asStringArray(record.keywords)
    : asStringArray(config.keywords);
  const url = asOptionalString(record.url) || asOptionalString(config.url);
  const frequencyRaw = asOptionalString(record.frequency) || asOptionalString(config.frequency);
  const frequency =
    frequencyRaw === 'hourly' || frequencyRaw === 'daily' || frequencyRaw === 'weekly'
      ? frequencyRaw
      : undefined;
  const lookbackValue = record.lookbackDays ?? config.lookbackDays;
  const lookbackDays =
    typeof lookbackValue === 'number' && Number.isFinite(lookbackValue)
      ? Math.max(1, Math.min(365, Math.trunc(lookbackValue)))
      : undefined;
  const name =
    asString(record.name).trim() ||
    [sourceType, keywords[0] || url || id.slice(0, 8)].filter(Boolean).join(' · ');

  return {
    id,
    name,
    ...(asOptionalString(record.matchReason) ? { matchReason: asOptionalString(record.matchReason) } : {}),
    sourceType,
    enabled: asBoolean(record.enabled, true),
    keywords,
    ...(url ? { url } : {}),
    ...(frequency ? { frequency } : {}),
    ...(lookbackDays ? { lookbackDays } : {}),
    ...(asOptionalIsoString(record.lastFetchAt) ? { lastFetchAt: asOptionalIsoString(record.lastFetchAt) } : {}),
    ...(asOptionalIsoString(record.createdAt) ? { createdAt: asOptionalIsoString(record.createdAt) } : {}),
    totalItems: Math.max(0, Math.trunc(asNumber(record.totalItems, 0))),
    unreadItems: Math.max(0, Math.trunc(asNumber(record.unreadItems, 0))),
    savedItems: Math.max(0, Math.trunc(asNumber(record.savedItems, 0))),
    due: asBoolean(record.due),
  };
}

function normalizeTrackingSubscriptionListPayload(value: unknown): TrackingSubscriptionListCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const items = (Array.isArray(record.items) ? record.items : [])
    .map(normalizeTrackingSubscriptionListItem)
    .filter((item): item is TrackingSubscriptionListCardPayload['items'][number] => Boolean(item));
  const total = Math.max(0, Math.trunc(asNumber(record.total, items.length)));
  const enabledTotal = Math.max(0, Math.trunc(asNumber(record.enabledTotal, items.filter((item) => item.enabled).length)));
  const emptyStateRecord = asRecord(record.emptyState);
  const emptyTitle = asString(emptyStateRecord?.title).trim();
  const emptyDescription = asString(emptyStateRecord?.description).trim();
  const emptyState =
    emptyTitle && emptyDescription
      ? {
          title: emptyTitle,
          description: emptyDescription,
          recoveryActions: asStringArray(emptyStateRecord?.recoveryActions),
        }
      : undefined;

  return {
    ...(asOptionalString(record.title) ? { title: asOptionalString(record.title) } : {}),
    ...(asOptionalString(record.summary) ? { summary: asOptionalString(record.summary) } : {}),
    ...(record.mode === 'list' || record.mode === 'delete_candidates' ? { mode: record.mode } : {}),
    total,
    enabledTotal,
    items,
    ...(emptyState ? { emptyState } : {}),
  };
}

function normalizeScheduledTaskResolution(value: unknown): ScheduledTaskResolution | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const status = asOptionalString(record.status);
  if (status !== 'pending' && status !== 'completed' && status !== 'cancelled' && status !== 'failed') {
    return undefined;
  }
  return {
    status,
    ...(asOptionalString(record.taskId) ? { taskId: asOptionalString(record.taskId) } : {}),
    ...(asOptionalString(record.error) ? { error: asOptionalString(record.error) } : {}),
  };
}

function normalizeScheduledTaskScheduleConfig(value: unknown): ScheduledTaskScheduleConfig {
  const record = asRecord(value) || {};
  const time = asOptionalString(record.time) || asOptionalString(record.timeOfDay);
  const weekday = Math.trunc(asNumber(record.weekday, -1));
  const dayOfMonth = Math.trunc(asNumber(record.dayOfMonth, 0));
  return {
    ...(time ? { time } : {}),
    ...(weekday >= 0 && weekday <= 6 ? { weekday } : {}),
    ...(dayOfMonth >= 1 && dayOfMonth <= 28 ? { dayOfMonth } : {}),
    ...(asOptionalIsoString(record.runAt) ? { runAt: asOptionalIsoString(record.runAt) } : {}),
  };
}

function normalizeScheduledTaskCreatePreviewPayload(value: unknown): ScheduledTaskCreatePreviewCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const name = asString(record.name || record.title).trim();
  const prompt = asString(record.prompt).trim();
  if (!name || !prompt) return null;
  const scheduleKind = asEnumValue(record.scheduleKind, ['once', 'daily', 'weekly', 'monthly'] as const, 'daily');
  const scheduleConfig = normalizeScheduledTaskScheduleConfig(record.scheduleConfig);
  const scheduleLabel =
    asString(record.scheduleLabel).trim() ||
    (scheduleKind === 'once'
      ? '一次性运行'
      : scheduleKind === 'weekly'
        ? '每周运行'
        : scheduleKind === 'monthly'
          ? '每月运行'
          : '每天运行');
  const titleTemplate = asString(record.titleTemplate).trim() || `${name} {{date}}`;
  const confirmation = normalizeScheduledTaskResolution(record.confirmation);
  const draftEnvelope = normalizeHomeDraftEnvelope(record.draftEnvelope);
  return {
    ...(draftEnvelope ? { draftEnvelope } : {}),
    name,
    prompt,
    ...(asOptionalString(record.promptSummary) ? { promptSummary: asOptionalString(record.promptSummary) } : {}),
    scheduleKind,
    scheduleConfig,
    scheduleLabel,
    timezone: asOptionalString(record.timezone) || 'Asia/Shanghai',
    titleTemplate,
    ...(asOptionalIsoString(record.nextRunAt) ? { nextRunAt: asOptionalIsoString(record.nextRunAt) } : {}),
    warnings: asStringArray(record.warnings),
    ...(confirmation ? { confirmation } : {}),
  };
}

function normalizeScheduledTaskDeleteConfirmPayload(value: unknown): ScheduledTaskDeleteConfirmCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const taskId = asString(record.taskId || record.id).trim();
  const name = asString(record.name || record.title).trim();
  if (!taskId || !name) return null;
  const confirmation = normalizeScheduledTaskResolution(record.confirmation);
  const draftEnvelope = normalizeHomeDraftEnvelope(record.draftEnvelope);
  return {
    ...(draftEnvelope ? { draftEnvelope } : {}),
    taskId,
    name,
    status: asEnumValue(record.status, ['active', 'paused', 'running', 'error', 'disabled'] as const, 'active'),
    scheduleKind: asEnumValue(record.scheduleKind, ['once', 'daily', 'weekly', 'monthly'] as const, 'daily'),
    scheduleLabel: asString(record.scheduleLabel).trim() || '定时任务',
    ...(asOptionalString(record.timezone) ? { timezone: asOptionalString(record.timezone) } : {}),
    ...(asOptionalIsoString(record.nextRunAt) ? { nextRunAt: asOptionalIsoString(record.nextRunAt) } : {}),
    ...(asOptionalIsoString(record.lastRunAt) ? { lastRunAt: asOptionalIsoString(record.lastRunAt) } : {}),
    ...(confirmation ? { confirmation } : {}),
  };
}

function normalizeScheduledTaskListItem(
  value: unknown,
): ScheduledTaskListCardPayload['items'][number] | null {
  const record = asRecord(value);
  if (!record) return null;
  const id = asString(record.id || record.taskId).trim();
  const name = asString(record.name || record.title).trim();
  if (!id || !name) return null;
  const pendingDraftRecord = asRecord(record.pendingDraft);
  const pendingDraftRunId = asString(pendingDraftRecord?.runId).trim();
  const pendingDraftHref = asString(pendingDraftRecord?.href).trim();
  const pendingDraft =
    pendingDraftRunId && pendingDraftHref
      ? {
          runId: pendingDraftRunId,
          href: pendingDraftHref,
          ...(asOptionalString(pendingDraftRecord?.title) ? { title: asOptionalString(pendingDraftRecord?.title) } : {}),
          ...(asOptionalIsoString(pendingDraftRecord?.updatedAt) ? { updatedAt: asOptionalIsoString(pendingDraftRecord?.updatedAt) } : {}),
        }
      : undefined;
  return {
    id,
    name,
    ...(asOptionalString(record.prompt) ? { prompt: asOptionalString(record.prompt) } : {}),
    ...(asOptionalString(record.matchReason) ? { matchReason: asOptionalString(record.matchReason) } : {}),
    status: asEnumValue(record.status, ['active', 'paused', 'running', 'error', 'disabled'] as const, 'active'),
    scheduleKind: asEnumValue(record.scheduleKind, ['once', 'daily', 'weekly', 'monthly'] as const, 'daily'),
    scheduleLabel: asString(record.scheduleLabel).trim() || '定时任务',
    ...(asOptionalString(record.timezone) ? { timezone: asOptionalString(record.timezone) } : {}),
    ...(asOptionalIsoString(record.nextRunAt) ? { nextRunAt: asOptionalIsoString(record.nextRunAt) } : {}),
    ...(asOptionalIsoString(record.lastRunAt) ? { lastRunAt: asOptionalIsoString(record.lastRunAt) } : {}),
    ...(asOptionalIsoString(record.createdAt) ? { createdAt: asOptionalIsoString(record.createdAt) } : {}),
    ...(pendingDraft ? { pendingDraft } : {}),
  };
}

function normalizeScheduledTaskListPayload(value: unknown): ScheduledTaskListCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const items = (Array.isArray(record.items) ? record.items : [])
    .map(normalizeScheduledTaskListItem)
    .filter((item): item is ScheduledTaskListCardPayload['items'][number] => Boolean(item));
  const total = Math.max(0, Math.trunc(asNumber(record.total, items.length)));
  const activeTotal = Math.max(0, Math.trunc(asNumber(record.activeTotal, items.filter((item) => item.status === 'active' || item.status === 'running').length)));
  const emptyStateRecord = asRecord(record.emptyState);
  const emptyTitle = asString(emptyStateRecord?.title).trim();
  const emptyDescription = asString(emptyStateRecord?.description).trim();
  const emptyState =
    emptyTitle && emptyDescription
      ? {
          title: emptyTitle,
          description: emptyDescription,
          recoveryActions: asStringArray(emptyStateRecord?.recoveryActions),
        }
      : undefined;

  return {
    ...(asOptionalString(record.title) ? { title: asOptionalString(record.title) } : {}),
    ...(asOptionalString(record.summary) ? { summary: asOptionalString(record.summary) } : {}),
    mode: asEnumValue(record.mode, ['list', 'delete_candidates'] as const, 'list'),
    total,
    activeTotal,
    items,
    ...(emptyState ? { emptyState } : {}),
  };
}

function normalizeDisplayRouteAction(value: unknown): LabOSActionCardRouteAction | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const path = asString(record.path).trim();
  if (!path) return undefined;
  return {
    method: 'POST',
    path,
    requiresConfirmationToken: asBoolean(record.requiresConfirmationToken),
  };
}

function normalizeMiraArchivePreviewConfirmation(
  value: unknown,
): MiraArchivePreviewCardPayload['confirmation'] {
  const record = asRecord(value);
  if (!record) return undefined;
  const actionId = asString(record.actionId).trim();
  if (!actionId) return undefined;
  return {
    actionId,
    workflowRunId: asOptionalString(record.workflowRunId),
    workflowStepId: asOptionalString(record.workflowStepId),
    confirmationToken: asOptionalString(record.confirmationToken),
    draftHash: asOptionalString(record.draftHash),
    status: asEnumValue(
      record.status,
      ['pending', 'running', 'waiting_approval', 'waiting_task_completion', 'completed', 'failed', 'cancelled', 'skipped'] as const,
      'pending',
    ),
    confirmAction: normalizeDisplayRouteAction(record.confirmAction),
    cancelAction: normalizeDisplayRouteAction(record.cancelAction),
    draftSummary: asOptionalString(record.draftSummary),
    targetLocation: asOptionalString(record.targetLocation),
  };
}

function buildMiraArchivePreviewConfirmationFromDraftEnvelope(
  draftEnvelope: HomeDraftEnvelope | null,
  record: Record<string, unknown>,
): MiraArchivePreviewCardPayload['confirmation'] {
  if (!draftEnvelope) return undefined;
  return {
    actionId: draftEnvelope.draftId,
    confirmationToken: draftEnvelope.confirmation.confirmationToken,
    draftHash: draftEnvelope.confirmation.draftHash,
    status: draftEnvelope.validation.status === 'blocked' ? 'skipped' : 'waiting_approval',
    confirmAction: {
      method: 'POST',
      path: draftEnvelope.confirmation.confirmRoute,
      requiresConfirmationToken: true,
    },
    ...(draftEnvelope.confirmation.cancelRoute
      ? {
          cancelAction: {
            method: 'POST',
            path: draftEnvelope.confirmation.cancelRoute,
            requiresConfirmationToken: false,
          },
        }
      : {}),
    draftSummary: asOptionalString(record.summary) || asOptionalString(record.title),
    targetLocation: asOptionalString(record.targetPath),
  };
}

function normalizeMiraArchivePreviewPayload(value: unknown): MiraArchivePreviewCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const targetPath = asString(record.targetPath).trim();
  const title = asString(record.title).trim();
  if (!targetPath || !title) return null;
  const draftEnvelope = normalizeHomeDraftEnvelope(record.draftEnvelope);
  const sections: MiraArchivePreviewCardPayload['sections'] = [];
  for (const item of Array.isArray(record.sections) ? record.sections : []) {
    const section = asRecord(item);
    if (!section) continue;
    const heading = asString(section.heading).trim();
    const summary = asString(section.summary).trim();
    if (!heading || !summary) continue;
    sections.push({ heading, summary });
  }
  const hasEditorMode = record.editorMode !== undefined;
  const hasEditorState = record.editorState !== undefined;
  return {
    ...(draftEnvelope ? { draftEnvelope } : {}),
    draftId: asOptionalString(record.draftId),
    targetPath,
    targetParentNodeId: asOptionalString(record.targetParentNodeId),
    targetWikiNodeId: asOptionalString(record.targetWikiNodeId),
    mode: asEnumValue(record.mode, ['append', 'create', 'overwrite_proposal'] as const, 'append'),
    title,
    topic: asOptionalString(record.topic),
    markdown: asOptionalString(record.markdown),
    sections,
    sourceRefs: asStringArray(record.sourceRefs),
    warnings: asStringArray(record.warnings),
    editorMode: hasEditorMode
      ? asEnumValue(record.editorMode, ['compact_card', 'side_panel'] as const, 'compact_card')
      : undefined,
    editorState: hasEditorState
      ? asEnumValue(record.editorState, ['ready', 'dirty', 'saving_draft', 'saved', 'failed'] as const, 'ready')
      : undefined,
    editorUpdatedAt: asOptionalString(record.editorUpdatedAt),
    confirmation:
      normalizeMiraArchivePreviewConfirmation(record.confirmation) ||
      buildMiraArchivePreviewConfirmationFromDraftEnvelope(draftEnvelope, record),
  };
}

function normalizeDataQualityPayload(value: unknown): DataQualityCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const datasetTitle = asString(record.datasetTitle || record.inputTitle).trim();
  if (!datasetTitle) return null;
  const checks: DataQualityCardPayload['checks'] = [];
  for (const item of Array.isArray(record.checks) ? record.checks : []) {
    const check = asRecord(item);
    if (!check) continue;
    const label = asString(check.label).trim();
    const detail = asString(check.detail).trim();
    if (!label || !detail) continue;
    checks.push({
      label,
      status: asEnumValue(check.status, ['pass', 'warning', 'fail'] as const, 'warning'),
      detail,
    });
  }
  return {
    datasetTitle,
    datasetType: asEnumValue(
      record.datasetType,
      ['attachment', 'analysis_artifact', 'analysis_selection', 'table', 'unknown'] as const,
      'unknown',
    ),
    readiness: asEnumValue(record.readiness, ['ready', 'needs_review', 'blocked'] as const, 'needs_review'),
    checks,
    missingFields: asStringArray(record.missingFields),
    recommendedActions: asStringArray(record.recommendedActions),
  };
}

function normalizeWorkflowDecisionPayload(value: unknown): WorkflowDecisionCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const prompt = asString(record.prompt).trim();
  if (!prompt) return null;
  const options: WorkflowDecisionCardPayload['options'] = [];
  for (const item of Array.isArray(record.options) ? record.options : []) {
    const option = asRecord(item);
    if (!option) continue;
    const id = asString(option.id).trim();
    const title = asString(option.title).trim();
    const description = asString(option.description).trim();
    if (!id || !title || !description) continue;
    options.push({
      id,
      title,
      description,
      tradeoffs: asStringArray(option.tradeoffs),
      nextAction: asString(option.nextAction, '继续').trim() || '继续',
      requiresConfirmation: asBoolean(option.requiresConfirmation),
    });
  }
  if (options.length === 0) return null;
  return {
    prompt,
    recommendedOptionId: asOptionalString(record.recommendedOptionId),
    options,
  };
}

function normalizeWorkflowOverviewPayload(value: unknown): WorkflowOverviewCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const goal = asString(record.goal).trim();
  const currentStage = asString(record.currentStage).trim();
  if (!goal || !currentStage) return null;
  const stages: WorkflowOverviewCardPayload['stages'] = [];
  for (const item of Array.isArray(record.stages) ? record.stages : []) {
    const stage = asRecord(item);
    if (!stage) continue;
    const id = asString(stage.id).trim();
    const title = asString(stage.title).trim();
    if (!id || !title) continue;
    const summary = asOptionalString(stage.summary);
    const kind = asOptionalString(stage.kind);
    stages.push({
      id,
      title,
      status: asEnumValue(
        stage.status,
        ['pending', 'active', 'waiting_confirmation', 'completed', 'blocked', 'failed', 'cancelled'] as const,
        'pending',
      ),
      ...(summary ? { summary } : {}),
      ...(kind ? { kind } : {}),
      expectedOutputs: asStringArray(stage.expectedOutputs),
      requiresConfirmation: stage.requiresConfirmation === true,
    });
  }
  return {
    goal,
    currentStage,
    stages,
    nextActions: asStringArray(record.nextActions),
  };
}

function normalizeWorkflowStepPayload(value: unknown): WorkflowStepCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const stage = asString(record.stage).trim();
  const title = asString(record.title).trim();
  const summary = asString(record.summary).trim();
  if (!stage || !title || !summary) return null;
  return {
    stage,
    title,
    summary,
    inputRefs: asStringArray(record.inputRefs),
    outputRefs: asStringArray(record.outputRefs),
    sourceRefs: asStringArray(record.sourceRefs),
    status: asString(record.status, 'pending'),
  };
}

function normalizeWorkflowStatusPayload(value: unknown): WorkflowStatusCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const currentStage = asString(record.currentStage).trim();
  const status = asString(record.status).trim();
  if (!currentStage || !status) return null;
  return {
    runId: asOptionalString(record.runId),
    currentStage,
    status,
    blockers: asStringArray(record.blockers),
    resumeActions: asStringArray(record.resumeActions),
  };
}

function normalizeAttachmentRefs(value: unknown): HomeAttachmentRefEventPayload {
  return Array.isArray(value)
    ? value
        .map((item) => {
          const record = asRecord(item);
          if (!record) return null;
          const id = asString(record.id).trim();
          const name = asString(record.name).trim();
          const mimeType = asString(record.mimeType).trim();
          const kind = asEnumValue(record.kind, ['txt', 'image', 'pdf', 'office'] as const, 'txt');
          if (!id || !name || !mimeType) return null;
          return { id, name, mimeType, kind };
        })
        .filter((item): item is HomeAttachmentRefEventPayload[number] => Boolean(item))
    : [];
}

function normalizeArtifactRefs(value: unknown): HomeArtifactRefEventPayload {
  return Array.isArray(value)
    ? value
        .map((item) => {
          const record = asRecord(item);
          if (!record) return null;
          const id = asString(record.id).trim();
          const type = asString(record.type).trim();
          const name = asString(record.name).trim();
          const url = asString(record.url).trim();
          if (!id || !type || !name || !url) return null;
          return { id, type, name, url };
        })
        .filter((item): item is HomeArtifactRefEventPayload[number] => Boolean(item))
    : [];
}

function normalizeGenericPayload(value: unknown): HomeAssistantDisplayPayload {
  return (asRecord(value) || {}) as unknown as HomeAssistantDisplayPayload;
}

function normalizePayloadByCardType(
  cardType: HomeAssistantCardType,
  payload: unknown,
): HomeAssistantDisplayPayload | null {
  if (cardType === 'answer') return normalizeAnswerPayload(payload);
  if (cardType === 'internal_wiki_search') return normalizeInternalWikiSearchPayload(payload);
  if (cardType === 'literature_search') return normalizeResearchRenderPayload(payload);
  if (cardType === 'evidence_synthesis') {
    return normalizeResearchRenderPayload(payload) || normalizeResearchAnswer(payload);
  }
  if (cardType === 'memory_proposal') return normalizeMemoryProposalPayload(payload);
  if (cardType === 'confirmation') return normalizeLabOSActionCardPayload(payload);
  if (cardType === 'clarification') return normalizeClarificationPayload(payload);
  if (cardType === 'blocked') return normalizeBlockedPayload(payload);
  if (cardType === 'data_interpretation') return normalizeDataInterpretationPayload(payload);
  if (cardType === 'experiment_plan') return normalizeExperimentPlanPayload(payload);
  if (cardType === 'candidate_ranking') return normalizeCandidateRankingPayload(payload);
  if (cardType === 'validation_draft') return normalizeValidationDraftPayload(payload);
  if (cardType === 'evidence_propose') return normalizeEvidenceProposePayload(payload);
  if (cardType === 'tracking_subscription_preview') return normalizeTrackingSubscriptionPreviewPayload(payload);
  if (cardType === 'tracking_subscription_list') return normalizeTrackingSubscriptionListPayload(payload);
  if (cardType === 'tracking_subscription_delete_confirm') return normalizeTrackingSubscriptionDeleteConfirmPayload(payload);
  if (cardType === 'scheduled_task_create_preview') return normalizeScheduledTaskCreatePreviewPayload(payload);
  if (cardType === 'scheduled_task_delete_confirm') return normalizeScheduledTaskDeleteConfirmPayload(payload);
  if (cardType === 'scheduled_task_list') return normalizeScheduledTaskListPayload(payload);
  if (cardType === 'presentation_draft') return normalizePresentationDraftCardPayload(payload);
  if (cardType === 'mira_archive_preview') return normalizeMiraArchivePreviewPayload(payload);
  if (cardType === 'data_quality') return normalizeDataQualityPayload(payload);
  if (cardType === 'workflow_decision') return normalizeWorkflowDecisionPayload(payload);
  if (cardType === 'workflow_overview') return normalizeWorkflowOverviewPayload(payload);
  if (cardType === 'workflow_step') return normalizeWorkflowStepPayload(payload);
  if (cardType === 'workflow_status') return normalizeWorkflowStatusPayload(payload);
  if (cardType === 'memory_context_clarification') return normalizeMemoryClarificationPayload(payload);
  if (cardType === 'quiet_preference_notice') return normalizeQuietPreferenceNoticePayload(payload);
  if (cardType === 'handoff') {
    const record = asRecord(payload);
    const handoff = asRecord(record?.handoff) || asRecord(payload);
    return handoff ? ({ handoff: handoff as unknown as ModuleHandoffPayload } satisfies HandoffCardPayload) : null;
  }
  return normalizeGenericPayload(payload);
}

export function normalizeHomeAssistantDisplay(value: unknown): HomeAssistantDisplay | null {
  const record = asRecord(value);
  if (!record) return null;

  const cardType = asEnumValue(record.cardType, HOME_ASSISTANT_CARD_TYPES, 'answer');
  const payload = normalizePayloadByCardType(cardType, record.payload);
  if (!payload) return null;

  const title = asString(record.title, cardType === 'answer' ? '回答' : cardType).trim();
  if (!title) return null;

  return {
    schemaVersion: 'home-display.v1',
    intentClass: asEnumValue(record.intentClass, HOME_INTENT_CLASSES, 'general_answer'),
    cardType,
    title,
    summary: asOptionalString(record.summary),
    payload,
    state: asEnumValue(record.state, HOME_ASSISTANT_DISPLAY_STATES, 'ready'),
    sourceSummary: normalizeSourceSummary(record.sourceSummary),
    actionSummary: normalizeActionSummary(record.actionSummary),
    validation: normalizeValidationSummary(record.validation),
    provenance: normalizeProvenance(record.provenance),
  };
}

export function validateHomeAssistantDisplay(value: unknown):
  | { ok: true; display: HomeAssistantDisplay }
  | { ok: false; code: string; message: string } {
  const display = normalizeHomeAssistantDisplay(value);
  if (!display) {
    return {
      ok: false,
      code: 'INVALID_HOME_ASSISTANT_DISPLAY',
      message: 'Home assistant display payload is invalid.',
    };
  }

  return { ok: true, display };
}

export function normalizeHomeUIEvent(value: unknown): HomeUIEvent | null {
  const record = asRecord(value);
  if (!record) return null;

  if (record.type === 'display_start' || record.type === 'display_done') {
    const display = normalizeHomeAssistantDisplay(record.display);
    return display ? { type: record.type, display } : null;
  }

  if (record.type === 'display_patch') {
    const patch = asRecord(record.patch);
    return patch ? { type: 'display_patch', patch: patch as Partial<HomeAssistantDisplay> } : null;
  }

  if (record.type === 'workflow_progress') {
    return { type: 'workflow_progress', payload: record.payload };
  }

  if (record.type === 'sources' && Array.isArray(record.payload)) {
    return { type: 'sources', payload: record.payload as HomeDisplayCitation[] };
  }

  if (record.type === 'attachment_refs' && Array.isArray(record.payload)) {
    return { type: 'attachment_refs', payload: normalizeAttachmentRefs(record.payload) };
  }

  if (record.type === 'artifact_refs' && Array.isArray(record.payload)) {
    return { type: 'artifact_refs', payload: normalizeArtifactRefs(record.payload) };
  }

  if (record.type === 'error') {
    const error = asRecord(record.error) || {};
    return {
      type: 'error',
      error: {
        code: asString(error.code, 'HOME_UI_EVENT_ERROR'),
        message: asString(error.message, '首页展示事件错误'),
      },
    };
  }

  return null;
}

export function buildSourceSummaryFromContextPacket(
  packet?: HomeContextPacket,
  citations?: HomeDisplayCitation[],
  contextRefsSnapshot?: ContextEngineeringRef[],
  options?: { usedSourceRefs?: string[] },
): HomeSourceSummary | undefined {
  if (
    !packet &&
    (!citations || citations.length === 0) &&
    (!contextRefsSnapshot || contextRefsSnapshot.length === 0)
  ) {
    return undefined;
  }

  const usedSources = new Map<string, HomeSourceSummary['usedSources'][number]>();
  const addUsedSource = (source: HomeSourceSummary['usedSources'][number]) => {
    const key = `${source.type}:${source.id}`;
    if (!usedSources.has(key)) usedSources.set(key, source);
  };

  for (const source of packet?.attachedSources || []) {
    addUsedSource({
      id: source.ref.id,
      type: source.ref.type,
      title: source.title || source.ref.title || source.ref.id.slice(0, 8),
      summary: source.summary,
    });
  }

  for (const ref of [
    ...(packet?.contextRefs || []),
    ...(contextRefsSnapshot || []),
  ]) {
    addUsedSource({
      id: ref.id,
      type: ref.type,
      title: ref.title || ref.id.slice(0, 8),
      summary: ref.summary,
    });
  }

  const hasExplicitUsedSourceRefs = Array.isArray(options?.usedSourceRefs);
  const usedSourceRefs = hasExplicitUsedSourceRefs ? options.usedSourceRefs || [] : [];
  const selectedSourceKeys = new Set(usedSourceRefs.map((ref) => ref.trim()).filter(Boolean));
  const selectedSources =
    hasExplicitUsedSourceRefs
      ? Array.from(usedSources.values()).filter((source) =>
          selectedSourceKeys.has(`${source.type}:${source.id}`),
        )
      : [];

  return {
    usedSources: selectedSources,
    blockedSources:
      packet?.blockedSources?.map((source) => ({
        id: source.sourceId || source.ref?.id,
        type: source.sourceType,
        title: source.ref?.title,
        reason: source.reason,
      })) || [],
    citationCount: citations?.length || 0,
  };
}

export function buildProvenanceFromContextRefs(refs?: ContextEngineeringRef[]): HomeCardProvenance | undefined {
  if (!refs || refs.length === 0) return undefined;
  return {
    sourceRefs: refs.map((ref) => ({
      type: ref.type,
      id: ref.id,
      title: ref.title,
    })),
    toolRunIds: [],
    citationIds: [],
  };
}
