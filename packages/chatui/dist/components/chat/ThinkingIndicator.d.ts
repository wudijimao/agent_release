import React from 'react';
/**
 * 任务状态阶段枚举，对齐豆包的交互范式：
 *   thinking  → 模型正在推理
 *   searching → 正在检索知识库 / 网络
 *   generating → 正在生成回复
 */
export type StatusPhase = 'thinking' | 'searching' | 'generating';
export interface SearchStep {
    /** 步骤类型 */
    type: 'knowledge' | 'web' | 'tool';
    /** 步骤描述文案 */
    label: string;
}
export interface ThinkingIndicatorProps {
    /** 当前阶段 */
    phase: StatusPhase;
    /** 搜索/工具调用步骤列表 */
    searchSteps?: SearchStep[];
    /** 是否默认展开搜索步骤，默认 true */
    defaultExpanded?: boolean;
}
export declare const ThinkingIndicator: React.FC<ThinkingIndicatorProps>;
declare const _default: React.NamedExoticComponent<ThinkingIndicatorProps>;
export default _default;
//# sourceMappingURL=ThinkingIndicator.d.ts.map