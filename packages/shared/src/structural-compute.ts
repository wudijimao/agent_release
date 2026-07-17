export const STRUCTURAL_TASK_TYPES = [
  'structure_view',
  'folding',
  'mutation_compare',
  'binder_design',
  'sequence_design',
] as const;

export const STRUCTURAL_JOB_STATUSES = [
  'queued',
  'running',
  'succeeded',
  'failed',
  'cancelled',
] as const;

export const STRUCTURAL_PROVIDER_EXECUTION_MODES = [
  'mock',
  'cpu',
  'local_gpu',
  'remote_gpu',
] as const;

export const STRUCTURAL_PROVIDER_HEALTH_STATUSES = [
  'healthy',
  'degraded',
  'disabled',
  'unavailable',
] as const;

export const STRUCTURAL_ARTIFACT_KINDS = [
  'pdb',
  'cif',
  'score_json',
  'pae_matrix',
  'candidate_list',
  'mutation_context_json',
  'sequence_fasta',
  'visual_patch',
  'report_markdown',
] as const;

export const STRUCTURAL_ARTIFACT_SOURCES = [
  'fixture',
  'mock_runner',
  'uploaded',
  'rcsb',
  'local_cpu',
  'remote_gpu',
] as const;

export const STRUCTURAL_VISUAL_PATCH_ACTIONS = [
  'focus_residue',
  'highlight_neighborhood',
  'highlight_range',
  'color_chain',
  'show_surface',
  'compare_models',
  'reset_view',
] as const;

export const STRUCTURAL_SANITY_CHECK_SEVERITIES = ['pass', 'warning', 'blocker'] as const;
export const STRUCTURAL_DESIGN_RISK_LEVELS = ['low', 'medium', 'high', 'blocked'] as const;
export const STRUCTURAL_MUTATION_EVIDENCE_LEVELS = [
  'structure_context_only',
  'imported_experimental_structure',
  'predicted_structure_context',
  'mock_context',
] as const;

export const STRUCTURAL_RESIDUE_NUMBERING_BASES = [
  'author_residue_number',
  'label_seq_id',
  'unmapped',
] as const;

export const STRUCTURAL_RESIDUE_BURIAL_CLASSES = [
  'exposed',
  'partially_buried',
  'buried',
  'unknown',
] as const;

export const STRUCTURAL_LIGAND_CLASSES = [
  'functional_candidate',
  'common_additive',
  'ion',
  'water',
  'unknown_heterogen',
] as const;

export const STRUCTURAL_INTERACTION_KINDS = [
  'hydrogen_bond_candidate',
  'salt_bridge_candidate',
  'steric_clash_candidate',
  'aromatic_contact_candidate',
  'sulfur_contact_candidate',
] as const;

export const STRUCTURAL_SEQUENCE_ANNOTATION_KINDS = [
  'binding_site',
  'active_site',
  'domain',
  'region',
  'ptm',
  'mutation_site',
  'other',
] as const;
export const STRUCTURAL_MUTATION_CONTACT_RADIUS_ANGSTROM = 5;
export const STRUCTURAL_MUTATION_CONTEXT_RADIUS_ANGSTROM = 8;

export const STRUCTURAL_PROJECT_STATUSES = [
  'draft',
  'queued',
  'running',
  'completed',
  'failed',
  'archived',
] as const;

export type StructuralTaskType = (typeof STRUCTURAL_TASK_TYPES)[number];
export type StructuralJobStatus = (typeof STRUCTURAL_JOB_STATUSES)[number];
export type StructuralProviderExecutionMode = (typeof STRUCTURAL_PROVIDER_EXECUTION_MODES)[number];
export type StructuralProviderHealthStatus = (typeof STRUCTURAL_PROVIDER_HEALTH_STATUSES)[number];
export type StructuralArtifactKind = (typeof STRUCTURAL_ARTIFACT_KINDS)[number];
export type StructuralArtifactSource = (typeof STRUCTURAL_ARTIFACT_SOURCES)[number];
export type StructuralVisualPatchAction = (typeof STRUCTURAL_VISUAL_PATCH_ACTIONS)[number];
export type StructuralSanityCheckSeverity = (typeof STRUCTURAL_SANITY_CHECK_SEVERITIES)[number];
export type StructuralDesignRiskLevel = (typeof STRUCTURAL_DESIGN_RISK_LEVELS)[number];
export type StructuralMutationEvidenceLevel = (typeof STRUCTURAL_MUTATION_EVIDENCE_LEVELS)[number];
export type StructuralResidueNumberingBasis = (typeof STRUCTURAL_RESIDUE_NUMBERING_BASES)[number];
export type StructuralResidueBurialClass = (typeof STRUCTURAL_RESIDUE_BURIAL_CLASSES)[number];
export type StructuralLigandClass = (typeof STRUCTURAL_LIGAND_CLASSES)[number];
export type StructuralInteractionKind = (typeof STRUCTURAL_INTERACTION_KINDS)[number];
export type StructuralSequenceAnnotationKind = (typeof STRUCTURAL_SEQUENCE_ANNOTATION_KINDS)[number];
export type StructuralProjectStatus = (typeof STRUCTURAL_PROJECT_STATUSES)[number];

export interface StructuralMutationSpec {
  wildType?: string;
  mutant?: string;
  chainId?: string;
  residueNumber?: number;
  insertionCode?: string;
  notation?: string;
}

export interface StructuralTargetResidue {
  chainId: string;
  residueNumber: number;
  insertionCode?: string;
  label?: string;
}

export interface StructuralParsedMutationNotation {
  notation: string;
  wildType?: string;
  mutant?: string;
  residueNumber?: number;
  valid: boolean;
  errors: string[];
}

export interface StructuralAminoAcidDescriptor {
  code: string;
  threeLetterCode: string;
  name: string;
  sizeClass: 'tiny' | 'small' | 'medium' | 'large';
  chargeClass: 'negative' | 'positive' | 'neutral';
  polarityClass: 'polar' | 'nonpolar';
  hydrophobicityClass: 'hydrophobic' | 'hydrophilic' | 'mixed';
  aromatic: boolean;
  sulfurContaining: boolean;
  specialBackbone: boolean;
}

export interface StructuralAminoAcidPropertyChange {
  from: string;
  to: string;
  fromCode?: string;
  toCode?: string;
  propertyChanges: string[];
  reviewFlags: string[];
  metadata?: Record<string, unknown>;
}

export interface StructuralMutationContextResidue {
  chainId: string;
  residueNumber: number;
  residueName: string;
  minDistanceAngstrom: number;
  label?: string;
  sameChain?: boolean;
  metadata?: Record<string, unknown>;
}

export interface StructuralMutationContextLigand {
  chainId: string;
  residueNumber: number | string;
  residueName: string;
  minDistanceAngstrom: number;
  isIon: boolean;
  ligandClass?: StructuralLigandClass;
  label?: string;
  metadata?: Record<string, unknown>;
}

export interface StructuralMutationContextChain {
  chainId: string;
  minDistanceAngstrom: number;
  contactResidueCount: number;
  label?: string;
  metadata?: Record<string, unknown>;
}

export interface StructuralResidueNumberingContext {
  requestedResidueNumber?: number;
  requestedInsertionCode?: string;
  matchedResidueNumber?: number;
  matchedInsertionCode?: string;
  matchedLabelSeqId?: number;
  chainId?: string;
  referenceDatabaseName?: string;
  referenceDatabaseAccession?: string;
  referenceResidueNumber?: number;
  referenceMappingSource?: string;
  entityId?: string;
  basis: StructuralResidueNumberingBasis;
  mappingApplied: boolean;
  warnings: string[];
  metadata?: Record<string, unknown>;
}

export interface StructuralMutationResidueExposure {
  burialClass: StructuralResidueBurialClass;
  neighborResidueCount8A: number;
  heavyAtomNeighborCount8A: number;
  sameChainContactCount5A: number;
  otherChainContactCount5A: number;
  method: 'coordinate_neighbor_count';
  metadata?: Record<string, unknown>;
}

export interface StructuralMutationInteraction {
  kind: StructuralInteractionKind;
  partnerChainId: string;
  partnerResidueNumber: number | string;
  partnerResidueName: string;
  minDistanceAngstrom: number;
  atomPair?: {
    mutationAtom: string;
    partnerAtom: string;
  };
  confidence: 'geometry_screen';
  metadata?: Record<string, unknown>;
}

