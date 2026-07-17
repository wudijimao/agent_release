export const ANALYSIS_PROJECT_TYPES = [
  'rnaseq_bulk',
  'crispr_screen',
  'scrna_integration',
  'wgs_variant_calling',
  'spatial_omics',
] as const;

export const ANALYSIS_PROJECT_STATUSES = [
  'draft',
  'awaiting_files',
  'awaiting_parameters',
  'queued',
  'running',
  'completed',
  'failed',
  'archived',
] as const;

export const ANALYSIS_FILE_ROLES = [
  'rnaseq_count_matrix',
  'rnaseq_metadata',
  'crispr_read_counts',
  'crispr_library_design',
  'scrna_h5ad',
  'scrna_matrix',
  'scrna_metadata',
  'fastq_r1',
  'fastq_r2',
  'bam',
  'cram',
  'samplesheet',
  'reference_fasta',
  'reference_index',
  'spatial_expression',
  'spatial_coordinates',
  'image_attachment',
  'spatial_h5ad',
] as const;

export const ANALYSIS_JOB_STATUSES = ['queued', 'running', 'succeeded', 'failed', 'cancelled'] as const;

export const ANALYSIS_PIPELINES = [
  'rnaseq_deseq2',
  'crispr_mageck_rra',
  'scrna_scanpy_basic',
  'wgs_toy_variant_calling',
  'spatial_toy_preprocess',
  'mock_analysis',
] as const;

export const ANALYSIS_ARTIFACT_KINDS = [
  'deg_table',
  'volcano_points',
  'enrichment_terms',
  'rank_table',
  'rank_plot_points',
  'sgrna_distribution',
  'sample_metadata',
  'data_profile',
  'umap_coordinates',
  'cluster_assignments',
  'marker_table',
  'cell_type_candidates',
  'composition_table',
  'image_evidence',
  'spatial_expression',
  'spatial_coordinates',
  'evidence_items',
  'evidence_board',
  'variant_calls',
  'gvcf',
  'alignment_bam',
  'alignment_index',
  'h5ad_result',
  'multiqc_report',
  'workflow_trace',
  'workflow_manifest',
  'qc_metrics',
  'log',
  'report_markdown',
] as const;

export type AnalysisProjectType = (typeof ANALYSIS_PROJECT_TYPES)[number];
export type AnalysisProjectStatus = (typeof ANALYSIS_PROJECT_STATUSES)[number];
export type AnalysisFileRole = (typeof ANALYSIS_FILE_ROLES)[number];
export type AnalysisJobStatus = (typeof ANALYSIS_JOB_STATUSES)[number];
export type AnalysisPipeline = (typeof ANALYSIS_PIPELINES)[number];
export type AnalysisArtifactKind = (typeof ANALYSIS_ARTIFACT_KINDS)[number];

export interface AnalysisFileRef {
  fileId: string;
  role: AnalysisFileRole;
  originalName: string;
  mimeType: string;
  fileSize: number;
  objectKey: string;
  storageUrl: string;
  checksum?: string;
}

export interface AnalysisFilePreview {
  fileId: string;
  role: AnalysisFileRole;
  delimiter: ',' | '\t';
  columns: string[];
  rowCount?: number;
  columnCount?: number;
  headRows: Array<Record<string, string | number | null>>;
  inferredSchema: Record<string, unknown>;
  warnings: string[];
}

export interface AnalysisArtifactRef {
  artifactId: string;
  kind: AnalysisArtifactKind;
  name: string;
  objectKey: string;
  storageUrl: string;
  mimeType: string;
  rowCount?: number;
  metadata?: Record<string, unknown>;
}

export interface AnalysisJob {
  jobId: string;
  projectId: string;
  projectType: AnalysisProjectType;
  pipeline: AnalysisPipeline;
  status: AnalysisJobStatus;
  parameters: Record<string, unknown>;
  inputFileIds: string[];
  sandboxJobId?: string;
  progress: number;
  currentStage?: string;
  errorMessage?: string;
  resultId?: string;
  createdAt: string;
  startedAt?: string;
  finishedAt?: string;
}

export interface AnalysisResult {
  resultId: string;
  projectId: string;
  jobId: string;
  summaryJson: Record<string, unknown>;
  artifacts: AnalysisArtifactRef[];
  reportContextJson: Record<string, unknown>;
  createdAt: string;
}

