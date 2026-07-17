import assert from 'node:assert/strict';
import test from 'node:test';
import {
  mapWbResultToEvidenceStance,
  normalizeAssayEvidenceRegressionCase,
  normalizeAssayImageEvidenceDraft,
  normalizePiAssayEvidenceReviewSnapshot,
  normalizeWbEvidenceGroup,
  normalizeWbQuantificationResult,
  summarizeWbEvidenceGroupFromDrafts,
  validateWbReviewPatch,
  type AssayImageEvidenceDraft,
  type WbQuantificationResult,
} from './assay-image-evidence.js';

const baseResult: WbQuantificationResult = {
  lanes: [
    {
      laneId: 'lane-1',
      label: 'control',
      condition: 'control',
      bbox: { x: 0, y: 0, width: 20, height: 120, unit: 'pixel' },
      qcFlags: [],
    },
    {
      laneId: 'lane-2',
      label: 'treated',
      condition: 'treated',
      bbox: { x: 24, y: 0, width: 20, height: 120, unit: 'pixel' },
      qcFlags: [],
    },
  ],
  bands: [
    {
      bandId: 'band-1',
      laneId: 'lane-1',
      target: 'EGFR',
      bbox: { x: 2, y: 30, width: 16, height: 8, unit: 'pixel' },
      rawIntensity: 100,
      normalizedIntensity: 1,
      qcFlags: [],
    },
    {
      bandId: 'band-2',
      laneId: 'lane-2',
      target: 'EGFR',
      bbox: { x: 26, y: 30, width: 16, height: 8, unit: 'pixel' },
      rawIntensity: 220,
      normalizedIntensity: 2.2,
      qcFlags: [],
    },
  ],
  comparisons: [
    {
      comparisonId: 'cmp-1',
      target: 'EGFR',
      baselineCondition: 'control',
      testCondition: 'treated',
      foldChange: 2.2,
      direction: 'up',
      evidenceStrength: 'strong',
      rationale: 'Synthetic fixture has a higher treated band intensity.',
    },
  ],
  normalization: {
    method: 'loading_control',
    controlTarget: 'GAPDH',
  },
  summary: {
    direction: 'up',
    foldChange: 2.2,
    confidence: 'high',
    interpretationDraft: 'WB quantification suggests higher EGFR in treated lanes.',
  },
};

test('normalizeAssayImageEvidenceDraft preserves legal WB draft payloads', () => {
  const draft = normalizeAssayImageEvidenceDraft({
    draftId: 'draft-1',
    labId: 'lab-1',
    assayType: 'wb',
    status: 'needs_review',
    packageId: 'package-1',
    futureTaskId: 'task-1',
    context: {
      target: 'EGFR',
      loadingControl: 'GAPDH',
      expectedDirection: 'up',
    },
    sourceImage: {
      attachmentId: 'attachment-1',
      fileName: 'wb.png',
      mimeType: 'image/png',
      width: 64,
      height: 128,
    },
    wbResult: baseResult,
    qc: {
      status: 'pass',
      flags: [],
      notes: [],
    },
    provenance: {
      algorithm: 'classical_cv',
      algorithmVersion: '0.1.0',
      parameters: { threshold: 0.4 },
    },
    review: {
      reviewedBy: 'user-1',
      reviewedAt: '2026-04-29T00:00:00.000Z',
      decision: 'confirm',
      correctionSummary: ['Adjusted lane labels'],
    },
    createdAt: '2026-04-29T00:00:00.000Z',
    updatedAt: '2026-04-29T00:00:00.000Z',
  });

  assert.ok(draft);
  assert.equal(draft.status, 'needs_review');
  assert.equal(draft.sourceImage.attachmentId, 'attachment-1');
  assert.equal(draft.wbResult?.lanes.length, 2);
  assert.equal(draft.provenance.sourcePackageId, 'package-1');
});

test('normalizeAssayImageEvidenceDraft supports old imageAttachmentId shape and status fallback', () => {
  const draft = normalizeAssayImageEvidenceDraft({
    id: 'draft-old',
    labId: 'lab-1',
    assayType: 'wb',
    status: 'analyzed',
    source: {
      imageAttachmentId: 'attachment-old',
      originalName: 'legacy.jpg',
      mimeType: 'image/jpeg',
    },
    resultJson: baseResult,
  });

  assert.ok(draft);
  assert.equal(draft.draftId, 'draft-old');
  assert.equal(draft.status, 'uploaded');
  assert.equal(draft.sourceImage.attachmentId, 'attachment-old');
  assert.equal(draft.sourceImage.fileName, 'legacy.jpg');
});