export interface StructuralMutationLigandSummary {
  functionalCandidateCount: number;
  commonAdditiveCount: number;
  ionCount: number;
  unknownHeterogenCount: number;
  closestFunctionalCandidate?: StructuralMutationContextLigand;
  ontologyCategoryCounts?: Record<string, number>;
}

export interface StructuralMutationSequenceAnnotation {
  kind: StructuralSequenceAnnotationKind;
  label: string;
  source: string;
  entityId?: string;
  chainIds: string[];
  begin?: number;
  end?: number;
  referenceDatabaseName?: string;
  referenceDatabaseAccession?: string;
  referenceResidueStart?: number;
  referenceResidueEnd?: number;
  sequenceDistanceResidues?: number;
  confidence: 'external_annotation';
  metadata?: Record<string, unknown>;
}

export interface StructuralMutationAssemblyContext {
  applied: boolean;
  assemblyId?: string;
  source?: string;
  oligomericDetails?: string;
  polymerComposition?: string;
  warnings: string[];
  metadata?: Record<string, unknown>;
}

export interface StructuralMutationMechanismFeatures {
  residueExposure: StructuralMutationResidueExposure;
  interactions: StructuralMutationInteraction[];
  ligandSummary: StructuralMutationLigandSummary;
  assembly: StructuralMutationAssemblyContext;
  annotations: StructuralMutationSequenceAnnotation[];
  metadata?: Record<string, unknown>;
}

export interface StructuralMutationContextEvidence {
  level: StructuralMutationEvidenceLevel;
  structureSource: StructuralArtifactSource | 'provider';
  pdbId?: string;
  chainId?: string;
  provider?: string;
  pipeline?: string;
  experimentalMethod?: string;
  resolutionAngstrom?: number;
  citation?: string;
  metadata?: Record<string, unknown>;
}

export interface StructuralMutationContext {
  schemaVersion: 'structural-mutation-context/v1';
  mutation: {
    notation: string;
    wildType?: string;
    mutant?: string;
    chainId?: string;
    residueNumber?: number;
    insertionCode?: string;
    structureResidueName?: string;
    residueFound: boolean;
    residueMatchesMutation?: boolean;
    numbering?: StructuralResidueNumberingContext;
    warnings: string[];
  };
  neighborhoods: {
    contactRadiusAngstrom: number;
    contextRadiusAngstrom: number;
    contactResidues: StructuralMutationContextResidue[];
    contextResidues: StructuralMutationContextResidue[];
    nearbyLigands: StructuralMutationContextLigand[];
    nearbyChains: StructuralMutationContextChain[];
  };
  aminoAcidChange: StructuralAminoAcidPropertyChange;
  mechanism?: StructuralMutationMechanismFeatures;
  evidence: StructuralMutationContextEvidence;
  limitations: string[];
  metadata?: Record<string, unknown>;
}

export interface StructuralMutationInterpretation {
  summary: string;
  keyObservations: string[];
  suggestedValidation: string[];
  limitations: string[];
}

export interface StructuralJobInput {
  sequence?: string;
  sequenceType?: 'protein' | 'dna' | 'rna' | 'unknown';
  targetName?: string;
  structureFileId?: string;
  structureText?: string;
  structureFormat?: 'pdb' | 'cif' | 'unknown';
  rcsbId?: string;
  mutation?: StructuralMutationSpec;
  targetResidues?: StructuralTargetResidue[];
  bindingSiteResidues?: StructuralTargetResidue[];
  candidateSequence?: string;
  binderLengthMin?: number;
  binderLengthMax?: number;
  designCount?: number;
  scaffold?: StructuralBinderDesignInput['scaffold'];
  metadata?: Record<string, unknown>;
}

export interface StructuralJobConstraints {
  maxCostUsd?: number;
  preferProvider?: string;
  preferExecutionMode?: StructuralProviderExecutionMode;
  allowRemoteGpu?: boolean;
  allowMock?: boolean;
  maxRuntimeSeconds?: number;
  metadata?: Record<string, unknown>;
}

export interface StructuralSanityCheckItem {
  checkId: string;
  label: string;
  severity: StructuralSanityCheckSeverity;
  message: string;
  metadata?: Record<string, unknown>;
}

export interface StructuralSanityCheckResult {
  ok: boolean;
  shouldBlock: boolean;
  summary: string;
  checks: StructuralSanityCheckItem[];
}

export interface StructuralBinderDesignInput {
  targetName?: string;
  targetSequence?: string;
  targetStructureText?: string;
  targetStructureFormat?: 'pdb' | 'cif' | 'unknown';
  bindingSiteResidues: StructuralTargetResidue[];
  binderLengthMin?: number;
  binderLengthMax?: number;
  designCount?: number;
  scaffold?: 'nanobody' | 'miniprotein' | 'peptide' | 'antibody_fragment' | 'unknown';
  metadata?: Record<string, unknown>;
}

export interface StructuralDesignCandidate {
  candidateId: string;
  label: string;
  aminoAcidSequence?: string;
  rank?: number;
  score?: number;
  demoScore?: number;
  riskLevel: StructuralDesignRiskLevel;
  sanityChecks: StructuralSanityCheckItem[];
  metrics: Record<string, unknown>;
  sourceJobId?: string;
  sourceArtifactId?: string;
  metadata?: Record<string, unknown>;
}

export interface StructuralCandidateRanking {
  schemaVersion: 'structural-candidate-ranking/v1';
  generatedAt: string;
  rankingMethod: string;
  candidates: StructuralDesignCandidate[];
  summary: {
    candidateCount: number;
    passCount: number;
    warningCount: number;
    blockedCount: number;
    topCandidateId?: string;
  };
  warnings: string[];
}

export interface StructuralComputeCost {
  cpuSeconds: number;
  gpuSeconds: number;
  estimatedUsd: number;
  billingMode: 'none' | 'demo' | 'local' | 'remote';
  notes?: string[];
}

export interface StructuralProvenance {
  source: StructuralArtifactSource | 'provider';
  provider: string;
  pipeline: string;
  isMock: boolean;
  isScientificallyValidated: boolean;
  limitationNotes: string[];
  createdAt: string;
  metadata?: Record<string, unknown>;
}

export interface StructuralVisualPatch {
  action: StructuralVisualPatchAction;
  chainId?: string;
  residueNumber?: number;
  residueStart?: number;
  residueEnd?: number;
  color?: string;
  label?: string;
  structureIds?: string[];
  representation?: 'cartoon' | 'surface' | 'stick' | 'line';
  metadata?: Record<string, unknown>;
}

export interface StructuralProjectJobRef {
  jobId: string;
  taskType: StructuralTaskType;
  provider: string;
  pipeline: string;
  status: StructuralJobStatus;
  createdAt: string;
  finishedAt?: string;
}

export interface StructuralProjectCandidateRef {
  candidateId: string;
  label: string;
  sequence?: string;
  sourceJobId?: string;
  sourceArtifactId?: string;
  rank?: number;
  score?: number;
  metadata?: Record<string, unknown>;
}

export interface StructuralProjectArchiveState {
  wikiNodeId?: string;
  archivedAt?: string;
  archivedBy?: string;
}

export interface StructuralProjectState {
  projectId: string;
  title: string;
  status: StructuralProjectStatus;
  targetName: string;
  linkedCloningProjectIds: string[];
  jobRefs: StructuralProjectJobRef[];
  candidates: StructuralProjectCandidateRef[];
  visualPatches: StructuralVisualPatch[];
  archive: StructuralProjectArchiveState;
  metadata: Record<string, unknown>;
  updatedAt: string;
  updatedBy: string;
}

export interface StructuralVisualPatchValidationResult {
  ok: boolean;
  patches: StructuralVisualPatch[];
  errors: string[];
}

export interface StructuralArtifact {
  artifactId: string;
  jobId: string;
  kind: StructuralArtifactKind;
  name: string;
  format: 'pdb' | 'cif' | 'json' | 'fasta' | 'markdown' | 'unknown';
  source: StructuralArtifactSource;
  objectKey?: string;
  storageUrl?: string;
  inlineText?: string;
  mimeType: string;
  sizeBytes?: number;
  metadata: Record<string, unknown>;
  provenance: StructuralProvenance;
  createdAt: string;
}

export interface StructuralJobStage {
  stageId: string;
  label: string;
  status: StructuralJobStatus;
  progress: number;
  message?: string;
  startedAt?: string;
  finishedAt?: string;
}

