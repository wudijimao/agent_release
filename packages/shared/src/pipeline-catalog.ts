import type { AnalysisFileRole, AnalysisProjectType } from './analysis-workbench.js';
import type {
  WorkflowArtifactKind,
  WorkflowBackendType,
  WorkflowResourceRequest,
  WorkflowSubmissionPreview,
} from './workflow-orchestration.js';

export const PIPELINE_CATALOG_SOURCES = ['nf-core', 'labos-curated', 'internal'] as const;
export type PipelineCatalogSource = (typeof PIPELINE_CATALOG_SOURCES)[number];

export type PipelineCatalogMaturity = 'community' | 'curated' | 'internal' | 'experimental';

export interface PipelineCatalogEntry {
  id: string;
  source: PipelineCatalogSource;
  namespace: string;
  name: string;
  displayName: string;
  description: string;
  homepageUrl: string;
  repositoryUrl?: string;
  docsUrl?: string;
  version: string;
  versionPolicy: 'pinned' | 'latest_preview' | 'user_selected';
  maturity: PipelineCatalogMaturity;
  projectTypes: AnalysisProjectType[];
  tags: string[];
  inputRoles: AnalysisFileRole[];
  optionalInputRoles: AnalysisFileRole[];
  outputKinds: WorkflowArtifactKind[];
  defaultBackend: WorkflowBackendType;
  allowedBackends: WorkflowBackendType[];
  workflowUri: string;
  defaultParameters: Record<string, unknown>;
  parameterSchema: Record<string, unknown>;
  resourceDefaults: WorkflowResourceRequest;
  citations: Array<{
    label: string;
    url: string;
  }>;
  warnings: string[];
}

export interface PipelineCatalogRecommendation {
  entry: PipelineCatalogEntry;
  score: number;
  reasons: string[];
  missingRequiredRoles: string[];
  matchedRoles: string[];
  warnings: string[];
}

export interface PipelineCatalogListPayload {
  items: PipelineCatalogEntry[];
}

export interface PipelineCatalogRecommendPayload {
  recommendations: PipelineCatalogRecommendation[];
  inputSummary: {
    projectType?: string;
    roles: string[];
    query?: string;
  };
}

export interface PipelineCatalogLaunchPreviewPayload {
  entry: PipelineCatalogEntry;
  recommendation: PipelineCatalogRecommendation;
  submissionPreview: WorkflowSubmissionPreview;
  parameters: Record<string, unknown>;
  productionReadiness?: {
    ready: boolean;
    errors: string[];
    warnings: string[];
  };
  warnings: string[];
}

export interface PipelineCatalogSchemaCacheItem {
  cacheId: string;
  entryId: string;
  displayName: string;
  workflowUri: string;
  source: string;
  releaseTag: string;
  gitCommit: string;
  repositoryUrl: string;
  schemaUrl: string;
  schemaHash: string;
  schemaJson: Record<string, unknown>;
  metadata: Record<string, unknown>;
  warnings: string[];
  fetchedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface PipelineCatalogSyncSnapshotPayload {
  source: 'nf-core';
  generatedAt: string;
  schemaFetched: boolean;
  items: Array<{
    entryId: string;
    displayName: string;
    workflowUri: string;
    source: string;
    releaseTag: string;
    gitCommit: string;
    repositoryUrl: string;
    schemaUrl: string;
    schemaHash: string;
    schemaJson?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
    fetchedAt?: string;
    warnings: string[];
  }>;
}

export interface PipelineCatalogSchemaCachePayload {
  items: PipelineCatalogSchemaCacheItem[];
}
