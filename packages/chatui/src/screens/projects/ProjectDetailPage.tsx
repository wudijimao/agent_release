import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, Menu, MoreHorizontal, Pencil, Plus, Search, Trash2, Upload, Users } from 'lucide-react';
import { BaseActionMenu, BaseButton, BaseDeleteConfirmModal, BaseDocumentUpload, BaseEmpty, BaseModal } from '../../components/common';

type ProjectDetailTab = 'documents' | 'chats';

export interface ProjectDetailViewModel extends Record<string, unknown> {
  id: string;
  name: string;
  description: string;
}

export interface ProjectDocumentViewModel extends Record<string, unknown> {
  id: string;
  kbNodeId: string;
  title: string;
  summary: string;
  tags: string[];
}

export interface ProjectConversationViewModel extends Record<string, unknown> {
  id: string;
  title: string;
  date: string;
}

export interface ProjectDetailPageProps {
  project?: ProjectDetailViewModel;
  documents: ProjectDocumentViewModel[];
  conversations: ProjectConversationViewModel[];
  memberCount: number;
  showMemberManagement?: boolean;
  isSidebarOpen: boolean;
  onOpenSidebar(): void;
  onBackToProjects(): void;
  onOpenMemberManagement(): void;
  onOpenDocument(documentId: string): void;
  onOpenConversation(conversationId: string): void;
  onRenameConversation?(conversationId: string, title: string): void | Promise<void>;
  onDeleteConversation?(conversationId: string): void | Promise<void>;
  onCreateDocument?(): void;
  onCreateConversation?(): void;
  onImportDocuments(files: File[]): void | readonly string[] | Promise<void | readonly string[]>;
  documentImportAccept?: string;
  documentImportMaxSize?: number;
  documentImportDescription?: React.ReactNode;
  onUpdateProjectName(name: string): void | Promise<void>;
  onUpdateProjectDescription(description: string): void | Promise<void>;
  onDeleteProject?(): void | Promise<void>;
}

const TAG_COLLAPSED_MAX_HEIGHT = 84;
const WEEKDAY_TO_INDEX: Record<string, number> = { 日: 0, 天: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 };
const pad2 = (value: number) => String(value).padStart(2, '0');
const formatDate = (date: Date) => `${date.getFullYear()}年${pad2(date.getMonth() + 1)}月${pad2(date.getDate())}日 ${pad2(date.getHours())}:${pad2(date.getMinutes())}`;

export function formatProjectConversationDate(rawDate: string, conversationId: string, now = new Date()) {
  const normalized = rawDate.trim();
  const setTime = (date: Date, value: string) => {
    const matched = value.match(/^(\d{1,2}):(\d{2})$/);
    if (!matched) return null;
    date.setHours(Number(matched[1]), Number(matched[2]), 0, 0);
    return date;
  };
  if (normalized === '刚刚') return formatDate(now);
  const today = normalized.match(/^今天\s+(\d{1,2}:\d{2})$/);
  if (today) return formatDate(setTime(new Date(now), today[1]) ?? now);
  const yesterday = normalized.match(/^昨天\s+(\d{1,2}:\d{2})$/);
  if (yesterday) {
    const date = new Date(now); date.setDate(date.getDate() - 1);
    return formatDate(setTime(date, yesterday[1]) ?? now);
  }
  const weekday = normalized.match(/^(上周)?周([一二三四五六日天])\s+(\d{1,2}:\d{2})$/);
  if (weekday) {
    const date = new Date(now);
    let diff = date.getDay() - WEEKDAY_TO_INDEX[weekday[2]];
    if (diff < 0) diff += 7;
    date.setDate(date.getDate() - diff - (weekday[1] ? 7 : 0));
    return formatDate(setTime(date, weekday[3]) ?? now);
  }
  const fullDate = normalized.match(/^(\d{4})[.\-/年](\d{1,2})[.\-/月](\d{1,2})日?\s+(\d{1,2}):(\d{2})$/);
  if (fullDate) return formatDate(new Date(Number(fullDate[1]), Number(fullDate[2]) - 1, Number(fullDate[3]), Number(fullDate[4]), Number(fullDate[5])));
  const monthDay = normalized.match(/^(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})$/);
  if (monthDay) return formatDate(new Date(now.getFullYear(), Number(monthDay[1]) - 1, Number(monthDay[2]), Number(monthDay[3]), Number(monthDay[4])));
  const timestamp = conversationId.match(/^c-(\d{13})$/);
  if (timestamp) {
    const date = new Date(Number(timestamp[1]));
    if (!Number.isNaN(date.getTime())) return formatDate(date);
  }
  const parsed = new Date(normalized);
  return formatDate(Number.isNaN(parsed.getTime()) ? now : parsed);
}

