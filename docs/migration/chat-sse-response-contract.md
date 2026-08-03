# 聊天 SSE 返回结构清单

> 核对日期：2026-08-02  
> 范围：服务端 `POST /api/chat` 当前实现，以及它直接转发的 Runtime `AgentEvent`。  
> 主要依据：`packages/server/src/routes/chat.ts`、`packages/server/src/runtime/types.ts`、`packages/shared/src/home-display.ts`。

## 1. 基本传输格式

服务端使用标准 SSE，每个事件由 `event` 和 JSON 格式的 `data` 组成。`event` 与 `data.type` 正常情况下相同。

```text
event: text
data: {"type":"text","content":"回复片段"}

```

前端必须按事件块之间的空行切分，不能假设一次网络分块正好对应一个完整事件。事件顺序也不能简化成“状态 → 一段正文 → 完成”：模型可能先返回一段正文，再调用工具、请求补充信息，最后才生成结构化展示结果。

重要的结束规则：

| 情况 | 客户端行为 |
| --- | --- |
| 收到 `done` | 只表示 Runtime 输出阶段结束，不要停止读取 SSE；服务端可能继续发送 `context_packet`、`task_trace`、`structured_payload`、`display_done` |
| 收到 `display_done` | 将其作为本轮结构化展示的最终权威结果，但仍允许接收后续补丁 |
| SSE 正常 EOF | 本次连接真正结束；部分服务端短路分支可能没有 `done` |
| 收到 `error` | 展示错误并结束本轮运行态；连接仍应安全读完或主动取消 |

## 2. 通用事件

这些事件构成大多数聊天请求的基础生命周期。

| `event` / `data.type` | `data` 主要字段 | 说明 | 建议前端处理 |
| --- | --- | --- | --- |
| `meta` | `runId: string`、`sessionId: string`、`selectedSkillSlugs?: string[]`、`attachments?: object[]` | 本轮运行和会话元数据，通常是首个业务事件 | 保存真实会话 ID、运行 ID、已确认 Skill 和附件信息 |
| `task_trace` | `step: TaskTraceStep` | 服务端整理后的用户可见进度；比直接展示工具事件更稳定 | 第一层按 `category` 展示主阶段，第二层展示最新步骤；正文出现后也要继续处理 |
| `status` | `status: AgentRunStatus` | Runtime 运行状态 | 驱动运行、等待用户、完成、失败等生命周期 |
| `text` | `content: string`、`citations?: Citation[]` | 增量正文片段，不保证是本轮最后一种事件 | 追加到当前 assistant 消息；不能因首次收到正文而忽略后续状态 |
| `warning` | `message: string` | 非致命警告 | 可显示轻量提示，不应把整轮标记为失败 |
| `error` | `error: string` | 本轮失败；路由自身异常也使用此结构 | 停止运行态，映射为面向用户的错误文案 |
| `done` | 无额外字段 | Runtime 输出完成标记，不等于 SSE 已经没有后处理事件 | 清理 Runtime 进度，但继续读取直至 EOF |
| `reasoning` | `content: string` | Runtime 推理内容 | 不直接展示给用户；只允许用于受控调试，避免暴露内部推理 |

### AgentRunStatus

| 值 | 含义 | 建议 UI |
| --- | --- | --- |
| `queued` | 已排队 | 等待中 |
| `running` | 正在运行 | 展示主阶段及最新一条 `task_trace` 子状态 |
| `awaiting_clarification` | 等待用户补充信息 | 结束加载动画，展示补充信息卡片并允许继续输入 |
| `awaiting_confirmation` | 等待用户确认写操作或草稿 | 展示确认/取消操作 |
| `awaiting_approval` | 等待更高权限审批 | 展示审批等待状态和有效期 |
| `completed` | 已完成 | 清理运行态 |
| `failed` | 失败 | 展示错误和可重试入口 |
| `cancelled` | 已取消 | 清理运行态并保留已有正文 |

### TaskTraceStep

