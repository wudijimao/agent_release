import React from 'react';
import type { MiraDraftCardViewModel } from './chat.types';
export interface MiraDraftCardProps {
    draft: MiraDraftCardViewModel;
    onPreview?(actionKey: string): void;
    onConfirm?(actionKey: string): void;
    onCancel?(actionKey: string): void;
}
export declare function MiraDraftCard({ draft, onPreview, onConfirm, onCancel }: MiraDraftCardProps): React.JSX.Element;
//# sourceMappingURL=MiraDraftCard.d.ts.map