export interface StructuralJob {
  jobId: string;
  labId: string;
  projectId?: string;
  taskType: StructuralTaskType;
  status: StructuralJobStatus;
  provider: string;
  executionMode: StructuralProviderExecutionMode;
  pipeline: string;
  progress: number;
  currentStage?: string;
  input: StructuralJobInput;
  constraints: StructuralJobConstraints;
  stages: StructuralJobStage[];
  artifacts: StructuralArtifact[];
  visualPatches: StructuralVisualPatch[];
  cost: StructuralComputeCost;
  provenance: StructuralProvenance;
  errorMessage?: string;
  createdBy?: string;
  createdAt: string;
  startedAt?: string;
  finishedAt?: string;
  updatedAt: string;
}

export interface StructuralProviderCapability {
  taskTypes: StructuralTaskType[];
  artifactKinds: StructuralArtifactKind[];
  supportsCancel: boolean;
  supportsProgress: boolean;
  supportsRemoteExecution: boolean;
  notes: string[];
}

export interface StructuralProviderDescriptor {
  name: string;
  displayName: string;
  executionMode: StructuralProviderExecutionMode;
  pipelines: string[];
  capabilities: StructuralProviderCapability;
  enabled: boolean;
  isMock: boolean;
  limitationNotes: string[];
}

export interface StructuralProviderHealth {
  provider: string;
  status: StructuralProviderHealthStatus;
  enabled: boolean;
  executionMode: StructuralProviderExecutionMode;
  canEstimate: boolean;
  canSubmit: boolean;
  checkedAt: string;
  issues: string[];
  remediation: string[];
  metadata?: Record<string, unknown>;
}

export interface StructuralJobEstimate {
  provider: string;
  pipeline: string;
  executionMode: StructuralProviderExecutionMode;
  canRun: boolean;
  estimatedSeconds: number;
  cost: StructuralComputeCost;
  warnings: string[];
  limitationNotes: string[];
}

export interface StructuralSubmitJobRequest {
  taskType: StructuralTaskType;
  input: StructuralJobInput;
  constraints?: StructuralJobConstraints;
  projectId?: string;
}

export interface StructuralSubmitJobResponse {
  job: StructuralJob;
}

export interface StructuralProviderListResponse {
  providers: StructuralProviderDescriptor[];
}

export interface StructuralProviderHealthResponse {
  items: StructuralProviderHealth[];
}

export interface StructuralRcsbSearchCandidate {
  rcsbId: string;
  score: number;
  title?: string;
  experimentalMethod?: string;
  resolutionAngstrom?: number;
  citation?: string;
  polymerChains: string[];
  entryUrl: string;
}

export interface StructuralRcsbSearchResponse {
  query: string;
  totalCount: number;
  items: StructuralRcsbSearchCandidate[];
}

const STRUCTURAL_AMINO_ACID_DESCRIPTORS: Record<string, StructuralAminoAcidDescriptor> = {
  A: {
    code: 'A',
    threeLetterCode: 'ALA',
    name: 'Alanine',
    sizeClass: 'small',
    chargeClass: 'neutral',
    polarityClass: 'nonpolar',
    hydrophobicityClass: 'hydrophobic',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: false,
  },
  C: {
    code: 'C',
    threeLetterCode: 'CYS',
    name: 'Cysteine',
    sizeClass: 'small',
    chargeClass: 'neutral',
    polarityClass: 'polar',
    hydrophobicityClass: 'mixed',
    aromatic: false,
    sulfurContaining: true,
    specialBackbone: false,
  },
  D: {
    code: 'D',
    threeLetterCode: 'ASP',
    name: 'Aspartate',
    sizeClass: 'small',
    chargeClass: 'negative',
    polarityClass: 'polar',
    hydrophobicityClass: 'hydrophilic',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: false,
  },
  E: {
    code: 'E',
    threeLetterCode: 'GLU',
    name: 'Glutamate',
    sizeClass: 'medium',
    chargeClass: 'negative',
    polarityClass: 'polar',
    hydrophobicityClass: 'hydrophilic',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: false,
  },
  F: {
    code: 'F',
    threeLetterCode: 'PHE',
    name: 'Phenylalanine',
    sizeClass: 'large',
    chargeClass: 'neutral',
    polarityClass: 'nonpolar',
    hydrophobicityClass: 'hydrophobic',
    aromatic: true,
    sulfurContaining: false,
    specialBackbone: false,
  },
  G: {
    code: 'G',
    threeLetterCode: 'GLY',
    name: 'Glycine',
    sizeClass: 'tiny',
    chargeClass: 'neutral',
    polarityClass: 'nonpolar',
    hydrophobicityClass: 'mixed',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: true,
  },
  H: {
    code: 'H',
    threeLetterCode: 'HIS',
    name: 'Histidine',
    sizeClass: 'medium',
    chargeClass: 'positive',
    polarityClass: 'polar',
    hydrophobicityClass: 'mixed',
    aromatic: true,
    sulfurContaining: false,
    specialBackbone: false,
  },
  I: {
    code: 'I',
    threeLetterCode: 'ILE',
    name: 'Isoleucine',
    sizeClass: 'medium',
    chargeClass: 'neutral',
    polarityClass: 'nonpolar',
    hydrophobicityClass: 'hydrophobic',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: false,
  },
  K: {
    code: 'K',
    threeLetterCode: 'LYS',
    name: 'Lysine',
    sizeClass: 'large',
    chargeClass: 'positive',
    polarityClass: 'polar',
    hydrophobicityClass: 'hydrophilic',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: false,
  },
  L: {
    code: 'L',
    threeLetterCode: 'LEU',
    name: 'Leucine',
    sizeClass: 'medium',
    chargeClass: 'neutral',
    polarityClass: 'nonpolar',
    hydrophobicityClass: 'hydrophobic',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: false,
  },
  M: {
    code: 'M',
    threeLetterCode: 'MET',
    name: 'Methionine',
    sizeClass: 'large',
    chargeClass: 'neutral',
    polarityClass: 'nonpolar',
    hydrophobicityClass: 'hydrophobic',
    aromatic: false,
    sulfurContaining: true,
    specialBackbone: false,
  },
  N: {
    code: 'N',
    threeLetterCode: 'ASN',
    name: 'Asparagine',
    sizeClass: 'medium',
    chargeClass: 'neutral',
    polarityClass: 'polar',
    hydrophobicityClass: 'hydrophilic',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: false,
  },
  P: {
    code: 'P',
    threeLetterCode: 'PRO',
    name: 'Proline',
    sizeClass: 'small',
    chargeClass: 'neutral',
    polarityClass: 'nonpolar',
    hydrophobicityClass: 'mixed',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: true,
  },
  Q: {
    code: 'Q',
    threeLetterCode: 'GLN',
    name: 'Glutamine',
    sizeClass: 'large',
    chargeClass: 'neutral',
    polarityClass: 'polar',
    hydrophobicityClass: 'hydrophilic',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: false,
  },
  R: {
    code: 'R',
    threeLetterCode: 'ARG',
    name: 'Arginine',
    sizeClass: 'large',
    chargeClass: 'positive',
    polarityClass: 'polar',
    hydrophobicityClass: 'hydrophilic',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: false,
  },
  S: {
    code: 'S',
    threeLetterCode: 'SER',
    name: 'Serine',
    sizeClass: 'small',
    chargeClass: 'neutral',
    polarityClass: 'polar',
    hydrophobicityClass: 'hydrophilic',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: false,
  },
  T: {
    code: 'T',
    threeLetterCode: 'THR',
    name: 'Threonine',
    sizeClass: 'medium',
    chargeClass: 'neutral',
    polarityClass: 'polar',
    hydrophobicityClass: 'mixed',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: false,
  },
  V: {
    code: 'V',
    threeLetterCode: 'VAL',
    name: 'Valine',
    sizeClass: 'small',
    chargeClass: 'neutral',
    polarityClass: 'nonpolar',
    hydrophobicityClass: 'hydrophobic',
    aromatic: false,
    sulfurContaining: false,
    specialBackbone: false,
  },
  W: {
    code: 'W',
    threeLetterCode: 'TRP',
    name: 'Tryptophan',
    sizeClass: 'large',
    chargeClass: 'neutral',
    polarityClass: 'nonpolar',
    hydrophobicityClass: 'hydrophobic',
    aromatic: true,
    sulfurContaining: false,
    specialBackbone: false,
  },
  Y: {
    code: 'Y',
    threeLetterCode: 'TYR',
    name: 'Tyrosine',
    sizeClass: 'large',
    chargeClass: 'neutral',
    polarityClass: 'polar',
    hydrophobicityClass: 'mixed',
    aromatic: true,
    sulfurContaining: false,
    specialBackbone: false,
  },
};