| 字段 | 类型/可选值 | 说明 |
| --- | --- | --- |
| `id` | `string` | 稳定步骤标识，例如 `context`、`generation`、`tool:find-skills` |
| `title` | `string` | 用户可见的步骤标题 |
| `status` | `running \| completed \| failed \| skipped` | 步骤状态 |
| `category` | `planning \| context \| retrieval \| tool \| generation \| action` | 用于映射“分析中、搜索中、执行中、生成中”等 UI |
| `detail` | `string?` | 已脱敏的补充说明 |
| `resultCount` | `number?` | 搜索或工具结果数量 |
| `startedAt` / `endedAt` | ISO 时间字符串，可选 | 步骤起止时间 |
| `serverEmittedAt` | ISO 时间字符串 | 服务端发送时间 |
| `serverElapsedMs` | `number?` | 相对本轮开始的耗时 |
| `sequence` | `number?` | 服务端递增序号；前端应用它防止旧状态覆盖新状态 |

## 3. 通用结构化展示事件

服务端同时提供普通 `text` 和结构化 `display`。`text` 负责渐进显示正文，`display_done` 负责最终卡片或最终答案结构，二者不能互相替代。

| 事件 | 数据结构 | 合并规则 |
| --- | --- | --- |
| `display_start` | `{ type, display: HomeAssistantDisplay }` | 创建流式展示占位；如果此前 `display_patch` 已经产生了更具体的内容，不能用空 `answer` 降级覆盖 |
| `display_patch` | `{ type, patch: Partial<HomeAssistantDisplay> }` | 浅合并顶层字段；`payload`、`sourceSummary`、`actionSummary`、`validation`、`provenance` 应分别合并 |
| `display_done` | `{ type, display: HomeAssistantDisplay }` | 最终权威展示；覆盖流式占位并标记展示完成 |

### HomeAssistantDisplay 公共外壳

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `schemaVersion` | 固定为 `home-display.v1` | 结构版本 |
| `intentClass` | `HomeIntentClass` | 服务端识别的主意图 |
| `cardType` | `HomeAssistantCardType` | 决定 `payload` 的具体结构和前端组件 |
| `title` | `string` | 卡片标题 |
| `summary` | `string?` | 简短摘要 |
| `payload` | 联合类型 | 按 `cardType` 解析，禁止仅凭字段猜测 |
| `state` | `ready \| streaming \| needs_clarification \| blocked \| waiting_confirmation \| completed` | 卡片展示状态 |
| `sourceSummary` | `{ usedSources, blockedSources, citationCount }?` | 实际采用、阻止的来源与引用数 |
| `actionSummary` | `{ requiresConfirmation, allowedActions, blockedActions, nextActionLabel? }?` | 动作权限和确认要求 |
| `validation` | `{ schemaValid, provenanceValid, permissionValid, warnings }` | 服务端展示结构校验结果 |
| `provenance` | `{ sourceRefs, toolRunIds, citationIds, literatureResultRefs? }?` | 来源与工具运行追踪 |

### HomeIntentClass

| 值 | 场景 |
| --- | --- |
| `general_answer` | 普通问答 |
| `literature_search` | 文献检索 |
| `evidence_synthesis` | 证据综合 |
| `data_interpretation` | 数据解读 |
| `experiment_planning` | 实验规划 |
| `write_or_archive` | 写入、归档和草稿 |
| `workflow_orchestration` | 工作流编排 |
| `status_or_resume` | 状态查询或恢复流程 |

## 4. 特殊 display 卡片

下表列出服务端共享协议当前允许的全部 `cardType`。这类返回都通过 `display_start`、`display_patch` 或 `display_done` 传递。

