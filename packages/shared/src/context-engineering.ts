import {
  HOME_RAG_SORT_MODES,
  normalizeHomeRagSearchInput,
  type HomeRagSearchFilters,
  type HomeRagSortMode,
} from './home-rag.js';
import {
  normalizeMemoryReplayExplanation,
  normalizeMemoryReplayMetadata,
  normalizeMemorySnapshot,
  type MemoryReplayExplanation,
  type MemoryReplayMetadata,
  type MemorySnapshot,
} from './memory.js';
import {
  normalizeHomeMemoryRetrievalPacket,
  type HomeMemoryRetrievalPacket,
} from './cross-session-memory.js';
import {
  normalizeHomeMemoryExperienceMetadata,
  type HomeMemoryExperienceMetadata,
} from './memory-experience.js';

export const HOME_CONTEXT_PACKET_SCHEMA_VERSION = 'home-context-packet/v1' as const;
export const HOME_SESSION_WORKING_SUMMARY_SCHEMA_VERSION = 'home-session-working-summary/v1' as const;
export const HOME_MULTITURN_CONTEXT_SCHEMA_VERSION = 'home-multiturn-context/v1' as const;

export const HOME_INTENTS = [
  'general_answer',
  'literature_search',
  'internal_knowledge',
  'evidence_synthesis',
  'data_interpretation',
  'draft_action',
  'write_request',
  'workflow_orchestration',
  'experiment_planning',
  'workflow_resume',
  'archive_request',
  'status_query',
] as const;

export const HOME_WORKFLOW_STAGES = [
  'none',
  'research',
  'candidate',
  'validation',
  'experiment_task',
  'evidence',
  'archive',
] as const;

export const LABOS_ACTION_KINDS = [
  'read',
  'plan',
  'draft',
  'propose_write',
  'commit_write',
  'archive',
  'handoff',
] as const;

export const LABOS_MODULES = [
  'home',
  'mira',
  'tracking',
  'scheduled_task',
  'analysis',
  'validation',
  'future_task',
  'evidence',
  'cloning',
  'structural',
  'calculator',
] as const;

export const HOME_CONTEXT_REF_TYPES = [
  'attachment',
  'mira_node',
  'analysis_artifact',
  'analysis_selection',
  'tracking_signal',
  'tracking_feed_item',
] as const;

export const HOME_UNIFIED_RESOURCE_TYPES = [
  'skill',
  'mira_node',
] as const;

export const HOME_ACTIVE_MIRA_ROOT_KINDS = [
  'node',
  'subtree',
] as const;

export const HOME_ACTIVE_MIRA_ROOT_INDEX_STATES = [
  'indexed',
  'partial',
  'not_indexed',
] as const;

export const MIRA_KEYWORD_SEARCH_MODES = [
  'exact',
  'phrase',
  'all_terms',
  'any_term',
] as const;

export const MIRA_KEYWORD_TARGET_FIELDS = [
  'title',
  'path',
  'heading',
  'contentText',
] as const;

export const HOME_CONTEXT_TRACE_LAYERS = [
  'intent',
  'preference',
  'memory',
  'session_summary',
  'display_policy',
  'attachment',
  'mira',
  'analysis',
  'tracking',
  'source_plan',
  'policy',
  'policy_violation',
  'tool_registry',
  'tool_call',
  'intent_router',
  'decision_planner',
  'decision_guard',
  'search_planner',
  'tool_policy',
  'tool_verifier',
  'prompt_context',
  'handoff',
  'workflow',
  'warning',
] as const;

export const HOME_DISPLAY_FAMILIES = [
  'answer',
  'research',
  'wiki',
  'action',
  'workflow',
  'handoff',
  'clarification',
  'blocked',
  'data',
] as const;

export const HOME_TOOL_RESULT_KINDS = [
  'plain_answer',
  'research_render',
  'research_answer',
  'wiki_search',
  'action_card',
  'handoff',
  'clarification',
  'structured_payload',
  'blocked',
] as const;

export const HOME_SESSION_STAGES = [
  'general',
  'research',
  'internal_search',
  'data_interpretation',
  'planning',
  'workflow',
  'archive',
] as const;

export const HOME_CONTEXT_PREFERENCE_CATEGORIES = [
  'expression',
  'evidence',
  'action',
  'context',
] as const;

export const HOME_CONTEXT_PREFERENCE_SOURCES = [
  'system_default',
  'manual',
  'confirmed_suggestion',
  'auto_memory',
] as const;

export const HOME_CONTEXT_SUMMARY_MAX_LENGTH = 600;
export const HOME_PROMPT_CONTEXT_SUMMARY_MAX_LENGTH = 1800;
const MAX_SAFE_RECORD_DEPTH = 3;
const MAX_SAFE_ARRAY_ITEMS = 20;
const BLOCKED_PACKET_KEY_PARTS = [
  'apikey',
  'api_key',
  'authorization',
  'contenttext',
  'content_text',
  'downloadurl',
  'download_url',
  'extractedtext',
  'extracted_text',
  'fulltext',
  'full_text',
  'objectkey',
  'object_key',
  'password',
  'presigned',
  'providerrawresponse',
  'provider_raw_response',
  'rawdata',
  'raw_data',
  'secret',
  'storageurl',
  'storage_url',
  'tabledata',
  'table_data',
  'token',
] as const;

export type HomeIntent = (typeof HOME_INTENTS)[number];
export type HomeWorkflowStage = (typeof HOME_WORKFLOW_STAGES)[number];
export type LabOSActionKind = (typeof LABOS_ACTION_KINDS)[number];
export type LabOSModule = (typeof LABOS_MODULES)[number];
export type HomeContextRefType = (typeof HOME_CONTEXT_REF_TYPES)[number];
export type HomeUnifiedResourceType = (typeof HOME_UNIFIED_RESOURCE_TYPES)[number];
export type HomeActiveMiraRootKind = (typeof HOME_ACTIVE_MIRA_ROOT_KINDS)[number];
export type HomeActiveMiraRootIndexState = (typeof HOME_ACTIVE_MIRA_ROOT_INDEX_STATES)[number];
export type MiraKeywordSearchMode = (typeof MIRA_KEYWORD_SEARCH_MODES)[number];
export type MiraKeywordTargetField = (typeof MIRA_KEYWORD_TARGET_FIELDS)[number];
export type HomeContextTraceLayer = (typeof HOME_CONTEXT_TRACE_LAYERS)[number];
export type HomeDisplayFamily = (typeof HOME_DISPLAY_FAMILIES)[number];
export type HomeToolResultKind = (typeof HOME_TOOL_RESULT_KINDS)[number];
export type HomeContextPreferenceCategory = (typeof HOME_CONTEXT_PREFERENCE_CATEGORIES)[number];
export type HomeContextPreferenceSource = (typeof HOME_CONTEXT_PREFERENCE_SOURCES)[number];
export type HomeSessionStage = (typeof HOME_SESSION_STAGES)[number];

export type HomeContextProjectScope = 'none';
export type LabOSActionStatus =
  | 'pending'
  | 'running'
  | 'waiting_approval'
  | 'waiting_task_completion'
  | 'completed'
  | 'failed'
  | 'cancelled'
  | 'skipped';
export type LabOSToolHandlerKind = 'runtime_tool' | 'service_adapter' | 'handoff_only' | 'planned';
export type ToolParameterSource =
  | 'user_message'
  | 'attached_context'
  | 'workflow_output'
  | 'preference'
  | 'module_default'
  | 'follow_up'
  | 'missing';

export interface HomeContextRef {
  type: HomeContextRefType;
  id: string;
  title?: string;
  summary?: string;
  source?: 'url' | 'picker' | 'upload' | 'handoff' | 'history' | 'manual';
  metadata?: Record<string, unknown>;
}

export interface HomeUnifiedResourceItem {
  type: HomeUnifiedResourceType;
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  source?: 'skill' | 'mira';
  selectable: boolean;
  selected?: boolean;
  disabledReason?: string;
  ref?: HomeContextRef;
  metadata?: Record<string, unknown>;
}

export interface HomeActiveMiraRoot {
  ref: HomeContextRef;
  title: string;
  path?: string;
  kind: HomeActiveMiraRootKind;
  permission: 'read' | 'comment' | 'edit';
  indexState: HomeActiveMiraRootIndexState;
  derivedFrom: 'explicit_context_ref' | 'handoff';
  childCount?: number;
  updatedAt?: string;
  warnings?: string[];
}

