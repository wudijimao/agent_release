import React from 'react';
export type SkillRiskLevel = 'low' | 'medium' | 'high';
export type SkillTab = 'installed' | 'uninstalled';
export interface SkillCardViewModel {
    id: string;
    name: string;
    source: string;
    description: string;
    tags: string[];
    riskLevel: SkillRiskLevel;
    installed: boolean;
}
export interface SkillPageProps {
    isSidebarOpen: boolean;
    skills: SkillCardViewModel[];
    loading?: boolean;
    error?: string;
    pendingSkillIds?: readonly string[];
    onOpenSidebar(): void;
    onCreateSkill(): void;
    onInstall(skillIds: string[]): void;
    onUninstall(skillIds: string[]): void;
    onRetry?(): void;
}
export declare function SkillPage({ isSidebarOpen, skills, loading, error, pendingSkillIds, onOpenSidebar, onCreateSkill, onInstall, onUninstall, onRetry, }: SkillPageProps): React.JSX.Element;
//# sourceMappingURL=SkillPage.d.ts.map