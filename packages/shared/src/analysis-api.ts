import type { AnalysisArtifactRef, AnalysisFileRef, AnalysisJob, AnalysisProjectState, AnalysisProjectSummary, AnalysisResult, AnalysisSelection } from './analysis-workbench.js';
import type { WorkflowBackendType, WorkflowCatalogEntry, WorkflowPlan, WorkflowSpec, WorkflowSpecSummary, WorkflowSubmissionPreview } from './workflow-orchestration.js';
import type {
  PipelineCatalogEntry,
  PipelineCatalogRecommendation,
  PipelineCatalogLaunchPreviewPayload,
  PipelineCatalogSchemaCachePayload,
  PipelineCatalogSyncSnapshotPayload,
} from './pipeline-catalog.js';

export type AnalysisProjectsListPayload = {
  items: AnalysisProjectSummary[];
};

export type AnalysisProjectPayload = {
  project: AnalysisProjectState;
  summary?: AnalysisProjectSummary;
};

export type AnalysisProjectDeletePayload = {
  deletedProjectId: string;
  removedObjectCount: number;
  storageCleanupFailed?: string;
};

export type AnalysisJobPayload = {
  job: AnalysisJob | null;
  queueBackend?: string;
  workflowPlan?: WorkflowPlan | null;
  submissionPreview?: WorkflowSubmissionPreview | null;
  project?: AnalysisProjectState | null;
};

export type AnalysisWorkflowCatalogPayload = {
  items: WorkflowCatalogEntry[];
  backendAvailability?: Array<{
    backend: WorkflowBackendType;
    available: boolean;
    reason: string;
  }>;
};

export type AnalysisPipelineCatalogPayload = {
  items: PipelineCatalogEntry[];
};

export type AnalysisPipelineCatalogRecommendPayload = {
  recommendations: PipelineCatalogRecommendation[];
  inputSummary: {
    projectType?: string;
    roles: string[];
    query?: string;
  };
};

export type AnalysisPipelineCatalogLaunchPreviewPayload = PipelineCatalogLaunchPreviewPayload;

export type AnalysisPipelineCatalogSchemaCachePayload = PipelineCatalogSchemaCachePayload;

export type AnalysisPipelineCatalogSyncPreviewPayload = PipelineCatalogSyncSnapshotPayload;

export type AnalysisWorkflowPlanPayload = WorkflowPlan & {
  submissionPreview?: WorkflowSubmissionPreview | null;
};

export type AnalysisWorkflowStatusPayload = {
  jobId: string;
  status: AnalysisJob['status'];
  progress: number;
  currentStage: string;
  backendRunId: string;
  workflow: WorkflowSpecSummary | null;
  workflowSpec: WorkflowSpec | null;
  submissionPreview?: WorkflowSubmissionPreview | null;
  events: AnalysisJobEvent[];
  updatedAt: string;
};

export type AnalysisJobsListPayload = {
  items: AnalysisJob[];
};

export type AnalysisJobEvent = {
  eventId: string;
  jobId: string;
  seq: number;
  level: 'info' | 'warning' | 'error' | 'debug';
  eventType: string;
  message: string;
  payload: Record<string, unknown>;
  createdAt: string;
};

export type AnalysisJobEventsPayload = {
  items: AnalysisJobEvent[];
};

export type AnalysisRunnerProvenance = {
  backend?: string;
  mode?: string;
  tier?: string;
  sandboxJobId?: string;
  workflowProvenance?: {
    workflowRunId?: string;
    backend?: string;
    engine?: string;
    trustTier?: string;
    backendRunId?: string;
    pipelineName?: string;
    pipelineVersion?: string;
    templateVersion?: string;
    configHash?: string;
    fileCount?: number;
    totalBytes?: number;
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
      entryId?: string;
      source?: string;
      version?: string;
      versionPolicy?: string;
      citations?: Array<{
        label?: string;
        url?: string;
      }>;
    };
  } | null;
  runnerMetadata?: Record<string, unknown>;
  notices?: string[];
  warnings?: Array<{
    eventType?: string;
    level?: string;
    message?: string;
    createdAt?: string;
  }>;
};

export type AnalysisResultPayload = {
  result: AnalysisResult & {
    resultJson?: unknown;
    runnerProvenance?: AnalysisRunnerProvenance | null;
  };
  artifacts: Array<AnalysisArtifactRef & { createdAt?: string }>;
};