export interface MiraKeywordSearchScope {
  rootNodeId: string;
  includeRoot?: boolean;
  recursive?: boolean;
}

export interface MiraKeywordSearchInput {
  query: string;
  scope: MiraKeywordSearchScope;
  mode?: MiraKeywordSearchMode;
  targetFields?: MiraKeywordTargetField[];
  titleContains?: string;
  pathContains?: string;
  documentKind?: string | string[];
  limit?: number;
}

export interface MiraKeywordSearchResult {
  nodeId: string;
  title: string;
  path?: string;
  field: MiraKeywordTargetField;
  snippet: string;
  rankingReason: string;
  score: number;
  updatedAt?: string;
}

export interface HomeContextSourceCandidate {
  type: HomeContextRefType;
  id: string;
  title: string;
  summary?: string;
  updatedAt?: string;
  metadata?: Record<string, unknown>;
}

export interface HomeContextTraceItem {
  id?: string;
  layer: HomeContextTraceLayer;
  status: 'used' | 'available' | 'blocked' | 'skipped' | 'warning';
  summary: string;
  sourceRef?: HomeContextRef;
  details?: Record<string, unknown>;
  createdAt?: string;
}

export interface HomeContextPreferenceFieldSource {
  source: HomeContextPreferenceSource;
  preferenceId?: string;
  locked?: boolean;
}

export interface HomeContextPreferences {
  language: 'zh' | 'en' | 'auto';
  detailLevel: 1 | 2 | 3 | 4 | 5;
  outputFormat: 'mixed' | 'markdown' | 'structured';
  citationDensity: 'compact' | 'normal' | 'dense';
  evidenceMode: 'external_first' | 'internal_first' | 'mixed';
  preferredDatabases: string[];
  defaultDateRange: 'recent' | 'all' | 'custom';
  lowRelevancePolicy: 'collapse' | 'hide' | 'show';
  proactiveSuggestions: boolean;
  allowDraftActions: boolean;
  requireConfirmationBeforeWrite: boolean;
  showContextTrace: boolean;
  promptToAttachContext: boolean;
  autoUseCurrentAttachments: boolean;
  autoUseRecentProjects: false;
  fieldSources?: Partial<Record<keyof Omit<HomeContextPreferences, 'fieldSources'>, HomeContextPreferenceFieldSource>>;
}

export interface HomeContextSourcePlan {
  externalLiterature: boolean;
  internalRag: boolean;
  renderStructuredResponse: boolean;
  readOnly: boolean;
  allowDraft: boolean;
  requireConfirmationBeforeWrite: boolean;
  preferredTools: string[];
  blockedTools: string[];
  reasons: string[];
}

export interface HomeContextActionPolicy {
  readOnly: boolean;
  allowDraftActions: boolean;
  requireConfirmationBeforeWrite: boolean;
  allowCommitWrite: boolean;
  allowedActionKinds: LabOSActionKind[];
  blockedActionKinds: LabOSActionKind[];
  reasons: string[];
}

export interface HomeDisplayPolicy {
  primaryFamily: HomeDisplayFamily;
  allowedFamilies: HomeDisplayFamily[];
  preferredCardTypes: string[];
  toolNames: string[];
  resultKinds: HomeToolResultKind[];
  requiresConfirmation: boolean;
  source: 'intent' | 'tool' | 'action_policy';
  reason: string;
}

export interface HomeContextIntentResult {
  primaryIntent: HomeIntent;
  secondaryIntents: HomeIntent[];
  confidenceByIntent: Partial<Record<HomeIntent, number>>;
  rationale: string;
}

export interface HomeContextPolicyViolation {
  id?: string;
  toolName?: string;
  actionKind?: LabOSActionKind;
  reason: string;
  attemptedAt?: string;
  metadata?: Record<string, unknown>;
}

export interface HomeContextPackedSource {
  sourceId: string;
  sourceType: HomeContextRefType | 'attachment' | 'internal_rag' | 'external_literature';
  title?: string;
  usedChars: number;
  budgetChars: number;
  truncated: boolean;
}

export interface HomeContextRetrievalReplay {
  toolName: string;
  query?: string;
  queryMode?: 'semantic' | 'metadata' | 'hybrid';
  resultRefs: string[];
  resultCount: number;
  blocked?: boolean;
  errorCode?: string;
  errorReason?: string;
  filters?: HomeRagSearchFilters;
  sort?: HomeRagSortMode;
  appliedFilters?: string[];
  relaxedFilters?: string[];
  warnings?: string[];
}

export interface HomeSessionUsedSource {
  type:
    | 'mira_node'
    | 'analysis_artifact'
    | 'analysis_selection'
    | 'tracking_signal'
    | 'tracking_feed_item'
    | 'external_literature'
    | 'web_source'
    | 'attachment'
    | 'memory'
    | 'workflow';
  title?: string;
  ref?: string;
  summary?: string;
}

export interface HomeSessionWorkingSummary {
  schemaVersion: typeof HOME_SESSION_WORKING_SUMMARY_SCHEMA_VERSION;
  sessionId: string;
  labId: string;
  userId: string;
  updatedAt: string;
  sourceMessageRange: {
    fromMessageId?: string;
    toMessageId?: string;
    messageCount: number;
  };
  userGoal?: string;
  currentStage?: HomeSessionStage;
  activeWorkflowRunId?: string;
  confirmedFacts: string[];
  workingAssumptions: string[];
  usedSources: HomeSessionUsedSource[];
  openQuestions: string[];
  pendingActions: string[];
  actionBoundaries: string[];
  preferenceSnapshotSummary?: string;
  memorySummary?: string;
  doNotUseAsFacts?: string[];
}

export interface HomeRecentTurn {
  role: 'user' | 'assistant' | 'system';
  content: string;
  messageId?: string;
  createdAt?: string;
  truncated?: boolean;
}

export interface HomeMultiturnContext {
  schemaVersion: typeof HOME_MULTITURN_CONTEXT_SCHEMA_VERSION;
  sessionWorkingSummary?: HomeSessionWorkingSummary;
  recentTurns: HomeRecentTurn[];
  historyBudget: {
    summaryChars: number;
    recentTurnsChars: number;
    truncated: boolean;
    omittedMessageCount: number;
  };
}

export interface HomeSessionSummaryReplay {
  mode: 'off' | 'shadow' | 'primary';
  status: 'skipped' | 'missing' | 'used' | 'rebuilt' | 'updated' | 'failed';
  schemaVersion?: string;
  sourceMessageRange?: HomeSessionWorkingSummary['sourceMessageRange'];
  injectedIntoPrompt: boolean;
  recentTurnCount?: number;
  summaryChars?: number;
  recentTurnsChars?: number;
  truncated?: boolean;
  error?: string;
}

export interface HomePromptContextReplay {
  injectedBlocks: string[];
  omittedBlocks: string[];
  budgetChars: number;
  usedChars: number;
  truncated: boolean;
}

export interface HomeContextReplayMetadata {
  classifierVersion: string;
  sourcePlanVersion: string;
  resolverVersions: Record<string, string>;
  preferenceSources: Array<{
    category: HomeContextPreferenceCategory;
    key: string;
    source: HomeContextPreferenceSource;
    preferenceId?: string;
  }>;
  memory?: MemoryReplayMetadata;
  memoryExplanation?: MemoryReplayExplanation;
  memoryExperience?: HomeMemoryExperienceMetadata;
  toolGating: {
    enabledTools: string[];
    blockedTools: string[];
    violations: HomeContextPolicyViolation[];
  };
  contextPacking: {
    budgetChars: number;
    usedChars: number;
    packedSources: HomeContextPackedSource[];
    truncated: boolean;
  };
  retrievals: {
    internalRag: HomeContextRetrievalReplay[];
    externalLiterature: HomeContextRetrievalReplay[];
  };
  memoryRetrieval?: HomeMemoryRetrievalPacket;
  sessionSummary?: HomeSessionSummaryReplay;
  promptContext?: HomePromptContextReplay;
  displayPolicy?: HomeDisplayPolicy;
  workflowCheckpoint?: {
    workflowRunId?: string;
    workflowStepId?: string;
    stage: HomeWorkflowStage;
    status?: string;
  };
}

