import assert from 'node:assert/strict';
import test from 'node:test';
import {
  HOME_CONTEXT_PACKET_SCHEMA_VERSION,
  HOME_CONTEXT_SUMMARY_MAX_LENGTH,
  normalizeLabOSActionCardEditableContent,
  normalizeLabOSActionCardPayload,
  normalizeHomeActiveMiraRoot,
  normalizeHomeContextPacket,
  normalizeHomeContextRef,
  normalizeHomeContextTraceItem,
  normalizeHomeUnifiedResourceItem,
  validateLabOSActionCardPayload,
} from './context-engineering.js';

function validPacket() {
  return {
    schemaVersion: HOME_CONTEXT_PACKET_SCHEMA_VERSION,
    projectScope: 'none',
    intent: {
      primaryIntent: 'literature_search',
      secondaryIntents: ['evidence_synthesis'],
      confidenceByIntent: {
        literature_search: 0.9,
        evidence_synthesis: 0.6,
      },
      rationale: 'User asked for latest papers.',
    },
    preferences: {
      language: 'zh',
      detailLevel: 4,
      outputFormat: 'mixed',
      citationDensity: 'compact',
      evidenceMode: 'external_first',
      preferredDatabases: ['PubMed'],
      defaultDateRange: 'recent',
      lowRelevancePolicy: 'collapse',
      proactiveSuggestions: true,
      allowDraftActions: true,
      requireConfirmationBeforeWrite: true,
      showContextTrace: true,
      promptToAttachContext: true,
      autoUseCurrentAttachments: true,
      autoUseRecentProjects: true,
    },
    contextRefs: [{ type: 'mira_node', id: '11111111-1111-1111-1111-111111111111', title: 'EGFR notes' }],
    attachments: [{ id: 'att-1', name: 'result.txt', mimeType: 'text/plain', summary: 'Short result' }],
    attachedSources: [],
    blockedSources: [],
    sourcePlan: {
      externalLiterature: true,
      internalRag: false,
      renderStructuredResponse: true,
      readOnly: true,
      allowDraft: false,
      requireConfirmationBeforeWrite: true,
      preferredTools: ['find-skills', 'render_research_response'],
      blockedTools: ['rag-search'],
      reasons: ['External literature request'],
    },
    actionPolicy: {
      readOnly: true,
      allowDraftActions: true,
      requireConfirmationBeforeWrite: true,
      allowCommitWrite: false,
      allowedActionKinds: ['read', 'plan'],
      blockedActionKinds: ['commit_write'],
      reasons: ['Read-only search'],
    },
    displayPolicy: {
      primaryFamily: 'research',
      allowedFamilies: ['answer', 'research'],
      preferredCardTypes: ['literature_search', 'evidence_synthesis'],
      toolNames: ['research_search_literature'],
      resultKinds: ['research_render'],
      requiresConfirmation: false,
      source: 'tool',
      reason: 'external literature selected',
    },
    workflow: {
      stage: 'research',
      workingSet: [],
      openDecisions: [],
      nextActions: [{ id: 'read-1', kind: 'read', targetModule: 'home', title: 'Read papers', summary: 'Search papers' }],
    },
    selectedTools: [
      {
        toolName: 'research_search_literature',
        module: 'home',
        actionType: 'read',
        enabled: true,
        missingParams: [],
        displayFamily: 'research',
        resultKind: 'research_render',
        preferredCardTypes: ['literature_search'],
      },
    ],
    trace: [{ layer: 'intent', status: 'used', summary: 'Classified as literature search.' }],
    replay: {
      classifierVersion: 'home-intent/deterministic-v1',
      sourcePlanVersion: 'home-source-plan/v1',
      resolverVersions: {},
      preferenceSources: [{ category: 'expression', key: 'language', source: 'auto_memory' }],
      memoryExperience: {
        quietDecision: {
          schemaVersion: 'memory-quiet-decision/v1',
          action: 'auto_apply_preference',
          riskClass: 'personal_preference',
          appliedPreferenceKeys: ['language'],
          undoToken: 'undo-pref-language',
          userVisibleSummary: '已更新回答偏好，可随时撤销。',
        },
      },
      toolGating: {
        enabledTools: ['find-skills', 'render_research_response'],
        blockedTools: ['rag-search'],
        violations: [],
      },
      contextPacking: {
        budgetChars: 1800,
        usedChars: 120,
        packedSources: [],
        truncated: false,
      },
      displayPolicy: {
        primaryFamily: 'research',
        allowedFamilies: ['answer', 'research'],
        preferredCardTypes: ['literature_search'],
        toolNames: ['research_search_literature'],
        resultKinds: ['research_render'],
        requiresConfirmation: false,
        source: 'tool',
        reason: 'external literature selected',
      },
    },
  };
}

