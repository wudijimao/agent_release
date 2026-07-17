import assert from 'node:assert/strict';
import test from 'node:test';
import {
  HOME_RAG_TIME_FIELDS,
  normalizeExperimentTimeCandidate,
  normalizeExperimentTimeExtraction,
  normalizeRagResultExperimentTime,
} from './experiment-time.js';

test('HOME_RAG_TIME_FIELDS includes experiment_time', () => {
  assert.deepEqual(HOME_RAG_TIME_FIELDS, ['updated_at', 'created_at', 'experiment_time']);
});

test('normalizeExperimentTimeCandidate keeps provenance and clamps confidence', () => {
  const candidate = normalizeExperimentTimeCandidate({
    start: '2026-05-12T00:00:00.000Z',
    granularity: 'date',
    confidence: 1.5,
    source: 'explicit_label',
    sourceBlockId: 'block-1',
    sourceSectionTitle: '实验记录',
    rawText: '实验日期：2026-05-12',
    fieldLabel: '实验日期',
    reasonCodes: ['field_label_positive', 'field_label_positive'],
  });

  assert.equal(candidate?.confidence, 1);
  assert.equal(candidate?.sourceBlockId, 'block-1');
  assert.equal(candidate?.sourceSectionTitle, '实验记录');
  assert.deepEqual(candidate?.reasonCodes, ['field_label_positive']);
});

test('normalizeExperimentTimeExtraction accepts old-compatible optional metadata', () => {
  const extraction = normalizeExperimentTimeExtraction({
    primary: {
      start: '2026-05-12T00:00:00.000Z',
      granularity: 'date',
      confidence: 0.9,
      source: 'template_table',
      rawText: '2026-05-12',
      reasonCodes: [],
    },
    candidates: [],
  });

  assert.equal(extraction?.primary?.source, 'template_table');
  assert.equal(extraction?.extractionVersion, 'unknown');
  assert.equal(extraction?.timezone, 'Asia/Shanghai');
});

test('normalizeExperimentTimeExtraction rejects invalid candidates', () => {
  assert.equal(
    normalizeExperimentTimeExtraction({
      candidates: [{ start: '', granularity: 'bad', source: 'bad', rawText: '' }],
    }),
    undefined,
  );
});

test('normalizeRagResultExperimentTime accepts compact result metadata', () => {
  const value = normalizeRagResultExperimentTime({
    start: '2026-05-12T00:00:00.000Z',
    confidence: 0.86,
    source: 'explicit_label',
    rawText: '实验日期：2026-05-12',
    usedForFilter: true,
  });

  assert.equal(value?.start, '2026-05-12T00:00:00.000Z');
  assert.equal(value?.usedForFilter, true);
  assert.equal(value?.usedForSort, false);
});
