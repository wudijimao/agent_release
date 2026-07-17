export const RESEARCH_CANDIDATE_SOURCE_TYPES = [
  'analysis_selection',
  'tracking_signal',
  'structural_mutation',
  'manual',
] as const;

export const RESEARCH_CANDIDATE_ENTITY_TYPES = [
  'gene',
  'protein',
  'mutation',
  'pathway',
  'compound',
  'phenotype',
] as const;

export const RESEARCH_CANDIDATE_DIRECTIONS = [
  'up',
  'down',
  'gain_of_function',
  'loss_of_function',
  'unknown',
] as const;

export const RESEARCH_CANDIDATE_CONFIDENCE_LEVELS = ['high', 'medium', 'low'] as const;

export type ResearchCandidateSourceType = (typeof RESEARCH_CANDIDATE_SOURCE_TYPES)[number];
export type ResearchCandidateEntityType = (typeof RESEARCH_CANDIDATE_ENTITY_TYPES)[number];
export type ResearchCandidatePredictedDirection = (typeof RESEARCH_CANDIDATE_DIRECTIONS)[number];
export type ResearchCandidateConfidence = (typeof RESEARCH_CANDIDATE_CONFIDENCE_LEVELS)[number];

export interface ResearchCandidateSourceRef {
  analysisProjectId?: string;
  resultId?: string;
  artifactId?: string;
  selectionId?: string;
  trackingSignalId?: string;
  feedItemId?: string;
  structuralProjectId?: string;
  structuralJobId?: string;
  structuralArtifactId?: string;
  wikiNodeId?: string;
  manualSourceId?: string;
}

export interface ResearchCandidateMutation {
  proteinChange?: string;
  chainId?: string;
  residueNumber?: number;
  fromResidue?: string;
  toResidue?: string;
  pdbId?: string;
}

export interface ResearchCandidateEntity {
  type: ResearchCandidateEntityType;
  symbol: string;
  displayName?: string;
  organism?: string;
  identifiers?: Record<string, string>;
  mutation?: ResearchCandidateMutation;
}

export interface ResearchCandidateHypothesis {
  statement: string;
  rationale: string[];
  predictedDirection?: ResearchCandidatePredictedDirection;
  confidence?: ResearchCandidateConfidence;
}

export interface ResearchCandidateMetric {
  key: string;
  label: string;
  value: string | number | boolean;
  unit?: string;
  sourceId?: string;
}

export interface ResearchCandidateEvidenceRef {
  sourceType: 'analysis' | 'tracking' | 'structural' | 'evidence' | 'wiki' | 'manual';
  sourceId?: string;
  label: string;
  url?: string;
  pmid?: string;
  doi?: string;
}

export interface ResearchCandidate {
  candidateId: string;
  labId?: string;
  projectId?: string;
  sourceType: ResearchCandidateSourceType;
  sourceRef: ResearchCandidateSourceRef;
  entity: ResearchCandidateEntity;
  hypothesis: ResearchCandidateHypothesis;
  metrics: ResearchCandidateMetric[];
  evidenceRefs: ResearchCandidateEvidenceRef[];
  limitations: string[];
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

function asNumber(value: unknown): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return undefined;
}

