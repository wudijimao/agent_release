import {
  CLONING_RISK_SEVERITIES,
  CLONING_SEQUENCE_FORMATS,
  CLONING_SIMULATION_STATUSES,
  CLONING_STRATEGIES,
  CLONING_VECTOR_TOPOLOGIES,
  createDefaultCloningCheckResult,
  createDefaultCloningEvidenceSource,
  createDefaultCloningRiskFlag,
  normalizeCloningCheckResult,
  normalizeCloningEvidenceSource,
  normalizeCloningRiskFlag,
  type CloningCheckResult,
  type CloningEvidenceSource,
  type CloningRiskFlag,
  type CloningSequenceFormat,
  type CloningSimulationStatus,
  type CloningStrategy,
  type CloningVectorTopology,
} from './cloning.js';
import type {
  StructuralJobStatus,
  StructuralTaskType,
} from './structural-compute.js';
import type { MaterialRequirement, MaterialTaskReadiness } from './material-requirements.js';
import { calculateMaterialTaskReadiness } from './material-requirements.js';

export const CLONING_WORKBENCH_PROJECT_STATUSES = [
  'draft',
  'resolving_context',
  'planning',
  'designing',
  'review_ready',
  'archived',
  'error',
] as const;

export const CLONING_WORKBENCH_SOURCE_TYPES = [
  'wiki',
  'upload',
  'addgene',
  'ncbi',
  'user',
  'unknown',
] as const;

export const CLONING_WORKBENCH_PANELS = ['map', 'primers', 'summary'] as const;
export const CLONING_WORKBENCH_STRATEGY_MODES = [
  'auto',
  'gibson',
  'restriction_ligation',
  'seamless',
  'golden_gate',
  'multi_insert',
  'multi_vector',
] as const;
export const CLONING_WORKBENCH_FRAME_OFFSET_MIN = -3;
export const CLONING_WORKBENCH_FRAME_OFFSET_MAX = 3;
export const CLONING_WORKBENCH_GIBSON_OVERLAP_MIN = 15;
export const CLONING_WORKBENCH_GIBSON_OVERLAP_MAX = 80;
export const CLONING_WORKBENCH_MAX_PREFERRED_ENZYMES = 8;
export const CLONING_WORKBENCH_MAX_NOTE_LENGTH = 1200;
export const CLONING_WORKBENCH_GOLDEN_GATE_ENZYME_MAX_LENGTH = 32;
export const CLONING_WORKBENCH_FRAGMENT_COUNT_MIN = 1;
export const CLONING_WORKBENCH_FRAGMENT_COUNT_MAX = 12;
export const CLONING_WORKBENCH_BACKBONE_COUNT_MIN = 1;
export const CLONING_WORKBENCH_BACKBONE_COUNT_MAX = 12;

export type CloningWorkbenchProjectStatus = (typeof CLONING_WORKBENCH_PROJECT_STATUSES)[number];
export type CloningWorkbenchSourceType = (typeof CLONING_WORKBENCH_SOURCE_TYPES)[number];
export type CloningWorkbenchPanel = (typeof CLONING_WORKBENCH_PANELS)[number];
export type CloningWorkbenchStrategyMode = (typeof CLONING_WORKBENCH_STRATEGY_MODES)[number];

export interface CloningWorkbenchSource {
  sourceType: CloningWorkbenchSourceType;
  refId?: string;
  label: string;
  sequenceText: string;
  sequenceFormat: CloningSequenceFormat;
  topology: CloningVectorTopology;
  evidence: CloningEvidenceSource[];
}

export interface CloningWorkbenchStrategyState {
  mode: CloningWorkbenchStrategyMode;
  chosen: '' | Extract<CloningStrategy, 'gibson' | 'restriction_ligation'>;
  rationale: string;
  fallback: '' | Extract<CloningStrategy, 'gibson' | 'restriction_ligation'>;
  decisionInputs: string[];
  strategyNotes: string[];
}

export interface CloningWorkbenchDesignInputs {
  keepStopCodon: boolean;
  frameOffset: number;
  gibsonOverlapBp: number;
  preferredEnzymes: string[];
  goldenGateEnzyme: string;
  fragmentCount: number;
  candidateBackboneCount: number;
  notes: string;
}

export interface CloningWorkbenchConstructState {
  topology: Exclude<CloningVectorTopology, 'unknown'> | 'unknown';
  sequenceDataJson: string;
  sequenceLength: number;
  featureCount: number;
  featureSummary: string;
  enzymeSummary: string;
}

export interface CloningWorkbenchPrimer {
  name: string;
  role: 'forward' | 'reverse';
  sequence: string;
  tm: number;
  gc: number;
  length: number;
  notes: string;
}

