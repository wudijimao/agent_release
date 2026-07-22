import React from 'react';
export interface ToolPageProps {
    isSidebarOpen: boolean;
    result?: string | null;
    onOpenSidebar(): void;
    onBack(): void;
    onRun(): void;
    onReset?(): void;
}
export declare function ToolPage({ isSidebarOpen, result, onOpenSidebar, onBack, onRun, onReset }: ToolPageProps): React.JSX.Element;
//# sourceMappingURL=ToolPage.d.ts.map