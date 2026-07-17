import assert from 'node:assert/strict';
import test from 'node:test';
import {
  isRelevantInternalWikiAnswerText,
  normalizeHomeAssistantDisplay,
  normalizeHomeUIEvent,
  validateHomeAssistantDisplay,
  buildSourceSummaryFromContextPacket,
  type MiraArchivePreviewCardPayload,
  type MemoryProposalCardPayload,
  type ScheduledTaskListCardPayload,
  type TrackingSubscriptionListCardPayload,
} from './home-display.js';
import {
  type PresentationDraftCardPayload,
} from './presentation.js';

function baseDisplay(cardType: string, payload: unknown) {
  return {
    schemaVersion: 'home-display.v1',
    intentClass: 'general_answer',
    cardType,
    title: '测试卡片',
    payload,
    state: 'ready',
    validation: {
      schemaValid: true,
      provenanceValid: true,
      permissionValid: true,
      warnings: [],
    },
  };
}

test('normalizeHomeAssistantDisplay accepts strict data interpretation payload', () => {
  const display = normalizeHomeAssistantDisplay(
    baseDisplay('data_interpretation', {
      inputTitle: 'DEG volcano',
      inputType: 'analysis_artifact',
      observations: ['EGFR up'],
      caveats: ['n=1'],
      nextSteps: ['Run qPCR'],
    }),
  );

  assert.equal(display?.cardType, 'data_interpretation');
  assert.equal(display?.payload && 'inputTitle' in display.payload ? display.payload.inputTitle : '', 'DEG volcano');
});

test('normalizeHomeAssistantDisplay preserves answer card actions', () => {
  const display = normalizeHomeAssistantDisplay(
    baseDisplay('answer', {
      markdown: '已生成候选记忆，可在 [Memory Console](/memory?entry=entry-1) 处理。',
      actions: [
        { id: 'open_auto_memory_candidate', label: '打开 Memory Console', href: '/memory?entry=entry-1' },
        { id: '', label: 'bad', href: '/bad' },
      ],
    }),
  );

  assert.equal(display?.cardType, 'answer');
  assert.deepEqual(display?.payload && 'actions' in display.payload ? display.payload.actions : [], [
    { id: 'open_auto_memory_candidate', label: '打开 Memory Console', href: '/memory?entry=entry-1' },
  ]);
});