test('normalizeHomeContextPacket preserves a valid packet shape', () => {
  const packet = normalizeHomeContextPacket(validPacket());

  assert.equal(packet.schemaVersion, HOME_CONTEXT_PACKET_SCHEMA_VERSION);
  assert.equal(packet.projectScope, 'none');
  assert.equal(packet.intent.primaryIntent, 'literature_search');
  assert.deepEqual(packet.intent.secondaryIntents, ['evidence_synthesis']);
  assert.equal(packet.contextRefs[0]?.type, 'mira_node');
  assert.equal(packet.sourcePlan.externalLiterature, true);
  assert.equal(packet.workflow.stage, 'research');
  assert.equal(packet.selectedTools[0]?.toolName, 'research_search_literature');
  assert.equal(packet.selectedTools[0]?.displayFamily, 'research');
  assert.equal(packet.displayPolicy?.primaryFamily, 'research');
  assert.equal(packet.replay.displayPolicy?.resultKinds[0], 'research_render');
  assert.equal(packet.replay.preferenceSources[0]?.source, 'auto_memory');
  assert.equal(packet.replay.memoryExperience?.quietDecision?.action, 'auto_apply_preference');
  assert.equal(packet.preferences.autoUseRecentProjects, false);
});

test('normalizeHomeContextPacket preserves runtime skill diagnostics', () => {
  const packet = normalizeHomeContextPacket({
    runtimeSkillDiagnostics: {
      schemaVersion: 'older-version',
      discoveredSkills: [
        {
          name: 'lab-notebook-daily-writer',
          status: 'discovered',
          source: 'discovered',
          score: 0.82,
          reasons: ['capability_match'],
          matchedFields: ['capabilities'],
        },
      ],
      activatedSkills: [
        {
          name: 'lab-notebook-daily-writer',
          status: 'activated',
          source: 'discovered',
          reason: 'find-skills_result',
        },
      ],
      executedSkills: [],
      blockedSkills: [
        {
          name: 'multi-search-engine',
          status: 'blocked',
          source: 'discovered',
          reason: 'policy',
        },
      ],
      errors: [],
    },
  });

  assert.equal(packet.runtimeSkillDiagnostics?.schemaVersion, 'home-runtime-skill-diagnostics/v1');
  assert.equal(packet.runtimeSkillDiagnostics?.discoveredSkills[0]?.name, 'lab-notebook-daily-writer');
  assert.equal(packet.runtimeSkillDiagnostics?.activatedSkills[0]?.status, 'activated');
  assert.equal(packet.runtimeSkillDiagnostics?.blockedSkills[0]?.status, 'blocked');
});

test('normalizeHomeContextPacket preserves display policy as a bounded display contract', () => {
  const packet = normalizeHomeContextPacket({
    displayPolicy: {
      primaryFamily: 'action',
      allowedFamilies: ['answer', 'action', 'bad'],
      preferredCardTypes: ['confirmation', 'workflow_step'],
      toolNames: ['save_to_mira_document'],
      resultKinds: ['action_card', 'bad'],
      requiresConfirmation: true,
      source: 'action_policy',
      reason: 'write requires confirmation',
    },
    selectedTools: [
      {
        toolName: 'save_to_mira_document',
        module: 'mira',
        actionType: 'archive',
        enabled: true,
        missingParams: [],
        displayFamily: 'action',
        resultKind: 'action_card',
        preferredCardTypes: ['confirmation'],
      },
    ],
  });

  assert.equal(packet.displayPolicy?.primaryFamily, 'action');
  assert.deepEqual(new Set(packet.displayPolicy?.allowedFamilies), new Set(['answer', 'action']));
  assert.deepEqual(packet.displayPolicy?.resultKinds, ['action_card']);
  assert.equal(packet.displayPolicy?.requiresConfirmation, true);
  assert.equal(packet.selectedTools[0]?.resultKind, 'action_card');
});

test('normalizeHomeContextPacket aliases requestId from packetId for compatibility', () => {
  const packet = normalizeHomeContextPacket({
    packetId: 'packet-1',
    requestId: 'request-1',
  });
  const legacy = normalizeHomeContextPacket({
    packetId: 'packet-legacy',
  });

  assert.equal(packet.packetId, 'packet-1');
  assert.equal(packet.requestId, 'request-1');
  assert.equal(legacy.requestId, 'packet-legacy');
});

