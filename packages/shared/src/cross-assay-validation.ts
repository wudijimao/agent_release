import type { DataEntityType } from './data-hub.js';

export const CROSS_ASSAY_TYPES = [
  'analysis',
  'literature',
  'tracking',
  'structural',
  'qpcr',
  'wb',
  'if_imaging',
  'manual',
  'cro_report',
] as const;

export const ASSAY_EVIDENCE_STATUSES = [
  'not_started',
  'pending',
  'available',
  'inconclusive',
  'needs_repeat',
  'failed',
] as const;

export const CROSS_ASSAY_STANCES = ['support', 'against', 'mixed', 'inconclusive', 'not_applicable'] as const;
export const CROSS_ASSAY_STRENGTHS = ['strong', 'moderate', 'weak', 'not_interpretable'] as const;
export const VALIDATION_DECISION_RECOMMENDATIONS = [
  'advance',
  'repeat_assay',
  'collect_more_replicates',
  'run_orthogonal_assay',
  'deprioritize',
  'kill',
  'hold',
] as const;
export const VALIDATION_DECISION_STATUSES = [
  'ready_to_advance',
  'needs_repeat',
  'needs_orthogonal_validation',
  'mixed_evidence',
  'insufficient_evidence',
  'deprioritized',
  'killed',
] as const;
export const EVIDENCE_CONFLICT_TYPES = [
  'direction_conflict',
  'quality_conflict',
  'replicate_conflict',
  'source_conflict',
] as const;
export const EVIDENCE_GAP_TYPES = [
  'missing_assay',
  'insufficient_replicates',
  'low_quality',
  'missing_review',
  'missing_source_link',
] as const;
export const VALIDATION_NEXT_ACTION_TYPES = [
  'accept_recommendation',
  'repeat_assay',
  'collect_more_replicates',
  'run_orthogonal_assay',
  'review_metadata',
  'archive_decision',
  'hold_candidate',
] as const;
export const QPCR_QC_FLAGS = [
  'high_ct_variance',
  'unstable_housekeeping',
  'missing_housekeeping',
  'missing_baseline',
  'undetermined_ct',
  'low_replicate_count',
  'manual_review_required',
] as const;
export const PROTOCOL_FEEDBACK_SEVERITIES = ['info', 'warning', 'blocker'] as const;
export const MOBILE_CAPTURE_QUALITY_FLAGS = [
  'blur_warning',
  'overexposed',
  'low_contrast',
  'incomplete_crop',
  'manual_review_required',
] as const;
export const CRO_REPORT_ASSAY_TYPES = ['qpcr', 'wb', 'if_imaging', 'manual', 'unknown'] as const;

export type CrossAssayType = (typeof CROSS_ASSAY_TYPES)[number];
export type AssayEvidenceStatus = (typeof ASSAY_EVIDENCE_STATUSES)[number];
export type CrossAssayStance = (typeof CROSS_ASSAY_STANCES)[number];
export type CrossAssayEvidenceStrength = (typeof CROSS_ASSAY_STRENGTHS)[number];
export type ValidationDecisionRecommendation = (typeof VALIDATION_DECISION_RECOMMENDATIONS)[number];
export type ValidationDecisionStatus = (typeof VALIDATION_DECISION_STATUSES)[number];
export type EvidenceConflictType = (typeof EVIDENCE_CONFLICT_TYPES)[number];
export type EvidenceGapType = (typeof EVIDENCE_GAP_TYPES)[number];
export type ValidationNextActionType = (typeof VALIDATION_NEXT_ACTION_TYPES)[number];
export type QpcrQcFlag = (typeof QPCR_QC_FLAGS)[number];
export type ProtocolFeedbackSeverity = (typeof PROTOCOL_FEEDBACK_SEVERITIES)[number];
export type MobileCaptureQualityFlag = (typeof MOBILE_CAPTURE_QUALITY_FLAGS)[number];
export type CroReportAssayType = (typeof CRO_REPORT_ASSAY_TYPES)[number];

export interface CandidateEvidenceProvenance {
  generatedBy: 'deterministic';
  generatedAt: string;
  sourceEvidenceItemIds: string[];
  sourceFutureTaskIds: string[];
  sourcePackageIds: string[];
  warnings: string[];
}