export function ProjectDetailPage({
  project, documents, conversations, memberCount, isSidebarOpen, onOpenSidebar, onBackToProjects,
  onOpenMemberManagement, onOpenDocument, onOpenConversation, onCreateDocument, onCreateConversation,
  onRenameConversation, onDeleteConversation,
  onImportDocuments, onUpdateProjectName, onUpdateProjectDescription,
  documentImportAccept, documentImportMaxSize, documentImportDescription,
  showMemberManagement = true,
  onDeleteProject,
}: ProjectDetailPageProps) {
  const [activeTab, setActiveTab] = useState<ProjectDetailTab>('documents');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [isTagExpanded, setIsTagExpanded] = useState(false);
  const [showTagToggle, setShowTagToggle] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [importError, setImportError] = useState('');
  const [importing, setImporting] = useState(false);
  const [newlyImportedDocumentIds, setNewlyImportedDocumentIds] = useState<string[]>([]);
  const [nameDraft, setNameDraft] = useState(project?.name ?? '');
  const [descriptionDraft, setDescriptionDraft] = useState(project?.description ?? '');
  const [editingName, setEditingName] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);
  const [editError, setEditError] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingProject, setDeletingProject] = useState(false);
  const [deleteError, setDeleteError] = useState('');
  const [conversationMenuOpenId, setConversationMenuOpenId] = useState<string | null>(null);
  const [editingConversationId, setEditingConversationId] = useState<string | null>(null);
  const [conversationTitleDraft, setConversationTitleDraft] = useState('');
  const [conversationActionError, setConversationActionError] = useState('');
  const [conversationPendingDeletion, setConversationPendingDeletion] = useState<ProjectConversationViewModel | null>(null);
  const [deletingConversation, setDeletingConversation] = useState(false);
  const [conversationDeleteError, setConversationDeleteError] = useState('');
  const tagFilterRef = useRef<HTMLDivElement | null>(null);
  const conversationTitleInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setNameDraft(project?.name ?? '');
    setDescriptionDraft(project?.description ?? '');
    setEditingName(false);
    setEditingDescription(false);
    setEditError('');
  }, [project]);

  useEffect(() => {
    if (!editingConversationId) return;
    const frameId = window.requestAnimationFrame(() => conversationTitleInputRef.current?.focus());
    return () => window.cancelAnimationFrame(frameId);
  }, [editingConversationId]);

  const tagOptions = useMemo(() => ['all', ...Array.from(new Set(documents.flatMap((item) => item.tags)))], [documents]);
  const filteredDocuments = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();
    return documents.filter((item) => (selectedTag === 'all' || item.tags.includes(selectedTag))
      && (!keyword || [item.title, item.summary, ...item.tags].join(' ').toLowerCase().includes(keyword)));
  }, [documents, searchKeyword, selectedTag]);
  const filteredConversations = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();
    if (!keyword) return conversations;
    return conversations.filter((item) => [item.title, item.date, formatProjectConversationDate(item.date, item.id)].join(' ').toLowerCase().includes(keyword));
  }, [conversations, searchKeyword]);

  useEffect(() => {
    if (activeTab !== 'documents') return;
    const checkOverflow = () => {
      const container = tagFilterRef.current;
      if (!container) return setShowTagToggle(false);
      const hasOverflow = container.scrollHeight > TAG_COLLAPSED_MAX_HEIGHT + 1;
      setShowTagToggle(hasOverflow);
      if (!hasOverflow) setIsTagExpanded(false);
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [activeTab, tagOptions]);

  const saveName = async () => {
    const value = nameDraft.trim() || project?.name || '';
    setNameDraft(value); setEditingName(false);
    if (value && value !== project?.name) {
      setEditError('');
      try { await onUpdateProjectName(value); }
      catch (error) {
        setNameDraft(project?.name ?? '');
        setEditError(error instanceof Error ? error.message : '项目名称更新失败');
      }
    }
  };
  const saveDescription = async () => {
    const value = descriptionDraft.trim() || project?.description || '';
    setDescriptionDraft(value); setEditingDescription(false);
    if (value && value !== project?.description) {
      setEditError('');
      try { await onUpdateProjectDescription(value); }
      catch (error) {
        setDescriptionDraft(project?.description ?? '');
        setEditError(error instanceof Error ? error.message : '项目描述更新失败');
      }
    }
  };
  const submitImport = async () => {
    if (!selectedFiles.length) return setImportError('请先选择至少一个文件');
    setImporting(true); setImportError('');
    try {
      const importedDocumentIds = await onImportDocuments(selectedFiles);
      setShowImportModal(false); setSelectedFiles([]);
      if (importedDocumentIds?.length) {
        setNewlyImportedDocumentIds((current) => [
          ...new Set([...current, ...importedDocumentIds]),
        ]);
      }
    } catch (error) {
      setImportError(error instanceof Error ? error.message : '文档导入失败');
    } finally { setImporting(false); }
  };
  const confirmDeleteProject = async () => {
    if (!onDeleteProject || deletingProject) return;
    setDeletingProject(true);
    setDeleteError('');
    try {
      await onDeleteProject();
    } catch (error) {
      setDeleteError(error instanceof Error ? error.message : '项目删除失败');
      setDeletingProject(false);
    }
  };

  const startConversationRename = (conversation: ProjectConversationViewModel) => {
    setConversationActionError('');
    setEditingConversationId(conversation.id);
    setConversationTitleDraft(conversation.title);
    setConversationMenuOpenId(null);
  };

  const cancelConversationRename = () => {
    setEditingConversationId(null);
    setConversationTitleDraft('');
  };

  const commitConversationRename = async (conversation: ProjectConversationViewModel) => {
    const title = conversationTitleDraft.trim();
    cancelConversationRename();
    if (!title || title === conversation.title || !onRenameConversation) return;
    setConversationActionError('');
    try {
      await onRenameConversation(conversation.id, title);
    } catch (error) {
      setConversationActionError(error instanceof Error ? error.message : '对话重命名失败');
    }
  };

  const confirmDeleteConversation = async () => {
    if (!onDeleteConversation || !conversationPendingDeletion || deletingConversation) return;
    setDeletingConversation(true);
    setConversationDeleteError('');
    try {
      await onDeleteConversation(conversationPendingDeletion.id);
      setConversationPendingDeletion(null);
    } catch (error) {
      setConversationDeleteError(error instanceof Error ? error.message : '对话删除失败');
    } finally {
      setDeletingConversation(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <header className="z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm">
        <div className="flex min-w-0 items-center gap-3">
          {!isSidebarOpen && <button type="button" onClick={onOpenSidebar} className="-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight" title="展开边栏"><Menu size={20} /></button>}
          <button type="button" onClick={onBackToProjects} className="inline-flex items-center gap-1 text-sm text-tertiaryText transition-colors hover:text-primaryText">
            <ArrowLeft size={16} />
            返回
          </button>
        </div>
        {project && (showMemberManagement || onDeleteProject) && <div className="flex items-center gap-4">
          {showMemberManagement && <button type="button" onClick={onOpenMemberManagement} className="inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-secondaryText transition-colors hover:text-primaryText"><Users size={15} /><span>管理成员</span></button>}
          {onDeleteProject && <button type="button" onClick={() => { setDeleteError(''); setShowDeleteModal(true); }} className="inline-flex items-center gap-1.5 rounded-lg bg-transparent px-1 py-1 text-sm font-medium leading-5 text-danger transition-colors hover:text-danger-hover"><Trash2 size={15} /><span>删除项目</span></button>}
        </div>}
      </header>

      <div className="flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10">
        <div className="mx-auto max-w-[1240px]">
          {!project ? <div className="rounded-lg border border-dashed border-borderSoft"><BaseEmpty description="项目不存在或已被删除" /></div> : <section>
            {editingName ? <input type="text" value={nameDraft} onChange={(event) => setNameDraft(event.target.value)} onBlur={() => void saveName()}
              onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); void saveName(); } if (event.key === 'Escape') { setNameDraft(project.name); setEditingName(false); } }} autoFocus
              className="w-full max-w-[560px] rounded-md border border-primary bg-white px-2 py-1 text-2xl font-semibold text-primaryText outline-none" />
              : <div className="group relative block w-fit max-w-full"><h2 className="cursor-text text-2xl font-semibold text-primaryText" onClick={() => setEditingName(true)}>{nameDraft || project.name}</h2><div className="pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">点击编辑项目名称</div></div>}
            {editingDescription ? <input type="text" value={descriptionDraft} onChange={(event) => setDescriptionDraft(event.target.value)} onBlur={() => void saveDescription()}
              onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); void saveDescription(); } if (event.key === 'Escape') { setDescriptionDraft(project.description); setEditingDescription(false); } }} autoFocus
              className="mt-1 w-full max-w-[760px] rounded-md border border-lineSubtle bg-white px-2 py-1 text-sm text-tertiaryText outline-none focus:border-primary" />
              : <div className="group relative mt-1 block max-w-[760px]"><p className="cursor-text text-sm text-tertiaryText" onClick={() => setEditingDescription(true)}>{descriptionDraft || project.description}</p><div className="pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-strongText px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">点击编辑项目描述</div></div>}
            {editError && <div role="alert" className="mt-2 text-sm text-danger">{editError}</div>}
            <div className="mt-4 flex flex-wrap items-center gap-2"><span className="inline-flex items-center gap-1.5 rounded-full bg-lineSoft px-2.5 py-0.5 text-[13px] font-medium text-secondaryText"><Users size={13} /><span>成员 {memberCount} 人</span></span></div>

            <div className="mt-10 border-b border-lineSubtle"><div className="flex items-end gap-8">
              <button type="button" onClick={() => setActiveTab('documents')} className={`border-b-2 pb-2 text-sm font-medium transition-colors ${activeTab === 'documents' ? 'border-primary text-primaryText' : 'border-transparent text-tertiaryText'}`}>文档 {documents.length}</button>
              <button type="button" onClick={() => setActiveTab('chats')} className={`border-b-2 pb-2 text-sm font-medium transition-colors ${activeTab === 'chats' ? 'border-primary text-primaryText' : 'border-transparent text-tertiaryText'}`}>对话 {conversations.length}</button>
            </div></div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="relative w-full max-w-[320px]"><Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-tertiaryText" /><input type="text" value={searchKeyword} onChange={(event) => setSearchKeyword(event.target.value)} placeholder={`搜索${activeTab === 'documents' ? '文档' : '历史对话'}`} className="h-9 w-full rounded-lg border border-lineSubtle bg-white pl-9 pr-3 text-sm text-primaryText transition-colors placeholder:text-tertiaryText hover:border-controlBorder focus:border-primary focus:outline-none" /></div>
              <div className="flex items-center gap-5"><BaseButton type="ghost" size="small" rounded="large" icon={activeTab === 'documents' ? <Plus size={16} /> : undefined} className="!h-auto !gap-1 !border-transparent !bg-transparent !px-0 !py-0 !text-sm !font-semibold !text-primary hover:!bg-transparent hover:!text-primary-hover" onClick={activeTab === 'documents' ? onCreateDocument : onCreateConversation}>{activeTab === 'documents' ? '新建' : '发起对话'}</BaseButton>
              {activeTab === 'documents' && <><span className="h-4 border-l border-lineSubtle" aria-hidden="true" /><button type="button" onClick={() => { setSelectedFiles([]); setImportError(''); setShowImportModal(true); }} className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover hover:underline"><Upload size={14} />导入</button></>}</div>
            </div>

            {activeTab === 'documents' && documents.length > 0 && <div className="mt-3"><div className="flex items-start justify-between gap-3"><div ref={tagFilterRef} className="flex flex-1 flex-wrap gap-2 overflow-hidden transition-[max-height] duration-200" style={{ maxHeight: isTagExpanded || !showTagToggle ? undefined : `${TAG_COLLAPSED_MAX_HEIGHT}px` }}>{tagOptions.map((tag) => <button key={tag} type="button" onClick={() => setSelectedTag(tag)} className={`h-7 rounded-full border px-3 text-xs transition-colors ${selectedTag === tag ? 'border-primary bg-primary-soft text-primary' : 'border-lineSubtle bg-white text-secondaryText hover:border-controlBorder'}`}>{tag === 'all' ? '全部' : tag}</button>)}</div>{showTagToggle && <button type="button" onClick={() => setIsTagExpanded((value) => !value)} className="shrink-0 text-xs text-tertiaryText transition-colors hover:text-primaryText">{isTagExpanded ? '收起' : '展开'}</button>}</div></div>}

            {activeTab === 'documents' ? filteredDocuments.length ? <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">{filteredDocuments.map((item) => <button key={item.id} type="button" onClick={() => onOpenDocument(item.kbNodeId)} className="rounded-lg border border-lineSubtle bg-surface px-4 py-3.5 text-left transition-all hover:border-controlBorder hover:shadow-sm"><div className="flex min-w-0 items-center gap-2"><h3 className="truncate text-base font-medium text-primaryText">{item.title}</h3>{newlyImportedDocumentIds.includes(item.kbNodeId) && <span className="shrink-0 rounded-full bg-primary px-1.5 py-[2px] text-xs font-medium leading-none text-white">NEW</span>}</div><p className="mt-1.5 line-clamp-2 text-sm leading-5 text-secondaryText">{item.summary}</p>{item.tags.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={`${item.id}-${tag}`} className="inline-flex items-center rounded-lg bg-projectTagSurface px-3 py-1 text-xs text-secondaryText">{tag}</span>)}</div>}</button>)}</div>
              : <div className="mt-4 rounded-lg border border-dashed border-borderSoft"><BaseEmpty description="暂无匹配的文档" /></div>
              : filteredConversations.length ? <div className="mt-4 space-y-2">
                {conversationActionError && <div role="alert" className="text-sm text-danger">{conversationActionError}</div>}
                {filteredConversations.map((item) => {
                  const isEditing = editingConversationId === item.id;
                  const isMenuOpen = conversationMenuOpenId === item.id;
                  const hasActions = Boolean(onRenameConversation || onDeleteConversation);
                  return <div key={item.id} className="group -ml-2 flex w-[calc(100%+0.5rem)] items-center gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-projectConversationHover">
                    {isEditing ? <div className="min-w-0 flex-1">
                      <input
                        ref={conversationTitleInputRef}
                        value={conversationTitleDraft}
                        onChange={(event) => setConversationTitleDraft(event.target.value)}
                        onBlur={() => void commitConversationRename(item)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter') { event.preventDefault(); void commitConversationRename(item); }
                          if (event.key === 'Escape') { event.preventDefault(); cancelConversationRename(); }
                        }}
                        className="w-full rounded-md border border-shellChatEditBorder bg-white px-2 py-1 text-sm font-medium text-primaryText outline-none"
                        maxLength={80}
                        aria-label="重命名对话"
                      />
                      <div className="mt-1 text-xs text-tertiaryText">{formatProjectConversationDate(item.date, item.id)}</div>
                    </div> : <button type="button" onClick={() => onOpenConversation(item.id)} className="min-w-0 flex-1 text-left">
                      <div className="truncate text-sm font-medium text-primaryText">{item.title}</div>
                      <div className="mt-1 text-xs text-tertiaryText">{formatProjectConversationDate(item.date, item.id)}</div>
                    </button>}
                    {!isEditing && hasActions && <BaseActionMenu
                      open={isMenuOpen}
                      onOpenChange={(open) => setConversationMenuOpenId(open ? item.id : null)}
                      placement="bottom-end"
                      portal
                      width={160}
                      trigger={<MoreHorizontal size={16} />}
                      items={onRenameConversation ? [{ key: 'rename', label: '重命名', icon: <Pencil size={14} /> }] : []}
                      footerItems={onDeleteConversation ? [{ key: 'delete', label: '删除', icon: <Trash2 size={14} />, danger: true }] : []}
                      onItemClick={(action, event) => {
                        event.stopPropagation();
                        if (action.key === 'rename') startConversationRename(item);
                        if (action.key === 'delete') {
                          setConversationMenuOpenId(null);
                          setConversationDeleteError('');
                          setConversationPendingDeletion(item);
                        }
                      }}
                      triggerClassName={`h-6 w-6 rounded-md text-secondaryText hover:bg-bgLight hover:text-primaryText ${isMenuOpen ? 'inline-flex' : 'hidden group-hover:inline-flex'}`}
                      className="relative z-40 shrink-0"
                      menuClassName="!min-w-0"
                    />}
                  </div>;
                })}
              </div>
              : <div className="mt-4 rounded-lg border border-dashed border-borderSoft"><BaseEmpty description="暂无匹配的历史对话" /></div>}
          </section>}
        </div>
      </div>

      <BaseModal visible={showImportModal} title="导入文档" width={500} cancelText="取消" okText={importing ? '导入中…' : '导入'}
        onCancel={() => { if (!importing) { setShowImportModal(false); setSelectedFiles([]); setImportError(''); } }} onConfirm={() => void submitImport()} okButtonProps={{ disabled: importing }} bodyClassName="!px-6 !py-5">
        <div className="space-y-4"><BaseDocumentUpload value={selectedFiles} accept={documentImportAccept} maxCount={5} maxSize={documentImportMaxSize ?? 20 * 1024 * 1024} uploadDescription={documentImportDescription} disabled={importing} onChange={setSelectedFiles} onError={(error) => setImportError(error.message)} />{importError && <div role="alert" className="text-sm text-danger">{importError}</div>}</div>
      </BaseModal>

      <BaseModal
        visible={showDeleteModal}
        title="删除项目"
        width={420}
        maskClosable={false}
        onCancel={() => {
          if (!deletingProject) {
            setShowDeleteModal(false);
            setDeleteError('');
          }
        }}
        footer={(
          <div className="flex justify-end gap-2 border-t border-lineSoft px-5 py-3">
            <BaseButton type="secondary" size="medium" disabled={deletingProject} onClick={() => { setShowDeleteModal(false); setDeleteError(''); }}>取消</BaseButton>
            <BaseButton type="danger" size="medium" isLoading={deletingProject} onClick={() => void confirmDeleteProject()}>删除</BaseButton>
          </div>
        )}
      >
        <div className="space-y-3 text-sm leading-6 text-secondaryText">
          <p>删除后，项目“{project?.name}”将不再显示。确认删除当前项目吗？</p>
          {deleteError && <p role="alert" className="text-danger">{deleteError}</p>}
        </div>
      </BaseModal>

      <BaseDeleteConfirmModal
        visible={Boolean(conversationPendingDeletion)}
        title="删除对话"
        description={<>删除后，对话“{conversationPendingDeletion?.title}”将无法恢复。确认删除当前对话吗？</>}
        loading={deletingConversation}
        error={conversationDeleteError}
        onCancel={() => { setConversationPendingDeletion(null); setConversationDeleteError(''); }}
        onConfirm={confirmDeleteConversation}
      />
    </div>
  );
}
