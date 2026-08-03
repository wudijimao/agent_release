import React from 'react';
export interface QuickPromptsProps {
    onSelect: (text: string) => void;
    prompts?: readonly string[];
    disabled?: boolean;
}
export declare const CHAT_QUICK_PROMPTS: readonly ["整理实验笔记", "设计实验方案", "文献解读", "每周工作总结"];
export declare const QuickPrompts: ({ onSelect, prompts, disabled }: QuickPromptsProps) => React.JSX.Element;
declare const _default: React.MemoExoticComponent<({ onSelect, prompts, disabled }: QuickPromptsProps) => React.JSX.Element>;
export default _default;
//# sourceMappingURL=QuickPrompts.d.ts.map