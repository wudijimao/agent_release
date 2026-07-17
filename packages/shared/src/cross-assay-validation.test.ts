import assert from 'node:assert/strict';
import test from 'node:test';
import {
  CROSS_ASSAY_TYPES,
  deriveDecisionBoardRow,
  normalizeAssayEvidenceSummary,
  normalizeCandidateEvidenceSummary,
  normalizeEvidenceConflict,
  normalizeQpcrEvidencePayload,
  normalizeValidationDecisionDraft,
} from './cross-assay-validation.js';

test('normalizeAssayEvidenceSummary accepts all P2 assay types', () => {
  for (const assayType of CROSS_ASSAY_TYPES) {
    const summary = normalizeAssayEvidenceSummary({
      assayType,
      status: 'available',
      stance: 'support',
      evidenceStrength: 'moderate',
      confidence: 'medium',
      evidenceItemIds: ['evidence-1', 'evidence-1'],
      futureTaskIds: ['task-1'],
      keyMetrics: { foldChange: 2.1 },
      qcFlags: [],
      limitations: [],
    });

    assert.equal(summary?.assayType, assayType);
    assert.deepEqual(summary?.evidenceItemIds, ['evidence-1']);
  }
});

test('normalizeValidationDecisionDraft enforces human confirmation and blocking issues', () => {
  const draft = normalizeValidationDecisionDraft({
    recommendation: 'kill',
    confidence: 'high',
    rationale: ['qPCR and WB oppose the hypothesis.'],
    requiredHumanConfirmation: false,
    blockingIssues: ['direction conflict'],
    suggestedFollowUpTasks: [
      {
        actionId: 'review-1',
        type: 'review_metadata',
        label: 'Review sample metadata',
        rationale: 'Check whether sample mismatch explains the conflict.',
        sourceEvidenceItemIds: ['ev-1'],
        sourceFutureTaskIds: [],
      },
    ],
  });

  assert.equal(draft?.requiredHumanConfirmation, true);
  assert.equal(draft?.recommendation, 'kill');
  assert.deepEqual(draft?.blockingIssues, ['direction conflict']);
  assert.equal(draft?.suggestedFollowUpTasks[0]?.requiresConfirmation, true);
});

test('normalizeEvidenceConflict preserves direction and source conflict metadata', () => {
  const conflict = normalizeEvidenceConflict({
    conflictId: 'conflict-1',
    candidateId: 'EGFR',
    assayTypes: ['qpcr', 'wb', 'invalid'],
    type: 'direction_conflict',
    summary: 'qPCR supports EGFR while WB opposes it.',
    likelyCause: 'biology',
    relatedEvidenceItemIds: ['ev-1', 'ev-2'],
    recommendedAction: 'orthogonal_assay',
  });

  assert.deepEqual(conflict?.assayTypes, ['qpcr', 'wb']);
  assert.equal(conflict?.likelyCause, 'biology');
  assert.equal(conflict?.recommendedAction, 'orthogonal_assay');
});

test('normalizeCandidateEvidenceSummary and deriveDecisionBoardRow keep source refs traceable', () => {
  const summary = normalizeCandidateEvidenceSummary({
    candidateId: 'EGFR',
    packageIds: ['pkg-1'],
    entity: { type: 'gene', symbol: 'EGFR', label: 'EGFR' },
    hypothesis: 'EGFR promotes resistance.',
    assaySummaries: [
      {
        assayType: 'qpcr',
        status: 'available',
        stance: 'support',
        evidenceStrength: 'moderate',
        confidence: 'medium',
        evidenceItemIds: ['ev-qpcr'],
        futureTaskIds: ['task-qpcr'],
        keyMetrics: { foldChange: 2 },
        qcFlags: [],
        limitations: [],
      },
      {
        assayType: 'wb',
        status: 'needs_repeat',
        stance: 'inconclusive',
        evidenceStrength: 'not_interpretable',
        confidence: 'low',
        evidenceItemIds: ['ev-wb'],
        futureTaskIds: ['task-wb'],
        keyMetrics: {},
        qcFlags: ['saturated_band'],
        limitations: ['Repeat exposure.'],
      },
    ],
    overallDecisionDraft: {
      recommendation: 'repeat_assay',
      confidence: 'medium',
      rationale: ['qPCR is supportive but WB needs repeat.'],
      requiredHumanConfirmation: true,
      blockingIssues: ['WB saturated band'],
      suggestedFollowUpTasks: [],
    },
    conflicts: [],
    gaps: [],
    nextActions: [],
    provenance: {
      generatedBy: 'deterministic',
      generatedAt: '2026-04-29T00:00:00.000Z',
      sourceEvidenceItemIds: ['ev-qpcr', 'ev-wb'],
      sourceFutureTaskIds: ['task-qpcr', 'task-wb'],
      sourcePackageIds: ['pkg-1'],
      warnings: [],
    },
    updatedAt: '2026-04-29T00:00:00.000Z',
  });
  const row = deriveDecisionBoardRow(summary);

  assert.equal(summary?.provenance.sourceEvidenceItemIds.length, 2);
  assert.equal(row?.status, 'needs_repeat');
  assert.equal(row?.assayBadges.qpcr.stance, 'support');
  assert.equal(row?.assayBadges.wb.status, 'needs_repeat');
});

test('normalizeQpcrEvidencePayload keeps qPCR calculation and QC draft shape stable', () => {
  const payload = normalizeQpcrEvidencePayload({
    draftId: 'qpcr-draft-1',
    packageId: 'pkg-1',
    candidateId: 'EGFR',
    targetGenes: ['EGFR'],
    housekeepingGenes: ['GAPDH'],
    samples: [
      { sample: 's1', condition: 'control', target: 'EGFR', ct: '25.2' },
      { sample: 's1', condition: 'control', target: 'GAPDH', ct: 20.1 },
    ],
    comparisons: [
      {
        target: 'EGFR',
        baselineCondition: 'control',
        testCondition: 'treated',
        deltaDeltaCt: -1,
        foldChange: 2,
        replicateCount: 3,
        stance: 'support',
        evidenceStrength: 'moderate',
      },
    ],
    qc: { status: 'warning', flags: ['high_ct_variance'], notes: ['Review replicate variance.'] },
    decision: {
      assayType: 'qpcr',
      status: 'available',
      stance: 'support',
      evidenceStrength: 'moderate',
      confidence: 'medium',
      evidenceItemIds: [],
      futureTaskIds: [],
      keyMetrics: { maxFoldChange: 2 },
      qcFlags: ['high_ct_variance'],
      limitations: [],
    },
    provenance: {
      generatedBy: 'deterministic',
      generatedAt: '2026-04-29T00:00:00.000Z',
      sourceEvidenceItemIds: [],
      sourceFutureTaskIds: [],
      sourcePackageIds: ['pkg-1'],
      warnings: [],
    },
  });

  assert.equal(payload?.samples[0]?.ct, 25.2);
  assert.equal(payload?.comparisons[0]?.foldChange, 2);
  assert.deepEqual(payload?.qc.flags, ['high_ct_variance']);
});
