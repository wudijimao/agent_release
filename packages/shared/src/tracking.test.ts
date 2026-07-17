import assert from 'node:assert/strict';
import test from 'node:test';
import { normalizeFeedItemAiSummaryPayload } from './tracking.js';

test('normalizeFeedItemAiSummaryPayload accepts structured ai summary payloads', () => {
  const payload = normalizeFeedItemAiSummaryPayload({
    overviewText: '概览',
    aiSummaryText: '总结',
    keyPoints: ['要点 1', '要点 2'],
    memoryConnections: [
      {
        evidenceType: 'confirmed_memory',
        evidenceId: 'mem-1',
        label: '偏好',
        reason: '与当前偏好一致',
      },
    ],
    suggestedNextActions: ['复核'],
    coverage: 'full_text',
    warnings: ['coverage_abstract_only'],
  });

  assert.ok(payload);
  assert.equal(payload?.overviewText, '概览');
  assert.equal(payload?.aiSummaryText, '总结');
  assert.deepEqual(payload?.keyPoints, ['要点 1', '要点 2']);
  assert.deepEqual(payload?.memoryConnections[0], {
    evidenceType: 'confirmed_memory',
    evidenceId: 'mem-1',
    label: '偏好',
    reason: '与当前偏好一致',
  });
  assert.deepEqual(payload?.suggestedNextActions, ['复核']);
  assert.equal(payload?.coverage, 'full_text');
});

test('normalizeFeedItemAiSummaryPayload rejects empty payloads', () => {
  assert.equal(normalizeFeedItemAiSummaryPayload({}), null);
  assert.equal(
    normalizeFeedItemAiSummaryPayload({ overviewText: '  ', aiSummaryText: '   ' }),
    null,
  );
});
