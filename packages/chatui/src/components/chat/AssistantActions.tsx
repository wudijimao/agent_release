import React, { useCallback, useState } from 'react';
import { Check, Copy, RefreshCcw, ThumbsDown, ThumbsUp } from 'lucide-react';
import type { AssistantFeedback } from './chat.types';

export interface AssistantActionsProps {
  markdownContent: string;
  onRefresh?: () => void;
  feedback?: AssistantFeedback;
  onFeedback?: (type: AssistantFeedback) => void;
  disabled?: boolean;
}

export const AssistantActions: React.FC<AssistantActionsProps> = ({
  markdownContent,
  onRefresh,
  feedback,
  onFeedback,
  disabled = false,
}) => {
  const [copied, setCopied] = useState(false);
  const hasAdditionalActions = Boolean(onRefresh || onFeedback);

  const handleCopy = useCallback(async () => {
    if (!markdownContent.trim()) return;

    try {
      await navigator.clipboard.writeText(markdownContent);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // 忽略复制失败，保持操作栏可继续使用。
    }
  }, [markdownContent]);

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full text-tertiaryText ${
        hasAdditionalActions ? 'bg-white py-1' : ''
      }`}
    >
      <button
        type="button"
        onClick={handleCopy}
        className={`h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${
          copied ? 'bg-bgLight text-primaryText' : 'hover:bg-bgLight'
        }`}
        title={copied ? '已复制 Markdown' : '复制 Markdown'}
      >
        {copied ? <Check size={15} /> : <Copy size={15} />}
      </button>

      {onRefresh && (
        <button
          type="button"
          onClick={onRefresh}
          disabled={disabled}
          className="h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors hover:bg-bgLight disabled:cursor-not-allowed disabled:opacity-50"
          title="重新生成"
        >
          <RefreshCcw size={15} />
        </button>
      )}

      {onFeedback && (
        <>
          <button
            type="button"
            onClick={() => onFeedback('like')}
            className={`h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${
              feedback === 'like' ? 'bg-bgLight text-primaryText' : 'hover:bg-bgLight'
            }`}
            title="有帮助"
          >
            <ThumbsUp size={15} />
          </button>

          <button
            type="button"
            onClick={() => onFeedback('dislike')}
            className={`h-7 w-7 rounded-full inline-flex items-center justify-center transition-colors ${
              feedback === 'dislike' ? 'bg-bgLight text-primaryText' : 'hover:bg-bgLight'
            }`}
            title="需改进"
          >
            <ThumbsDown size={15} />
          </button>
        </>
      )}
    </div>
  );
};

export default React.memo(AssistantActions);