function asBoolean(value: unknown): boolean | undefined {
  return typeof value === 'boolean' ? value : undefined;
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function asObjectArray<T>(value: unknown, mapper: (item: unknown) => T): T[] {
  return Array.isArray(value) ? value.map(mapper) : [];
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

function normalizeSourceRef(value: unknown): ResearchCandidateSourceRef {
  const record = asRecord(value) || {};
  return {
    analysisProjectId: asString(record.analysisProjectId),
    resultId: asString(record.resultId),
    artifactId: asString(record.artifactId),
    selectionId: asString(record.selectionId),
    trackingSignalId: asString(record.trackingSignalId),
    feedItemId: asString(record.feedItemId),
    structuralProjectId: asString(record.structuralProjectId),
    structuralJobId: asString(record.structuralJobId),
    structuralArtifactId: asString(record.structuralArtifactId),
    wikiNodeId: asString(record.wikiNodeId),
    manualSourceId: asString(record.manualSourceId),
  };
}

function normalizeIdentifiers(value: unknown): Record<string, string> {
  const record = asRecord(value) || {};
  return Object.fromEntries(
    Object.entries(record)
      .filter((entry): entry is [string, string] => typeof entry[1] === 'string')
      .filter(([key, val]) => key.trim().length > 0 && val.trim().length > 0),
  );
}

function normalizeMutation(value: unknown): ResearchCandidateMutation | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  return {
    proteinChange: asString(record.proteinChange),
    chainId: asString(record.chainId),
    residueNumber: asNumber(record.residueNumber),
    fromResidue: asString(record.fromResidue),
    toResidue: asString(record.toResidue),
    pdbId: asString(record.pdbId),
  };
}

function normalizeEntity(value: unknown): ResearchCandidateEntity {
  const record = asRecord(value) || {};
  return {
    type: asEnumValue(record.type, RESEARCH_CANDIDATE_ENTITY_TYPES, 'gene'),
    symbol: asString(record.symbol),
    displayName: asString(record.displayName),
    organism: asString(record.organism),
    identifiers: normalizeIdentifiers(record.identifiers),
    mutation: normalizeMutation(record.mutation),
  };
}

function normalizeHypothesis(value: unknown): ResearchCandidateHypothesis {
  const record = asRecord(value) || {};
  return {
    statement: asString(record.statement),
    rationale: asStringArray(record.rationale),
    predictedDirection: asEnumValue(record.predictedDirection, RESEARCH_CANDIDATE_DIRECTIONS, 'unknown'),
    confidence: asEnumValue(record.confidence, RESEARCH_CANDIDATE_CONFIDENCE_LEVELS, 'low'),
  };
}

function normalizeMetric(value: unknown): ResearchCandidateMetric {
  const record = asRecord(value) || {};
  const rawValue = record.value;
  const numberValue = asNumber(rawValue);
  const booleanValue = asBoolean(rawValue);
  const normalizedValue =
    typeof rawValue === 'string'
      ? rawValue
      : numberValue !== undefined
        ? numberValue
        : booleanValue !== undefined
          ? booleanValue
          : '';
  return {
    key: asString(record.key),
    label: asString(record.label),
    value: normalizedValue,
    unit: asString(record.unit),
    sourceId: asString(record.sourceId),
  };
}

function normalizeEvidenceRef(value: unknown): ResearchCandidateEvidenceRef {
  const record = asRecord(value) || {};
  return {
    sourceType: asEnumValue(
      record.sourceType,
      ['analysis', 'tracking', 'structural', 'evidence', 'wiki', 'manual'] as const,
      'manual',
    ),
    sourceId: asString(record.sourceId),
    label: asString(record.label),
    url: asString(record.url),
    pmid: asString(record.pmid),
    doi: asString(record.doi),
  };
}

export function createDefaultResearchCandidate(overrides: Partial<ResearchCandidate> = {}): ResearchCandidate {
  const now = new Date().toISOString();
  return {
    candidateId: '',
    sourceType: 'manual',
    sourceRef: {},
    entity: {
      type: 'gene',
      symbol: '',
      identifiers: {},
    },
    hypothesis: {
      statement: '',
      rationale: [],
      predictedDirection: 'unknown',
      confidence: 'low',
    },
    metrics: [],
    evidenceRefs: [],
    limitations: [],
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

export function normalizeResearchCandidate(value: unknown): ResearchCandidate {
  const record = asRecord(value) || {};
  return createDefaultResearchCandidate({
    candidateId: asString(record.candidateId),
    labId: asString(record.labId),
    projectId: asString(record.projectId),
    sourceType: asEnumValue(record.sourceType, RESEARCH_CANDIDATE_SOURCE_TYPES, 'manual'),
    sourceRef: normalizeSourceRef(record.sourceRef),
    entity: normalizeEntity(record.entity),
    hypothesis: normalizeHypothesis(record.hypothesis),
    metrics: asObjectArray(record.metrics, normalizeMetric),
    evidenceRefs: asObjectArray(record.evidenceRefs, normalizeEvidenceRef),
    limitations: asStringArray(record.limitations),
    createdAt: asString(record.createdAt),
    updatedAt: asString(record.updatedAt),
  });
}