test('buildSourceSummaryFromContextPacket filters candidate refs to explicit used source refs', () => {
  const sourceSummary = buildSourceSummaryFromContextPacket(
    {
      schemaVersion: 'home-context-packet/v1',
      projectScope: 'none',
      intent: {
        primaryIntent: 'internal_knowledge',
        secondaryIntents: [],
        confidenceByIntent: { internal_knowledge: 0.9 },
        rationale: 'test',
      },
      preferences: {
        language: 'zh',
        detailLevel: 3,
        outputFormat: 'mixed',
        citationDensity: 'normal',
        evidenceMode: 'mixed',
        preferredDatabases: [],
        defaultDateRange: 'recent',
        lowRelevancePolicy: 'collapse',
        proactiveSuggestions: true,
        allowDraftActions: true,
        requireConfirmationBeforeWrite: true,
        showContextTrace: true,
        promptToAttachContext: true,
        autoUseCurrentAttachments: true,
        autoUseRecentProjects: false,
      },
      contextRefs: [
        { type: 'attachment', id: 'attachment-1', title: 'upload notes.txt' },
        { type: 'mira_node', id: 'mira-1', title: 'paper test' },
      ],
      attachments: [],
      attachedSources: [
        {
          ref: { type: 'attachment', id: 'attachment-1', title: 'upload notes.txt' },
          title: 'upload notes.txt',
          summary: 'Uploaded attachment.',
        },
        {
          ref: { type: 'mira_node', id: 'mira-1', title: 'paper test' },
          title: 'paper test',
          summary: 'Mira document.',
        },
      ],
      blockedSources: [],
      sourcePlan: {
        externalLiterature: false,
        internalRag: true,
        renderStructuredResponse: false,
        readOnly: true,
        allowDraft: true,
        requireConfirmationBeforeWrite: true,
        preferredTools: [],
        blockedTools: [],
        reasons: [],
      },
      actionPolicy: {
        readOnly: true,
        allowDraftActions: true,
        requireConfirmationBeforeWrite: true,
        allowCommitWrite: false,
        allowedActionKinds: ['read'],
        blockedActionKinds: [],
        reasons: [],
      },
      workflow: {
        stage: 'none',
        workingSet: [],
        openDecisions: [],
        nextActions: [],
      },
      selectedTools: [],
      trace: [],
      replay: {
        classifierVersion: 'test',
        sourcePlanVersion: 'test',
        resolverVersions: {},
        preferenceSources: [],
        toolGating: { enabledTools: [], blockedTools: [], violations: [] },
        contextPacking: {
          budgetChars: 0,
          usedChars: 0,
          packedSources: [],
          truncated: false,
        },
        retrievals: { internalRag: [], externalLiterature: [] },
      },
    },
    [],
    undefined,
    {
      usedSourceRefs: ['mira_node:mira-1'],
    },
  );

  assert.deepEqual(
    sourceSummary?.usedSources.map((source) => `${source.type}:${source.id}`),
    ['mira_node:mira-1'],
  );

  const emptySourceSummary = buildSourceSummaryFromContextPacket(
    {
      schemaVersion: 'home-context-packet/v1',
      projectScope: 'none',
      intent: {
        primaryIntent: 'internal_knowledge',
        secondaryIntents: [],
        confidenceByIntent: { internal_knowledge: 0.9 },
        rationale: 'test',
      },
      preferences: {
        language: 'zh',
        detailLevel: 3,
        outputFormat: 'mixed',
        citationDensity: 'normal',
        evidenceMode: 'mixed',
        preferredDatabases: [],
        defaultDateRange: 'recent',
        lowRelevancePolicy: 'collapse',
        proactiveSuggestions: true,
        allowDraftActions: true,
        requireConfirmationBeforeWrite: true,
        showContextTrace: true,
        promptToAttachContext: true,
        autoUseCurrentAttachments: true,
        autoUseRecentProjects: false,
      },
      contextRefs: [{ type: 'attachment', id: 'attachment-1', title: 'upload notes.txt' }],
      attachments: [],
      attachedSources: [
        {
          ref: { type: 'attachment', id: 'attachment-1', title: 'upload notes.txt' },
          title: 'upload notes.txt',
          summary: 'Uploaded attachment.',
        },
      ],
      blockedSources: [],
      sourcePlan: {
        externalLiterature: false,
        internalRag: true,
        renderStructuredResponse: false,
        readOnly: true,
        allowDraft: true,
        requireConfirmationBeforeWrite: true,
        preferredTools: [],
        blockedTools: [],
        reasons: [],
      },
      actionPolicy: {
        readOnly: true,
        allowDraftActions: true,
        requireConfirmationBeforeWrite: true,
        allowCommitWrite: false,
        allowedActionKinds: ['read'],
        blockedActionKinds: [],
        reasons: [],
      },
      workflow: {
        stage: 'none',
        workingSet: [],
        openDecisions: [],
        nextActions: [],
      },
      selectedTools: [],
      trace: [],
      replay: {
        classifierVersion: 'test',
        sourcePlanVersion: 'test',
        resolverVersions: {},
        preferenceSources: [],
        toolGating: { enabledTools: [], blockedTools: [], violations: [] },
        contextPacking: {
          budgetChars: 0,
          usedChars: 0,
          packedSources: [],
          truncated: false,
        },
        retrievals: { internalRag: [], externalLiterature: [] },
      },
    },
    [],
    undefined,
    { usedSourceRefs: [] },
  );

  assert.deepEqual(emptySourceSummary?.usedSources, []);

  const implicitSourceSummary = buildSourceSummaryFromContextPacket(
    {
      schemaVersion: 'home-context-packet/v1',
      projectScope: 'none',
      intent: {
        primaryIntent: 'internal_knowledge',
        secondaryIntents: [],
        confidenceByIntent: { internal_knowledge: 0.9 },
        rationale: 'test',
      },
      preferences: {
        language: 'zh',
        detailLevel: 3,
        outputFormat: 'mixed',
        citationDensity: 'normal',
        evidenceMode: 'mixed',
        preferredDatabases: [],
        defaultDateRange: 'recent',
        lowRelevancePolicy: 'collapse',
        proactiveSuggestions: true,
        allowDraftActions: true,
        requireConfirmationBeforeWrite: true,
        showContextTrace: true,
        promptToAttachContext: true,
        autoUseCurrentAttachments: true,
        autoUseRecentProjects: false,
      },
      contextRefs: [{ type: 'attachment', id: 'attachment-1', title: 'upload notes.txt' }],
      attachments: [],
      attachedSources: [
        {
          ref: { type: 'attachment', id: 'attachment-1', title: 'upload notes.txt' },
          title: 'upload notes.txt',
          summary: 'Uploaded attachment.',
        },
      ],
      blockedSources: [],
      sourcePlan: {
        externalLiterature: false,
        internalRag: true,
        renderStructuredResponse: false,
        readOnly: true,
        allowDraft: true,
        requireConfirmationBeforeWrite: true,
        preferredTools: [],
        blockedTools: [],
        reasons: [],
      },
      actionPolicy: {
        readOnly: true,
        allowDraftActions: true,
        requireConfirmationBeforeWrite: true,
        allowCommitWrite: false,
        allowedActionKinds: ['read'],
        blockedActionKinds: [],
        reasons: [],
      },
      workflow: {
        stage: 'none',
        workingSet: [],
        openDecisions: [],
        nextActions: [],
      },
      selectedTools: [],
      trace: [],
      replay: {
        classifierVersion: 'test',
        sourcePlanVersion: 'test',
        resolverVersions: {},
        preferenceSources: [],
        toolGating: { enabledTools: [], blockedTools: [], violations: [] },
        contextPacking: {
          budgetChars: 0,
          usedChars: 0,
          packedSources: [],
          truncated: false,
        },
        retrievals: { internalRag: [], externalLiterature: [] },
      },
    },
    [],
  );

  assert.deepEqual(implicitSourceSummary?.usedSources, []);
});