export interface CloningWorkbenchAssemblyCheck {
  simulationStatus: CloningSimulationStatus;
  orientationCheck: CloningCheckResult;
  frameCheck: CloningCheckResult;
  junctionCheck: CloningCheckResult;
  openRisks: CloningRiskFlag[];
}

export interface CloningWorkbenchVerificationPlan {
  sequencingPrimers: string[];
  sequencingPrimerDetails: Array<{
    name: string;
    target: string;
    primerSequence?: string;
    expectedRead: string;
    rationale: string;
  }>;
  colonyPcrChecks: string[];
  colonyPcrCheckDetails: Array<{
    primerPair: string;
    expectedBandBp?: number;
    positiveControl?: string;
    negativeControl?: string;
    rationale: string;
  }>;
  diagnosticDigestChecks: string[];
  diagnosticDigestCheckDetails: Array<{
    enzymes: string[];
    expectedBandsBp: number[];
    rationale: string;
  }>;
  junctionChecks: string[];
  junctionCheckDetails: Array<{
    junction: string;
    expectedSequence?: string;
    rationale: string;
  }>;
  limitations: string[];
}

export interface CloningWorkbenchValidationWorkflow {
  workflowId: string;
  kind: 'point_mutation';
  title: string;
  status: 'planned' | 'ready_for_design' | 'blocked' | 'archived';
  linkedStructuralJobId?: string;
  linkedStructuralArtifactId?: string;
  mutationNotation?: string;
  chainId?: string;
  residueNumber?: number;
  referenceDatabaseName?: string;
  referenceDatabaseAccession?: string;
  referenceResidueNumber?: number;
  evidenceLevel?: string;
  rationale: string;
  constructGoals: string[];
  assaySuggestions: string[];
  checklist: string[];
  createdAt: string;
  metadata?: Record<string, unknown>;
}

export interface CloningWorkbenchUiState {
  activePanel: CloningWorkbenchPanel;
  selectedFeatureId?: string;
}

export interface CloningWorkbenchArchiveState {
  wikiNodeId?: string;
  archivedAt?: string;
  archivedBy?: string;
}

export interface CloningWorkbenchBranchState {
  rootProjectId: string;
  parentProjectId?: string;
  branchName: string;
}

export interface CloningWorkbenchHistorySnapshot {
  snapshotId: string;
  createdAt: string;
  reason: string;
}

export interface CloningWorkbenchWorkflowEvent {
  id: string;
  stage: 'resolve' | 'plan' | 'design' | 'verification' | 'archive' | 'command';
  kind: 'route' | 'skill' | 'tool' | 'warning' | 'fallback' | 'state_change';
  label: string;
  detail: string;
  createdAt: string;
}

export interface CloningWorkbenchAnalysisContext {
  source: 'analysis_workbench';
  analysisProjectId: string;
  analysisProjectType: string;
  resultId: string;
  actionId: string;
  gene: string;
  effect: string;
  evidence: Record<string, unknown>;
  artifactRefs: Array<{
    artifactId: string;
    kind: string;
    name: string;
  }>;
  createdAt: string;
}

export interface CloningWorkbenchStructuralReference {
  source: 'structural_compute';
  refType: 'job' | 'candidate';
  structuralJobId: string;
  structuralArtifactId?: string;
  candidateId?: string;
  candidateLabel?: string;
  sequence?: string;
  taskType?: StructuralTaskType;
  provider?: string;
  pipeline?: string;
  status?: StructuralJobStatus;
  role?: 'vector' | 'insert';
  rank?: number;
  score?: number;
  createdAt: string;
  metadata?: Record<string, unknown>;
}

export interface CloningWorkbenchProjectState {
  projectId: string;
  projectTitle: string;
  status: CloningWorkbenchProjectStatus;
  branch: CloningWorkbenchBranchState;
  sources: {
    vector: CloningWorkbenchSource;
    insert: CloningWorkbenchSource;
  };
  strategy: CloningWorkbenchStrategyState;
  designInputs: CloningWorkbenchDesignInputs;
  construct: CloningWorkbenchConstructState;
  primers: CloningWorkbenchPrimer[];
  assemblyCheck: CloningWorkbenchAssemblyCheck;
  verification: CloningWorkbenchVerificationPlan;
  validationWorkflows: CloningWorkbenchValidationWorkflow[];
  materials: CloningWorkbenchMaterials;
  ui: CloningWorkbenchUiState;
  archive: CloningWorkbenchArchiveState;
  analysisContext?: CloningWorkbenchAnalysisContext;
  structuralRefs: CloningWorkbenchStructuralReference[];
  historySnapshots: CloningWorkbenchHistorySnapshot[];
  workflowEvents: CloningWorkbenchWorkflowEvent[];
  updatedAt: string;
  updatedBy: string;
}