export interface AssayEvidenceSummary {
  assayType: CrossAssayType;
  status: AssayEvidenceStatus;
  stance: CrossAssayStance;
  evidenceStrength: CrossAssayEvidenceStrength;
  confidence: 'high' | 'medium' | 'low';
  evidenceItemIds: string[];
  futureTaskIds: string[];
  keyMetrics: Record<string, unknown>;
  qcFlags: string[];
  limitations: string[];
  lastUpdatedAt?: string;
}

export interface ValidationNextAction {
  actionId: string;
  type: ValidationNextActionType;
  assayType?: CrossAssayType;
  label: string;
  rationale: string;
  sourceEvidenceItemIds: string[];
  sourceFutureTaskIds: string[];
  requiresConfirmation: boolean;
  payload?: Record<string, unknown>;
}

export interface ValidationDecisionDraft {
  recommendation: ValidationDecisionRecommendation;
  confidence: 'high' | 'medium' | 'low';
  rationale: string[];
  requiredHumanConfirmation: true;
  blockingIssues: string[];
  suggestedFollowUpTasks: ValidationNextAction[];
}

export interface EvidenceConflict {
  conflictId: string;
  candidateId: string;
  assayTypes: CrossAssayType[];
  type: EvidenceConflictType;
  summary: string;
  likelyCause?: 'biology' | 'assay_quality' | 'sample_mismatch' | 'insufficient_data' | 'unknown';
  relatedEvidenceItemIds: string[];
  recommendedAction?: 'repeat' | 'orthogonal_assay' | 'review_metadata' | 'deprioritize';
}

export interface EvidenceGap {
  gapId: string;
  candidateId: string;
  assayType?: CrossAssayType;
  type: EvidenceGapType;
  summary: string;
  severity: 'info' | 'warning' | 'blocker';
  recommendedAction?: ValidationNextAction;
}

export interface CandidateEvidenceSummary {
  summaryId?: string;
  candidateId: string;
  packageIds: string[];
  entity: {
    type: DataEntityType | 'protein' | 'mutation' | 'pathway' | 'compound' | 'other';
    symbol?: string;
    label: string;
  };
  hypothesis: string;
  assaySummaries: AssayEvidenceSummary[];
  overallDecisionDraft: ValidationDecisionDraft;
  conflicts: EvidenceConflict[];
  gaps: EvidenceGap[];
  nextActions: ValidationNextAction[];
  provenance: CandidateEvidenceProvenance;
  userDecision?: {
    decision: ValidationDecisionRecommendation;
    status: ValidationDecisionStatus;
    decidedBy?: string;
    decidedAt: string;
    reason: string;
  };
  updatedAt: string;
}

export interface DecisionBoardRow {
  candidateId: string;
  packageIds: string[];
  entityLabel: string;
  entityType: CandidateEvidenceSummary['entity']['type'];
  hypothesis: string;
  status: ValidationDecisionStatus;
  recommendation: ValidationDecisionRecommendation;
  confidence: 'high' | 'medium' | 'low';
  assayBadges: Record<CrossAssayType, Pick<AssayEvidenceSummary, 'status' | 'stance' | 'evidenceStrength' | 'confidence'>>;
  blockers: string[];
  nextActionLabel?: string;
  owner?: string;
  updatedAt: string;
}

export interface QpcrSampleCt {
  sample: string;
  condition: string;
  target: string;
  ct: number | null;
  replicate?: string;
  plate?: string;
  well?: string;
}

export interface QpcrComparison {
  target: string;
  baselineCondition: string;
  testCondition: string;
  meanDeltaCtBaseline?: number;
  meanDeltaCtTest?: number;
  deltaDeltaCt?: number;
  foldChange?: number;
  replicateCount: number;
  ctSd?: number;
  stance: CrossAssayStance;
  evidenceStrength: CrossAssayEvidenceStrength;
}

export interface QpcrQcSummary {
  status: 'pass' | 'warning' | 'fail';
  flags: QpcrQcFlag[];
  notes: string[];
}