test('normalizeHomeAssistantDisplay accepts memory clarification and quiet preference cards', () => {
  const clarify = normalizeHomeAssistantDisplay(
    baseDisplay('memory_context_clarification', {
      question: '我找到几个可能的历史上下文，需要你确认要继续哪一个。',
      candidates: [
        {
          id: 'candidate-1',
          title: '上次说回答默认用中文',
          summary: '历史对话中提到回答默认用中文。',
          sourceType: 'conversation',
          sessionId: 'session-1',
          score: 0.82,
        },
      ],
      actions: [
        { id: 'select_context', label: '选择这个上下文', candidateId: 'candidate-1' },
        { id: 'ignore_memory', label: '忽略这些记忆' },
      ],
    }),
  );
  const quiet = normalizeHomeAssistantDisplay(
    baseDisplay('quiet_preference_notice', {
      markdown: '已更新回答偏好：结构化输出。',
      decision: {
        schemaVersion: 'memory-quiet-decision/v1',
        action: 'auto_apply_preference',
        riskClass: 'personal_preference',
        sourceEntryId: 'candidate-1',
        appliedPreferenceKeys: ['outputFormat'],
        undoToken: 'preference:outputFormat',
        userVisibleSummary: '已更新回答偏好：结构化输出。',
      },
      actions: [
        { id: 'open_auto_memory_candidate', label: '打开 Memory Console', href: '/memory?entry=candidate-1' },
      ],
    }),
  );

  assert.equal(clarify?.cardType, 'memory_context_clarification');
  assert.equal(
    clarify?.payload && 'candidates' in clarify.payload ? clarify.payload.candidates[0]?.id : '',
    'candidate-1',
  );
  assert.equal(quiet?.cardType, 'quiet_preference_notice');
  assert.equal(
    quiet?.payload && 'decision' in quiet.payload ? quiet.payload.decision.action : '',
    'auto_apply_preference',
  );
});

test('normalizeHomeAssistantDisplay accepts presentation draft cards', () => {
  const display = normalizeHomeAssistantDisplay(
    baseDisplay('presentation_draft', {
      jobId: 'job-1',
      draftId: 'draft-1',
      reportType: 'group_meeting',
      title: 'EGFR 组会汇报',
      slideCount: 5,
      sourceCount: 3,
      blockedSourceCount: 1,
      status: 'needs_review',
      validation: {
        status: 'warning',
        warnings: ['标题过长'],
        missingItems: [],
        overflowSlideIds: [],
      },
      themeId: 'system-scientific-default',
      revision: 1,
      sidePanelState: 'open',
      previewSlides: [
        {
          id: 'slide-1',
          slideType: 'cover',
          title: 'EGFR 组会汇报',
          bullets: ['组会汇报'],
          sourceTitles: ['EGFR notebook'],
          assetCount: 0,
          riskFlags: [],
        },
      ],
      actions: [
        { id: 'open_draft', label: '查看草稿' },
        { id: 'confirm_export', label: '确认导出' },
      ],
    } satisfies PresentationDraftCardPayload),
  );

  assert.equal(display?.cardType, 'presentation_draft');
  assert.equal(
    display?.payload && 'slideCount' in display.payload ? display.payload.slideCount : 0,
    5,
  );
});

test('normalizeHomeAssistantDisplay rejects malformed presentation draft cards', () => {
  assert.equal(
    normalizeHomeAssistantDisplay(baseDisplay('presentation_draft', {
      draftId: 'draft-1',
      title: '缺少 jobId',
    })),
    null,
  );
  assert.equal(
    normalizeHomeAssistantDisplay(baseDisplay('presentation_draft', {
      jobId: 'job-1',
      draftId: 'draft-1',
      slideCount: 2,
    })),
    null,
  );
});

