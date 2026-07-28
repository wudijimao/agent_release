import React, { useMemo, useState } from 'react';
import { Cascader, DatePicker, Radio, TimePicker } from 'antd';
import dayjs from 'dayjs';
import { Check, ChevronDown, Folder, Plus } from 'lucide-react';
import { BaseActionMenu, BaseInput, BaseModal } from '../../components/common';
import type { BaseActionMenuItem, BaseActionMenuProps } from '../../components/common';

const { RangePicker } = DatePicker;

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

export interface ScheduledTaskEditorProject { id: string; name: string }

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

const frequencyOptions: Array<{ value: ScheduledTaskFetchFrequency; label: string }> = [
  { value: 'hourly', label: '每小时' }, { value: 'daily', label: '每天' }, { value: 'weekly', label: '每周' },
];
const sourceTypeMeta: Record<ScheduledTaskSourceType, { label: string; desc: string }> = {
  pubmed: { label: 'PubMed 文献', desc: '追踪正式发表论文' },
  biorxiv: { label: 'bioRxiv 预印本', desc: '追踪早期研究进展' },
};
const pubmedMatchOptions: Array<{ value: ScheduledTaskPubMedMatchMode; label: string }> = [
  { value: 'all', label: '全部关键词' }, { value: 'any', label: '任一关键词' }, { value: 'advanced', label: '高级表达式' },
];
const weekdayOptions = [
  ['mon', '周一'], ['tue', '周二'], ['wed', '周三'], ['thu', '周四'], ['fri', '周五'], ['sat', '周六'], ['sun', '周日'],
].map(([value, label]) => ({ value, label }));
const repeatOptions = [
  { value: 'daily', label: '每天' },
  { value: 'weekly', label: '每周', children: weekdayOptions },
  { value: 'monthly', label: '每月', children: Array.from({ length: 28 }, (_, index) => ({ value: String(index + 1), label: `${index + 1}号` })) },
];