export interface HomeWorkflowContext {
  stage: HomeWorkflowStage;
  activeRunId?: string;
  goal?: string;
  status?: 'active' | 'waiting_approval' | 'waiting_task_completion' | 'completed' | 'failed' | 'cancelled' | 'resumed';
  workingSet: Array<{
    refType: string;
    refId: string;
    title?: string;
    summary?: string;
  }>;
  openDecisions: string[];
  nextActions: LabOSAction[];
}

export interface LabOSAction {
  id: string;
  kind: LabOSActionKind;
  targetModule: LabOSModule;
  targetId?: string;
  title: string;
  summary: string;
  inputRefs: string[];
  outputRefs: string[];
  expectedOutputType?: string;
  requiresConfirmation: boolean;
  status: LabOSActionStatus;
  approval?: {
    tokenRequired: boolean;
    tokenId?: string;
    expiresAt?: string;
    draftHash?: string;
  };
  provenance?: Record<string, unknown>;
}

export interface LabOSActionPlan {
  planId?: string;
  workflowRunId?: string;
  summary: string;
  actions: LabOSAction[];
  requiresConfirmation: boolean;
  blockedReasons: string[];
}

export interface LabOSRegisteredTool {
  toolName: string;
  module: LabOSModule;
  actionType: Exclude<LabOSActionKind, 'commit_write'>;
  inputSchema: Record<string, unknown>;
  outputSchema: Record<string, unknown>;
  requiredParams: string[];
  requiredContext: HomeContextRefType[];
  permissionPolicy: string;
  trustTierPolicy: string;
  sourcePlanTags: string[];
  confirmationPolicy: 'none' | 'required_for_write' | 'confirm_only_adapter';
  handlerKind: LabOSToolHandlerKind;
  displayFamily?: HomeDisplayFamily;
  resultKind?: HomeToolResultKind;
  preferredCardTypes?: string[];
}

export interface ToolParameterValueResolution {
  value?: unknown;
  source: ToolParameterSource;
  sourceRef?: string;
  required: boolean;
  missing: boolean;
}

export interface ToolParameterResolution {
  toolName: string;
  parameters: Record<string, ToolParameterValueResolution>;
  missingParams: string[];
  followUpQuestions: string[];
}

export interface SelectedLabOSTool {
  toolName: string;
  module: LabOSModule;
  actionType: Exclude<LabOSActionKind, 'commit_write'>;
  enabled: boolean;
  blockedReason?: string;
  missingParams: string[];
  parameterResolution?: ToolParameterResolution;
  displayFamily?: HomeDisplayFamily;
  resultKind?: HomeToolResultKind;
  preferredCardTypes?: string[];
}

export type HomeRuntimeSkillUsageStatus = 'selected' | 'completed' | 'failed';

export interface HomeRuntimeSkillUsageItem {
  name: string;
  displayName?: string;
  status: HomeRuntimeSkillUsageStatus;
  resultCount?: number;
  reason?: string;
  error?: string;
  updatedAt?: string;
}

export interface HomeRuntimeSkillScope {
  explicit?: boolean;
  requestedSkillSlugs: string[];
  selectedSkillSlugs: string[];
  enabledSkillSlugs: string[];
}

export const HOME_RUNTIME_SKILL_DIAGNOSTIC_SCHEMA_VERSION = 'home-runtime-skill-diagnostics/v1' as const;

export type HomeRuntimeSkillDiagnosticStatus =
  | 'discovered'
  | 'activated'
  | 'selected'
  | 'completed'
  | 'failed'
  | 'blocked';

export interface HomeRuntimeSkillDiagnosticItem {
  name: string;
  displayName?: string;
  status: HomeRuntimeSkillDiagnosticStatus;
  source?: 'discovered' | 'selected' | 'tool_result' | 'skill_result' | 'legacy';
  reason?: string;
  resultCount?: number;
  error?: string;
  score?: number;
  reasons?: string[];
  matchedFields?: string[];
  updatedAt?: string;
}

export interface HomeRuntimeSkillDiagnostics {
  schemaVersion: typeof HOME_RUNTIME_SKILL_DIAGNOSTIC_SCHEMA_VERSION;
  discoveredSkills: HomeRuntimeSkillDiagnosticItem[];
  activatedSkills: HomeRuntimeSkillDiagnosticItem[];
  executedSkills: HomeRuntimeSkillDiagnosticItem[];
  blockedSkills: HomeRuntimeSkillDiagnosticItem[];
  errors: HomeRuntimeSkillDiagnosticItem[];
}

export interface ModuleHandoffPayload {
  handoffId?: string;
  sourceModule: LabOSModule;
  targetModule: LabOSModule;
  targetAction: string;
  summary: string;
  contextRefs: HomeContextRef[];
  linkedRefs: Array<{
    refType: string;
    refId: string;
    title?: string;
  }>;
  trustTier?: 'low' | 'medium' | 'high';
  payload?: Record<string, unknown>;
  provenance?: Record<string, unknown>;
}

export type LabOSActionCardType =
  | 'workflow_plan'
  | 'research_candidate'
  | 'mira_note'
  | 'future_task'
  | 'evidence_item'
  | 'validation_package';

export const LABOS_ACTION_CARD_EDITABLE_SCHEMA_VERSION = 'labos-action-card-editable/v1' as const;

export interface FutureTaskActionCardEditableContent {
  schemaVersion: typeof LABOS_ACTION_CARD_EDITABLE_SCHEMA_VERSION;
  kind: 'future_task';
  title: string;
  description: string;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
  ownerHint?: string;
}

export interface EvidenceActionCardEditableContent {
  schemaVersion: typeof LABOS_ACTION_CARD_EDITABLE_SCHEMA_VERSION;
  kind: 'evidence_item';
  title: string;
  summary: string;
  evidenceRefs: string[];
  confidence?: 'low' | 'medium' | 'high';
}

export interface MiraArchiveActionCardEditableContent {
  schemaVersion: typeof LABOS_ACTION_CARD_EDITABLE_SCHEMA_VERSION;
  kind: 'mira_archive';
  title: string;
  topic?: string;
  markdown: string;
  targetNodeId?: string;
  targetPath?: string;
}

export type LabOSActionCardEditableContent =
  | FutureTaskActionCardEditableContent
  | EvidenceActionCardEditableContent
  | MiraArchiveActionCardEditableContent;

export interface LabOSActionCardRouteAction {
  method: 'POST';
  path: string;
  requiresConfirmationToken: boolean;
}

export interface LabOSActionCardPayload {
  cardType: LabOSActionCardType;
  actionId: string;
  workflowRunId?: string;
  workflowStepId?: string;
  actionType: LabOSActionKind;
  targetModule: LabOSModule;
  targetLocation?: string;
  draftSummary: string;
  editableContent?: LabOSActionCardEditableContent;
  sourceRefs: HomeContextRef[];
  provenance: Record<string, unknown>;
  confirmationToken?: string;
  draftHash?: string;
  confirmAction?: LabOSActionCardRouteAction;
  cancelAction?: LabOSActionCardRouteAction;
  status?: LabOSActionStatus;
}

export type LabOSActionCardValidationResult =
  | { ok: true; card: LabOSActionCardPayload }
  | { ok: false; code: string; message: string };

export interface WorkflowRunSnapshot {
  id: string;
  labId?: string;
  userId?: string;
  sessionId?: string;
  goal: string;
  stage: Exclude<HomeWorkflowStage, 'none'>;
  status: 'active' | 'waiting_approval' | 'waiting_task_completion' | 'completed' | 'failed' | 'cancelled';
  workingSet: unknown[];
  provenance: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
}

export interface WorkflowStepSnapshot {
  id: string;
  runId: string;
  kind: LabOSActionKind;
  targetModule: LabOSModule;
  status: LabOSActionStatus;
  inputRefs: string[];
  outputRefs: string[];
  approval?: Record<string, unknown>;
  provenance: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
}

export interface HomeContextSourceSummary {
  ref: HomeContextRef;
  title?: string;
  summary: string;
  permission?: string;
  provenance?: Record<string, unknown>;
}

export interface HomeContextBlockedSource {
  ref?: HomeContextRef;
  sourceType: HomeContextRefType | 'attachment' | 'handoff' | 'tool';
  sourceId?: string;
  reason: string;
}

export interface HomeContextAttachmentSummary {
  id: string;
  name: string;
  mimeType?: string;
  summary: string;
  fullText?: string;
}

