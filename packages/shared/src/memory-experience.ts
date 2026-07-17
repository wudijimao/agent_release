export const MEMORY_BENEFIT_TYPES = [
  'format',
  'continuity',
  'scope',
  'efficiency',
  'safety',
] as const;

export const MEMORY_ADOPTION_LEVELS = [
  'use',
  'ask',
  'trace_only',
  'exclude',
] as const;

export const MEMORY_ADOPTION_REASONS = [
  'high_confidence_unique_match',
  'multiple_close_matches',
  'low_confidence',
  'project_scope_mismatch',
  'workflow_inactive',
  'pending_or_unconfirmed',
  'archived_or_rejected',
  'assistant_only_evidence',
  'policy_disabled',
] as const;

export const MEMORY_USER_MODES = [
  'strict',
  'balanced',
  'proactive',
] as const;

export const MEMORY_LIFECYCLE_LABELS = [
  'current',
  'review_suggested',
  'possibly_stale',
  'paused',
  'archived',
] as const;

export const MEMORY_LIFECYCLE_ACTIONS = [
  'keep',
  'edit',
  'pause',
  'narrow_scope',
  'archive',
] as const;

export const MEMORY_QUIET_ACTIONS = [
  'auto_apply_preference',
  'quiet_candidate',
  'review_required',
  'route_to_mira_or_evidence',
  'discard',
] as const;

export const MEMORY_QUIET_RISK_CLASSES = [
  'personal_preference',
  'workflow_habit',
  'project_context',
  'scientific_claim',
  'lab_policy',
] as const;

export type MemoryBenefitType = (typeof MEMORY_BENEFIT_TYPES)[number];
export type MemoryAdoptionLevel = (typeof MEMORY_ADOPTION_LEVELS)[number];
export type MemoryAdoptionReason = (typeof MEMORY_ADOPTION_REASONS)[number];
export type MemoryUserMode = (typeof MEMORY_USER_MODES)[number];
export type MemoryLifecycleLabel = (typeof MEMORY_LIFECYCLE_LABELS)[number];
export type MemoryLifecycleAction = (typeof MEMORY_LIFECYCLE_ACTIONS)[number];
export type MemoryQuietAction = (typeof MEMORY_QUIET_ACTIONS)[number];
export type MemoryQuietRiskClass = (typeof MEMORY_QUIET_RISK_CLASSES)[number];

export interface MemoryBenefitItem {
  id: string;
  type: MemoryBenefitType;
  label: string;
  summary: string;
  source:
    | 'confirmed_memory'
    | 'conversation_evidence'
    | 'session_summary'
    | 'excluded_memory';
  memoryEntryId?: string;
  evidenceId?: string;
  userVisible: boolean;
}

export interface MemoryBenefitSummary {
  schemaVersion: 'memory-benefit-summary/v1';
  usedCount: number;
  excludedCount: number;
  conversationEvidenceCount: number;
  benefits: MemoryBenefitItem[];
  hiddenReason?: string;
}

export interface MemoryClarificationCandidate {
  id: string;
  title: string;
  summary: string;
  sourceType: 'conversation' | 'session_summary' | 'confirmed_memory';
  sessionId?: string;
  memoryEntryId?: string;
  score?: number;
}

export interface MemoryAdoptionDecision {
  schemaVersion: 'memory-adoption-decision/v1';
  level: MemoryAdoptionLevel;
  reasons: MemoryAdoptionReason[];
  confidence: number;
  selectedEvidenceIds: string[];
  clarificationCandidates: MemoryClarificationCandidate[];
  userVisibleSummary: string;
}

export interface MemoryUserModePolicy {
  mode: MemoryUserMode;
  allowCrossSessionRecall: boolean;
  allowAutoCandidate: boolean;
  showBenefitSummary: boolean;
  highConfidenceThreshold: number;
  askThreshold: number;
  maxClarificationCandidates: number;
}

export interface MemoryLifecycleView {
  memoryEntryId: string;
  label: MemoryLifecycleLabel;
  reason: string;
  recommendedActions: MemoryLifecycleAction[];
}

