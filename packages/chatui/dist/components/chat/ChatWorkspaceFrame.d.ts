import React from 'react';
export interface ChatWorkspaceFrameProps {
    header: React.ReactNode;
    children: React.ReactNode;
    sidePanels?: React.ReactNode;
}
export declare const ChatWorkspaceFrame: React.ForwardRefExoticComponent<ChatWorkspaceFrameProps & React.RefAttributes<HTMLDivElement>>;
export interface ChatWorkspaceSidePanelProps {
    open: boolean;
    width: number | string;
    resizing?: boolean;
    children: React.ReactNode;
}
export declare const ChatWorkspaceSidePanel: React.ForwardRefExoticComponent<ChatWorkspaceSidePanelProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=ChatWorkspaceFrame.d.ts.map