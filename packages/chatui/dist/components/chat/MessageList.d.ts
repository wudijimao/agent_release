import React from 'react';
import { type StatusPhase, type SearchStep } from './ThinkingIndicator';
import type { ChatMessage } from './chat.types';
export interface MessageListProps {
    messages: ChatMessage[];
    isTyping: boolean;
    statusPhase?: StatusPhase;
    searchSteps?: SearchStep[];
}
export declare const MessageList: ({ messages, isTyping, statusPhase, searchSteps }: MessageListProps) => React.JSX.Element;
declare const _default: React.MemoExoticComponent<({ messages, isTyping, statusPhase, searchSteps }: MessageListProps) => React.JSX.Element>;
export default _default;
//# sourceMappingURL=MessageList.d.ts.map