import React from 'react';
export interface BaseTableColumn<T = Record<string, unknown>> {
    title: React.ReactNode;
    dataIndex: keyof T;
    key?: string;
    width?: string | number;
    align?: 'left' | 'center' | 'right';
    render?: (text: T[keyof T], record: T, index: number) => React.ReactNode;
}
export interface BaseTableProps<T = Record<string, unknown>> {
    columns: BaseTableColumn<T>[];
    dataSource: T[];
    rowKey?: keyof T | string;
    loading?: boolean;
    pagination?: boolean;
    bordered?: boolean;
    striped?: boolean;
    className?: string;
    onRow?: (record: T, index: number) => React.HTMLAttributes<HTMLTableRowElement>;
}
export declare const BaseTable: <T extends Record<string, unknown>>(props: BaseTableProps<T> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
}) => React.ReactElement;
//# sourceMappingURL=BaseTable.d.ts.map