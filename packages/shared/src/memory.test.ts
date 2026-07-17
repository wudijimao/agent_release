import assert from 'node:assert/strict';
import test from 'node:test';
import {
  MEMORY_ENTRY_KINDS,
  MEMORY_ENTRY_STATUSES,
  MEMORY_CONFLICT_WIZARD_ACTIONS,
  MEMORY_REPLAY_EXPLANATION_ACTIONS,
  MEMORY_REPLAY_DECISIONS,
  MEMORY_REPLAY_REASON_CODES,
  MEMORY_SCOPES,
  buildResolvedMemorySnapshot,
  buildMemorySnapshot,
  normalizeMemoryBatchReviewResult,
  normalizeMemoryConflictWizardPayload,
  normalizeMemoryImpactPreview,
  normalizeMemoryEntry,
  normalizeMemoryInbox,
  normalizeMemoryReplayExplanation,
  type MemoryEntry,
} from './memory.js';

test('memory enums match P1 checklist contract', () => {
  assert.deepEqual(MEMORY_ENTRY_STATUSES, ['pending', 'confirmed', 'rejected', 'archived']);
  assert.deepEqual(MEMORY_ENTRY_KINDS, [
    'fact',
    'preference_candidate',
    'decision_principle',
    'workflow_pattern',
  ]);
  assert.deepEqual(MEMORY_SCOPES, ['user', 'lab', 'project', 'function']);
  assert.deepEqual(MEMORY_REPLAY_DECISIONS, ['used', 'excluded']);
  assert.ok(MEMORY_REPLAY_REASON_CODES.includes('conflict_loser'));
  assert.ok(MEMORY_REPLAY_REASON_CODES.includes('project_context_missing'));
  assert.ok(MEMORY_REPLAY_EXPLANATION_ACTIONS.includes('resolve_conflict'));
  assert.ok(MEMORY_CONFLICT_WIZARD_ACTIONS.includes('keep_both_scoped'));
});

test('normalizeMemoryEntry clamps unsafe fields and preserves evidence refs', () => {
  const entry = normalizeMemoryEntry({
    id: 'mem-1',
    labId: 'lab-1',
    userId: 'user-1',
    scope: 'project',
    projectRefId: 'project-1',
    kind: 'decision_principle',
    statement: '  EGFR G719X 项目优先使用外部证据交叉验证  ',
    evidence: [
      { sourceType: 'message', sourceId: 'msg-1', sourceKey: 'chat:session-1:user-1:assistant-1', summary: '用户明确确认过。' },
      { sourceType: 'bad', summary: 'ignored' },
    ],
    confidence: 130,
    status: 'confirmed',
    createdBy: 'user',
    reviewPolicy: 'after_90_days',
    reviewStatus: 'current',
    reviewDueAt: '2026-08-03T00:00:00.000Z',
    lastReviewedAt: '2026-05-05T00:00:00.000Z',
    reviewSnoozedUntil: '2026-06-05T00:00:00.000Z',
    reviewReason: '项目事实确认后 90 天复核。',
    confirmedAt: '2026-05-05T00:00:00.000Z',
    createdAt: '2026-05-05T00:00:00.000Z',
    updatedAt: '2026-05-05T00:00:00.000Z',
  });

  assert.equal(entry?.scope, 'project');
  assert.equal(entry?.kind, 'decision_principle');
  assert.equal(entry?.statement, 'EGFR G719X 项目优先使用外部证据交叉验证');
  assert.equal(entry?.confidence, 100);
  assert.deepEqual(entry?.evidence, [
    {
      sourceType: 'message',
      sourceId: 'msg-1',
      sourceKey: 'chat:session-1:user-1:assistant-1',
      summary: '用户明确确认过。',
    },
  ]);
  assert.equal(entry?.reviewPolicy, 'after_90_days');
  assert.equal(entry?.reviewStatus, 'current');
  assert.equal(entry?.reviewDueAt, '2026-08-03T00:00:00.000Z');
  assert.equal(entry?.lastReviewedAt, '2026-05-05T00:00:00.000Z');
  assert.equal(entry?.reviewSnoozedUntil, '2026-06-05T00:00:00.000Z');
  assert.equal(entry?.reviewReason, '项目事实确认后 90 天复核。');
});

