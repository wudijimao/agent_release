import { normalizeResearchCandidate, type ResearchCandidate } from './research-candidate.js';
import {
  calculateMaterialTaskReadiness,
  type MaterialRequirement,
  type MaterialTaskReadiness,
} from './material-requirements.js';

export const VALIDATION_ASSAY_TYPES = ['qpcr', 'wb', 'if_imaging'] as const;
export const VALIDATION_PACKAGE_STATUSES = ['draft', 'accepted', 'archived', 'dismissed'] as const;
export const VALIDATION_HIT_DIRECTIONS = ['up', 'down', 'enriched', 'depleted', 'unknown'] as const;
export const VALIDATION_PRIORITIES = ['high', 'medium', 'low', 'uncertain'] as const;

export type ValidationAssayType = (typeof VALIDATION_ASSAY_TYPES)[number];
export type ValidationPackageStatus = (typeof VALIDATION_PACKAGE_STATUSES)[number];
export type ValidationHitDirection = (typeof VALIDATION_HIT_DIRECTIONS)[number];
export type ValidationPriority = (typeof VALIDATION_PRIORITIES)[number];

export interface ValidationPackageSource {
  analysisProjectId: string;
  resultId?: string;
  selectionId?: string;
  artifactId?: string;
  artifactKind?: string;
  selectedIds: string[];
  projectNodeId?: string;
}

export interface ValidationEvidenceRef {
  sourceType: 'analysis' | 'evidence' | 'tracking' | 'structural' | 'wiki' | 'manual';
  sourceId?: string;
  analysisProjectId?: string;
  resultId?: string;
  artifactId?: string;
  selectionId?: string;
  packageId?: string;
  hitId?: string;
  gene?: string;
  label?: string;
  url?: string;
  pmid?: string;
  doi?: string;
}

export interface ValidationHitSourceMetrics {
  log2FoldChange?: number;
  score?: number;
  adjustedPValue?: number;
  expression?: number;
  cluster?: string;
  condition?: string;
  comparison?: string;
  raw: Record<string, unknown>;
}

export interface ValidationHitScoring {
  omicsStrength: number;
  biologicalRelevance: number;
  evidenceSupport: number;
  assayFeasibility: number;
  riskCost: number;
  total: number;
  priority: ValidationPriority;
}

export interface ValidationHit {
  hitId: string;
  gene: string;
  displayName: string;
  direction: ValidationHitDirection;
  sourceMetrics: ValidationHitSourceMetrics;
  scoring: ValidationHitScoring;
  recommendedAssays: ValidationAssayType[];
  rationale: string[];
  limitations: string[];
  evidenceRefs: ValidationEvidenceRef[];
}

export interface ValidationPackageSummary {
  headline: string;
  selectedHitCount: number;
  highPriorityCount: number;
  recommendedFirstAssay: ValidationAssayType | 'mixed' | 'none';
  keyLimitations: string[];
}

export interface ValidationAssayRecommendation {
  assayType: ValidationAssayType;
  genes: string[];
  rationale: string;
  limitations: string[];
}

export interface ValidationAssayPlan {
  recommendations: ValidationAssayRecommendation[];
}

export interface QpcrValidationPlan {
  genes: string[];
  sampleGroups: string[];
  controls: string[];
  housekeepingCandidates: string[];
  primerDesignConstraints: string[];
  expectedDirections: Record<string, ValidationHitDirection>;
  interpretationNotes: string[];
  limitations: string[];
}

export interface WbValidationPlan {
  genes: string[];
  samplePreparationNotes: string[];
  loadingControls: string[];
  antibodyChecklist: string[];
  expectedReadouts: string[];
  limitations: string[];
}

export interface IfValidationPlan {
  genes: string[];
  sampleTypes: string[];
  controlPlan: string[];
  readouts: string[];
  stainingRisks: string[];
  limitations: string[];
}

export interface ValidationOrderChecklistItem {
  itemId: string;
  category: 'primer' | 'antibody' | 'reagent' | 'consumable' | 'control';
  label: string;
  reason: string;
  status: 'draft' | 'needs_review' | 'not_required';
}

