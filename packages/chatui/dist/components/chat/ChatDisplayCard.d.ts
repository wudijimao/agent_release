import React from 'react';
import type { ChatDisplayCardViewModel } from './chat.types';
export interface ChatDisplayCardProps {
    card: ChatDisplayCardViewModel;
    actionPending?: boolean;
    onAction?(actionKey: string, actionId: string): void;
}
export declare function ChatDisplayCard({ card, actionPending, onAction }: ChatDisplayCardProps): React.JSX.Element;
//# sourceMappingURL=ChatDisplayCard.d.ts.map