export function ScheduledTaskEditorModal({
  visible, kind, editing = false, literatureValue, scheduleValue, projects = [], literatureProjects = [],
  onLiteratureChange, onScheduleChange, onCancel, onConfirm, onCreateProject,
}: ScheduledTaskEditorModalProps) {
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);
  const isLiterature = kind === 'literature';
  const selectedProject = projects.find((project) => project.id === scheduleValue.projectId) ?? null;
  const title = isLiterature
    ? editing ? '修改文献订阅任务' : '设置文献订阅任务'
    : editing ? '修改定时任务' : '新建定时任务';
  const repeatValue = scheduleValue.repeatMode === 'weekly' || scheduleValue.repeatMode === 'monthly'
    ? [scheduleValue.repeatMode, scheduleValue.repeatSubValue || (scheduleValue.repeatMode === 'weekly' ? 'mon' : '1')]
    : [scheduleValue.repeatMode];
  const projectItems = useMemo<BaseActionMenuItem[]>(() => [
    { key: 'none', label: '不选择项目', active: !selectedProject },
    ...projects.map((project) => ({ key: project.id, label: <span className="truncate">{project.name}</span>, active: selectedProject?.id === project.id })),
  ], [projects, selectedProject]);
  const projectFooterItems = useMemo<BaseActionMenuItem[]>(() => (
    onCreateProject ? [{ key: 'create', label: '新建项目', icon: <Plus size={16} /> }] : []
  ), [onCreateProject]);
  const handleProjectClick: BaseActionMenuProps['onItemClick'] = (item) => {
    setProjectMenuOpen(false);
    if (item.key === 'create') return onCreateProject?.();
    onScheduleChange({ ...scheduleValue, projectId: item.key === 'none' ? null : item.key });
  };

  return (
    <BaseModal visible={visible} title={title} width={600} className="tools-task-modal"
      okText={editing ? '保存修改' : isLiterature ? '创建订阅' : '创建任务'} cancelText="取消" onCancel={onCancel} onConfirm={onConfirm}
      okButtonProps={{ disabled: !literatureValue.topic.trim() || (isLiterature
        ? !literatureValue.keywords.trim() || literatureValue.sourceTypes.length === 0
          || (literatureValue.sourceTypes.includes('pubmed') && literatureValue.pubmedMatchMode === 'advanced' && !literatureValue.advancedQuery.trim())
        : !scheduleValue.taskPrompt.trim()) }}>
      <div className="space-y-5">
        <div>
          <div className="mb-1.5 text-sm font-medium text-primaryText">任务名称</div>
          <BaseInput value={literatureValue.topic} onChange={(event) => onLiteratureChange({ ...literatureValue, topic: event.target.value })}
            placeholder="请输入任务名称" size="medium" containerClassName="!px-3.5" />
        </div>
        {!isLiterature ? <>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <div className="mb-1.5 text-sm font-medium text-primaryText">任务周期</div>
              <RangePicker format="YYYY/MM/DD" className="task-period-picker w-full" classNames={{ popup: { root: 'task-period-picker-popup' } }}
                value={[scheduleValue.startDate ? dayjs(scheduleValue.startDate, 'YYYY-MM-DD') : null, scheduleValue.endDate ? dayjs(scheduleValue.endDate, 'YYYY-MM-DD') : null]}
                onChange={(_, [startDate, endDate]) => onScheduleChange({ ...scheduleValue, startDate, endDate })} />
            </div>
            <div>
              <div className="mb-1.5 text-sm font-medium text-primaryText">触发时间</div>
              <div className="grid grid-cols-2 gap-2.5">
                <Cascader value={repeatValue} options={repeatOptions} className="task-repeat-cascader w-full" classNames={{ popup: { root: 'task-repeat-cascader-popup' } }} placeholder="请选择重复方式"
                  onChange={(value) => {
                    const repeatMode = String(value[0] ?? 'daily') as ScheduledTaskRepeatMode;
                    const subValue = value[1] ? String(value[1]) : '';
                    onScheduleChange({ ...scheduleValue, repeatMode, repeatSubValue: repeatMode === 'weekly'
                      ? subValue || (scheduleValue.repeatMode === 'weekly' ? scheduleValue.repeatSubValue : 'mon') || 'mon'
                      : repeatMode === 'monthly' ? subValue || (scheduleValue.repeatMode === 'monthly' ? scheduleValue.repeatSubValue : '1') || '1' : '' });
                  }} />
                <TimePicker value={dayjs(scheduleValue.runAt, 'HH:mm')} format="HH:mm" minuteStep={1} allowClear={false}
                  onChange={(value) => onScheduleChange({ ...scheduleValue, runAt: value ? value.format('HH:mm') : scheduleValue.runAt })}
                  className="task-run-time-picker w-full" classNames={{ popup: { root: 'task-run-time-picker-popup' } }} />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-1.5 text-sm font-medium text-primaryText">提示词 (Prompt)<span className="text-danger"> *</span></div>
            <div className="relative">
              <textarea value={scheduleValue.taskPrompt} onChange={(event) => onScheduleChange({ ...scheduleValue, taskPrompt: event.target.value })}
                placeholder="输入任何内容，使用 '/' 选择技能或 '@' 引用资源..." rows={5}
                className="w-full resize-none rounded-lg border border-borderGray px-3.5 pb-10 pt-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary" />
              <div className="absolute bottom-4 left-3 z-20">
                <BaseActionMenu open={projectMenuOpen} onOpenChange={setProjectMenuOpen} placement="top-start" width={260}
                  trigger={<span className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm text-secondaryText transition-colors hover:bg-bgLight"><Folder size={14} /><span className="max-w-[140px] truncate">{selectedProject?.name ?? '工作项目'}</span><ChevronDown size={14} /></span>}
                  items={projectItems} onItemClick={handleProjectClick} className="!inline-flex" listClassName="max-h-[220px] overflow-y-auto" footerItems={projectFooterItems} />
              </div>
            </div>
          </div>
        </> : <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div className="mb-1.5 text-sm font-medium text-primaryText">抓取频率</div>
            <div className="relative">
              <select value={literatureValue.frequency} onChange={(event) => onLiteratureChange({ ...literatureValue, frequency: event.target.value as ScheduledTaskFetchFrequency })}
                className="h-9 w-full appearance-none rounded-lg border border-borderGray bg-white px-3 pr-10 text-sm text-primaryText outline-none transition-colors focus:border-primary">
                {frequencyOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-tertiaryText" />
            </div>
          </div>
          <div>
            <div className="mb-1.5 text-sm font-medium text-primaryText">回看天数</div>
            <input type="number" min={1} max={365} value={String(literatureValue.lookbackDays)}
              onChange={(event) => onLiteratureChange({ ...literatureValue, lookbackDays: Math.max(1, Math.min(365, Number(event.target.value) || 1)) })}
              className="h-9 w-full rounded-lg border border-borderGray bg-white px-3.5 text-sm text-primaryText outline-none transition-colors focus:border-primary" />
          </div>
        </div>}
        {isLiterature && <>
          <div>
            <div className="mb-2 text-sm font-medium text-primaryText">订阅来源</div>
            <div className="grid grid-cols-2 gap-3">{(Object.keys(sourceTypeMeta) as ScheduledTaskSourceType[]).map((sourceType) => {
                const source = sourceTypeMeta[sourceType];
                const active = literatureValue.sourceTypes.includes(sourceType);
                return <button type="button" key={sourceType} onClick={() => {
                  const sourceTypes = editing
                    ? [sourceType]
                    : active
                      ? literatureValue.sourceTypes.filter((item) => item !== sourceType)
                      : [...literatureValue.sourceTypes, sourceType];
                  onLiteratureChange({ ...literatureValue, sourceTypes });
                }} className={`flex items-start gap-2.5 rounded-lg border px-3.5 py-3 text-left transition-colors ${active ? 'border-primary bg-primary-soft-strong' : 'border-borderGray bg-white hover:border-borderSoft'}`}><span className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border ${active ? 'border-primary bg-primary text-white' : 'border-controlBorder text-transparent'}`}>{active && <Check size={11} strokeWidth={3} aria-hidden="true" />}</span><span><span className="block text-sm font-medium text-primaryText">{source.label}</span><span className="mt-0.5 block text-[13px] text-secondaryText">{source.desc}</span></span></button>;
              })}</div>
            <p className="mt-1.5 text-[13px] text-tertiaryText">新建时可同时选择多个来源，系统会分别创建订阅。</p>
          </div>
          <div>
            <div className="mb-1.5 text-sm font-medium text-primaryText">关键词</div>
            <input value={literatureValue.keywords} onChange={(event) => onLiteratureChange({ ...literatureValue, keywords: event.target.value })}
              placeholder="例：CRISPR, prime editing, base editor" className="w-full rounded-lg border border-borderGray px-3.5 py-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary" />
          </div>
          {literatureValue.sourceTypes.includes('pubmed') && <div>
            <div className="mb-2 text-sm font-medium text-primaryText">PubMed 匹配方式</div>
            <Radio.Group value={literatureValue.pubmedMatchMode} onChange={(event) => onLiteratureChange({ ...literatureValue, pubmedMatchMode: event.target.value as ScheduledTaskPubMedMatchMode })} className="task-radio-group">
              <div className="flex flex-wrap gap-5">{pubmedMatchOptions.map((option) => <Radio key={option.value} value={option.value}>{option.label}</Radio>)}</div>
            </Radio.Group>
          </div>}
          {literatureValue.sourceTypes.includes('pubmed') && literatureValue.pubmedMatchMode === 'advanced' && (
            <div>
              <div className="mb-1.5 text-sm font-medium text-primaryText">PubMed 高级表达式<span className="text-danger"> *</span></div>
              <textarea value={literatureValue.advancedQuery}
                onChange={(event) => onLiteratureChange({ ...literatureValue, advancedQuery: event.target.value })}
                placeholder={'例如：("inflammatory bowel disease"[Title/Abstract]) AND ("stromal cell"[Title/Abstract])'}
                rows={3}
                className="w-full resize-y rounded-lg border border-borderGray px-3.5 py-2.5 text-sm text-primaryText outline-none transition-colors placeholder:text-tertiaryText focus:border-primary" />
            </div>
          )}
          <div>
            <div className="mb-2 text-sm font-medium text-primaryText">关联项目</div>
            <div className="max-h-[150px] space-y-1 overflow-y-auto rounded-lg border border-borderGray p-2">
              {literatureProjects.length > 0 ? literatureProjects.map((project) => {
                const active = literatureValue.projectNodeIds.includes(project.id);
                return <label key={project.id} className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-primaryText hover:bg-bgLight">
                  <input type="checkbox" checked={active}
                    onChange={() => onLiteratureChange({ ...literatureValue, projectNodeIds: active
                      ? literatureValue.projectNodeIds.filter((id) => id !== project.id)
                      : [...literatureValue.projectNodeIds, project.id] })}
                    className="h-4 w-4 accent-primary" />
                  <span className="truncate">{project.name}</span>
                </label>;
              }) : <div className="px-2 py-3 text-sm text-tertiaryText">暂无可关联的知识追踪项目</div>}
            </div>
          </div>
          <label className="flex items-start gap-3 rounded-lg border border-borderGray px-3.5 py-3">
            <input type="checkbox" checked={literatureValue.enabled}
              onChange={(event) => onLiteratureChange({ ...literatureValue, enabled: event.target.checked })}
              className="mt-0.5 h-4 w-4 accent-primary" />
            <span><span className="block text-sm font-medium text-primaryText">启用订阅</span>
              <span className="mt-0.5 block text-[13px] text-secondaryText">关闭后保留历史内容，但不参与后续抓取。</span></span>
          </label>
        </>}
      </div>
    </BaseModal>
  );
}
