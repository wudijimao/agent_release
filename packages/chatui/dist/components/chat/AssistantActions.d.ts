import React from 'react';
import type { AssistantFeedback } from './chat.types';
export interface AssistantActionsProps {
    markdownContent: string;
    onRefresh: () => void;
    feedback?: AssistantFeedback;
    onFeedback: (type: AssistantFeedback) => void;
    disabled?: boolean;
}
export declare const AssistantActions: React.FC<AssistantActionsProps>;
declare const _default: React.NamedExoticComponent<AssistantActionsProps>;
export default _default;
//# sourceMappingURL=AssistantActions.d.ts.map