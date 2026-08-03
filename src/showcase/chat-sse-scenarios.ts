export interface ChatSseShowcaseEvent {
  event: string;
  label: string;
  data: Record<string, unknown>;
}

export interface ChatSseShowcaseScenario {
  id: string;
  name: string;
  description: string;
  userMessage: string;
  events: readonly ChatSseShowcaseEvent[];
}

const literatureClarificationEvents: readonly ChatSseShowcaseEvent[] = [
  {
    event: "meta",
    label: "建立运行与会话",
    data: {
      type: "meta",
      runId: "c6158588-ac75-410d-9064-3a0ca0545a97",
      sessionId: "2720af16-7f17-4d0f-9777-00d24911f4b9",
      selectedSkillSlugs: [],
      attachments: [],
    },
  },
  {
    event: "task_trace",
    label: "开始分析上下文",
    data: {
      type: "task_trace",
      step: {
        id: "context",
        title: "分析任务和上下文",
        status: "running",
        category: "context",
        serverElapsedMs: 531,
        sequence: 1,
      },
    },
  },
  {
    event: "task_trace",
    label: "完成上下文分析",
    data: {
      type: "task_trace",
      step: {
        id: "context",
        title: "已完成上下文分析",
        status: "completed",
        category: "context",
        detail: "可用工具 45 个",
        serverElapsedMs: 575,
        sequence: 2,
      },
    },
  },
  {
    event: "display_patch",
    label: "写入流式展示摘要",
    data: {
      type: "display_patch",
      patch: {
        summary: "已完成意图、上下文和工具边界判断。业务执行由运行时工具循环推进。",
        state: "streaming",
      },
    },
  },
  {
    event: "context_packet",
    label: "返回上下文快照",
    data: {
      type: "context_packet",
      contextPacket: {
        summary: "原始 context_packet 体积较大，Showcase 仅保留事件外壳。",
      },
    },
  },
  {
    event: "display_start",
    label: "创建回答展示占位",
    data: {
      type: "display_start",
      display: {
        schemaVersion: "home-display.v1",
        intentClass: "general_answer",
        cardType: "answer",
        title: "正在处理",
        summary: "帮我看看最近有什么文献",
        payload: { markdown: "" },
        state: "streaming",
      },
    },
  },
  {
    event: "task_trace",
    label: "准备生成回复",
    data: {
      type: "task_trace",
      step: {
        id: "generation",
        title: "准备生成回复",
        status: "running",
        category: "generation",
        serverElapsedMs: 585,
        sequence: 3,
      },
    },
  },
  {
    event: "status",
    label: "运行状态：执行中",
    data: { type: "status", status: "running" },
  },
  {
    event: "text",
    label: "返回第一段正文",
    data: {
      type: "text",
      content:
        "我先确认一下当前可用的文献检索能力，然后再看是否需要你补充主题范围；“最近文献”通常至少需要一个疾病、基因、通路或技术关键词来限定。",
    },
  },
  {
    event: "task_trace",
    label: "正文后继续查找能力",
    data: {
      type: "task_trace",
      step: {
        id: "tool:find-skills",
        title: "查找可用能力（find-skills）",
        status: "running",
        category: "planning",
        serverElapsedMs: 11013,
        sequence: 4,
      },
    },
  },
  {
    event: "tool_call",
    label: "调用 find-skills",
    data: {
      type: "tool_call",
      name: "find-skills",
      input: {
        query:
          "检索最近文献，需要外部 PubMed/bioRxiv 文献搜索能力；用户尚未提供主题关键词",
        max_results: 5,
      },
    },
  },
  {
    event: "task_trace",
    label: "选择 PubMed 能力",
    data: {
      type: "task_trace",
      step: {
        id: "skill-select:pubmed-mcp",
        title: "选择能力：检索 PubMed（pubmed-mcp）",
        status: "completed",
        category: "planning",
        detail: "find-skills_result",
        serverElapsedMs: 12879,
        sequence: 5,
      },
    },
  },
  {
    event: "skill_activation",
    label: "激活 pubmed-mcp",
    data: {
      type: "skill_activation",
      name: "pubmed-mcp",
      source: "discovered",
      reason: "find-skills_result",
      score: 11,
    },
  },
  {
    event: "task_trace",
    label: "选择 paper-lookup 能力",
    data: {
      type: "task_trace",
      step: {
        id: "skill-select:paper-lookup",
        title: "选择能力：paper-lookup",
        status: "completed",
        category: "planning",
        detail: "find-skills_result",
        serverElapsedMs: 12882,
        sequence: 6,
      },
    },
  },
  {
    event: "skill_activation",
    label: "激活 paper-lookup",
    data: {
      type: "skill_activation",
      name: "paper-lookup",
      source: "discovered",
      reason: "find-skills_result",
      score: 6,
    },
  },
  {
    event: "task_trace",
    label: "选择 research-lookup 能力",
    data: {
      type: "task_trace",
      step: {
        id: "skill-select:research-lookup",
        title: "选择能力：research-lookup",
        status: "completed",
        category: "planning",
        detail: "find-skills_result",
        serverElapsedMs: 12883,
        sequence: 7,
      },
    },
  },
  {
    event: "skill_activation",
    label: "激活 research-lookup",
    data: {
      type: "skill_activation",
      name: "research-lookup",
      source: "discovered",
      reason: "find-skills_result",
      score: 4,
    },
  },
  {
    event: "task_trace",
    label: "完成能力查找",
    data: {
      type: "task_trace",
      step: {
        id: "tool:find-skills",
        title: "查找可用能力（find-skills）",
        status: "completed",
        category: "planning",
        detail: "找到 3 条结果",
        resultCount: 3,
        serverElapsedMs: 12899,
        sequence: 8,
      },
    },
  },
  {
    event: "tool_result",
    label: "返回能力查找结果",
    data: {
      type: "tool_result",
      name: "find-skills",
      output: { summary: "找到 3 条可调用的文献检索能力" },
      isError: false,
    },
  },
  {
    event: "task_trace",
    label: "请求用户补充信息",
    data: {
      type: "task_trace",
      step: {
        id: "tool:request_user_input",
        title: "执行工具：request_user_input",
        status: "running",
        category: "tool",
        serverElapsedMs: 23997,
        sequence: 9,
      },
    },
  },
  {
    event: "tool_call",
    label: "调用补充信息工具",
    data: {
      type: "tool_call",
      name: "request_user_input",
      input: {
        question:
          "你想看哪个方向的最近文献？请给我一个主题关键词，例如基因/疾病/通路/技术名；也可以指定时间范围，比如最近 7 天、30 天或 1 年。",
        reason:
          "文献检索必须有主题或来源范围；仅“最近文献”会返回过宽、不可解释的结果。",
      },
    },
  },
  {
    event: "clarification_required",
    label: "要求用户补充信息",
    data: {
      type: "clarification_required",
      requestId: "b7f0699b-8a65-4a19-9c0e-c57b40103963",
      summary: {
        question:
          "你想看哪个方向的最近文献？请给我一个主题关键词，例如基因/疾病/通路/技术名；也可以指定时间范围，比如最近 7 天、30 天或 1 年。",
        reason:
          "文献检索必须有主题或来源范围；仅“最近文献”会返回过宽、不可解释的结果。",
        missingItems: [
          "文献主题关键词",
          "可选：时间范围",
          "可选：数据库偏好，如 PubMed 或 bioRxiv",
        ],
        recommendedNext: "pubmed-mcp 或 paper-lookup 文献检索",
      },
    },
  },
  {
    event: "status",
    label: "进入等待补充状态",
    data: { type: "status", status: "awaiting_clarification" },
  },
  {
    event: "done",
    label: "Runtime 输出结束",
    data: { type: "done" },
  },
  {
    event: "context_packet",
    label: "返回最终上下文快照",
    data: {
      type: "context_packet",
      contextPacket: {
        summary: "原始 context_packet 体积较大，Showcase 仅保留事件外壳。",
      },
    },
  },
  {
    event: "task_trace",
    label: "完成生成阶段",
    data: {
      type: "task_trace",
      step: {
        id: "generation",
        title: "生成回复",
        status: "completed",
        category: "generation",
        serverElapsedMs: 24027,
        sequence: 10,
      },
    },
  },
  {
    event: "display_done",
    label: "完成补充信息卡片",
    data: {
      type: "display_done",
      display: {
        schemaVersion: "home-display.v1",
        intentClass: "general_answer",
        cardType: "clarification",
        title: "需要补充信息",
        payload: {
          question:
            "你想看哪个方向的最近文献？请给我一个主题关键词，例如基因/疾病/通路/技术名；也可以指定时间范围，比如最近 7 天、30 天或 1 年。",
          missingItems: [],
        },
        state: "needs_clarification",
      },
    },
  },
];