| `cardType` | `payload` 类型/核心字段 | 用途 |
| --- | --- | --- |
| `answer` | `AnswerCardPayload`：`markdown`、`actions?` | 普通 Markdown 回答 |
| `internal_wiki_search` | `InternalWikiSearchCardPayload`：`query?`、`answerMarkdown?`、`results[]`、`emptyState?` | 内部 Wiki/Mira 文档检索 |
| `literature_search` | `ResearchRenderPayload`：查询、检索记录、发现、论文、来源、限制 | 文献搜索结果 |
| `evidence_synthesis` | `ResearchRenderPayload` 或 `ResearchAnswer` | 多来源证据综合 |
| `data_interpretation` | `DataInterpretationCardPayload`：输入、观察、限制、下一步、正文 | 数据解读 |
| `experiment_plan` | `ExperimentPlanCardPayload`：目标、读出、样本/对照、步骤、风险、成功标准 | 实验方案 |
| `candidate_ranking` | `CandidateRankingCardPayload`：问题、排序候选、置信度、支持/反对证据 | 候选排序 |
| `validation_draft` | `ValidationDraftCardPayload`：假设、读出、验收标准、风险、确认要求 | 验证方案草稿 |
| `evidence_propose` | `EvidenceProposeCardPayload`：主张、置信度、正反证据、缺口 | 证据提议 |
| `mira_archive_preview` | `MiraArchivePreviewCardPayload`：目标路径、项目、模式、标题、Markdown、章节、确认信息 | 保存到项目/Mira 前的文档草稿卡片 |
| `data_quality` | `DataQualityCardPayload`：数据集、就绪度、检查项、缺失字段、建议动作 | 数据质量检查 |
| `workflow_decision` | `WorkflowDecisionCardPayload`：提示、选项、权衡、下一动作 | 工作流决策 |
| `workflow_overview` | `WorkflowOverviewCardPayload`：目标、当前阶段、阶段列表、下一动作 | 工作流总览 |
| `workflow_step` | `WorkflowStepCardPayload`：阶段、标题、摘要、输入/输出/来源、状态 | 单个工作流步骤 |
| `workflow_status` | `WorkflowStatusCardPayload`：运行 ID、当前阶段、状态、阻塞项、恢复动作 | 工作流状态或恢复 |
| `memory_proposal` | `MemoryProposalCardPayload`：记住/忘记、候选记忆、匹配项、操作、处理结果 | 长期记忆确认 |
| `tracking_subscription_preview` | `TrackingSubscriptionPreviewCardPayload`：来源、关键词、频率、回看天数、确认结果 | 文献/信息订阅创建预览 |
| `tracking_subscription_list` | `TrackingSubscriptionListCardPayload`：订阅列表、统计、空状态 | 查询或筛选订阅 |
| `tracking_subscription_delete_confirm` | `TrackingSubscriptionDeleteConfirmCardPayload`：订阅详情和删除确认结果 | 删除订阅确认 |
| `scheduled_task_create_preview` | `ScheduledTaskCreatePreviewCardPayload`：任务、项目、提示词、周期、时区、起止日期、确认结果 | 定时任务创建预览 |
| `scheduled_task_delete_confirm` | `ScheduledTaskDeleteConfirmCardPayload`：任务状态、周期、下次运行和删除确认 | 删除定时任务确认 |
| `scheduled_task_list` | `ScheduledTaskListCardPayload`：任务列表、状态、周期、待处理草稿 | 查询定时任务 |
| `presentation_draft` | `PresentationDraftCardPayload` | 演示文稿草稿 |
| `confirmation` | `LabOSActionCardPayload` | 通用受控写操作确认 |
| `clarification` | `ClarificationCardPayload`：`question`、`reason?`、`missingItems[]`、`recommendedNext?` | 要求用户补充信息 |
| `blocked` | `BlockedCardPayload`：标题、原因、受阻来源、恢复动作 | 权限、来源或策略阻断 |
| `handoff` | `HandoffCardPayload`：`handoff` | 模块间工作交接 |
| `memory_context_clarification` | `MemoryClarificationCardPayload`：问题、候选上下文、操作、处理结果 | 记忆上下文冲突澄清 |
| `quiet_preference_notice` | `QuietPreferenceNoticeCardPayload`：Markdown、偏好决策、撤销操作 | 静默应用偏好后的通知 |

说明：`HomeAssistantCardType` 目前还声明了少数采用通用 payload 兜底的类型。新增类型时必须先升级共享协议和前端穷举处理，不能默默降级为空白卡片。

## 5. 工具与 Skill 事件

这些事件主要用于运行追踪、调试和形成最终结构化结果。普通用户界面通常只需要展示服务端派生出的 `task_trace`，不应直接打印完整工具输入输出。

| 事件 | 数据结构 | 说明/风险 |
| --- | --- | --- |
| `tool_call` | `{ name: string, input: unknown }` | 工具调用开始；`input` 可能很大或包含内部数据，不直接展示 |
| `tool_result` | `{ name: string, output: unknown, isError?: boolean }` | 工具结果；可含 RAG 引用、文献、附件产物或业务草稿 |
| `skill_activation` | `{ name, source: discovered \| selected, reason?, score?, reasons?, matchedFields? }` | 服务端发现或激活能力 |
| `skill_selected` | `{ name, reason? }` | Runtime 选择能力并准备执行 |
| `skill_result` | `{ name, output, isError? }` | Skill 执行结果 |
| `mcp_call_summary` | `{ phase, summary: McpToolSummary }` | MCP 调用的受控摘要；`phase` 可为 `planned/executed/approved/rejected/timed_out/cancelled` |
| `tool_blocked_by_context_policy` | `{ toolName, violation }` | `/api/chat` 额外发出的策略阻断事件；最终通常还会产生 `blocked` 展示或安全降级正文 |