export interface HomeContextPacket {
  schemaVersion: typeof HOME_CONTEXT_PACKET_SCHEMA_VERSION;
  packetId?: string;
  requestId?: string;
  projectScope: HomeContextProjectScope;
  generatedAt?: string;
  intent: HomeContextIntentResult;
  preferences: HomeContextPreferences;
  memory?: MemorySnapshot;
  contextRefs: HomeContextRef[];
  activeMiraRoot?: HomeActiveMiraRoot;
  attachments: HomeContextAttachmentSummary[];
  attachedSources: HomeContextSourceSummary[];
  blockedSources: HomeContextBlockedSource[];
  sourcePlan: HomeContextSourcePlan;
  actionPolicy: HomeContextActionPolicy;
  displayPolicy?: HomeDisplayPolicy;
  workflow: HomeWorkflowContext;
  selectedTools: SelectedLabOSTool[];
  runtimeSkillDiagnostics?: HomeRuntimeSkillDiagnostics;
  runtimeSkillUsage?: HomeRuntimeSkillUsageItem[];
  runtimeSkillScope?: HomeRuntimeSkillScope;
  incomingHandoff?: ModuleHandoffPayload;
  trace: HomeContextTraceItem[];
  replay: HomeContextReplayMetadata;
}

export function normalizeHomeContextRef(value: unknown): HomeContextRef | null {
  const record = asRecord(value);
  if (!record) return null;
  const type = asEnumValue(record.type, HOME_CONTEXT_REF_TYPES);
  const id = asNonEmptyString(record.id);
  if (!type || !id) return null;
  return {
    type,
    id,
    title: asOptionalTrimmedString(record.title),
    summary: trimSummary(record.summary),
    source: asEnumValue(record.source, ['url', 'picker', 'upload', 'handoff', 'history', 'manual'] as const),
    metadata: asPlainRecord(record.metadata),
  };
}

export function normalizeHomeUnifiedResourceItem(value: unknown): HomeUnifiedResourceItem | null {
  const record = asRecord(value);
  if (!record) return null;
  const type = asEnumValue(record.type, HOME_UNIFIED_RESOURCE_TYPES);
  const id = asNonEmptyString(record.id);
  const title = asOptionalTrimmedString(record.title);
  if (!type || !id || !title) return null;
  return {
    type,
    id,
    title,
    subtitle: asOptionalTrimmedString(record.subtitle),
    description: trimSummary(record.description),
    source: asEnumValue(record.source, ['skill', 'mira'] as const),
    selectable: record.selectable !== false,
    selected: record.selected === true,
    disabledReason: asOptionalTrimmedString(record.disabledReason),
    ref: normalizeHomeContextRef(record.ref) || undefined,
    metadata: asPlainRecord(record.metadata),
  };
}

export function normalizeHomeActiveMiraRoot(value: unknown): HomeActiveMiraRoot | null {
  const record = asRecord(value);
  if (!record) return null;
  const ref = normalizeHomeContextRef(record.ref);
  const title = asOptionalTrimmedString(record.title) || ref?.title;
  const kind = asEnumValue(record.kind, HOME_ACTIVE_MIRA_ROOT_KINDS) || 'node';
  const permission = asEnumValue(record.permission, ['read', 'comment', 'edit'] as const);
  const indexState = asEnumValue(record.indexState, HOME_ACTIVE_MIRA_ROOT_INDEX_STATES) || 'not_indexed';
  const derivedFrom = asEnumValue(record.derivedFrom, ['explicit_context_ref', 'handoff'] as const) || 'explicit_context_ref';
  if (!ref || ref.type !== 'mira_node' || !title || !permission) return null;
  return {
    ref,
    title,
    path: asOptionalTrimmedString(record.path),
    kind,
    permission,
    indexState,
    derivedFrom,
    childCount:
      typeof record.childCount === 'number' && Number.isFinite(record.childCount)
        ? Math.max(0, Math.floor(record.childCount))
        : undefined,
    updatedAt: asOptionalTrimmedString(record.updatedAt),
    warnings: asStringArray(record.warnings).slice(0, 12),
  };
}

export function normalizeHomeContextTraceItem(value: unknown): HomeContextTraceItem {
  const record = asRecord(value) || {};
  return {
    id: asOptionalTrimmedString(record.id),
    layer: asEnumValue(record.layer, HOME_CONTEXT_TRACE_LAYERS) || 'warning',
    status: asEnumValue(record.status, ['used', 'available', 'blocked', 'skipped', 'warning'] as const) || 'warning',
    summary: trimSummary(record.summary, 'Trace item was unavailable.'),
    sourceRef: normalizeHomeContextRef(record.sourceRef) || undefined,
    details: asPlainRecord(record.details),
    createdAt: asOptionalTrimmedString(record.createdAt),
  };
}

export function normalizeHomeContextPacket(value: unknown): HomeContextPacket {
  const record = asRecord(value) || {};
  const intentRecord = asRecord(record.intent) || {};
  const legacyIntentType = asRecord(record.intent)?.type;
  const primaryIntent =
    asEnumValue(intentRecord.primaryIntent, HOME_INTENTS) ||
    asEnumValue(legacyIntentType, HOME_INTENTS) ||
    'general_answer';
  const secondaryIntents = asEnumArray(intentRecord.secondaryIntents, HOME_INTENTS).filter((intent) => intent !== primaryIntent);
  const workflow = normalizeHomeWorkflowContext(record.workflow);
  const actionPolicy = normalizeHomeActionPolicy(record.actionPolicy);
  const runtimeSkillUsage = asArray(record.runtimeSkillUsage ?? record.skillUsage)
    .map(normalizeHomeRuntimeSkillUsageItem)
    .filter(isPresent)
    .slice(0, 24);
  const runtimeSkillScope = normalizeHomeRuntimeSkillScope(record.runtimeSkillScope ?? record.skillScope) || undefined;
  const runtimeSkillDiagnostics = normalizeHomeRuntimeSkillDiagnostics(
    record.runtimeSkillDiagnostics ?? record.skillDiagnostics,
  ) || undefined;

  return {
    schemaVersion: HOME_CONTEXT_PACKET_SCHEMA_VERSION,
    packetId: asOptionalTrimmedString(record.packetId),
    requestId: asOptionalTrimmedString(record.requestId) || asOptionalTrimmedString(record.packetId),
    projectScope: 'none',
    generatedAt: asOptionalTrimmedString(record.generatedAt),
    intent: {
      primaryIntent,
      secondaryIntents,
      confidenceByIntent: normalizeConfidenceMap(intentRecord.confidenceByIntent, primaryIntent),
      rationale: trimSummary(intentRecord.rationale, 'Intent was normalized from stored context packet.'),
    },
    preferences: normalizeHomeContextPreferences(record.preferences),
    memory: normalizeMemorySnapshot(record.memory),
    contextRefs: asArray(record.contextRefs).map(normalizeHomeContextRef).filter(isPresent),
    activeMiraRoot: normalizeHomeActiveMiraRoot(record.activeMiraRoot) || undefined,
    attachments: asArray(record.attachments).map(normalizeHomeAttachmentSummary),
    attachedSources: asArray(record.attachedSources).map(normalizeHomeSourceSummary),
    blockedSources: asArray(record.blockedSources).map(normalizeBlockedSource),
    sourcePlan: normalizeHomeSourcePlan(record.sourcePlan),
    actionPolicy,
    displayPolicy: normalizeHomeDisplayPolicy(record.displayPolicy) || undefined,
    workflow,
    selectedTools: asArray(record.selectedTools).map(normalizeSelectedTool),
    ...(runtimeSkillDiagnostics ? { runtimeSkillDiagnostics } : {}),
    ...(runtimeSkillUsage.length > 0 ? { runtimeSkillUsage } : {}),
    ...(runtimeSkillScope ? { runtimeSkillScope } : {}),
    incomingHandoff: normalizeModuleHandoffPayload(record.incomingHandoff) || undefined,
    trace: asArray(record.trace).map(normalizeHomeContextTraceItem),
    replay: normalizeReplayMetadata(record.replay, workflow),
  };
}

