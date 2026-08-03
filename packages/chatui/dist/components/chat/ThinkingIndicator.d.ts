import React from 'react';
/**
 * 任务状态阶段枚举，对齐豆包的交互范式：
 *   thinking  → 模型正在推理
 *   analyzing → 正在分析任务、上下文或规划
 *   searching → 正在检索知识库 / 网络
 *   executing → 正在执行工具、技能或动作
 *   generating → 正在生成回复
 */
export type StatusPhase = 'queued' | 'thinking' | 'analyzing' | 'searching' | 'executing' | 'generating' | 'awaiting_clarification' | 'awaiting_confirmation' | 'awaiting_approval' | 'warning' | 'failed';
export interface SearchStep {
    /** 稳定步骤标识，用于流式更新同一条子状态 */
    id?: string;
    /** 步骤类型 */
    type: 'knowledge' | 'web' | 'tool' | 'planning' | 'context' | 'generation' | 'action';
    /** 步骤描述文案 */
    label: string;
    /** 当前步骤状态 */
    status?: 'running' | 'completed' | 'failed' | 'skipped' | 'warning';
    /** 服务端提供的安全补充说明 */
    detail?: string;
    /** 检索或工具结果数量 */
    resultCount?: number;
}
export interface ThinkingIndicatorProps {
    /** 当前阶段 */
    phase: StatusPhase;
    /** 搜索/工具调用步骤列表 */
    searchSteps?: SearchStep[];
    /** 服务端提供的当前状态文案 */
    label?: string;
    /** 是否默认展开搜索步骤，默认 true */
    defaultExpanded?: boolean;
}
export declare const ThinkingIndicator: React.FC<ThinkingIndicatorProps>;
declare const _default: React.NamedExoticComponent<ThinkingIndicatorProps>;
export default _default;
//# sourceMappingURL=ThinkingIndicator.d.ts.map