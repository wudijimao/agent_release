import React from 'react';
import { type SearchStep, type StatusPhase } from './ThinkingIndicator';
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
export declare function ChatConversationViewport({ messages, isTyping, statusPhase, searchSteps, hasReceivedAssistantChunk, contentMaxWidth, selection, scrollbar, feedbackByMessageKey, getMessageKey, onFeedback, onRegenerate, onScroll, scrollContainerRef, onMessageElement, }: ChatConversationViewportProps): React.JSX.Element;
declare const _default: React.MemoExoticComponent<typeof ChatConversationViewport>;
export default _default;
//# sourceMappingURL=ChatConversationViewport.d.ts.map