test('normalizeAssayImageEvidenceDraft accepts direct object storage image sources', () => {
  const draft = normalizeAssayImageEvidenceDraft({
    draftId: 'draft-object-source',
    labId: 'lab-1',
    assayType: 'wb',
    sourceImage: {
      objectKey: 'assay-image-evidence/lab-1/user-1/wb.png',
      storageUrl: 'http://localhost:9000/bioagent-docs/assay-image-evidence/lab-1/user-1/wb.png',
      fileName: 'wb.png',
      mimeType: 'image/png',
    },
  });

  assert.ok(draft);
  assert.equal(draft.sourceImage.objectKey, 'assay-image-evidence/lab-1/user-1/wb.png');
  assert.equal(draft.sourceImage.storageUrl?.includes('wb.png'), true);
});

test('normalizeAssayImageEvidenceDraft rejects payloads without authorized source refs', () => {
  const draft = normalizeAssayImageEvidenceDraft({
    draftId: 'draft-no-source',
    labId: 'lab-1',
    assayType: 'wb',
    sourceImage: {
      fileName: 'orphan.png',
      mimeType: 'image/png',
    },
  });

  assert.equal(draft, null);
});

test('normalizeAssayImageEvidenceDraft accepts IF imaging MVP result payloads', () => {
  const draft = normalizeAssayImageEvidenceDraft({
    draftId: 'if-draft-1',
    labId: 'lab-1',
    assayType: 'if_imaging',
    sourceImage: {
      objectKey: 'assay-image-evidence/lab-1/user-1/if.png',
      fileName: 'if.png',
      mimeType: 'image/png',
    },
    resultJson: {
      channels: { nuclei: 'DAPI', marker: 'FITC' },
      fields: [{ fieldId: 'field-1', nucleiCount: 10, markerPositiveRate: 0.4, meanIntensity: 120 }],
      summary: { nucleiCount: 10, markerPositiveRate: 0.4, meanIntensity: 120, confidence: 'medium' },
    },
  });

  assert.ok(draft);
  assert.equal(draft.assayType, 'if_imaging');
  assert.equal(draft.ifResult?.summary.nucleiCount, 10);
  assert.equal(draft.wbResult, undefined);
});

test('normalizeWbQuantificationResult drops bands with missing lanes or invalid intensity', () => {
  const result = normalizeWbQuantificationResult({
    ...baseResult,
    bands: [
      ...baseResult.bands,
      {
        bandId: 'orphan-band',
        laneId: 'missing-lane',
        target: 'EGFR',
        bbox: { x: 0, y: 0, width: 8, height: 8, unit: 'pixel' },
        rawIntensity: 50,
      },
      {
        bandId: 'bad-intensity',
        laneId: 'lane-1',
        target: 'EGFR',
        bbox: { x: 0, y: 0, width: 8, height: 8, unit: 'pixel' },
        rawIntensity: -1,
      },
    ],
  });

  assert.ok(result);
  assert.deepEqual(
    result.bands.map((band) => band.bandId),
    ['band-1', 'band-2'],
  );
});

test('validateWbReviewPatch reports ROI bounds, duplicate labels, and missing target band', () => {
  const validation = validateWbReviewPatch(
    {
      imageBounds: { width: 100, height: 100 },
      targetBandId: 'missing-band',
      lanes: [
        {
          laneId: 'lane-1',
          label: 'treated',
          bbox: { x: 0, y: 0, width: 10, height: 20, unit: 'pixel' },
        },
        {
          laneId: 'lane-2',
          label: 'treated',
          bbox: { x: 95, y: 0, width: 10, height: 20, unit: 'pixel' },
        },
      ],
      bands: [
        {
          bandId: 'band-1',
          bbox: { x: 0, y: -1, width: 10, height: 10, unit: 'pixel' },
        },
      ],
    },
    baseResult,
  );

  assert.equal(validation.valid, false);
  assert.equal(validation.errors.some((error) => error.includes('duplicate lane label')), true);
  assert.equal(validation.errors.some((error) => error.includes('outside image bounds')), true);
  assert.equal(validation.errors.some((error) => error.includes('target band does not exist')), true);
  assert.equal(validation.warnings.some((warning) => warning.includes('loadingControlTarget')), true);
});