export function normalizeLabOSActionCardEditableContent(
  value: unknown,
  cardType?: LabOSActionCardType,
): LabOSActionCardEditableContent | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const kind =
    asEnumValue(record.kind, ['future_task', 'evidence_item', 'mira_archive'] as const) ||
    (cardType === 'future_task'
      ? 'future_task'
      : cardType === 'evidence_item'
        ? 'evidence_item'
        : cardType === 'mira_note'
          ? 'mira_archive'
          : undefined);

  if (kind === 'future_task') {
    return {
      schemaVersion: LABOS_ACTION_CARD_EDITABLE_SCHEMA_VERSION,
      kind,
      title: trimSummary(record.title, 'Untitled future task'),
      description: trimSummary(record.description ?? record.summary, ''),
      priority: asEnumValue(record.priority, ['low', 'medium', 'high'] as const),
      dueDate: asOptionalTrimmedString(record.dueDate),
      ownerHint: asOptionalTrimmedString(record.ownerHint),
    };
  }

  if (kind === 'evidence_item') {
    return {
      schemaVersion: LABOS_ACTION_CARD_EDITABLE_SCHEMA_VERSION,
      kind,
      title: trimSummary(record.title, 'Untitled evidence item'),
      summary: trimSummary(record.summary ?? record.description, ''),
      evidenceRefs: asStringArray(record.evidenceRefs).slice(0, 20),
      confidence: asEnumValue(record.confidence, ['low', 'medium', 'high'] as const),
    };
  }

  if (kind === 'mira_archive') {
    const topic = trimSummary(record.topic ?? record.scopeSummary, '');
    return {
      schemaVersion: LABOS_ACTION_CARD_EDITABLE_SCHEMA_VERSION,
      kind,
      title: trimSummary(record.title, 'Untitled Mira archive'),
      ...(topic ? { topic } : {}),
      markdown: trimSummary(record.markdown ?? record.content, '', 200000),
      targetNodeId: asOptionalTrimmedString(record.targetNodeId),
      targetPath: asOptionalTrimmedString(record.targetPath),
    };
  }

  return undefined;
}

export function normalizeLabOSActionCardPayload(value: unknown): LabOSActionCardPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const cardType = asEnumValue(
    record.cardType,
    ['workflow_plan', 'research_candidate', 'mira_note', 'future_task', 'evidence_item', 'validation_package'] as const,
  );
  const actionType = asEnumValue(record.actionType, LABOS_ACTION_KINDS);
  const targetModule = asEnumValue(record.targetModule, LABOS_MODULES);
  const actionId = asNonEmptyString(record.actionId);
  if (!cardType || !actionType || !targetModule || !actionId) return null;

  const card: LabOSActionCardPayload = {
    cardType,
    actionId,
    workflowRunId: asOptionalTrimmedString(record.workflowRunId),
    workflowStepId: asOptionalTrimmedString(record.workflowStepId),
    actionType,
    targetModule,
    targetLocation: asOptionalTrimmedString(record.targetLocation),
    draftSummary: trimSummary(record.draftSummary),
    editableContent: normalizeLabOSActionCardEditableContent(record.editableContent, cardType),
    sourceRefs: asArray(record.sourceRefs).map(normalizeHomeContextRef).filter(isPresent),
    provenance: asPlainRecord(record.provenance) || {},
    confirmationToken: asOptionalTrimmedString(record.confirmationToken),
    draftHash: asOptionalTrimmedString(record.draftHash),
    confirmAction: normalizeActionCardRouteAction(record.confirmAction),
    cancelAction: normalizeActionCardRouteAction(record.cancelAction),
    status: asEnumValue(
      record.status,
      ['pending', 'running', 'waiting_approval', 'waiting_task_completion', 'completed', 'failed', 'cancelled', 'skipped'] as const,
    ),
  };

  return validateLabOSActionCardPayload(card).ok ? card : null;
}

export function validateLabOSActionCardPayload(card: LabOSActionCardPayload): LabOSActionCardValidationResult {
  if (!card.actionId || !card.cardType || !card.actionType || !card.targetModule) {
    return { ok: false, code: 'invalid_action_card', message: 'Action card is missing required identity fields.' };
  }
  if (isWritableActionCard(card)) {
    if (!card.workflowRunId) {
      return { ok: false, code: 'missing_workflow_run', message: 'Writable action card requires workflowRunId.' };
    }
    if (!card.workflowStepId) {
      return { ok: false, code: 'missing_workflow_step', message: 'Writable action card requires workflowStepId.' };
    }
    if (!card.draftHash) {
      return { ok: false, code: 'missing_draft_hash', message: 'Writable action card requires draftHash.' };
    }
  }
  return { ok: true, card };
}

function normalizeHomeContextPreferences(value: unknown): HomeContextPreferences {
  const record = asRecord(value) || {};
  return {
    language: asEnumValue(record.language, ['zh', 'en', 'auto'] as const) || 'zh',
    detailLevel: asIntegerRange(record.detailLevel, 1, 5, 3) as 1 | 2 | 3 | 4 | 5,
    outputFormat: asEnumValue(record.outputFormat, ['mixed', 'markdown', 'structured'] as const) || 'mixed',
    citationDensity: asEnumValue(record.citationDensity, ['compact', 'normal', 'dense'] as const) || 'compact',
    evidenceMode: asEnumValue(record.evidenceMode, ['external_first', 'internal_first', 'mixed'] as const) || 'external_first',
    preferredDatabases: asStringArray(record.preferredDatabases, ['PubMed', 'bioRxiv']),
    defaultDateRange: asEnumValue(record.defaultDateRange, ['recent', 'all', 'custom'] as const) || 'recent',
    lowRelevancePolicy: asEnumValue(record.lowRelevancePolicy, ['collapse', 'hide', 'show'] as const) || 'collapse',
    proactiveSuggestions: asBoolean(record.proactiveSuggestions, true),
    allowDraftActions: asBoolean(record.allowDraftActions, true),
    requireConfirmationBeforeWrite: asBoolean(record.requireConfirmationBeforeWrite, true),
    showContextTrace: asBoolean(record.showContextTrace, true),
    promptToAttachContext: asBoolean(record.promptToAttachContext, true),
    autoUseCurrentAttachments: asBoolean(record.autoUseCurrentAttachments, true),
    autoUseRecentProjects: false,
    fieldSources: normalizePreferenceFieldSources(record.fieldSources),
  };
}

function normalizeHomeSourcePlan(value: unknown): HomeContextSourcePlan {
  const record = asRecord(value) || {};
  return {
    externalLiterature: asBoolean(record.externalLiterature, false),
    internalRag: asBoolean(record.internalRag, false),
    renderStructuredResponse: asBoolean(record.renderStructuredResponse, false),
    readOnly: asBoolean(record.readOnly, true),
    allowDraft: asBoolean(record.allowDraft, false),
    requireConfirmationBeforeWrite: asBoolean(record.requireConfirmationBeforeWrite, true),
    preferredTools: asStringArray(record.preferredTools),
    blockedTools: asStringArray(record.blockedTools),
    reasons: asStringArray(record.reasons),
  };
}

function normalizeHomeActionPolicy(value: unknown): HomeContextActionPolicy {
  const record = asRecord(value) || {};
  const allowedActionKinds = asEnumArray(record.allowedActionKinds, LABOS_ACTION_KINDS);
  const blockedActionKinds = asEnumArray(record.blockedActionKinds, LABOS_ACTION_KINDS);
  return {
    readOnly: asBoolean(record.readOnly, true),
    allowDraftActions: asBoolean(record.allowDraftActions, true),
    requireConfirmationBeforeWrite: asBoolean(record.requireConfirmationBeforeWrite, true),
    allowCommitWrite: asBoolean(record.allowCommitWrite, false),
    allowedActionKinds: allowedActionKinds.length ? allowedActionKinds : ['read', 'plan', 'draft'],
    blockedActionKinds,
    reasons: asStringArray(record.reasons),
  };
}

function normalizeHomeWorkflowContext(value: unknown): HomeWorkflowContext {
  const record = asRecord(value) || {};
  return {
    stage: asEnumValue(record.stage, HOME_WORKFLOW_STAGES) || 'none',
    activeRunId: asOptionalTrimmedString(record.activeRunId),
    goal: asOptionalTrimmedString(record.goal),
    status: asEnumValue(
      record.status,
      ['active', 'waiting_approval', 'waiting_task_completion', 'completed', 'failed', 'cancelled', 'resumed'] as const,
    ),
    workingSet: asArray(record.workingSet).map((item) => {
      const itemRecord = asRecord(item) || {};
      return {
        refType: asNonEmptyString(itemRecord.refType) || 'unknown',
        refId: asNonEmptyString(itemRecord.refId) || 'unknown',
        title: asOptionalTrimmedString(itemRecord.title),
        summary: trimSummary(itemRecord.summary),
      };
    }),
    openDecisions: asStringArray(record.openDecisions),
    nextActions: asArray(record.nextActions).map(normalizeLabOSAction).filter(isPresent),
  };
}

