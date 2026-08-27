import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Check, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BaseButton, BaseModal } from '../../components/common';
import { ProjectDocumentTagPicker, type ProjectDocumentTagSelection } from './ProjectDocumentTagPicker';

export interface ProjectDocumentTypeOption {
  value: string;
  label: string;
  description: string;
}

export interface ProjectDocumentTemplateOption {
  id: string;
  name: string;
  description: string;
  icon?: string;
  source?: 'system' | 'workspace';
  structure?: string[];
  markdown?: string;
}

export interface ProjectDocumentCreateSelection {
  knowledgeType: string;
  tags: string[];
  templateId: string;
}

export interface ProjectDocumentCreateModalProps {
  visible: boolean;
  typeOptions: ProjectDocumentTypeOption[];
  templates: ProjectDocumentTemplateOption[];
  loading?: boolean;
  error?: string;
  defaultKnowledgeType?: string;
  onClose(): void;
  onRetry?(): void;
  onContinue(selection: ProjectDocumentCreateSelection): void;
}

const ProjectDocumentTemplateCard = React.memo(function ProjectDocumentTemplateCard({
  template,
  selected,
  onSelect,
  onPreview,
}: {
  template: ProjectDocumentTemplateOption;
  selected: boolean;
  onSelect(templateId: string): void;
  onPreview(templateId: string): void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(template.id)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect(template.id);
        }
      }}
      className={`group relative flex flex-col overflow-hidden rounded-lg border bg-surfaceMuted text-left transition-all ${selected ? 'border-primary ring-2 ring-primary-soft' : 'border-lineSubtle hover:border-controlBorderHover'}`}
    >
      <span className={`absolute right-2 top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full border ${selected ? 'border-primary bg-primary text-white' : 'border-controlBorder bg-white text-transparent'}`}><Check size={13} strokeWidth={3} /></span>
      <div className="flex items-center gap-2 px-3 pt-3 pr-9">
        <span className="truncate text-sm font-semibold text-primaryText">{template.name}</span>
        {template.source === 'workspace' && <span className="shrink-0 rounded-full bg-surface px-2 py-0.5 text-xs text-primary">自定义</span>}
      </div>
      <div className="relative mx-3 mb-3 mt-2.5 aspect-[4/5] overflow-hidden rounded-md bg-white">
        <div className="pointer-events-none origin-top-left scale-[0.62] px-3 py-2.5" style={{ width: '161%' }}>
          <div className="prose prose-slate max-w-none text-primaryText prose-p:my-1.5 prose-p:text-xs prose-p:leading-5 prose-li:text-xs prose-li:leading-5 prose-headings:text-primaryText prose-h2:mt-0 prose-h2:mb-1.5 prose-h2:text-sm prose-h2:font-semibold prose-h3:mt-2 prose-h3:mb-1 prose-h3:text-xs prose-h3:font-semibold prose-strong:text-primaryText prose-li:my-0.5 prose-ol:pl-4 prose-ul:pl-4">
            {template.markdown?.trim() ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{template.markdown}</ReactMarkdown> : <div className="flex items-center gap-2 text-xs text-tertiaryText"><FileText size={15} /><span>{template.description || '空白文档'}</span></div>}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
        {template.id !== 'blank' && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-overlaySurface opacity-0 backdrop-blur-[1px] transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
            <BaseButton type="secondary" size="small" rounded="large" onClick={(event) => { event.stopPropagation(); onPreview(template.id); }}>预览</BaseButton>
          </div>
        )}
      </div>
    </div>
  );
});

