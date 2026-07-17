import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';

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

export const BasePagination: React.FC<BasePaginationProps> = ({ current = 1, pageSize = 10, total = 0, onChange, showSizeChanger = false, pageSizeOptions = [10, 20, 50, 100], onShowSizeChange, disabled = false, className }) => {
  const totalPages = useMemo(() => Math.ceil(total / pageSize) || 1, [pageSize, total]);
  const handlePageSizeChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => onShowSizeChange?.(1, Number(event.target.value)), [onShowSizeChange]);
  const buttonClass = 'rounded-md border border-borderSoft bg-surface px-3 py-1.5 text-sm text-primaryText transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50';
  return (
    <div className={classNames('flex flex-wrap items-center justify-center gap-4 p-4', className)}>
      <button type="button" className={buttonClass} onClick={() => current > 1 && onChange?.(current - 1)} disabled={disabled || current <= 1}>← 上一页</button>
      <span className="whitespace-nowrap text-sm text-primaryText">第 {current} / {totalPages} 页，共 {total} 条</span>
      <button type="button" className={buttonClass} onClick={() => current < totalPages && onChange?.(current + 1)} disabled={disabled || current >= totalPages}>下一页 →</button>
      {showSizeChanger && (
        <select className="cursor-pointer rounded-md border border-borderSoft bg-surface px-2 py-1 text-xs text-primaryText outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-60" value={pageSize} onChange={handlePageSizeChange} disabled={disabled}>
          {pageSizeOptions.map((size) => <option key={size} value={size}>{size} 条/页</option>)}
        </select>
      )}
    </div>
  );
};

BasePagination.displayName = 'BasePagination';
