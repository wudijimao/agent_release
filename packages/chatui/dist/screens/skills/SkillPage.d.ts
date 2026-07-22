import React from 'react';
export type SkillRiskLevel = 'low' | 'medium';
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
    onOpenSidebar(): void;
    onCreateSkill(): void;
    onInstall(skillIds: string[]): void;
    onUninstall(skillIds: string[]): void;
}
export declare function SkillPage({ isSidebarOpen, skills, onOpenSidebar, onCreateSkill, onInstall, onUninstall }: SkillPageProps): React.JSX.Element;
//# sourceMappingURL=SkillPage.d.ts.map