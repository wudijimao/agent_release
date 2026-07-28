import React from 'react';
import { type LiteratureSubscriptionListItemViewModel } from './LiteratureSubscriptionsTable';
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
    scheduleEnd?: string;
    mainSessionId?: string;
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
    literatureSubscriptions?: LiteratureSubscriptionListItemViewModel[];
    literatureLoading?: boolean;
    pendingLiteratureId?: string | null;
    onOpenSidebar(): void;
    onCreateCustom(): void;
    onCreateFromTemplate(templateId: string): void;
    onToggleTask(taskId: string): void;
    onEditTask(taskId: string): void;
    onDeleteTask(taskId: string): void;
    onOpenTaskChat?(sessionId: string): void;
    onCreateLiterature?(): void;
    onFetchLiterature?(subscriptionId: string): void;
    onToggleLiterature?(subscriptionId: string): void;
    onEditLiterature?(subscriptionId: string): void;
    onDeleteLiterature?(subscriptionId: string): void;
    onRetry?(): void;
}
export declare function buildTaskPromptPreview(prompt: string): string;
export default function ScheduledTasksOverview({ templates, tasks, isSidebarOpen, loading, error, pendingTaskId, literatureSubscriptions, literatureLoading, pendingLiteratureId, onOpenSidebar, onCreateCustom, onCreateFromTemplate, onToggleTask, onEditTask, onDeleteTask, onOpenTaskChat, onCreateLiterature, onFetchLiterature, onToggleLiterature, onEditLiterature, onDeleteLiterature, onRetry, }: ScheduledTasksOverviewProps): React.JSX.Element;
//# sourceMappingURL=ScheduledTasksOverview.d.ts.map