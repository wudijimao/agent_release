import type { AnalysisArtifactKind, AnalysisFileRole, AnalysisPipeline, AnalysisProjectType } from './analysis-workbench.js';

export const WORKFLOW_BACKEND_TYPES = ['local_docker', 'local_nextflow', 'slurm_nextflow', 'cromwell_wdl', 'mcp_cloud'] as const;

export const WORKFLOW_ENGINES = ['docker', 'nextflow', 'wdl', 'mcp'] as const;

export const WORKFLOW_TRUST_TIERS = ['preview', 'research', 'production'] as const;

export const WORKFLOW_RUN_STATUSES = ['planned', 'blocked', 'queued', 'submitted', 'running', 'succeeded', 'failed', 'cancelled'] as const;

export const WORKFLOW_ARTIFACT_KINDS = [
  'vcf',
  'gvcf',
  'h5ad',
  'bam',
  'bam_index',
  'qc_metrics',
  'multiqc_report',
  'workflow_log',
  'workflow_trace',
  'workflow_manifest',
  'report_markdown',
  'summary_json',
  'spatial_expression',
  'spatial_coordinates',
  'marker_table',
] as const;

export const WORKFLOW_PROJECT_TYPES = ['rnaseq_bulk', 'crispr_screen', 'scrna_integration', 'wgs_variant_calling', 'wes_variant_calling', 'spatial_omics'] as const;

export type WorkflowBackendType = (typeof WORKFLOW_BACKEND_TYPES)[number];
export type WorkflowEngine = (typeof WORKFLOW_ENGINES)[number];
export type WorkflowTrustTier = (typeof WORKFLOW_TRUST_TIERS)[number];
export type WorkflowRunStatus = (typeof WORKFLOW_RUN_STATUSES)[number];
export type WorkflowArtifactKind = (typeof WORKFLOW_ARTIFACT_KINDS)[number];
export type WorkflowProjectType = (typeof WORKFLOW_PROJECT_TYPES)[number];

export type WorkflowAnalysisProjectType = AnalysisProjectType | Exclude<WorkflowProjectType, AnalysisProjectType>;

export interface WorkflowInputFile {
  fileId?: string;
  sampleId?: string;
  role: AnalysisFileRole | string;
  originalName?: string;
  uri?: string;
  objectKey?: string;
  storageUrl?: string;
  path?: string;
  mimeType?: string;
  sizeBytes?: number;
  checksum?: string;
  metadata?: Record<string, unknown>;
}

export interface WorkflowInputSummary {
  fileCount: number;
  totalBytes: number;
  largestFileBytes: number;
  roles: string[];
  sampleCount?: number;
  hasRemoteReferences: boolean;
}

export interface WorkflowResourceRequest {
  maxCpu?: number;
  maxMemoryGb?: number;
  maxRuntimeHours?: number;
  maxDiskGb?: number;
  gpuCount?: number;
  maxCostUsd?: number;
}

export interface WorkflowPipelineRef {
  name: string;
  engine: WorkflowEngine;
  version: string;
  profile: WorkflowBackendType;
  analysisPipeline?: AnalysisPipeline | string;
}

export interface WorkflowOutputContract {
  requiredKinds: WorkflowArtifactKind[];
  optionalKinds: WorkflowArtifactKind[];
}

export interface WorkflowProvenance {
  createdBy: string;
  createdAt: string;
  sourceDataHubArtifactIds: string[];
  sourceAnalysisFileIds: string[];
  sourceAnalysisProjectId?: string;
  sourceAnalysisJobId?: string;
  agentGenerated: boolean;
  templateVersion?: string;
  configHash?: string;
}

export interface WorkflowSpec {
  specVersion: 'v1';
  workflowRunId: string;
  labId: string;
  projectId: string;
  analysisJobId?: string;
  projectType: WorkflowAnalysisProjectType;
  pipeline: WorkflowPipelineRef;
  inputs: {
    samplesheetUri?: string;
    samplesheetObjectKey?: string;
    files: WorkflowInputFile[];
    summary: WorkflowInputSummary;
  };
  parameters: Record<string, unknown>;
  resources: WorkflowResourceRequest;
  outputs: WorkflowOutputContract;
  provenance: WorkflowProvenance;
}

