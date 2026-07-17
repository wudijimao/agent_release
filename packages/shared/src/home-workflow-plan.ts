import { HOME_WORKFLOW_STAGES } from './context-engineering.js';

export const HOME_WORKFLOW_PLAN_SCHEMA_VERSION = 'home-workflow-plan.v1' as const;

export const HOME_WORKFLOW_TYPES = [
  'literature_to_validation',
  'data_to_evidence',
  'archive_only',
  'status_resume',
  'custom',
] as const;

export const HOME_WORKFLOW_PLAN_STAGE_KINDS = [
  'research',
  'candidate',
  'validation',
  'experiment_task',
  'evidence',
  'archive',
] as const;

export type HomeWorkflowType = (typeof HOME_WORKFLOW_TYPES)[number];
export type HomeWorkflowPlanStageKind = (typeof HOME_WORKFLOW_PLAN_STAGE_KINDS)[number];

export interface HomeWorkflowPlanStage {
  id: string;
  kind: HomeWorkflowPlanStageKind;
  objective: string;
  requiredInputs: string[];
  expectedOutputs: string[];
  requiresConfirmation: boolean;
  allowedTools: string[];
  acceptanceCriteria: string[];
}

export interface HomeWorkflowPlan {
  schemaVersion: typeof HOME_WORKFLOW_PLAN_SCHEMA_VERSION;
  goal: string;
  workflowType: HomeWorkflowType;
  stages: HomeWorkflowPlanStage[];
  risks: string[];
  stopConditions: string[];
  provenance: {
    plannerRunId?: string;
    model?: string;
    fallbackReason?: string;
    sourceRefs: string[];
    generatedAt: string;
  };
}

export interface HomeWorkflowPlanValidationResult {
  ok: boolean;
  warnings: string[];
  errors: string[];
}

const STAGE_KIND_SET = new Set<string>(HOME_WORKFLOW_PLAN_STAGE_KINDS);
const WORKFLOW_TYPE_SET = new Set<string>(HOME_WORKFLOW_TYPES);
const MAX_TEXT_LENGTH = 800;
const MAX_LIST_ITEMS = 20;

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function trimText(value: unknown, fallback = '') {
  const text = typeof value === 'string' ? value.trim() : fallback;
  return text.slice(0, MAX_TEXT_LENGTH);
}

function asStringArray(value: unknown, limit = MAX_LIST_ITEMS) {
  return Array.isArray(value)
    ? value
        .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
        .map((item) => item.trim().slice(0, MAX_TEXT_LENGTH))
        .slice(0, limit)
    : [];
}

function normalizeStage(value: unknown, index: number): HomeWorkflowPlanStage | null {
  const record = asRecord(value);
  if (!record) return null;
  const rawKind = trimText(record.kind);
  const kind = STAGE_KIND_SET.has(rawKind) ? (rawKind as HomeWorkflowPlanStageKind) : undefined;
  const objective = trimText(record.objective);
  if (!kind || !objective) return null;
  const id = trimText(record.id) || `${kind}-${index + 1}`;
  return {
    id,
    kind,
    objective,
    requiredInputs: asStringArray(record.requiredInputs),
    expectedOutputs: asStringArray(record.expectedOutputs),
    requiresConfirmation: typeof record.requiresConfirmation === 'boolean' ? record.requiresConfirmation : false,
    allowedTools: asStringArray(record.allowedTools),
    acceptanceCriteria: asStringArray(record.acceptanceCriteria),
  };
}

export function normalizeHomeWorkflowPlan(value: unknown): HomeWorkflowPlan | null {
  const record = asRecord(value);
  if (!record) return null;
  const rawWorkflowType = trimText(record.workflowType);
  const workflowType = WORKFLOW_TYPE_SET.has(rawWorkflowType)
    ? (rawWorkflowType as HomeWorkflowType)
    : 'custom';
  const goal = trimText(record.goal);
  const stages = Array.isArray(record.stages)
    ? record.stages.map(normalizeStage).filter((stage): stage is HomeWorkflowPlanStage => Boolean(stage))
    : [];
  if (!goal || stages.length === 0) return null;
  const provenanceRecord = asRecord(record.provenance) || {};
  const generatedAt = trimText(provenanceRecord.generatedAt) || new Date(0).toISOString();
  const plan: HomeWorkflowPlan = {
    schemaVersion: HOME_WORKFLOW_PLAN_SCHEMA_VERSION,
    goal,
    workflowType,
    stages,
    risks: asStringArray(record.risks),
    stopConditions: asStringArray(record.stopConditions),
    provenance: {
      plannerRunId: trimText(provenanceRecord.plannerRunId) || undefined,
      model: trimText(provenanceRecord.model) || undefined,
      fallbackReason: trimText(provenanceRecord.fallbackReason) || undefined,
      sourceRefs: asStringArray(provenanceRecord.sourceRefs, 50),
      generatedAt,
    },
  };
  return validateHomeWorkflowPlan(plan).errors.length === 0 ? plan : null;
}

export function validateHomeWorkflowPlan(plan: HomeWorkflowPlan): HomeWorkflowPlanValidationResult {
  const warnings: string[] = [];
  const errors: string[] = [];
  if (plan.schemaVersion !== HOME_WORKFLOW_PLAN_SCHEMA_VERSION) {
    errors.push('Invalid HomeWorkflowPlan schemaVersion.');
  }
  if (!plan.goal.trim()) errors.push('HomeWorkflowPlan goal is required.');
  if (!WORKFLOW_TYPE_SET.has(plan.workflowType)) errors.push(`Invalid workflowType: ${plan.workflowType}`);
  if (plan.stages.length === 0) errors.push('HomeWorkflowPlan requires at least one stage.');

  const seenIds = new Set<string>();
  let previousIndex = -1;
  for (const stage of plan.stages) {
    if (!stage.id.trim()) errors.push('HomeWorkflowPlan stage id is required.');
    if (seenIds.has(stage.id)) errors.push(`Duplicate HomeWorkflowPlan stage id: ${stage.id}`);
    seenIds.add(stage.id);
    if (!STAGE_KIND_SET.has(stage.kind)) errors.push(`Invalid HomeWorkflowPlan stage kind: ${stage.kind}`);
    if (!stage.objective.trim()) errors.push(`Stage ${stage.id} objective is required.`);
    if (stage.expectedOutputs.length === 0) warnings.push(`Stage ${stage.id} has no expected outputs.`);
    if (stage.requiresConfirmation && stage.acceptanceCriteria.length === 0) {
      errors.push(`Stage ${stage.id} requires confirmation but has no acceptanceCriteria.`);
    }
    const currentIndex = HOME_WORKFLOW_STAGES.indexOf(stage.kind);
    if (currentIndex <= 0) errors.push(`Stage ${stage.id} uses unsupported workflow stage kind: ${stage.kind}`);
    if (currentIndex < previousIndex) {
      errors.push(`Stage ${stage.id} is out of workflow order.`);
    }
    previousIndex = currentIndex;
    for (const tool of stage.allowedTools) {
      if (/commit|write|delete|drop|truncate/i.test(tool) && !stage.requiresConfirmation) {
        errors.push(`Stage ${stage.id} allows unsafe tool ${tool} without confirmation.`);
      }
    }
  }

  if (plan.provenance.generatedAt && Number.isNaN(Date.parse(plan.provenance.generatedAt))) {
    warnings.push('HomeWorkflowPlan provenance.generatedAt is not a valid date.');
  }

  return { ok: errors.length === 0, warnings, errors };
}
