export const ASSAY_IMAGE_EVIDENCE_DRAFT_STATUSES = [
  'uploaded',
  'analyzing',
  'needs_review',
  'confirmed',
  'rejected',
  'archived',
  'failed',
] as const;

export const ASSAY_IMAGE_TYPES = ['wb', 'if_imaging'] as const;

export const ASSAY_IMAGE_QC_STATUSES = ['pass', 'warning', 'fail'] as const;

export const ASSAY_IMAGE_QC_FLAGS = [
  'overexposed',
  'saturated_band',
  'low_contrast',
  'tilted_lane',
  'merged_band',
  'missing_loading_control',
  'inconsistent_lane_width',
  'background_too_noisy',
  'high_background',
  'segmentation_failed',
  'manual_correction_required',
  'unknown',
] as const;

export const WB_RESULT_DIRECTIONS = ['up', 'down', 'unchanged', 'mixed', 'inconclusive'] as const;
export const WB_EVIDENCE_STRENGTHS = ['strong', 'moderate', 'weak', 'not_interpretable'] as const;
export const ASSAY_IMAGE_RESULT_DIRECTIONS = ['support', 'against', 'mixed', 'inconclusive'] as const;
export const ASSAY_EVIDENCE_DECISION_STANCES = ['support', 'against', 'mixed', 'inconclusive', 'needs_repeat'] as const;
export const ASSAY_EVIDENCE_NEXT_ACTIONS = ['accept', 'repeat_experiment', 'adjust_protocol', 'collect_more_replicates'] as const;
export const ASSAY_EVIDENCE_REVIEW_DECISIONS = [
  'accept',
  'needs_repeat',
  'collect_more_replicates',
  'return_for_correction',
] as const;
export const ASSAY_EVIDENCE_REPEAT_REASONS = [
  'loading_control_missing',
  'saturated_band',
  'high_background',
  'inconsistent_replicate',
  'segmentation_failed',
  'low_contrast',
  'manual_review_required',
  'other',
] as const;
export const WB_GROUP_CONSISTENCY = ['consistent', 'mixed', 'insufficient_replicates'] as const;

export type AssayImageEvidenceDraftStatus = (typeof ASSAY_IMAGE_EVIDENCE_DRAFT_STATUSES)[number];
export type AssayImageType = (typeof ASSAY_IMAGE_TYPES)[number];
export type AssayImageQcStatus = (typeof ASSAY_IMAGE_QC_STATUSES)[number];
export type AssayImageQcFlag = (typeof ASSAY_IMAGE_QC_FLAGS)[number];
export type WbResultDirection = (typeof WB_RESULT_DIRECTIONS)[number];
export type WbEvidenceStrength = (typeof WB_EVIDENCE_STRENGTHS)[number];
export type AssayImageResultDirection = (typeof ASSAY_IMAGE_RESULT_DIRECTIONS)[number];
export type AssayEvidenceDecisionStance = (typeof ASSAY_EVIDENCE_DECISION_STANCES)[number];
export type AssayEvidenceNextAction = (typeof ASSAY_EVIDENCE_NEXT_ACTIONS)[number];
export type AssayEvidenceReviewDecision = (typeof ASSAY_EVIDENCE_REVIEW_DECISIONS)[number];
export type AssayEvidenceRepeatReason = (typeof ASSAY_EVIDENCE_REPEAT_REASONS)[number];
export type WbGroupConsistency = (typeof WB_GROUP_CONSISTENCY)[number];

export interface ImageBbox {
  x: number;
  y: number;
  width: number;
  height: number;
  unit: 'pixel';
}

export interface AssayImageSource {
  attachmentId?: string;
  dataHubFileId?: string;
  objectKey?: string;
  storageUrl?: string;
  fileName: string;
  mimeType: string;
  width?: number;
  height?: number;
  checksum?: string;
  captureDevice?: string;
}

export interface AssayImageContext {
  packageId?: string;
  futureTaskId?: string;
  candidateId?: string;
  hitId?: string;
  target?: string;
  loadingControl?: string;
  hypothesis?: string;
  expectedDirection?: 'up' | 'down' | 'unchanged' | 'unknown';
  conditions?: string[];
  laneOrder?: string[];
  sampleGroups?: string[];
  replicateId?: string;
  metadata?: Record<string, unknown>;
}

export interface WbLane {
  laneId: string;
  label?: string;
  sampleId?: string;
  condition?: string;
  replicateId?: string;
  bbox: ImageBbox;
  qcFlags: AssayImageQcFlag[];
  excluded?: boolean;
}

export interface WbBand {
  bandId: string;
  laneId: string;
  target: string;
  bbox: ImageBbox;
  rawIntensity: number;
  backgroundIntensity?: number;
  backgroundCorrectedIntensity?: number;
  normalizedIntensity?: number;
  saturationScore?: number;
  qcFlags: AssayImageQcFlag[];
  excluded?: boolean;
}

export interface WbComparison {
  comparisonId: string;
  target: string;
  baselineCondition: string;
  testCondition: string;
  foldChange?: number;
  direction: Exclude<WbResultDirection, 'mixed'>;
  evidenceStrength: WbEvidenceStrength;
  rationale: string;
}