test('normalizeHomeAssistantDisplay rejects malformed science card payloads', () => {
  assert.equal(normalizeHomeAssistantDisplay(baseDisplay('data_interpretation', { observations: ['bad'] })), null);
  assert.equal(normalizeHomeAssistantDisplay(baseDisplay('experiment_plan', { steps: ['bad'] })), null);
  assert.equal(normalizeHomeAssistantDisplay(baseDisplay('workflow_overview', { goal: 'EGFR' })), null);
});

test('normalizeHomeAssistantDisplay normalizes workflow cards', () => {
  const overview = normalizeHomeAssistantDisplay(
    baseDisplay('workflow_overview', {
      goal: 'EGFR closed loop',
      currentStage: 'research',
      stages: [{ id: 'research', title: '调研', status: 'active', summary: '正在调研' }],
      nextActions: ['继续文献检索'],
    }),
  );
  const status = normalizeHomeAssistantDisplay(
    baseDisplay('workflow_status', {
      runId: 'run-1',
      currentStage: 'validation',
      status: 'waiting_confirmation',
      blockers: ['需要确认写入'],
      resumeActions: ['确认后继续'],
    }),
  );

  assert.equal(overview?.cardType, 'workflow_overview');
  assert.equal(status?.cardType, 'workflow_status');
});

test('normalizeHomeAssistantDisplay accepts memory proposal cards', () => {
  const remember = normalizeHomeAssistantDisplay(
    baseDisplay('memory_proposal', {
      mode: 'remember',
      title: '记住这条长期记忆',
      summary: '确认后会创建待确认长期记忆。',
      proposal: {
        statement: '回答默认用中文。',
        scope: 'user',
        kind: 'decision_principle',
        confidence: 0.82,
        evidence: [{ sourceType: 'message', sourceId: 'message-1', summary: '用户显式要求记住。' }],
      },
      resolution: {
        status: 'confirmed',
        entryId: 'memory-entry-1',
        label: '已加入待确认队列',
      },
      entryId: 'memory-entry-1',
      editable: true,
      sourceSummary: {
        source: 'agent_candidate',
        label: 'Agent 提名',
        evidenceSourceType: 'message',
        sourceId: 'message-1',
        summary: '从本轮对话提炼。',
      },
      scopeSuggestion: {
        scope: 'project',
        confidence: 0.76,
        requiresElevatedConfirmation: false,
        reason: '提到了当前项目。',
      },
      triage: {
        decision: 'no_action',
        riskLevel: 'none',
        confidence: 0.91,
        summary: '未发现重复或冲突。',
      },
      matches: [],
      actions: [
        { id: 'confirm', label: '确认记住' },
        { id: 'edit', label: '编辑后确认' },
        { id: 'reject', label: '不记住' },
      ],
    }),
  );
  const forget = normalizeHomeAssistantDisplay(
    baseDisplay('memory_proposal', {
      mode: 'forget',
      proposal: {
        statement: '回答默认用中文。',
        selectedEntryId: 'entry-1',
      },
      matches: [
        {
          id: 'entry-1',
          statement: '回答默认用中文。',
          scope: 'user',
          kind: 'decision_principle',
          status: 'confirmed',
          score: 0.95,
          confidence: 88,
          evidenceCount: 2,
        },
      ],
    }),
  );

  assert.equal(remember?.cardType, 'memory_proposal');
  assert.equal(
    remember?.payload && 'proposal' in remember.payload
      ? remember.payload.proposal.confidence
      : 0,
    82,
  );
  assert.equal(
    remember?.payload && 'entryId' in remember.payload
      ? remember.payload.entryId
      : '',
    'memory-entry-1',
  );
  assert.equal(
    remember?.payload && 'sourceSummary' in remember.payload
      ? remember.payload.sourceSummary?.source
      : '',
    'agent_candidate',
  );
  assert.equal(
    remember?.payload && 'scopeSuggestion' in remember.payload
      ? remember.payload.scopeSuggestion?.confidence
      : 0,
    76,
  );
  assert.equal(
    remember?.payload && 'triage' in remember.payload
      ? remember.payload.triage?.confidence
      : 0,
    91,
  );
  assert.equal(
    (remember?.payload as MemoryProposalCardPayload | undefined)?.resolution?.label || '',
    '已加入待确认队列',
  );
  assert.equal(forget?.cardType, 'memory_proposal');
  assert.equal(
    forget?.payload && 'matches' in forget.payload
      ? forget.payload.matches[0]?.score
      : 0,
    95,
  );
});

