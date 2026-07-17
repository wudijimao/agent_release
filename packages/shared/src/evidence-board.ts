import type { DataEntityType } from './data-hub.js';

export type EvidenceSourceType =
  | 'bulk_rna'
  | 'scrna'
  | 'spatial'
  | 'image'
  | 'literature'
  | 'experiment'
  | 'wiki2'
  | 'manual';

export type EvidenceDirection =
  | 'up'
  | 'down'
  | 'enriched'
  | 'depleted'
  | 'present'
  | 'absent'
  | 'mixed'
  | 'unknown';

export type EvidenceStance = 'supporting' | 'opposing' | 'mixed' | 'context';
export type EvidenceQualityLevel = 'strong' | 'moderate' | 'weak' | 'unknown';

export interface EvidenceSourceRef {
  sourceType: EvidenceSourceType;
  sourceId: string;
  packageId?: string;
  candidateId?: string;
  hitId?: string;
  trackingSignalId?: string;
  structuralJobId?: string;
  artifactId?: string;
  resultId?: string;
  projectId?: string;
  wikiNodeId?: string;
  attachmentId?: string;
  jobId?: string;
  workflowProvenance?: {
    workflowRunId?: string;
    backend?: string;
    engine?: string;
    trustTier?: string;
    backendRunId?: string;
    pipelineName?: string;
    templateVersion?: string;
    pipelineCatalog?: {
      entryId?: string;
      source?: string;
      version?: string;
      versionPolicy?: string;
      citations?: Array<{
        label?: string;
        url?: string;
      }>;
    };
  };
  externalArtifact?: {
    storageUrl?: string;
    objectKey?: string;
    checksum?: string;
    sizeBytes?: number;
    artifactKind?: string;
  };
}

export interface EvidenceNextAction {
  kind: 'qpcr_validation' | 'wb_validation' | 'if_validation' | 'flow_validation' | 'ko_kd_validation';
  label: string;
  context: Record<string, unknown>;
}

export interface EvidenceItem {
  evidenceId: string;
  labId: string;
  boardId?: string;
  entityType: DataEntityType;
  entityId: string;
  entityLabel: string;
  source: EvidenceSourceRef;
  observation: string;
  metric: Record<string, unknown>;
  direction?: EvidenceDirection;
  stance?: EvidenceStance;
  confidence: 'high' | 'medium' | 'low';
  quality?: {
    level: EvidenceQualityLevel;
    reasons: string[];
    conflictGroup?: string;
  };
  limitation: string;
  nextActions: EvidenceNextAction[];
  createdAt: string;
}

