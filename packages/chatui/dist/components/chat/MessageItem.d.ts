import React from 'react';
import 'highlight.js/styles/atom-one-light.css';
import 'katex/dist/katex.min.css';
import 'katex/contrib/mhchem';
import type { AssistantFeedback, ChatMessage } from './chat.types';
export interface MessageItemProps {
    msg: ChatMessage;
    actionKey?: string;
    feedback?: AssistantFeedback;
    onFeedback?: (actionKey: string, type: AssistantFeedback) => void;
    onRefresh?: () => void;
    isTyping?: boolean;
    isStreaming?: boolean;
}
export declare const MessageItem: React.FC<MessageItemProps>;
declare const _default: React.NamedExoticComponent<MessageItemProps>;
export default _default;
//# sourceMappingURL=MessageItem.d.ts.map