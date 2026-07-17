import assert from 'node:assert/strict';
import test from 'node:test';
import {
  TODAY_CLUES_TITLE,
  normalizeTodayClueSynthesisResult,
  normalizeTodayCluesResponse,
  TODAY_CLUES_SCHEMA_VERSION,
} from './today-clues.js';

test('normalizes valid today clues response and drops malformed clues', () => {
  const result = normalizeTodayCluesResponse({
    status: 'accepted',
    date: '2026-05-15',
    timezone: 'Asia/Shanghai',
    title: TODAY_CLUES_TITLE,
    generatedAt: '2026-05-15T00:00:00.000Z',
    sourceStatus: [{ name: 'tracking', status: 'used', count: 1 }],
    clues: [
      {
        id: 'clue-1',
        clueKey: 'tracking:project-1',
        type: 'project_progress',
        title: '检查 KRAS 项目新信号',
        reason: '信息追踪今天有高优先级更新。',
        evidence: ['日报摘要'],
        confidence: 'high',
        sourceRefs: [
          {
            type: 'tracking_briefing',
            id: 'briefing-1',
            title: 'KRAS briefing',
          },
        ],
        actions: [{ kind: 'open_tracking', label: '查看追踪' }],
        generatedAt: '2026-05-15T00:00:00.000Z',
      },
      {
        id: 'bad',
        clueKey: 'memory-only',
        type: 'project_progress',
        title: 'bad',
        reason: 'bad',
        confidence: 'high',
        sourceRefs: [],
        generatedAt: '2026-05-15T00:00:00.000Z',
      },
    ],
  });

  assert.equal(result?.schemaVersion, TODAY_CLUES_SCHEMA_VERSION);
  assert.equal(result?.title, TODAY_CLUES_TITLE);
  assert.equal(result?.clues.length, 1);
  assert.equal(result?.clues[0]?.sourceRefs[0]?.type, 'tracking_briefing');
});

test('normalizes source-bound synthesis result', () => {
  const result = normalizeTodayClueSynthesisResult({
    status: 'partial',
    items: [
      {
        clueKey: 'scheduled:run-1',
        type: 'next_action',
        title: '确认定时任务草稿',
        reason: '有一个待确认草稿。',
        evidence: ['任务运行完成'],
        confidence: 'medium',
        sourceCandidateIds: ['candidate-1'],
        actions: [{ kind: 'open_scheduled_task', label: '打开草稿' }],
      },
      {
        clueKey: 'invalid',
        type: 'next_action',
        title: 'invalid',
        reason: 'missing source candidate',
        confidence: 'high',
      },
    ],
    warnings: ['candidate_filtered'],
  });

  assert.equal(result?.status, 'partial');
  assert.equal(result?.items.length, 1);
  assert.deepEqual(result?.warnings, ['candidate_filtered']);
});

test('normalizes today clues trace without raw internals', () => {
  const result = normalizeTodayCluesResponse({
    status: 'empty',
    date: '2026-05-16',
    timezone: 'Asia/Shanghai',
    title: TODAY_CLUES_TITLE,
    generatedAt: '2026-05-16T00:00:00.000Z',
    sourceStatus: [],
    clues: [],
    trace: {
      mode: 'snapshot_read',
      snapshotStatus: 'missing',
      emptyReason: 'snapshot_missing',
      sourceCount: 0,
      candidateCount: 0,
      acceptedCandidateCount: 0,
      warnings: ['snapshot_missing'],
      rawPrompt: 'should not survive',
    },
  });

  assert.equal(result?.title, TODAY_CLUES_TITLE);
  assert.equal(result?.trace?.mode, 'snapshot_read');
  assert.equal(result?.trace?.snapshotStatus, 'missing');
  assert.equal(result?.trace?.emptyReason, 'snapshot_missing');
  assert.equal('rawPrompt' in (result?.trace || {}), false);
});