export interface WbQuantificationResult {
  lanes: WbLane[];
  bands: WbBand[];
  comparisons: WbComparison[];
  normalization?: {
    method: 'loading_control' | 'total_lane' | 'none';
    controlTarget?: string;
  };
  summary: {
    direction: WbResultDirection;
    foldChange?: number;
    confidence: 'high' | 'medium' | 'low';
    interpretationDraft: string;
  };
}

export interface AssayImageArtifactRef {
  artifactId: string;
  kind: 'original_image' | 'overlay_image' | 'roi_json' | 'quant_json' | 'qc_json';
  name: string;
  mimeType?: string;
  objectKey?: string;
  storageUrl?: string;
  metadata?: Record<string, unknown>;
}

export interface AssayImageQcSummary {
  status: AssayImageQcStatus;
  flags: AssayImageQcFlag[];
  notes: string[];
}

export interface AssayImageProvenance {
  algorithm: 'classical_cv' | 'model_assisted' | 'manual_only';
  algorithmVersion?: string;
  provider?: string;
  model?: string;
  parameters: Record<string, unknown>;
  sourcePackageId?: string;
  sourceFutureTaskId?: string;
  createdAt?: string;
}

export interface AssayImageReview {
  reviewedBy?: string;
  reviewedAt?: string;
  decision?: 'confirm' | 'reject' | 'needs_repeat';
  correctionSummary: string[];
}

export interface AssayImageLinkedRefs {
  evidenceItemId?: string;
  wikiNodeId?: string;
  dataHubFileId?: string;
  artifactIds?: string[];
}