export interface AnalysisSelection {
  selectionId: string;
  projectId: string;
  resultId?: string;
  artifactId?: string;
  source: 'volcano' | 'enrichment' | 'rank_plot' | 'table' | 'manual';
  selectedIds: string[];
  metadata: Record<string, unknown>;
  createdAt: string;
  createdBy: string;
}

export interface AnalysisReportState {
  wikiNodeId?: string;
  archivedAt?: string;
  archivedBy?: string;
  resultId?: string;
  summarySnapshot?: Record<string, unknown>;
  runnerProvenanceSnapshot?: Record<string, unknown>;
  artifactSnapshot?: Array<Record<string, unknown>>;
}

export interface AnalysisWikiParentRef {
  nodeId: string;
  title: string;
  path: string;
}

export interface AnalysisNextAction {
  actionId: string;
  kind: 'qpcr_primer_design' | 'ko_validation_design' | 'open_cloning_workbench';
  label: string;
  status: 'suggested' | 'accepted' | 'completed' | 'dismissed';
  context: Record<string, unknown>;
}

export interface AnalysisCanvasState {
  activeView: 'overview' | 'volcano' | 'enrichment' | 'rank' | 'sgrna_distribution' | 'umap' | 'markers' | 'artifacts';
  selectedArtifactId?: string;
  selectedGeneIds: string[];
}

export interface AnalysisProjectState {
  projectId: string;
  labId: string;
  projectType: AnalysisProjectType;
  title: string;
  status: AnalysisProjectStatus;
  files: AnalysisFileRef[];
  filePreview: AnalysisFilePreview[];
  parameters: Record<string, unknown>;
  activeJobId?: string;
  resultId?: string;
  canvasState: AnalysisCanvasState;
  selections: AnalysisSelection[];
  report?: AnalysisReportState;
  wikiParent?: AnalysisWikiParentRef;
  nextActions: AnalysisNextAction[];
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
}

export interface AnalysisProjectSummary {
  projectId: string;
  title: string;
  projectType: AnalysisProjectType;
  status: AnalysisProjectStatus;
  fileCount: number;
  activeJobId?: string;
  resultId?: string;
  archivedWikiNodeId?: string;
  wikiParent?: AnalysisWikiParentRef;
  updatedAt: string;
  createdAt: string;
}