const displayStyleEvents: readonly ChatSseShowcaseEvent[] = [
  {
    event: "meta",
    label: "建立展示样例会话",
    data: { type: "meta", runId: "showcase-display", sessionId: "showcase-display" },
  },
  {
    event: "clarification_required",
    label: "展示补充信息卡片",
    data: {
      type: "clarification_required",
      requestId: "clarification-1",
      summary: {
        question: "你希望检索哪个疾病、基因、通路或技术方向？",
        reason: "当前主题范围过宽，无法形成可靠结果。",
        missingItems: ["主题关键词", "可选：时间范围"],
        recommendedNext: "输入一个主题后继续检索",
      },
    },
  },
  {
    event: "confirmation_required",
    label: "展示操作确认卡片",
    data: {
      type: "confirmation_required",
      requestId: "confirmation-1",
      summary: {
        toolDisplayName: "保存实验记录",
        inputSummary: "将当前回答保存到项目“EGFR 耐药研究”",
      },
      expiresAt: "2026-08-03T18:00:00Z",
    },
  },
  {
    event: "approval_required",
    label: "展示审批等待卡片",
    data: {
      type: "approval_required",
      requestId: "approval-1",
      approvalRequestId: "approval-request-1",
      summary: {
        toolDisplayName: "更新共享实验数据",
        inputSummary: "该操作需要管理员审批后执行",
      },
      expiresAt: "2026-08-04T10:00:00Z",
    },
  },
  {
    event: "artifact",
    label: "展示生成产物卡片",
    data: {
      type: "artifact",
      artifact: {
        id: "artifact-1",
        type: "report",
        name: "EGFR 文献分析报告.pdf",
        url: "https://example.com/reports/egfr.pdf",
        mimeType: "application/pdf",
      },
    },
  },
  {
    event: "structured_payload",
    label: "展示结构化研究结果",
    data: {
      type: "structured_payload",
      structuredPayload: {
        kind: "research_answer",
        data: {
          title: "EGFR C797S 近期研究",
          summary: ["找到 2 篇高相关文献", "主要关注第四代 EGFR 抑制剂"],
          papers: [
            { title: "Fourth-generation EGFR inhibitors", pmid: "12345678" },
            { title: "Targeting EGFR C797S resistance", doi: "10.1000/example" },
          ],
        },
      },
    },
  },
  {
    event: "display_done",
    label: "展示阻塞恢复卡片",
    data: {
      type: "display_done",
      display: {
        schemaVersion: "home-display.v1",
        intentClass: "general_answer",
        cardType: "blocked",
        title: "暂时无法继续",
        payload: {
          title: "缺少项目访问权限",
          reason: "当前账号不能读取目标项目。",
          blockedSources: ["EGFR 耐药研究"],
          recoveryActions: ["联系项目管理员授权", "切换到有权限的项目"],
        },
        state: "blocked",
      },
    },
  },
];

