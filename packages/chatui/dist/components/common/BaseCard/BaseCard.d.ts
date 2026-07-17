import React from 'react';
export interface BaseCardProps {
    title?: React.ReactNode;
    extra?: React.ReactNode;
    children?: React.ReactNode;
    hoverable?: boolean;
    loading?: boolean;
    bordered?: boolean;
    className?: string;
    bodyClassName?: string;
    onClick?: () => void;
}
export declare const BaseCard: React.FC<BaseCardProps>;
//# sourceMappingURL=BaseCard.d.ts.map