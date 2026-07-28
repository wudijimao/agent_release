import React from 'react';
export interface LiteratureSubscriptionListItemViewModel extends Record<string, unknown> {
    id: string;
    name: string;
    source: string;
    keywords: string;
    schedule: string;
    lastFetch: string;
    itemStats: string;
    projectStats: string;
    isEnabled: boolean;
}
export interface LiteratureSubscriptionsTableProps {
    items: LiteratureSubscriptionListItemViewModel[];
    loading?: boolean;
    pendingId?: string | null;
    onCreate(): void;
    onFetch(id: string): void;
    onToggle(id: string): void;
    onEdit(id: string): void;
    onDelete(id: string): void;
}
export declare function LiteratureSubscriptionsTable({ items, loading, pendingId, onCreate, onFetch, onToggle, onEdit, onDelete, }: LiteratureSubscriptionsTableProps): React.JSX.Element;
//# sourceMappingURL=LiteratureSubscriptionsTable.d.ts.map