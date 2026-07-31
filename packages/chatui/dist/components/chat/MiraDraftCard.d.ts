import React from 'react';
import type { MiraDraftCardViewModel } from './chat.types';
export interface MiraDraftCardProps {
    draft: MiraDraftCardViewModel;
    onConfirm?(actionKey: string): void;
}
export declare function MiraDraftCard({ draft, onConfirm }: MiraDraftCardProps): React.JSX.Element;
//# sourceMappingURL=MiraDraftCard.d.ts.map