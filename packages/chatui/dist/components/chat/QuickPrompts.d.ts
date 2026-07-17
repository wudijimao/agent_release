import React from 'react';
export interface QuickPromptsProps {
    onSelect: (text: string) => void;
    prompts?: readonly string[];
}
export declare const CHAT_QUICK_PROMPTS: readonly ["整理实验笔记", "设计实验方案", "文献解读", "生成项目日报"];
export declare const QuickPrompts: ({ onSelect, prompts }: QuickPromptsProps) => React.JSX.Element;
declare const _default: React.MemoExoticComponent<({ onSelect, prompts }: QuickPromptsProps) => React.JSX.Element>;
export default _default;
//# sourceMappingURL=QuickPrompts.d.ts.map