test('mapWbResultToEvidenceStance caps low-quality WB evidence as inconclusive', () => {
  const draft = normalizeAssayImageEvidenceDraft({
    draftId: 'draft-1',
    labId: 'lab-1',
    assayType: 'wb',
    packageId: 'package-1',
    context: {
      expectedDirection: 'up',
      hypothesis: 'EGFR should increase after treatment.',
    },
    sourceImage: {
      attachmentId: 'attachment-1',
      fileName: 'wb.png',
      mimeType: 'image/png',
    },
    wbResult: baseResult,
    qc: {
      status: 'fail',
      flags: ['missing_loading_control'],
      notes: ['No loading control band could be identified.'],
    },
    provenance: {
      algorithm: 'classical_cv',
      parameters: {},
    },
  });

  const metadata = mapWbResultToEvidenceStance(draft);

  assert.ok(metadata);
  assert.equal(metadata.resultDirection, 'inconclusive');
  assert.equal(metadata.evidenceStrength, 'not_interpretable');
  assert.equal(metadata.cardType, 'wb_evidence');
  assert.equal(metadata.quantSummary.laneCount, 2);
});

test('normalizeAssayEvidenceRegressionCase keeps expected P1 regression metadata', () => {
  const regressionCase = normalizeAssayEvidenceRegressionCase({
    caseId: 'case-1',
    assayType: 'wb',
    sourceImageRef: 'fixtures/wb/case-1.png',
    expectedOutcome: 'needs_repeat',
    expectedQcFlags: ['saturated_band', 'unknown_new_flag'],
    expectedLaneCount: '2',
    expectedBandCount: 4,
  });

  assert.ok(regressionCase);
  assert.equal(regressionCase.expectedOutcome, 'needs_repeat');
  assert.deepEqual(regressionCase.expectedQcFlags, ['saturated_band', 'unknown']);
  assert.equal(regressionCase.expectedLaneCount, 2);
});

test('summarizeWbEvidenceGroupFromDrafts caps single replicate strength and computes group summary', () => {
  const makeDraft = (draftId: string, foldChange: number): AssayImageEvidenceDraft => ({
    draftId,
    labId: 'lab-1',
    assayType: 'wb',
    status: 'needs_review',
    candidateId: 'EGFR',
    context: { target: 'EGFR', expectedDirection: 'up' },
    sourceImage: { attachmentId: `attachment-${draftId}`, fileName: 'wb.png', mimeType: 'image/png' },
    wbResult: {
      ...baseResult,
      bands: baseResult.bands.map((band) =>
        band.laneId === 'lane-2' && band.target === 'EGFR'
          ? { ...band, normalizedIntensity: foldChange }
          : band,
      ),
      summary: { ...baseResult.summary, foldChange, direction: foldChange > 1.2 ? 'up' : 'unchanged' },
    },
    artifacts: [],
    qc: { status: 'pass', flags: [], notes: [] },
    provenance: { algorithm: 'classical_cv', parameters: {} },
    createdAt: '2026-04-29T00:00:00.000Z',
    updatedAt: '2026-04-29T00:00:00.000Z',
  });

  const single = summarizeWbEvidenceGroupFromDrafts({
    groupId: 'group-single',
    target: 'EGFR',
    drafts: [makeDraft('draft-1', 2.2)],
  });
  assert.equal(single.decision.evidenceStrength, 'weak');
  assert.equal(single.summary.comparisons[0]?.consistency, 'insufficient_replicates');

  const group = summarizeWbEvidenceGroupFromDrafts({
    groupId: 'group-1',
    target: 'EGFR',
    drafts: [makeDraft('draft-1', 2.2), makeDraft('draft-2', 2.0), makeDraft('draft-3', 1.8)],
  });
  assert.equal(group.summary.n, 3);
  assert.equal(group.summary.comparisons[0]?.consistency, 'consistent');
  assert.equal(group.decision.evidenceStrength, 'strong');
  assert.equal(group.decision.stance, 'support');
  assert.ok(normalizeWbEvidenceGroup(group));
});

test('normalizePiAssayEvidenceReviewSnapshot preserves immutable review payload', () => {
  const snapshot = normalizePiAssayEvidenceReviewSnapshot({
    snapshotId: 'snapshot-1',
    draftId: 'draft-1',
    hypothesis: 'EGFR increases after treatment.',
    stance: 'needs_repeat',
    evidenceStrength: 'not_interpretable',
    keyQuant: { foldChange: 2.2 },
    qcFlags: ['missing_loading_control'],
    decision: 'needs_repeat',
    nextAction: 'repeat_experiment',
    createdAt: '2026-04-29T00:00:00.000Z',
  });

  assert.ok(snapshot);
  assert.equal(snapshot.decision, 'needs_repeat');
  assert.equal(snapshot.nextAction, 'repeat_experiment');
  assert.deepEqual(snapshot.keyQuant, { foldChange: 2.2 });
});
