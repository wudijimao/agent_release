export const DATA_HUB_PROJECT_STATUSES = [
  'draft',
  'profiling',
  'needs_review',
  'ready',
  'sent_to_analysis',
  'archived',
  'failed',
] as const;

export const DATA_HUB_FILE_ROLES = [
  'unknown',
  'count_matrix',
  'normalized_count_matrix',
  'sample_metadata',
  'deg_table',
  'marker_table',
  'h5ad',
  'qc_table',
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
  'experiment_record',
] as const;

export const DATA_HUB_PROFILE_JOB_STATUSES = ['queued', 'running', 'succeeded', 'failed'] as const;

export const DATA_HUB_PROFILE_JOB_STAGES = [
  'queued',
  'loading_file_headers',
  'classifying_files',
  'schema_inference',
  'entity_extraction',
  'mapping_suggestions',
  'quality_checks',
  'standard_artifact_preview',
  'completed',
] as const;

export type DataHubProjectStatus = (typeof DATA_HUB_PROJECT_STATUSES)[number];
export type DataHubFileRole = (typeof DATA_HUB_FILE_ROLES)[number];
export type DataHubProfileJobStatus = (typeof DATA_HUB_PROFILE_JOB_STATUSES)[number];
export type DataHubProfileJobStage = (typeof DATA_HUB_PROFILE_JOB_STAGES)[number];
export type DataEntityType = 'gene' | 'sample' | 'condition' | 'cluster' | 'cell_type' | 'image_marker';

export interface DataQualityWarning {
  code: string;
  severity: 'info' | 'warning' | 'error';
  message: string;
  fileId?: string;
  column?: string;
  rowId?: string;
}

export interface DataHubFileRef {
  fileId: string;
  role: DataHubFileRole;
  originalName: string;
  mimeType: string;
  fileSize: number;
  objectKey: string;
  storageUrl: string;
  checksum?: string;
}

export interface DataFileProfile {
  fileId: string;
  role: DataHubFileRole;
  confidence: number;
  delimiter?: ',' | '\t';
  columns: string[];
  rowCount?: number;
  columnCount?: number;
  headRows: Array<Record<string, string | number | null>>;
  inferredSchema: Record<string, unknown>;
  warnings: DataQualityWarning[];
}

export interface DataEntityRef {
  entityId: string;
  type: DataEntityType;
  label: string;
  normalizedId?: string;
  aliases: string[];
  sourceFileIds: string[];
  metadata: Record<string, unknown>;
}

export interface DataHubAuthorRef {
  userId: string;
  name: string;
}

export interface DataMappingState {
  sampleIdColumn?: string;
  geneIdColumn?: string;
  conditionColumn?: string;
  batchColumn?: string;
  replicateColumn?: string;
  timepointColumn?: string;
  confirmed: boolean;
  warnings: DataQualityWarning[];
}

export interface DataHubArtifactRef {
  artifactId: string;
  kind:
    | 'sample_metadata'
    | 'normalized_count_matrix'
    | 'data_profile'
    | 'mapping_state'
    | 'marker_table'
    | 'spatial_expression'
    | 'spatial_coordinates'
    | 'image_evidence';
  name: string;
  objectKey: string;
  storageUrl: string;
  mimeType: string;
  sourceFileIds: string[];
  fileSize: number;
  rowCount?: number;
  metadata?: Record<string, unknown> & {
    sourceFilesById?: Record<
      string,
      {
        fileName?: string;
        fileSize?: number;
        mimeType?: string;
        checksum?: string;
      }
    >;
  };
}

export interface DataHubProjectState {
  projectId: string;
  labId: string;
  title: string;
  description: string;
  author?: DataHubAuthorRef;
  status: DataHubProjectStatus;
  files: DataHubFileRef[];
  fileProfiles: DataFileProfile[];
  entities: DataEntityRef[];
  mappings: DataMappingState;
  standardArtifacts: DataHubArtifactRef[];
  evidenceBoardIds: string[];
  report?: {
    wikiNodeId?: string;
    archivedAt?: string;
    archivedBy?: string;
  };
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
}

export interface DataHubProjectSummary {
  projectId: string;
  title: string;
  description: string;
  author?: DataHubAuthorRef;
  status: DataHubProjectStatus;
  fileCount: number;
  warningCount: number;
  errorCount: number;
  artifactCount: number;
  archivedWikiNodeId?: string;
  updatedAt: string;
  createdAt: string;
}