test('normalizeHomeActiveMiraRoot normalizes explicit mira root metadata', () => {
  const root = normalizeHomeActiveMiraRoot({
    ref: {
      type: 'mira_node',
      id: '11111111-1111-1111-1111-111111111111',
      title: 'WB Protocols',
    },
    title: 'WB Protocols',
    kind: 'subtree',
    permission: 'edit',
    indexState: 'partial',
    derivedFrom: 'explicit_context_ref',
    childCount: 12,
  });

  assert.equal(root?.ref.type, 'mira_node');
  assert.equal(root?.kind, 'subtree');
  assert.equal(root?.permission, 'edit');
  assert.equal(root?.indexState, 'partial');
});

test('normalizeHomeUnifiedResourceItem normalizes Mira resource entries', () => {
  const item = normalizeHomeUnifiedResourceItem({
    type: 'mira_node',
    id: '11111111-1111-1111-1111-111111111111',
    title: 'EGFR notes',
    subtitle: 'Root / EGFR',
    description: 'Mira folder',
    selectable: true,
    metadata: { path: 'Root.EGFR' },
  });

  assert.equal(item?.type, 'mira_node');
  assert.equal(item?.title, 'EGFR notes');
  assert.equal(item?.selectable, true);
});

test('normalizeHomeContextPacket downgrades malformed packet data', () => {
  const packet = normalizeHomeContextPacket({ contextRefs: 'bad', trace: 'bad', actionPolicy: { allowedActionKinds: ['bad'] } });

  assert.equal(packet.schemaVersion, HOME_CONTEXT_PACKET_SCHEMA_VERSION);
  assert.equal(packet.projectScope, 'none');
  assert.equal(packet.intent.primaryIntent, 'general_answer');
  assert.deepEqual(packet.contextRefs, []);
  assert.deepEqual(packet.trace, []);
  assert.deepEqual(packet.actionPolicy.allowedActionKinds, ['read', 'plan', 'draft']);
});

test('normalizeHomeContextRef rejects unknown context ref types', () => {
  assert.equal(normalizeHomeContextRef({ type: 'unknown', id: 'abc' }), null);
  assert.equal(normalizeHomeContextRef({ type: 'analysis_artifact', id: 'artifact-1' })?.type, 'analysis_artifact');
  const attachmentRef = normalizeHomeContextRef({
    type: 'attachment',
    id: '11111111-1111-4111-8111-111111111111',
    title: 'results.csv',
    source: 'upload',
    metadata: { kind: 'csv' },
  });
  assert.equal(attachmentRef?.type, 'attachment');
  assert.equal(attachmentRef?.source, 'upload');
  assert.equal(attachmentRef?.metadata?.kind, 'csv');
  assert.equal(
    normalizeHomeContextRef({
      type: 'tracking_feed_item',
      id: '22222222-2222-4222-8222-222222222222',
      title: 'Tracking article',
      metadata: { subscriptionName: 'PubMed' },
    })?.type,
    'tracking_feed_item',
  );
});

test('normalizeHomeContextPacket accepts legacy intent.type as primaryIntent', () => {
  const packet = normalizeHomeContextPacket({
    intent: {
      type: 'workflow_orchestration',
    },
  });

  assert.equal(packet.intent.primaryIntent, 'workflow_orchestration');
});

test('normalizeHomeContextPacket supplies replay metadata defaults', () => {
  const packet = normalizeHomeContextPacket({});

  assert.equal(packet.replay.classifierVersion, 'home-intent/deterministic-v1');
  assert.equal(packet.replay.sourcePlanVersion, 'home-source-plan/v1');
  assert.equal(packet.replay.memoryExplanation?.version, 'memory/replay-explanation/v1');
  assert.deepEqual(packet.replay.toolGating.enabledTools, []);
  assert.equal(packet.replay.workflowCheckpoint?.stage, 'none');
});

test('normalizeHomeContextPacket defaults missing workflow context to none stage', () => {
  const packet = normalizeHomeContextPacket({ workflow: undefined });

  assert.equal(packet.workflow.stage, 'none');
  assert.deepEqual(packet.workflow.nextActions, []);
});

test('normalizeHomeContextPacket drops invalid LabOS action kinds', () => {
  const packet = normalizeHomeContextPacket({
    workflow: {
      stage: 'research',
      nextActions: [
        { id: 'bad-1', kind: 'delete_everything', targetModule: 'home' },
        { id: 'draft-1', kind: 'draft', targetModule: 'validation', title: 'Draft', summary: 'Draft package' },
      ],
    },
  });

  assert.deepEqual(packet.workflow.nextActions.map((action) => action.kind), ['draft']);
});

test('normalizeHomeContextTraceItem truncates long summaries', () => {
  const trace = normalizeHomeContextTraceItem({
    layer: 'intent',
    status: 'used',
    summary: 'a'.repeat(HOME_CONTEXT_SUMMARY_MAX_LENGTH + 100),
  });

  assert.equal(trace.summary.length, HOME_CONTEXT_SUMMARY_MAX_LENGTH);
  assert.equal(trace.summary.endsWith('...'), true);
});