export interface ValidationFutureTaskDraft {
  draftId: string;
  hitId: string;
  taskType: ValidationAssayType;
  title: string;
  rationale: string;
  hypothesis: string;
  requiredParameters: {
    sample?: string;
    model?: string;
    control?: string;
    readout?: string;
    owner?: string;
    dueDate?: string;
    genes?: string[];
  };
  evidenceRefs: ValidationEvidenceRef[];
}

export interface ValidationWetLabReadiness {
  sampleRequirements: string[];
  controlPlan: string[];
  replicatePlan: string[];
  reagentChecklist: ValidationOrderChecklistItem[];
  inventoryRefs: Array<{
    itemId?: string;
    label: string;
    category?: string;
    status: 'linked' | 'needs_lookup' | 'not_required';
  }>;
  failureModes: string[];
  interpretationRules: string[];
}

export interface ValidationPackageMaterials {
  requirements: MaterialRequirement[];
  readiness: MaterialTaskReadiness;
}

export interface ValidationProvenance {
  generatedBy: 'deterministic' | 'deterministic_llm';
  generatedAt: string;
  sourceRowsRead: number;
  sourceRowsUsed: number;
  warnings: string[];
}

export interface ValidationPackageLinkedRefs {
  futureTaskIds?: string[];
  evidenceItemIds?: string[];
  wikiNodeId?: string;
}

export interface ValidationPackage {
  packageId: string;
  status: ValidationPackageStatus;
  title: string;
  source: ValidationPackageSource;
  candidates?: ResearchCandidate[];
  linkedRefs?: ValidationPackageLinkedRefs;
  summary: ValidationPackageSummary;
  hits: ValidationHit[];
  assayPlan: ValidationAssayPlan;
  qpcrPlan: QpcrValidationPlan;
  wbPlan: WbValidationPlan;
  ifPlan: IfValidationPlan;
  orderChecklist: ValidationOrderChecklistItem[];
  wetLabReadiness: ValidationWetLabReadiness;
  materials: ValidationPackageMaterials;
  futureTaskDrafts: ValidationFutureTaskDraft[];
  limitations: string[];
  provenance: ValidationProvenance;
  report?: {
    wikiNodeId?: string;
    archivedAt?: string;
  };
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

function normalizeEvidenceRef(value: unknown): ValidationEvidenceRef {
  const record = asRecord(value) || {};
  return {
    sourceType: asEnumValue(
      record.sourceType,
      ['analysis', 'evidence', 'tracking', 'structural', 'wiki', 'manual'] as const,
      'manual',
    ),
    sourceId: asString(record.sourceId),
    analysisProjectId: asString(record.analysisProjectId),
    resultId: asString(record.resultId),
    artifactId: asString(record.artifactId),
    selectionId: asString(record.selectionId),
    packageId: asString(record.packageId),
    hitId: asString(record.hitId),
    gene: asString(record.gene),
    label: asString(record.label),
    url: asString(record.url),
    pmid: asString(record.pmid),
    doi: asString(record.doi),
  };
}

function normalizeHit(value: unknown): ValidationHit {
  const record = asRecord(value) || {};
  const scoring = asRecord(record.scoring) || {};
  const sourceMetrics = asRecord(record.sourceMetrics) || {};
  return {
    hitId: asString(record.hitId),
    gene: asString(record.gene),
    displayName: asString(record.displayName),
    direction: asEnumValue(record.direction, VALIDATION_HIT_DIRECTIONS, 'unknown'),
    sourceMetrics: {
      log2FoldChange: sourceMetrics.log2FoldChange === undefined ? undefined : asNumber(sourceMetrics.log2FoldChange),
      score: sourceMetrics.score === undefined ? undefined : asNumber(sourceMetrics.score),
      adjustedPValue: sourceMetrics.adjustedPValue === undefined ? undefined : asNumber(sourceMetrics.adjustedPValue),
      expression: sourceMetrics.expression === undefined ? undefined : asNumber(sourceMetrics.expression),
      cluster: asString(sourceMetrics.cluster),
      condition: asString(sourceMetrics.condition),
      comparison: asString(sourceMetrics.comparison),
      raw: asRecord(sourceMetrics.raw) || {},
    },
    scoring: {
      omicsStrength: asNumber(scoring.omicsStrength),
      biologicalRelevance: asNumber(scoring.biologicalRelevance),
      evidenceSupport: asNumber(scoring.evidenceSupport),
      assayFeasibility: asNumber(scoring.assayFeasibility),
      riskCost: asNumber(scoring.riskCost),
      total: asNumber(scoring.total),
      priority: asEnumValue(scoring.priority, VALIDATION_PRIORITIES, 'uncertain'),
    },
    recommendedAssays: asStringArray(record.recommendedAssays).filter((item): item is ValidationAssayType =>
      (VALIDATION_ASSAY_TYPES as readonly string[]).includes(item),
    ),
    rationale: asStringArray(record.rationale),
    limitations: asStringArray(record.limitations),
    evidenceRefs: asObjectArray(record.evidenceRefs, normalizeEvidenceRef),
  };
}

function normalizeMaterialRequirementArray(value: unknown): MaterialRequirement[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is MaterialRequirement => Boolean(asRecord(item)) && typeof asRecord(item)?.label === 'string')
    .map((item) => ({
      ...item,
      matchCandidates: Array.isArray(item.matchCandidates) ? item.matchCandidates : [],
      sourceRefs: Array.isArray(item.sourceRefs) ? item.sourceRefs : [],
      notes: Array.isArray(item.notes) ? item.notes : [],
      warnings: Array.isArray(item.warnings) ? item.warnings : [],
    }));
}