export function ProjectDocumentCreateModal({
  visible,
  typeOptions,
  templates,
  loading = false,
  error = '',
  defaultKnowledgeType,
  onClose,
  onRetry,
  onContinue,
}: ProjectDocumentCreateModalProps) {
  const fallbackType = defaultKnowledgeType || '';
  const orderedTemplates = useMemo(
    () => [...templates].sort((left, right) => Number(right.id === 'blank') - Number(left.id === 'blank')),
    [templates],
  );
  const defaultTemplateId = orderedTemplates.find((template) => template.id === 'blank')?.id || orderedTemplates[0]?.id || '';
  const [tagSelection, setTagSelection] = useState<ProjectDocumentTagSelection>({
    optionValues: fallbackType ? [fallbackType] : [],
    customTags: [],
  });
  const [selectedTemplateId, setSelectedTemplateId] = useState(defaultTemplateId);
  const [previewTemplateId, setPreviewTemplateId] = useState<string | null>(null);

  useEffect(() => {
    if (!visible) return;
    setTagSelection({ optionValues: fallbackType ? [fallbackType] : [], customTags: [] });
    setSelectedTemplateId(defaultTemplateId);
    setPreviewTemplateId(null);
  }, [defaultTemplateId, fallbackType, visible]);

  const previewTemplate = useMemo(
    () => templates.find((template) => template.id === previewTemplateId) ?? null,
    [previewTemplateId, templates],
  );
  const selectedTemplate = previewTemplate ?? templates.find((template) => template.id === selectedTemplateId) ?? null;
  const selectedTypeOptions = tagSelection.optionValues
    .map((value) => typeOptions.find((option) => option.value === value))
    .filter((option): option is ProjectDocumentTypeOption => Boolean(option));
  const continueWithSelection = () => {
    const knowledgeType = tagSelection.optionValues[0] || 'other';
    if (!selectedTemplate) return;
    onContinue({ knowledgeType, tags: [...selectedTypeOptions.map((option) => option.label), ...tagSelection.customTags], templateId: selectedTemplate.id });
  };

  return (
    <BaseModal
      visible={visible}
      title="新建文档"
      width={1040}
      footer={
        <div className="flex justify-end gap-2 px-6 py-4">
          <BaseButton type="secondary" size="medium" onClick={onClose}>取消</BaseButton>
          <BaseButton type="primary" size="medium" disabled={!selectedTemplate || loading} onClick={continueWithSelection}>
            新建文档
          </BaseButton>
        </div>
      }
      onCancel={onClose}
      bodyClassName="!p-0"
    >
      <div className="h-[min(690px,calc(90vh-154px))] overflow-y-auto px-6 py-5">
      {!previewTemplate && (
        <div className="mb-5">
          <ProjectDocumentTagPicker
            options={typeOptions}
            value={tagSelection}
            onChange={setTagSelection}
          />
        </div>
      )}

      {previewTemplate ? (
        <div className="flex h-full flex-col">
          <button type="button" onClick={() => setPreviewTemplateId(null)} className="mb-4 inline-flex shrink-0 items-center gap-1 text-sm text-secondaryText transition-colors hover:text-primaryText">
            <ArrowLeft size={16} />退出预览
          </button>
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="prose prose-slate max-w-none pb-2 text-primaryText prose-p:my-3 prose-p:text-sm prose-p:leading-7 prose-li:text-sm prose-li:leading-7 prose-headings:text-primaryText prose-h2:mt-4 prose-h2:mb-2 prose-h2:text-[16px] prose-h2:font-semibold prose-h3:mt-4 prose-h3:mb-2 prose-h3:text-base prose-h3:font-semibold prose-strong:text-primaryText prose-code:before:content-none prose-code:after:content-none prose-li:my-1 prose-ol:pl-6 prose-ul:pl-6">
              {previewTemplate.markdown?.trim() ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{previewTemplate.markdown}</ReactMarkdown> : <p className="text-sm text-tertiaryText">该模板暂无预览内容</p>}
            </div>
          </div>
        </div>
      ) : (
        <section>
          <h3 className="mb-3 text-sm font-medium text-primaryText">选择项目模板</h3>
          {loading ? (
            <div className="rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText">正在加载模板…</div>
          ) : error ? (
            <div className="rounded-lg border border-danger bg-danger-soft px-4 py-4">
              <p className="text-sm text-danger">{error}</p>
              {onRetry && <BaseButton type="secondary" size="small" className="mt-3" onClick={onRetry}>重新加载</BaseButton>}
            </div>
          ) : orderedTemplates.length ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {orderedTemplates.map((template) => (
                <ProjectDocumentTemplateCard
                  key={template.id}
                  template={template}
                  selected={selectedTemplateId === template.id}
                  onSelect={setSelectedTemplateId}
                  onPreview={setPreviewTemplateId}
                />
              ))}
            </div>
          ) : <div className="rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText">暂无可用模板</div>}
        </section>
      )}
      </div>
    </BaseModal>
  );
}