test('normalizeHomeAssistantDisplay accepts tracking subscription preview cards', () => {
  const display = normalizeHomeAssistantDisplay(
    baseDisplay('tracking_subscription_preview', {
      sourceName: 'PubMed 文献 · EGFR resistance',
      sourceType: 'pubmed',
      keywords: ['EGFR resistance', 'C797S'],
      frequency: 'daily',
      lookbackDays: 45,
      projectNodeIds: ['project-1'],
      confirmation: {
        status: 'pending',
      },
    }),
  );

  assert.equal(display?.cardType, 'tracking_subscription_preview');
  assert.equal(
    display?.payload && 'sourceType' in display.payload
      ? display.payload.sourceType
      : '',
    'pubmed',
  );
  assert.deepEqual(
    display?.payload && 'keywords' in display.payload
      ? display.payload.keywords
      : [],
    ['EGFR resistance', 'C797S'],
  );
  assert.equal(
    display?.payload && 'lookbackDays' in display.payload
      ? display.payload.lookbackDays
      : 0,
    45,
  );
});

test('normalizeHomeAssistantDisplay accepts tracking subscription list cards', () => {
  const display = normalizeHomeAssistantDisplay(
    baseDisplay('tracking_subscription_list', {
      title: '选择要删除的订阅源',
      summary: '找到 1 条订阅源详细信息，请从下方列表中确认目标。',
      mode: 'delete_candidates',
      total: 1,
      enabledTotal: 1,
      items: [
        {
          id: 'sub-1',
          name: 'PubMed 文献 · EGFR resistance',
          type: 'pubmed',
          enabled: true,
          config: {
            keywords: ['EGFR resistance'],
            frequency: 'daily',
            lookbackDays: 30,
          },
          totalItems: 12,
          unreadItems: 3,
          savedItems: 1,
          due: false,
        },
      ],
    }),
  );

  assert.equal(display?.cardType, 'tracking_subscription_list');
  assert.equal(display?.payload && 'total' in display.payload ? display.payload.total : 0, 1);
  const payload = display?.payload as TrackingSubscriptionListCardPayload | undefined;
  assert.equal(payload?.mode, 'delete_candidates');
  assert.deepEqual(payload?.items[0]?.keywords ?? [], ['EGFR resistance']);
});

test('normalizeHomeAssistantDisplay accepts tracking subscription delete confirm cards', () => {
  const display = normalizeHomeAssistantDisplay(
    baseDisplay('tracking_subscription_delete_confirm', {
      subscriptionId: 'sub-1',
      sourceName: 'PubMed 文献 · EGFR resistance',
      sourceType: 'pubmed',
      enabled: true,
      keywords: ['EGFR resistance'],
      frequency: 'daily',
      lookbackDays: 30,
      createdAt: '2026-05-16T01:00:00.000Z',
      lastFetchAt: '2026-05-17T01:00:00.000Z',
      totalItems: 12,
      unreadItems: 3,
      savedItems: 1,
      due: false,
      confirmation: { status: 'pending', subscriptionId: 'sub-1' },
    }),
  );

  assert.equal(display?.cardType, 'tracking_subscription_delete_confirm');
  assert.equal(display?.payload && 'subscriptionId' in display.payload ? display.payload.subscriptionId : '', 'sub-1');
  assert.deepEqual(display?.payload && 'keywords' in display.payload ? display.payload.keywords : [], ['EGFR resistance']);
});