const STRUCTURAL_THREE_TO_ONE_AMINO_ACID: Record<string, string> = Object.fromEntries(
  Object.values(STRUCTURAL_AMINO_ACID_DESCRIPTORS).map((descriptor) => [descriptor.threeLetterCode, descriptor.code]),
);

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

function asBoolean(value: unknown, fallback = false) {
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

function asNumberArray(value: unknown): number[] {
  return Array.isArray(value)
    ? value.filter((item): item is number => typeof item === 'number' && Number.isFinite(item))
    : [];
}

function asNumberRecord(value: unknown): Record<string, number> | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const entries = Object.entries(record).filter((entry): entry is [string, number] => {
    const [, item] = entry;
    return typeof item === 'number' && Number.isFinite(item);
  });
  return entries.length > 0 ? Object.fromEntries(entries) : undefined;
}

function toUpperAscii(value: string) {
  return value.trim().toUpperCase();
}

export function normalizeStructuralResidueCode(value?: string | null): string | undefined {
  const normalized = toUpperAscii(value || '');
  if (!normalized) return undefined;
  if (normalized.length === 1 && STRUCTURAL_AMINO_ACID_DESCRIPTORS[normalized]) return normalized;
  if (normalized.length === 3 && STRUCTURAL_THREE_TO_ONE_AMINO_ACID[normalized]) {
    return STRUCTURAL_THREE_TO_ONE_AMINO_ACID[normalized];
  }
  return undefined;
}

export function getStructuralAminoAcidDescriptor(value?: string | null): StructuralAminoAcidDescriptor | null {
  const code = normalizeStructuralResidueCode(value);
  return code ? STRUCTURAL_AMINO_ACID_DESCRIPTORS[code] : null;
}

export function parseStructuralMutationNotation(value?: string | null): StructuralParsedMutationNotation {
  const notation = (value || '').trim();
  const normalized = notation.replace(/^p\./i, '').replace(/\s+/g, '');
  const singleLetterMatch = normalized.match(/^([A-Za-z])(\d+)([A-Za-z])$/);
  const threeLetterMatch = normalized.match(/^([A-Za-z]{3})(\d+)([A-Za-z]{3})$/);

  if (!notation) {
    return {
      notation: '',
      valid: false,
      errors: ['Mutation notation is empty.'],
    };
  }

  if (singleLetterMatch) {
    const wildType = normalizeStructuralResidueCode(singleLetterMatch[1]);
    const mutant = normalizeStructuralResidueCode(singleLetterMatch[3]);
    return {
      notation,
      wildType,
      mutant,
      residueNumber: Number.parseInt(singleLetterMatch[2], 10),
      valid: Boolean(wildType && mutant),
      errors: wildType && mutant ? [] : ['Mutation notation uses an unsupported amino-acid code.'],
    };
  }

  if (threeLetterMatch) {
    const wildType = normalizeStructuralResidueCode(threeLetterMatch[1]);
    const mutant = normalizeStructuralResidueCode(threeLetterMatch[3]);
    return {
      notation,
      wildType,
      mutant,
      residueNumber: Number.parseInt(threeLetterMatch[2], 10),
      valid: Boolean(wildType && mutant),
      errors: wildType && mutant ? [] : ['Mutation notation uses an unsupported amino-acid code.'],
    };
  }

  return {
    notation,
    valid: false,
    errors: ['Mutation notation must look like G12C, S65T, or Gly12Cys.'],
  };
}

export function normalizeStructuralMutationSpec(value: unknown): StructuralMutationSpec | undefined {
  const record = asRecord(value);
  if (!record) return undefined;

  const parsed = parseStructuralMutationNotation(asString(record.notation));
  const wildType = normalizeStructuralResidueCode(asString(record.wildType)) || parsed.wildType;
  const mutant = normalizeStructuralResidueCode(asString(record.mutant)) || parsed.mutant;
  const residueNumber = asNumber(record.residueNumber, 0) || parsed.residueNumber || 0;
  const chainId = asString(record.chainId) || undefined;
  const insertionCode = asString(record.insertionCode).trim().toUpperCase() || undefined;
  const notation = asString(record.notation) || undefined;

  if (!wildType && !mutant && !residueNumber && !chainId && !insertionCode && !notation) return undefined;
  return {
    wildType,
    mutant,
    chainId,
    residueNumber: residueNumber > 0 ? residueNumber : undefined,
    insertionCode,
    notation,
  };
}

export function buildStructuralAminoAcidPropertyChange(input: {
  wildType?: string | null;
  mutant?: string | null;
}): StructuralAminoAcidPropertyChange {
  const fromDescriptor = getStructuralAminoAcidDescriptor(input.wildType);
  const toDescriptor = getStructuralAminoAcidDescriptor(input.mutant);
  const propertyChanges: string[] = [];
  const reviewFlags: string[] = [];

  if (fromDescriptor && toDescriptor) {
    if (fromDescriptor.sizeClass !== toDescriptor.sizeClass) {
      propertyChanges.push(`${fromDescriptor.sizeClass}_to_${toDescriptor.sizeClass}`);
    }
    if (fromDescriptor.chargeClass !== toDescriptor.chargeClass) {
      propertyChanges.push(`${fromDescriptor.chargeClass}_to_${toDescriptor.chargeClass}_charge`);
    }
    if (fromDescriptor.polarityClass !== toDescriptor.polarityClass) {
      propertyChanges.push(`${fromDescriptor.polarityClass}_to_${toDescriptor.polarityClass}`);
    }
    if (fromDescriptor.hydrophobicityClass !== toDescriptor.hydrophobicityClass) {
      propertyChanges.push(`${fromDescriptor.hydrophobicityClass}_to_${toDescriptor.hydrophobicityClass}`);
    }
    if (!fromDescriptor.aromatic && toDescriptor.aromatic) {
      propertyChanges.push('aromatic_gain');
    } else if (fromDescriptor.aromatic && !toDescriptor.aromatic) {
      propertyChanges.push('aromatic_loss');
    }
    if (!fromDescriptor.sulfurContaining && toDescriptor.sulfurContaining) {
      propertyChanges.push('sulfur_gain');
    } else if (fromDescriptor.sulfurContaining && !toDescriptor.sulfurContaining) {
      propertyChanges.push('sulfur_loss');
    }
    if (propertyChanges.length === 0 && fromDescriptor.code === toDescriptor.code) {
      propertyChanges.push('conservative_or_no_change');
    }
    if (toDescriptor.code === 'C') {
      reviewFlags.push('possible_disulfide_or_reactivity_review');
    }
    if (fromDescriptor.code === 'G' || toDescriptor.code === 'G') {
      reviewFlags.push('glycine_backbone_flexibility_review');
    }
    if (fromDescriptor.code === 'P' || toDescriptor.code === 'P') {
      reviewFlags.push('proline_backbone_constraint_review');
    }
  }

  return {
    from: fromDescriptor?.name || (input.wildType ? toUpperAscii(input.wildType) : 'Unknown'),
    to: toDescriptor?.name || (input.mutant ? toUpperAscii(input.mutant) : 'Unknown'),
    fromCode: fromDescriptor?.code,
    toCode: toDescriptor?.code,
    propertyChanges,
    reviewFlags,
    metadata:
      fromDescriptor && toDescriptor
        ? {
            fromSizeClass: fromDescriptor.sizeClass,
            toSizeClass: toDescriptor.sizeClass,
            fromChargeClass: fromDescriptor.chargeClass,
            toChargeClass: toDescriptor.chargeClass,
          }
        : undefined,
  };
}

function normalizeCost(value: unknown): StructuralComputeCost {
  const record = asRecord(value);
  return {
    cpuSeconds: asNumber(record?.cpuSeconds, 0),
    gpuSeconds: asNumber(record?.gpuSeconds, 0),
    estimatedUsd: asNumber(record?.estimatedUsd, 0),
    billingMode: asEnumValue(record?.billingMode, ['none', 'demo', 'local', 'remote'] as const, 'none'),
    notes: asStringArray(record?.notes),
  };
}

