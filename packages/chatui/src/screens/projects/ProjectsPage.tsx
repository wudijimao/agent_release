import React, { useState } from 'react';
import { Menu, Plus } from 'lucide-react';
import { BaseButton, BaseDocumentUpload, BaseInput, BaseModal } from '../../components/common';

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
  documents: File[];
}

export interface ProjectsPageProps {
  projects: ProjectListItemViewModel[];
  isSidebarOpen: boolean;
  loading?: boolean;
  error?: string;
  onOpenSidebar(): void;
  onOpenProject(projectId: string): void;
  onCreateProject(input: CreateProjectViewModel): void | Promise<void>;
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
  onRetry,
}: ProjectsPageProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectDocuments, setProjectDocuments] = useState<File[]>([]);
  const [createError, setCreateError] = useState('');
  const [creating, setCreating] = useState(false);

  const openCreateModal = () => {
    setProjectName('');
    setProjectDescription('');
    setProjectDocuments([]);
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
        documents: projectDocuments,
      });
      setShowCreateModal(false);
    } catch (submitError) {
      setCreateError(submitError instanceof Error ? submitError.message : '项目创建失败');
    } finally {
      setCreating(false);
    }
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
        <BaseButton type="primary" size="small" rounded="large" icon={<Plus size={14} />} className="shrink-0" onClick={openCreateModal}>
          创建新项目
        </BaseButton>
      </header>

      <div className="flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10">
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

      <BaseModal visible={showCreateModal} title="创建新项目" width={560} maskClosable={false}
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
          <section className="space-y-2">
            <div className="text-sm font-medium text-primaryText">项目文档（选填）</div>
            <BaseDocumentUpload value={projectDocuments} maxCount={5} maxSize={20 * 1024 * 1024} disabled={creating}
              onChange={setProjectDocuments} onError={(uploadError) => setCreateError(uploadError.message)} />
          </section>
          {createError && <div role="alert" className="text-sm text-danger">{createError}</div>}
        </div>
      </BaseModal>
    </div>
  );
}