export interface AssayImageEvidenceDraft {
  draftId: string;
  labId: string;
  assayType: AssayImageType;
  status: AssayImageEvidenceDraftStatus;
  createdBy?: string;
  packageId?: string;
  futureTaskId?: string;
  candidateId?: string;
  hitId?: string;
  context: AssayImageContext;
  sourceImage: AssayImageSource;
  wbResult?: WbQuantificationResult;
  ifResult?: IfImagingQuantificationResult;
  artifacts: AssayImageArtifactRef[];
  qc: AssayImageQcSummary;
  provenance: AssayImageProvenance;
  review?: AssayImageReview;
  linkedRefs?: AssayImageLinkedRefs;
  errorMessage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AssayImageEvidenceMetadata {
  assayType: AssayImageType;
  cardType?: 'wb_evidence' | 'if_evidence';
  draftId: string;
  groupId?: string;
  packageId?: string;
  futureTaskId?: string;
  candidateId?: string;
  hitId?: string;
  hypothesis?: string;
  resultDirection: AssayImageResultDirection;
  evidenceStrength: WbEvidenceStrength;
  quantSummary: Record<string, unknown>;
  qcFlags: AssayImageQcFlag[];
  reviewedBy?: string;
  reviewedAt?: string;
}

export interface AssayEvidenceDecision {
  stance: AssayEvidenceDecisionStance;
  evidenceStrength: WbEvidenceStrength;
  decidedBy?: string;
  decidedAt?: string;
  rationale: string;
  nextAction?: AssayEvidenceNextAction;
  repeatReason?: AssayEvidenceRepeatReason;
}

export interface AssayEvidenceRegressionCase {
  caseId: string;
  assayType: AssayImageType;
  sourceImageRef: string;
  expectedOutcome?: AssayEvidenceDecisionStance;
  expectedQcFlags?: AssayImageQcFlag[];
  expectedLaneCount?: number;
  expectedBandCount?: number;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface WbConditionSummary {
  condition: string;
  meanNormalizedIntensity?: number;
  sd?: number;
  sem?: number;
  replicateCount: number;
  excludedReplicateCount: number;
}

export interface WbGroupComparison {
  baselineCondition: string;
  testCondition: string;
  meanFoldChange?: number;
  direction: WbResultDirection;
  consistency: WbGroupConsistency;
  evidenceStrength: WbEvidenceStrength;
}

export interface WbGroupSummary {
  n: number;
  conditions: WbConditionSummary[];
  comparisons: WbGroupComparison[];
}

export interface AssayEvidenceGroupQc {
  status: AssayImageQcStatus;
  flags: AssayImageQcFlag[];
  notes: string[];
}

export interface WbEvidenceGroup {
  groupId: string;
  labId?: string;
  packageId?: string;
  futureTaskId?: string;
  candidateId?: string;
  target: string;
  loadingControl?: string;
  replicateDraftIds: string[];
  excludedReplicates?: Array<{ draftId: string; reason: string }>;
  summary: WbGroupSummary;
  qc: AssayEvidenceGroupQc;
  decision: AssayEvidenceDecision;
  linkedRefs?: {
    evidenceItemId?: string;
    wikiNodeId?: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface PiAssayEvidenceReviewSnapshot {
  snapshotId: string;
  evidenceItemId?: string;
  groupId?: string;
  draftId?: string;
  hypothesis: string;
  stance: AssayEvidenceDecisionStance;
  evidenceStrength: WbEvidenceStrength;
  keyQuant: Record<string, unknown>;
  qcFlags: AssayImageQcFlag[];
  reviewerNotes?: string;
  decision?: AssayEvidenceReviewDecision;
  nextAction?: AssayEvidenceNextAction;
  createdAt: string;
}

export interface IfImagingFieldMetric {
  fieldId: string;
  nucleiCount: number;
  markerPositiveRate: number;
  meanIntensity: number;
  excluded?: boolean;
  excludeReason?: string;
}

export interface IfImagingQuantificationResult {
  channels: {
    nuclei?: string;
    marker?: string;
    others?: string[];
  };
  fields: IfImagingFieldMetric[];
  summary: {
    nucleiCount: number;
    markerPositiveRate: number;
    meanIntensity: number;
    confidence: 'high' | 'medium' | 'low';
    interpretationDraft: string;
  };
}

function normalizeIfImagingQuantificationResult(value: unknown): IfImagingQuantificationResult | null {
  const record = asRecord(value);
  if (!record) return null;
  const channels = asRecord(record.channels) || {};
  const fields = asObjectArray(record.fields, (item): IfImagingFieldMetric | null => {
    const field = asRecord(item) || {};
    const fieldId = asString(field.fieldId);
    if (!fieldId) return null;
    return {
      fieldId,
      nucleiCount: asNumber(field.nucleiCount) ?? 0,
      markerPositiveRate: asNumber(field.markerPositiveRate) ?? 0,
      meanIntensity: asNumber(field.meanIntensity) ?? 0,
      ...(asBoolean(field.excluded) !== undefined ? { excluded: asBoolean(field.excluded) } : {}),
      ...(pickOptionalString(field, 'excludeReason') ? { excludeReason: pickOptionalString(field, 'excludeReason') } : {}),
    };
  }).filter((field): field is IfImagingFieldMetric => Boolean(field));
  const summary = asRecord(record.summary) || {};
  return {
    channels: {
      nuclei: pickOptionalString(channels, 'nuclei'),
      marker: pickOptionalString(channels, 'marker'),
      others: asStringArray(channels.others),
    },
    fields,
    summary: {
      nucleiCount: asNumber(summary.nucleiCount) ?? fields.reduce((sum, field) => sum + field.nucleiCount, 0),
      markerPositiveRate: asNumber(summary.markerPositiveRate) ?? 0,
      meanIntensity: asNumber(summary.meanIntensity) ?? 0,
      confidence: asEnumValue(summary.confidence, ['high', 'medium', 'low'] as const, 'low'),
      interpretationDraft: asString(summary.interpretationDraft),
    },
  };
}

export interface WbReviewPatchLane {
  laneId: string;
  label?: string;
  sampleId?: string;
  condition?: string;
  replicateId?: string;
  bbox?: ImageBbox;
  excluded?: boolean;
}

export interface WbReviewPatchBand {
  bandId: string;
  laneId?: string;
  target?: string;
  bbox?: ImageBbox;
  excluded?: boolean;
}

export interface WbReviewPatch {
  imageBounds?: { width: number; height: number };
  lanes?: WbReviewPatchLane[];
  bands?: WbReviewPatchBand[];
  loadingControlTarget?: string;
  targetBandId?: string;
  decision?: 'confirm' | 'reject' | 'needs_repeat';
  correctionSummary?: string[];
}

export interface WbReviewPatchValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
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
  const parsed = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
  return Number.isFinite(parsed) ? parsed : undefined;
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

function pickOptionalString(record: Record<string, unknown>, key: string): string | undefined {
  const value = asString(record[key]);
  return value || undefined;
}

function pickOptionalNumber(record: Record<string, unknown>, key: string): number | undefined {
  return asNumber(record[key]);
}

function normalizeQcFlag(value: unknown): AssayImageQcFlag {
  return asEnumValue(value, ASSAY_IMAGE_QC_FLAGS, 'unknown');
}

export function isValidImageBbox(bbox: ImageBbox, bounds?: { width: number; height: number }): boolean {
  if (bbox.unit !== 'pixel') return false;
  if (bbox.x < 0 || bbox.y < 0 || bbox.width <= 0 || bbox.height <= 0) return false;
  if (!bounds) return true;
  return bbox.x + bbox.width <= bounds.width && bbox.y + bbox.height <= bounds.height;
}

export function normalizeImageBbox(value: unknown): ImageBbox | null {
  const record = asRecord(value);
  if (!record) return null;
  const x = asNumber(record.x);
  const y = asNumber(record.y);
  const width = asNumber(record.width);
  const height = asNumber(record.height);
  const bbox = {
    x: x ?? 0,
    y: y ?? 0,
    width: width ?? 0,
    height: height ?? 0,
    unit: 'pixel' as const,
  };
  return isValidImageBbox(bbox) ? bbox : null;
}

export function normalizeAssayImageSource(value: unknown): AssayImageSource | null {
  const record = asRecord(value);
  if (!record) return null;
  const attachmentId = asString(record.attachmentId || record.imageAttachmentId);
  const dataHubFileId = asString(record.dataHubFileId || record.fileId);
  const objectKey = asString(record.objectKey);
  if (!attachmentId && !dataHubFileId && !objectKey) return null;
  return {
    attachmentId: attachmentId || undefined,
    dataHubFileId: dataHubFileId || undefined,
    objectKey: objectKey || undefined,
    storageUrl: pickOptionalString(record, 'storageUrl'),
    fileName: asString(record.fileName || record.originalName),
    mimeType: asString(record.mimeType),
    width: pickOptionalNumber(record, 'width'),
    height: pickOptionalNumber(record, 'height'),
    checksum: pickOptionalString(record, 'checksum'),
    captureDevice: pickOptionalString(record, 'captureDevice'),
  };
}

function normalizeContext(value: unknown): AssayImageContext {
  const record = asRecord(value) || {};
  const expectedDirection = asEnumValue(
    record.expectedDirection,
    ['up', 'down', 'unchanged', 'unknown'] as const,
    'unknown',
  );
  return {
    packageId: pickOptionalString(record, 'packageId'),
    futureTaskId: pickOptionalString(record, 'futureTaskId'),
    candidateId: pickOptionalString(record, 'candidateId'),
    hitId: pickOptionalString(record, 'hitId'),
    target: pickOptionalString(record, 'target'),
    loadingControl: pickOptionalString(record, 'loadingControl'),
    hypothesis: pickOptionalString(record, 'hypothesis'),
    expectedDirection,
    conditions: asStringArray(record.conditions),
    laneOrder: asStringArray(record.laneOrder),
    sampleGroups: asStringArray(record.sampleGroups),
    replicateId: pickOptionalString(record, 'replicateId'),
    metadata: asRecord(record.metadata) || {},
  };
}

function normalizeLane(value: unknown): WbLane | null {
  const record = asRecord(value);
  if (!record) return null;
  const laneId = asString(record.laneId);
  const bbox = normalizeImageBbox(record.bbox);
  if (!laneId || !bbox) return null;
  return {
    laneId,
    label: pickOptionalString(record, 'label'),
    sampleId: pickOptionalString(record, 'sampleId'),
    condition: pickOptionalString(record, 'condition'),
    replicateId: pickOptionalString(record, 'replicateId'),
    bbox,
    qcFlags: asObjectArray(record.qcFlags, normalizeQcFlag),
    excluded: asBoolean(record.excluded),
  };
}

function normalizeBand(value: unknown, laneIds: Set<string>): WbBand | null {
  const record = asRecord(value);
  if (!record) return null;
  const bandId = asString(record.bandId);
  const laneId = asString(record.laneId);
  const target = asString(record.target);
  const rawIntensity = asNumber(record.rawIntensity);
  const bbox = normalizeImageBbox(record.bbox);
  if (!bandId || !laneId || !laneIds.has(laneId) || !target || rawIntensity === undefined || rawIntensity < 0 || !bbox) {
    return null;
  }
  return {
    bandId,
    laneId,
    target,
    bbox,
    rawIntensity,
    backgroundIntensity: pickOptionalNumber(record, 'backgroundIntensity'),
    backgroundCorrectedIntensity: pickOptionalNumber(record, 'backgroundCorrectedIntensity'),
    normalizedIntensity: pickOptionalNumber(record, 'normalizedIntensity'),
    saturationScore: pickOptionalNumber(record, 'saturationScore'),
    qcFlags: asObjectArray(record.qcFlags, normalizeQcFlag),
    excluded: asBoolean(record.excluded),
  };
}

function normalizeComparison(value: unknown): WbComparison | null {
  const record = asRecord(value);
  if (!record) return null;
  const comparisonId = asString(record.comparisonId);
  const target = asString(record.target);
  if (!comparisonId || !target) return null;
  return {
    comparisonId,
    target,
    baselineCondition: asString(record.baselineCondition),
    testCondition: asString(record.testCondition),
    foldChange: pickOptionalNumber(record, 'foldChange'),
    direction: asEnumValue(record.direction, ['up', 'down', 'unchanged', 'inconclusive'] as const, 'inconclusive'),
    evidenceStrength: asEnumValue(record.evidenceStrength, WB_EVIDENCE_STRENGTHS, 'not_interpretable'),
    rationale: asString(record.rationale),
  };
}

export function normalizeWbQuantificationResult(value: unknown): WbQuantificationResult | null {
  const record = asRecord(value);
  if (!record) return null;
  const lanes = asObjectArray(record.lanes, normalizeLane).filter((lane): lane is WbLane => Boolean(lane));
  const laneIds = new Set(lanes.map((lane) => lane.laneId));
  const bands = asObjectArray(record.bands, (item) => normalizeBand(item, laneIds)).filter((band): band is WbBand =>
    Boolean(band),
  );
  const comparisons = asObjectArray(record.comparisons, normalizeComparison).filter(
    (comparison): comparison is WbComparison => Boolean(comparison),
  );
  const normalization = asRecord(record.normalization);
  const summary = asRecord(record.summary) || {};
  return {
    lanes,
    bands,
    comparisons,
    normalization: normalization
      ? {
          method: asEnumValue(normalization.method, ['loading_control', 'total_lane', 'none'] as const, 'none'),
          controlTarget: pickOptionalString(normalization, 'controlTarget'),
        }
      : undefined,
    summary: {
      direction: asEnumValue(summary.direction, WB_RESULT_DIRECTIONS, 'inconclusive'),
      foldChange: pickOptionalNumber(summary, 'foldChange'),
      confidence: asEnumValue(summary.confidence, ['high', 'medium', 'low'] as const, 'low'),
      interpretationDraft: asString(summary.interpretationDraft),
    },
  };
}

function normalizeQcSummary(value: unknown): AssayImageQcSummary {
  const record = asRecord(value) || {};
  return {
    status: asEnumValue(record.status, ASSAY_IMAGE_QC_STATUSES, 'warning'),
    flags: asObjectArray(record.flags, normalizeQcFlag),
    notes: asStringArray(record.notes),
  };
}

function normalizeProvenance(value: unknown, context: AssayImageContext): AssayImageProvenance {
  const record = asRecord(value) || {};
  return {
    algorithm: asEnumValue(record.algorithm, ['classical_cv', 'model_assisted', 'manual_only'] as const, 'manual_only'),
    algorithmVersion: pickOptionalString(record, 'algorithmVersion'),
    provider: pickOptionalString(record, 'provider'),
    model: pickOptionalString(record, 'model'),
    parameters: asRecord(record.parameters) || {},
    sourcePackageId: pickOptionalString(record, 'sourcePackageId') || context.packageId,
    sourceFutureTaskId: pickOptionalString(record, 'sourceFutureTaskId') || context.futureTaskId,
    createdAt: pickOptionalString(record, 'createdAt'),
  };
}

function normalizeReview(value: unknown): AssayImageReview | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  return {
    reviewedBy: pickOptionalString(record, 'reviewedBy'),
    reviewedAt: pickOptionalString(record, 'reviewedAt'),
    decision: asEnumValue(record.decision, ['confirm', 'reject', 'needs_repeat'] as const, 'needs_repeat'),
    correctionSummary: asStringArray(record.correctionSummary),
  };
}

function normalizeArtifact(value: unknown): AssayImageArtifactRef | null {
  const record = asRecord(value);
  if (!record) return null;
  const artifactId = asString(record.artifactId);
  if (!artifactId) return null;
  return {
    artifactId,
    kind: asEnumValue(
      record.kind,
      ['original_image', 'overlay_image', 'roi_json', 'quant_json', 'qc_json'] as const,
      'quant_json',
    ),
    name: asString(record.name),
    mimeType: pickOptionalString(record, 'mimeType'),
    objectKey: pickOptionalString(record, 'objectKey'),
    storageUrl: pickOptionalString(record, 'storageUrl'),
    metadata: asRecord(record.metadata) || {},
  };
}

function normalizeLinkedRefs(value: unknown): AssayImageLinkedRefs | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  return {
    evidenceItemId: pickOptionalString(record, 'evidenceItemId'),
    wikiNodeId: pickOptionalString(record, 'wikiNodeId'),
    dataHubFileId: pickOptionalString(record, 'dataHubFileId'),
    artifactIds: asStringArray(record.artifactIds),
  };
}

function normalizeDecision(value: unknown): AssayEvidenceDecision {
  const record = asRecord(value) || {};
  return {
    stance: asEnumValue(record.stance, ASSAY_EVIDENCE_DECISION_STANCES, 'inconclusive'),
    evidenceStrength: asEnumValue(record.evidenceStrength, WB_EVIDENCE_STRENGTHS, 'not_interpretable'),
    decidedBy: pickOptionalString(record, 'decidedBy'),
    decidedAt: pickOptionalString(record, 'decidedAt'),
    rationale: asString(record.rationale),
    nextAction: record.nextAction
      ? asEnumValue(record.nextAction, ASSAY_EVIDENCE_NEXT_ACTIONS, 'collect_more_replicates')
      : undefined,
    repeatReason: record.repeatReason
      ? asEnumValue(record.repeatReason, ASSAY_EVIDENCE_REPEAT_REASONS, 'other')
      : undefined,
  };
}

export function normalizeAssayEvidenceRegressionCase(value: unknown): AssayEvidenceRegressionCase | null {
  const record = asRecord(value);
  if (!record) return null;
  const caseId = asString(record.caseId || record.id);
  const sourceImageRef = asString(record.sourceImageRef || record.objectKey || record.storageUrl);
  const assayType = asEnumValue(record.assayType, ASSAY_IMAGE_TYPES, 'wb');
  if (!caseId || !sourceImageRef) return null;
  return {
    caseId,
    assayType,
    sourceImageRef,
    expectedOutcome: record.expectedOutcome
      ? asEnumValue(record.expectedOutcome, ASSAY_EVIDENCE_DECISION_STANCES, 'inconclusive')
      : undefined,
    expectedQcFlags: asObjectArray(record.expectedQcFlags, normalizeQcFlag),
    expectedLaneCount: pickOptionalNumber(record, 'expectedLaneCount'),
    expectedBandCount: pickOptionalNumber(record, 'expectedBandCount'),
    notes: pickOptionalString(record, 'notes'),
    createdAt: pickOptionalString(record, 'createdAt'),
    updatedAt: pickOptionalString(record, 'updatedAt'),
  };
}

function normalizeWbConditionSummary(value: unknown): WbConditionSummary | null {
  const record = asRecord(value);
  if (!record) return null;
  const condition = asString(record.condition);
  if (!condition) return null;
  return {
    condition,
    meanNormalizedIntensity: pickOptionalNumber(record, 'meanNormalizedIntensity'),
    sd: pickOptionalNumber(record, 'sd'),
    sem: pickOptionalNumber(record, 'sem'),
    replicateCount: asNumber(record.replicateCount) ?? 0,
    excludedReplicateCount: asNumber(record.excludedReplicateCount) ?? 0,
  };
}

function normalizeWbGroupComparison(value: unknown): WbGroupComparison | null {
  const record = asRecord(value);
  if (!record) return null;
  const baselineCondition = asString(record.baselineCondition);
  const testCondition = asString(record.testCondition);
  if (!baselineCondition || !testCondition) return null;
  return {
    baselineCondition,
    testCondition,
    meanFoldChange: pickOptionalNumber(record, 'meanFoldChange'),
    direction: asEnumValue(record.direction, WB_RESULT_DIRECTIONS, 'inconclusive'),
    consistency: asEnumValue(record.consistency, WB_GROUP_CONSISTENCY, 'insufficient_replicates'),
    evidenceStrength: asEnumValue(record.evidenceStrength, WB_EVIDENCE_STRENGTHS, 'not_interpretable'),
  };
}

function normalizeWbGroupSummary(value: unknown): WbGroupSummary {
  const record = asRecord(value) || {};
  return {
    n: asNumber(record.n) ?? 0,
    conditions: asObjectArray(record.conditions, normalizeWbConditionSummary).filter(
      (item): item is WbConditionSummary => Boolean(item),
    ),
    comparisons: asObjectArray(record.comparisons, normalizeWbGroupComparison).filter(
      (item): item is WbGroupComparison => Boolean(item),
    ),
  };
}

export function normalizeWbEvidenceGroup(value: unknown): WbEvidenceGroup | null {
  const record = asRecord(value);
  if (!record) return null;
  const groupId = asString(record.groupId || record.id);
  const target = asString(record.target);
  const replicateDraftIds = asStringArray(record.replicateDraftIds);
  if (!groupId || !target || replicateDraftIds.length === 0) return null;
  const qc = asRecord(record.qc) || {};
  return {
    groupId,
    labId: pickOptionalString(record, 'labId'),
    packageId: pickOptionalString(record, 'packageId'),
    futureTaskId: pickOptionalString(record, 'futureTaskId'),
    candidateId: pickOptionalString(record, 'candidateId'),
    target,
    loadingControl: pickOptionalString(record, 'loadingControl'),
    replicateDraftIds,
    excludedReplicates: asObjectArray(record.excludedReplicates, (item) => {
      const excluded = asRecord(item) || {};
      return { draftId: asString(excluded.draftId), reason: asString(excluded.reason) };
    }).filter((item) => item.draftId && item.reason),
    summary: normalizeWbGroupSummary(record.summary),
    qc: {
      status: asEnumValue(qc.status, ASSAY_IMAGE_QC_STATUSES, 'warning'),
      flags: asObjectArray(qc.flags, normalizeQcFlag),
      notes: asStringArray(qc.notes),
    },
    decision: normalizeDecision(record.decision),
    linkedRefs: asRecord(record.linkedRefs) as WbEvidenceGroup['linkedRefs'],
    createdAt: pickOptionalString(record, 'createdAt'),
    updatedAt: pickOptionalString(record, 'updatedAt'),
  };
}

export function normalizePiAssayEvidenceReviewSnapshot(value: unknown): PiAssayEvidenceReviewSnapshot | null {
  const record = asRecord(value);
  if (!record) return null;
  const snapshotId = asString(record.snapshotId || record.id);
  if (!snapshotId) return null;
  return {
    snapshotId,
    evidenceItemId: pickOptionalString(record, 'evidenceItemId'),
    groupId: pickOptionalString(record, 'groupId'),
    draftId: pickOptionalString(record, 'draftId'),
    hypothesis: asString(record.hypothesis),
    stance: asEnumValue(record.stance, ASSAY_EVIDENCE_DECISION_STANCES, 'inconclusive'),
    evidenceStrength: asEnumValue(record.evidenceStrength, WB_EVIDENCE_STRENGTHS, 'not_interpretable'),
    keyQuant: asRecord(record.keyQuant) || {},
    qcFlags: asObjectArray(record.qcFlags, normalizeQcFlag),
    reviewerNotes: pickOptionalString(record, 'reviewerNotes'),
    decision: record.decision ? asEnumValue(record.decision, ASSAY_EVIDENCE_REVIEW_DECISIONS, 'needs_repeat') : undefined,
    nextAction: record.nextAction
      ? asEnumValue(record.nextAction, ASSAY_EVIDENCE_NEXT_ACTIONS, 'collect_more_replicates')
      : undefined,
    createdAt: asString(record.createdAt),
  };
}

export function summarizeWbEvidenceGroupFromDrafts(input: {
  groupId: string;
  labId?: string;
  target: string;
  loadingControl?: string;
  drafts: AssayImageEvidenceDraft[];
  excludedReplicates?: Array<{ draftId: string; reason: string }>;
}): WbEvidenceGroup {
  const excluded = new Map((input.excludedReplicates || []).map((item) => [item.draftId, item.reason]));
  const usableDrafts = input.drafts.filter((draft) => draft.wbResult && !excluded.has(draft.draftId));
  const first = input.drafts[0];
  const conditionValues = new Map<string, number[]>();
  for (const draft of usableDrafts) {
    const result = draft.wbResult;
    if (!result) continue;
    for (const band of result.bands.filter((item) => item.target === input.target && item.normalizedIntensity !== undefined)) {
      const lane = result.lanes.find((item) => item.laneId === band.laneId);
      const condition = lane?.condition || lane?.label || band.laneId;
      const values = conditionValues.get(condition) || [];
      values.push(band.normalizedIntensity || 0);
      conditionValues.set(condition, values);
    }
  }
  const conditions = Array.from(conditionValues.entries()).map(([condition, values]) => {
    const mean = values.reduce((sum, value) => sum + value, 0) / Math.max(1, values.length);
    const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / Math.max(1, values.length - 1);
    const sd = values.length > 1 ? Math.sqrt(variance) : 0;
    return {
      condition,
      meanNormalizedIntensity: mean,
      sd,
      sem: values.length > 1 ? sd / Math.sqrt(values.length) : 0,
      replicateCount: values.length,
      excludedReplicateCount: 0,
    };
  });
  const baseline = conditions[0];
  const test = conditions[1];
  const validN = usableDrafts.length;
  const meanFoldChange =
    baseline?.meanNormalizedIntensity && test?.meanNormalizedIntensity
      ? test.meanNormalizedIntensity / baseline.meanNormalizedIntensity
      : undefined;
  const directions = usableDrafts
    .map((draft) => draft.wbResult?.summary.direction)
    .filter((direction): direction is WbResultDirection => Boolean(direction) && direction !== 'inconclusive');
  const uniqueDirections = new Set(directions);
  const consistency: WbGroupConsistency =
    validN < 2 ? 'insufficient_replicates' : uniqueDirections.size <= 1 ? 'consistent' : 'mixed';
  const direction: WbResultDirection =
    consistency === 'mixed'
      ? 'mixed'
      : meanFoldChange === undefined
        ? 'inconclusive'
        : meanFoldChange > 1.2
          ? 'up'
          : meanFoldChange < 0.8
            ? 'down'
            : 'unchanged';
  const hasBlocking = usableDrafts.some((draft) => hasBlockingQc(draft.qc, draft.wbResult));
  const evidenceStrength: WbEvidenceStrength =
    hasBlocking || validN === 0
      ? 'not_interpretable'
      : validN >= 3 && consistency === 'consistent'
        ? 'strong'
        : validN >= 2 && consistency === 'consistent'
          ? 'moderate'
          : validN >= 1
            ? 'weak'
            : 'not_interpretable';
  const stance: AssayEvidenceDecisionStance =
    evidenceStrength === 'not_interpretable' || direction === 'inconclusive'
      ? 'inconclusive'
      : consistency === 'mixed'
        ? 'mixed'
        : 'support';
  return {
    groupId: input.groupId,
    labId: input.labId,
    packageId: first?.packageId,
    futureTaskId: first?.futureTaskId,
    candidateId: first?.candidateId,
    target: input.target,
    loadingControl: input.loadingControl,
    replicateDraftIds: input.drafts.map((draft) => draft.draftId),
    excludedReplicates: input.excludedReplicates,
    summary: {
      n: validN,
      conditions,
      comparisons:
        baseline && test
          ? [
              {
                baselineCondition: baseline.condition,
                testCondition: test.condition,
                meanFoldChange,
                direction,
                consistency,
                evidenceStrength,
              },
            ]
          : [],
    },
    qc: {
      status: hasBlocking ? 'fail' : validN < 2 ? 'warning' : 'pass',
      flags: Array.from(new Set(usableDrafts.flatMap((draft) => draft.qc.flags))),
      notes: validN < 2 ? ['At least two usable replicates are required for group interpretation.'] : [],
    },
    decision: {
      stance,
      evidenceStrength,
      rationale:
        consistency === 'insufficient_replicates'
          ? 'Insufficient usable replicates for group-level evidence.'
          : `Group summary uses ${validN} usable replicate(s) for ${input.target}.`,
      nextAction: consistency === 'insufficient_replicates' ? 'collect_more_replicates' : 'accept',
    },
  };
}

export function normalizeAssayImageEvidenceDraft(value: unknown): AssayImageEvidenceDraft | null {
  const record = asRecord(value);
  if (!record) return null;
  const assayType = asEnumValue(record.assayType, ASSAY_IMAGE_TYPES, 'wb');
  const normalizedContext = normalizeContext(record.context);
  const context = {
    ...normalizedContext,
    packageId: asString(record.packageId) || normalizedContext.packageId,
    futureTaskId: asString(record.futureTaskId) || normalizedContext.futureTaskId,
    candidateId: asString(record.candidateId) || normalizedContext.candidateId,
    hitId: asString(record.hitId) || normalizedContext.hitId,
  };
  const sourceImage = normalizeAssayImageSource(record.sourceImage || record.source || record.image);
  if (!sourceImage) return null;
  const wbResult = normalizeWbQuantificationResult(record.wbResult || record.result || record.resultJson);
  const ifResult = normalizeIfImagingQuantificationResult(record.ifResult || record.result || record.resultJson);
  return {
    draftId: asString(record.draftId || record.id),
    labId: asString(record.labId),
    assayType,
    status: asEnumValue(record.status, ASSAY_IMAGE_EVIDENCE_DRAFT_STATUSES, 'uploaded'),
    createdBy: pickOptionalString(record, 'createdBy'),
    packageId: context.packageId,
    futureTaskId: context.futureTaskId,
    candidateId: context.candidateId,
    hitId: context.hitId,
    context,
    sourceImage,
    wbResult: assayType === 'wb' ? wbResult || undefined : undefined,
    ifResult: assayType === 'if_imaging' ? ifResult || undefined : undefined,
    artifacts: asObjectArray(record.artifacts, normalizeArtifact).filter((artifact): artifact is AssayImageArtifactRef =>
      Boolean(artifact),
    ),
    qc: normalizeQcSummary(record.qc || record.qcSummary || record.qcJson),
    provenance: normalizeProvenance(record.provenance || record.provenanceJson, context),
    review: normalizeReview(record.review || record.reviewer || record.reviewJson),
    linkedRefs: normalizeLinkedRefs(record.linkedRefs),
    errorMessage: pickOptionalString(record, 'errorMessage'),
    createdAt: asString(record.createdAt),
    updatedAt: asString(record.updatedAt),
  };
}

function hasBlockingQc(qc: AssayImageQcSummary, result?: WbQuantificationResult): boolean {
  const flags = new Set(qc.flags);
  const bandFlags = result?.bands.flatMap((band) => band.qcFlags) || [];
  for (const flag of bandFlags) flags.add(flag);
  return (
    qc.status === 'fail' ||
    flags.has('missing_loading_control') ||
    flags.has('overexposed') ||
    flags.has('saturated_band') ||
    flags.has('background_too_noisy')
  );
}

function capStrengthForQc(strength: WbEvidenceStrength, qc: AssayImageQcSummary, result?: WbQuantificationResult) {
  if (hasBlockingQc(qc, result)) return 'not_interpretable';
  if (qc.status === 'warning' && strength === 'strong') return 'moderate';
  return strength;
}

export function mapWbResultToEvidenceStance(
  draftInput: AssayImageEvidenceDraft | unknown,
  options: { expectedDirection?: 'up' | 'down' | 'unchanged' | 'unknown' } = {},
): AssayImageEvidenceMetadata | null {
  const draftRecord = asRecord(draftInput);
  const draft = draftRecord?.sourceImage
    ? (draftInput as AssayImageEvidenceDraft)
    : normalizeAssayImageEvidenceDraft(draftInput);
  if (!draft?.wbResult) return null;
  const expectedDirection = options.expectedDirection || draft.context.expectedDirection || 'unknown';
  const resultDirection = draft.wbResult.summary.direction;
  const strongest = draft.wbResult.comparisons[0]?.evidenceStrength || 'weak';
  const evidenceStrength = capStrengthForQc(strongest, draft.qc, draft.wbResult);
  const mappedDirection: AssayImageResultDirection =
    evidenceStrength === 'not_interpretable' || resultDirection === 'inconclusive' || expectedDirection === 'unknown'
      ? 'inconclusive'
      : resultDirection === 'mixed'
        ? 'mixed'
        : resultDirection === expectedDirection
          ? 'support'
          : 'against';
  return {
    assayType: draft.assayType,
    cardType: 'wb_evidence',
    draftId: draft.draftId,
    packageId: draft.packageId,
    futureTaskId: draft.futureTaskId,
    candidateId: draft.candidateId,
    hitId: draft.hitId,
    hypothesis: draft.context.hypothesis,
    resultDirection: mappedDirection,
    evidenceStrength,
    quantSummary: {
      direction: resultDirection,
      foldChange: draft.wbResult.summary.foldChange,
      confidence: draft.wbResult.summary.confidence,
      laneCount: draft.wbResult.lanes.length,
      bandCount: draft.wbResult.bands.length,
    },
    qcFlags: draft.qc.flags,
    reviewedBy: draft.review?.reviewedBy,
    reviewedAt: draft.review?.reviewedAt,
  };
}

export function validateWbReviewPatch(
  patchInput: WbReviewPatch | unknown,
  currentResult?: WbQuantificationResult,
): WbReviewPatchValidationResult {
  const patchRecord = asRecord(patchInput) || {};
  const boundsRecord = asRecord(patchRecord.imageBounds);
  const bounds =
    boundsRecord && asNumber(boundsRecord.width) && asNumber(boundsRecord.height)
      ? { width: asNumber(boundsRecord.width) || 0, height: asNumber(boundsRecord.height) || 0 }
      : undefined;
  const errors: string[] = [];
  const warnings: string[] = [];
  const labels = new Set<string>();
  const lanes = asObjectArray(patchRecord.lanes, (item) => asRecord(item) || {});
  const bands = asObjectArray(patchRecord.bands, (item) => asRecord(item) || {});

  for (const lane of lanes) {
    const laneId = asString(lane.laneId);
    if (!laneId) errors.push('laneId is required for every lane patch');
    const label = asString(lane.label).trim();
    if (label) {
      if (labels.has(label)) errors.push(`duplicate lane label: ${label}`);
      labels.add(label);
    }
    const bbox = normalizeImageBbox(lane.bbox);
    if (lane.bbox && (!bbox || !isValidImageBbox(bbox, bounds))) {
      errors.push(`lane ${laneId || '<unknown>'} bbox is outside image bounds`);
    }
  }

  const existingBandIds = new Set(currentResult?.bands.map((band) => band.bandId) || []);
  const patchBandIds = new Set<string>();
  for (const band of bands) {
    const bandId = asString(band.bandId);
    if (!bandId) errors.push('bandId is required for every band patch');
    if (bandId) patchBandIds.add(bandId);
    const bbox = normalizeImageBbox(band.bbox);
    if (band.bbox && (!bbox || !isValidImageBbox(bbox, bounds))) {
      errors.push(`band ${bandId || '<unknown>'} bbox is outside image bounds`);
    }
  }

  const targetBandId = asString(patchRecord.targetBandId);
  if (targetBandId && !patchBandIds.has(targetBandId) && !existingBandIds.has(targetBandId)) {
    errors.push(`target band does not exist: ${targetBandId}`);
  }
  const loadingControlTarget = asString(patchRecord.loadingControlTarget);
  if (!loadingControlTarget) {
    warnings.push('loadingControlTarget is not set; evidence strength must remain capped');
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