test('normalizeHomeAssistantDisplay accepts scheduled task cards', () => {
  const create = normalizeHomeAssistantDisplay(
    baseDisplay('scheduled_task_create_preview', {
      name: 'EGFR resistance 文献摘要',
      prompt: '生成 EGFR resistance 文献摘要',
      scheduleKind: 'daily',
      scheduleConfig: { time: '09:00' },
      scheduleLabel: '每天 09:00',
      timezone: 'Asia/Shanghai',
      titleTemplate: '{taskName} - {date}',
      nextRunAt: '2026-05-17T01:00:00.000Z',
      warnings: [],
      confirmation: { status: 'pending' },
    }),
  );
  const list = normalizeHomeAssistantDisplay(
    baseDisplay('scheduled_task_list', {
      title: '定时任务',
      mode: 'list',
      total: 1,
      activeTotal: 1,
      items: [
        {
          id: 'task-1',
          name: 'EGFR resistance 文献摘要',
          prompt: '生成 EGFR resistance 文献摘要',
          matchReason: '任务名精确匹配；时间匹配：每天 09:00',
          status: 'active',
          scheduleKind: 'daily',
          scheduleLabel: '每天 09:00',
          timezone: 'Asia/Shanghai',
          nextRunAt: '2026-05-17T01:00:00.000Z',
        },
      ],
    }),
  );
  const del = normalizeHomeAssistantDisplay(
    baseDisplay('scheduled_task_delete_confirm', {
      taskId: 'task-1',
      name: 'EGFR resistance 文献摘要',
      status: 'active',
      scheduleKind: 'daily',
      scheduleLabel: '每天 09:00',
      timezone: 'Asia/Shanghai',
      confirmation: { status: 'pending' },
    }),
  );

  assert.equal(create?.cardType, 'scheduled_task_create_preview');
  assert.equal(create?.payload && 'scheduleConfig' in create.payload ? create.payload.scheduleConfig.time : '', '09:00');
  assert.equal(list?.cardType, 'scheduled_task_list');
  const listPayload = list?.payload as ScheduledTaskListCardPayload | undefined;
  assert.equal(listPayload?.items[0]?.prompt ?? '', '生成 EGFR resistance 文献摘要');
  assert.equal(listPayload?.items[0]?.matchReason ?? '', '任务名精确匹配；时间匹配：每天 09:00');
  assert.equal(del?.cardType, 'scheduled_task_delete_confirm');
  assert.equal(del?.payload && 'taskId' in del.payload ? del.payload.taskId : '', 'task-1');
});

test('normalizeHomeAssistantDisplay preserves non-confirmation memory proposal resolutions', () => {
  const display = normalizeHomeAssistantDisplay(
    baseDisplay('memory_proposal', {
      mode: 'remember',
      title: '记住这条长期记忆',
      summary: '已打开 Memory Console。',
      proposal: {
        statement: '回答默认用中文。',
        scope: 'user',
        kind: 'decision_principle',
        confidence: 80,
        evidence: [],
      },
      actions: [
        { id: 'confirm', label: '确认记住' },
        { id: 'snooze', label: '稍后处理' },
        { id: 'open_console', label: '打开 Memory Console' },
      ],
      resolution: {
        status: 'opened_in_console',
        entryId: 'memory-entry-1',
        label: '已打开 Memory Console',
      },
    }),
  );

  assert.equal((display?.payload as MemoryProposalCardPayload | undefined)?.resolution?.status, 'opened_in_console');
});

test('normalizeHomeAssistantDisplay accepts internal wiki search cards', () => {
  const display = normalizeHomeAssistantDisplay(
    baseDisplay('internal_wiki_search', {
      query: '我们实验室 EGFR protocol',
      answerMarkdown: '内部文档里有 EGFR 相关 protocol。',
      results: [
        {
          id: 'wiki-node-1',
          title: 'EGFR protocol',
          href: '/knowledge/wiki2?node=wiki-node-1',
          snippet: 'EGFR qPCR protocol and controls',
          pages: [2, 1, 2],
          sourceType: 'wiki',
          createdByName: 'Alice',
          updatedAt: '2026-05-05T00:00:00.000Z',
          documentKind: 'protocol',
        },
      ],
      filterSummary: {
        label: '我的 · Protocol',
        appliedFilters: ['owner:me', 'documentKind:protocol'],
        relaxedFilters: [],
        warnings: [],
        sort: 'hybrid',
      },
    }),
  );

  assert.equal(display?.cardType, 'internal_wiki_search');
  assert.equal(
    display?.payload && 'results' in display.payload
      ? display.payload.results[0]?.pages.join(',')
      : '',
    '1,2',
  );
  assert.equal(
    display?.payload && 'filterSummary' in display.payload
      ? display.payload.filterSummary?.appliedFilters.join(',')
      : '',
    'owner:me,documentKind:protocol',
  );
});

test('normalizeHomeAssistantDisplay accepts internal wiki empty-state cards', () => {
  const display = normalizeHomeAssistantDisplay(
    baseDisplay('internal_wiki_search', {
      query: '搜索我的最近实验笔记',
      filterSummary: {
        label: '我的 · 最近 90 天优先 · 实验笔记',
        appliedFilters: ['owner:me', 'time:recent_90d', 'documentKind:experiment_note'],
        relaxedFilters: [],
        warnings: [],
        sort: 'hybrid',
      },
      emptyState: {
        title: '未找到可用结果',
        description: '当前过滤条件下没有检索到内部文档。',
        recoveryActions: ['放宽时间范围', '改用更宽泛的关键词'],
      },
      results: [],
    }),
  );

  assert.equal(display?.cardType, 'internal_wiki_search');
  assert.equal(display?.payload && 'results' in display.payload ? display.payload.results.length : -1, 0);
  assert.equal(
    display?.payload && 'emptyState' in display.payload
      ? display.payload.emptyState?.title
      : '',
    '未找到可用结果',
  );
});