const miraDocumentDraftEvents: readonly ChatSseShowcaseEvent[] = [
  {
    event: "meta",
    label: "建立文档草稿会话",
    data: {
      type: "meta",
      runId: "showcase-mira-draft-run",
      sessionId: "showcase-mira-draft-session",
    },
  },
  {
    event: "task_trace",
    label: "整理可归档内容",
    data: {
      type: "task_trace",
      step: {
        id: "mira-draft",
        title: "整理文档草稿",
        status: "running",
        category: "generation",
        sequence: 1,
      },
    },
  },
  {
    event: "display_start",
    label: "生成 Mira 文档草稿卡片",
    data: {
      type: "display_start",
      display: {
        schemaVersion: "home-display.v1",
        intentClass: "write_or_archive",
        cardType: "mira_archive_preview",
        title: "实验结果分析草稿",
        summary: "已根据本轮对话整理出一份待归档文档。",
        state: "streaming",
        payload: {
          targetPath: "EGFR 耐药研究",
          projectId: "showcase-project",
          projectKnowledgeType: "experiment_record",
          projectKnowledgeSection: "experiment",
          mode: "create",
          title: "EGFR C797S 实验结果分析",
          markdown:
            "## 实验背景\n\n本轮实验用于验证 **EGFR C797S** 突变对候选抑制剂响应的影响。\n\n## 核心结果\n\n- 处理组细胞活性明显下降\n- 对照组未观察到显著毒性\n- 建议补充 48 小时时间点复验\n\n## 下一步\n\n1. 扩大生物学重复\n2. 补充剂量梯度\n3. 将原始数据关联到本记录",
          sections: [
            { heading: "实验背景", summary: "验证 C797S 突变相关药物响应。" },
            { heading: "核心结果", summary: "候选抑制剂显示出预期活性。" },
          ],
          sourceRefs: ["showcase-message"],
          warnings: [],
          confirmation: {
            actionId: "showcase-mira-draft",
            confirmationToken: "showcase-confirmation-token",
            draftHash: "showcase-draft-hash",
            status: "waiting_approval",
            confirmAction: {
              method: "POST",
              path: "/api/mira/drafts/showcase-mira-draft/confirm",
              requiresConfirmationToken: true,
            },
            cancelAction: {
              method: "POST",
              path: "/api/mira/drafts/showcase-mira-draft/cancel",
              requiresConfirmationToken: false,
            },
          },
        },
      },
    },
  },
  {
    event: "display_done",
    label: "等待用户预览并确认草稿",
    data: {
      type: "display_done",
      display: {
        schemaVersion: "home-display.v1",
        intentClass: "write_or_archive",
        cardType: "mira_archive_preview",
        title: "实验结果分析草稿",
        summary: "已根据本轮对话整理出一份待归档文档。",
        state: "waiting_confirmation",
        payload: {
          targetPath: "EGFR 耐药研究",
          projectId: "showcase-project",
          projectKnowledgeType: "experiment_record",
          projectKnowledgeSection: "experiment",
          mode: "create",
          title: "EGFR C797S 实验结果分析",
          markdown:
            "## 实验背景\n\n本轮实验用于验证 **EGFR C797S** 突变对候选抑制剂响应的影响。\n\n## 核心结果\n\n- 处理组细胞活性明显下降\n- 对照组未观察到显著毒性\n- 建议补充 48 小时时间点复验\n\n## 下一步\n\n1. 扩大生物学重复\n2. 补充剂量梯度\n3. 将原始数据关联到本记录",
          sections: [
            { heading: "实验背景", summary: "验证 C797S 突变相关药物响应。" },
            { heading: "核心结果", summary: "候选抑制剂显示出预期活性。" },
          ],
          sourceRefs: ["showcase-message"],
          warnings: [],
          confirmation: {
            actionId: "showcase-mira-draft",
            confirmationToken: "showcase-confirmation-token",
            draftHash: "showcase-draft-hash",
            status: "waiting_approval",
            confirmAction: {
              method: "POST",
              path: "/api/mira/drafts/showcase-mira-draft/confirm",
              requiresConfirmationToken: true,
            },
            cancelAction: {
              method: "POST",
              path: "/api/mira/drafts/showcase-mira-draft/cancel",
              requiresConfirmationToken: false,
            },
          },
        },
      },
    },
  },
];

export const CHAT_SSE_SHOWCASE_SCENARIOS: readonly ChatSseShowcaseScenario[] = [
  {
    id: "literature-clarification-2026-08-02",
    name: "昨日样例：文献检索后请求补充信息",
    description:
      "复现先输出一段正文、再查找 Skill、最后等待用户补充主题的 27 步 SSE。",
    userMessage: "帮我看看最近有什么文献",
    events: literatureClarificationEvents,
  },
  {
    id: "chat-display-styles",
    name: "聊天结构化展示样式",
    description: "逐步检查补充信息、确认、审批、产物、研究结果和阻塞卡片。",
    userMessage: "展示聊天支持的结构化结果",
    events: displayStyleEvents,
  },
  {
    id: "mira-document-draft",
    name: "Mira 文档草稿",
    description: "逐步展示文档草稿生成、文档预览以及确认或取消归档的交互。",
    userMessage: "把刚才的实验结果整理成文档并保存到当前项目",
    events: miraDocumentDraftEvents,
  },
];
