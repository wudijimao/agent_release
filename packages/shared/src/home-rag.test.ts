import assert from 'node:assert/strict';
import test from 'node:test';
import {
  normalizeHomeRagFilterSummary,
  normalizeHomeRagSearchInput,
} from './home-rag.js';

test('normalizeHomeRagSearchInput clamps top_k and normalizes filters', () => {
  const input = normalizeHomeRagSearchInput({
    query: '  搜索我的最近实验笔记  ',
    top_k: 100,
    filters: {
      owner: { type: 'me' },
      time: { field: 'experiment_time', preset: 'recent_90d' },
      documentKind: ['experiment_note', 'bad-kind'],
      tagsAny: ['egfr', 'egfr', ''],
      titleContains: '  qPCR  ',
    },
    sort: 'recent',
  });

  assert.equal(input.query, '搜索我的最近实验笔记');
  assert.equal(input.topK, 20);
  assert.equal(input.sort, 'recent');
  assert.equal(input.queryMode, 'hybrid');
  assert.deepEqual(input.filters?.owner, { type: 'me' });
  assert.deepEqual(input.filters?.time, { field: 'experiment_time', preset: 'recent_90d' });
  assert.equal(input.filters?.documentKind, 'experiment_note');
  assert.deepEqual(input.filters?.tagsAny, ['egfr']);
  assert.equal(input.filters?.titleContains, 'qPCR');
});

test('normalizeHomeRagSearchInput fails closed for invalid filters', () => {
  const input = normalizeHomeRagSearchInput({
    query: '',
    top_k: -10,
    filters: {
      owner: { type: 'name', name: '' },
      time: { preset: 'bad', field: 'bad' },
      documentKind: 'bad-kind',
    },
    sort: 'bad',
    fallbackPolicy: { allowRelaxOwner: true },
  });

  assert.equal(input.topK, 1);
  assert.equal(input.sort, 'hybrid');
  assert.equal(input.filters, undefined);
  assert.equal(input.fallbackPolicy.allowRelaxOwner, true);
  assert.ok(input.warnings.includes('rag_query_missing'));
  assert.ok(input.warnings.includes('rag_filter_owner_name_missing'));
  assert.ok(input.warnings.includes('rag_filter_time_field_invalid'));
  assert.ok(input.warnings.includes('rag_filter_time_preset_invalid'));
  assert.ok(input.warnings.includes('rag_filter_document_kind_invalid'));
});

test('normalizeHomeRagSearchInput allows filter-only metadata searches', () => {
  const input = normalizeHomeRagSearchInput({
    query: '',
    queryMode: 'metadata',
    filters: {
      owner: { type: 'me' },
      time: { field: 'created_at', preset: 'yesterday', hard: true },
    },
    sort: 'recent',
  });

  assert.equal(input.query, '');
  assert.equal(input.queryMode, 'metadata');
  assert.equal(input.sort, 'recent');
  assert.deepEqual(input.filters?.owner, { type: 'me' });
  assert.deepEqual(input.filters?.time, { field: 'created_at', preset: 'yesterday', hard: true });
  assert.equal(input.warnings.includes('rag_query_missing'), false);
});

test('normalizeHomeRagSearchInput allows scope-only metadata searches', () => {
  const input = normalizeHomeRagSearchInput({
    query: '',
    queryMode: 'metadata',
    scope: {
      type: 'subtree',
      rootNodeId: '11111111-1111-4111-8111-111111111111',
      includeRoot: true,
    },
  });

  assert.equal(input.query, '');
  assert.equal(input.queryMode, 'metadata');
  assert.deepEqual(input.scope, {
    type: 'subtree',
    rootNodeId: '11111111-1111-4111-8111-111111111111',
    includeRoot: true,
  });
  assert.equal(input.warnings.includes('rag_query_missing'), false);
});

test('normalizeHomeRagSearchInput fails closed for malformed scope', () => {
  const input = normalizeHomeRagSearchInput({
    query: '',
    queryMode: 'metadata',
    scope: {
      type: 'bad',
      rootNodeId: '',
    },
  });

  assert.equal(input.scope, undefined);
  assert.ok(input.warnings.includes('rag_scope_type_invalid'));
  assert.ok(input.warnings.includes('rag_scope_root_missing'));
  assert.equal(input.warnings.includes('rag_query_missing'), true);
});

test('normalizeHomeRagFilterSummary accepts compact provenance', () => {
  const summary = normalizeHomeRagFilterSummary({
    label: '我的 · 最近 90 天优先 · 实验笔记',
    appliedFilters: ['owner:me', 'documentKind:experiment_note'],
    relaxedFilters: ['time:recent_90d'],
    warnings: ['owner_not_relaxed'],
    sort: 'hybrid',
  });

  assert.equal(summary?.label, '我的 · 最近 90 天优先 · 实验笔记');
  assert.deepEqual(summary?.appliedFilters, ['owner:me', 'documentKind:experiment_note']);
  assert.deepEqual(summary?.relaxedFilters, ['time:recent_90d']);
  assert.equal(summary?.sort, 'hybrid');
});
