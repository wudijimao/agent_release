export const CLONING_SOURCE_TYPES = [
  'page',
  'attachment',
  'ncbi',
  'addgene',
  'mcp',
  'user',
  'tool',
  'unknown',
] as const;

export const CLONING_CONTRACT_TYPES = [
  'CloningBrief',
  'CloningPlan',
  'PrimerPackage+AssemblyCheck',
  'VerificationReport',
  'ClarificationRequest',
] as const;

export const CLONING_SEQUENCE_FORMATS = ['raw', 'fasta', 'genbank', 'unknown'] as const;
export const CLONING_VECTOR_TOPOLOGIES = ['circular', 'linear', 'unknown'] as const;
export const CLONING_STRATEGIES = [
  'auto',
  'subcloning',
  'restriction_ligation',
  'gibson',
  'seamless',
  'golden_gate',
  'multi_insert',
  'multi_vector',
] as const;
export const CLONING_RISK_SEVERITIES = ['low', 'medium', 'high', 'critical'] as const;
export const CLONING_SIMULATION_STATUSES = [
  'not_run',
  'pass',
  'warning',
  'fail',
  'unknown',
] as const;
export const CLONING_VERDICTS = ['can_proceed', 'needs_validation', 'needs_replan'] as const;

export type CloningSourceType = (typeof CLONING_SOURCE_TYPES)[number];
export type CloningContractType = (typeof CLONING_CONTRACT_TYPES)[number];
export type CloningSequenceFormat = (typeof CLONING_SEQUENCE_FORMATS)[number];
export type CloningVectorTopology = (typeof CLONING_VECTOR_TOPOLOGIES)[number];
export type CloningStrategy = (typeof CLONING_STRATEGIES)[number];
export type CloningRiskSeverity = (typeof CLONING_RISK_SEVERITIES)[number];
export type CloningSimulationStatus = (typeof CLONING_SIMULATION_STATUSES)[number];
export type CloningVerdict = (typeof CLONING_VERDICTS)[number];

export interface CloningEvidenceSource {
  sourceType: CloningSourceType;
  label: string;
  locator: string;
  note: string;
}

export interface CloningEntity {
  name: string;
  kind: string;
  accession: string;
  addgeneId: string;
  description: string;
  topology: CloningVectorTopology;
  sequenceFormat: CloningSequenceFormat;
  sequenceText: string;
  confidence: number;
  evidence: CloningEvidenceSource[];
}

export interface CloningResolvedSequence {
  role: 'vector' | 'insert' | 'expected_insert' | 'linearized_vector' | 'pcr_insert';
  sequenceText: string;
  sequenceFormat: CloningSequenceFormat;
  topology: CloningVectorTopology;
  source?: CloningEvidenceSource;
}

export interface CloningConstraint {
  key: string;
  value: string;
  description: string;
  required: boolean;
}

export interface CloningAmbiguity {
  field: string;
  reason: string;
  candidates: string[];
}

export interface CloningRequiredInput {
  key: string;
  description: string;
  source: string;
}

export interface CloningDecisionPoint {
  question: string;
  options: string[];
  recommendation: string;
}

export interface CloningRiskFlag {
  severity: CloningRiskSeverity;
  issue: string;
  impact: string;
  mitigation: string;
}

export interface CloningToolStep {
  step: string;
  toolName: string;
  purpose: string;
  requiredInputs: string[];
}

export interface CloningPrimerDesignTarget {
  targetName: string;
  strategy: string;
  forwardPrimer: string;
  reversePrimer: string;
  notes: string;
}

export interface CloningParameter {
  key: string;
  value: string | number | boolean;
  unit: string;
  note: string;
}

export interface CloningCheckResult {
  status: CloningSimulationStatus;
  detail: string;
}

export interface CloningValidationCheck {
  name: string;
  rationale: string;
  recommendedMethod: string;
}

export interface CloningBrief {
  taskGoal: string;
  vector: CloningEntity;
  insert: CloningEntity;
  sequenceSources: CloningEvidenceSource[];
  resolvedSequences: CloningResolvedSequence[];
  constraints: CloningConstraint[];
  ambiguities: CloningAmbiguity[];
  recommendedNext: string;
}

export interface CloningPlan {
  objective: string;
  chosenStrategy: CloningStrategy;
  whyThisStrategy: string;
  toolSequence: CloningToolStep[];
  requiredInputs: CloningRequiredInput[];
  decisionPoints: CloningDecisionPoint[];
  riskFlags: CloningRiskFlag[];
  fallbackStrategy: CloningStrategy;
  recommendedNext: string;
}