export interface MemoryQuietDecision {
  schemaVersion: 'memory-quiet-decision/v1';
  action: MemoryQuietAction;
  riskClass: MemoryQuietRiskClass;
  sourceEntryId?: string;
  appliedPreferenceKeys?: string[];
  undoToken?: string;
  userVisibleSummary: string;
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
}

function asString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function asStringArray(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    : [];
}

function asNumber(value: unknown, fallback = 0) {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function asBoolean(value: unknown, fallback = false) {
  return typeof value === 'boolean' ? value : fallback;
}

function asEnum<T extends readonly string[]>(value: unknown, values: T, fallback: T[number]): T[number] {
  return typeof value === 'string' && values.includes(value) ? (value as T[number]) : fallback;
}

function asOptionalEnum<T extends readonly string[]>(value: unknown, values: T): T[number] | undefined {
  return typeof value === 'string' && values.includes(value) ? (value as T[number]) : undefined;
}

function clamp01(value: unknown, fallback = 0) {
  return Math.max(0, Math.min(1, asNumber(value, fallback)));
}

export function normalizeMemoryBenefitItem(value: unknown): MemoryBenefitItem | null {
  const record = asRecord(value);
  if (!record) return null;
  const id = asString(record.id);
  const label = asString(record.label);
  const summary = asString(record.summary);
  if (!id || !label || !summary) return null;
  return {
    id,
    type: asEnum(record.type, MEMORY_BENEFIT_TYPES, 'efficiency'),
    label,
    summary,
    source: asEnum(
      record.source,
      ['confirmed_memory', 'conversation_evidence', 'session_summary', 'excluded_memory'] as const,
      'confirmed_memory',
    ),
    memoryEntryId: asString(record.memoryEntryId),
    evidenceId: asString(record.evidenceId),
    userVisible: asBoolean(record.userVisible, true),
  };
}

export function normalizeMemoryBenefitSummary(value: unknown): MemoryBenefitSummary | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const benefits = (Array.isArray(record.benefits) ? record.benefits : [])
    .map(normalizeMemoryBenefitItem)
    .filter((item): item is MemoryBenefitItem => Boolean(item));
  return {
    schemaVersion: 'memory-benefit-summary/v1',
    usedCount: Math.max(0, Math.round(asNumber(record.usedCount, 0))),
    excludedCount: Math.max(0, Math.round(asNumber(record.excludedCount, 0))),
    conversationEvidenceCount: Math.max(0, Math.round(asNumber(record.conversationEvidenceCount, 0))),
    benefits,
    hiddenReason: asString(record.hiddenReason),
  };
}

export function normalizeMemoryClarificationCandidate(value: unknown): MemoryClarificationCandidate | null {
  const record = asRecord(value);
  if (!record) return null;
  const id = asString(record.id);
  const title = asString(record.title);
  const summary = asString(record.summary);
  if (!id || !title || !summary) return null;
  return {
    id,
    title,
    summary,
    sourceType: asEnum(record.sourceType, ['conversation', 'session_summary', 'confirmed_memory'] as const, 'conversation'),
    sessionId: asString(record.sessionId),
    memoryEntryId: asString(record.memoryEntryId),
    score: typeof record.score === 'number' && Number.isFinite(record.score) ? record.score : undefined,
  };
}

export function normalizeMemoryAdoptionDecision(value: unknown): MemoryAdoptionDecision | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  return {
    schemaVersion: 'memory-adoption-decision/v1',
    level: asEnum(record.level, MEMORY_ADOPTION_LEVELS, 'trace_only'),
    reasons: asStringArray(record.reasons)
      .map((reason) => asOptionalEnum(reason, MEMORY_ADOPTION_REASONS))
      .filter((reason): reason is MemoryAdoptionReason => Boolean(reason)),
    confidence: clamp01(record.confidence, 0),
    selectedEvidenceIds: asStringArray(record.selectedEvidenceIds),
    clarificationCandidates: (Array.isArray(record.clarificationCandidates) ? record.clarificationCandidates : [])
      .map(normalizeMemoryClarificationCandidate)
      .filter((item): item is MemoryClarificationCandidate => Boolean(item)),
    userVisibleSummary: asString(record.userVisibleSummary) || '本轮 Memory 只记录 trace，未改变回答上下文。',
  };
}

