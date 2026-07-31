import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
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
  onConfirmMiraDraft?(actionKey: string): void;
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

interface ReservedTurnLayout {
  assistantKey: string;
  minHeight: number;
}

function readPixelValue(value: string) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
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
  onConfirmMiraDraft,
  onScroll,
  scrollContainerRef,
  onMessageElement,
}: ChatConversationViewportProps) {
  const isSelectionMode = Boolean(selection);
  const internalScrollContainerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const messageElementsRef = useRef(new Map<number, HTMLDivElement>());
  const positionedTurnKeyRef = useRef<string>();
  const [reservedTurn, setReservedTurn] = useState<ReservedTurnLayout>();

  let activeAssistantIndex = -1;
  let activeUserIndex = -1;
  if (isTyping) {
    for (let index = messages.length - 1; index >= 0; index -= 1) {
      if (messages[index]?.role === 'user') {
        activeUserIndex = index;
        break;
      }
    }
    for (let index = messages.length - 1; index > activeUserIndex; index -= 1) {
      if (messages[index]?.role === 'assistant') {
        activeAssistantIndex = index;
        break;
      }
    }
  }

  const activeUserKey =
    activeUserIndex >= 0 ? getMessageKey(messages[activeUserIndex], activeUserIndex) : undefined;
  const activeAssistantKey =
    activeAssistantIndex >= 0
      ? getMessageKey(messages[activeAssistantIndex], activeAssistantIndex)
      : undefined;
  const activeTurnKey =
    activeUserKey && activeAssistantKey ? `${activeUserKey}:${activeAssistantKey}` : undefined;

  const setScrollContainer = useCallback(
    (element: HTMLDivElement | null) => {
      internalScrollContainerRef.current = element;
      setForwardedRef(scrollContainerRef, element);
    },
    [scrollContainerRef],
  );

  useLayoutEffect(() => {
    if (
      !activeTurnKey ||
      !activeAssistantKey ||
      activeUserIndex < 0 ||
      activeAssistantIndex < 0
    ) {
      return;
    }

    const container = internalScrollContainerRef.current;
    const content = contentRef.current;
    const userMessage = messageElementsRef.current.get(activeUserIndex);
    if (!container || !content || !userMessage) return;

    const updateReservedHeight = () => {
      const containerStyle = window.getComputedStyle(container);
      const contentStyle = window.getComputedStyle(content);
      const availableHeight =
        container.clientHeight -
        readPixelValue(containerStyle.paddingTop) -
        readPixelValue(containerStyle.paddingBottom);
      const turnGap = readPixelValue(contentStyle.rowGap || contentStyle.gap);
      const minHeight = Math.max(
        0,
        Math.floor(availableHeight - userMessage.offsetHeight - turnGap),
      );

      setReservedTurn((current) =>
        current?.assistantKey === activeAssistantKey && current.minHeight === minHeight
          ? current
          : { assistantKey: activeAssistantKey, minHeight },
      );
    };

    updateReservedHeight();

    const resizeObserver = new ResizeObserver(updateReservedHeight);
    resizeObserver.observe(container);
    resizeObserver.observe(userMessage);
    return () => resizeObserver.disconnect();
  }, [
    activeAssistantIndex,
    activeAssistantKey,
    activeTurnKey,
    activeUserIndex,
  ]);

  useLayoutEffect(() => {
    if (
      !activeTurnKey ||
      !activeAssistantKey ||
      reservedTurn?.assistantKey !== activeAssistantKey ||
      activeUserIndex < 0 ||
      positionedTurnKeyRef.current === activeTurnKey
    ) {
      return;
    }

    const container = internalScrollContainerRef.current;
    const userMessage = messageElementsRef.current.get(activeUserIndex);
    if (!container || !userMessage) return;

    container.scrollTo({ top: userMessage.offsetTop, behavior: 'auto' });
    positionedTurnKeyRef.current = activeTurnKey;
  }, [activeAssistantKey, activeTurnKey, activeUserIndex, reservedTurn]);

  return (
    <div className="relative h-full">
      <div
        ref={setScrollContainer}
        data-chat-scroll-container
        onScroll={onScroll}
        className="flex h-full flex-col items-center overflow-y-auto px-4 py-8 pt-20 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden"
      >
        <div
          ref={contentRef}
          className={`flex w-full flex-col ${isSelectionMode ? 'gap-3' : 'gap-8'}`}
          style={{ maxWidth: contentMaxWidth }}
        >
          {messages.map((message, index) => {
            const messageKey = getMessageKey(message, index);
            const isSelected = selection?.selectedMessageKeys.has(messageKey) ?? false;

            return (
              <div
                key={messageKey}
                data-chat-message-index={index}
                data-chat-turn-reserved={
                  reservedTurn?.assistantKey === messageKey ? 'true' : undefined
                }
                ref={(element) => {
                  if (element) {
                    messageElementsRef.current.set(index, element);
                  } else {
                    messageElementsRef.current.delete(index);
                  }
                  onMessageElement?.(index, element);
                }}
                className={isSelectionMode ? 'flex w-full items-start gap-2' : undefined}
                style={
                  reservedTurn?.assistantKey === messageKey
                    ? { minHeight: reservedTurn.minHeight }
                    : undefined
                }
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
                    onConfirmMiraDraft={onConfirmMiraDraft}
                    isTyping={isTyping && index === activeAssistantIndex}
                  />
                  {index === activeAssistantIndex &&
                    isTyping &&
                    !hasReceivedAssistantChunk && (
                      <div className="flex w-full justify-start px-1 md:px-2">
                        <ThinkingIndicator
                          phase={statusPhase}
                          searchSteps={[...searchSteps]}
                        />
                      </div>
                    )}
                </div>
              </div>
            );
          })}

          {activeAssistantIndex < 0 && isTyping && !hasReceivedAssistantChunk && (
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