export interface EvidenceBoard {
  boardId: string;
  labId: string;
  projectId?: string;
  title: string;
  anchor: {
    entityType: DataEntityType;
    entityId: string;
    entityLabel: string;
  };
  evidenceItems: EvidenceItem[];
  summary: {
    observedResults: string[];
    hypotheses: string[];
    recommendations: string[];
    limitations: string[];
    conflicts?: string[];
    qualityNotes?: string[];
  };
  report?: {
    wikiNodeId?: string;
    archivedAt?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface EvidenceBoardSummary {
  boardId: string;
  title: string;
  entityType: DataEntityType;
  entityLabel: string;
  evidenceCount: number;
  archivedWikiNodeId?: string;
  updatedAt: string;
  createdAt: string;
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
  const parsed = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
  return Number.isFinite(parsed) ? parsed : fallback;
}

function asStringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
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

function asObjectArray<T>(value: unknown, mapper: (item: unknown) => T): T[] {
  return Array.isArray(value) ? value.map(mapper) : [];
}

function normalizePipelineCatalogProvenance(value: unknown) {
  const record = asRecord(value) || {};
  const entryId = asString(record.entryId);
  if (!entryId) return undefined;
  return {
    entryId,
    source: asString(record.source),
    version: asString(record.version),
    versionPolicy: asString(record.versionPolicy),
    citations: asObjectArray(record.citations, (item) => {
      const citation = asRecord(item) || {};
      return {
        label: asString(citation.label),
        url: asString(citation.url),
      };
    }).filter((item) => item.label || item.url),
  };
}

export function normalizeEvidenceSourceRef(value: unknown): EvidenceSourceRef {
  const record = asRecord(value) || {};
  const workflow = asRecord(record.workflowProvenance) || {};
  const externalArtifact = asRecord(record.externalArtifact) || {};
  return {
    sourceType: asEnumValue(
      record.sourceType,
      ['bulk_rna', 'scrna', 'spatial', 'image', 'literature', 'experiment', 'wiki2', 'manual'] as const,
      'manual',
    ),
    sourceId: asString(record.sourceId),
    packageId: asString(record.packageId),
    candidateId: asString(record.candidateId),
    hitId: asString(record.hitId),
    trackingSignalId: asString(record.trackingSignalId),
    structuralJobId: asString(record.structuralJobId),
    artifactId: asString(record.artifactId),
    resultId: asString(record.resultId),
    projectId: asString(record.projectId),
    wikiNodeId: asString(record.wikiNodeId),
    attachmentId: asString(record.attachmentId),
    jobId: asString(record.jobId),
    workflowProvenance: Object.keys(workflow).length
      ? {
          workflowRunId: asString(workflow.workflowRunId),
          backend: asString(workflow.backend),
          engine: asString(workflow.engine),
          trustTier: asString(workflow.trustTier),
          backendRunId: asString(workflow.backendRunId),
          pipelineName: asString(workflow.pipelineName),
          templateVersion: asString(workflow.templateVersion),
          pipelineCatalog: normalizePipelineCatalogProvenance(workflow.pipelineCatalog),
        }
      : undefined,
    externalArtifact: Object.keys(externalArtifact).length
      ? {
          storageUrl: asString(externalArtifact.storageUrl),
          objectKey: asString(externalArtifact.objectKey),
          checksum: asString(externalArtifact.checksum),
          sizeBytes: asNumber(externalArtifact.sizeBytes),
          artifactKind: asString(externalArtifact.artifactKind),
        }
      : undefined,
  };
}

export function normalizeEvidenceNextAction(value: unknown): EvidenceNextAction {
  const record = asRecord(value) || {};
  return {
    kind: asEnumValue(
      record.kind,
      ['qpcr_validation', 'wb_validation', 'if_validation', 'flow_validation', 'ko_kd_validation'] as const,
      'qpcr_validation',
    ),
    label: asString(record.label),
    context: asRecord(record.context) || {},
  };
}

export function normalizeEvidenceItem(value: unknown): EvidenceItem {
  const record = asRecord(value) || {};
  return {
    evidenceId: asString(record.evidenceId),
    labId: asString(record.labId),
    boardId: asString(record.boardId),
    entityType: asEnumValue(
      record.entityType,
      ['gene', 'sample', 'condition', 'cluster', 'cell_type', 'image_marker'] as const,
      'gene',
    ),
    entityId: asString(record.entityId),
    entityLabel: asString(record.entityLabel),
    source: normalizeEvidenceSourceRef(record.source),
    observation: asString(record.observation),
    metric: asRecord(record.metric) || {},
    direction: asEnumValue(
      record.direction,
      ['up', 'down', 'enriched', 'depleted', 'present', 'absent', 'mixed', 'unknown'] as const,
      'unknown',
    ),
    stance: asEnumValue(record.stance, ['supporting', 'opposing', 'mixed', 'context'] as const, 'context'),
    confidence: asEnumValue(record.confidence, ['high', 'medium', 'low'] as const, 'low'),
    quality: (() => {
      const quality = asRecord(record.quality) || {};
      const reasons = asStringArray(quality.reasons);
      if (!Object.keys(quality).length && reasons.length === 0) return undefined;
      return {
        level: asEnumValue(quality.level, ['strong', 'moderate', 'weak', 'unknown'] as const, 'unknown'),
        reasons,
        conflictGroup: asString(quality.conflictGroup),
      };
    })(),
    limitation: asString(record.limitation),
    nextActions: asObjectArray(record.nextActions, normalizeEvidenceNextAction),
    createdAt: asString(record.createdAt),
  };
}

export function createDefaultEvidenceBoard(overrides: Partial<EvidenceBoard> = {}): EvidenceBoard {
  const now = new Date().toISOString();
  return {
    boardId: '',
    labId: '',
    projectId: '',
    title: '',
    anchor: {
      entityType: 'gene',
      entityId: '',
      entityLabel: '',
    },
    evidenceItems: [],
    summary: {
      observedResults: [],
      hypotheses: [],
      recommendations: [],
      limitations: [],
      conflicts: [],
      qualityNotes: [],
    },
    report: {},
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

export function normalizeEvidenceBoard(value: unknown): EvidenceBoard {
  const record = asRecord(value) || {};
  const anchor = asRecord(record.anchor) || {};
  const summary = asRecord(record.summary) || {};
  return createDefaultEvidenceBoard({
    boardId: asString(record.boardId),
    labId: asString(record.labId),
    projectId: asString(record.projectId),
    title: asString(record.title),
    anchor: {
      entityType: asEnumValue(
        anchor.entityType,
        ['gene', 'sample', 'condition', 'cluster', 'cell_type', 'image_marker'] as const,
        'gene',
      ),
      entityId: asString(anchor.entityId),
      entityLabel: asString(anchor.entityLabel),
    },
    evidenceItems: asObjectArray(record.evidenceItems, normalizeEvidenceItem),
    summary: {
      observedResults: asStringArray(summary.observedResults),
      hypotheses: asStringArray(summary.hypotheses),
      recommendations: asStringArray(summary.recommendations),
      limitations: asStringArray(summary.limitations),
      conflicts: asStringArray(summary.conflicts),
      qualityNotes: asStringArray(summary.qualityNotes),
    },
    report: asRecord(record.report) || {},
    createdAt: asString(record.createdAt),
    updatedAt: asString(record.updatedAt),
  });
}

export function buildEvidenceBoardSummary(boardInput: unknown, createdAt: string): EvidenceBoardSummary {
  const board = normalizeEvidenceBoard(boardInput);
  return {
    boardId: board.boardId,
    title: board.title,
    entityType: board.anchor.entityType,
    entityLabel: board.anchor.entityLabel,
    evidenceCount: board.evidenceItems.length,
    archivedWikiNodeId: board.report?.wikiNodeId || '',
    updatedAt: board.updatedAt,
    createdAt,
  };
}