export interface WorkflowCatalogEntry {
  slug: string;
  name: string;
  description: string;
  version: string;
  projectTypes: WorkflowAnalysisProjectType[];
  analysisPipelines?: Array<AnalysisPipeline | string>;
  engine: WorkflowEngine;
  defaultBackend: WorkflowBackendType;
  allowedBackends: WorkflowBackendType[];
  trustTier: WorkflowTrustTier;
  inputRoles: string[];
  outputKinds: WorkflowArtifactKind[];
  requiredOutputKinds: WorkflowArtifactKind[];
  parameterSchema: Record<string, unknown>;
  defaultParameters: Record<string, unknown>;
  resourceDefaults: WorkflowResourceRequest;
  localInputLimitBytes?: number;
  enabled: boolean;
}

export interface WorkflowBlockedBackend {
  backend: WorkflowBackendType;
  reason: string;
}

export interface WorkflowPlanRecommendation {
  selectedBackend: WorkflowBackendType;
  allowedBackends: WorkflowBackendType[];
  blockedBackends: WorkflowBlockedBackend[];
  trustTier: WorkflowTrustTier;
  reasons: string[];
  warnings: string[];
  requiresApproval: boolean;
  approvalReason?: string;
  requiresConfirmation?: boolean;
  confirmationReason?: string;
}

export interface WorkflowPlan {
  workflowSpec: WorkflowSpec;
  recommendation: WorkflowPlanRecommendation;
  inputSummary: WorkflowInputSummary;
  catalogEntry: WorkflowCatalogEntry;
}

export interface WorkflowArtifactManifestItem {
  kind: WorkflowArtifactKind | AnalysisArtifactKind | string;
  name: string;
  uri?: string;
  objectKey?: string;
  storageUrl?: string;
  mimeType: string;
  sizeBytes?: number;
  checksum?: string;
  sourceStage?: string;
  metadata: Record<string, unknown>;
}

export interface WorkflowArtifactManifest {
  manifestVersion: 'v1';
  workflowRunId: string;
  status: WorkflowRunStatus;
  backend: {
    type: WorkflowBackendType;
    backendRunId: string;
    tier: WorkflowTrustTier;
  };
  summary: Record<string, unknown>;
  artifacts: WorkflowArtifactManifestItem[];
  logs: Array<{
    kind: 'workflow_log' | 'workflow_trace' | string;
    uri?: string;
    objectKey?: string;
    storageUrl?: string;
    name?: string;
    mimeType?: string;
  }>;
}

export interface WorkflowSpecSummary {
  specVersion: WorkflowSpec['specVersion'];
  workflowRunId: string;
  backendRunId?: string;
  backend: WorkflowBackendType;
  engine: WorkflowEngine;
  pipelineName: string;
  pipelineVersion: string;
  trustTier: WorkflowTrustTier;
  projectType: WorkflowAnalysisProjectType;
  fileCount: number;
  totalBytes: number;
  requiredOutputKinds: WorkflowArtifactKind[];
  artifactManifestUri?: string;
  artifactManifestObjectKey?: string;
  failedTask?: {
    process?: string;
    status?: string;
    exitStatus?: string;
    container?: string;
    taskAttempt?: string;
  };
  pipelineCatalog?: {
    entryId: string;
    source: string;
    version: string;
    versionPolicy: string;
    citations: Array<{
      label: string;
      url: string;
    }>;
  };
}

export interface WorkflowSubmissionPreviewFile {
  name: string;
  mimeType: string;
  body: string;
}