export type AnalysisUploadPayload = {
  file: AnalysisFileRef;
  project: AnalysisProjectState;
};

export type AnalysisPresignedUploadPayload = {
  key: string;
  objectKey: string;
  uploadUrl: string;
  storageUrl: string;
};

export type AnalysisSelectionPayload = {
  selection: AnalysisSelection;
  project: AnalysisProjectState;
};

export type AnalysisSelectionDeletePayload = {
  deletedSelectionId: string;
  project: AnalysisProjectState;
};

export type AnalysisLiteratureQuerySuggestion = {
  query: string;
  reason?: string;
  genes?: string[];
  evidence?: string[];
};

export type AnalysisLiteratureSearchRequest = {
  status: 'query_hints_only';
  provider: 'none';
  executable: false;
  queryCount: number;
  queries: AnalysisLiteratureQuerySuggestion[];
  citations: [];
  citationStatus: {
    status: 'not_searched';
    pmidCount: 0;
    canClaimLiteratureSupport: false;
    reason: string;
  };
  nextToolHint: string;
  guardrails: string[];
};

export type AnalysisSelectionInterpretationContext = {
  project: {
    projectId: string;
    projectType: string;
    title: string;
  };
  selection: AnalysisSelection;
  result: {
    resultId: string;
    summaryJson: Record<string, unknown>;
    reportContextJson: Record<string, unknown>;
    runnerProvenance?: AnalysisRunnerProvenance | null;
    createdAt: string;
  } | null;
  runnerProvenance?: AnalysisRunnerProvenance | null;
  literatureQueries?: AnalysisLiteratureQuerySuggestion[];
  literatureSearch?: AnalysisLiteratureSearchRequest;
  citationStatus?: AnalysisLiteratureSearchRequest['citationStatus'];
  selectedGenes: string[];
  selectedArtifactRows: unknown[];
  selectedVolcanoPoints: unknown[];
  artifactRead?: {
    artifactId: string;
    kind: string;
    idField: string;
    streamed: boolean;
    scannedRows: number;
    matchedRows: number;
    totalKnown: boolean;
  } | null;
  guardrails: string[];
  suggestedPrompt: string;
};

export type AnalysisSelectionInterpretationPayload = {
  interpretation: string;
  context: AnalysisSelectionInterpretationContext;
  generatedAt: string;
  runId?: string;
  sessionId?: string;
};

export type AnalysisArtifactDataPayload<T> = {
  artifact: {
    artifactId: string;
    resultId?: string;
    projectId?: string;
    kind: string;
    name: string;
    mimeType?: string;
    rowCount?: number;
    metadata?: Record<string, unknown>;
  };
  columns: string[];
  items: T[];
  total: number;
  offset: number;
  limit: number;
  hasMore: boolean;
  idField: string;
  streamed?: boolean;
  scannedRows?: number;
  matchedRows?: number;
  totalKnown?: boolean;
};

export type AnalysisArchivePayload = {
  project: AnalysisProjectState;
  wikiNodeId: string;
  summary: string;
};

export type AnalysisReportLinkItem = {
  linkId: string;
  projectId: string;
  resultId: string;
  wikiNodeId: string;
  title: string;
  linkType: 'analysis_report' | 'qpcr_plan' | 'wiki_page';
  lifecycle: 'created' | 'updated' | 'superseded';
  nodeExists: boolean;
  createdAt: string;
  createdBy: string;
};

export type AnalysisReportLinksPayload = {
  items: AnalysisReportLinkItem[];
};

export type AnalysisSandboxHealthPayload = {
  useSandboxRunners: boolean;
  sandboxImage: string;
  dockerBin: string;
  imageAvailable: boolean;
  imageError?: string;
  externalRunners: {
    rnaseq: boolean;
    crispr: boolean;
  };
  runnerTimeoutMs: number;
};

export type AnalysisQueueHealthPayload = {
  backend: 'bullmq' | 'inline_fallback';
  healthy: boolean;
  queueName: string;
  embeddedWorker: boolean;
  workerConcurrency: number;
  unavailableUntil?: string;
  error?: string;
  counts: {
    waiting: number;
    active: number;
    delayed: number;
    failed: number;
    completed: number;
  };
};
