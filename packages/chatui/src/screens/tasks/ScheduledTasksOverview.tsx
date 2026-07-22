import React, { useMemo, useState } from 'react';
import { Menu, MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { BaseActionMenu, BaseButton, BaseTable, BaseToggle } from '../../components/common';
import type { BaseActionMenuItem, BaseTableColumn } from '../../components/common';

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

const TASK_PROMPT_LINE_CHAR_LIMIT = 30;
const TASK_PROMPT_MAX_LINES = 3;

export function buildTaskPromptPreview(prompt: string) {
  const promptChars = Array.from(prompt ?? '');
  const maxChars = TASK_PROMPT_LINE_CHAR_LIMIT * TASK_PROMPT_MAX_LINES;
  const visibleChars = promptChars.length > maxChars
    ? [...promptChars.slice(0, Math.max(maxChars - 3, 0)), '.', '.', '.']
    : promptChars;
  const lines: string[] = [];
  for (let index = 0; index < visibleChars.length; index += TASK_PROMPT_LINE_CHAR_LIMIT) {
    lines.push(visibleChars.slice(index, index + TASK_PROMPT_LINE_CHAR_LIMIT).join(''));
  }
  return lines.join('\n');
}

export default function ScheduledTasksOverview({
  templates,
  tasks,
  isSidebarOpen,
  loading = false,
  error,
  pendingTaskId,
  onOpenSidebar,
  onCreateCustom,
  onCreateFromTemplate,
  onToggleTask,
  onEditTask,
  onDeleteTask,
  onRetry,
}: ScheduledTasksOverviewProps) {
  const [actionMenuTaskId, setActionMenuTaskId] = useState<string | null>(null);

  const taskTableColumns = useMemo<BaseTableColumn<ScheduledTaskListItemViewModel>[]>(
    () => [
      {
        title: '任务名称',
        dataIndex: 'name',
        width: '20%',
        render: (name) => <span className="truncate text-primaryText">{String(name)}</span>,
      },
      {
        title: '任务内容',
        dataIndex: 'prompt',
        width: '40%',
        render: (prompt) => (
          <span className="whitespace-pre-line break-all text-secondaryText">
            {buildTaskPromptPreview(String(prompt ?? ''))}
          </span>
        ),
      },
      {
        title: '下次运行',
        dataIndex: 'nextRun',
        width: '14%',
        render: (nextRun) => <span className="text-secondaryText">{String(nextRun)}</span>,
      },
      {
        title: '触发方式',
        dataIndex: 'trigger',
        width: '16%',
        render: (trigger) => <span className="text-secondaryText">{String(trigger)}</span>,
      },
      {
        title: '状态',
        dataIndex: 'isEnabled',
        width: '7%',
        render: (_, task) => (
          <BaseToggle
            size="small"
            checked={task.isEnabled}
            disabled={task.isToggleDisabled || pendingTaskId === task.id}
            onChange={() => onToggleTask(task.id)}
            aria-label={task.isEnabled ? '关闭任务' : '开启任务'}
          />
        ),
      },
      {
        title: '操作',
        dataIndex: 'id',
        width: '3%',
        align: 'right',
        render: (_, task) => {
          const actionItems: BaseActionMenuItem[] = [
            { key: 'edit', label: '编辑', icon: <Pencil size={14} /> },
            { key: 'delete', label: '删除', icon: <Trash2 size={14} />, danger: true },
          ];
          return (
            <BaseActionMenu
              open={actionMenuTaskId === task.id}
              onOpenChange={(open) => setActionMenuTaskId(open ? task.id : null)}
              placement="bottom-end"
              width={132}
              portal
              menuClassName="!min-w-[132px]"
              trigger={<span className="inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText"><MoreHorizontal size={16} /></span>}
              items={actionItems}
              onItemClick={(item) => {
                setActionMenuTaskId(null);
                if (item.key === 'edit') onEditTask(task.id);
                else onDeleteTask(task.id);
              }}
            />
          );
        },
      },
    ],
    [actionMenuTaskId, onDeleteTask, onEditTask, onToggleTask, pendingTaskId],
  );

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <header className="z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm">
        <div className="flex min-w-0 items-center gap-3">
          {!isSidebarOpen && (
            <button type="button" onClick={onOpenSidebar} className="-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight" title="展开边栏">
              <Menu size={20} />
            </button>
          )}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium text-primaryText">任务</span>
          </div>
        </div>
        <BaseButton type="primary" size="small" rounded="large" icon={<Plus size={14} />} className="shrink-0" onClick={onCreateCustom}>
          新建任务
        </BaseButton>
      </header>

      <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10">
        <div className="mx-auto max-w-[1240px] space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-primaryText">定时任务</h2>
            <div className="mt-6 grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <button key={template.id} type="button" onClick={() => onCreateFromTemplate(template.id)} className="flex flex-col rounded-lg border border-lineSoft bg-white p-4 text-left transition-all hover:border-borderSoft hover:shadow-sm">
                  <h3 className="text-[17px] font-medium text-primaryText">{template.name}</h3>
                  <p className="mt-1 line-clamp-2 min-h-[38px] text-sm leading-5 text-secondaryText">{template.description}</p>
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-[15px] font-medium text-primaryText">已设置任务</h2>
            {error && (
              <div className="flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger">
                <span>{error}</span>
                {onRetry && <button type="button" className="font-medium underline" onClick={onRetry}>重新加载</button>}
              </div>
            )}
            <div className="border-b border-borderGray bg-white">
              <BaseTable className="task-table-scroll w-full [&_table]:min-w-[940px]" columns={taskTableColumns} dataSource={tasks} rowKey="id" striped={false} loading={loading} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
