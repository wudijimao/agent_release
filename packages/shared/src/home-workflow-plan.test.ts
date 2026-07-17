import assert from 'node:assert/strict';
import test from 'node:test';
import {
  normalizeHomeWorkflowPlan,
  validateHomeWorkflowPlan,
  type HomeWorkflowPlan,
} from './home-workflow-plan.js';

function validPlan(overrides: Partial<HomeWorkflowPlan> = {}): HomeWorkflowPlan {
  return {
    schemaVersion: 'home-workflow-plan.v1',
    goal: 'EGFR literature to validation workflow',
    workflowType: 'literature_to_validation',
    stages: [
      {
        id: 'research',
        kind: 'research',
        objective: 'Collect EGFR evidence.',
        requiredInputs: ['gene'],
        expectedOutputs: ['paper list'],
        requiresConfirmation: false,
        allowedTools: ['pubmed-search'],
        acceptanceCriteria: ['At least one relevant paper'],
      },
      {
        id: 'validation',
        kind: 'validation',
        objective: 'Draft qPCR validation package.',
        requiredInputs: ['candidate claim'],
        expectedOutputs: ['validation package draft'],
        requiresConfirmation: true,
        allowedTools: ['validation-draft'],
        acceptanceCriteria: ['Controls and readouts are explicit'],
      },
    ],
    risks: ['Low relevance papers'],
    stopConditions: ['No evidence found'],
    provenance: {
      sourceRefs: ['mira_node:node-1'],
      generatedAt: '2026-04-30T00:00:00.000Z',
    },
    ...overrides,
  };
}

test('normalizeHomeWorkflowPlan accepts valid plan', () => {
  const plan = normalizeHomeWorkflowPlan(validPlan());

  assert.equal(plan?.schemaVersion, 'home-workflow-plan.v1');
  assert.equal(plan?.workflowType, 'literature_to_validation');
  assert.equal(plan?.stages.length, 2);
});

test('normalizeHomeWorkflowPlan rejects missing stages', () => {
  assert.equal(normalizeHomeWorkflowPlan(validPlan({ stages: [] })), null);
});

test('validateHomeWorkflowPlan rejects unsafe write-like tools without confirmation', () => {
  const plan = validPlan({
    stages: [
      {
        id: 'archive',
        kind: 'archive',
        objective: 'Archive report.',
        requiredInputs: ['final report'],
        expectedOutputs: ['Mira archive'],
        requiresConfirmation: false,
        allowedTools: ['mira-write'],
        acceptanceCriteria: ['Target path selected'],
      },
    ],
  });

  const result = validateHomeWorkflowPlan(plan);

  assert.equal(result.ok, false);
  assert.ok(result.errors.some((error) => error.includes('unsafe tool')));
});

test('validateHomeWorkflowPlan rejects out-of-order stages and duplicate ids', () => {
  const plan = validPlan({
    stages: [
      {
        id: 'validation',
        kind: 'validation',
        objective: 'Draft validation.',
        requiredInputs: [],
        expectedOutputs: ['draft'],
        requiresConfirmation: true,
        allowedTools: [],
        acceptanceCriteria: ['ready'],
      },
      {
        id: 'validation',
        kind: 'research',
        objective: 'Research after validation.',
        requiredInputs: [],
        expectedOutputs: ['papers'],
        requiresConfirmation: false,
        allowedTools: [],
        acceptanceCriteria: [],
      },
    ],
  });

  const result = validateHomeWorkflowPlan(plan);

  assert.equal(result.ok, false);
  assert.ok(result.errors.some((error) => error.includes('Duplicate')));
  assert.ok(result.errors.some((error) => error.includes('out of workflow order')));
});