function normalizeLabOSAction(value: unknown): LabOSAction | null {
  const record = asRecord(value);
  if (!record) return null;
  const kind = asEnumValue(record.kind, LABOS_ACTION_KINDS);
  if (!kind) return null;
  const targetModule = asEnumValue(record.targetModule, LABOS_MODULES) || 'home';
  return {
    id: asNonEmptyString(record.id) || `${kind}:${targetModule}`,
    kind,
    targetModule,
    targetId: asOptionalTrimmedString(record.targetId),
    title: asNonEmptyString(record.title) || kind,
    summary: trimSummary(record.summary),
    inputRefs: asStringArray(record.inputRefs),
    outputRefs: asStringArray(record.outputRefs),
    expectedOutputType: asOptionalTrimmedString(record.expectedOutputType),
    requiresConfirmation: asBoolean(record.requiresConfirmation, kind === 'commit_write' || kind === 'propose_write' || kind === 'archive'),
    status: asEnumValue(
      record.status,
      ['pending', 'running', 'waiting_approval', 'waiting_task_completion', 'completed', 'failed', 'cancelled', 'skipped'] as const,
    ) || 'pending',
    approval: asPlainRecord(record.approval) as LabOSAction['approval'],
    provenance: asPlainRecord(record.provenance),
  };
}

function normalizeActionCardRouteAction(value: unknown): LabOSActionCardRouteAction | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const method = asEnumValue(record.method, ['POST'] as const);
  const path = asNonEmptyString(record.path);
  if (!method || !path) return undefined;
  return {
    method,
    path,
    requiresConfirmationToken: asBoolean(record.requiresConfirmationToken, false),
  };
}

function isWritableActionCard(card: LabOSActionCardPayload): boolean {
  return (
    card.actionType === 'propose_write' ||
    card.actionType === 'archive' ||
    card.actionType === 'commit_write' ||
    Boolean(card.confirmAction?.requiresConfirmationToken)
  );
}

function normalizeSelectedTool(value: unknown): SelectedLabOSTool {
  const record = asRecord(value) || {};
  const actionType = asEnumValue(
    record.actionType,
    ['read', 'plan', 'draft', 'propose_write', 'archive', 'handoff'] as const,
  ) || 'read';
  return {
    toolName: asNonEmptyString(record.toolName) || 'unknown_tool',
    module: asEnumValue(record.module, LABOS_MODULES) || 'home',
    actionType,
    enabled: asBoolean(record.enabled, false),
    blockedReason: asOptionalTrimmedString(record.blockedReason),
    missingParams: asStringArray(record.missingParams),
    parameterResolution: normalizeToolParameterResolution(record.parameterResolution),
    displayFamily: asEnumValue(record.displayFamily, HOME_DISPLAY_FAMILIES),
    resultKind: asEnumValue(record.resultKind, HOME_TOOL_RESULT_KINDS),
    preferredCardTypes: asStringArray(record.preferredCardTypes).slice(0, 8),
  };
}

function normalizeHomeRuntimeSkillUsageItem(value: unknown): HomeRuntimeSkillUsageItem | null {
  const record = asRecord(value);
  if (!record) return null;
  const name = asNonEmptyString(record.name);
  if (!name) return null;
  return {
    name,
    displayName: asOptionalTrimmedString(record.displayName),
    status: asEnumValue(record.status, ['selected', 'completed', 'failed'] as const) || 'selected',
    resultCount:
      typeof record.resultCount === 'number' && Number.isFinite(record.resultCount)
        ? Math.max(0, Math.floor(record.resultCount))
        : undefined,
    reason: asOptionalTrimmedString(record.reason),
    error: asOptionalTrimmedString(record.error),
    updatedAt: asOptionalTrimmedString(record.updatedAt),
  };
}

function normalizeHomeRuntimeSkillScope(value: unknown): HomeRuntimeSkillScope | null {
  const record = asRecord(value);
  if (!record) return null;
  const requestedSkillSlugs = asStringArray(record.requestedSkillSlugs);
  const selectedSkillSlugs = asStringArray(record.selectedSkillSlugs);
  const enabledSkillSlugs = asStringArray(record.enabledSkillSlugs);
  if (!requestedSkillSlugs.length && !selectedSkillSlugs.length && !enabledSkillSlugs.length) return null;
  return {
    explicit: asBoolean(record.explicit, false),
    requestedSkillSlugs,
    selectedSkillSlugs,
    enabledSkillSlugs,
  };
}

function normalizeHomeRuntimeSkillDiagnosticItem(value: unknown): HomeRuntimeSkillDiagnosticItem | null {
  const record = asRecord(value);
  if (!record) return null;
  const name = asNonEmptyString(record.name);
  if (!name) return null;
  const status = asEnumValue(
    record.status,
    ['discovered', 'activated', 'selected', 'completed', 'failed', 'blocked'] as const,
  );
  const source = asEnumValue(
    record.source,
    ['discovered', 'selected', 'tool_result', 'skill_result', 'legacy'] as const,
  );
  return {
    name,
    displayName: asOptionalTrimmedString(record.displayName),
    status: status || 'discovered',
    source: source || undefined,
    reason: asOptionalTrimmedString(record.reason),
    resultCount:
      typeof record.resultCount === 'number' && Number.isFinite(record.resultCount)
        ? Math.max(0, Math.floor(record.resultCount))
        : undefined,
    error: asOptionalTrimmedString(record.error),
    score:
      typeof record.score === 'number' && Number.isFinite(record.score)
        ? record.score
        : undefined,
    reasons: asStringArray(record.reasons).slice(0, 8),
    matchedFields: asStringArray(record.matchedFields).slice(0, 8),
    updatedAt: asOptionalTrimmedString(record.updatedAt),
  };
}

function normalizeHomeRuntimeSkillDiagnosticItems(value: unknown) {
  return asArray(value)
    .map(normalizeHomeRuntimeSkillDiagnosticItem)
    .filter(isPresent)
    .slice(0, 24);
}

function normalizeHomeRuntimeSkillDiagnostics(value: unknown): HomeRuntimeSkillDiagnostics | null {
  const record = asRecord(value);
  if (!record) return null;
  const discoveredSkills = normalizeHomeRuntimeSkillDiagnosticItems(record.discoveredSkills);
  const activatedSkills = normalizeHomeRuntimeSkillDiagnosticItems(record.activatedSkills);
  const executedSkills = normalizeHomeRuntimeSkillDiagnosticItems(record.executedSkills);
  const blockedSkills = normalizeHomeRuntimeSkillDiagnosticItems(record.blockedSkills);
  const errors = normalizeHomeRuntimeSkillDiagnosticItems(record.errors);
  if (
    discoveredSkills.length === 0 &&
    activatedSkills.length === 0 &&
    executedSkills.length === 0 &&
    blockedSkills.length === 0 &&
    errors.length === 0
  ) {
    return null;
  }
  return {
    schemaVersion: HOME_RUNTIME_SKILL_DIAGNOSTIC_SCHEMA_VERSION,
    discoveredSkills,
    activatedSkills,
    executedSkills,
    blockedSkills,
    errors,
  };
}

function normalizeHomeDisplayPolicy(value: unknown): HomeDisplayPolicy | null {
  const record = asRecord(value);
  if (!record) return null;
  const primaryFamily = asEnumValue(record.primaryFamily, HOME_DISPLAY_FAMILIES);
  if (!primaryFamily) return null;
  const allowedFamilies = asEnumArray(record.allowedFamilies, HOME_DISPLAY_FAMILIES);
  const resultKinds = asEnumArray(record.resultKinds, HOME_TOOL_RESULT_KINDS);
  return {
    primaryFamily,
    allowedFamilies: Array.from(new Set([primaryFamily, ...allowedFamilies])).slice(0, 8),
    preferredCardTypes: asStringArray(record.preferredCardTypes).slice(0, 12),
    toolNames: asStringArray(record.toolNames).slice(0, 20),
    resultKinds: Array.from(new Set(resultKinds)).slice(0, 12),
    requiresConfirmation: asBoolean(record.requiresConfirmation, false),
    source: asEnumValue(record.source, ['intent', 'tool', 'action_policy'] as const) || 'intent',
    reason: trimSummary(record.reason, 'Display policy normalized from context packet.'),
  };
}