export interface CloningWorkbenchMaterials {
  requirements: MaterialRequirement[];
  readiness: MaterialTaskReadiness;
}

export interface CloningWorkbenchProjectSummary {
  projectId: string;
  projectTitle: string;
  status: CloningWorkbenchProjectStatus;
  branchName: string;
  branchRootProjectId: string;
  strategy: '' | CloningWorkbenchStrategyMode;
  requestedStrategy: '' | CloningWorkbenchStrategyMode;
  executableStrategy: '' | Extract<CloningStrategy, 'gibson' | 'restriction_ligation'>;
  vectorLabel: string;
  insertLabel: string;
  archivedWikiNodeId?: string;
  updatedAt: string;
  createdAt: string;
}

export interface CloningWorkbenchSnapshotSummary {
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

function asString(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value : fallback;
}

function asNumber(value: unknown, fallback = 0): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function asBoolean(value: unknown, fallback = false): boolean {
  return typeof value === 'boolean' ? value : fallback;
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

function clampNumber(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function normalizePreferredEnzymes(value: unknown): string[] {
  return Array.from(
    new Set(
      asStringArray(value)
        .map((item) => item.trim())
        .filter(Boolean)
        .slice(0, CLONING_WORKBENCH_MAX_PREFERRED_ENZYMES),
    ),
  );
}

export function createDefaultCloningWorkbenchSource(
  overrides: Partial<CloningWorkbenchSource> = {},
): CloningWorkbenchSource {
  return {
    sourceType: 'unknown',
    refId: '',
    label: '',
    sequenceText: '',
    sequenceFormat: 'unknown',
    topology: 'unknown',
    evidence: [],
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchStrategyState(
  overrides: Partial<CloningWorkbenchStrategyState> = {},
): CloningWorkbenchStrategyState {
  return {
    mode: 'auto',
    chosen: '',
    rationale: '',
    fallback: '',
    decisionInputs: [],
    strategyNotes: [],
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchDesignInputs(
  overrides: Partial<CloningWorkbenchDesignInputs> = {},
): CloningWorkbenchDesignInputs {
  return {
    keepStopCodon: false,
    frameOffset: 0,
    gibsonOverlapBp: 30,
    preferredEnzymes: [],
    goldenGateEnzyme: '',
    fragmentCount: 1,
    candidateBackboneCount: 1,
    notes: '',
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchConstructState(
  overrides: Partial<CloningWorkbenchConstructState> = {},
): CloningWorkbenchConstructState {
  return {
    topology: 'unknown',
    sequenceDataJson: '',
    sequenceLength: 0,
    featureCount: 0,
    featureSummary: '',
    enzymeSummary: '',
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchPrimer(
  overrides: Partial<CloningWorkbenchPrimer> = {},
): CloningWorkbenchPrimer {
  return {
    name: '',
    role: 'forward',
    sequence: '',
    tm: 0,
    gc: 0,
    length: 0,
    notes: '',
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchAssemblyCheck(
  overrides: Partial<CloningWorkbenchAssemblyCheck> = {},
): CloningWorkbenchAssemblyCheck {
  return {
    simulationStatus: 'not_run',
    orientationCheck: createDefaultCloningCheckResult(),
    frameCheck: createDefaultCloningCheckResult(),
    junctionCheck: createDefaultCloningCheckResult(),
    openRisks: [],
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchVerificationPlan(
  overrides: Partial<CloningWorkbenchVerificationPlan> = {},
): CloningWorkbenchVerificationPlan {
  return {
    sequencingPrimers: [],
    sequencingPrimerDetails: [],
    colonyPcrChecks: [],
    colonyPcrCheckDetails: [],
    diagnosticDigestChecks: [],
    diagnosticDigestCheckDetails: [],
    junctionChecks: [],
    junctionCheckDetails: [],
    limitations: [],
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchValidationWorkflow(
  overrides: Partial<CloningWorkbenchValidationWorkflow> = {},
): CloningWorkbenchValidationWorkflow {
  return {
    workflowId: '',
    kind: 'point_mutation',
    title: '',
    status: 'planned',
    linkedStructuralJobId: '',
    linkedStructuralArtifactId: '',
    mutationNotation: '',
    chainId: '',
    residueNumber: undefined,
    referenceDatabaseName: '',
    referenceDatabaseAccession: '',
    referenceResidueNumber: undefined,
    evidenceLevel: '',
    rationale: '',
    constructGoals: [],
    assaySuggestions: [],
    checklist: [],
    createdAt: '',
    metadata: undefined,
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchMaterials(
  overrides: Partial<CloningWorkbenchMaterials> = {},
): CloningWorkbenchMaterials {
  const requirements = Array.isArray(overrides.requirements) ? overrides.requirements : [];
  return {
    requirements,
    readiness: overrides.readiness || calculateMaterialTaskReadiness(requirements),
  };
}

export function createDefaultCloningWorkbenchUiState(
  overrides: Partial<CloningWorkbenchUiState> = {},
): CloningWorkbenchUiState {
  return {
    activePanel: 'map',
    selectedFeatureId: '',
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchArchiveState(
  overrides: Partial<CloningWorkbenchArchiveState> = {},
): CloningWorkbenchArchiveState {
  return {
    wikiNodeId: '',
    archivedAt: '',
    archivedBy: '',
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchBranchState(
  overrides: Partial<CloningWorkbenchBranchState> = {},
): CloningWorkbenchBranchState {
  return {
    rootProjectId: '',
    parentProjectId: '',
    branchName: 'main',
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchHistorySnapshot(
  overrides: Partial<CloningWorkbenchHistorySnapshot> = {},
): CloningWorkbenchHistorySnapshot {
  return {
    snapshotId: '',
    createdAt: '',
    reason: '',
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchWorkflowEvent(
  overrides: Partial<CloningWorkbenchWorkflowEvent> = {},
): CloningWorkbenchWorkflowEvent {
  return {
    id: '',
    stage: 'command',
    kind: 'state_change',
    label: '',
    detail: '',
    createdAt: '',
    ...overrides,
  };
}

export function normalizeCloningWorkbenchAnalysisContext(
  value: unknown,
): CloningWorkbenchAnalysisContext | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const source = record.source === 'analysis_workbench' ? 'analysis_workbench' : undefined;
  if (!source) return undefined;

  return {
    source,
    analysisProjectId: asString(record.analysisProjectId),
    analysisProjectType: asString(record.analysisProjectType),
    resultId: asString(record.resultId),
    actionId: asString(record.actionId),
    gene: asString(record.gene),
    effect: asString(record.effect),
    evidence: asRecord(record.evidence) || {},
    artifactRefs: Array.isArray(record.artifactRefs)
      ? record.artifactRefs
          .map((item) => {
            const artifact = asRecord(item);
            return artifact
              ? {
                  artifactId: asString(artifact.artifactId),
                  kind: asString(artifact.kind),
                  name: asString(artifact.name),
                }
              : null;
          })
          .filter((item): item is CloningWorkbenchAnalysisContext['artifactRefs'][number] => Boolean(item?.artifactId))
      : [],
    createdAt: asString(record.createdAt),
  };
}

export function normalizeCloningWorkbenchStructuralReference(
  value: unknown,
): CloningWorkbenchStructuralReference | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const source = record.source === 'structural_compute' ? 'structural_compute' : undefined;
  const structuralJobId = asString(record.structuralJobId);
  if (!source || !structuralJobId) return undefined;

  const refType = record.refType === 'candidate' ? 'candidate' : 'job';
  const taskType = asEnumValue(
    record.taskType,
    ['structure_view', 'folding', 'mutation_compare', 'binder_design', 'sequence_design'] as const,
    'folding',
  );
  const status = asEnumValue(
    record.status,
    ['queued', 'running', 'succeeded', 'failed', 'cancelled'] as const,
    'queued',
  );
  const role = record.role === 'vector' || record.role === 'insert' ? record.role : undefined;

  return {
    source,
    refType,
    structuralJobId,
    structuralArtifactId: asString(record.structuralArtifactId) || undefined,
    candidateId: asString(record.candidateId) || undefined,
    candidateLabel: asString(record.candidateLabel) || undefined,
    sequence: asString(record.sequence) || undefined,
    taskType,
    provider: asString(record.provider) || undefined,
    pipeline: asString(record.pipeline) || undefined,
    status,
    role,
    rank: asNumber(record.rank, 0) || undefined,
    score: asNumber(record.score, 0) || undefined,
    createdAt: asString(record.createdAt),
    metadata: asRecord(record.metadata) || undefined,
  };
}

export function createDefaultCloningWorkbenchProjectState(
  overrides: Partial<CloningWorkbenchProjectState> = {},
): CloningWorkbenchProjectState {
  const normalizedSources = {
    vector: createDefaultCloningWorkbenchSource(overrides.sources?.vector),
    insert: createDefaultCloningWorkbenchSource(overrides.sources?.insert),
  };
  const baseState: CloningWorkbenchProjectState = {
    projectId: '',
    projectTitle: '',
    status: 'draft',
    branch: createDefaultCloningWorkbenchBranchState(overrides.branch),
    sources: normalizedSources,
    strategy: createDefaultCloningWorkbenchStrategyState(overrides.strategy),
    designInputs: createDefaultCloningWorkbenchDesignInputs(overrides.designInputs),
    construct: createDefaultCloningWorkbenchConstructState(overrides.construct),
    primers: Array.isArray(overrides.primers) ? overrides.primers : [],
    assemblyCheck: createDefaultCloningWorkbenchAssemblyCheck(overrides.assemblyCheck),
    verification: createDefaultCloningWorkbenchVerificationPlan(overrides.verification),
    validationWorkflows: asObjectArray(
      overrides.validationWorkflows,
      normalizeCloningWorkbenchValidationWorkflow,
    ).filter((item) => Boolean(item.workflowId || item.title)),
    materials: createDefaultCloningWorkbenchMaterials(overrides.materials),
    ui: createDefaultCloningWorkbenchUiState(overrides.ui),
    archive: createDefaultCloningWorkbenchArchiveState(overrides.archive),
    analysisContext: normalizeCloningWorkbenchAnalysisContext(overrides.analysisContext),
    structuralRefs: asObjectArray(overrides.structuralRefs, normalizeCloningWorkbenchStructuralReference).filter(
      (item): item is CloningWorkbenchStructuralReference => Boolean(item),
    ),
    historySnapshots: Array.isArray(overrides.historySnapshots) ? overrides.historySnapshots : [],
    workflowEvents: Array.isArray(overrides.workflowEvents) ? overrides.workflowEvents : [],
    updatedAt: '',
    updatedBy: '',
  };

  return {
    ...baseState,
    ...overrides,
    sources: normalizedSources,
    analysisContext: baseState.analysisContext,
    structuralRefs: baseState.structuralRefs,
    validationWorkflows: baseState.validationWorkflows,
  };
}

export function createDefaultCloningWorkbenchProjectSummary(
  overrides: Partial<CloningWorkbenchProjectSummary> = {},
): CloningWorkbenchProjectSummary {
  return {
    projectId: '',
    projectTitle: '',
    status: 'draft',
    strategy: '',
    requestedStrategy: '',
    executableStrategy: '',
    branchName: 'main',
    branchRootProjectId: '',
    vectorLabel: '',
    insertLabel: '',
    archivedWikiNodeId: '',
    updatedAt: '',
    createdAt: '',
    ...overrides,
  };
}

export function createDefaultCloningWorkbenchSnapshotSummary(
  overrides: Partial<CloningWorkbenchSnapshotSummary> = {},
): CloningWorkbenchSnapshotSummary {
  return {
    snapshotId: '',
    projectId: '',
    reason: '',
    createdAt: '',
    ...overrides,
  };
}

export function normalizeCloningWorkbenchSource(value: unknown): CloningWorkbenchSource {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchSource({
    sourceType: asEnumValue(record?.sourceType, CLONING_WORKBENCH_SOURCE_TYPES, 'unknown'),
    refId: asString(record?.refId),
    label: asString(record?.label),
    sequenceText: asString(record?.sequenceText),
    sequenceFormat: asEnumValue(record?.sequenceFormat, CLONING_SEQUENCE_FORMATS, 'unknown'),
    topology: asEnumValue(record?.topology, CLONING_VECTOR_TOPOLOGIES, 'unknown'),
    evidence: asObjectArray(record?.evidence, normalizeCloningEvidenceSource),
  });
}

export function normalizeCloningWorkbenchStrategyState(value: unknown): CloningWorkbenchStrategyState {
  const record = asRecord(value);
  const chosen = asString(record?.chosen);
  const fallback = asString(record?.fallback);

  return createDefaultCloningWorkbenchStrategyState({
    mode: asEnumValue(record?.mode, CLONING_WORKBENCH_STRATEGY_MODES, 'auto'),
    chosen: chosen === 'gibson' || chosen === 'restriction_ligation' ? chosen : '',
    rationale: asString(record?.rationale),
    fallback: fallback === 'gibson' || fallback === 'restriction_ligation' ? fallback : '',
    decisionInputs: asStringArray(record?.decisionInputs),
    strategyNotes: asStringArray(record?.strategyNotes),
  });
}

export function normalizeCloningWorkbenchDesignInputs(value: unknown): CloningWorkbenchDesignInputs {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchDesignInputs({
    keepStopCodon: asBoolean(record?.keepStopCodon),
    frameOffset: clampNumber(
      Math.round(asNumber(record?.frameOffset, 0)),
      CLONING_WORKBENCH_FRAME_OFFSET_MIN,
      CLONING_WORKBENCH_FRAME_OFFSET_MAX,
    ),
    gibsonOverlapBp: clampNumber(
      Math.round(asNumber(record?.gibsonOverlapBp, 30)),
      CLONING_WORKBENCH_GIBSON_OVERLAP_MIN,
      CLONING_WORKBENCH_GIBSON_OVERLAP_MAX,
    ),
    preferredEnzymes: normalizePreferredEnzymes(record?.preferredEnzymes),
    goldenGateEnzyme: asString(record?.goldenGateEnzyme).slice(
      0,
      CLONING_WORKBENCH_GOLDEN_GATE_ENZYME_MAX_LENGTH,
    ),
    fragmentCount: clampNumber(
      Math.round(asNumber(record?.fragmentCount, 1)),
      CLONING_WORKBENCH_FRAGMENT_COUNT_MIN,
      CLONING_WORKBENCH_FRAGMENT_COUNT_MAX,
    ),
    candidateBackboneCount: clampNumber(
      Math.round(asNumber(record?.candidateBackboneCount, 1)),
      CLONING_WORKBENCH_BACKBONE_COUNT_MIN,
      CLONING_WORKBENCH_BACKBONE_COUNT_MAX,
    ),
    notes: asString(record?.notes).slice(0, CLONING_WORKBENCH_MAX_NOTE_LENGTH),
  });
}

export function normalizeCloningWorkbenchConstructState(value: unknown): CloningWorkbenchConstructState {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchConstructState({
    topology: asEnumValue(record?.topology, CLONING_VECTOR_TOPOLOGIES, 'unknown'),
    sequenceDataJson: asString(record?.sequenceDataJson),
    sequenceLength: asNumber(record?.sequenceLength, 0),
    featureCount: asNumber(record?.featureCount, 0),
    featureSummary: asString(record?.featureSummary),
    enzymeSummary: asString(record?.enzymeSummary),
  });
}

export function normalizeCloningWorkbenchPrimer(value: unknown): CloningWorkbenchPrimer {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchPrimer({
    name: asString(record?.name),
    role: record?.role === 'reverse' ? 'reverse' : 'forward',
    sequence: asString(record?.sequence),
    tm: asNumber(record?.tm, 0),
    gc: asNumber(record?.gc, 0),
    length: asNumber(record?.length, 0),
    notes: asString(record?.notes),
  });
}

export function normalizeCloningWorkbenchAssemblyCheck(value: unknown): CloningWorkbenchAssemblyCheck {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchAssemblyCheck({
    simulationStatus: asEnumValue(record?.simulationStatus, CLONING_SIMULATION_STATUSES, 'not_run'),
    orientationCheck: normalizeCloningCheckResult(record?.orientationCheck),
    frameCheck: normalizeCloningCheckResult(record?.frameCheck),
    junctionCheck: normalizeCloningCheckResult(record?.junctionCheck),
    openRisks: asObjectArray(record?.openRisks, normalizeCloningRiskFlag),
  });
}

export function normalizeCloningWorkbenchVerificationPlan(
  value: unknown,
): CloningWorkbenchVerificationPlan {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchVerificationPlan({
    sequencingPrimers: asStringArray(record?.sequencingPrimers),
    sequencingPrimerDetails: asObjectArray(record?.sequencingPrimerDetails, (item) => {
      const detail = asRecord(item);
      return {
        name: asString(detail?.name),
        target: asString(detail?.target),
        primerSequence: asString(detail?.primerSequence) || undefined,
        expectedRead: asString(detail?.expectedRead),
        rationale: asString(detail?.rationale),
      };
    }).filter((item) => Boolean(item.name || item.expectedRead || item.rationale)),
    colonyPcrChecks: asStringArray(record?.colonyPcrChecks),
    colonyPcrCheckDetails: asObjectArray(record?.colonyPcrCheckDetails, (item) => {
      const detail = asRecord(item);
      return {
        primerPair: asString(detail?.primerPair),
        expectedBandBp: asNumber(detail?.expectedBandBp, 0) || undefined,
        positiveControl: asString(detail?.positiveControl) || undefined,
        negativeControl: asString(detail?.negativeControl) || undefined,
        rationale: asString(detail?.rationale),
      };
    }).filter((item) => Boolean(item.primerPair || item.rationale)),
    diagnosticDigestChecks: asStringArray(record?.diagnosticDigestChecks),
    diagnosticDigestCheckDetails: asObjectArray(record?.diagnosticDigestCheckDetails, (item) => {
      const detail = asRecord(item);
      return {
        enzymes: asStringArray(detail?.enzymes),
        expectedBandsBp: Array.isArray(detail?.expectedBandsBp)
          ? detail.expectedBandsBp.filter(
              (band): band is number =>
                typeof band === 'number' && Number.isFinite(band),
            )
          : [],
        rationale: asString(detail?.rationale),
      };
    }).filter((item) => Boolean(item.enzymes.length || item.expectedBandsBp.length || item.rationale)),
    junctionChecks: asStringArray(record?.junctionChecks),
    junctionCheckDetails: asObjectArray(record?.junctionCheckDetails, (item) => {
      const detail = asRecord(item);
      return {
        junction: asString(detail?.junction),
        expectedSequence: asString(detail?.expectedSequence) || undefined,
        rationale: asString(detail?.rationale),
      };
    }).filter((item) => Boolean(item.junction || item.rationale)),
    limitations: asStringArray(record?.limitations),
  });
}

export function normalizeCloningWorkbenchValidationWorkflow(
  value: unknown,
): CloningWorkbenchValidationWorkflow {
  const record = asRecord(value);
  const status = asEnumValue(record?.status, ['planned', 'ready_for_design', 'blocked', 'archived'] as const, 'planned');
  return createDefaultCloningWorkbenchValidationWorkflow({
    workflowId: asString(record?.workflowId),
    kind: 'point_mutation',
    title: asString(record?.title),
    status,
    linkedStructuralJobId: asString(record?.linkedStructuralJobId) || undefined,
    linkedStructuralArtifactId: asString(record?.linkedStructuralArtifactId) || undefined,
    mutationNotation: asString(record?.mutationNotation) || undefined,
    chainId: asString(record?.chainId) || undefined,
    residueNumber: asNumber(record?.residueNumber, 0) || undefined,
    referenceDatabaseName: asString(record?.referenceDatabaseName) || undefined,
    referenceDatabaseAccession: asString(record?.referenceDatabaseAccession) || undefined,
    referenceResidueNumber: asNumber(record?.referenceResidueNumber, 0) || undefined,
    evidenceLevel: asString(record?.evidenceLevel) || undefined,
    rationale: asString(record?.rationale),
    constructGoals: asStringArray(record?.constructGoals),
    assaySuggestions: asStringArray(record?.assaySuggestions),
    checklist: asStringArray(record?.checklist),
    createdAt: asString(record?.createdAt),
    metadata: asRecord(record?.metadata) || undefined,
  });
}

export function normalizeCloningWorkbenchMaterials(value: unknown): CloningWorkbenchMaterials {
  const record = asRecord(value);
  const requirements = asObjectArray(record?.requirements, (item) => item as MaterialRequirement).filter(
    (item) => Boolean(item.id || item.label),
  );
  return createDefaultCloningWorkbenchMaterials({ requirements });
}

export function normalizeCloningWorkbenchUiState(value: unknown): CloningWorkbenchUiState {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchUiState({
    activePanel: asEnumValue(record?.activePanel, CLONING_WORKBENCH_PANELS, 'map'),
    selectedFeatureId: asString(record?.selectedFeatureId),
  });
}

export function normalizeCloningWorkbenchArchiveState(value: unknown): CloningWorkbenchArchiveState {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchArchiveState({
    wikiNodeId: asString(record?.wikiNodeId),
    archivedAt: asString(record?.archivedAt),
    archivedBy: asString(record?.archivedBy),
  });
}

export function normalizeCloningWorkbenchBranchState(value: unknown): CloningWorkbenchBranchState {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchBranchState({
    rootProjectId: asString(record?.rootProjectId),
    parentProjectId: asString(record?.parentProjectId),
    branchName: asString(record?.branchName, 'main'),
  });
}

export function normalizeCloningWorkbenchHistorySnapshot(
  value: unknown,
): CloningWorkbenchHistorySnapshot {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchHistorySnapshot({
    snapshotId: asString(record?.snapshotId),
    createdAt: asString(record?.createdAt),
    reason: asString(record?.reason),
  });
}

export function normalizeCloningWorkbenchWorkflowEvent(
  value: unknown,
): CloningWorkbenchWorkflowEvent {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchWorkflowEvent({
    id: asString(record?.id),
    stage: asEnumValue(
      record?.stage,
      ['resolve', 'plan', 'design', 'verification', 'archive', 'command'] as const,
      'command',
    ),
    kind: asEnumValue(
      record?.kind,
      ['route', 'skill', 'tool', 'warning', 'fallback', 'state_change'] as const,
      'state_change',
    ),
    label: asString(record?.label),
    detail: asString(record?.detail),
    createdAt: asString(record?.createdAt),
  });
}

export function normalizeCloningWorkbenchProjectState(value: unknown): CloningWorkbenchProjectState {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchProjectState({
    projectId: asString(record?.projectId),
    projectTitle: asString(record?.projectTitle),
    status: asEnumValue(record?.status, CLONING_WORKBENCH_PROJECT_STATUSES, 'draft'),
    branch: normalizeCloningWorkbenchBranchState(record?.branch),
    sources: {
      vector: normalizeCloningWorkbenchSource(record?.sources && asRecord(record.sources)?.vector),
      insert: normalizeCloningWorkbenchSource(record?.sources && asRecord(record.sources)?.insert),
    },
    strategy: normalizeCloningWorkbenchStrategyState(record?.strategy),
    designInputs: normalizeCloningWorkbenchDesignInputs(record?.designInputs),
    construct: normalizeCloningWorkbenchConstructState(record?.construct),
    primers: asObjectArray(record?.primers, normalizeCloningWorkbenchPrimer),
    assemblyCheck: normalizeCloningWorkbenchAssemblyCheck(record?.assemblyCheck),
    verification: normalizeCloningWorkbenchVerificationPlan(record?.verification),
    validationWorkflows: asObjectArray(record?.validationWorkflows, normalizeCloningWorkbenchValidationWorkflow).filter(
      (item) => Boolean(item.workflowId || item.title),
    ),
    materials: normalizeCloningWorkbenchMaterials(record?.materials),
    ui: normalizeCloningWorkbenchUiState(record?.ui),
    archive: normalizeCloningWorkbenchArchiveState(record?.archive),
    analysisContext: normalizeCloningWorkbenchAnalysisContext(record?.analysisContext),
    structuralRefs: asObjectArray(record?.structuralRefs, normalizeCloningWorkbenchStructuralReference).filter(
      (item): item is CloningWorkbenchStructuralReference => Boolean(item),
    ),
    historySnapshots: asObjectArray(record?.historySnapshots, normalizeCloningWorkbenchHistorySnapshot),
    workflowEvents: asObjectArray(record?.workflowEvents, normalizeCloningWorkbenchWorkflowEvent).filter(
      (item) => Boolean(item.id || item.label || item.detail),
    ),
    updatedAt: asString(record?.updatedAt),
    updatedBy: asString(record?.updatedBy),
  });
}

export function normalizeCloningWorkbenchProjectSummary(
  value: unknown,
): CloningWorkbenchProjectSummary {
  const record = asRecord(value);
  const strategy = asString(record?.strategy);
  const requestedStrategy = asString(record?.requestedStrategy);
  const executableStrategy = asString(record?.executableStrategy);
  return createDefaultCloningWorkbenchProjectSummary({
    projectId: asString(record?.projectId),
    projectTitle: asString(record?.projectTitle),
    status: asEnumValue(record?.status, CLONING_WORKBENCH_PROJECT_STATUSES, 'draft'),
    branchName: asString(record?.branchName, 'main'),
    branchRootProjectId: asString(record?.branchRootProjectId),
    strategy: (CLONING_WORKBENCH_STRATEGY_MODES as readonly string[]).includes(strategy) ? (strategy as CloningWorkbenchStrategyMode) : '',
    requestedStrategy:
      (CLONING_WORKBENCH_STRATEGY_MODES as readonly string[]).includes(requestedStrategy)
        ? (requestedStrategy as CloningWorkbenchStrategyMode)
        : '',
    executableStrategy:
      executableStrategy === 'gibson' || executableStrategy === 'restriction_ligation'
        ? executableStrategy
        : '',
    vectorLabel: asString(record?.vectorLabel),
    insertLabel: asString(record?.insertLabel),
    archivedWikiNodeId: asString(record?.archivedWikiNodeId),
    updatedAt: asString(record?.updatedAt),
    createdAt: asString(record?.createdAt),
  });
}

export function normalizeCloningWorkbenchSnapshotSummary(
  value: unknown,
): CloningWorkbenchSnapshotSummary {
  const record = asRecord(value);
  return createDefaultCloningWorkbenchSnapshotSummary({
    snapshotId: asString(record?.snapshotId),
    projectId: asString(record?.projectId),
    reason: asString(record?.reason),
    createdAt: asString(record?.createdAt),
  });
}

export function hasCloningWorkbenchSequences(state: CloningWorkbenchProjectState): boolean {
  return Boolean(state.sources.vector.sequenceText.trim() && state.sources.insert.sequenceText.trim());
}

export function summarizeCloningWorkbenchSourceLabels(
  state: CloningWorkbenchProjectState,
): { vectorLabel: string; insertLabel: string } {
  return {
    vectorLabel: state.sources.vector.label || '未指定载体',
    insertLabel: state.sources.insert.label || '未指定 insert',
  };
}

export function createDefaultWorkbenchRisk(
  overrides: Partial<CloningRiskFlag> = {},
): CloningRiskFlag {
  return createDefaultCloningRiskFlag(overrides);
}

export function createDefaultWorkbenchCheck(
  overrides: Partial<CloningCheckResult> = {},
): CloningCheckResult {
  return createDefaultCloningCheckResult(overrides);
}

export {
  CLONING_RISK_SEVERITIES,
  CLONING_SEQUENCE_FORMATS,
  CLONING_SIMULATION_STATUSES,
  CLONING_STRATEGIES,
  CLONING_VECTOR_TOPOLOGIES,
};