export interface PrimerPackage {
  strategy: CloningStrategy;
  sequenceInputsUsed: CloningResolvedSequence[];
  primerDesignTargets: CloningPrimerDesignTarget[];
  homologyOrEnzymeDesign: string;
  parametersUsed: CloningParameter[];
  handoffNotes: string;
}

export interface AssemblyCheck {
  assemblyMethod: CloningStrategy;
  simulationStatus: CloningSimulationStatus;
  orientationCheck: CloningCheckResult;
  frameCheck: CloningCheckResult;
  overlapOrJunctionCheck: CloningCheckResult;
  openRisks: CloningRiskFlag[];
  recommendedNext: string;
}

export interface VerificationReport {
  reviewScope: string;
  criticalIssues: CloningRiskFlag[];
  likelyRisks: CloningRiskFlag[];
  evidenceMissing: string[];
  recommendedChecks: CloningValidationCheck[];
  verdict: CloningVerdict;
  recommendedNext: string;
}

export interface CloningClarificationRequest {
  question: string;
  reason: string;
  missingItems: string[];
  recommendedNext: string;
}

export const CLONING_CONTRACT_NEXT_SKILL_MAP: Record<CloningContractType, string> = {
  CloningBrief: 'bioagent-cloning-strategy-planner',
  CloningPlan: 'bioagent-cloning-primer-and-assembly-assistant',
  'PrimerPackage+AssemblyCheck': 'bioagent-cloning-construct-reviewer',
  VerificationReport: '',
  ClarificationRequest: '',
};

export function isCloningContractType(value: string): value is CloningContractType {
  return (CLONING_CONTRACT_TYPES as readonly string[]).includes(value);
}

export function getDefaultNextSkillForCloningContract(contractType: string): string {
  return isCloningContractType(contractType) ? CLONING_CONTRACT_NEXT_SKILL_MAP[contractType] : '';
}

export function getAllowedNextSkillsForCloningContract(contractType: string): string[] {
  const next = getDefaultNextSkillForCloningContract(contractType);
  return next ? [next] : [];
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : null;
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

function asEnumValue<T extends readonly string[]>(
  value: unknown,
  allowed: T,
  fallback: T[number],
): T[number] {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value) ? (value as T[number]) : fallback;
}

function asObjectArray<T>(value: unknown, mapper: (item: unknown) => T): T[] {
  return Array.isArray(value) ? value.map(mapper) : [];
}

export function createDefaultCloningEvidenceSource(
  overrides: Partial<CloningEvidenceSource> = {},
): CloningEvidenceSource {
  return {
    sourceType: 'unknown',
    label: '',
    locator: '',
    note: '',
    ...overrides,
  };
}

export function createDefaultCloningEntity(
  overrides: Partial<CloningEntity> = {},
): CloningEntity {
  return {
    name: '',
    kind: '',
    accession: '',
    addgeneId: '',
    description: '',
    topology: 'unknown',
    sequenceFormat: 'unknown',
    sequenceText: '',
    confidence: 0,
    evidence: [],
    ...overrides,
  };
}

export function createDefaultCloningResolvedSequence(
  overrides: Partial<CloningResolvedSequence> = {},
): CloningResolvedSequence {
  return {
    role: 'insert',
    sequenceText: '',
    sequenceFormat: 'unknown',
    topology: 'unknown',
    ...overrides,
  };
}

export function createDefaultCloningConstraint(
  overrides: Partial<CloningConstraint> = {},
): CloningConstraint {
  return {
    key: '',
    value: '',
    description: '',
    required: false,
    ...overrides,
  };
}

export function createDefaultCloningAmbiguity(
  overrides: Partial<CloningAmbiguity> = {},
): CloningAmbiguity {
  return {
    field: '',
    reason: '',
    candidates: [],
    ...overrides,
  };
}

export function createDefaultCloningRequiredInput(
  overrides: Partial<CloningRequiredInput> = {},
): CloningRequiredInput {
  return {
    key: '',
    description: '',
    source: '',
    ...overrides,
  };
}

export function createDefaultCloningDecisionPoint(
  overrides: Partial<CloningDecisionPoint> = {},
): CloningDecisionPoint {
  return {
    question: '',
    options: [],
    recommendation: '',
    ...overrides,
  };
}

export function createDefaultCloningRiskFlag(
  overrides: Partial<CloningRiskFlag> = {},
): CloningRiskFlag {
  return {
    severity: 'low',
    issue: '',
    impact: '',
    mitigation: '',
    ...overrides,
  };
}

