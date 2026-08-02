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
        <div ref={ref} data-testid="chat-workspace-layout" className="relative flex min-h-0 w-full flex-1 overflow-hidden">
          <div data-testid="chat-workspace-main" className="flex min-w-0 flex-1 flex-col">{children}</div>
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
  overlay?: boolean;
  overlayRight?: number | string;
  children: React.ReactNode;
}

export const ChatWorkspaceSidePanel = forwardRef<HTMLElement, ChatWorkspaceSidePanelProps>(
  function ChatWorkspaceSidePanel({ open, width, resizing = false, overlay = false, overlayRight = 0, children }, ref) {
    return (
      <aside
        ref={ref}
        data-overlay={overlay ? 'true' : 'false'}
        style={{ width: open ? width : 0, ...(overlay ? { right: overlayRight } : {}) }}
        className={`h-full min-h-0 shrink-0 overflow-hidden ${overlay ? 'absolute inset-y-0 z-30 shadow-lg' : ''} ${
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
