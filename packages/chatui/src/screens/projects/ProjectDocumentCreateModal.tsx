import React, { useEffect, useMemo, useState } from 'react';
import { Check, FileText } from 'lucide-react';
import { BaseButton, BaseModal } from '../../components/common';

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
}

export interface ProjectDocumentCreateSelection {
  knowledgeType: string;
  templateId: string;
}

export interface ProjectDocumentCreateModalProps {
  visible: boolean;
  typeOptions: ProjectDocumentTypeOption[];
  templates: ProjectDocumentTemplateOption[];
  loading?: boolean;
  error?: string;
  defaultKnowledgeType?: string;
  defaultTemplateId?: string;
  onClose(): void;
  onRetry?(): void;
  onContinue(selection: ProjectDocumentCreateSelection): void;
}

export function ProjectDocumentCreateModal({
  visible,
  typeOptions,
  templates,
  loading = false,
  error = '',
  defaultKnowledgeType,
  defaultTemplateId,
  onClose,
  onRetry,
  onContinue,
}: ProjectDocumentCreateModalProps) {
  const fallbackType = defaultKnowledgeType || typeOptions[0]?.value || '';
  const fallbackTemplate =
    defaultTemplateId ||
    templates.find((template) => template.id === 'blank')?.id ||
    templates[0]?.id ||
    '';
  const [knowledgeType, setKnowledgeType] = useState(fallbackType);
  const [templateId, setTemplateId] = useState(fallbackTemplate);

  useEffect(() => {
    if (!visible) return;
    setKnowledgeType(fallbackType);
    setTemplateId(fallbackTemplate);
  }, [fallbackTemplate, fallbackType, visible]);

  const selectedTemplate = useMemo(
    () => templates.find((template) => template.id === templateId) ?? null,
    [templateId, templates],
  );

  return (
    <BaseModal
      visible={visible}
      title="新建文档"
      width={760}
      maskClosable={false}
      footer={null}
      onCancel={onClose}
      bodyClassName="!p-0"
    >
      <div className="flex max-h-[min(720px,calc(90vh-64px))] min-h-0 flex-col">
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          <section>
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-primaryText">选择文档类型</h3>
              <p className="mt-1 text-xs text-tertiaryText">文档类型用于项目内分类和后续检索。</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {typeOptions.map((option) => {
                const selected = option.value === knowledgeType;
                return (
                  <button
                    key={option.value}
                    type="button"
                    className={[
                      'rounded-lg border px-3 py-2.5 text-left transition',
                      selected
                        ? 'border-primary bg-primary-soft'
                        : 'border-lineSubtle bg-surface hover:border-controlBorderHover hover:bg-surfaceMuted',
                    ].join(' ')}
                    onClick={() => setKnowledgeType(option.value)}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-primaryText">{option.label}</span>
                      {selected && <Check size={15} className="shrink-0 text-primary" />}
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs leading-4 text-tertiaryText">{option.description}</p>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="mt-6 border-t border-lineSoft pt-5">
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-primaryText">选择模板</h3>
              <p className="mt-1 text-xs text-tertiaryText">模板只提供初始内容，进入编辑器后可以自由修改。</p>
            </div>

            {loading ? (
              <div className="rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText">
                正在加载模板…
              </div>
            ) : error ? (
              <div className="rounded-lg border border-danger bg-danger-soft px-4 py-4">
                <p className="text-sm text-danger">{error}</p>
                {onRetry && (
                  <BaseButton type="secondary" size="small" className="mt-3" onClick={onRetry}>
                    重新加载
                  </BaseButton>
                )}
              </div>
            ) : templates.length ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {templates.map((template) => {
                  const selected = template.id === templateId;
                  return (
                    <button
                      key={template.id}
                      type="button"
                      className={[
                        'rounded-lg border p-3 text-left transition',
                        selected
                          ? 'border-primary bg-primary-soft'
                          : 'border-lineSubtle bg-surface hover:border-controlBorderHover hover:bg-surfaceMuted',
                      ].join(' ')}
                      onClick={() => setTemplateId(template.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surfaceMuted text-base text-secondaryText">
                          {template.icon || <FileText size={17} />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="truncate text-sm font-medium text-primaryText">{template.name}</span>
                            {template.source === 'workspace' && (
                              <span className="shrink-0 rounded-full bg-surface px-2 py-0.5 text-xs text-primary">自定义</span>
                            )}
                            {selected && <Check size={15} className="ml-auto shrink-0 text-primary" />}
                          </div>
                          <p className="mt-1 line-clamp-2 text-xs leading-4 text-tertiaryText">{template.description}</p>
                          {template.structure?.length ? (
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {template.structure.slice(0, 3).map((item) => (
                                <span key={item} className="rounded-full bg-surface px-2 py-0.5 text-xs text-secondaryText">
                                  {item}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText">
                暂无可用模板
              </div>
            )}
          </section>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-4 border-t border-lineSoft px-6 py-4">
          <p className="min-w-0 truncate text-xs text-tertiaryText">
            {selectedTemplate ? `已选择：${selectedTemplate.name}` : '请选择一个模板'}
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <BaseButton type="secondary" size="medium" onClick={onClose}>取消</BaseButton>
            <BaseButton
              type="primary"
              size="medium"
              disabled={loading || Boolean(error) || !knowledgeType || !templateId}
              onClick={() => onContinue({ knowledgeType, templateId })}
            >
              继续编辑
            </BaseButton>
          </div>
        </div>
      </div>
    </BaseModal>
  );
}