test('buildMemorySnapshot includes only confirmed entries and records excluded replay', () => {
  const base = {
    labId: 'lab-1',
    userId: 'user-1',
    scope: 'user',
    kind: 'fact',
    statement: '用户关注 EGFR 耐药项目。',
    evidence: [],
    confidence: 80,
    createdBy: 'user',
    createdAt: '2026-05-05T00:00:00.000Z',
    updatedAt: '2026-05-05T00:00:00.000Z',
  } satisfies Omit<MemoryEntry, 'id' | 'status'>;

  const snapshot = buildMemorySnapshot([
    { ...base, id: 'confirmed-1', status: 'confirmed' },
    { ...base, id: 'pending-1', status: 'pending' },
    { ...base, id: 'archived-1', status: 'archived' },
  ]);

  assert.deepEqual(snapshot.entries.map((entry) => entry.id), ['confirmed-1']);
  assert.deepEqual(snapshot.replay.entries.map((entry) => entry.memoryEntryId), ['confirmed-1']);
  assert.deepEqual(
    snapshot.replay.excluded?.map((entry) => [entry.memoryEntryId, entry.reasonCode, entry.status]),
    [
      ['pending-1', 'pending', 'pending'],
      ['archived-1', 'archived', 'archived'],
    ],
  );
});

test('buildResolvedMemorySnapshot records used and excluded replay reasons', () => {
  const base = {
    labId: 'lab-1',
    userId: 'user-1',
    scope: 'project',
    kind: 'decision_principle',
    statement: 'EGFR 项目优先先看耐药证据链。',
    evidence: [{ sourceType: 'manual', summary: '用户确认。' }],
    confidence: 88,
    createdBy: 'user',
    createdAt: '2026-05-05T00:00:00.000Z',
    updatedAt: '2026-05-05T00:00:00.000Z',
  } satisfies Omit<MemoryEntry, 'id' | 'status'>;

  const snapshot = buildResolvedMemorySnapshot({
    used: [
      {
        entry: { ...base, id: 'winner', status: 'confirmed' },
        rankScore: 142,
        reasonCode: 'confirmed',
        reasonText: 'scope matched and ranked winner',
        relationIds: ['rel-1'],
      },
    ],
    excluded: [
      {
        entry: { ...base, id: 'loser', status: 'confirmed' },
        reasonCode: 'conflict_loser',
        reasonText: 'lost conflict resolution',
        rankScore: 80,
        relationIds: ['rel-1'],
      },
    ],
    resolverVersion: 'memory/p2-ranked-conflict/v1',
    policyVersion: 'memory/p2-ranking-conflict-policy/v1',
  });

  assert.equal(snapshot.entries[0]?.rankScore, 142);
  assert.equal(snapshot.replay.resolverVersion, 'memory/p2-ranked-conflict/v1');
  assert.equal(snapshot.replay.policyVersion, 'memory/p2-ranking-conflict-policy/v1');
  assert.equal(snapshot.replay.entries[0]?.decision, 'used');
  assert.equal(snapshot.replay.entries[0]?.reasonText, 'scope matched and ranked winner');
  assert.equal(snapshot.replay.excluded?.[0]?.decision, 'excluded');
  assert.equal(snapshot.replay.excluded?.[0]?.reasonCode, 'conflict_loser');
});

test('normalizeMemoryInbox groups candidate entries with source and risk summaries', () => {
  const inbox = normalizeMemoryInbox({
    version: 'memory/p25-inbox/v1',
    groups: [
      {
        id: 'agent',
        title: 'Agent 提名',
        source: 'agent_candidate',
        total: 2,
        riskCount: 1,
        latestUpdatedAt: '2026-05-06T00:00:00.000Z',
        items: [
          {
            entry: {
              id: 'mem-agent',
              labId: 'lab-1',
              userId: 'user-1',
              scope: 'user',
              kind: 'workflow_pattern',
              statement: '用户倾向在 workflow closeout 后复核候选记忆。',
              evidence: [{ sourceType: 'run_event', sourceId: 'run-1', summary: 'workflow 完成。' }],
              confidence: 80,
              status: 'pending',
              createdBy: 'meta_agent',
              createdAt: '2026-05-06T00:00:00.000Z',
              updatedAt: '2026-05-06T00:00:00.000Z',
            },
            source: {
              source: 'workflow_closeout',
              label: 'Workflow closeout',
              evidenceSourceType: 'run_event',
              sourceId: 'run-1',
              summary: 'workflow 完成后提名。',
            },
            risk: {
              level: 'conflict',
              label: '可能冲突',
              decision: 'possible_conflict',
              confidence: 88.9,
            },
            benefitSummary: '确认后会延续流程偏好。',
            reviewReason: '可能和已有记忆冲突。',
            actionHint: '先处理冲突',
          },
          {
            entry: { id: 'bad' },
          },
        ],
      },
    ],
  });

  assert.equal(inbox.version, 'memory/p25-inbox/v1');
  assert.equal(inbox.groups[0]?.source, 'agent_candidate');
  assert.equal(inbox.groups[0]?.items.length, 1);
  assert.equal(inbox.groups[0]?.items[0]?.source.source, 'workflow_closeout');
  assert.equal(inbox.groups[0]?.items[0]?.source.evidenceSourceType, 'run_event');
  assert.equal(inbox.groups[0]?.items[0]?.risk.level, 'conflict');
  assert.equal(inbox.groups[0]?.items[0]?.risk.confidence, 88);
  assert.equal(inbox.groups[0]?.items[0]?.benefitSummary, '确认后会延续流程偏好。');
  assert.equal(inbox.groups[0]?.items[0]?.actionHint, '先处理冲突');
});

