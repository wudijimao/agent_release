import React, { useEffect, useMemo, useState } from 'react';
import { AlertCircle, HelpCircle, Menu, MoreHorizontal, Pencil, Plus, ShieldCheck, Trash2 } from 'lucide-react';
import { BaseActionMenu, BaseButton, BaseModal, BasePagination, BaseTable } from '../../components/common';
import type { BaseActionMenuItem, BaseTableColumn } from '../../components/common';

export type MemberManagementRole = '管理员' | '成员';

export interface MemberManagementMember extends Record<string, unknown> {
  id: string;
  userId: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: MemberManagementRole;
  joinedAt: string;
  projectsLabel?: string;
  canManage: boolean;
}

export interface MemberManagementPageProps {
  labName: string;
  members: MemberManagementMember[];
  inviteCode: string;
  isSidebarOpen: boolean;
  loading?: boolean;
  error?: string;
  actionError?: string;
  canManage?: boolean;
  onOpenSidebar(): void;
  onRetry?(): void;
  onRegenerateInvite(): Promise<void> | void;
  onUpdateRole(memberId: string, role: MemberManagementRole): Promise<void> | void;
  onRemoveMember(memberId: string): Promise<void> | void;
}

export default function MemberManagementPage({
  labName,
  members,
  inviteCode,
  isSidebarOpen,
  loading = false,
  error,
  actionError,
  canManage = false,
  onOpenSidebar,
  onRetry,
  onRegenerateInvite,
  onUpdateRole,
  onRemoveMember,
}: MemberManagementPageProps) {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteCodeCopied, setInviteCodeCopied] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedMember, setSelectedMember] = useState<MemberManagementMember | null>(null);
  const [formRole, setFormRole] = useState<MemberManagementRole>('成员');
  const [pendingAction, setPendingAction] = useState<'invite' | 'edit' | 'remove' | null>(null);
  const [memberActionMenuId, setMemberActionMenuId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const adminCount = members.filter((member) => member.role === '管理员').length;
  const pagedMembers = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return members.slice(start, start + pageSize);
  }, [currentPage, members, pageSize]);
  const memberActionMenuItems = useMemo<BaseActionMenuItem[]>(
    () => [
      { key: 'edit', label: '编辑', icon: <Pencil size={14} /> },
      { key: 'remove', label: '移除', icon: <Trash2 size={14} />, danger: true },
    ],
    [],
  );

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(members.length / pageSize));
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, members.length, pageSize]);

  const openEdit = (member: MemberManagementMember) => {
    setSelectedMember(member);
    setFormRole(member.role);
    setShowEditModal(true);
  };

  const openRemove = (member: MemberManagementMember) => {
    setSelectedMember(member);
    setShowDeleteConfirm(true);
  };

  const copyInviteCode = async () => {
    if (!inviteCode) return;
    try {
      await navigator.clipboard.writeText(inviteCode);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = inviteCode;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setInviteCodeCopied(true);
    window.setTimeout(() => setInviteCodeCopied(false), 1500);
  };

  const regenerateInvite = async () => {
    setPendingAction('invite');
    try {
      await onRegenerateInvite();
      setInviteCodeCopied(false);
    } finally {
      setPendingAction(null);
    }
  };

  const submitEdit = async () => {
    if (!selectedMember) return;
    setPendingAction('edit');
    try {
      await onUpdateRole(selectedMember.id, formRole);
      setShowEditModal(false);
    } finally {
      setPendingAction(null);
    }
  };

  const confirmRemove = async () => {
    if (!selectedMember) return;
    setPendingAction('remove');
    try {
      await onRemoveMember(selectedMember.id);
      setShowDeleteConfirm(false);
    } finally {
      setPendingAction(null);
    }
  };

  const memberTableColumns = useMemo<BaseTableColumn<MemberManagementMember>[]>(
    () => [
      {
        title: '姓名',
        dataIndex: 'name',
        width: '25%',
        render: (_, member) => (
          <div className="flex min-w-0 items-center pr-2">
            <div className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-lineSubtle bg-bgLight text-[11px] font-medium text-secondaryText">
              {member.avatarUrl ? (
                <img className="h-full w-full object-cover" src={member.avatarUrl} alt="" />
              ) : member.name.slice(0, 2)}
            </div>
            <div className="min-w-0">
              <p className="truncate font-medium text-primaryText">{member.name}</p>
              <p className="mt-0.5 truncate text-[13px] text-secondaryText">{member.email}</p>
            </div>
          </div>
        ),
      },
      {
        title: (
          <span className="flex items-center gap-1">
            团队角色
            <span className="text-mutedText" title="管理员可管理成员和实验室设置；成员可使用工作区。">
              <HelpCircle size={14} />
            </span>
          </span>
        ),
        dataIndex: 'role',
        width: '16%',
      },
      {
        title: '加入时间',
        dataIndex: 'joinedAt',
        width: '18%',
        render: (joinedAt) => <span className="text-secondaryText">{String(joinedAt)}</span>,
      },
      {
        title: '归属项目',
        dataIndex: 'projectsLabel',
        width: '31%',
        render: (projectsLabel) => (
          <span className="block truncate text-secondaryText" title={String(projectsLabel || '暂未提供')}>
            {String(projectsLabel || '暂未提供')}
          </span>
        ),
      },
      {
        title: '操作',
        dataIndex: 'id',
        width: '10%',
        render: (_, member) => member.canManage ? (
          <BaseActionMenu
            open={memberActionMenuId === member.id}
            onOpenChange={(open) => setMemberActionMenuId(open ? member.id : null)}
            placement="bottom-end"
            width={132}
            trigger={<span className="inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText"><MoreHorizontal size={16} /></span>}
            items={memberActionMenuItems}
            onItemClick={(item, event) => {
              event.stopPropagation();
              setMemberActionMenuId(null);
              if (item.key === 'edit') openEdit(member);
              else openRemove(member);
            }}
          />
        ) : <span className="text-mutedText">—</span>,
      },
    ],
    [memberActionMenuId, memberActionMenuItems],
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
            <span className="text-tertiaryText">系统设置</span>
            <span className="text-tertiaryText">/</span>
            <span className="font-medium text-primaryText">成员管理</span>
          </div>
        </div>
        {canManage && (
          <BaseButton type="primary" size="small" rounded="large" icon={<Plus size={14} />} className="shrink-0" onClick={() => setShowInviteModal(true)}>
            邀请新成员
          </BaseButton>
        )}
      </header>

      <div className="flex-1 overflow-y-auto px-4 pb-12 pt-4 md:px-8 md:pb-12 md:pt-6 lg:px-10">
        <div className="mx-auto max-w-[1240px] space-y-6">
          <div className="flex items-center gap-2.5">
            <h2 className="text-xl font-semibold text-primaryText md:text-2xl">{labName || '实验室成员'}</h2>
            <span className="shrink-0 rounded-full bg-surfaceMuted px-2.5 py-0.5 text-[13px] font-medium text-secondaryText">共{members.length}人</span>
          </div>

          {error && (
            <div className="flex items-center justify-between gap-3 rounded-xl border border-danger bg-danger-soft px-4 py-3 text-sm text-danger">
              <span>{error}</span>
              {onRetry && <button type="button" className="font-medium underline" onClick={onRetry}>重新加载</button>}
            </div>
          )}
          {!error && adminCount < 2 && !loading && (
            <div className="!mt-3 flex items-center gap-2.5 rounded-xl border border-warning bg-warning-soft px-4 py-3.5 text-sm text-warning shadow-sm">
              <AlertCircle size={16} className="shrink-0" />
              <span>当前管理员{adminCount}名，建议至少保留2名管理员，避免团队配置和成员管理只有单点负责人</span>
            </div>
          )}

          <section className="space-y-3">
            <BaseTable
              className="task-table-scroll w-full [&_table]:min-w-[860px] [&_thead_th]:py-2 [&_thead_th]:text-[13px] [&_tbody_td]:py-2.5 [&_tbody_td]:text-[13px]"
              columns={memberTableColumns}
              dataSource={pagedMembers}
              rowKey="id"
              striped={false}
              loading={loading}
            />
            <BasePagination
              current={currentPage}
              total={members.length}
              pageSize={pageSize}
              onChange={setCurrentPage}
              showSizeChanger
              pageSizeOptions={[5, 10, 20]}
              onShowSizeChange={(_, nextPageSize) => { setPageSize(nextPageSize); setCurrentPage(1); }}
            />
          </section>

          <div className="flex select-none items-center justify-center gap-2 py-8 text-xs text-tertiaryText">
            <ShieldCheck size={14} className="shrink-0" />
            <span>所有成员均已纳入实验室合规性审计流水线</span>
          </div>
        </div>
      </div>

      <BaseModal visible={showInviteModal} title="邀请新成员" width={360} onCancel={() => setShowInviteModal(false)} footer={null} bodyClassName="!px-6 !py-5">
        <h4 className="text-[17px] font-semibold text-primaryText">邀请码</h4>
        <div className="mt-4 grid grid-cols-6 gap-2">
          {(inviteCode || '------').split('').map((digit, index) => (
            <div key={`${digit}-${index}`} className="flex h-[44px] items-center justify-center rounded-lg bg-surfaceMuted text-[24px] font-medium text-primaryText">{digit}</div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-6 text-tertiaryText">请将6位数字邀请码分享给新成员，新成员加入后默认为成员，管理员可在成员列表中调整权限</p>
        {actionError && <p className="mt-3 text-sm text-danger">{actionError}</p>}
        <BaseButton type="primary" size="large" rounded="large" fullWidth className="mt-5" onClick={copyInviteCode} disabled={!inviteCode}>
          {inviteCodeCopied ? '已复制邀请码' : '复制邀请码'}
        </BaseButton>
        <button type="button" onClick={regenerateInvite} disabled={pendingAction === 'invite'} className="mt-3 block w-full bg-transparent text-center text-sm font-semibold text-primary transition-opacity hover:opacity-80 disabled:opacity-50">
          {pendingAction === 'invite' ? '正在生成...' : '重新生成邀请码'}
        </button>
      </BaseModal>

      <BaseModal visible={showEditModal && !!selectedMember} title="编辑成员信息" width={560} maskClosable={false} cancelText="取消" okText="保存修改" confirmLoading={pendingAction === 'edit'} onCancel={() => setShowEditModal(false)} onConfirm={submitEdit} bodyClassName="!px-6 !py-5">
        <div className="space-y-4">
          <div>
            <div className="mb-2 text-sm font-medium text-primaryText">团队角色</div>
            <div className="flex flex-wrap items-center gap-8">
              {(['成员', '管理员'] as const).map((role) => (
                <label key={role} className="flex cursor-pointer items-center gap-2 text-sm text-primaryText">
                  <input type="radio" name="member-role" value={role} checked={formRole === role} onChange={() => setFormRole(role)} className="h-4 w-4 accent-primary" />
                  {role}
                </label>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-1.5 text-sm font-medium text-primaryText">归属项目</div>
            <div className="rounded-md border border-borderSoft bg-surfaceMuted px-3 py-2 text-sm text-mutedText">项目归属接口暂未开放</div>
          </div>
          {actionError && <p className="text-sm text-danger">{actionError}</p>}
        </div>
      </BaseModal>

      <BaseModal visible={showDeleteConfirm && !!selectedMember} title="确定要移除该成员吗？" width={420} maskClosable={false} cancelText="取消" okText="确认移除" confirmLoading={pendingAction === 'remove'} onCancel={() => setShowDeleteConfirm(false)} onConfirm={confirmRemove} okButtonProps={{ className: '!bg-danger !border-danger hover:!bg-danger-hover hover:!border-danger-hover' }}>
        {selectedMember && <p className="text-sm text-secondaryText">您正在将成员 <span className="font-semibold text-primaryText">{selectedMember.name} ({selectedMember.email})</span> 移出该科研团队，此操作执行后无法撤销。</p>}
        {actionError && <p className="mt-3 text-sm text-danger">{actionError}</p>}
      </BaseModal>
    </div>
  );
}
