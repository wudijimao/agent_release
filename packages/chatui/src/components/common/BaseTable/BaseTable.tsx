import React from 'react';
import classNames from 'classnames';

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

const BaseTableInner = <T extends Record<string, unknown>>(
  { columns, dataSource = [], rowKey = 'id', loading = false, bordered = true, striped = true, className, onRow }: BaseTableProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) => (
  <div ref={ref} className={classNames('relative w-full overflow-x-auto bg-surface', className)}>
    <table className="w-full border-collapse bg-surface text-sm leading-5">
      <thead>
        <tr className={bordered ? 'border-b border-lineSubtle' : undefined}>
          {columns.map((column) => (
            <th key={column.key || String(column.dataIndex)} className="whitespace-nowrap bg-transparent px-4 py-3 text-left font-normal text-headerText first:pl-0" style={{ width: column.width, textAlign: column.align }}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.length === 0 ? (
          <tr><td colSpan={columns.length} className="px-4 py-12 text-center text-mutedText">暂无数据</td></tr>
        ) : dataSource.map((record, index) => {
          const key = typeof rowKey === 'string' ? String(record[rowKey] ?? index) : String(index);
          return (
            <tr key={key} className={classNames(bordered && 'border-b border-lineSoft last:border-b-0', striped && 'odd:bg-surface')} {...(onRow?.(record, index) || {})}>
              {columns.map((column) => (
                <td key={column.key || String(column.dataIndex)} className="px-4 py-[18px] text-primaryText first:pl-0" style={{ textAlign: column.align }}>
                  {column.render ? column.render(record[column.dataIndex], record, index) : String(record[column.dataIndex] ?? '')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    {loading && <div className="absolute inset-0 z-10 flex items-center justify-center bg-overlaySurface text-mutedText">加载中...</div>}
  </div>
);

export const BaseTable = React.forwardRef(BaseTableInner) as <T extends Record<string, unknown>>(props: BaseTableProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }) => React.ReactElement;