export function createDefaultCloningToolStep(
  overrides: Partial<CloningToolStep> = {},
): CloningToolStep {
  return {
    step: '',
    toolName: '',
    purpose: '',
    requiredInputs: [],
    ...overrides,
  };
}

export function createDefaultCloningPrimerDesignTarget(
  overrides: Partial<CloningPrimerDesignTarget> = {},
): CloningPrimerDesignTarget {
  return {
    targetName: '',
    strategy: '',
    forwardPrimer: '',
    reversePrimer: '',
    notes: '',
    ...overrides,
  };
}

export function createDefaultCloningParameter(
  overrides: Partial<CloningParameter> = {},
): CloningParameter {
  return {
    key: '',
    value: '',
    unit: '',
    note: '',
    ...overrides,
  };
}

export function createDefaultCloningCheckResult(
  overrides: Partial<CloningCheckResult> = {},
): CloningCheckResult {
  return {
    status: 'unknown',
    detail: '',
    ...overrides,
  };
}

export function createDefaultCloningValidationCheck(
  overrides: Partial<CloningValidationCheck> = {},
): CloningValidationCheck {
  return {
    name: '',
    rationale: '',
    recommendedMethod: '',
    ...overrides,
  };
}

export function createDefaultCloningBrief(
  overrides: Partial<CloningBrief> = {},
): CloningBrief {
  return {
    taskGoal: '',
    vector: createDefaultCloningEntity(),
    insert: createDefaultCloningEntity(),
    sequenceSources: [],
    resolvedSequences: [],
    constraints: [],
    ambiguities: [],
    recommendedNext: 'bioagent-cloning-strategy-planner',
    ...overrides,
  };
}

export function createDefaultCloningPlan(
  overrides: Partial<CloningPlan> = {},
): CloningPlan {
  return {
    objective: '',
    chosenStrategy: 'auto',
    whyThisStrategy: '',
    toolSequence: [],
    requiredInputs: [],
    decisionPoints: [],
    riskFlags: [],
    fallbackStrategy: 'auto',
    recommendedNext: 'bioagent-cloning-primer-and-assembly-assistant',
    ...overrides,
  };
}

export function createDefaultPrimerPackage(
  overrides: Partial<PrimerPackage> = {},
): PrimerPackage {
  return {
    strategy: 'auto',
    sequenceInputsUsed: [],
    primerDesignTargets: [],
    homologyOrEnzymeDesign: '',
    parametersUsed: [],
    handoffNotes: '',
    ...overrides,
  };
}

export function createDefaultAssemblyCheck(
  overrides: Partial<AssemblyCheck> = {},
): AssemblyCheck {
  return {
    assemblyMethod: 'auto',
    simulationStatus: 'not_run',
    orientationCheck: createDefaultCloningCheckResult(),
    frameCheck: createDefaultCloningCheckResult(),
    overlapOrJunctionCheck: createDefaultCloningCheckResult(),
    openRisks: [],
    recommendedNext: 'bioagent-cloning-construct-reviewer',
    ...overrides,
  };
}

export function createDefaultVerificationReport(
  overrides: Partial<VerificationReport> = {},
): VerificationReport {
  return {
    reviewScope: '',
    criticalIssues: [],
    likelyRisks: [],
    evidenceMissing: [],
    recommendedChecks: [],
    verdict: 'needs_validation',
    recommendedNext: '',
    ...overrides,
  };
}

export function createDefaultCloningClarificationRequest(
  overrides: Partial<CloningClarificationRequest> = {},
): CloningClarificationRequest {
  return {
    question: '',
    reason: '',
    missingItems: [],
    recommendedNext: '',
    ...overrides,
  };
}

export function normalizeCloningEvidenceSource(value: unknown): CloningEvidenceSource {
  const record = asRecord(value);
  return createDefaultCloningEvidenceSource({
    sourceType: asEnumValue(record?.sourceType, CLONING_SOURCE_TYPES, 'unknown'),
    label: asString(record?.label),
    locator: asString(record?.locator),
    note: asString(record?.note),
  });
}