## 6. 需要用户继续操作的特殊事件

| 事件 | 核心字段 | 对应运行状态 | 前端要求 |
| --- | --- | --- | --- |
| `clarification_required` | `requestId`、`summary.question`、`reason?`、`missingItems?`、`recommendedNext?`、`contextType?`、`attemptedActions?`、`explorationBlocker?`、`resumeIntent?`、`expiresAt?` | `awaiting_clarification` | 展示问题并允许用户继续发消息；不能只显示此前的正文片段 |
| `confirmation_required` | `requestId`、`summary: McpToolSummary`、`expiresAt?` | `awaiting_confirmation` | 展示确认/取消；确认前不得执行写操作 |
| `approval_required` | `requestId`、`approvalRequestId`、`summary: McpToolSummary`、`expiresAt?` | `awaiting_approval` | 展示审批等待和有效期；可能需要管理员处理 |

### McpToolSummary

| 字段组 | 字段 |
| --- | --- |
| 工具身份 | `toolCallId`、`serverId`、`serverSlug`、`serverDisplayName`、`toolId`、`toolName`、`toolDisplayName` |
| 风险和数据 | `riskLevel: read \| write_low \| write_high`、`dataTypes[]`、`requiresInternalData` |
| 运行关联 | `runId`、`sessionId`、`approvalRequestId?` |
| 用户摘要 | `inputSummary?` |

## 7. 草稿生命周期事件

Runtime 可以把有副作用的动作先落为草稿。这组事件与 `display.cardType` 中的预览/确认卡片互补。

| 事件 | 核心字段 | 含义 |
| --- | --- | --- |
| `draft_created` | `draftId`、`objectType`、`action`、`toolName`、`validationStatus?`、`missingFields?`、`confirmRoute?` | 创建待确认草稿 |
| `draft_updated` | `draftId`、`objectType?`、`action?`、`draftHash?` | 草稿被编辑 |
| `draft_confirmed` | `draftId`、`objectType?`、`action?`、`outputRef?` | 草稿已确认并产生输出 |
| `draft_cancelled` | `draftId`、`objectType?`、`action?` | 草稿取消 |

## 8. 产物、科研结果和工作流交接

| 事件 | 数据结构 | 用途 |
| --- | --- | --- |
| `artifact` | `{ artifact: { id, type, name, url, mimeType?, metadata? } }` | 单个运行产物，例如文件、图片或报告 |
| `structured_payload` | `{ structuredPayload: { kind: research_answer \| research_render, data } }` | `/api/chat` 后处理产生的科研回答或文献展示结构 |
| `module_handoff` | `{ handoff: ModuleHandoffPayload }` | 当前任务交接给其他模块/工作流；最终也可能形成 `handoff` display 卡片 |
| `context_packet` | `{ contextPacket: HomeContextPacket }` | 意图、偏好、记忆、来源计划、权限策略、工作流、Skill 诊断等上下文快照；主要用于调试、审计和高级 UI，不建议原样展示 |

## 9. 共享 UI 协议已声明、但当前 `/api/chat` 未直接发送的事件

`HomeUIEvent` 还预留了以下结构。它们不能视作当前路由必然会发；前端可以兼容，但不应依赖它们完成现有流程。

| 事件 | 结构 | 当前情况 |
| --- | --- | --- |
| `workflow_progress` | `{ payload: unknown }` | 共享协议预留；当前聊天路由主要使用 `task_trace` 和工作流 display 卡片 |
| `sources` | `{ payload: HomeDisplayCitation[] }` | 共享协议预留；当前来源通常在 `text.citations`、工具结果或 `display.sourceSummary` 中 |
| `attachment_refs` | `{ payload: [{ id, name, mimeType, kind }] }` | 共享协议预留；当前附件主要在 `meta.attachments` 和历史消息中 |
| `artifact_refs` | `{ payload: [{ id, type, name, url }] }` | 共享协议预留；当前路由直接发送单个 `artifact` Runtime 事件 |