function normalizeToolParameterResolution(value: unknown): ToolParameterResolution | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const parameterRecords = asRecord(record.parameters) || {};
  const parameters: Record<string, ToolParameterValueResolution> = {};
  for (const [key, rawValue] of Object.entries(parameterRecords)) {
    const rawRecord = asRecord(rawValue) || {};
    parameters[key] = {
      value: rawRecord.value,
      source: asEnumValue(
        rawRecord.source,
        ['user_message', 'attached_context', 'workflow_output', 'preference', 'module_default', 'follow_up', 'missing'] as const,
      ) || 'missing',
      sourceRef: asOptionalTrimmedString(rawRecord.sourceRef),
      required: asBoolean(rawRecord.required, false),
      missing: asBoolean(rawRecord.missing, false),
    };
  }
  return {
    toolName: asNonEmptyString(record.toolName) || 'unknown_tool',
    parameters,
    missingParams: asStringArray(record.missingParams),
    followUpQuestions: asStringArray(record.followUpQuestions).slice(0, 3),
  };
}

function normalizeModuleHandoffPayload(value: unknown): ModuleHandoffPayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const sourceModule = asEnumValue(record.sourceModule, LABOS_MODULES);
  const targetModule = asEnumValue(record.targetModule, LABOS_MODULES);
  const targetAction = asNonEmptyString(record.targetAction);
  if (!sourceModule || !targetModule || !targetAction) return null;
  return {
    handoffId: asOptionalTrimmedString(record.handoffId),
    sourceModule,
    targetModule,
    targetAction,
    summary: trimSummary(record.summary),
    contextRefs: asArray(record.contextRefs).map(normalizeHomeContextRef).filter(isPresent),
    linkedRefs: asArray(record.linkedRefs).map((item) => {
      const itemRecord = asRecord(item) || {};
      return {
        refType: asNonEmptyString(itemRecord.refType) || 'unknown',
        refId: asNonEmptyString(itemRecord.refId) || 'unknown',
        title: asOptionalTrimmedString(itemRecord.title),
      };
    }),
    trustTier: asEnumValue(record.trustTier, ['low', 'medium', 'high'] as const),
    payload: asPlainRecord(record.payload),
    provenance: asPlainRecord(record.provenance),
  };
}

function normalizeHomeAttachmentSummary(value: unknown): HomeContextAttachmentSummary {
  const record = asRecord(value) || {};
  return {
    id: asNonEmptyString(record.id) || 'unknown',
    name: asNonEmptyString(record.name) || 'attachment',
    mimeType: asOptionalTrimmedString(record.mimeType),
    summary: trimSummary(record.summary),
    fullText: asOptionalTrimmedString(record.fullText),
  };
}

function normalizeHomeSourceSummary(value: unknown): HomeContextSourceSummary {
  const record = asRecord(value) || {};
  const ref = normalizeHomeContextRef(record.ref) || {
    type: 'mira_node',
    id: 'unknown',
  };
  return {
    ref,
    title: asOptionalTrimmedString(record.title),
    summary: trimSummary(record.summary),
    permission: asOptionalTrimmedString(record.permission),
    provenance: asPlainRecord(record.provenance),
  };
}

function normalizeBlockedSource(value: unknown): HomeContextBlockedSource {
  const record = asRecord(value) || {};
  return {
    ref: normalizeHomeContextRef(record.ref) || undefined,
    sourceType: asEnumValue(
      record.sourceType,
      ['mira_node', 'analysis_artifact', 'analysis_selection', 'tracking_signal', 'tracking_feed_item', 'attachment', 'handoff', 'tool'] as const,
    ) || 'tool',
    sourceId: asOptionalTrimmedString(record.sourceId),
    reason: trimSummary(record.reason, 'Source was blocked by context policy.'),
  };
}

function normalizeReplayMetadata(value: unknown, workflow: HomeWorkflowContext): HomeContextReplayMetadata {
  const record = asRecord(value) || {};
  const toolGating = asRecord(record.toolGating) || {};
  const contextPacking = asRecord(record.contextPacking) || {};
  const retrievals = asRecord(record.retrievals) || {};
  const workflowCheckpoint = asRecord(record.workflowCheckpoint);
  return {
    classifierVersion: asNonEmptyString(record.classifierVersion) || 'home-intent/deterministic-v1',
    sourcePlanVersion: asNonEmptyString(record.sourcePlanVersion) || 'home-source-plan/v1',
    resolverVersions: asPlainRecord(record.resolverVersions) as Record<string, string> || {},
    memory: normalizeMemoryReplayMetadata(record.memory),
    memoryExplanation: normalizeMemoryReplayExplanation(record.memoryExplanation),
    memoryExperience: normalizeHomeMemoryExperienceMetadata(record.memoryExperience),
    preferenceSources: asArray(record.preferenceSources)
      .map((item) => {
        const itemRecord = asRecord(item) || {};
        const category = asEnumValue(itemRecord.category, HOME_CONTEXT_PREFERENCE_CATEGORIES);
        const key = asNonEmptyString(itemRecord.key);
        const source = asEnumValue(itemRecord.source, HOME_CONTEXT_PREFERENCE_SOURCES);
        if (!category || !key || !source) return null;
        return {
          category,
          key,
          source,
          preferenceId: asOptionalTrimmedString(itemRecord.preferenceId),
        };
      })
      .filter(isPresent),
    toolGating: {
      enabledTools: asStringArray(toolGating.enabledTools),
      blockedTools: asStringArray(toolGating.blockedTools),
      violations: asArray(toolGating.violations).map(normalizePolicyViolation),
    },
    contextPacking: {
      budgetChars: asIntegerRange(contextPacking.budgetChars, 0, HOME_PROMPT_CONTEXT_SUMMARY_MAX_LENGTH, HOME_PROMPT_CONTEXT_SUMMARY_MAX_LENGTH),
      usedChars: asIntegerRange(contextPacking.usedChars, 0, HOME_PROMPT_CONTEXT_SUMMARY_MAX_LENGTH, 0),
      packedSources: asArray(contextPacking.packedSources).map(normalizePackedSource),
      truncated: asBoolean(contextPacking.truncated, false),
    },
    retrievals: {
      internalRag: asArray(retrievals.internalRag).map(normalizeRetrievalReplay),
      externalLiterature: asArray(retrievals.externalLiterature).map(normalizeRetrievalReplay),
    },
    memoryRetrieval: normalizeHomeMemoryRetrievalPacket(record.memoryRetrieval),
    sessionSummary: normalizeSessionSummaryReplay(record.sessionSummary),
    promptContext: normalizePromptContextReplay(record.promptContext),
    displayPolicy: normalizeHomeDisplayPolicy(record.displayPolicy) || undefined,
    workflowCheckpoint: workflowCheckpoint
      ? {
          workflowRunId: asOptionalTrimmedString(workflowCheckpoint.workflowRunId),
          workflowStepId: asOptionalTrimmedString(workflowCheckpoint.workflowStepId),
          stage: asEnumValue(workflowCheckpoint.stage, HOME_WORKFLOW_STAGES) || workflow.stage,
          status: asOptionalTrimmedString(workflowCheckpoint.status),
        }
      : {
          workflowRunId: workflow.activeRunId,
          stage: workflow.stage,
          status: workflow.status,
        },
  };
}

function normalizeSessionSummaryReplay(value: unknown): HomeSessionSummaryReplay | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const mode = asEnumValue(record.mode, ['off', 'shadow', 'primary'] as const);
  const status = asEnumValue(record.status, ['skipped', 'missing', 'used', 'rebuilt', 'updated', 'failed'] as const);
  if (!mode || !status) return undefined;
  const sourceRange = asRecord(record.sourceMessageRange);
  return {
    mode,
    status,
    schemaVersion: asOptionalTrimmedString(record.schemaVersion),
    sourceMessageRange: sourceRange
      ? {
          fromMessageId: asOptionalTrimmedString(sourceRange.fromMessageId),
          toMessageId: asOptionalTrimmedString(sourceRange.toMessageId),
          messageCount: asIntegerRange(sourceRange.messageCount, 0, 100000, 0),
        }
      : undefined,
    injectedIntoPrompt: asBoolean(record.injectedIntoPrompt, false),
    recentTurnCount: asIntegerRange(record.recentTurnCount, 0, 200, 0),
    summaryChars: asIntegerRange(record.summaryChars, 0, 20000, 0),
    recentTurnsChars: asIntegerRange(record.recentTurnsChars, 0, 200000, 0),
    truncated: asBoolean(record.truncated, false),
    error: asOptionalTrimmedString(record.error),
  };
}

