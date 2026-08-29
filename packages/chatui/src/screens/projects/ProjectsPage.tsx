import React, { useCallback, useRef, useState } from 'react';
import { LayoutTemplate, Menu, Plus } from 'lucide-react';
import { BaseButton, BaseInput, BaseModal } from '../../components/common';
import { ProjectDocumentTemplateCard, type ProjectDocumentTemplateCardViewModel } from './ProjectDocumentTemplateCard';

export interface ProjectListItemViewModel extends Record<string, unknown> {
  id: string;
  name: string;
  description: string;
  conversationCount: number;
  documentCount: number;
}

export interface CreateProjectViewModel {
  name: string;
  description: string;
}

export type ProjectTemplateListItemViewModel = ProjectDocumentTemplateCardViewModel;

export interface ProjectsPageProps {
  projects: ProjectListItemViewModel[];
  isSidebarOpen: boolean;
  loading?: boolean;
  error?: string;
  onOpenSidebar(): void;
  onOpenProject(projectId: string): void;
  onCreateProject(input: CreateProjectViewModel): void | Promise<void>;
  templates?: ProjectTemplateListItemViewModel[];
  templatesLoading?: boolean;
  templatesError?: string;
  templatesVisible?: boolean;
  onTemplatesVisibleChange?(visible: boolean): void;
  onOpenTemplates?(): void;
  onRetryTemplates?(): void;
  onOpenTemplate?(templateId: string): void;
  onCreateTemplate?(): void;
  onRetry?(): void;
}

