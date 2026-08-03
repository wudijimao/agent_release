import React, { useCallback } from 'react';

export interface QuickPromptsProps {
  onSelect: (text: string) => void;
  prompts?: readonly string[];
  disabled?: boolean;
}

export const CHAT_QUICK_PROMPTS = [
  "整理实验笔记",
  "设计实验方案",
  "文献解读",
  "每周工作总结"
] as const;

export const QuickPrompts = ({ onSelect, prompts = CHAT_QUICK_PROMPTS, disabled = false }: QuickPromptsProps) => {
  const handleClick = useCallback((prompt: string) => {
    onSelect(prompt);
  }, [onSelect]);

  return (
    <div className="flex justify-center flex-wrap gap-4 mt-2">
      {prompts.map(p => (
        <button
          key={p}
          type="button"
          onClick={() => handleClick(p)}
          disabled={disabled}
          className="px-5 py-2.5 rounded-full border border-borderGray text-sm text-secondaryText bg-white hover:bg-bgLight transition-colors shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default React.memo(QuickPrompts);