## 10. 典型事件序列

事件序列是分支化的，以下仅表示常见形态。

### 普通回答

```text
meta
task_trace(context/running)
task_trace(context/completed)
display_patch
context_packet
display_start
task_trace(generation/running)
status(running)
text ...（0 到多次）
status(completed)
done
context_packet
task_trace(generation/completed)
display_done
EOF
```

### 正文后继续执行工具

```text
text（第一波说明）
task_trace(tool/running)
tool_call
tool_result
task_trace(tool/completed)
text（后续正文，可能有）
display_done
EOF
```

### 要求用户补充信息

```text
text（可选的前置说明）
task_trace(tool/running)
tool_call(request_user_input)
clarification_required
status(awaiting_clarification)
done
task_trace(generation/completed)
display_done(cardType=clarification, state=needs_clarification)
EOF
```

### 记忆确认等服务端短路分支

```text
meta
task_trace(context/running)
task_trace(context/completed)
display_start
task_trace(generation/completed)
display_done(cardType=memory_proposal, state=waiting_confirmation)
EOF
```

这类短路分支可能不发送 `status` 或 `done`，因此 EOF 和 `display_done` 都必须被正确处理。

## 11. 当前 Next.js 消费情况

当前 reducer 位于 `packages/nextjs/src/adapters/chat-session.ts`。截至本文核对时，支持情况如下：

| 能力 | 当前状态 | 主要缺口 |
| --- | --- | --- |
| SSE 分块解析 | 已支持 | 无明显提前截断；会读到 EOF |
| `meta` | 部分支持 | 只保存 `sessionId`，未保留 `runId`、Skill 和附件元数据 |
| `task_trace` | 已支持（两级状态展示） | 按 `sequence` 防止旧状态覆盖；第一层映射阶段，第二层持续展示最新步骤及其运行、完成、失败或跳过状态；首段 `text` 后仍继续处理后续事件，只有整轮对话结束才收起 |
| `text` | 已支持 | 可以追加正文 |
| `error` | 已支持 | 经过统一错误文案降级 |
| `status` / `warning` / `done` | 已支持（状态展示） | 已映射排队、运行、等待补充、等待确认、等待审批、完成、失败、取消和非致命警告；对应操作卡片仍按后续阶段接入 |
| `display_start/patch/done` | 已支持（展示卡片） | 实时合并 patch，并复用历史消息的 display 映射；复杂业务卡片的操作按钮仍需逐类接入接口 |
| `clarification_required` | 已支持（展示卡片） | 展示问题、缺失项和建议下一步；最终卡片出现后隐藏重复的等待状态条，用户通过正常输入继续会话 |
| 确认/审批事件 | 已支持（只读展示） | 已展示受控摘要和有效期；确认、取消及管理员审批接口仍需按业务逐项接入 |
| 草稿生命周期 | 已支持（通用状态卡片） | 可展示创建、更新、确认、取消；Mira 文档仍使用已有专用草稿卡片 |
| `artifact` / `structured_payload` / `module_handoff` | 已支持（通用展示） | 产物链接、科研结果摘要/来源和模块交接已展示；复杂产物可继续增加专用卡片 |
| 历史消息的通用 `display` | 已支持（通用展示） | 普通正文和 Mira 草稿走已有专用渲染，其余合法 display 映射为结构化展示卡片 |

## 12. 前端实现约束

| 约束 | 原因 |
| --- | --- |
| 传输解析、事件归并、业务 ViewModel、UI 组件分层 | 避免组件直接理解服务端 DTO 或执行业务逻辑 |
| 未知事件必须忽略并记录，不能让流崩溃 | 服务端允许渐进扩展事件类型 |
| `event` 与 `data.type` 不一致时记录协议错误 | 防止错误路由或数据污染 |
| 工具输入输出、`context_packet`、`reasoning` 默认不直接展示 | 数据量、隐私和内部推理安全 |
| `display_done` 使用共享 normalizer 校验 | 防止无效 payload 导致空白页面 |
| 直播流和历史记录复用同一套 display → ViewModel 映射 | 保证刷新前后界面一致 |
| 状态按 `sequence`、步骤 `id` 和终态归并 | 避免迟到事件造成“生成完成后又显示搜索中” |
| 第一段 `text` 不能关闭状态通道 | 模型可能在正文后继续调用工具或请求澄清 |