test('normalizeHomeContextPacket strips unsafe full content and secrets from metadata', () => {
  const packet = normalizeHomeContextPacket({
    contextRefs: [
      {
        type: 'analysis_artifact',
        id: 'artifact-1',
        title: 'DEG table',
        summary: 'Preview only',
        metadata: {
          schema: ['gene', 'log2fc'],
          extractedText: 'x'.repeat(1000),
          tableData: [{ gene: 'EGFR' }],
          storageUrl: 'https://object-store/presigned',
          apiKey: 'secret',
          providerRawResponse: { rows: [1, 2, 3] },
          safeNote: 'short note',
        },
      },
    ],
    trace: [
      {
        layer: 'analysis',
        status: 'used',
        summary: 'Artifact summary used',
        details: {
          contentText: 'full text',
          objectKey: 'bucket/key',
          sourceKind: 'artifact_preview',
        },
      },
    ],
  });

  assert.deepEqual(packet.contextRefs[0]?.metadata, {
    schema: ['gene', 'log2fc'],
    safeNote: 'short note',
  });
  assert.deepEqual(packet.trace[0]?.details, {
    sourceKind: 'artifact_preview',
  });
});

test('normalizeHomeContextPacket preserves retrieval replay refs safely', () => {
  const packet = normalizeHomeContextPacket({
    replay: {
      retrievals: {
        internalRag: [
          {
            toolName: 'rag-search',
            query: 'EGFR protocol',
            resultRefs: ['chunk-1'],
            resultCount: 1,
            errorCode: 'database_query_error',
            errorReason: '数据库查询失败',
          },
        ],
        externalLiterature: [
          {
            toolName: 'pubmed-mcp',
            query: 'EGFR resistance',
            resultRefs: ['PMID:123'],
            resultCount: 1,
          },
        ],
      },
    },
  });

  assert.equal(packet.replay.retrievals.internalRag[0]?.toolName, 'rag-search');
  assert.equal(packet.replay.retrievals.internalRag[0]?.errorCode, 'database_query_error');
  assert.equal(packet.replay.retrievals.internalRag[0]?.errorReason, '数据库查询失败');
  assert.deepEqual(packet.replay.retrievals.externalLiterature[0]?.resultRefs, ['PMID:123']);
});

test('normalizeLabOSActionCardEditableContent supports stable writable card schemas', () => {
  assert.deepEqual(
    normalizeLabOSActionCardEditableContent({
      kind: 'future_task',
      title: 'Run validation assay',
      description: 'Validate EGFR candidate.',
      priority: 'high',
    }),
    {
      schemaVersion: 'labos-action-card-editable/v1',
      kind: 'future_task',
      title: 'Run validation assay',
      description: 'Validate EGFR candidate.',
      priority: 'high',
      dueDate: undefined,
      ownerHint: undefined,
    },
  );

  assert.deepEqual(
    normalizeLabOSActionCardEditableContent(
      {
        title: 'Archive EGFR workflow',
        markdown: '# EGFR\nsummary',
        targetPath: 'Mira/EGFR',
      },
      'mira_note',
    ),
    {
      schemaVersion: 'labos-action-card-editable/v1',
      kind: 'mira_archive',
      title: 'Archive EGFR workflow',
      markdown: '# EGFR\nsummary',
      targetNodeId: undefined,
      targetPath: 'Mira/EGFR',
    },
  );
});

test('LabOS action card validator rejects writable cards without workflow ids and draft hash', () => {
  const card = {
    cardType: 'future_task' as const,
    actionId: 'action-1',
    actionType: 'propose_write' as const,
    targetModule: 'future_task' as const,
    draftSummary: 'Create future task',
    sourceRefs: [],
    provenance: {},
  };

  assert.equal(validateLabOSActionCardPayload(card).ok, false);
  assert.equal(normalizeLabOSActionCardPayload(card), null);

  const normalized = normalizeLabOSActionCardPayload({
    ...card,
    workflowRunId: 'run-1',
    workflowStepId: 'step-1',
    draftHash: 'hash-1',
    editableContent: {
      kind: 'future_task',
      title: 'Run validation assay',
      description: 'Validate EGFR candidate.',
    },
    confirmAction: {
      method: 'POST',
      path: '/api/workflows/run-1/actions/step-1/confirm',
      requiresConfirmationToken: true,
    },
  });

  assert.equal(normalized?.cardType, 'future_task');
  assert.equal(normalized?.editableContent?.kind, 'future_task');
  assert.equal(normalized?.draftHash, 'hash-1');
});