export interface QpcrEvidencePayload {
  draftId: string;
  packageId?: string;
  futureTaskId?: string;
  candidateId?: string;
  targetGenes: string[];
  housekeepingGenes: string[];
  samples: QpcrSampleCt[];
  comparisons: QpcrComparison[];
  qc: QpcrQcSummary;
  decision: AssayEvidenceSummary;
  provenance: CandidateEvidenceProvenance;
}

export interface ProtocolFeedbackRule {
  ruleId: string;
  assayType: CrossAssayType;
  qcFlags: string[];
  suggestion: string;
  followUpTaskType?: 'qpcr' | 'wb' | 'if_imaging' | 'ko_kd' | 'drug_treatment';
  severity: ProtocolFeedbackSeverity;
}

export interface ProtocolFeedbackSuggestion {
  suggestionId: string;
  assayType: CrossAssayType;
  severity: ProtocolFeedbackSeverity;
  label: string;
  rationale: string;
  sourceQcFlags: string[];
  sourceEvidenceItemIds: string[];
  sourceFutureTaskIds: string[];
  proposedTask?: ValidationNextAction;
}

export interface MobileCaptureQualityCheck {
  status: 'pass' | 'warning' | 'fail';
  flags: MobileCaptureQualityFlag[];
  notes: string[];
  width?: number;
  height?: number;
  exposureMean?: number;
  contrastSd?: number;
}