export interface DataHubProfileJobEvent {
  eventId: string;
  jobId: string;
  projectId: string;
  labId: string;
  stage: DataHubProfileJobStage;
  level: 'info' | 'warning' | 'error';
  message: string;
  payload: Record<string, unknown>;
  createdAt: string;
}

export interface DataHubProfileJob {
  jobId: string;
  projectId: string;
  labId: string;
  status: DataHubProfileJobStatus;
  currentStage: DataHubProfileJobStage;
  progress: number;
  events: DataHubProfileJobEvent[];
  errorMessage?: string;
  createdAt: string;
  startedAt?: string;
  finishedAt?: string;
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

export function createDefaultDataMappingState(overrides: Partial<DataMappingState> = {}): DataMappingState {
  return {
    sampleIdColumn: '',
    geneIdColumn: '',
    conditionColumn: '',
    batchColumn: '',
    replicateColumn: '',
    timepointColumn: '',
    confirmed: false,
    warnings: [],
    ...overrides,
  };
}

export function createDefaultDataHubProjectState(
  overrides: Partial<DataHubProjectState> = {},
): DataHubProjectState {
  const now = new Date().toISOString();
  return {
    projectId: '',
    labId: '',
    title: '',
    description: '',
    author: { userId: '', name: '' },
    status: 'draft',
    files: [],
    fileProfiles: [],
    entities: [],
    mappings: createDefaultDataMappingState(),
    standardArtifacts: [],
    evidenceBoardIds: [],
    report: {},
    createdAt: now,
    updatedAt: now,
    updatedBy: '',
    ...overrides,
  };
}

export function normalizeDataQualityWarning(value: unknown): DataQualityWarning {
  const record = asRecord(value) || {};
  return {
    code: asString(record.code, 'unknown'),
    severity: asEnumValue(record.severity, ['info', 'warning', 'error'] as const, 'info'),
    message: asString(record.message),
    fileId: asString(record.fileId),
    column: asString(record.column),
    rowId: asString(record.rowId),
  };
}

export function normalizeDataHubFileRef(value: unknown): DataHubFileRef {
  const record = asRecord(value) || {};
  return {
    fileId: asString(record.fileId),
    role: asEnumValue(record.role, DATA_HUB_FILE_ROLES, 'unknown'),
    originalName: asString(record.originalName),
    mimeType: asString(record.mimeType, 'application/octet-stream'),
    fileSize: asNumber(record.fileSize),
    objectKey: asString(record.objectKey),
    storageUrl: asString(record.storageUrl),
    checksum: asString(record.checksum),
  };
}

export function normalizeDataFileProfile(value: unknown): DataFileProfile {
  const record = asRecord(value) || {};
  return {
    fileId: asString(record.fileId),
    role: asEnumValue(record.role, DATA_HUB_FILE_ROLES, 'unknown'),
    confidence: asNumber(record.confidence),
    delimiter: asEnumValue(record.delimiter, [',', '\t'] as const, ','),
    columns: asStringArray(record.columns),
    rowCount: asNumber(record.rowCount),
    columnCount: asNumber(record.columnCount),
    headRows: Array.isArray(record.headRows)
      ? record.headRows.filter((item): item is Record<string, string | number | null> => Boolean(asRecord(item)))
      : [],
    inferredSchema: asRecord(record.inferredSchema) || {},
    warnings: asObjectArray(record.warnings, normalizeDataQualityWarning),
  };
}

export function normalizeDataEntityRef(value: unknown): DataEntityRef {
  const record = asRecord(value) || {};
  return {
    entityId: asString(record.entityId),
    type: asEnumValue(
      record.type,
      ['gene', 'sample', 'condition', 'cluster', 'cell_type', 'image_marker'] as const,
      'sample',
    ),
    label: asString(record.label),
    normalizedId: asString(record.normalizedId),
    aliases: asStringArray(record.aliases),
    sourceFileIds: asStringArray(record.sourceFileIds),
    metadata: asRecord(record.metadata) || {},
  };
}

export function normalizeDataHubAuthorRef(value: unknown): DataHubAuthorRef {
  const record = asRecord(value) || {};
  return {
    userId: asString(record.userId),
    name: asString(record.name),
  };
}

export function normalizeDataMappingState(value: unknown): DataMappingState {
  const record = asRecord(value) || {};
  return createDefaultDataMappingState({
    sampleIdColumn: asString(record.sampleIdColumn),
    geneIdColumn: asString(record.geneIdColumn),
    conditionColumn: asString(record.conditionColumn),
    batchColumn: asString(record.batchColumn),
    replicateColumn: asString(record.replicateColumn),
    timepointColumn: asString(record.timepointColumn),
    confirmed: Boolean(record.confirmed),
    warnings: asObjectArray(record.warnings, normalizeDataQualityWarning),
  });
}

export function normalizeDataHubArtifactRef(value: unknown): DataHubArtifactRef {
  const record = asRecord(value) || {};
  return {
    artifactId: asString(record.artifactId),
    kind: asEnumValue(
      record.kind,
      [
        'sample_metadata',
        'normalized_count_matrix',
        'data_profile',
        'mapping_state',
        'marker_table',
        'spatial_expression',
        'spatial_coordinates',
        'image_evidence',
      ] as const,
      'data_profile',
    ),
    name: asString(record.name),
    objectKey: asString(record.objectKey),
    storageUrl: asString(record.storageUrl),
    mimeType: asString(record.mimeType, 'application/octet-stream'),
    sourceFileIds: asStringArray(record.sourceFileIds),
    fileSize: asNumber(record.fileSize),
    rowCount: asNumber(record.rowCount),
    metadata: asRecord(record.metadata) || {},
  };
}

export function normalizeDataHubProfileJobEvent(value: unknown): DataHubProfileJobEvent {
  const record = asRecord(value) || {};
  return {
    eventId: asString(record.eventId),
    jobId: asString(record.jobId),
    projectId: asString(record.projectId),
    labId: asString(record.labId),
    stage: asEnumValue(record.stage, DATA_HUB_PROFILE_JOB_STAGES, 'queued'),
    level: asEnumValue(record.level, ['info', 'warning', 'error'] as const, 'info'),
    message: asString(record.message),
    payload: asRecord(record.payload) || {},
    createdAt: asString(record.createdAt),
  };
}

export function normalizeDataHubProfileJob(value: unknown): DataHubProfileJob {
  const record = asRecord(value) || {};
  return {
    jobId: asString(record.jobId),
    projectId: asString(record.projectId),
    labId: asString(record.labId),
    status: asEnumValue(record.status, DATA_HUB_PROFILE_JOB_STATUSES, 'queued'),
    currentStage: asEnumValue(record.currentStage, DATA_HUB_PROFILE_JOB_STAGES, 'queued'),
    progress: asNumber(record.progress),
    events: asObjectArray(record.events, normalizeDataHubProfileJobEvent),
    errorMessage: asString(record.errorMessage),
    createdAt: asString(record.createdAt),
    startedAt: asString(record.startedAt),
    finishedAt: asString(record.finishedAt),
  };
}

export function normalizeDataHubProjectState(value: unknown): DataHubProjectState {
  const record = asRecord(value) || {};
  return createDefaultDataHubProjectState({
    projectId: asString(record.projectId),
    labId: asString(record.labId),
    title: asString(record.title),
    description: asString(record.description),
    author: normalizeDataHubAuthorRef(record.author),
    status: asEnumValue(record.status, DATA_HUB_PROJECT_STATUSES, 'draft'),
    files: asObjectArray(record.files, normalizeDataHubFileRef),
    fileProfiles: asObjectArray(record.fileProfiles, normalizeDataFileProfile),
    entities: asObjectArray(record.entities, normalizeDataEntityRef),
    mappings: normalizeDataMappingState(record.mappings),
    standardArtifacts: asObjectArray(record.standardArtifacts, normalizeDataHubArtifactRef),
    evidenceBoardIds: asStringArray(record.evidenceBoardIds),
    report: asRecord(record.report) || {},
    createdAt: asString(record.createdAt),
    updatedAt: asString(record.updatedAt),
    updatedBy: asString(record.updatedBy),
  });
}

export function buildDataHubProjectSummary(
  stateInput: unknown,
  createdAt: string,
): DataHubProjectSummary {
  const state = normalizeDataHubProjectState(stateInput);
  const warnings = state.fileProfiles.flatMap((profile) => profile.warnings);
  return {
    projectId: state.projectId,
    title: state.title,
    description: state.description,
    author: state.author,
    status: state.status,
    fileCount: state.files.length,
    warningCount: warnings.filter((warning) => warning.severity === 'warning').length,
    errorCount: warnings.filter((warning) => warning.severity === 'error').length,
    artifactCount: state.standardArtifacts.length,
    archivedWikiNodeId: state.report?.wikiNodeId || '',
    updatedAt: state.updatedAt,
    createdAt,
  };
}