function normalizeProvenance(value: unknown, fallback: Partial<StructuralProvenance>): StructuralProvenance {
  const record = asRecord(value);
  const now = new Date().toISOString();
  return {
    source: asEnumValue(
      record?.source,
      [...STRUCTURAL_ARTIFACT_SOURCES, 'provider'] as const,
      fallback.source ?? 'provider',
    ),
    provider: asString(record?.provider, fallback.provider ?? ''),
    pipeline: asString(record?.pipeline, fallback.pipeline ?? ''),
    isMock: asBoolean(record?.isMock, fallback.isMock ?? false),
    isScientificallyValidated: asBoolean(
      record?.isScientificallyValidated,
      fallback.isScientificallyValidated ?? false,
    ),
    limitationNotes: asStringArray(record?.limitationNotes).length
      ? asStringArray(record?.limitationNotes)
      : fallback.limitationNotes ?? [],
    createdAt: asString(record?.createdAt, fallback.createdAt ?? now),
    metadata: asRecord(record?.metadata) ?? fallback.metadata,
  };
}

export function normalizeStructuralVisualPatch(value: unknown): StructuralVisualPatch | null {
  const record = asRecord(value);
  if (!record) return null;
  const action = asEnumValue(record.action, STRUCTURAL_VISUAL_PATCH_ACTIONS, 'reset_view');
  const chainId = asString(record.chainId);
  const residueNumber = asNumber(record.residueNumber, 0);
  const residueStart = asNumber(record.residueStart, 0);
  const residueEnd = asNumber(record.residueEnd, 0);
  const patch: StructuralVisualPatch = {
    action,
    chainId: chainId || undefined,
    residueNumber: residueNumber > 0 ? residueNumber : undefined,
    residueStart: residueStart > 0 ? residueStart : undefined,
    residueEnd: residueEnd > 0 ? residueEnd : undefined,
    color: asString(record.color) || undefined,
    label: asString(record.label) || undefined,
    structureIds: asStringArray(record.structureIds),
    representation: asEnumValue(
      record.representation,
      ['cartoon', 'surface', 'stick', 'line'] as const,
      'cartoon',
    ),
    metadata: asRecord(record.metadata) ?? undefined,
  };

  if (!patch.structureIds?.length) delete patch.structureIds;
  if (!patch.metadata) delete patch.metadata;
  return patch;
}

export function validateStructuralVisualPatch(value: unknown): { ok: boolean; patch?: StructuralVisualPatch; errors: string[] } {
  const patch = normalizeStructuralVisualPatch(value);
  if (!patch) return { ok: false, errors: ['Patch must be an object.'] };

  const errors: string[] = [];
  if (patch.action === 'focus_residue') {
    if (!patch.chainId) errors.push('focus_residue requires chainId.');
    if (!patch.residueNumber) errors.push('focus_residue requires residueNumber.');
  }
  if (patch.action === 'highlight_range') {
    if (!patch.chainId) errors.push('highlight_range requires chainId.');
    if (!patch.residueStart || !patch.residueEnd) errors.push('highlight_range requires residueStart and residueEnd.');
    if (patch.residueStart && patch.residueEnd && patch.residueEnd < patch.residueStart) {
      errors.push('highlight_range residueEnd must be greater than or equal to residueStart.');
    }
  }
  if (patch.action === 'highlight_neighborhood') {
    const residueNumbers = asNumberArray(patch.metadata?.residueNumbers);
    if (!patch.chainId) errors.push('highlight_neighborhood requires chainId.');
    if (residueNumbers.length === 0) {
      errors.push('highlight_neighborhood requires metadata.residueNumbers.');
    }
  }
  if (patch.action === 'color_chain' && !patch.chainId) {
    errors.push('color_chain requires chainId.');
  }
  if (patch.action === 'compare_models' && !patch.structureIds?.length && !Array.isArray(patch.metadata?.chainIds)) {
    errors.push('compare_models requires structureIds or metadata.chainIds.');
  }

  return {
    ok: errors.length === 0,
    patch: errors.length === 0 ? patch : undefined,
    errors,
  };
}

export function validateStructuralVisualPatches(value: unknown): StructuralVisualPatchValidationResult {
  const items = Array.isArray(value) ? value : [];
  const patches: StructuralVisualPatch[] = [];
  const errors: string[] = [];

  items.forEach((item, index) => {
    const result = validateStructuralVisualPatch(item);
    if (result.patch) patches.push(result.patch);
    if (!result.ok) {
      errors.push(...result.errors.map((message) => `patch[${index}]: ${message}`));
    }
  });

  return {
    ok: errors.length === 0,
    patches,
    errors,
  };
}

export function normalizeStructuralVisualPatches(value: unknown): StructuralVisualPatch[] {
  return validateStructuralVisualPatches(value).patches;
}

function normalizeStructuralTargetResidue(value: unknown): StructuralTargetResidue | null {
  const record = asRecord(value);
  if (!record) return null;
  const chainId = asString(record.chainId);
  const residueNumber = asNumber(record.residueNumber, 0);
  if (!chainId || residueNumber <= 0) return null;
  return {
    chainId,
    residueNumber,
    insertionCode: asString(record.insertionCode) || undefined,
    label: asString(record.label) || undefined,
  };
}