export interface MobileCaptureSession {
  sessionId: string;
  token: string;
  labId: string;
  futureTaskId: string;
  packageId?: string;
  candidateId?: string;
  taskType: 'wb' | 'if_imaging';
  status: 'active' | 'consumed' | 'revoked' | 'expired';
  captureUrl: string;
  quality?: MobileCaptureQualityCheck;
  draftId?: string;
  createdBy?: string;
  expiresAt: string;
  consumedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CroReportSourceRef {
  fileId?: string;
  attachmentId?: string;
  wikiNodeId?: string;
  objectKey?: string;
  fileName?: string;
  mimeType?: string;
  pageRefs?: Array<{
    page?: number;
    regionId?: string;
    tableId?: string;
    figureId?: string;
  }>;
}

export interface CroExtractedEvidenceDraft {
  draftId: string;
  assayType: CroReportAssayType;
  candidateId?: string;
  packageId?: string;
  observationDraft: string;
  extractedMetrics: Record<string, unknown>;
  sourceQuotes: string[];
  pageRefs: NonNullable<CroReportSourceRef['pageRefs']>;
  needsHumanConfirmation: true;
  guardrails: string[];
}

export interface CroReportExtractionDraft {
  draftId: string;
  labId: string;
  packageId?: string;
  futureTaskId?: string;
  candidateId?: string;
  status: 'uploaded' | 'needs_review' | 'confirmed' | 'rejected' | 'failed';
  sourceFile: CroReportSourceRef;
  reportTextSnippet: string;
  extractedEvidence: CroExtractedEvidenceDraft[];
  linkedRefs: {
    evidenceItemIds: string[];
  };
  providerProvenance: {
    mode: 'local_deterministic' | 'external_provider';
    provider?: string;
    warnings: string[];
  };
  createdBy?: string;
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

function asOptionalString(value: unknown) {
  return typeof value === 'string' && value ? value : undefined;
}

function asNumber(value: unknown): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return undefined;
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function asObjectArray<T>(value: unknown, mapper: (item: unknown) => T | null): T[] {
  return Array.isArray(value) ? value.map(mapper).filter((item): item is T => Boolean(item)) : [];
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

function unique(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

export function normalizeAssayEvidenceSummary(value: unknown): AssayEvidenceSummary | null {
  const record = asRecord(value);
  if (!record) return null;
  const assayType = asEnumValue(record.assayType, CROSS_ASSAY_TYPES, 'manual');
  return {
    assayType,
    status: asEnumValue(record.status, ASSAY_EVIDENCE_STATUSES, 'not_started'),
    stance: asEnumValue(record.stance, CROSS_ASSAY_STANCES, 'inconclusive'),
    evidenceStrength: asEnumValue(record.evidenceStrength, CROSS_ASSAY_STRENGTHS, 'not_interpretable'),
    confidence: asEnumValue(record.confidence, ['high', 'medium', 'low'] as const, 'low'),
    evidenceItemIds: unique(asStringArray(record.evidenceItemIds)),
    futureTaskIds: unique(asStringArray(record.futureTaskIds)),
    keyMetrics: asRecord(record.keyMetrics) || {},
    qcFlags: unique(asStringArray(record.qcFlags)),
    limitations: asStringArray(record.limitations),
    lastUpdatedAt: asOptionalString(record.lastUpdatedAt),
  };
}

export function normalizeValidationNextAction(value: unknown): ValidationNextAction | null {
  const record = asRecord(value);
  if (!record) return null;
  const label = asString(record.label);
  if (!label) return null;
  return {
    actionId: asString(record.actionId) || `action-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`,
    type: asEnumValue(record.type, VALIDATION_NEXT_ACTION_TYPES, 'hold_candidate'),
    assayType: asOptionalString(record.assayType)
      ? asEnumValue(record.assayType, CROSS_ASSAY_TYPES, 'manual')
      : undefined,
    label,
    rationale: asString(record.rationale),
    sourceEvidenceItemIds: unique(asStringArray(record.sourceEvidenceItemIds)),
    sourceFutureTaskIds: unique(asStringArray(record.sourceFutureTaskIds)),
    requiresConfirmation: record.requiresConfirmation === false ? false : true,
    payload: asRecord(record.payload) || undefined,
  };
}

export function normalizeValidationDecisionDraft(value: unknown): ValidationDecisionDraft | null {
  const record = asRecord(value);
  if (!record) return null;
  const recommendation = asEnumValue(record.recommendation, VALIDATION_DECISION_RECOMMENDATIONS, 'hold');
  const rationale = asStringArray(record.rationale);
  return {
    recommendation,
    confidence: asEnumValue(record.confidence, ['high', 'medium', 'low'] as const, 'low'),
    rationale: rationale.length ? rationale : ['Insufficient reviewed evidence for an automatic candidate-level decision.'],
    requiredHumanConfirmation: true,
    blockingIssues: asStringArray(record.blockingIssues),
    suggestedFollowUpTasks: asObjectArray(record.suggestedFollowUpTasks, normalizeValidationNextAction),
  };
}

export function normalizeEvidenceConflict(value: unknown): EvidenceConflict | null {
  const record = asRecord(value);
  if (!record) return null;
  const conflictId = asString(record.conflictId);
  const candidateId = asString(record.candidateId);
  const summary = asString(record.summary);
  if (!conflictId || !candidateId || !summary) return null;
  return {
    conflictId,
    candidateId,
    assayTypes: unique(asStringArray(record.assayTypes)).filter((item): item is CrossAssayType =>
      (CROSS_ASSAY_TYPES as readonly string[]).includes(item),
    ),
    type: asEnumValue(record.type, EVIDENCE_CONFLICT_TYPES, 'direction_conflict'),
    summary,
    likelyCause: asOptionalString(record.likelyCause)
      ? asEnumValue(
          record.likelyCause,
          ['biology', 'assay_quality', 'sample_mismatch', 'insufficient_data', 'unknown'] as const,
          'unknown',
        )
      : undefined,
    relatedEvidenceItemIds: unique(asStringArray(record.relatedEvidenceItemIds)),
    recommendedAction: asOptionalString(record.recommendedAction)
      ? asEnumValue(
          record.recommendedAction,
          ['repeat', 'orthogonal_assay', 'review_metadata', 'deprioritize'] as const,
          'review_metadata',
        )
      : undefined,
  };
}

export function normalizeEvidenceGap(value: unknown): EvidenceGap | null {
  const record = asRecord(value);
  if (!record) return null;
  const gapId = asString(record.gapId);
  const candidateId = asString(record.candidateId);
  const summary = asString(record.summary);
  if (!gapId || !candidateId || !summary) return null;
  return {
    gapId,
    candidateId,
    assayType: asOptionalString(record.assayType)
      ? asEnumValue(record.assayType, CROSS_ASSAY_TYPES, 'manual')
      : undefined,
    type: asEnumValue(record.type, EVIDENCE_GAP_TYPES, 'missing_assay'),
    summary,
    severity: asEnumValue(record.severity, ['info', 'warning', 'blocker'] as const, 'warning'),
    recommendedAction: normalizeValidationNextAction(record.recommendedAction) || undefined,
  };
}

export function normalizeCandidateEvidenceSummary(value: unknown): CandidateEvidenceSummary | null {
  const record = asRecord(value);
  if (!record) return null;
  const candidateId = asString(record.candidateId);
  const entity = asRecord(record.entity) || {};
  const label = asString(entity.label);
  const decision = normalizeValidationDecisionDraft(record.overallDecisionDraft);
  if (!candidateId || !label || !decision) return null;
  const provenance = asRecord(record.provenance) || {};
  const userDecision = asRecord(record.userDecision);
  return {
    summaryId: asOptionalString(record.summaryId),
    candidateId,
    packageIds: unique(asStringArray(record.packageIds)),
    entity: {
      type: asEnumValue(
        entity.type,
        ['gene', 'sample', 'condition', 'cluster', 'cell_type', 'image_marker', 'protein', 'mutation', 'pathway', 'compound', 'other'] as const,
        'gene',
      ),
      symbol: asOptionalString(entity.symbol),
      label,
    },
    hypothesis: asString(record.hypothesis),
    assaySummaries: asObjectArray(record.assaySummaries, normalizeAssayEvidenceSummary),
    overallDecisionDraft: decision,
    conflicts: asObjectArray(record.conflicts, normalizeEvidenceConflict),
    gaps: asObjectArray(record.gaps, normalizeEvidenceGap),
    nextActions: asObjectArray(record.nextActions, normalizeValidationNextAction),
    provenance: {
      generatedBy: 'deterministic',
      generatedAt: asString(provenance.generatedAt) || new Date().toISOString(),
      sourceEvidenceItemIds: unique(asStringArray(provenance.sourceEvidenceItemIds)),
      sourceFutureTaskIds: unique(asStringArray(provenance.sourceFutureTaskIds)),
      sourcePackageIds: unique(asStringArray(provenance.sourcePackageIds)),
      warnings: asStringArray(provenance.warnings),
    },
    userDecision: userDecision
      ? {
          decision: asEnumValue(userDecision.decision, VALIDATION_DECISION_RECOMMENDATIONS, 'hold'),
          status: asEnumValue(userDecision.status, VALIDATION_DECISION_STATUSES, 'insufficient_evidence'),
          decidedBy: asOptionalString(userDecision.decidedBy),
          decidedAt: asString(userDecision.decidedAt),
          reason: asString(userDecision.reason),
        }
      : undefined,
    updatedAt: asString(record.updatedAt) || new Date().toISOString(),
  };
}

export function normalizeQpcrSampleCt(value: unknown): QpcrSampleCt | null {
  const record = asRecord(value);
  if (!record) return null;
  const sample = asString(record.sample);
  const condition = asString(record.condition);
  const target = asString(record.target);
  if (!sample || !condition || !target) return null;
  return {
    sample,
    condition,
    target,
    ct: asNumber(record.ct) ?? null,
    replicate: asOptionalString(record.replicate),
    plate: asOptionalString(record.plate),
    well: asOptionalString(record.well),
  };
}

export function normalizeQpcrEvidencePayload(value: unknown): QpcrEvidencePayload | null {
  const record = asRecord(value);
  if (!record) return null;
  const draftId = asString(record.draftId);
  const decision = normalizeAssayEvidenceSummary(record.decision);
  if (!draftId || !decision) return null;
  const qc = asRecord(record.qc) || {};
  const provenance = asRecord(record.provenance) || {};
  return {
    draftId,
    packageId: asOptionalString(record.packageId),
    futureTaskId: asOptionalString(record.futureTaskId),
    candidateId: asOptionalString(record.candidateId),
    targetGenes: unique(asStringArray(record.targetGenes)),
    housekeepingGenes: unique(asStringArray(record.housekeepingGenes)),
    samples: asObjectArray(record.samples, normalizeQpcrSampleCt),
    comparisons: asObjectArray(record.comparisons, (item): QpcrComparison | null => {
      const comparison = asRecord(item);
      if (!comparison) return null;
      const target = asString(comparison.target);
      if (!target) return null;
      return {
        target,
        baselineCondition: asString(comparison.baselineCondition),
        testCondition: asString(comparison.testCondition),
        meanDeltaCtBaseline: asNumber(comparison.meanDeltaCtBaseline),
        meanDeltaCtTest: asNumber(comparison.meanDeltaCtTest),
        deltaDeltaCt: asNumber(comparison.deltaDeltaCt),
        foldChange: asNumber(comparison.foldChange),
        replicateCount: asNumber(comparison.replicateCount) ?? 0,
        ctSd: asNumber(comparison.ctSd),
        stance: asEnumValue(comparison.stance, CROSS_ASSAY_STANCES, 'inconclusive'),
        evidenceStrength: asEnumValue(comparison.evidenceStrength, CROSS_ASSAY_STRENGTHS, 'not_interpretable'),
      };
    }),
    qc: {
      status: asEnumValue(qc.status, ['pass', 'warning', 'fail'] as const, 'warning'),
      flags: unique(asStringArray(qc.flags)).filter((item): item is QpcrQcFlag =>
        (QPCR_QC_FLAGS as readonly string[]).includes(item),
      ),
      notes: asStringArray(qc.notes),
    },
    decision,
    provenance: {
      generatedBy: 'deterministic',
      generatedAt: asString(provenance.generatedAt) || new Date().toISOString(),
      sourceEvidenceItemIds: unique(asStringArray(provenance.sourceEvidenceItemIds)),
      sourceFutureTaskIds: unique(asStringArray(provenance.sourceFutureTaskIds)),
      sourcePackageIds: unique(asStringArray(provenance.sourcePackageIds)),
      warnings: asStringArray(provenance.warnings),
    },
  };
}

export function normalizeMobileCaptureQualityCheck(value: unknown): MobileCaptureQualityCheck | null {
  const record = asRecord(value);
  if (!record) return null;
  const flags = unique(asStringArray(record.flags)).filter((item): item is MobileCaptureQualityFlag =>
    (MOBILE_CAPTURE_QUALITY_FLAGS as readonly string[]).includes(item),
  );
  return {
    status: asEnumValue(record.status, ['pass', 'warning', 'fail'] as const, flags.length ? 'warning' : 'pass'),
    flags,
    notes: asStringArray(record.notes),
    width: asNumber(record.width),
    height: asNumber(record.height),
    exposureMean: asNumber(record.exposureMean),
    contrastSd: asNumber(record.contrastSd),
  };
}

export function normalizeCroReportExtractionDraft(value: unknown): CroReportExtractionDraft | null {
  const record = asRecord(value);
  if (!record) return null;
  const draftId = asString(record.draftId);
  const labId = asString(record.labId);
  if (!draftId || !labId) return null;
  const sourceFile = asRecord(record.sourceFile) || {};
  const linkedRefs = asRecord(record.linkedRefs) || {};
  const providerProvenance = asRecord(record.providerProvenance) || {};
  return {
    draftId,
    labId,
    packageId: asOptionalString(record.packageId),
    futureTaskId: asOptionalString(record.futureTaskId),
    candidateId: asOptionalString(record.candidateId),
    status: asEnumValue(record.status, ['uploaded', 'needs_review', 'confirmed', 'rejected', 'failed'] as const, 'needs_review'),
    sourceFile: {
      fileId: asOptionalString(sourceFile.fileId),
      attachmentId: asOptionalString(sourceFile.attachmentId),
      wikiNodeId: asOptionalString(sourceFile.wikiNodeId),
      objectKey: asOptionalString(sourceFile.objectKey),
      fileName: asOptionalString(sourceFile.fileName),
      mimeType: asOptionalString(sourceFile.mimeType),
      pageRefs: asObjectArray(sourceFile.pageRefs, (item) => {
        const pageRef = asRecord(item);
        if (!pageRef) return null;
        return {
          page: asNumber(pageRef.page),
          regionId: asOptionalString(pageRef.regionId),
          tableId: asOptionalString(pageRef.tableId),
          figureId: asOptionalString(pageRef.figureId),
        };
      }),
    },
    reportTextSnippet: asString(record.reportTextSnippet),
    extractedEvidence: asObjectArray(record.extractedEvidence, (item): CroExtractedEvidenceDraft | null => {
      const draft = asRecord(item);
      if (!draft) return null;
      const observationDraft = asString(draft.observationDraft);
      if (!observationDraft) return null;
      return {
        draftId: asString(draft.draftId) || draftId,
        assayType: asEnumValue(draft.assayType, CRO_REPORT_ASSAY_TYPES, 'unknown'),
        candidateId: asOptionalString(draft.candidateId),
        packageId: asOptionalString(draft.packageId),
        observationDraft,
        extractedMetrics: asRecord(draft.extractedMetrics) || {},
        sourceQuotes: asStringArray(draft.sourceQuotes),
        pageRefs: asObjectArray(draft.pageRefs, (item) => {
          const pageRef = asRecord(item);
          if (!pageRef) return null;
          return {
            page: asNumber(pageRef.page),
            regionId: asOptionalString(pageRef.regionId),
            tableId: asOptionalString(pageRef.tableId),
            figureId: asOptionalString(pageRef.figureId),
          };
        }),
        needsHumanConfirmation: true,
        guardrails: asStringArray(draft.guardrails),
      };
    }),
    linkedRefs: {
      evidenceItemIds: unique(asStringArray(linkedRefs.evidenceItemIds)),
    },
    providerProvenance: {
      mode: asEnumValue(providerProvenance.mode, ['local_deterministic', 'external_provider'] as const, 'local_deterministic'),
      provider: asOptionalString(providerProvenance.provider),
      warnings: asStringArray(providerProvenance.warnings),
    },
    createdBy: asOptionalString(record.createdBy),
    createdAt: asString(record.createdAt) || new Date().toISOString(),
    updatedAt: asString(record.updatedAt) || new Date().toISOString(),
  };
}

export function deriveDecisionStatus(summary: CandidateEvidenceSummary): ValidationDecisionStatus {
  if (summary.userDecision?.status) return summary.userDecision.status;
  if (summary.overallDecisionDraft.recommendation === 'advance') return 'ready_to_advance';
  if (summary.overallDecisionDraft.recommendation === 'repeat_assay') return 'needs_repeat';
  if (summary.overallDecisionDraft.recommendation === 'run_orthogonal_assay') return 'needs_orthogonal_validation';
  if (summary.overallDecisionDraft.recommendation === 'deprioritize') return 'deprioritized';
  if (summary.overallDecisionDraft.recommendation === 'kill') return 'killed';
  if (summary.conflicts.length) return 'mixed_evidence';
  return 'insufficient_evidence';
}

export function deriveDecisionBoardRow(summaryInput: CandidateEvidenceSummary | unknown): DecisionBoardRow | null {
  const summary = normalizeCandidateEvidenceSummary(summaryInput);
  if (!summary) return null;
  const defaultBadge = {
    status: 'not_started' as const,
    stance: 'not_applicable' as const,
    evidenceStrength: 'not_interpretable' as const,
    confidence: 'low' as const,
  };
  const assayBadges = Object.fromEntries(CROSS_ASSAY_TYPES.map((type) => [type, defaultBadge])) as DecisionBoardRow['assayBadges'];
  for (const assay of summary.assaySummaries) {
    assayBadges[assay.assayType] = {
      status: assay.status,
      stance: assay.stance,
      evidenceStrength: assay.evidenceStrength,
      confidence: assay.confidence,
    };
  }
  return {
    candidateId: summary.candidateId,
    packageIds: summary.packageIds,
    entityLabel: summary.entity.label,
    entityType: summary.entity.type,
    hypothesis: summary.hypothesis,
    status: deriveDecisionStatus(summary),
    recommendation: summary.userDecision?.decision || summary.overallDecisionDraft.recommendation,
    confidence: summary.overallDecisionDraft.confidence,
    assayBadges,
    blockers: summary.overallDecisionDraft.blockingIssues,
    nextActionLabel: summary.nextActions[0]?.label || summary.overallDecisionDraft.suggestedFollowUpTasks[0]?.label,
    updatedAt: summary.updatedAt,
  };
}
