import React from 'react';
export interface ScheduledTaskTemplateViewModel extends Record<string, unknown> {
    id: string;
    name: string;
    description: string;
}
export interface ScheduledTaskListItemViewModel extends Record<string, unknown> {
    id: string;
    name: string;
    prompt: string;
    nextRun: string;
    trigger: string;
    isEnabled: boolean;
    isToggleDisabled?: boolean;
}
export interface ScheduledTasksOverviewProps {
    templates: ScheduledTaskTemplateViewModel[];
    tasks: ScheduledTaskListItemViewModel[];
    isSidebarOpen: boolean;
    loading?: boolean;
    error?: string;
    pendingTaskId?: string | null;
    onOpenSidebar(): void;
    onCreateCustom(): void;
    onCreateFromTemplate(templateId: string): void;
    onToggleTask(taskId: string): void;
    onEditTask(taskId: string): void;
    onDeleteTask(taskId: string): void;
    onRetry?(): void;
}
export declare function buildTaskPromptPreview(prompt: string): string;
export default function ScheduledTasksOverview({ templates, tasks, isSidebarOpen, loading, error, pendingTaskId, onOpenSidebar, onCreateCustom, onCreateFromTemplate, onToggleTask, onEditTask, onDeleteTask, onRetry, }: ScheduledTasksOverviewProps): React.JSX.Element;
//# sourceMappingURL=ScheduledTasksOverview.d.ts.map