export function normalizeCloningEntity(value: unknown): CloningEntity {
  const record = asRecord(value);
  return createDefaultCloningEntity({
    name: asString(record?.name),
    kind: asString(record?.kind),
    accession: asString(record?.accession),
    addgeneId: asString(record?.addgeneId),
    description: asString(record?.description),
    topology: asEnumValue(record?.topology, CLONING_VECTOR_TOPOLOGIES, 'unknown'),
    sequenceFormat: asEnumValue(record?.sequenceFormat, CLONING_SEQUENCE_FORMATS, 'unknown'),
    sequenceText: asString(record?.sequenceText),
    confidence: Math.max(0, Math.min(1, asNumber(record?.confidence, 0))),
    evidence: asObjectArray(record?.evidence, normalizeCloningEvidenceSource),
  });
}

export function normalizeCloningResolvedSequence(value: unknown): CloningResolvedSequence {
  const record = asRecord(value);
  const role =
    record?.role === 'vector' ||
    record?.role === 'insert' ||
    record?.role === 'expected_insert' ||
    record?.role === 'linearized_vector' ||
    record?.role === 'pcr_insert'
      ? record.role
      : 'insert';

  return createDefaultCloningResolvedSequence({
    role,
    sequenceText: asString(record?.sequenceText),
    sequenceFormat: asEnumValue(record?.sequenceFormat, CLONING_SEQUENCE_FORMATS, 'unknown'),
    topology: asEnumValue(record?.topology, CLONING_VECTOR_TOPOLOGIES, 'unknown'),
    source: record?.source ? normalizeCloningEvidenceSource(record.source) : undefined,
  });
}

export function normalizeCloningConstraint(value: unknown): CloningConstraint {
  const record = asRecord(value);
  return createDefaultCloningConstraint({
    key: asString(record?.key),
    value: asString(record?.value),
    description: asString(record?.description),
    required: asBoolean(record?.required),
  });
}

export function normalizeCloningAmbiguity(value: unknown): CloningAmbiguity {
  const record = asRecord(value);
  return createDefaultCloningAmbiguity({
    field: asString(record?.field),
    reason: asString(record?.reason),
    candidates: asStringArray(record?.candidates),
  });
}

export function normalizeCloningRequiredInput(value: unknown): CloningRequiredInput {
  const record = asRecord(value);
  return createDefaultCloningRequiredInput({
    key: asString(record?.key),
    description: asString(record?.description),
    source: asString(record?.source),
  });
}

export function normalizeCloningDecisionPoint(value: unknown): CloningDecisionPoint {
  const record = asRecord(value);
  return createDefaultCloningDecisionPoint({
    question: asString(record?.question),
    options: asStringArray(record?.options),
    recommendation: asString(record?.recommendation),
  });
}

export function normalizeCloningRiskFlag(value: unknown): CloningRiskFlag {
  const record = asRecord(value);
  return createDefaultCloningRiskFlag({
    severity: asEnumValue(record?.severity, CLONING_RISK_SEVERITIES, 'low'),
    issue: asString(record?.issue),
    impact: asString(record?.impact),
    mitigation: asString(record?.mitigation),
  });
}

export function normalizeCloningToolStep(value: unknown): CloningToolStep {
  const record = asRecord(value);
  return createDefaultCloningToolStep({
    step: asString(record?.step),
    toolName: asString(record?.toolName),
    purpose: asString(record?.purpose),
    requiredInputs: asStringArray(record?.requiredInputs),
  });
}

export function normalizeCloningPrimerDesignTarget(value: unknown): CloningPrimerDesignTarget {
  const record = asRecord(value);
  return createDefaultCloningPrimerDesignTarget({
    targetName: asString(record?.targetName),
    strategy: asString(record?.strategy),
    forwardPrimer: asString(record?.forwardPrimer),
    reversePrimer: asString(record?.reversePrimer),
    notes: asString(record?.notes),
  });
}

export function normalizeCloningParameter(value: unknown): CloningParameter {
  const record = asRecord(value);
  const rawValue = record?.value;
  return createDefaultCloningParameter({
    key: asString(record?.key),
    value:
      typeof rawValue === 'string' || typeof rawValue === 'number' || typeof rawValue === 'boolean'
        ? rawValue
        : '',
    unit: asString(record?.unit),
    note: asString(record?.note),
  });
}

export function normalizeCloningCheckResult(value: unknown): CloningCheckResult {
  const record = asRecord(value);
  return createDefaultCloningCheckResult({
    status: asEnumValue(record?.status, CLONING_SIMULATION_STATUSES, 'unknown'),
    detail: asString(record?.detail),
  });
}

export function normalizeCloningValidationCheck(value: unknown): CloningValidationCheck {
  const record = asRecord(value);
  return createDefaultCloningValidationCheck({
    name: asString(record?.name),
    rationale: asString(record?.rationale),
    recommendedMethod: asString(record?.recommendedMethod),
  });
}