test('isRelevantInternalWikiAnswerText suppresses unrelated internal search answers', () => {
  assert.equal(
    isRelevantInternalWikiAnswerText('未找到与当前问题高度相关的内部 Wiki 或 Mira 文档记录。'),
    false,
  );
  assert.equal(
    isRelevantInternalWikiAnswerText('内部文档显示 EGFR protocol 需要包含 untreated control。'),
    true,
  );
});

test('normalizeHomeAssistantDisplay accepts P1 decision and scientific review cards', () => {
  const cases = [
    baseDisplay('candidate_ranking', {
      question: '哪些候选值得推进？',
      candidates: [
        {
          id: 'candidate-1',
          title: 'MET bypass',
          rank: 1,
          confidence: 'high',
          support: ['文献支持'],
          against: ['缺少本地验证'],
          nextStep: '设计验证',
        },
      ],
    }),
    baseDisplay('validation_draft', {
      packageTitle: 'EGFR 验证方案',
      hypothesis: 'MET bypass 驱动耐药',
      readouts: ['qPCR'],
      samplesAndControls: ['treated vs control'],
      acceptanceCriteria: ['fold change > 2'],
      risks: ['样本不足'],
      confirmationRequired: true,
    }),
    baseDisplay('evidence_propose', {
      claim: 'MET bypass 支持耐药机制',
      confidence: 'medium',
      supportingEvidence: ['PMID:1'],
      opposingEvidence: [],
      gaps: ['缺少本地验证'],
      clueOnly: true,
    }),
    baseDisplay('mira_archive_preview', {
      targetPath: '/EGFR/耐药',
      mode: 'append',
      title: 'EGFR 证据摘要',
      sections: [{ heading: '结论', summary: '值得验证' }],
      sourceRefs: ['PMID:1'],
      warnings: ['写入前确认'],
    }),
    baseDisplay('data_quality', {
      datasetTitle: 'DEG result',
      datasetType: 'analysis_artifact',
      readiness: 'needs_review',
      checks: [{ label: '必需列', status: 'warning', detail: '缺少 padj' }],
      missingFields: ['padj'],
      recommendedActions: ['补充结果'],
    }),
    baseDisplay('workflow_decision', {
      prompt: '下一步推进哪个方向？',
      recommendedOptionId: 'validation',
      options: [
        {
          id: 'validation',
          title: '进入验证设计',
          description: '把候选机制转成验证方案',
          tradeoffs: ['需要样本信息'],
          nextAction: '生成 Validation Package',
          requiresConfirmation: true,
        },
      ],
    }),
  ];

  for (const item of cases) {
    const display = normalizeHomeAssistantDisplay(item);
    assert.equal(display?.cardType, item.cardType);
  }
});

test('normalizeHomeAssistantDisplay preserves mira archive preview confirmation metadata', () => {
  const display = normalizeHomeAssistantDisplay(
    baseDisplay('mira_archive_preview', {
      draftId: 'message-1',
      targetPath: '/EGFR/耐药机制',
      targetParentNodeId: 'parent-1',
      targetWikiNodeId: 'wiki-node-1',
      mode: 'append',
      title: 'EGFR 证据摘要',
      markdown: '## 结论\n\n值得验证',
      sections: [{ heading: '结论', summary: '值得验证' }],
      sourceRefs: ['PMID:1'],
      warnings: ['写入前确认'],
      editorMode: 'side_panel',
      editorState: 'dirty',
      editorUpdatedAt: '2026-05-15T08:00:00.000Z',
      confirmation: {
        actionId: 'action-1',
        workflowRunId: 'run-1',
        workflowStepId: 'step-1',
        confirmationToken: 'token-1',
        draftHash: 'hash-1',
        status: 'waiting_approval',
        confirmAction: { method: 'POST', path: '/confirm', requiresConfirmationToken: true },
        cancelAction: { method: 'POST', path: '/cancel', requiresConfirmationToken: false },
        draftSummary: '归档 EGFR 证据摘要',
        targetLocation: '/EGFR/耐药机制',
      },
    }),
  );

  assert.equal(display?.cardType, 'mira_archive_preview');
  assert.equal(
    display?.payload && 'draftId' in display.payload
      ? display.payload.draftId
      : '',
    'message-1',
  );
  assert.equal(
    display?.payload && 'targetParentNodeId' in display.payload
      ? display.payload.targetParentNodeId
      : '',
    'parent-1',
  );
  assert.equal(
    display?.payload && 'targetWikiNodeId' in display.payload
      ? display.payload.targetWikiNodeId
      : '',
    'wiki-node-1',
  );
  assert.equal(
    display?.payload && 'editorMode' in display.payload
      ? display.payload.editorMode
      : '',
    'side_panel',
  );
  assert.equal(
    display?.payload && 'editorState' in display.payload
      ? display.payload.editorState
      : '',
    'dirty',
  );
  assert.equal(
    display?.payload && 'editorUpdatedAt' in display.payload
      ? display.payload.editorUpdatedAt
      : '',
    '2026-05-15T08:00:00.000Z',
  );
  const payload = display?.payload as MiraArchivePreviewCardPayload | undefined;
  assert.equal(payload?.confirmation?.actionId, 'action-1');
  assert.equal(payload?.confirmation?.status, 'waiting_approval');
  assert.equal(payload?.confirmation?.confirmAction?.path, '/confirm');
});

