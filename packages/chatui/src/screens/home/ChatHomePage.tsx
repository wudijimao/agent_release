import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import { BaseActionMenu, BaseButton, BaseInput } from '../../components/common';
import type { BaseActionMenuItem, BaseActionMenuProps } from '../../components/common';
import { ChatWorkspaceHeader, InputArea, QuickPrompts } from '../../components/chat';
import type { ChatFileOption, ChatSkillOption, InputSendPayload } from '../../components/chat';

export interface ChatHomeProject {
  id: string;
  name: string;
}

export interface ChatHomePageProps {
  projects: readonly ChatHomeProject[];
  selectedProjectId?: string;
  disabled?: boolean;
  embedded?: boolean;
  isSidebarOpen?: boolean;
  skillOptions?: readonly ChatSkillOption[];
  fileOptions?: readonly ChatFileOption[];
  onSelectProject(projectId: string | null): void;
  onCreateProject?(name: string): void;
  onOpenSidebar?(): void;
  onSend(payload: string | InputSendPayload): void;
}

export default function ChatHomePage({
  projects,
  selectedProjectId,
  disabled = false,
  embedded = false,
  isSidebarOpen = true,
  skillOptions,
  fileOptions,
  onSelectProject,
  onCreateProject,
  onOpenSidebar,
  onSend,
}: ChatHomePageProps) {
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [showCreateProjectPopover, setShowCreateProjectPopover] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const projectSelectorRef = useRef<HTMLDivElement | null>(null);
  const createProjectPopoverRef = useRef<HTMLDivElement | null>(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [projects, selectedProjectId],
  );

  const projectMenuItems = useMemo<BaseActionMenuItem[]>(() => [
    {
      key: 'none',
      label: '不选择项目',
      active: !selectedProject,
    },
    ...projects.map<BaseActionMenuItem>((project) => ({
      key: project.id,
      label: <span className="truncate">{project.name}</span>,
      active: selectedProject?.id === project.id,
    })),
  ], [projects, selectedProject]);

  const projectMenuFooterItems = useMemo<BaseActionMenuItem[]>(() => (
    onCreateProject
      ? [{ key: 'create', label: '新建项目', icon: <Plus size={16} /> }]
      : []
  ), [onCreateProject]);

  const closeCreateProject = () => {
    setShowCreateProjectPopover(false);
    setNewProjectName('');
  };

  const handleProjectMenuItemClick: BaseActionMenuProps['onItemClick'] = (item) => {
    if (item.key === 'create') {
      setShowCreateProjectPopover(true);
      setNewProjectName('');
      return;
    }

    const projectId = item.key === 'none' ? null : String(item.key);
    onSelectProject(projectId);
    setShowProjectDropdown(false);
  };

  const handleConfirmCreateProject = () => {
    const trimmedName = newProjectName.trim();
    if (!trimmedName) return;

    const duplicateProject = projects.find(
      (project) => project.name.trim().toLowerCase() === trimmedName.toLowerCase(),
    );

    if (duplicateProject) {
      onSelectProject(duplicateProject.id);
    } else {
      onCreateProject?.(trimmedName);
    }

    closeCreateProject();
    setShowProjectDropdown(false);
  };

  useEffect(() => {
    if (!showCreateProjectPopover) return;

    const handleDocumentMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (createProjectPopoverRef.current?.contains(target)) return;
      if (projectSelectorRef.current?.contains(target)) return;
      closeCreateProject();
      setShowProjectDropdown(false);
    };

    document.addEventListener('mousedown', handleDocumentMouseDown);
    return () => document.removeEventListener('mousedown', handleDocumentMouseDown);
  }, [showCreateProjectPopover]);

  const content = (
    <div className="mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-6">
          <h1
            className="mb-10 text-5xl tracking-wider text-primaryText"
            style={{ fontFamily: '"Songti SC", "STSong", "Noto Serif CJK SC", serif' }}
          >
            研究，由此开始
          </h1>

          <div className="mx-auto mb-6 w-full max-w-[840px]">
            <div ref={projectSelectorRef} className="relative">
              {showCreateProjectPopover && (
                <div
                  ref={createProjectPopoverRef}
                  className="absolute bottom-[calc(100%+8px)] left-[272px] z-[1301] w-[300px] rounded-xl border border-chatPopupBorder bg-white p-4 shadow-chatPopup"
                >
                  <div className="space-y-3">
                    <div>
                      <div className="mb-1.5 text-sm font-semibold text-primaryText">新建项目</div>
                      <BaseInput
                        value={newProjectName}
                        onChange={(event) => setNewProjectName(event.target.value)}
                        placeholder="请输入项目名称"
                        size="medium"
                        containerClassName="!px-3"
                      />
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <BaseButton type="secondary" size="small" onClick={closeCreateProject}>
                        取消
                      </BaseButton>
                      <BaseButton
                        type="primary"
                        size="small"
                        onClick={handleConfirmCreateProject}
                        disabled={!newProjectName.trim()}
                      >
                        确认
                      </BaseButton>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <InputArea
              onSend={onSend}
              disabled={disabled}
              skillOptions={skillOptions}
              fileOptions={fileOptions}
              leadingControls={(
                <BaseActionMenu
                  open={showProjectDropdown}
                  onOpenChange={(open) => {
                    if (!open && showCreateProjectPopover) return;
                    setShowProjectDropdown(open);
                    if (!open) closeCreateProject();
                    else setShowCreateProjectPopover(false);
                  }}
                  placement="top-start"
                  width={260}
                  trigger={(
                    <span className="flex items-center gap-1.5 rounded-full border border-borderGray bg-white px-4 py-1.5 text-[14px] text-tertiaryText transition-colors hover:bg-bgLight">
                      <span className="max-w-[120px] truncate">
                        {selectedProject ? selectedProject.name : '工作项目'}
                      </span>
                      <ChevronDown size={14} />
                    </span>
                  )}
                  items={projectMenuItems}
                  footerItems={projectMenuFooterItems}
                  onItemClick={handleProjectMenuItemClick}
                  className="!inline-flex"
                  listClassName="max-h-[220px] overflow-y-auto"
                />
              )}
            />
          </div>

          <QuickPrompts onSelect={onSend} />
    </div>
  );

  if (embedded) return content;

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <ChatWorkspaceHeader
        isSidebarOpen={isSidebarOpen}
        onOpenSidebar={onOpenSidebar ?? (() => undefined)}
      />
      <div className="flex min-h-0 w-full flex-1 overflow-hidden">
        {content}
      </div>
    </div>
  );
}