export interface AnalysisProjectSnapshotSummary {
  snapshotId: string;
  projectId: string;
  reason: string;
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
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
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

export function createDefaultAnalysisCanvasState(
  overrides: Partial<AnalysisCanvasState> = {},
): AnalysisCanvasState {
  return {
    activeView: 'overview',
    selectedArtifactId: '',
    selectedGeneIds: [],
    ...overrides,
  };
}

export function createDefaultAnalysisProjectState(
  overrides: Partial<AnalysisProjectState> = {},
): AnalysisProjectState {
  const now = new Date().toISOString();
  return {
    projectId: '',
    labId: '',
    projectType: 'rnaseq_bulk',
    title: '',
    status: 'draft',
    files: [],
    filePreview: [],
    parameters: {},
    activeJobId: '',
    resultId: '',
    canvasState: createDefaultAnalysisCanvasState(),
    selections: [],
    report: {},
    wikiParent: { nodeId: '', title: '知识库根目录', path: '' },
    nextActions: [],
    createdAt: now,
    updatedAt: now,
    updatedBy: '',
    ...overrides,
  };
}

export function normalizeAnalysisFileRef(value: unknown): AnalysisFileRef {
  const record = asRecord(value) || {};
  return {
    fileId: asString(record.fileId),
    role: asEnumValue(record.role, ANALYSIS_FILE_ROLES, 'rnaseq_count_matrix'),
    originalName: asString(record.originalName),
    mimeType: asString(record.mimeType, 'application/octet-stream'),
    fileSize: asNumber(record.fileSize),
    objectKey: asString(record.objectKey),
    storageUrl: asString(record.storageUrl),
    checksum: asString(record.checksum),
  };
}

export function normalizeAnalysisFilePreview(value: unknown): AnalysisFilePreview {
  const record = asRecord(value) || {};
  const delimiter = record.delimiter === '\t' ? '\t' : ',';
  return {
    fileId: asString(record.fileId),
    role: asEnumValue(record.role, ANALYSIS_FILE_ROLES, 'rnaseq_count_matrix'),
    delimiter,
    columns: asStringArray(record.columns),
    rowCount: typeof record.rowCount === 'number' ? record.rowCount : undefined,
    columnCount: typeof record.columnCount === 'number' ? record.columnCount : undefined,
    headRows: Array.isArray(record.headRows)
      ? record.headRows
          .map((item) => asRecord(item))
          .filter((item): item is Record<string, string | number | null> => Boolean(item))
      : [],
    inferredSchema: asRecord(record.inferredSchema) || {},
    warnings: asStringArray(record.warnings),
  };
}

export function normalizeAnalysisSelection(value: unknown): AnalysisSelection {
  const record = asRecord(value) || {};
  return {
    selectionId: asString(record.selectionId),
    projectId: asString(record.projectId),
    resultId: asString(record.resultId),
    artifactId: asString(record.artifactId),
    source: asEnumValue(
      record.source,
      ['volcano', 'enrichment', 'rank_plot', 'table', 'manual'] as const,
      'manual',
    ),
    selectedIds: asStringArray(record.selectedIds),
    metadata: asRecord(record.metadata) || {},
    createdAt: asString(record.createdAt),
    createdBy: asString(record.createdBy),
  };
}

export function normalizeAnalysisWikiParentRef(value: unknown): AnalysisWikiParentRef {
  const record = asRecord(value) || {};
  return {
    nodeId: asString(record.nodeId),
    title: asString(record.title, '知识库根目录'),
    path: asString(record.path),
  };
}

export function normalizeAnalysisProjectState(value: unknown): AnalysisProjectState {
  const record = asRecord(value) || {};
  const canvas = asRecord(record.canvasState) || {};
  const report = asRecord(record.report) || {};

  return createDefaultAnalysisProjectState({
    projectId: asString(record.projectId),
    labId: asString(record.labId),
    projectType: asEnumValue(record.projectType, ANALYSIS_PROJECT_TYPES, 'rnaseq_bulk'),
    title: asString(record.title),
    status: asEnumValue(record.status, ANALYSIS_PROJECT_STATUSES, 'draft'),
    files: asObjectArray(record.files, normalizeAnalysisFileRef),
    filePreview: asObjectArray(record.filePreview, normalizeAnalysisFilePreview),
    parameters: asRecord(record.parameters) || {},
    activeJobId: asString(record.activeJobId),
    resultId: asString(record.resultId),
    canvasState: createDefaultAnalysisCanvasState({
      activeView: asEnumValue(
        canvas.activeView,
        ['overview', 'volcano', 'enrichment', 'rank', 'sgrna_distribution', 'artifacts'] as const,
        'overview',
      ),
      selectedArtifactId: asString(canvas.selectedArtifactId),
      selectedGeneIds: asStringArray(canvas.selectedGeneIds),
    }),
    selections: asObjectArray(record.selections, normalizeAnalysisSelection),
    report: {
      wikiNodeId: asString(report.wikiNodeId),
      archivedAt: asString(report.archivedAt),
      archivedBy: asString(report.archivedBy),
      resultId: asString(report.resultId),
      summarySnapshot: asRecord(report.summarySnapshot) || {},
      runnerProvenanceSnapshot: asRecord(report.runnerProvenanceSnapshot) || {},
      artifactSnapshot: Array.isArray(report.artifactSnapshot)
        ? report.artifactSnapshot
            .map((item) => asRecord(item))
            .filter((item): item is Record<string, unknown> => Boolean(item))
        : [],
    },
    wikiParent: normalizeAnalysisWikiParentRef(record.wikiParent),
    nextActions: Array.isArray(record.nextActions)
      ? record.nextActions.filter((item): item is AnalysisNextAction => Boolean(asRecord(item)))
      : [],
    createdAt: asString(record.createdAt, new Date().toISOString()),
    updatedAt: asString(record.updatedAt, new Date().toISOString()),
    updatedBy: asString(record.updatedBy),
  });
}

export function buildAnalysisProjectSummary(
  stateInput: AnalysisProjectState,
  createdAt: string,
): AnalysisProjectSummary {
  const state = normalizeAnalysisProjectState(stateInput);
  return {
    projectId: state.projectId,
    title: state.title,
    projectType: state.projectType,
    status: state.status,
    fileCount: state.files.length,
    activeJobId: state.activeJobId || '',
    resultId: state.resultId || '',
    archivedWikiNodeId: state.report?.wikiNodeId || '',
    wikiParent: state.wikiParent,
    updatedAt: state.updatedAt,
    createdAt,
  };
}
