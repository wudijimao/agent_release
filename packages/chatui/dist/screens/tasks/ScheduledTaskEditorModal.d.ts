import React from 'react';
export type ScheduledTaskEditorKind = 'schedule' | 'literature';
export type ScheduledTaskFetchFrequency = 'hourly' | 'daily' | 'weekly';
export type ScheduledTaskSourceType = 'pubmed' | 'biorxiv';
export type ScheduledTaskPubMedMatchMode = 'all' | 'any' | 'advanced';
export type ScheduledTaskRepeatMode = 'daily' | 'weekly' | 'monthly';
export interface LiteratureTaskEditorValue {
    topic: string;
    frequency: ScheduledTaskFetchFrequency;
    sourceTypes: ScheduledTaskSourceType[];
    lookbackDays: number;
    keywords: string;
    pubmedMatchMode: ScheduledTaskPubMedMatchMode;
    advancedQuery: string;
    enabled: boolean;
    projectNodeIds: string[];
}
export interface ScheduleTaskEditorValue {
    repeatMode: ScheduledTaskRepeatMode;
    repeatSubValue: string;
    startDate: string;
    endDate: string;
    runAt: string;
    taskPrompt: string;
    projectId: string | null;
}
export interface ScheduledTaskEditorProject {
    id: string;
    name: string;
}
export interface ScheduledTaskEditorModalProps {
    visible: boolean;
    kind: ScheduledTaskEditorKind;
    editing?: boolean;
    literatureValue: LiteratureTaskEditorValue;
    scheduleValue: ScheduleTaskEditorValue;
    projects?: ScheduledTaskEditorProject[];
    literatureProjects?: ScheduledTaskEditorProject[];
    onLiteratureChange(value: LiteratureTaskEditorValue): void;
    onScheduleChange(value: ScheduleTaskEditorValue): void;
    onCancel(): void;
    onConfirm(): void;
    onCreateProject?(): void;
}
export declare function ScheduledTaskEditorModal({ visible, kind, editing, literatureValue, scheduleValue, projects, literatureProjects, onLiteratureChange, onScheduleChange, onCancel, onConfirm, onCreateProject, }: ScheduledTaskEditorModalProps): React.JSX.Element;
//# sourceMappingURL=ScheduledTaskEditorModal.d.ts.map