import React, { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Folder, Clock3, Settings, Search, ChevronDown, ChevronRight, PanelLeftClose, SquarePen, MoreHorizontal, Pencil, Share2, Trash2, Pin, AlertTriangle } from 'lucide-react';
import { BaseActionMenu, BaseEmpty, BaseModal } from '../../components/common';
import type { BaseActionMenuItem, BaseActionMenuProps } from '../../components/common';

export interface AppShellChat {
  id: string;
  title: string;
  date: string;
  count: number;
  updatedAt?: string;
  projectId?: string;
  isPinned?: boolean;
  taskId?: string;
  source?: string;
  isTaskConversation?: boolean;
}

export interface AppShellProject {
  id: string;
  name: string;
}

export interface AppShellUser {
  name: string;
  avatarText: string;
  avatarUrl?: string;
}

export interface AppShellChatActions {
  rename?: boolean;
  share?: boolean;
  pin?: boolean;
  delete?: boolean;
}

export interface AppShellContentContext {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  chats: AppShellChat[];
  setChats: React.Dispatch<React.SetStateAction<AppShellChat[]>>;
  setAiUsageWarningActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AppShellProps {
  currentPath: string;
  projects: readonly AppShellProject[];
  initialChats: readonly AppShellChat[];
  logoUrl: string;
  user: AppShellUser;
  children: ReactNode | ((context: AppShellContentContext) => ReactNode);
  initialAiUsageWarningActive?: boolean;
  chatActions?: AppShellChatActions;
  onNavigate(href: string, options?: { replace?: boolean }): void;
  onLogout(): void;
  onChatsChange?(chats: readonly AppShellChat[]): void;
  onRenameChat?(chatId: string, title: string): void;
  onTogglePinChat?(chatId: string, isPinned: boolean): void;
  onShareChat?(chatId: string): void;
  onDeleteChat?(chatId: string): void;
}

const MAX_RECENT_CHATS = 10;

const isTaskConversationChat = (chat: AppShellChat) =>
  chat.isTaskConversation === true ||
  chat.source === 'task' ||
  chat.id.startsWith('task-') ||
  (typeof chat.taskId === 'string' && chat.taskId.trim().length > 0);

export default function AppShell({
  currentPath,
  projects,
  initialChats,
  logoUrl,
  user,
  children,
  initialAiUsageWarningActive = false,
  chatActions = { rename: true, share: true, pin: true, delete: true },
  onNavigate,
  onLogout,
  onChatsChange,
  onRenameChat,
  onTogglePinChat,
  onShareChat,
  onDeleteChat,
}: AppShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [isResizing, setIsResizing] = useState(false);
  const resizeStartXRef = useRef(0);
  const resizeStartWidthRef = useRef(240);
  const [expandedProjects, setExpandedProjects] = useState(() => {
    const initial: Record<string, boolean> = { unassigned: true };
    projects.forEach(p => { initial[p.id] = true; });
    return initial;
  });
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);
  const [chats, setChats] = useState<AppShellChat[]>(() => [...initialChats]);
  const [chatMenuOpenId, setChatMenuOpenId] = useState<string | null>(null);
  const [sortMode, setSortMode] = useState<'time' | 'project'>('time');
  const [isSidebarScrolling, setIsSidebarScrolling] = useState(false);
  const [editingChatId, setEditingChatId] = useState<string | null>(null);
  const [editingChatTitle, setEditingChatTitle] = useState('');
  const [showAllChatsModal, setShowAllChatsModal] = useState(false);
  const [allChatsKeyword, setAllChatsKeyword] = useState('');
  const [isAllChatsModalScrolling, setIsAllChatsModalScrolling] = useState(false);
  const [aiUsageWarningActive, setAiUsageWarningActive] = useState(initialAiUsageWarningActive);
  const [aiUsageWarningDismissed, setAiUsageWarningDismissed] = useState(false);
  const chatRenameInputRef = useRef<HTMLInputElement | null>(null);
  const sidebarScrollTimerRef = useRef<number | null>(null);
  const allChatsScrollTimerRef = useRef<number | null>(null);
  const hasChatActions = Boolean(
    chatActions.rename || chatActions.share || chatActions.pin || chatActions.delete,
  );

