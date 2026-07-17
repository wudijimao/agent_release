export const HOME_MEMORY_RECALL_MODES = ['off', 'shadow', 'primary'] as const;
export const MEMORY_TRIGGER_TYPES = [
  'preload',
  'keyword',
  'topic_switch',
  'agent_tool',
  'explicit',
  'idle',
  'workflow_closeout',
] as const;
export const CONVERSATION_MEMORY_EVIDENCE_TYPES = ['conversation_chunk', 'session_summary'] as const;

export type HomeMemoryRecallMode = (typeof HOME_MEMORY_RECALL_MODES)[number];
export type MemoryTriggerType = (typeof MEMORY_TRIGGER_TYPES)[number];
export type ConversationMemoryEvidenceType = (typeof CONVERSATION_MEMORY_EVIDENCE_TYPES)[number];

export interface MemoryTriggerDecision {
  triggered: boolean;
  triggerType: MemoryTriggerType;
  mode: HomeMemoryRecallMode;
  confidence: number;
  reasons: string[];
  query?: string;
  topicKey?: string;
  projectRefId?: string;
  workflowRunId?: string;
}

export interface ConversationMemoryEvidence {
  id: string;
  evidenceType: ConversationMemoryEvidenceType;
  sessionId: string;
  messageIds: string[];
  title?: string;
  content: string;
  summary?: string;
  score?: number;
  vectorScore?: number;
  recencyScore?: number;
  projectRefId?: string;
  workflowRunId?: string;
  topicKey?: string;
  createdAt?: string;
  updatedAt?: string;
  sourceUrl?: string;
  ignoredReason?: string;
}

export interface HomeMemoryRetrievalPacket {
  schemaVersion: 'home-memory-retrieval/v1';
  mode: HomeMemoryRecallMode;
  trigger: MemoryTriggerDecision;
  confirmedMemoryCount: number;
  conversationEvidence: ConversationMemoryEvidence[];
  summaryEvidence: ConversationMemoryEvidence[];
  pendingCandidateCount?: number;
  injectedIntoPrompt: boolean;
  clarificationHint?: string;
  warnings: string[];
  createdAt: string;
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

export function normalizeMemoryTriggerDecision(value: unknown): MemoryTriggerDecision {
  const record = asRecord(value) || {};
  const triggered = asBoolean(record.triggered, false);
  return {
    triggered,
    triggerType: asEnum(record.triggerType, MEMORY_TRIGGER_TYPES, triggered ? 'keyword' : 'preload'),
    mode: asEnum(record.mode, HOME_MEMORY_RECALL_MODES, 'off'),
    confidence: Math.max(0, Math.min(1, asNumber(record.confidence, triggered ? 0.5 : 0))),
    reasons: asStringArray(record.reasons),
    query: asString(record.query),
    topicKey: asString(record.topicKey),
    projectRefId: asString(record.projectRefId),
    workflowRunId: asString(record.workflowRunId),
  };
}

export function normalizeConversationMemoryEvidence(value: unknown): ConversationMemoryEvidence | null {
  const record = asRecord(value);
  if (!record) return null;
  const id = asString(record.id);
  const sessionId = asString(record.sessionId);
  const content = asString(record.content);
  if (!id || !sessionId || !content) return null;
  return {
    id,
    evidenceType: asEnum(record.evidenceType, CONVERSATION_MEMORY_EVIDENCE_TYPES, 'conversation_chunk'),
    sessionId,
    messageIds: asStringArray(record.messageIds),
    title: asString(record.title),
    content,
    summary: asString(record.summary),
    score: typeof record.score === 'number' ? record.score : undefined,
    vectorScore: typeof record.vectorScore === 'number' ? record.vectorScore : undefined,
    recencyScore: typeof record.recencyScore === 'number' ? record.recencyScore : undefined,
    projectRefId: asString(record.projectRefId),
    workflowRunId: asString(record.workflowRunId),
    topicKey: asString(record.topicKey),
    createdAt: asString(record.createdAt),
    updatedAt: asString(record.updatedAt),
    sourceUrl: asString(record.sourceUrl),
    ignoredReason: asString(record.ignoredReason),
  };
}

export function normalizeHomeMemoryRetrievalPacket(value: unknown): HomeMemoryRetrievalPacket | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const trigger = normalizeMemoryTriggerDecision(record.trigger);
  return {
    schemaVersion: 'home-memory-retrieval/v1',
    mode: asEnum(record.mode, HOME_MEMORY_RECALL_MODES, trigger.mode),
    trigger,
    confirmedMemoryCount: Math.max(0, Math.round(asNumber(record.confirmedMemoryCount, 0))),
    conversationEvidence: (Array.isArray(record.conversationEvidence) ? record.conversationEvidence : [])
      .map(normalizeConversationMemoryEvidence)
      .filter((item): item is ConversationMemoryEvidence => Boolean(item)),
    summaryEvidence: (Array.isArray(record.summaryEvidence) ? record.summaryEvidence : [])
      .map(normalizeConversationMemoryEvidence)
      .filter((item): item is ConversationMemoryEvidence => Boolean(item)),
    pendingCandidateCount:
      typeof record.pendingCandidateCount === 'number'
        ? Math.max(0, Math.round(record.pendingCandidateCount))
        : undefined,
    injectedIntoPrompt: asBoolean(record.injectedIntoPrompt, false),
    clarificationHint: asString(record.clarificationHint),
    warnings: asStringArray(record.warnings),
    createdAt: asString(record.createdAt) || new Date(0).toISOString(),
  };
}
