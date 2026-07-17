export const HOME_RAG_TIME_FIELDS = ['updated_at', 'created_at', 'experiment_time'] as const;

export const EXPERIMENT_TIME_GRANULARITIES = [
  'date',
  'datetime',
  'month',
  'year',
  'range',
] as const;

export const EXPERIMENT_TIME_SOURCES = [
  'template_table',
  'explicit_label',
  'section_context',
  'plain_date',
  'relative_date',
  'llm_selected',
  'manual_override',
] as const;

export type HomeRagTimeField = (typeof HOME_RAG_TIME_FIELDS)[number];
export type ExperimentTimeGranularity = (typeof EXPERIMENT_TIME_GRANULARITIES)[number];
export type ExperimentTimeSource = (typeof EXPERIMENT_TIME_SOURCES)[number];

export interface ExperimentTimeCandidate {
  start: string;
  end?: string;
  granularity: ExperimentTimeGranularity;
  confidence: number;
  source: ExperimentTimeSource;
  sourceBlockId?: string;
  sourceSectionTitle?: string;
  rawText: string;
  fieldLabel?: string;
  anchor?: 'document_created_at' | 'document_updated_at' | 'nearby_absolute_date' | 'archive_path';
  negativeContext?: boolean;
  reasonCodes: string[];
}

export interface ExperimentTimeExtraction {
  primary?: ExperimentTimeCandidate;
  candidates: ExperimentTimeCandidate[];
  extractionVersion: string;
  extractedAt: string;
  timezone: string;
  warnings: string[];
}

export interface RagResultExperimentTime {
  start: string;
  end?: string;
  confidence: number;
  source: ExperimentTimeSource;
  sourceBlockId?: string;
  sourceSectionTitle?: string;
  rawText?: string;
  usedForFilter: boolean;
  usedForSort: boolean;
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
}

function cleanString(value: unknown, maxLength = 240) {
  if (typeof value !== 'string') return undefined;
  const text = value.replace(/\s+/g, ' ').trim();
  return text ? text.slice(0, maxLength) : undefined;
}

function isOneOf<T extends readonly string[]>(value: unknown, allowed: T): value is T[number] {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value);
}

function normalizeConfidence(value: unknown) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(1, value));
}

function normalizeReasonCodes(value: unknown) {
  if (!Array.isArray(value)) return [];
  return Array.from(
    new Set(
      value
        .map((item) => cleanString(item, 80))
        .filter((item): item is string => Boolean(item)),
    ),
  ).slice(0, 20);
}

export function normalizeExperimentTimeCandidate(value: unknown): ExperimentTimeCandidate | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const start = cleanString(record.start, 80);
  const granularity = isOneOf(record.granularity, EXPERIMENT_TIME_GRANULARITIES)
    ? record.granularity
    : undefined;
  const source = isOneOf(record.source, EXPERIMENT_TIME_SOURCES) ? record.source : undefined;
  const rawText = cleanString(record.rawText, 240);
  if (!start || !granularity || !source || !rawText) return undefined;

  const anchor =
    record.anchor === 'document_created_at' ||
    record.anchor === 'document_updated_at' ||
    record.anchor === 'nearby_absolute_date' ||
    record.anchor === 'archive_path'
      ? record.anchor
      : undefined;

  return {
    start,
    ...(cleanString(record.end, 80) ? { end: cleanString(record.end, 80) } : {}),
    granularity,
    confidence: normalizeConfidence(record.confidence),
    source,
    ...(cleanString(record.sourceBlockId, 120) ? { sourceBlockId: cleanString(record.sourceBlockId, 120) } : {}),
    ...(cleanString(record.sourceSectionTitle, 120)
      ? { sourceSectionTitle: cleanString(record.sourceSectionTitle, 120) }
      : {}),
    rawText,
    ...(cleanString(record.fieldLabel, 120) ? { fieldLabel: cleanString(record.fieldLabel, 120) } : {}),
    ...(anchor ? { anchor } : {}),
    ...(typeof record.negativeContext === 'boolean' ? { negativeContext: record.negativeContext } : {}),
    reasonCodes: normalizeReasonCodes(record.reasonCodes),
  };
}

export function normalizeExperimentTimeExtraction(value: unknown): ExperimentTimeExtraction | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const candidates = Array.isArray(record.candidates)
    ? record.candidates
        .map((item) => normalizeExperimentTimeCandidate(item))
        .filter((item): item is ExperimentTimeCandidate => Boolean(item))
        .slice(0, 50)
    : [];
  const primary = normalizeExperimentTimeCandidate(record.primary);
  if (!primary && candidates.length === 0) return undefined;
  return {
    ...(primary ? { primary } : {}),
    candidates,
    extractionVersion: cleanString(record.extractionVersion, 80) || 'unknown',
    extractedAt: cleanString(record.extractedAt, 80) || new Date(0).toISOString(),
    timezone: cleanString(record.timezone, 80) || 'Asia/Shanghai',
    warnings: normalizeReasonCodes(record.warnings),
  };
}

export function normalizeRagResultExperimentTime(value: unknown): RagResultExperimentTime | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const start = cleanString(record.start, 80);
  const source = isOneOf(record.source, EXPERIMENT_TIME_SOURCES) ? record.source : undefined;
  if (!start || !source) return undefined;
  return {
    start,
    ...(cleanString(record.end, 80) ? { end: cleanString(record.end, 80) } : {}),
    confidence: normalizeConfidence(record.confidence),
    source,
    ...(cleanString(record.sourceBlockId, 120) ? { sourceBlockId: cleanString(record.sourceBlockId, 120) } : {}),
    ...(cleanString(record.sourceSectionTitle, 120)
      ? { sourceSectionTitle: cleanString(record.sourceSectionTitle, 120) }
      : {}),
    ...(cleanString(record.rawText, 240) ? { rawText: cleanString(record.rawText, 240) } : {}),
    usedForFilter: typeof record.usedForFilter === 'boolean' ? record.usedForFilter : false,
    usedForSort: typeof record.usedForSort === 'boolean' ? record.usedForSort : false,
  };
}