  const handleLogout = () => {
    setSettingsMenuOpen(false);
    onLogout();
  };

  const toggleProject = (projectId: string) => {
    setExpandedProjects(prev => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  const handleDeleteChat = (chatId: string) => {
    setChats((prev) => prev.filter((chat) => chat.id !== chatId));
    setChatMenuOpenId(null);

    if (editingChatId === chatId) {
      setEditingChatId(null);
      setEditingChatTitle('');
    }

    onDeleteChat?.(chatId);

    const activeChatId = currentPath.match(/^\/chat\/([^/]+)$/)?.[1];
    if (activeChatId === chatId) {
      onNavigate('/chat/new', { replace: true });
    }
  };

  const handleTogglePinChat = (chatId: string) => {
    const target = chats.find((chat) => chat.id === chatId);
    if (!target) return;

    const toggledPinned = !target.isPinned;
    setChats((prev) => {
      const updated = prev.map((chat) =>
        chat.id === chatId ? { ...chat, isPinned: toggledPinned } : chat,
      );

      return updated;
    });
    onTogglePinChat?.(chatId, toggledPinned);
    setChatMenuOpenId(null);
  };

  const startChatRename = (chat: AppShellChat) => {
    setEditingChatId(chat.id);
    setEditingChatTitle(chat.title);
    setChatMenuOpenId(null);
  };

  const cancelChatRename = () => {
    setEditingChatId(null);
    setEditingChatTitle('');
  };

  const commitChatRename = (chatId: string) => {
    const nextTitle = editingChatTitle.trim();

    if (nextTitle) {
      setChats((prev) => prev.map((chat) => (
        chat.id === chatId ? { ...chat, title: nextTitle } : chat
      )));
      onRenameChat?.(chatId, nextTitle);
    }

    cancelChatRename();
  };

  const handleChatTitleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, chatId: string) => {
    event.stopPropagation();

    if (event.key === 'Enter') {
      event.preventDefault();
      commitChatRename(chatId);
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      cancelChatRename();
    }
  };

  const handleChatRowClick = (chatId: string) => {
    if (editingChatId === chatId) {
      chatRenameInputRef.current?.focus();
      return;
    }
    onNavigate(`/chat/${chatId}`);
  };

  const renderChatTitle = (chat: AppShellChat, withPinIcon = false) => {
    const isEditing = editingChatId === chat.id;

    if (isEditing) {
      return (
        <div
          className="flex min-w-0 items-center gap-2 flex-1"
          onClick={(event) => {
            event.stopPropagation();
            chatRenameInputRef.current?.focus();
          }}
        >
          {withPinIcon && <Pin size={14} className="shrink-0" />}
          <input
            ref={chatRenameInputRef}
            value={editingChatTitle}
            onChange={(event) => setEditingChatTitle(event.target.value)}
            onKeyDown={(event) => handleChatTitleKeyDown(event, chat.id)}
            onBlur={() => commitChatRename(chat.id)}
            onClick={(event) => event.stopPropagation()}
            className="w-full bg-transparent px-0 text-sm text-primaryText outline-none"
            maxLength={80}
            aria-label="重命名对话"
          />
        </div>
      );
    }

    return (
      <div className="flex min-w-0 items-center gap-2 flex-1">
        {withPinIcon && <Pin size={14} className="shrink-0" />}
        <span className="truncate">{chat.title}</span>
      </div>
    );
  };

  const handleResizeStart = (event: React.MouseEvent<HTMLDivElement>) => {
    resizeStartXRef.current = event.clientX;
    resizeStartWidthRef.current = sidebarWidth;
    setIsResizing(true);
  };

  useEffect(() => {
    if (!isResizing) return;

    const minWidth = 200;
    const maxWidth = 440;

    const handleMouseMove = (event: MouseEvent) => {
      const delta = event.clientX - resizeStartXRef.current;
      const nextWidth = Math.min(maxWidth, Math.max(minWidth, resizeStartWidthRef.current + delta));
      setSidebarWidth(nextWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, sidebarWidth]);

  useEffect(() => {
    if (!isSidebarOpen) {
      setSidebarWidth(240);
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    onChatsChange?.(chats);
  }, [chats, onChatsChange]);

  useEffect(() => {
    setChats([...initialChats]);
  }, [initialChats]);

  useEffect(() => {
    if (!editingChatId) return;

    const frameId = window.requestAnimationFrame(() => {
      chatRenameInputRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [editingChatId]);

  useEffect(() => {
    return () => {
      if (sidebarScrollTimerRef.current !== null) {
        window.clearTimeout(sidebarScrollTimerRef.current);
      }
      if (allChatsScrollTimerRef.current !== null) {
        window.clearTimeout(allChatsScrollTimerRef.current);
      }
    };
  }, []);

  const handleSidebarScroll = () => {
    setIsSidebarScrolling(true);
    if (sidebarScrollTimerRef.current !== null) {
      window.clearTimeout(sidebarScrollTimerRef.current);
    }
    sidebarScrollTimerRef.current = window.setTimeout(() => {
      setIsSidebarScrolling(false);
    }, 600);
  };

  const handleAllChatsModalScroll = () => {
    setIsAllChatsModalScrolling(true);
    if (allChatsScrollTimerRef.current !== null) {
      window.clearTimeout(allChatsScrollTimerRef.current);
    }
    allChatsScrollTimerRef.current = window.setTimeout(() => {
      setIsAllChatsModalScrolling(false);
    }, 600);
  };

  useEffect(() => {
    if (!aiUsageWarningActive) {
      setAiUsageWarningDismissed(false);
    }
  }, [aiUsageWarningActive]);

  const handleAiUsageWarningClick = () => {
    setAiUsageWarningDismissed(true);
    onNavigate('/ai-usage');
  };

  const settingsMenuItems = useMemo<BaseActionMenuItem[]>(() => [
    {
      key: 'skills',
      label: 'Skill',
    },
    {
      key: 'ai-usage',
      label: 'AI用量',
    },
    {
      key: 'members',
      label: '成员管理',
    },
    {
      key: 'system-settings',
      label: '更多系统设置',
    },
    {
      key: 'logout',
      label: '退出登录',
      danger: true,
    },
  ], []);

  const handleSettingsMenuItemClick: BaseActionMenuProps['onItemClick'] = (item) => {
    setSettingsMenuOpen(false);

    if (item.key === 'skills') {
      onNavigate('/skills');
      return;
    }

    if (item.key === 'ai-usage') {
      onNavigate('/ai-usage');
      return;
    }

    if (item.key === 'members') {
      onNavigate('/members');
      return;
    }

    if (item.key === 'system-settings') {
      onNavigate('/system-settings');
      return;
    }

    if (item.key === 'logout') {
      handleLogout();
    }
  };

  const chatMenuFooterItems = useMemo<BaseActionMenuItem[]>(() => (
    chatActions.delete
      ? [{ key: 'delete', label: '删除', icon: <Trash2 size={14} />, danger: true }]
      : []
  ), [chatActions.delete]);

  const buildChatMenuItems = (chat: AppShellChat): BaseActionMenuItem[] => {
    const items: BaseActionMenuItem[] = [];
    if (chatActions.rename) {
      items.push({ key: 'rename', label: '重命名', icon: <Pencil size={14} /> });
    }
    if (chatActions.share) {
      items.push({ key: 'share', label: '分享对话', icon: <Share2 size={14} /> });
    }
    if (chatActions.pin) {
      items.push({
        key: 'pin',
        label: chat.isPinned ? '取消置顶' : '置顶对话',
        icon: <Pin size={14} />,
      });
    }
    return items;
  };

  const renderChatActionControl = (chat: AppShellChat, isMenuOpen: boolean) => {
    const isTaskChat = isTaskConversationChat(chat);

    if (!hasChatActions && !isTaskChat) return null;

    return (
      <div className={`relative shrink-0 flex h-5 w-5 items-center justify-center ${isTaskChat ? 'ml-6' : 'ml-2'}`}>
        {isTaskChat && !isMenuOpen && (
          <span className="pointer-events-none absolute right-0 shrink-0 whitespace-nowrap rounded-full bg-shellChatBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellChatBadgeText transition-opacity group-hover:opacity-0">
            任务
          </span>
        )}
        {hasChatActions && <BaseActionMenu
          open={isMenuOpen}
          onOpenChange={(open) => setChatMenuOpenId(open ? chat.id : null)}
          placement="bottom-end"
          width={Math.max(140, Math.min(176, sidebarWidth - 56))}
          trigger={<MoreHorizontal size={14} />}
          onTriggerClick={(event) => {
            event.stopPropagation();
          }}
          items={buildChatMenuItems(chat)}
          footerItems={chatMenuFooterItems}
          onItemClick={(item, event) => {
            event.stopPropagation();
            if (item.key === 'rename') {
              startChatRename(chat);
              return;
            }
            if (item.key === 'share') {
              if (onShareChat) onShareChat(chat.id);
              else onNavigate(`/chat/${chat.id}?share=1`);
              setChatMenuOpenId(null);
              return;
            }
            if (item.key === 'pin') {
              handleTogglePinChat(chat.id);
              return;
            }
            if (item.key === 'delete') {
              handleDeleteChat(chat.id);
              return;
            }
            setChatMenuOpenId(null);
          }}
          triggerClassName={`h-5 w-5 items-center justify-center ${isMenuOpen ? 'inline-flex' : 'hidden group-hover:inline-flex'}`}
          className="relative z-40"
          menuClassName="!min-w-0 !right-[-6px]"
        />}
      </div>
    );
  };

  const navItems = [
    {
      label: '项目',
      icon: <Folder size={14} />,
      path: '/projects',
      isActive: currentPath === '/projects' || currentPath.startsWith('/projects/'),
    },
    {
      label: '任务',
      icon: <Clock3 size={14} />,
      path: '/tools',
      isActive: currentPath === '/tools' || currentPath.startsWith('/tool/'),
    },
  ];

  const activeChat = useMemo(() => {
    const matched = currentPath.match(/^\/chat\/([^/]+)$/);
    if (!matched) return null;
    return chats.find((chat) => chat.id === matched[1]) ?? null;
  }, [chats, currentPath]);

  const pinnedChats = useMemo(
    () => chats.filter((chat) => chat.isPinned),
    [chats],
  );

  const recentUnpinnedChats = useMemo(
    () => chats.filter((chat) => !chat.isPinned),
    [chats],
  );

  const visiblePinnedChats = useMemo(
    () => (sortMode === 'time' ? pinnedChats.slice(0, MAX_RECENT_CHATS) : pinnedChats),
    [pinnedChats, sortMode],
  );

  const visibleTimeChats = useMemo(() => {
    if (sortMode !== 'time') return [];
    const availableSlots = Math.max(MAX_RECENT_CHATS - visiblePinnedChats.length, 0);
    return recentUnpinnedChats.slice(0, availableSlots);
  }, [sortMode, recentUnpinnedChats, visiblePinnedChats.length]);

  const totalVisibleRecentChats = useMemo(
    () => visiblePinnedChats.length + visibleTimeChats.length,
    [visiblePinnedChats.length, visibleTimeChats.length],
  );

  const shouldShowViewAllChatsEntry = sortMode === 'time' && chats.length > totalVisibleRecentChats;

  const projectNameById = useMemo(() => {
    return new Map(projects.map((project) => [project.id, project.name]));
  }, [projects]);

  const normalizedAllChatsKeyword = allChatsKeyword.trim().toLowerCase();

  const filteredAllChats = useMemo(() => {
    if (!normalizedAllChatsKeyword) return chats;

    return chats.filter((chat) => {
      const projectName = chat.projectId ? (projectNameById.get(chat.projectId) ?? '未分组') : '未分组';
      const searchableText = `${chat.title} ${projectName} ${chat.date}`.toLowerCase();
      return searchableText.includes(normalizedAllChatsKeyword);
    });
  }, [chats, normalizedAllChatsKeyword, projectNameById]);

  useEffect(() => {
    if (!activeChat) return;

    const targetKey = activeChat.projectId ?? 'unassigned';
    setExpandedProjects((prev) => {
      if (prev[targetKey] !== false) return prev;
      return { ...prev, [targetKey]: true };
    });
  }, [activeChat]);

  const handleOpenAllChatsModal = () => {
    setAllChatsKeyword('');
    setShowAllChatsModal(true);
  };

  const handleCloseAllChatsModal = () => {
    setShowAllChatsModal(false);
    setIsAllChatsModalScrolling(false);
    if (allChatsScrollTimerRef.current !== null) {
      window.clearTimeout(allChatsScrollTimerRef.current);
      allChatsScrollTimerRef.current = null;
    }
  };

  const handleOpenChatFromModal = (chatId: string) => {
    setShowAllChatsModal(false);
    onNavigate(`/chat/${chatId}`);
  };

  return (
    <div className="flex h-screen w-full bg-bgLight font-sans antialiased text-primaryText overflow-hidden relative">
      {/* 侧边栏 */}
      <aside 
        style={{ width: isSidebarOpen ? sidebarWidth : 0 }}
        className={`relative z-20 flex h-full min-w-0 flex-shrink-0 flex-col overflow-hidden bg-bgLight transition-[width,opacity] duration-300 ease-in-out ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          style={{ width: sidebarWidth, minWidth: sidebarWidth }}
          className="flex h-full flex-col"
        >
          {/* Logo 区域 */}
<div className="mt-2 md:mt-3 flex h-16 items-center justify-between pl-5 pr-[10px]">
<div className="-ml-[3px] flex items-center gap-2 cursor-pointer min-w-0 flex-1" onClick={() => onNavigate('/chat/new')}>
<img src={logoUrl} alt="Helia Logo" className="h-[20px] w-[20px] shrink-0 flex-shrink-0" style={{ display: 'flex', alignItems: 'center' }} />
<span className="text-[18px] font-bold text-primaryText tracking-tight truncate leading-none">Helia</span>
</div>
            <div className="flex items-center gap-0 shrink-0">
              <button
                onClick={() => setIsSidebarOpen(false)}
                aria-label="收起边栏"
                className="rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight"
              >
                <PanelLeftClose size={16} />
              </button>
            </div>
          </div>

          {/* 新建对话按钮 */}
          <div className="px-0 mb-0.5 mt-0.5">
            <button 
              onClick={() => onNavigate('/chat/new')}
              className={`nav-item ${
                currentPath === '/chat/new'
                  ? 'bg-shellNavActive text-primaryText'
                  : 'text-secondaryText hover:bg-shellNavActive hover:text-primaryText'
              }`}
            >
              <SquarePen size={14} />
              <span>发起新对话</span>
            </button>
          </div>

          {/* 主导航 */}
          <div className="px-0 flex flex-col gap-0.5 mb-4">
            {navItems.map(item => {
              const isActive = item.isActive;
              return (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className={`nav-item ${
                    isActive
                      ? 'bg-shellNavActive text-primaryText'
                      : 'text-secondaryText hover:bg-shellNavActive hover:text-primaryText'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* 对话历史 */}
          <div
            onScroll={handleSidebarScroll}
            className={`flex-1 overflow-y-auto px-0 relative auto-hide-scrollbar ${
              isSidebarScrolling ? 'is-scrolling is-scrolling-thin' : ''
            }`}
          >
            <div className="sticky top-0 z-20 bg-bgLight px-[10px] pb-4 pt-0.5">
              <div className="flex items-center pl-[8px] pr-4 text-sm font-normal text-secondaryText">
                <span className="opacity-60">近期对话</span>
              </div>
            </div>
            
            {visiblePinnedChats.length > 0 && (
              <div className="mb-1">
                <div className="flex flex-col gap-0.5 mt-0.5">
                  {visiblePinnedChats.map((chat) => {
                    const isActive = currentPath === `/chat/${chat.id}`;
                    const isMenuOpen = chatMenuOpenId === chat.id;

                    return (
                      <div key={chat.id} className="relative">
                        <div
                          onClick={() => handleChatRowClick(chat.id)}
                          className={`mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${
                            editingChatId === chat.id
                              ? 'border border-shellChatEditBorder bg-bgLight font-normal text-primaryText'
                              : isActive
                                ? 'bg-shellNavActive font-normal text-primaryText'
                                : 'font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText'
                          }`}
                        >
                          {renderChatTitle(chat, sortMode !== 'time')}
                          {editingChatId !== chat.id && renderChatActionControl(chat, isMenuOpen)}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mx-[10px] my-2 border-t border-shellDivider" />
              </div>
            )}

            {sortMode === 'project' && projects.map(proj => {
              const projChats = chats.filter((c) => c.projectId === proj.id && !c.isPinned);
              const isExpanded = expandedProjects[proj.id] !== false;
              
              return (
                <div key={proj.id} className="mb-0.5">
                  <div 
                    className="group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors"
                    onClick={() => toggleProject(proj.id)}
                  >
                    <div className="relative h-[14px] w-[14px] shrink-0">
                      <Folder size={14} className="text-secondaryText transition-opacity group-hover:opacity-0" />
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                        {isExpanded ? (
                          <ChevronDown size={14} className="text-secondaryText" />
                        ) : (
                          <ChevronRight size={14} className="text-secondaryText" />
                        )}
                      </span>
                    </div>
                    <span className="truncate">{proj.name}</span>
                  </div>
                  
                  {isExpanded && (
                    <div className="flex flex-col gap-0.5 mt-0.5">
                      {projChats.length === 0 ? (
                        <div className="mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint">暂无对话</div>
                      ) : projChats.map(chat => {
                        const isActive = currentPath === `/chat/${chat.id}`;
                        const isMenuOpen = chatMenuOpenId === chat.id;
                        return (
                          <div key={chat.id} className="relative">
                            <div 
                              onClick={() => handleChatRowClick(chat.id)}
                              className={`mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${
                                editingChatId === chat.id
                                  ? 'border border-shellChatEditBorder bg-bgLight font-normal text-primaryText'
                                  : isActive
                                    ? 'bg-shellNavActive font-normal text-primaryText'
                                    : 'font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText'
                              }`}
                            >
                              {renderChatTitle(chat)}
                              {editingChatId !== chat.id && renderChatActionControl(chat, isMenuOpen)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* 未分组对话 */}
            {sortMode === 'project' && (() => {
              const unassignedChats = chats.filter((c) => !c.projectId && !c.isPinned);
              if (unassignedChats.length === 0) return null;
              const isExpanded = expandedProjects['unassigned'] !== false;

              return (
                <div className="mb-0.5 mt-1">
                  <div 
                    className="group mx-[10px] flex items-center gap-2 pl-[8px] pr-4 py-2 text-sm font-normal text-secondaryText cursor-pointer hover:text-primaryText rounded-md hover:bg-bgLight transition-colors"
                    onClick={() => toggleProject('unassigned')}
                  >
                    <div className="relative h-[14px] w-[14px] shrink-0">
                      <Folder size={14} className="text-secondaryText transition-opacity group-hover:opacity-0" />
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                        {isExpanded ? (
                          <ChevronDown size={14} className="text-secondaryText" />
                        ) : (
                          <ChevronRight size={14} className="text-secondaryText" />
                        )}
                      </span>
                    </div>
                    <span className="truncate">未分组对话</span>
                  </div>
                  
                  {isExpanded && (
                    <div className="flex flex-col gap-0.5 mt-0.5">
                      {unassignedChats.length === 0 ? (
                        <div className="mx-[10px] py-1.5 pl-[30px] pr-4 text-sm text-shellTextFaint">暂无对话</div>
                      ) : unassignedChats.map(chat => {
                        const isActive = currentPath === `/chat/${chat.id}`;
                        const isMenuOpen = chatMenuOpenId === chat.id;
                        return (
                          <div key={chat.id} className="relative">
                            <div 
                              onClick={() => handleChatRowClick(chat.id)}
                              className={`mx-[10px] text-sm pl-[30px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${
                                editingChatId === chat.id
                                  ? 'border border-shellChatEditBorder bg-bgLight font-normal text-primaryText'
                                  : isActive
                                    ? 'bg-shellNavActive font-normal text-primaryText'
                                    : 'font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText'
                              }`}
                            >
                              {renderChatTitle(chat)}
                              {editingChatId !== chat.id && renderChatActionControl(chat, isMenuOpen)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* 按时间排序视图 */}
            {sortMode === 'time' && (
              <div className="flex flex-col gap-0.5">
                {visibleTimeChats.map(chat => {
                  const isActive = currentPath === `/chat/${chat.id}`;
                  const isMenuOpen = chatMenuOpenId === chat.id;
                  return (
                    <div key={chat.id} className="relative">
                      <div 
                        onClick={() => handleChatRowClick(chat.id)}
                        className={`mx-[10px] text-sm pl-[10px] pr-2 py-1.5 rounded-md cursor-pointer transition-colors flex items-center justify-between group ${
                          editingChatId === chat.id
                            ? 'border border-shellChatEditBorder bg-bgLight font-normal text-primaryText'
                            : isActive
                              ? 'bg-shellNavActive font-normal text-primaryText'
                              : 'font-normal text-secondaryText hover:bg-shellNavActive hover:text-primaryText'
                        }`}
                      >
                        {renderChatTitle(chat)}
                        {editingChatId !== chat.id && renderChatActionControl(chat, isMenuOpen)}
                      </div>
                    </div>
                  );
                })}

                {shouldShowViewAllChatsEntry && (
                  <button
                    type="button"
                    onClick={handleOpenAllChatsModal}
                    className="mx-[10px] mt-1 inline-flex items-center gap-1 rounded-md px-[10px] py-1.5 text-left text-sm text-secondaryText transition-colors hover:bg-shellNavActive hover:text-primaryText"
                  >
                    <span>查看全部对话</span>
                    <ChevronRight size={14} />
                  </button>
                )}
              </div>
            )}
          </div>

          {aiUsageWarningActive && !aiUsageWarningDismissed && (
            <div className="mx-3 mb-2 rounded-[12px] bg-white p-2 shadow-shellWarning">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning">
                  <AlertTriangle size={15} style={{ fill: 'var(--chatui-color-status-warning)', stroke: 'var(--chatui-color-static-white)' }} />
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-medium text-primaryText">用量即将耗尽</span>
                <button
                  type="button"
                  onClick={handleAiUsageWarningClick}
                  className="ml-auto shrink-0 whitespace-nowrap rounded-[8px] bg-warning px-3 py-1 text-xs font-medium text-white transition-colors hover:opacity-90"
                >
                  去查看
                </button>
              </div>
            </div>
          )}

          {/* 用户区域 */}
          <div className="p-3 mt-auto">
            <BaseActionMenu
              open={settingsMenuOpen}
              onOpenChange={setSettingsMenuOpen}
              placement="top-start"
              width={sidebarWidth - 24}
              portal
              trigger={
                <span className="flex w-full items-center justify-between p-2 rounded-full hover:bg-bgLight transition-colors cursor-pointer text-secondaryText">
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-shellAvatarSurface text-sm font-medium text-white">
                      {user.avatarUrl ? (
                        <img src={user.avatarUrl} alt={`${user.name}头像`} className="h-full w-full object-cover" />
                      ) : user.avatarText}
                    </span>
                    <span className="text-sm font-normal">{user.name}</span>
                  </span>
                  <span className="p-1 rounded-full">
                    <Settings size={18} />
                  </span>
                </span>
              }
              items={settingsMenuItems}
              onItemClick={handleSettingsMenuItemClick}
              triggerClassName="w-full justify-start"
              className="w-full"
              menuClassName="!min-w-0"
            />
          </div>
        </div>
        {isSidebarOpen && (
          <div
            role="separator"
            aria-orientation="vertical"
            aria-label="调整侧边栏宽度"
            onMouseDown={handleResizeStart}
            className="absolute top-0 right-0 h-full w-1.5 cursor-col-resize bg-transparent"
          />
        )}
      </aside>

      {/* 主内容区 */}
      <main className={`flex-1 h-full overflow-hidden relative p-2 md:p-3 transition-all duration-300 ${isSidebarOpen ? 'pl-0 md:pl-0' : 'pl-2 md:pl-3'}`}>
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-shellFrameBorder bg-white shadow-sm md:rounded-2xl">
          <div className="flex h-full w-full">
            {typeof children === 'function'
              ? children({ isSidebarOpen, setIsSidebarOpen, chats, setChats, setAiUsageWarningActive })
              : children}
          </div>
        </div>
      </main>

      <BaseModal
        visible={showAllChatsModal}
        title="全部历史对话"
        width={640}
        footer={null}
        onCancel={handleCloseAllChatsModal}
        className="!overflow-y-hidden"
        bodyClassName="!overflow-hidden !px-6 !py-5"
      >
        <div className="space-y-4">
          <div className="relative">
            <Search
              size={14}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText"
            />
            <input
              type="text"
              value={allChatsKeyword}
              onChange={(event) => setAllChatsKeyword(event.target.value)}
              placeholder="搜索对话或项目"
              className="h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none"
            />
          </div>

          {filteredAllChats.length > 0 ? (
            <div
              onScroll={handleAllChatsModalScroll}
              className={`max-h-[440px] overflow-y-auto auto-hide-scrollbar ${
                isAllChatsModalScrolling ? 'is-scrolling is-scrolling-thin' : ''
              }`}
            >
              {filteredAllChats.map((chat) => {
                const projectName = chat.projectId ? (projectNameById.get(chat.projectId) ?? '未分组') : '未分组';
                const isTaskChat = isTaskConversationChat(chat);

                return (
                  <button
                    key={chat.id}
                    type="button"
                    onClick={() => handleOpenChatFromModal(chat.id)}
                    className="w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-shellHistoryHover"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="truncate text-sm font-medium text-primaryText">{chat.title}</span>
                      {isTaskChat && (
                        <span className="shrink-0 rounded-full bg-shellTaskBadgeSurface px-1.5 py-0.5 text-[11px] leading-[14px] text-shellTaskBadgeText">
                          任务
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-xs text-tertiaryText">
                      <span className="truncate">{projectName}</span>
                      <span>·</span>
                      <span>{chat.date}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-borderSoft">
              <BaseEmpty description="暂无匹配的历史对话" />
            </div>
          )}
        </div>
      </BaseModal>
    </div>
  );
}