export function normalizeCloningBrief(value: unknown): CloningBrief {
  const record = asRecord(value);
  return createDefaultCloningBrief({
    taskGoal: asString(record?.taskGoal),
    vector: normalizeCloningEntity(record?.vector),
    insert: normalizeCloningEntity(record?.insert),
    sequenceSources: asObjectArray(record?.sequenceSources, normalizeCloningEvidenceSource),
    resolvedSequences: asObjectArray(record?.resolvedSequences, normalizeCloningResolvedSequence),
    constraints: asObjectArray(record?.constraints, normalizeCloningConstraint),
    ambiguities: asObjectArray(record?.ambiguities, normalizeCloningAmbiguity),
    recommendedNext: asString(record?.recommendedNext, 'bioagent-cloning-strategy-planner'),
  });
}

export function normalizeCloningPlan(value: unknown): CloningPlan {
  const record = asRecord(value);
  return createDefaultCloningPlan({
    objective: asString(record?.objective),
    chosenStrategy: asEnumValue(record?.chosenStrategy, CLONING_STRATEGIES, 'auto'),
    whyThisStrategy: asString(record?.whyThisStrategy),
    toolSequence: asObjectArray(record?.toolSequence, normalizeCloningToolStep),
    requiredInputs: asObjectArray(record?.requiredInputs, normalizeCloningRequiredInput),
    decisionPoints: asObjectArray(record?.decisionPoints, normalizeCloningDecisionPoint),
    riskFlags: asObjectArray(record?.riskFlags, normalizeCloningRiskFlag),
    fallbackStrategy: asEnumValue(record?.fallbackStrategy, CLONING_STRATEGIES, 'auto'),
    recommendedNext: asString(record?.recommendedNext, 'bioagent-cloning-primer-and-assembly-assistant'),
  });
}

export function normalizePrimerPackage(value: unknown): PrimerPackage {
  const record = asRecord(value);
  return createDefaultPrimerPackage({
    strategy: asEnumValue(record?.strategy, CLONING_STRATEGIES, 'auto'),
    sequenceInputsUsed: asObjectArray(record?.sequenceInputsUsed, normalizeCloningResolvedSequence),
    primerDesignTargets: asObjectArray(record?.primerDesignTargets, normalizeCloningPrimerDesignTarget),
    homologyOrEnzymeDesign: asString(record?.homologyOrEnzymeDesign),
    parametersUsed: asObjectArray(record?.parametersUsed, normalizeCloningParameter),
    handoffNotes: asString(record?.handoffNotes),
  });
}

export function normalizeAssemblyCheck(value: unknown): AssemblyCheck {
  const record = asRecord(value);
  return createDefaultAssemblyCheck({
    assemblyMethod: asEnumValue(record?.assemblyMethod, CLONING_STRATEGIES, 'auto'),
    simulationStatus: asEnumValue(record?.simulationStatus, CLONING_SIMULATION_STATUSES, 'not_run'),
    orientationCheck: normalizeCloningCheckResult(record?.orientationCheck),
    frameCheck: normalizeCloningCheckResult(record?.frameCheck),
    overlapOrJunctionCheck: normalizeCloningCheckResult(record?.overlapOrJunctionCheck),
    openRisks: asObjectArray(record?.openRisks, normalizeCloningRiskFlag),
    recommendedNext: asString(record?.recommendedNext, 'bioagent-cloning-construct-reviewer'),
  });
}

export function normalizeVerificationReport(value: unknown): VerificationReport {
  const record = asRecord(value);
  return createDefaultVerificationReport({
    reviewScope: asString(record?.reviewScope),
    criticalIssues: asObjectArray(record?.criticalIssues, normalizeCloningRiskFlag),
    likelyRisks: asObjectArray(record?.likelyRisks, normalizeCloningRiskFlag),
    evidenceMissing: asStringArray(record?.evidenceMissing),
    recommendedChecks: asObjectArray(record?.recommendedChecks, normalizeCloningValidationCheck),
    verdict: asEnumValue(record?.verdict, CLONING_VERDICTS, 'needs_validation'),
    recommendedNext: asString(record?.recommendedNext),
  });
}

export function normalizeCloningClarificationRequest(value: unknown): CloningClarificationRequest {
  const record = asRecord(value);
  return createDefaultCloningClarificationRequest({
    question: asString(record?.question),
    reason: asString(record?.reason),
    missingItems: asStringArray(record?.missingItems),
    recommendedNext: asString(record?.recommendedNext),
  });
}
