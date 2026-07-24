import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

export interface BaseActionMenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  danger?: boolean;
  disabled?: boolean;
  active?: boolean;
}

export interface BaseActionMenuProps {
  trigger: React.ReactNode;
  items: BaseActionMenuItem[];
  footerItems?: BaseActionMenuItem[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onTriggerClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onItemClick?: (item: BaseActionMenuItem, event: React.MouseEvent<HTMLButtonElement>) => void;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  width?: number | string;
  portal?: boolean;
  className?: string;
  triggerClassName?: string;
  menuClassName?: string;
  listClassName?: string;
  footerClassName?: string;
}

export const BaseActionMenu: React.FC<BaseActionMenuProps> = ({ trigger, items, footerItems = [], open = false, onOpenChange, onTriggerClick, onItemClick, placement = 'bottom-start', width, portal = false, className, triggerClassName, menuClassName, listClassName, footerClassName }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [portalStyle, setPortalStyle] = useState<React.CSSProperties>({});
  const isEnd = placement.endsWith('end');
  const isAbove = placement.startsWith('top');

  useEffect(() => {
    if (!open || !portal || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    setPortalStyle({ position: 'fixed', left: isEnd ? rect.right : rect.left, top: isAbove ? rect.top : rect.bottom, transform: isEnd ? 'translateX(-100%)' : undefined });
  }, [isAbove, isEnd, open, portal, placement]);

  useEffect(() => {
    if (!open || !portal || !isAbove || !panelRef.current) return;
    setPortalStyle((current) => ({ ...current, top: Number(current.top) - panelRef.current!.offsetHeight - 8 }));
  }, [isAbove, open, portal]);

  useEffect(() => {
    if (!open || !onOpenChange) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (wrapperRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      onOpenChange(false);
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [onOpenChange, open]);

  const menuStyle = useMemo(() => width ? { width: typeof width === 'number' ? `${width}px` : width } : undefined, [width]);
  const renderItem = useCallback((item: BaseActionMenuItem) => (
    <button
      key={item.key}
      type="button"
      role="menuitem"
      className={classNames(
        'flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-4 py-2.5 text-left text-sm leading-5 transition-colors disabled:cursor-not-allowed disabled:opacity-50',
        !item.danger && !item.active && 'bg-transparent text-primaryText hover:bg-surfaceMuted',
        !item.danger && item.active && 'bg-primary-soft font-medium text-primary',
        item.danger && 'bg-transparent text-danger hover:bg-danger-soft',
      )}
      onClick={(event) => onItemClick?.(item, event)}
      disabled={item.disabled}
    >
      {item.icon && <span className="inline-flex items-center justify-center leading-none">{item.icon}</span>}
      <span className="flex-1 whitespace-nowrap">{item.label}</span>
    </button>
  ), [onItemClick]);

  const panel = open ? (
    <div
      ref={panelRef}
      className={classNames(
        'z-[1200] flex min-w-[220px] flex-col gap-2 rounded-xl bg-surface p-2.5 shadow-lg',
        !portal && 'absolute', !portal && !isAbove && 'top-[calc(100%+8px)]', !portal && isAbove && 'bottom-[calc(100%+8px)]',
        !portal && isEnd ? 'right-0' : !portal ? 'left-0' : undefined, menuClassName,
      )}
      style={portal ? { ...portalStyle, ...menuStyle } : menuStyle}
      role="menu"
    >
      <div className={classNames('flex min-h-0 flex-col gap-1', listClassName)}>{items.map(renderItem)}</div>
      {footerItems.length > 0 && <div className={classNames('flex flex-col gap-1 border-t border-lineSoft pt-2', footerClassName)}>{footerItems.map(renderItem)}</div>}
    </div>
  ) : null;

  return (
    <div ref={wrapperRef} className={classNames('relative inline-block', className)}>
      <button type="button" className={classNames('m-0 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0', triggerClassName)} onClick={(event) => { onTriggerClick?.(event); onOpenChange?.(!open); }} aria-haspopup="menu" aria-expanded={open}>{trigger}</button>
      {portal ? panel && createPortal(panel, document.body) : panel}
    </div>
  );
};

BaseActionMenu.displayName = 'BaseActionMenu';