test('normalizeMemoryBatchReviewResult clamps item status and preserves entries', () => {
  const result = normalizeMemoryBatchReviewResult({
    action: 'confirm_no_action',
    items: [
      {
        entryId: 'mem-1',
        status: 'completed',
        action: 'confirm_no_action',
        entry: {
          id: 'mem-1',
          labId: 'lab-1',
          userId: 'user-1',
          scope: 'user',
          kind: 'preference_candidate',
          statement: '回答默认用中文。',
          evidence: [{ sourceType: 'message', summary: '用户确认。' }],
          confidence: 70,
          status: 'confirmed',
          createdBy: 'user',
          createdAt: '2026-05-06T00:00:00.000Z',
          updatedAt: '2026-05-06T00:00:00.000Z',
        },
      },
      {
        entryId: 'mem-2',
        status: 'blocked',
        action: 'confirm_no_action',
        reason: '需要处理冲突。',
      },
      {
        entryId: 'mem-3',
        status: 'unknown',
      },
    ],
  });

  assert.equal(result.action, 'confirm_no_action');
  assert.equal(result.completed, 1);
  assert.equal(result.blocked, 1);
  assert.equal(result.failed, 1);
  assert.equal(result.items[0]?.entry?.status, 'confirmed');
  assert.equal(result.items[2]?.status, 'failed');
});

test('normalizeMemoryReplayExplanation clamps used excluded items and actions', () => {
  const explanation = normalizeMemoryReplayExplanation({
    resolverVersion: 'memory/p2-ranked-conflict/v1',
    policyVersion: 'memory/p2-ranking-conflict-policy/v1',
    used: [
      {
        memoryEntryId: 'winner',
        decision: 'used',
        label: 'EGFR 项目证据偏好',
        reasonCode: 'confirmed',
        reasonText: 'scope matched and ranked winner',
        userReason: '已采用：这条记忆已确认。',
        impactSummary: '保持回答偏好。',
        scopeSummary: '项目内使用',
        actionSummary: '可查看详情。',
        tone: 'success',
        scope: 'project',
        kind: 'decision_principle',
        status: 'confirmed',
        rankScore: 142.9,
        evidenceRefCount: 2,
        relationIds: ['rel-1'],
        recommendedActions: ['open_memory', 'bad'],
      },
    ],
    excluded: [
      {
        memoryEntryId: 'loser',
        decision: 'excluded',
        reasonCode: 'conflict_loser',
        reasonText: 'lost conflict resolution',
        status: 'confirmed',
        rankScore: 80,
        recommendedActions: ['resolve_conflict'],
      },
      {
        reason: 'bad row still gets a safe fallback',
        recommendedActions: [],
      },
    ],
    evidence: [
      {
        id: 'evidence-1',
        source: 'conversation_evidence',
        label: '历史对话',
        summary: '用户之前要求先看证据链。',
        relevanceLabel: '高度相关',
        usedInPrompt: true,
        clarificationRequired: false,
      },
    ],
    clarification: {
      required: true,
      summary: '需要确认历史上下文。',
      candidateCount: 1,
      candidates: [
        {
          id: 'candidate-1',
          title: '证据链偏好',
          summary: '用户之前要求先看证据链。',
          sourceType: 'conversation',
          relevanceLabel: '高度相关',
        },
      ],
    },
    sourceTrace: ['memory: selected winner', 1, 'memory: excluded loser'],
  });

  assert.equal(explanation.version, 'memory/replay-explanation/v1');
  assert.equal(explanation.resolverVersion, 'memory/p2-ranked-conflict/v1');
  assert.equal(explanation.used[0]?.rankScore, 142);
  assert.deepEqual(explanation.used[0]?.recommendedActions, ['open_memory']);
  assert.equal(explanation.used[0]?.userReason, '已采用：这条记忆已确认。');
  assert.equal(explanation.used[0]?.tone, 'success');
  assert.equal(explanation.excluded[0]?.reasonCode, 'conflict_loser');
  assert.deepEqual(explanation.excluded[1]?.recommendedActions, ['none']);
  assert.equal(explanation.evidence[0]?.label, '历史对话');
  assert.equal(explanation.clarification?.candidates[0]?.title, '证据链偏好');
  assert.deepEqual(explanation.sourceTrace, ['memory: selected winner', 'memory: excluded loser']);
  assert.equal(explanation.simulationInput, undefined);
  assert.equal(explanation.totals.used, 1);
  assert.equal(explanation.totals.excluded, 2);
  assert.equal(explanation.totals.evidence, 1);
  assert.equal(explanation.totals.clarificationCandidates, 1);
  assert.equal(explanation.totals.actionable, 2);
});