export function ProjectsPage({
  projects,
  isSidebarOpen,
  loading = false,
  error,
  onOpenSidebar,
  onOpenProject,
  onCreateProject,
  templates = [],
  templatesLoading = false,
  templatesError = '',
  templatesVisible,
  onTemplatesVisibleChange,
  onOpenTemplates,
  onRetryTemplates,
  onOpenTemplate,
  onCreateTemplate,
  onRetry,
}: ProjectsPageProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [createError, setCreateError] = useState('');
  const [creating, setCreating] = useState(false);
  const [uncontrolledTemplatesVisible, setUncontrolledTemplatesVisible] = useState(false);
  const templatesScrollTopRef = useRef(0);
  const showTemplatesModal = templatesVisible ?? uncontrolledTemplatesVisible;
  const setTemplatesScrollElement = useCallback((element: HTMLDivElement | null) => {
    if (element) element.scrollTop = templatesScrollTopRef.current;
  }, []);

  const openCreateModal = () => {
    setProjectName('');
    setProjectDescription('');
    setCreateError('');
    setShowCreateModal(true);
  };

  const closeCreateModal = () => {
    if (creating) return;
    setShowCreateModal(false);
    setCreateError('');
  };

  const submitProject = async () => {
    const name = projectName.trim();
    if (!name) {
      setCreateError('请输入项目名称');
      return;
    }
    setCreating(true);
    setCreateError('');
    try {
      await onCreateProject({
        name,
        description: projectDescription.trim(),
      });
      setShowCreateModal(false);
    } catch (submitError) {
      setCreateError(submitError instanceof Error ? submitError.message : '项目创建失败');
    } finally {
      setCreating(false);
    }
  };
  const openTemplates = () => {
    if (templatesVisible === undefined) setUncontrolledTemplatesVisible(true);
    onTemplatesVisibleChange?.(true);
    onOpenTemplates?.();
  };
  const closeTemplates = () => {
    if (templatesVisible === undefined) setUncontrolledTemplatesVisible(false);
    onTemplatesVisibleChange?.(false);
  };

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
            <span className="font-medium text-primaryText">项目</span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {onOpenTemplates && <BaseButton type="secondary" size="small" rounded="large" icon={<LayoutTemplate size={14} />} onClick={openTemplates}>文档模板</BaseButton>}
          <BaseButton type="primary" size="small" rounded="large" icon={<Plus size={14} />} onClick={openCreateModal}>创建新项目</BaseButton>
        </div>
      </header>

      <div className="chatui-page-content-gutter flex-1 overflow-y-auto pb-12 pt-4 md:pb-12 md:pt-6">
        <div className="mx-auto max-w-[1240px]">
          <section className="pb-0">
            <h2 className="text-2xl font-semibold text-primaryText">科研项目</h2>
          </section>

          {error && (
            <div className="mt-6 flex items-center justify-between gap-3 rounded-lg border border-danger bg-danger-soft px-4 py-3 text-sm text-danger">
              <span>{error}</span>
              {onRetry && <button type="button" className="font-medium underline" onClick={onRetry}>重新加载</button>}
            </div>
          )}

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3" aria-busy={loading}>
            {projects.map((project) => (
              <button key={project.id} type="button" onClick={() => onOpenProject(project.id)}
                className="group rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm">
                <div className="mb-1">
                  <h3 className="truncate text-lg font-medium text-primaryText">{project.name}</h3>
                </div>
                <p className="line-clamp-2 min-h-[40px] text-sm leading-5 text-secondaryText">{project.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-tertiaryText">
                  <span>{project.documentCount}文档</span><span>·</span><span>{project.conversationCount}对话</span>
                </div>
              </button>
            ))}

            {!loading && !error && projects.length === 0 && (
              <div className="col-span-full rounded-lg border border-dashed border-borderSoft px-4 py-10 text-center text-sm text-tertiaryText">暂无项目</div>
            )}
          </div>
        </div>
      </div>

      <BaseModal visible={showCreateModal} title="创建新项目" width={560}
        okText={creating ? '创建中…' : '创建'} cancelText="取消" onCancel={closeCreateModal} onConfirm={() => void submitProject()}
        okButtonProps={{ disabled: creating }} bodyClassName="!px-6 !py-5">
        <div className="space-y-4">
          <section className="space-y-2">
            <div className="text-sm font-medium text-primaryText">项目名称 <span className="text-danger">*</span></div>
            <BaseInput value={projectName} placeholder="请输入项目名称" disabled={creating}
              onChange={(event) => { setProjectName(event.target.value); if (createError) setCreateError(''); }} />
          </section>
          <section className="space-y-2">
            <div className="text-sm font-medium text-primaryText">项目描述（选填）</div>
            <textarea value={projectDescription} onChange={(event) => setProjectDescription(event.target.value)} placeholder="请输入项目描述" rows={4} disabled={creating}
              className="w-full resize-none rounded-lg border border-borderGray bg-white px-3 py-2 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-60" />
          </section>
          {createError && <div role="alert" className="text-sm text-danger">{createError}</div>}
        </div>
      </BaseModal>

      <BaseModal
        visible={showTemplatesModal}
        title="项目模板"
        width={1040}
        footer={null}
        onCancel={closeTemplates}
        className="!overflow-hidden"
        bodyClassName="!h-[min(720px,calc(90vh-57px))] !overflow-hidden !p-0"
      >
        <div className="flex h-full min-h-0 flex-col px-6 py-5">
          <div
            ref={setTemplatesScrollElement}
            onScroll={(event) => { templatesScrollTopRef.current = event.currentTarget.scrollTop; }}
            className="min-h-0 flex-1 overflow-y-auto"
          >
            {templatesLoading ? <div className="py-16 text-center text-sm text-tertiaryText">正在加载模板…</div> : templatesError ? <div className="rounded-lg border border-danger bg-danger-soft p-4 text-sm text-danger">{templatesError}{onRetryTemplates && <button type="button" className="ml-3 font-medium underline" onClick={onRetryTemplates}>重新加载</button>}</div> : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {onCreateTemplate && <ProjectDocumentTemplateCard create onOpen={onCreateTemplate} />}
                {templates.map((template) => <ProjectDocumentTemplateCard key={template.id} template={template} onOpen={() => onOpenTemplate?.(template.id)} />)}
              </div>
            )}
          </div>
        </div>
      </BaseModal>

    </div>
  );
}