export function normalizeMemoryUserModePolicy(value: unknown): MemoryUserModePolicy | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const mode = asEnum(record.mode, MEMORY_USER_MODES, 'balanced');
  return {
    mode,
    allowCrossSessionRecall: asBoolean(record.allowCrossSessionRecall, mode !== 'strict'),
    allowAutoCandidate: asBoolean(record.allowAutoCandidate, mode !== 'strict'),
    showBenefitSummary: asBoolean(record.showBenefitSummary, true),
    highConfidenceThreshold: clamp01(record.highConfidenceThreshold, mode === 'strict' ? 0.9 : mode === 'proactive' ? 0.68 : 0.78),
    askThreshold: clamp01(record.askThreshold, mode === 'strict' ? 0.6 : mode === 'proactive' ? 0.35 : 0.45),
    maxClarificationCandidates: Math.max(1, Math.min(5, Math.round(asNumber(record.maxClarificationCandidates, 3)))),
  };
}

export function normalizeMemoryLifecycleView(value: unknown): MemoryLifecycleView | null {
  const record = asRecord(value);
  if (!record) return null;
  const memoryEntryId = asString(record.memoryEntryId);
  const reason = asString(record.reason);
  if (!memoryEntryId || !reason) return null;
  return {
    memoryEntryId,
    label: asEnum(record.label, MEMORY_LIFECYCLE_LABELS, 'current'),
    reason,
    recommendedActions: asStringArray(record.recommendedActions)
      .map((action) => asOptionalEnum(action, MEMORY_LIFECYCLE_ACTIONS))
      .filter((action): action is MemoryLifecycleAction => Boolean(action)),
  };
}

export function normalizeMemoryQuietDecision(value: unknown): MemoryQuietDecision | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const userVisibleSummary = asString(record.userVisibleSummary);
  if (!userVisibleSummary) return undefined;
  return {
    schemaVersion: 'memory-quiet-decision/v1',
    action: asEnum(record.action, MEMORY_QUIET_ACTIONS, 'discard'),
    riskClass: asEnum(record.riskClass, MEMORY_QUIET_RISK_CLASSES, 'personal_preference'),
    sourceEntryId: asString(record.sourceEntryId),
    appliedPreferenceKeys: asStringArray(record.appliedPreferenceKeys),
    undoToken: asString(record.undoToken),
    userVisibleSummary,
  };
}

export interface HomeMemoryExperienceMetadata {
  benefitSummary?: MemoryBenefitSummary;
  adoptionDecision?: MemoryAdoptionDecision;
  userMode?: MemoryUserMode;
  lifecycleViews?: MemoryLifecycleView[];
  quietDecision?: MemoryQuietDecision;
}

export function normalizeHomeMemoryExperienceMetadata(value: unknown): HomeMemoryExperienceMetadata | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const metadata: HomeMemoryExperienceMetadata = {
    benefitSummary: normalizeMemoryBenefitSummary(record.benefitSummary),
    adoptionDecision: normalizeMemoryAdoptionDecision(record.adoptionDecision),
    userMode: asOptionalEnum(record.userMode, MEMORY_USER_MODES),
    lifecycleViews: (Array.isArray(record.lifecycleViews) ? record.lifecycleViews : [])
      .map(normalizeMemoryLifecycleView)
      .filter((item): item is MemoryLifecycleView => Boolean(item)),
    quietDecision: normalizeMemoryQuietDecision(record.quietDecision),
  };
  if (
    !metadata.benefitSummary &&
    !metadata.adoptionDecision &&
    !metadata.userMode &&
    (!metadata.lifecycleViews || metadata.lifecycleViews.length === 0) &&
    !metadata.quietDecision
  ) {
    return undefined;
  }
  return metadata;
}
