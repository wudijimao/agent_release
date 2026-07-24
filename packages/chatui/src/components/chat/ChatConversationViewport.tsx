import React from 'react';
import { Check } from 'lucide-react';
import { MessageItem } from './MessageItem';
import { ThinkingIndicator, type SearchStep, type StatusPhase } from './ThinkingIndicator';
import type { AssistantFeedback, ChatMessage } from './chat.types';

export interface ChatConversationSelection {
  selectedMessageKeys: ReadonlySet<string>;
  onToggleMessage(messageKey: string): void;
}

export interface ChatConversationScrollbar {
  height: number;
  top: number;
  visible: boolean;
}

export interface ChatConversationViewportProps {
  messages: readonly ChatMessage[];
  isTyping: boolean;
  statusPhase?: StatusPhase;
  searchSteps?: readonly SearchStep[];
  hasReceivedAssistantChunk?: boolean;
  contentMaxWidth?: number | string;
  selection?: ChatConversationSelection;
  scrollbar?: ChatConversationScrollbar;
  feedbackByMessageKey?: Readonly<Record<string, AssistantFeedback | undefined>>;
  getMessageKey?(message: ChatMessage, index: number): string;
  onFeedback?(messageKey: string, feedback: AssistantFeedback): void;
  onRegenerate?(messageIndex: number): void;
  onScroll?: React.UIEventHandler<HTMLDivElement>;
  scrollContainerRef?: React.Ref<HTMLDivElement>;
  onMessageElement?(messageIndex: number, element: HTMLDivElement | null): void;
}

function setForwardedRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  if (ref) {
    (ref as React.MutableRefObject<T | null>).current = value;
  }
}

export function ChatConversationViewport({
  messages,
  isTyping,
  statusPhase = 'thinking',
  searchSteps = [],
  hasReceivedAssistantChunk = false,
  contentMaxWidth = 800,
  selection,
  scrollbar,
  feedbackByMessageKey,
  getMessageKey = (_message, index) => String(index),
  onFeedback,
  onRegenerate,
  onScroll,
  scrollContainerRef,
  onMessageElement,
}: ChatConversationViewportProps) {
  const isSelectionMode = Boolean(selection);

  return (
    <div className="relative h-full">
      <div
        ref={(element) => setForwardedRef(scrollContainerRef, element)}
        onScroll={onScroll}
        className="flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden"
      >
        <div
          className={`flex w-full flex-col ${isSelectionMode ? 'gap-3' : 'gap-8'}`}
          style={{ maxWidth: contentMaxWidth }}
        >
          {messages.map((message, index) => {
            const messageKey = getMessageKey(message, index);
            const isSelected = selection?.selectedMessageKeys.has(messageKey) ?? false;

            return (
              <div
                key={messageKey}
                ref={(element) => onMessageElement?.(index, element)}
                className={isSelectionMode ? 'flex w-full items-start gap-2' : undefined}
              >
                {selection && (
                  <button
                    type="button"
                    onClick={() => selection.onToggleMessage(messageKey)}
                    className="mt-3 shrink-0 rounded-md p-1 text-tertiaryText transition-colors hover:bg-bgLight"
                    aria-label={isSelected ? '取消选择消息' : '选择消息'}
                  >
                    {isSelected ? (
                      <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-primary text-white">
                        <Check size={12} strokeWidth={2.8} />
                      </span>
                    ) : (
                      <span className="inline-flex h-[18px] w-[18px] rounded-[5px] border border-borderGray bg-white" />
                    )}
                  </button>
                )}

                <div
                  className={
                    selection
                      ? `min-w-0 flex-1 rounded-xl px-2 transition-colors ${
                          isSelected ? 'bg-surfaceMuted' : 'bg-transparent hover:bg-bgLight'
                        } ${message.role === 'user' ? 'py-2.5' : 'py-1.5'}`
                      : undefined
                  }
                >
                  <MessageItem
                    msg={message}
                    actionKey={messageKey}
                    feedback={feedbackByMessageKey?.[messageKey]}
                    onFeedback={onFeedback}
                    onRefresh={onRegenerate ? () => onRegenerate(index) : undefined}
                    isTyping={isTyping}
                  />
                </div>
              </div>
            );
          })}

          {isTyping && !hasReceivedAssistantChunk && (
            <div className="flex w-full justify-center px-2">
              <div className="flex w-full max-w-[860px] justify-start px-1 md:px-2">
                <ThinkingIndicator phase={statusPhase} searchSteps={[...searchSteps]} />
              </div>
            </div>
          )}
        </div>
      </div>

      {scrollbar && scrollbar.height > 0 && (
        <div
          className={`pointer-events-none absolute right-1 top-0 w-[6px] rounded-full bg-scrollbar-subtle transition-opacity duration-200 ${
            scrollbar.visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            height: scrollbar.height,
            transform: `translateY(${scrollbar.top}px)`,
          }}
        />
      )}
    </div>
  );
}

export default React.memo(ChatConversationViewport);