export interface WorkflowSubmissionPreview {
  backend: WorkflowBackendType | string;
  engine: WorkflowEngine | string;
  command: string[];
  files: WorkflowSubmissionPreviewFile[];
  warnings: string[];
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

function asString(value: unknown, fallback = '') {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}

function asNumber(value: unknown, fallback = 0) {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function asStringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function asCitationArray(value: unknown) {
  return Array.isArray(value)
    ? value
        .map((item) => {
          const record = asRecord(item);
          return {
            label: asString(record.label),
            url: asString(record.url),
          };
        })
        .filter((item) => item.label || item.url)
    : [];
}

function asEnumValue<T extends readonly string[]>(value: unknown, allowed: T, fallback: T[number]): T[number] {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value) ? (value as T[number]) : fallback;
}

export function isWorkflowBackendType(value: unknown): value is WorkflowBackendType {
  return typeof value === 'string' && (WORKFLOW_BACKEND_TYPES as readonly string[]).includes(value);
}

export function isWorkflowArtifactKind(value: unknown): value is WorkflowArtifactKind {
  return typeof value === 'string' && (WORKFLOW_ARTIFACT_KINDS as readonly string[]).includes(value);
}

export function normalizeWorkflowInputSummary(value: unknown): WorkflowInputSummary {
  const record = asRecord(value);
  return {
    fileCount: asNumber(record.fileCount),
    totalBytes: asNumber(record.totalBytes),
    largestFileBytes: asNumber(record.largestFileBytes),
    roles: asStringArray(record.roles),
    sampleCount: typeof record.sampleCount === 'number' ? record.sampleCount : undefined,
    hasRemoteReferences: Boolean(record.hasRemoteReferences),
  };
}

export function summarizeWorkflowSpec(spec: WorkflowSpec): WorkflowSpecSummary {
  const pipelineCatalogEntryId = asString(spec.parameters.pipelineCatalogEntryId);
  return {
    specVersion: spec.specVersion,
    workflowRunId: spec.workflowRunId,
    backend: spec.pipeline.profile,
    engine: spec.pipeline.engine,
    pipelineName: spec.pipeline.name,
    pipelineVersion: spec.pipeline.version,
    trustTier: spec.pipeline.profile === 'local_docker' ? 'preview' : 'research',
    projectType: spec.projectType,
    fileCount: spec.inputs.summary.fileCount,
    totalBytes: spec.inputs.summary.totalBytes,
    requiredOutputKinds: spec.outputs.requiredKinds,
    pipelineCatalog: pipelineCatalogEntryId
      ? {
          entryId: pipelineCatalogEntryId,
          source: asString(spec.parameters.pipelineCatalogSource),
          version: asString(spec.parameters.pipelineCatalogVersion),
          versionPolicy: asString(spec.parameters.pipelineCatalogVersionPolicy),
          citations: asCitationArray(spec.parameters.pipelineCatalogCitations),
        }
      : undefined,
  };
}

export function extractWorkflowSpec(value: unknown): WorkflowSpec | null {
  const record = asRecord(value);
  const spec = asRecord(record.workflowSpec || value);
  if (!spec.workflowRunId || !spec.pipeline || !spec.inputs || !spec.outputs || !spec.provenance) {
    return null;
  }

  const pipeline = asRecord(spec.pipeline);
  const inputs = asRecord(spec.inputs);
  const outputs = asRecord(spec.outputs);
  const provenance = asRecord(spec.provenance);

  return {
    specVersion: 'v1',
    workflowRunId: asString(spec.workflowRunId),
    labId: asString(spec.labId),
    projectId: asString(spec.projectId),
    analysisJobId: asString(spec.analysisJobId),
    projectType: asString(spec.projectType, 'rnaseq_bulk') as WorkflowAnalysisProjectType,
    pipeline: {
      name: asString(pipeline.name),
      engine: asEnumValue(pipeline.engine, WORKFLOW_ENGINES, 'docker'),
      version: asString(pipeline.version, '0.1.0'),
      profile: asEnumValue(pipeline.profile, WORKFLOW_BACKEND_TYPES, 'local_docker'),
      analysisPipeline: asString(pipeline.analysisPipeline),
    },
    inputs: {
      samplesheetUri: asString(inputs.samplesheetUri),
      samplesheetObjectKey: asString(inputs.samplesheetObjectKey),
      files: Array.isArray(inputs.files) ? (inputs.files as WorkflowInputFile[]) : [],
      summary: normalizeWorkflowInputSummary(inputs.summary),
    },
    parameters: asRecord(spec.parameters),
    resources: asRecord(spec.resources) as WorkflowResourceRequest,
    outputs: {
      requiredKinds: asStringArray(outputs.requiredKinds).filter(isWorkflowArtifactKind),
      optionalKinds: asStringArray(outputs.optionalKinds).filter(isWorkflowArtifactKind),
    },
    provenance: {
      createdBy: asString(provenance.createdBy),
      createdAt: asString(provenance.createdAt),
      sourceDataHubArtifactIds: asStringArray(provenance.sourceDataHubArtifactIds),
      sourceAnalysisFileIds: asStringArray(provenance.sourceAnalysisFileIds),
      sourceAnalysisProjectId: asString(provenance.sourceAnalysisProjectId),
      sourceAnalysisJobId: asString(provenance.sourceAnalysisJobId),
      agentGenerated: Boolean(provenance.agentGenerated),
      templateVersion: asString(provenance.templateVersion),
      configHash: asString(provenance.configHash),
    },
  };
}
