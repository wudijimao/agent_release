import React, { forwardRef } from 'react';

export interface ChatWorkspaceFrameProps {
  header: React.ReactNode;
  children: React.ReactNode;
  sidePanels?: React.ReactNode;
}

export const ChatWorkspaceFrame = forwardRef<HTMLDivElement, ChatWorkspaceFrameProps>(
  function ChatWorkspaceFrame({ header, children, sidePanels }, ref) {
    return (
      <div className="flex h-full w-full flex-col bg-white">
        {header}
        <div ref={ref} className="flex min-h-0 w-full flex-1 overflow-hidden">
          <div className="flex min-w-0 flex-1 flex-col">{children}</div>
          {sidePanels}
        </div>
      </div>
    );
  },
);

export interface ChatWorkspaceSidePanelProps {
  open: boolean;
  width: number | string;
  resizing?: boolean;
  children: React.ReactNode;
}

export const ChatWorkspaceSidePanel = forwardRef<HTMLElement, ChatWorkspaceSidePanelProps>(
  function ChatWorkspaceSidePanel({ open, width, resizing = false, children }, ref) {
    return (
      <aside
        ref={ref}
        style={{ width: open ? width : 0 }}
        className={`h-full min-h-0 shrink-0 overflow-hidden ${
          resizing ? 'transition-none' : 'transition-[width] duration-300 ease-out'
        } ${open ? 'min-w-0' : 'pointer-events-none'}`}
      >
        <div style={{ width }} className="h-full min-w-0">
          {children}
        </div>
      </aside>
    );
  },
);