export function createDefaultValidationPackage(overrides: Partial<ValidationPackage> = {}): ValidationPackage {
  const now = new Date().toISOString();
  return {
    packageId: '',
    status: 'draft',
    title: '',
    source: {
      analysisProjectId: '',
      selectedIds: [],
    },
    summary: {
      headline: '',
      selectedHitCount: 0,
      highPriorityCount: 0,
      recommendedFirstAssay: 'none',
      keyLimitations: [],
    },
    hits: [],
    candidates: [],
    linkedRefs: {
      futureTaskIds: [],
      evidenceItemIds: [],
    },
    assayPlan: {
      recommendations: [],
    },
    qpcrPlan: {
      genes: [],
      sampleGroups: [],
      controls: [],
      housekeepingCandidates: [],
      primerDesignConstraints: [],
      expectedDirections: {},
      interpretationNotes: [],
      limitations: [],
    },
    wbPlan: {
      genes: [],
      samplePreparationNotes: [],
      loadingControls: [],
      antibodyChecklist: [],
      expectedReadouts: [],
      limitations: [],
    },
    ifPlan: {
      genes: [],
      sampleTypes: [],
      controlPlan: [],
      readouts: [],
      stainingRisks: [],
      limitations: [],
    },
    orderChecklist: [],
    wetLabReadiness: {
      sampleRequirements: [],
      controlPlan: [],
      replicatePlan: [],
      reagentChecklist: [],
      inventoryRefs: [],
      failureModes: [],
      interpretationRules: [],
    },
    materials: {
      requirements: [],
      readiness: calculateMaterialTaskReadiness([], { now }),
    },
    futureTaskDrafts: [],
    limitations: [],
    provenance: {
      generatedBy: 'deterministic',
      generatedAt: now,
      sourceRowsRead: 0,
      sourceRowsUsed: 0,
      warnings: [],
    },
    report: {},
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

export function normalizeValidationPackage(value: unknown): ValidationPackage {
  const record = asRecord(value) || {};
  const source = asRecord(record.source) || {};
  const summary = asRecord(record.summary) || {};
  const provenance = asRecord(record.provenance) || {};
  const report = asRecord(record.report) || {};
  const linkedRefs = asRecord(record.linkedRefs) || {};
  const base = createDefaultValidationPackage({
    packageId: asString(record.packageId),
    status: asEnumValue(record.status, VALIDATION_PACKAGE_STATUSES, 'draft'),
    title: asString(record.title),
    source: {
      analysisProjectId: asString(source.analysisProjectId),
      resultId: asString(source.resultId),
      selectionId: asString(source.selectionId),
      artifactId: asString(source.artifactId),
      artifactKind: asString(source.artifactKind),
      selectedIds: asStringArray(source.selectedIds),
      projectNodeId: asString(source.projectNodeId),
    },
    candidates: asObjectArray(record.candidates, normalizeResearchCandidate),
    linkedRefs: {
      futureTaskIds: asStringArray(linkedRefs.futureTaskIds),
      evidenceItemIds: asStringArray(linkedRefs.evidenceItemIds),
      wikiNodeId: asString(linkedRefs.wikiNodeId),
    },
    summary: {
      headline: asString(summary.headline),
      selectedHitCount: asNumber(summary.selectedHitCount),
      highPriorityCount: asNumber(summary.highPriorityCount),
      recommendedFirstAssay: asEnumValue(
        summary.recommendedFirstAssay,
        ['qpcr', 'wb', 'if_imaging', 'mixed', 'none'] as const,
        'none',
      ),
      keyLimitations: asStringArray(summary.keyLimitations),
    },
    hits: asObjectArray(record.hits, normalizeHit),
    limitations: asStringArray(record.limitations),
    provenance: {
      generatedBy: asEnumValue(provenance.generatedBy, ['deterministic', 'deterministic_llm'] as const, 'deterministic'),
      generatedAt: asString(provenance.generatedAt),
      sourceRowsRead: asNumber(provenance.sourceRowsRead),
      sourceRowsUsed: asNumber(provenance.sourceRowsUsed),
      warnings: asStringArray(provenance.warnings),
    },
    report: {
      wikiNodeId: asString(report.wikiNodeId),
      archivedAt: asString(report.archivedAt),
    },
    createdAt: asString(record.createdAt),
    updatedAt: asString(record.updatedAt),
  });

  return {
    ...base,
    assayPlan: (asRecord(record.assayPlan) as unknown as ValidationPackage['assayPlan']) || base.assayPlan,
    qpcrPlan: (asRecord(record.qpcrPlan) as unknown as ValidationPackage['qpcrPlan']) || base.qpcrPlan,
    wbPlan: (asRecord(record.wbPlan) as unknown as ValidationPackage['wbPlan']) || base.wbPlan,
    ifPlan: (asRecord(record.ifPlan) as unknown as ValidationPackage['ifPlan']) || base.ifPlan,
    orderChecklist: asObjectArray(record.orderChecklist, (item) => item as ValidationOrderChecklistItem),
    wetLabReadiness: (() => {
      const readiness = asRecord(record.wetLabReadiness) || {};
      return {
        sampleRequirements: asStringArray(readiness.sampleRequirements),
        controlPlan: asStringArray(readiness.controlPlan),
        replicatePlan: asStringArray(readiness.replicatePlan),
        reagentChecklist: asObjectArray(readiness.reagentChecklist, (item) => item as ValidationOrderChecklistItem),
        inventoryRefs: asObjectArray(readiness.inventoryRefs, (item) => {
          const ref = asRecord(item) || {};
          return {
            itemId: asString(ref.itemId),
            label: asString(ref.label),
            category: asString(ref.category),
            status: asEnumValue(ref.status, ['linked', 'needs_lookup', 'not_required'] as const, 'needs_lookup'),
          };
        }),
        failureModes: asStringArray(readiness.failureModes),
        interpretationRules: asStringArray(readiness.interpretationRules),
      };
    })(),
    materials: (() => {
      const materials = asRecord(record.materials) || {};
      const requirements = normalizeMaterialRequirementArray(materials.requirements);
      return {
        requirements,
        readiness: calculateMaterialTaskReadiness(requirements),
      };
    })(),
    futureTaskDrafts: asObjectArray(record.futureTaskDrafts, (item) => item as ValidationFutureTaskDraft),
  };
}