function normalizeSanityCheckItem(value: unknown): StructuralSanityCheckItem {
  const record = asRecord(value) ?? {};
  return {
    checkId: asString(record.checkId),
    label: asString(record.label),
    severity: asEnumValue(record.severity, STRUCTURAL_SANITY_CHECK_SEVERITIES, 'warning'),
    message: asString(record.message),
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

export function normalizeStructuralBinderDesignInput(value: unknown): StructuralBinderDesignInput {
  const record = asRecord(value) ?? {};
  const targetResidues = Array.isArray(record.bindingSiteResidues)
    ? record.bindingSiteResidues
    : Array.isArray(record.targetResidues)
      ? record.targetResidues
      : [];

  return {
    targetName: asString(record.targetName) || undefined,
    targetSequence: asString(record.targetSequence || record.sequence) || undefined,
    targetStructureText: asString(record.targetStructureText || record.structureText) || undefined,
    targetStructureFormat: asEnumValue(record.targetStructureFormat || record.structureFormat, ['pdb', 'cif', 'unknown'] as const, 'unknown'),
    bindingSiteResidues: targetResidues
      .map(normalizeStructuralTargetResidue)
      .filter((item): item is StructuralTargetResidue => Boolean(item)),
    binderLengthMin: asNumber(record.binderLengthMin, 0) || undefined,
    binderLengthMax: asNumber(record.binderLengthMax, 0) || undefined,
    designCount: asNumber(record.designCount, 0) || undefined,
    scaffold: asEnumValue(
      record.scaffold,
      ['nanobody', 'miniprotein', 'peptide', 'antibody_fragment', 'unknown'] as const,
      'unknown',
    ),
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

export function normalizeStructuralDesignCandidate(value: unknown, fallbackIndex = 0): StructuralDesignCandidate {
  const record = asRecord(value) ?? {};
  const metrics = asRecord(record.metrics) ?? {};
  const candidateId = asString(record.candidateId) || asString(record.id) || `candidate-${fallbackIndex + 1}`;
  const score =
    asNumber(record.score, Number.NaN) ||
    asNumber(record.rankScore, Number.NaN) ||
    asNumber(record.demoScore, Number.NaN) ||
    undefined;

  return {
    candidateId,
    label: asString(record.label) || candidateId,
    aminoAcidSequence: asString(record.aminoAcidSequence || record.sequence) || undefined,
    rank: asNumber(record.rank, 0) || undefined,
    score,
    demoScore: asNumber(record.demoScore, Number.NaN) || undefined,
    riskLevel: asEnumValue(record.riskLevel, STRUCTURAL_DESIGN_RISK_LEVELS, 'medium'),
    sanityChecks: asObjectArray(record.sanityChecks, normalizeSanityCheckItem),
    metrics,
    sourceJobId: asString(record.sourceJobId) || undefined,
    sourceArtifactId: asString(record.sourceArtifactId) || undefined,
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

export function normalizeStructuralCandidateRanking(value: unknown): StructuralCandidateRanking {
  const record = asRecord(value) ?? {};
  const now = new Date().toISOString();
  const candidates = asObjectArray(record.candidates, normalizeStructuralDesignCandidate).sort(
    (left, right) => (left.rank ?? Number.MAX_SAFE_INTEGER) - (right.rank ?? Number.MAX_SAFE_INTEGER),
  );
  const blockedCount = candidates.filter((candidate) => candidate.riskLevel === 'blocked').length;
  const warningCount = candidates.filter((candidate) => candidate.riskLevel === 'medium' || candidate.riskLevel === 'high').length;
  const passCount = candidates.length - blockedCount - warningCount;

  return {
    schemaVersion: 'structural-candidate-ranking/v1',
    generatedAt: asString(record.generatedAt, now),
    rankingMethod: asString(record.rankingMethod, 'score_with_sanity_penalties'),
    candidates,
    summary: {
      candidateCount: candidates.length,
      passCount,
      warningCount,
      blockedCount,
      topCandidateId: asString(asRecord(record.summary)?.topCandidateId) || candidates[0]?.candidateId,
    },
    warnings: asStringArray(record.warnings),
  };
}

function normalizeMutationContextResidue(value: unknown): StructuralMutationContextResidue {
  const record = asRecord(value) ?? {};
  return {
    chainId: asString(record.chainId),
    residueNumber: asNumber(record.residueNumber, 0),
    residueName: asString(record.residueName),
    minDistanceAngstrom: asNumber(record.minDistanceAngstrom, 0),
    label: asString(record.label) || undefined,
    sameChain: typeof record.sameChain === 'boolean' ? record.sameChain : undefined,
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

function normalizeMutationContextLigand(value: unknown): StructuralMutationContextLigand {
  const record = asRecord(value) ?? {};
  const residueNumberText = asString(record.residueNumber);
  return {
    chainId: asString(record.chainId),
    residueNumber:
      asNumber(record.residueNumber, Number.NaN) || !residueNumberText
        ? asNumber(record.residueNumber, 0)
        : residueNumberText,
    residueName: asString(record.residueName),
    minDistanceAngstrom: asNumber(record.minDistanceAngstrom, 0),
    isIon: asBoolean(record.isIon, false),
    ligandClass: asEnumValue(record.ligandClass, STRUCTURAL_LIGAND_CLASSES, 'unknown_heterogen'),
    label: asString(record.label) || undefined,
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

function normalizeMutationContextChain(value: unknown): StructuralMutationContextChain {
  const record = asRecord(value) ?? {};
  return {
    chainId: asString(record.chainId),
    minDistanceAngstrom: asNumber(record.minDistanceAngstrom, 0),
    contactResidueCount: asNumber(record.contactResidueCount, 0),
    label: asString(record.label) || undefined,
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

function normalizeResidueNumberingContext(value: unknown): StructuralResidueNumberingContext | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  const basis = asEnumValue(record.basis, STRUCTURAL_RESIDUE_NUMBERING_BASES, 'unmapped');
  return {
    requestedResidueNumber: asNumber(record.requestedResidueNumber, 0) || undefined,
    requestedInsertionCode: asString(record.requestedInsertionCode) || undefined,
    matchedResidueNumber: asNumber(record.matchedResidueNumber, 0) || undefined,
    matchedInsertionCode: asString(record.matchedInsertionCode) || undefined,
    matchedLabelSeqId: asNumber(record.matchedLabelSeqId, 0) || undefined,
    chainId: asString(record.chainId) || undefined,
    referenceDatabaseName: asString(record.referenceDatabaseName) || undefined,
    referenceDatabaseAccession: asString(record.referenceDatabaseAccession) || undefined,
    referenceResidueNumber: asNumber(record.referenceResidueNumber, 0) || undefined,
    referenceMappingSource: asString(record.referenceMappingSource) || undefined,
    entityId: asString(record.entityId) || undefined,
    basis,
    mappingApplied: asBoolean(record.mappingApplied, basis === 'label_seq_id'),
    warnings: asStringArray(record.warnings),
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

function normalizeMutationResidueExposure(value: unknown): StructuralMutationResidueExposure {
  const record = asRecord(value) ?? {};
  return {
    burialClass: asEnumValue(record.burialClass, STRUCTURAL_RESIDUE_BURIAL_CLASSES, 'unknown'),
    neighborResidueCount8A: asNumber(record.neighborResidueCount8A, 0),
    heavyAtomNeighborCount8A: asNumber(record.heavyAtomNeighborCount8A, 0),
    sameChainContactCount5A: asNumber(record.sameChainContactCount5A, 0),
    otherChainContactCount5A: asNumber(record.otherChainContactCount5A, 0),
    method: 'coordinate_neighbor_count',
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

function normalizeMutationInteraction(value: unknown): StructuralMutationInteraction {
  const record = asRecord(value) ?? {};
  const atomPair = asRecord(record.atomPair);
  return {
    kind: asEnumValue(record.kind, STRUCTURAL_INTERACTION_KINDS, 'hydrogen_bond_candidate'),
    partnerChainId: asString(record.partnerChainId),
    partnerResidueNumber: asNumber(record.partnerResidueNumber, Number.NaN) || asString(record.partnerResidueNumber),
    partnerResidueName: asString(record.partnerResidueName),
    minDistanceAngstrom: asNumber(record.minDistanceAngstrom, 0),
    atomPair: atomPair
      ? {
          mutationAtom: asString(atomPair.mutationAtom),
          partnerAtom: asString(atomPair.partnerAtom),
        }
      : undefined,
    confidence: 'geometry_screen',
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

function normalizeMutationLigandSummary(value: unknown): StructuralMutationLigandSummary {
  const record = asRecord(value) ?? {};
  const closestFunctionalCandidate = asRecord(record.closestFunctionalCandidate)
    ? normalizeMutationContextLigand(record.closestFunctionalCandidate)
    : undefined;
  return {
    functionalCandidateCount: asNumber(record.functionalCandidateCount, 0),
    commonAdditiveCount: asNumber(record.commonAdditiveCount, 0),
    ionCount: asNumber(record.ionCount, 0),
    unknownHeterogenCount: asNumber(record.unknownHeterogenCount, 0),
    closestFunctionalCandidate,
    ontologyCategoryCounts: asNumberRecord(record.ontologyCategoryCounts),
  };
}

function normalizeMutationAssemblyContext(value: unknown): StructuralMutationAssemblyContext {
  const record = asRecord(value) ?? {};
  return {
    applied: asBoolean(record.applied, false),
    assemblyId: asString(record.assemblyId) || undefined,
    source: asString(record.source) || undefined,
    oligomericDetails: asString(record.oligomericDetails) || undefined,
    polymerComposition: asString(record.polymerComposition) || undefined,
    warnings: asStringArray(record.warnings),
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

function normalizeMutationSequenceAnnotation(value: unknown): StructuralMutationSequenceAnnotation {
  const record = asRecord(value) ?? {};
  const sequenceDistanceResidues = asNumber(record.sequenceDistanceResidues, Number.NaN);
  return {
    kind: asEnumValue(record.kind, STRUCTURAL_SEQUENCE_ANNOTATION_KINDS, 'other'),
    label: asString(record.label),
    source: asString(record.source),
    entityId: asString(record.entityId) || undefined,
    chainIds: asStringArray(record.chainIds),
    begin: asNumber(record.begin, 0) || undefined,
    end: asNumber(record.end, 0) || undefined,
    referenceDatabaseName: asString(record.referenceDatabaseName) || undefined,
    referenceDatabaseAccession: asString(record.referenceDatabaseAccession) || undefined,
    referenceResidueStart: asNumber(record.referenceResidueStart, 0) || undefined,
    referenceResidueEnd: asNumber(record.referenceResidueEnd, 0) || undefined,
    sequenceDistanceResidues: Number.isFinite(sequenceDistanceResidues) ? sequenceDistanceResidues : undefined,
    confidence: 'external_annotation',
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

function normalizeMutationMechanismFeatures(value: unknown): StructuralMutationMechanismFeatures | undefined {
  const record = asRecord(value);
  if (!record) return undefined;
  return {
    residueExposure: normalizeMutationResidueExposure(record.residueExposure),
    interactions: asObjectArray(record.interactions, normalizeMutationInteraction).filter(
      (item) => Boolean(item.kind && item.partnerChainId && item.partnerResidueName),
    ),
    ligandSummary: normalizeMutationLigandSummary(record.ligandSummary),
    assembly: normalizeMutationAssemblyContext(record.assembly),
    annotations: asObjectArray(record.annotations, normalizeMutationSequenceAnnotation).filter(
      (item) => Boolean(item.kind && item.label && item.source),
    ),
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

export function normalizeStructuralMutationContext(value: unknown): StructuralMutationContext {
  const record = asRecord(value) ?? {};
  const mutation = asRecord(record.mutation) ?? {};
  const neighborhoods = asRecord(record.neighborhoods) ?? {};
  const evidence = asRecord(record.evidence) ?? {};
  const aminoAcidChange = asRecord(record.aminoAcidChange) ?? {};

  return {
    schemaVersion: 'structural-mutation-context/v1',
    mutation: {
      notation: asString(mutation.notation),
      wildType: normalizeStructuralResidueCode(asString(mutation.wildType)) || undefined,
      mutant: normalizeStructuralResidueCode(asString(mutation.mutant)) || undefined,
      chainId: asString(mutation.chainId) || undefined,
      residueNumber: asNumber(mutation.residueNumber, 0) || undefined,
      insertionCode: asString(mutation.insertionCode) || undefined,
      structureResidueName: asString(mutation.structureResidueName) || undefined,
      residueFound: asBoolean(mutation.residueFound, false),
      residueMatchesMutation:
        typeof mutation.residueMatchesMutation === 'boolean' ? mutation.residueMatchesMutation : undefined,
      numbering: normalizeResidueNumberingContext(mutation.numbering),
      warnings: asStringArray(mutation.warnings),
    },
    neighborhoods: {
      contactRadiusAngstrom:
        asNumber(neighborhoods.contactRadiusAngstrom, 0) || STRUCTURAL_MUTATION_CONTACT_RADIUS_ANGSTROM,
      contextRadiusAngstrom:
        asNumber(neighborhoods.contextRadiusAngstrom, 0) || STRUCTURAL_MUTATION_CONTEXT_RADIUS_ANGSTROM,
      contactResidues: asObjectArray(neighborhoods.contactResidues, normalizeMutationContextResidue).filter(
        (item) => Boolean(item.chainId && item.residueNumber > 0),
      ),
      contextResidues: asObjectArray(neighborhoods.contextResidues, normalizeMutationContextResidue).filter(
        (item) => Boolean(item.chainId && item.residueNumber > 0),
      ),
      nearbyLigands: asObjectArray(neighborhoods.nearbyLigands, normalizeMutationContextLigand).filter(
        (item) => Boolean(item.chainId && item.residueName),
      ),
      nearbyChains: asObjectArray(neighborhoods.nearbyChains, normalizeMutationContextChain).filter(
        (item) => Boolean(item.chainId),
      ),
    },
    aminoAcidChange: {
      from: asString(aminoAcidChange.from),
      to: asString(aminoAcidChange.to),
      fromCode: normalizeStructuralResidueCode(asString(aminoAcidChange.fromCode)) || undefined,
      toCode: normalizeStructuralResidueCode(asString(aminoAcidChange.toCode)) || undefined,
      propertyChanges: asStringArray(aminoAcidChange.propertyChanges),
      reviewFlags: asStringArray(aminoAcidChange.reviewFlags),
      metadata: asRecord(aminoAcidChange.metadata) ?? undefined,
    },
    mechanism: normalizeMutationMechanismFeatures(record.mechanism),
    evidence: {
      level: asEnumValue(
        evidence.level,
        STRUCTURAL_MUTATION_EVIDENCE_LEVELS,
        'structure_context_only',
      ),
      structureSource: asEnumValue(
        evidence.structureSource,
        [...STRUCTURAL_ARTIFACT_SOURCES, 'provider'] as const,
        'provider',
      ),
      pdbId: asString(evidence.pdbId) || undefined,
      chainId: asString(evidence.chainId) || undefined,
      provider: asString(evidence.provider) || undefined,
      pipeline: asString(evidence.pipeline) || undefined,
      experimentalMethod: asString(evidence.experimentalMethod) || undefined,
      resolutionAngstrom: asNumber(evidence.resolutionAngstrom, 0) || undefined,
      citation: asString(evidence.citation) || undefined,
      metadata: asRecord(evidence.metadata) ?? undefined,
    },
    limitations: asStringArray(record.limitations),
    metadata: asRecord(record.metadata) ?? undefined,
  };
}

export function buildStructuralMutationInterpretation(
  context: StructuralMutationContext,
): StructuralMutationInterpretation {
  const keyObservations: string[] = [];
  const suggestedValidation: string[] = [];
  const limitations = Array.from(new Set(context.limitations));
  const mutationLabel = context.mutation.notation || 'this mutation';
  const residueLabel = [
    context.mutation.structureResidueName || '',
    context.mutation.chainId || '',
    context.mutation.residueNumber || '',
  ]
    .filter(Boolean)
    .join(' ');

  if (!context.mutation.residueFound) {
    return {
      summary: `${mutationLabel} could not be located in the current structure, so only source-level interpretation is possible.`,
      keyObservations: [
        `The requested residue was not found in the archived coordinates${context.mutation.chainId ? ` for chain ${context.mutation.chainId}` : ''}.`,
      ],
      suggestedValidation: [
        'Confirm chain selection, residue numbering, and construct boundaries before drawing biological conclusions.',
        'Check whether the deposited structure omits flexible or truncated regions around the requested residue.',
      ],
      limitations,
    };
  }

  if (residueLabel) {
    keyObservations.push(`${mutationLabel} maps to ${residueLabel} in the current structure context.`);
  }

  if (context.mutation.numbering) {
    if (context.mutation.numbering.basis === 'label_seq_id') {
      keyObservations.push(
        `Residue matching used mmCIF label_seq_id ${context.mutation.numbering.matchedLabelSeqId}; author numbering differs or was unavailable.`,
      );
    }
    if (context.mutation.numbering.referenceDatabaseAccession && context.mutation.numbering.referenceResidueNumber) {
      keyObservations.push(
        `Reference mapping: ${context.mutation.numbering.referenceDatabaseName || 'reference'} ${context.mutation.numbering.referenceDatabaseAccession} residue ${context.mutation.numbering.referenceResidueNumber}.`,
      );
    }
    for (const warning of context.mutation.numbering.warnings) {
      if (warning) limitations.push(warning);
    }
  }

  if (context.mechanism?.residueExposure) {
    keyObservations.push(
      `Residue exposure heuristic: ${context.mechanism.residueExposure.burialClass} (${context.mechanism.residueExposure.neighborResidueCount8A} residue neighbors within 8A).`,
    );
  }

  if (context.mutation.residueMatchesMutation === false) {
    keyObservations.push('The structure residue does not match the mutation wild type, so numbering or construct mapping needs review.');
  }

  if (context.mechanism?.assembly) {
    if (context.mechanism.assembly.applied) {
      keyObservations.push(
        `Biological assembly context applied${context.mechanism.assembly.assemblyId ? `: assembly ${context.mechanism.assembly.assemblyId}` : ''}${context.mechanism.assembly.oligomericDetails ? ` (${context.mechanism.assembly.oligomericDetails})` : ''}.`,
      );
    }
    for (const warning of context.mechanism.assembly.warnings) {
      if (warning) limitations.push(warning);
    }
  } else if (context.evidence.metadata?.biologicalAssemblyApplied === false && context.neighborhoods.nearbyChains.length > 0) {
    limitations.push('Nearby-chain evidence is based on deposited coordinates; biological assembly transforms were not applied.');
  }

  if (context.neighborhoods.contactResidues.length > 0) {
    keyObservations.push(
      `${context.neighborhoods.contactResidues.length} residue(s) fall within the ${context.neighborhoods.contactRadiusAngstrom}A contact neighborhood.`,
    );
  } else {
    keyObservations.push(`No direct ${context.neighborhoods.contactRadiusAngstrom}A residue contacts were recorded.`);
  }

  if (context.neighborhoods.nearbyLigands.length > 0) {
    const firstLigand = context.neighborhoods.nearbyLigands[0];
    keyObservations.push(
      `The mutation sits near ligand ${firstLigand.residueName} at approximately ${firstLigand.minDistanceAngstrom.toFixed(2)}A.`,
    );
    suggestedValidation.push('Review ligand-binding or activity assays before inferring a direct mechanistic effect.');
  }

  if (context.mechanism?.ligandSummary.closestFunctionalCandidate) {
    const ligand = context.mechanism.ligandSummary.closestFunctionalCandidate;
    keyObservations.push(
      `Closest functional ligand candidate: ${ligand.residueName} at approximately ${ligand.minDistanceAngstrom.toFixed(2)}A.`,
    );
  }

  if (context.mechanism?.annotations.length) {
    const annotationKinds = Array.from(new Set(context.mechanism.annotations.map((item) => item.kind)));
    keyObservations.push(
      `External sequence annotations overlap the mutation context: ${annotationKinds.join(', ')}.`,
    );
    suggestedValidation.push('Use binding-site, domain, or PTM annotations as prioritization evidence; verify the annotation source before treating it as mechanism.');
  }

  if (context.neighborhoods.nearbyChains.length > 0) {
    const firstChain = context.neighborhoods.nearbyChains[0];
    keyObservations.push(
      `Another chain (${firstChain.chainId}) is present within the local structural neighborhood.`,
    );
    suggestedValidation.push('Review interface or oligomerization assays if the phenotype may depend on multimeric contacts.');
  }

  if (context.aminoAcidChange.propertyChanges.length > 0) {
    keyObservations.push(
      `Amino-acid change classification: ${context.aminoAcidChange.propertyChanges.join(', ')}.`,
    );
  }

  if (context.aminoAcidChange.reviewFlags.length > 0) {
    keyObservations.push(
      `Manual review flags: ${context.aminoAcidChange.reviewFlags.join(', ')}.`,
    );
  }

  if (context.mechanism?.interactions.length) {
    const interactionKinds = Array.from(new Set(context.mechanism.interactions.map((item) => item.kind)));
    keyObservations.push(`Geometry screen found ${context.mechanism.interactions.length} local interaction candidate(s): ${interactionKinds.join(', ')}.`);
    suggestedValidation.push('Inspect local geometry manually before treating geometry-screen interactions as mechanistic evidence.');
  }

  if (context.evidence.level === 'imported_experimental_structure') {
    suggestedValidation.push('Treat this as experimental-structure context, but keep conclusions limited to the archived coordinates and structure source.');
  } else if (context.evidence.level === 'predicted_structure_context') {
    suggestedValidation.push('Check confidence and model provenance before using predicted-structure context for strong biological claims.');
  } else if (context.evidence.level === 'mock_context') {
    suggestedValidation.push('Do not use mock context as biological evidence; use it only to validate workflow behavior.');
  } else {
    suggestedValidation.push('Use the structure context as a hypothesis generator rather than a standalone mechanistic conclusion.');
  }

  suggestedValidation.push('Create a point-mutation validation workflow in Cloning Workbench if this residue is still experimentally relevant.');

  return {
    summary:
      context.neighborhoods.nearbyLigands.length > 0 || context.neighborhoods.nearbyChains.length > 0
        ? `${mutationLabel} sits in a structurally connected neighborhood that may influence local contacts or binding context.`
        : `${mutationLabel} has interpretable local structure context, but the current evidence remains neighborhood-level rather than mechanistic proof.`,
    keyObservations,
    suggestedValidation: Array.from(new Set(suggestedValidation)),
    limitations,
  };
}

export function normalizeStructuralArtifact(value: unknown): StructuralArtifact {
  const record = asRecord(value) ?? {};
  const artifactId = asString(record.artifactId);
  const jobId = asString(record.jobId);
  const provider = asString(asRecord(record.provenance)?.provider);
  const pipeline = asString(asRecord(record.provenance)?.pipeline);
  const provenance = normalizeProvenance(record.provenance, {
    source: asEnumValue(record.source, STRUCTURAL_ARTIFACT_SOURCES, 'fixture'),
    provider,
    pipeline,
    isMock: false,
    isScientificallyValidated: false,
    limitationNotes: [],
  });

  return {
    artifactId,
    jobId,
    kind: asEnumValue(record.kind, STRUCTURAL_ARTIFACT_KINDS, 'score_json'),
    name: asString(record.name),
    format: asEnumValue(record.format, ['pdb', 'cif', 'json', 'fasta', 'markdown', 'unknown'] as const, 'unknown'),
    source: asEnumValue(record.source, STRUCTURAL_ARTIFACT_SOURCES, 'fixture'),
    objectKey: asString(record.objectKey) || undefined,
    storageUrl: asString(record.storageUrl) || undefined,
    inlineText: asString(record.inlineText) || undefined,
    mimeType: asString(record.mimeType, 'application/octet-stream'),
    sizeBytes: asNumber(record.sizeBytes, 0) || undefined,
    metadata: asRecord(record.metadata) ?? {},
    provenance,
    createdAt: asString(record.createdAt, new Date().toISOString()),
  };
}

export function normalizeStructuralJobStage(value: unknown): StructuralJobStage {
  const record = asRecord(value) ?? {};
  return {
    stageId: asString(record.stageId),
    label: asString(record.label),
    status: asEnumValue(record.status, STRUCTURAL_JOB_STATUSES, 'queued'),
    progress: asNumber(record.progress, 0),
    message: asString(record.message) || undefined,
    startedAt: asString(record.startedAt) || undefined,
    finishedAt: asString(record.finishedAt) || undefined,
  };
}

export function normalizeStructuralJob(value: unknown): StructuralJob {
  const record = asRecord(value) ?? {};
  const now = new Date().toISOString();
  const provider = asString(record.provider, 'unknown-provider');
  const pipeline = asString(record.pipeline, 'unknown-pipeline');
  const provenance = normalizeProvenance(record.provenance, {
    provider,
    pipeline,
    source: 'provider',
    isMock: false,
    isScientificallyValidated: false,
    limitationNotes: [],
    createdAt: now,
  });

  return {
    jobId: asString(record.jobId),
    labId: asString(record.labId),
    projectId: asString(record.projectId),
    taskType: asEnumValue(record.taskType, STRUCTURAL_TASK_TYPES, 'structure_view'),
    status: asEnumValue(record.status, STRUCTURAL_JOB_STATUSES, 'queued'),
    provider,
    executionMode: asEnumValue(record.executionMode, STRUCTURAL_PROVIDER_EXECUTION_MODES, 'mock'),
    pipeline,
    progress: asNumber(record.progress, 0),
    currentStage: asString(record.currentStage),
    input: (asRecord(record.input) ?? {}) as StructuralJobInput,
    constraints: (asRecord(record.constraints) ?? {}) as StructuralJobConstraints,
    stages: asObjectArray(record.stages, normalizeStructuralJobStage),
    artifacts: asObjectArray(record.artifacts, normalizeStructuralArtifact),
    visualPatches: normalizeStructuralVisualPatches(record.visualPatches),
    cost: normalizeCost(record.cost),
    provenance,
    errorMessage: asString(record.errorMessage),
    createdBy: asString(record.createdBy),
    createdAt: asString(record.createdAt, now),
    startedAt: asString(record.startedAt),
    finishedAt: asString(record.finishedAt),
    updatedAt: asString(record.updatedAt, now),
  };
}

export function normalizeStructuralProjectState(value: unknown): StructuralProjectState {
  const record = asRecord(value) ?? {};
  const now = new Date().toISOString();

  return {
    projectId: asString(record.projectId),
    title: asString(record.title),
    status: asEnumValue(record.status, STRUCTURAL_PROJECT_STATUSES, 'draft'),
    targetName: asString(record.targetName),
    linkedCloningProjectIds: asStringArray(record.linkedCloningProjectIds),
    jobRefs: asObjectArray(record.jobRefs, (item): StructuralProjectJobRef => {
      const row = asRecord(item) ?? {};
      return {
        jobId: asString(row.jobId),
        taskType: asEnumValue(row.taskType, STRUCTURAL_TASK_TYPES, 'structure_view'),
        provider: asString(row.provider),
        pipeline: asString(row.pipeline),
        status: asEnumValue(row.status, STRUCTURAL_JOB_STATUSES, 'queued'),
        createdAt: asString(row.createdAt, now),
        finishedAt: asString(row.finishedAt) || undefined,
      };
    }).filter((item) => Boolean(item.jobId)),
    candidates: asObjectArray(record.candidates, (item): StructuralProjectCandidateRef => {
      const row = asRecord(item) ?? {};
      return {
        candidateId: asString(row.candidateId),
        label: asString(row.label),
        sequence: asString(row.sequence) || undefined,
        sourceJobId: asString(row.sourceJobId) || undefined,
        sourceArtifactId: asString(row.sourceArtifactId) || undefined,
        rank: asNumber(row.rank, 0) || undefined,
        score: asNumber(row.score, 0) || undefined,
        metadata: asRecord(row.metadata) ?? undefined,
      };
    }).filter((item) => Boolean(item.candidateId || item.label)),
    visualPatches: normalizeStructuralVisualPatches(record.visualPatches),
    archive: {
      wikiNodeId: asString(asRecord(record.archive)?.wikiNodeId) || undefined,
      archivedAt: asString(asRecord(record.archive)?.archivedAt) || undefined,
      archivedBy: asString(asRecord(record.archive)?.archivedBy) || undefined,
    },
    metadata: asRecord(record.metadata) ?? {},
    updatedAt: asString(record.updatedAt, now),
    updatedBy: asString(record.updatedBy),
  };
}