test('normalizeHomeAssistantDisplay derives mira confirmation metadata from home draft envelope', () => {
  const display = normalizeHomeAssistantDisplay(
    baseDisplay('mira_archive_preview', {
      draftEnvelope: {
        schemaVersion: 'home-draft-envelope/v1',
        draftId: 'draft-1',
        objectType: 'mira_document',
        action: 'archive',
        targetModule: 'mira',
        draftSchemaVersion: 'mira_archive_preview/v1',
        draft: {
          title: 'EGFR 证据摘要',
          markdown: '## 结论\n\n值得验证',
        },
        sourceRefs: [],
        provenance: {
          toolName: 'draft_mira_document',
          runId: 'run-1',
          createdAt: '2026-05-30T00:00:00.000Z',
        },
        validation: {
          status: 'valid',
          missingFields: [],
          warnings: [],
        },
        confirmation: {
          required: true,
          confirmRoute: '/api/mira/drafts/draft-1/confirm',
          confirmMethod: 'POST',
          confirmPayload: { draftId: 'draft-1' },
          cancelRoute: '/api/mira/drafts/draft-1/cancel',
          confirmationToken: 'token-1',
          draftHash: 'hash-1',
          expiresAt: '2026-05-31T00:00:00.000Z',
        },
      },
      draftId: 'draft-1',
      targetPath: '当前 Mira 工作目录',
      mode: 'create',
      title: 'EGFR 证据摘要',
      markdown: '## 结论\n\n值得验证',
      sections: [{ heading: '结论', summary: '值得验证' }],
      sourceRefs: ['本轮对话'],
      warnings: ['确认前不会写入 Mira 文档。'],
      editorMode: 'side_panel',
      editorState: 'ready',
    }),
  );

  const payload = display?.payload as MiraArchivePreviewCardPayload | undefined;
  assert.equal(payload?.draftEnvelope?.draftId, 'draft-1');
  assert.equal(payload?.confirmation?.actionId, 'draft-1');
  assert.equal(payload?.confirmation?.confirmationToken, 'token-1');
  assert.equal(payload?.confirmation?.draftHash, 'hash-1');
  assert.equal(payload?.confirmation?.confirmAction?.path, '/api/mira/drafts/draft-1/confirm');
  assert.equal(payload?.confirmation?.cancelAction?.path, '/api/mira/drafts/draft-1/cancel');
});

test('normalizeHomeAssistantDisplay defaults malformed mira editor fields safely', () => {
  const display = normalizeHomeAssistantDisplay(
    baseDisplay('mira_archive_preview', {
      targetPath: '/EGFR/耐药机制',
      mode: 'append',
      title: 'EGFR 证据摘要',
      markdown: '## 结论\n\n值得验证',
      sections: [{ heading: '结论', summary: '值得验证' }],
      sourceRefs: [],
      warnings: [],
      editorMode: 'inline_editor',
      editorState: 'corrupt',
    }),
  );

  assert.equal(display?.cardType, 'mira_archive_preview');
  assert.equal(
    display?.payload && 'editorMode' in display.payload
      ? display.payload.editorMode
      : '',
    'compact_card',
  );
  assert.equal(
    display?.payload && 'editorState' in display.payload
      ? display.payload.editorState
      : '',
    'ready',
  );
});

test('validateHomeAssistantDisplay and normalizeHomeUIEvent fail closed', () => {
  const invalid = validateHomeAssistantDisplay(baseDisplay('workflow_step', { title: 'missing summary' }));
  assert.equal(invalid.ok, false);

  const event = normalizeHomeUIEvent({
    type: 'display_done',
    display: baseDisplay('answer', { markdown: 'ok' }),
  });
  assert.equal(event?.type, 'display_done');

  assert.equal(
    normalizeHomeUIEvent({
      type: 'display_done',
      display: baseDisplay('workflow_step', { title: 'missing summary' }),
    }),
    null,
  );
});