function normalizePromptContextReplay(value: unknown): HomePromptContextReplay | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  return {
    injectedBlocks: asStringArray(record.injectedBlocks).slice(0, 50),
    omittedBlocks: asStringArray(record.omittedBlocks).slice(0, 50),
    budgetChars: asIntegerRange(record.budgetChars, 0, 200000, 0),
    usedChars: asIntegerRange(record.usedChars, 0, 200000, 0),
    truncated: asBoolean(record.truncated, false),
  };
}

function normalizePolicyViolation(value: unknown): HomeContextPolicyViolation {
  const record = asRecord(value) || {};
  return {
    id: asOptionalTrimmedString(record.id),
    toolName: asOptionalTrimmedString(record.toolName),
    actionKind: asEnumValue(record.actionKind, LABOS_ACTION_KINDS),
    reason: trimSummary(record.reason, 'Tool call was blocked by context policy.'),
    attemptedAt: asOptionalTrimmedString(record.attemptedAt),
    metadata: asPlainRecord(record.metadata),
  };
}

function normalizeRetrievalReplay(value: unknown): HomeContextRetrievalReplay {
  const record = asRecord(value) || {};
  const normalizedRag = normalizeHomeRagSearchInput({
    query: asOptionalTrimmedString(record.query) || 'internal_rag',
    filters: record.filters,
    sort: record.sort,
  });
  const sort = asEnumValue(record.sort, HOME_RAG_SORT_MODES);
  const appliedFilters = asStringArray(record.appliedFilters).slice(0, 20);
  const relaxedFilters = asStringArray(record.relaxedFilters).slice(0, 20);
  const warnings = asStringArray(record.warnings).slice(0, 20);
  const errorRecord = asRecord(record.error);
  const errorCode = asNonEmptyString(record.errorCode) || asNonEmptyString(errorRecord?.code) || undefined;
  const errorReason =
    trimSummary(record.errorReason, '') ||
    trimSummary(errorRecord?.reason, '') ||
    trimSummary(errorRecord?.message, '');
  return {
    toolName: asNonEmptyString(record.toolName) || 'unknown_tool',
    query: trimSummary(record.query),
    queryMode: asEnumValue(record.queryMode, ['semantic', 'metadata', 'hybrid'] as const),
    resultRefs: asStringArray(record.resultRefs).slice(0, 50),
    resultCount: asIntegerRange(record.resultCount, 0, 1000, 0),
    blocked: asBoolean(record.blocked, false),
    ...(errorCode ? { errorCode } : {}),
    ...(errorReason ? { errorReason } : {}),
    ...(normalizedRag.filters ? { filters: normalizedRag.filters } : {}),
    ...(sort ? { sort } : {}),
    ...(appliedFilters.length > 0 ? { appliedFilters } : {}),
    ...(relaxedFilters.length > 0 ? { relaxedFilters } : {}),
    ...(warnings.length > 0 ? { warnings } : {}),
  };
}

function normalizePackedSource(value: unknown): HomeContextPackedSource {
  const record = asRecord(value) || {};
  return {
    sourceId: asNonEmptyString(record.sourceId) || 'unknown',
    sourceType: asEnumValue(
      record.sourceType,
      ['mira_node', 'analysis_artifact', 'analysis_selection', 'tracking_signal', 'tracking_feed_item', 'attachment', 'internal_rag', 'external_literature'] as const,
    ) || 'attachment',
    title: asOptionalTrimmedString(record.title),
    usedChars: asIntegerRange(record.usedChars, 0, HOME_PROMPT_CONTEXT_SUMMARY_MAX_LENGTH, 0),
    budgetChars: asIntegerRange(record.budgetChars, 0, HOME_PROMPT_CONTEXT_SUMMARY_MAX_LENGTH, 0),
    truncated: asBoolean(record.truncated, false),
  };
}

function normalizePreferenceFieldSources(value: unknown): HomeContextPreferences['fieldSources'] {
  const record = asRecord(value);
  if (!record) return {};
  const result: NonNullable<HomeContextPreferences['fieldSources']> = {};
  const preferenceKeys = [
    'language',
    'detailLevel',
    'outputFormat',
    'citationDensity',
    'evidenceMode',
    'preferredDatabases',
    'defaultDateRange',
    'lowRelevancePolicy',
    'proactiveSuggestions',
    'allowDraftActions',
    'requireConfirmationBeforeWrite',
    'showContextTrace',
    'promptToAttachContext',
    'autoUseCurrentAttachments',
    'autoUseRecentProjects',
  ] as const;
  for (const key of preferenceKeys) {
    const sourceRecord = asRecord(record[key]);
    const source = asEnumValue(sourceRecord?.source, HOME_CONTEXT_PREFERENCE_SOURCES);
    if (!sourceRecord || !source) continue;
    result[key] = {
      source,
      preferenceId: asOptionalTrimmedString(sourceRecord.preferenceId),
      locked: asBoolean(sourceRecord.locked, false),
    };
  }
  return result;
}

function normalizeConfidenceMap(value: unknown, primaryIntent: HomeIntent): Partial<Record<HomeIntent, number>> {
  const record = asRecord(value) || {};
  const result: Partial<Record<HomeIntent, number>> = {};
  for (const intent of HOME_INTENTS) {
    if (record[intent] !== undefined) {
      result[intent] = asNumberInRange(record[intent], 0, 1, intent === primaryIntent ? 1 : 0);
    }
  }
  if (result[primaryIntent] === undefined) result[primaryIntent] = 1;
  return result;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : null;
}

function asPlainRecord(value: unknown): Record<string, unknown> | undefined {
  return sanitizePacketRecord(value);
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function asEnumValue<T extends readonly string[]>(value: unknown, allowed: T): T[number] | undefined {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value) ? (value as T[number]) : undefined;
}

function asEnumArray<T extends readonly string[]>(value: unknown, allowed: T): T[number][] {
  return asArray(value).filter((item): item is T[number] => typeof item === 'string' && (allowed as readonly string[]).includes(item));
}

function asNonEmptyString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : undefined;
}

function asOptionalTrimmedString(value: unknown): string | undefined {
  return asNonEmptyString(value);
}

function asStringArray(value: unknown, fallback: string[] = []): string[] {
  const values = asArray(value)
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter((item) => item.length > 0);
  return values.length ? values : fallback;
}

function asBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

function asNumberInRange(value: unknown, min: number, max: number, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
}

function asIntegerRange(value: unknown, min: number, max: number, fallback: number): number {
  return Math.round(asNumberInRange(value, min, max, fallback));
}

function trimSummary(value: unknown, fallback = '', maxLength = HOME_CONTEXT_SUMMARY_MAX_LENGTH): string {
  const text = typeof value === 'string' ? value.trim() : fallback;
  if (text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`;
}

function sanitizePacketRecord(value: unknown, depth = 0): Record<string, unknown> | undefined {
  const record = asRecord(value);
  if (!record || depth > MAX_SAFE_RECORD_DEPTH) return undefined;
  const result: Record<string, unknown> = {};
  for (const [key, rawValue] of Object.entries(record)) {
    if (isBlockedPacketKey(key)) continue;
    const sanitized = sanitizePacketValue(rawValue, depth + 1);
    if (sanitized !== undefined) result[key] = sanitized;
  }
  return Object.keys(result).length > 0 ? result : undefined;
}

function sanitizePacketValue(value: unknown, depth: number): unknown {
  if (value === null) return null;
  if (typeof value === 'string') return trimSummary(value);
  if (typeof value === 'number' || typeof value === 'boolean') return value;
  if (Array.isArray(value)) {
    return value.slice(0, MAX_SAFE_ARRAY_ITEMS).map((item) => sanitizePacketValue(item, depth + 1)).filter(isPresent);
  }
  if (typeof value === 'object') return sanitizePacketRecord(value, depth);
  return undefined;
}

function isBlockedPacketKey(key: string): boolean {
  const normalized = key.replace(/[^a-zA-Z0-9_]/g, '').toLowerCase();
  return BLOCKED_PACKET_KEY_PARTS.some((part) => normalized.includes(part));
}

function isPresent<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
