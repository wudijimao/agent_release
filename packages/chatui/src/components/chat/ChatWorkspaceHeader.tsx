import type { KeyboardEvent, ReactNode, Ref } from 'react';
import { Menu } from 'lucide-react';

export interface ChatWorkspaceHeaderProps {
  isSidebarOpen: boolean;
  title?: string;
  editingTitle?: string;
  titleInputRef?: Ref<HTMLInputElement>;
  divided?: boolean;
  actions?: ReactNode;
  onOpenSidebar(): void;
  onStartEditTitle?(): void;
  onEditingTitleChange?(value: string): void;
  onCommitTitle?(): void;
  onEditingTitleKeyDown?(event: KeyboardEvent<HTMLInputElement>): void;
}

export function ChatWorkspaceHeader({
  isSidebarOpen,
  title,
  editingTitle,
  titleInputRef,
  divided = false,
  actions,
  onOpenSidebar,
  onStartEditTitle,
  onEditingTitleChange,
  onCommitTitle,
  onEditingTitleKeyDown,
}: ChatWorkspaceHeaderProps) {
  const isEditing = editingTitle !== undefined;

  return (
    <header
      className={`z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-6 backdrop-blur-sm ${
        divided ? 'border-b border-chatWorkspaceDivider' : ''
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        {!isSidebarOpen && (
          <button
            type="button"
            onClick={onOpenSidebar}
            className="-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight"
            title="展开边栏"
            aria-label="展开边栏"
          >
            <Menu size={20} />
          </button>
        )}

        {title !== undefined && (
          <div className="min-w-0">
            {isEditing ? (
              <input
                ref={titleInputRef}
                value={editingTitle}
                onChange={(event) => onEditingTitleChange?.(event.target.value)}
                onBlur={onCommitTitle}
                onKeyDown={onEditingTitleKeyDown}
                className="w-full max-w-[560px] rounded-md border border-shellChatEditBorder bg-white px-2.5 py-1 text-sm font-medium text-primaryText outline-none transition-colors focus:border-shellChatEditBorder"
                maxLength={80}
                aria-label="编辑对话名称"
              />
            ) : (
              <h1
                className={`truncate text-sm font-medium text-primaryText ${onStartEditTitle ? 'cursor-pointer' : ''}`}
                onClick={onStartEditTitle}
                title={onStartEditTitle ? '点击编辑对话名称' : title}
              >
                {title}
              </h1>
            )}
          </div>
        )}
      </div>

      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </header>
  );
}

export interface ChatWorkspaceHeaderActionProps {
  active?: boolean;
  icon?: ReactNode;
  label: string;
  onClick(): void;
}

export function ChatWorkspaceHeaderAction({ active = false, icon, label, onClick }: ChatWorkspaceHeaderActionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primaryText transition-colors duration-200 ${
        active ? 'bg-chatWorkspaceActionSurface' : 'bg-transparent hover:bg-chatWorkspaceActionSurface'
      }`}
    >
      {icon}
      <span className="max-w-[150px] truncate">{label}</span>
    </button>
  );
}