test('normalizeMemoryReplayExplanation preserves simulation input for replay jumps', () => {
  const explanation = normalizeMemoryReplayExplanation({
    resolverVersion: 'memory/p4-simulator/v1',
    simulationInput: {
      message: '模拟这条问题',
      scene: 'experiment',
      projectRefId: '11111111-1111-1111-1111-111111111111',
      functionId: 'cloning-workbench',
      includeLabScope: true,
    },
    used: [],
    excluded: [],
    sourceTrace: [],
  });

  assert.equal(explanation.simulationInput?.scene, 'experiment');
  assert.equal(explanation.simulationInput?.functionId, 'cloning-workbench');
  assert.equal(explanation.simulationInput?.includeLabScope, true);
});

test('normalizeMemoryImpactPreview preserves preview summary and replay payload', () => {
  const preview = normalizeMemoryImpactPreview({
    version: 'memory/impact-preview/v1',
    entryId: 'mem-1',
    scene: 'home',
    resolverVersion: 'memory/p4-simulator/v1',
    policyVersion: 'memory/p4-review-policy/v1',
    scope: 'project',
    kind: 'decision_principle',
    status: 'pending',
    confidence: 84,
    riskLevel: 'duplicate',
    summary: '确认前会影响首页回答。',
    scopeSummary: 'project scope · project-1',
    impactSummary: '模拟 replay 会使用 1 条记忆。',
    effects: [
      { label: '作用范围', summary: 'project scope · project-1', tone: 'neutral' },
    ],
    examples: [
      { question: '会影响什么？', effect: '会影响首页回答。' },
    ],
    preview: {
      resolverVersion: 'memory/p4-simulator/v1',
      policyVersion: 'memory/p4-review-policy/v1',
      used: [],
      excluded: [],
      sourceTrace: ['trace-1'],
      totals: { used: 0, excluded: 0, evidence: 0, clarificationCandidates: 0, actionable: 0 },
    },
    warnings: ['needs review'],
    updatedAt: '2026-05-06T00:00:00.000Z',
  });

  assert.equal(preview?.version, 'memory/impact-preview/v1');
  assert.equal(preview?.riskLevel, 'duplicate');
  assert.equal(preview?.preview.resolverVersion, 'memory/p4-simulator/v1');
  assert.equal(preview?.examples[0]?.question, '会影响什么？');
  assert.deepEqual(preview?.warnings, ['needs review']);
});

test('normalizeMemoryConflictWizardPayload preserves user-facing conflict actions', () => {
  const payload = normalizeMemoryConflictWizardPayload({
    decision: 'possible_conflict',
    summary: '发现冲突。',
    source: 'rule',
    recommendedAction: 'keep_current',
    candidates: [
      {
        entryId: 'mem-old',
        label: '旧记忆',
        reason: '和当前记忆冲突。',
        action: 'keep_candidate',
        relationType: 'conflicts_with',
        scope: 'project',
        kind: 'fact',
        status: 'confirmed',
      },
      {
        entryId: '',
        label: 'bad',
      },
    ],
    notes: ['可选择保留当前或对方。', ''],
  });

  assert.equal(payload.decision, 'possible_conflict');
  assert.equal(payload.source, 'rule');
  assert.equal(payload.recommendedAction, 'keep_current');
  assert.equal(payload.candidates.length, 1);
  assert.equal(payload.candidates[0]?.action, 'keep_candidate');
  assert.equal(payload.candidates[0]?.relationType, 'conflicts_with');
  assert.deepEqual(payload.notes, ['可选择保留当前或对方。']);
});
