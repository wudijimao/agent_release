import React from 'react';
import classNames from 'classnames';

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

export const BaseCard: React.FC<BaseCardProps> = ({ title, extra, children, hoverable = false, loading = false, bordered = true, className, bodyClassName, onClick }) => (
  <div
    className={classNames(
      'overflow-hidden rounded-md bg-surface transition-all duration-200',
      bordered && 'border border-borderGray',
      hoverable && 'cursor-pointer hover:border-borderGray hover:shadow-md',
      loading && 'pointer-events-none opacity-60', className,
    )}
    onClick={onClick}
  >
    {(title || extra) && (
      <div className="flex items-center justify-between px-4 pb-2 pt-4">
        {title && <h3 className="m-0 text-base font-medium text-primaryText">{title}</h3>}
        {extra && <div className="flex items-center gap-2">{extra}</div>}
      </div>
    )}
    <div className={classNames('p-4 text-primaryText', (title || extra) && 'pt-1', bodyClassName)}>{children}</div>
  </div>
);

BaseCard.displayName = 'BaseCard';
