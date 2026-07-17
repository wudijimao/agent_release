import React from 'react';
export interface BasePaginationProps {
    current?: number;
    pageSize?: number;
    total?: number;
    onChange?: (page: number) => void;
    showSizeChanger?: boolean;
    pageSizeOptions?: number[];
    onShowSizeChange?: (current: number, pageSize: number) => void;
    disabled?: boolean;
    className?: string;
}
export declare const BasePagination: React.FC<BasePaginationProps>;
//# sourceMappingURL=BasePagination.d.ts.map