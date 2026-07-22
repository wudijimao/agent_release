import React, { useMemo, useState } from 'react';
import { Select } from 'antd';
import { BaseButton, BaseModal } from '../../components/common';

export type ProjectMemberPermission = '浏览' | '编辑';

export interface ProjectMemberViewModel {
  id: string;
  name: string;
  permission: ProjectMemberPermission;
  editable?: boolean;
  roleLabel?: string;
}

export interface ProjectMemberDirectoryItem {
  id: string;
  name: string;
  email: string;
}

export interface ProjectMemberManagementModalProps {
  visible: boolean;
  members: ProjectMemberViewModel[];
  directory: ProjectMemberDirectoryItem[];
  onClose(): void;
  onInvite(memberIds: string[], permission: ProjectMemberPermission): void | Promise<void>;
  onChangePermission(memberId: string, permission: ProjectMemberPermission): void | Promise<void>;
  onRemove(memberId: string): void | Promise<void>;
}

const permissionOptions = [{ label: '浏览', value: '浏览' }, { label: '编辑', value: '编辑' }];
const permissionActionOptions = [...permissionOptions, { label: '移除', value: '移除' }];

export function ProjectMemberManagementModal({
  visible,
  members,
  directory,
  onClose,
  onInvite,
  onChangePermission,
  onRemove,
}: ProjectMemberManagementModalProps) {
  const [selectedMemberIds, setSelectedMemberIds] = useState<string[]>([]);
  const [permission, setPermission] = useState<ProjectMemberPermission>('浏览');
  const [error, setError] = useState('');
  const [busyAction, setBusyAction] = useState('');
  const inviteOptions = useMemo(() => {
    const joined = new Set(members.map((member) => member.id));
    return directory
      .filter((member) => !joined.has(member.id))
      .map((member) => ({
        label: `${member.name}（${member.email}）`,
        value: member.id,
        searchText: `${member.name} ${member.email}`,
      }));
  }, [directory, members]);

  const resetAndClose = () => {
    if (busyAction) return;
    setSelectedMemberIds([]);
    setPermission('浏览');
    setError('');
    onClose();
  };

  const submitInvite = async () => {
    if (!selectedMemberIds.length) {
      setError('请先选择要邀请的成员');
      return;
    }
    setBusyAction('invite');
    setError('');
    try {
      await onInvite(selectedMemberIds, permission);
      setSelectedMemberIds([]);
      setPermission('浏览');
    } catch (actionError) {
      setError(actionError instanceof Error ? actionError.message : '邀请成员失败');
    } finally {
      setBusyAction('');
    }
  };

  const runMemberAction = async (memberId: string, action: string) => {
    setBusyAction(memberId);
    setError('');
    try {
      if (action === '移除') await onRemove(memberId);
      else await onChangePermission(memberId, action as ProjectMemberPermission);
    } catch (actionError) {
      setError(actionError instanceof Error ? actionError.message : '成员操作失败');
    } finally {
      setBusyAction('');
    }
  };

  return (
    <BaseModal visible={visible} title="管理成员" width={560} maskClosable={false} footer={null} onCancel={resetAndClose} bodyClassName="!px-6 !py-5">
      <div className="space-y-5">
        <section className="space-y-3">
          <div className="text-sm font-medium text-primaryText">加入新成员</div>
          <div className="flex items-center gap-3">
            <div className="flex flex-1 items-center rounded-lg border border-lineSubtle bg-surface px-2.5 py-1">
              <div className="min-w-0 flex-1">
                <Select
                  mode="multiple"
                  showSearch
                  variant="borderless"
                  value={selectedMemberIds}
                  options={inviteOptions}
                  optionFilterProp="searchText"
                  classNames={{ popup: { root: 'project-invite-member-dropdown' } }}
                  suffixIcon={null}
                  placeholder="搜索姓名/邮箱并选择成员"
                  onChange={(values) => {
                    setSelectedMemberIds(values);
                    if (error) setError('');
                  }}
                  disabled={Boolean(busyAction)}
                  className="w-full"
                />
              </div>
              <div className="mx-2 h-5 w-px bg-lineSoft" />
              <Select
                variant="borderless"
                value={permission}
                options={permissionOptions}
                onChange={(value) => setPermission(value as ProjectMemberPermission)}
                disabled={Boolean(busyAction)}
                className="w-[76px]"
                classNames={{ popup: { root: 'project-member-permission-dropdown' } }}
              />
            </div>
            <BaseButton type="primary" size="medium" disabled={Boolean(busyAction)} onClick={() => void submitInvite()}>{busyAction === 'invite' ? '邀请中…' : '邀请成员'}</BaseButton>
          </div>
          {error && <div className="text-sm text-danger">{error}</div>}
        </section>

        <section className="space-y-3 border-t border-lineSoft pt-4">
          {members.length ? (
            <div className="max-h-64 space-y-2 overflow-y-auto pr-1">
              {members.map((member) => (
                <div key={member.id} className="flex items-center justify-between gap-3 rounded-lg border border-lineSubtle bg-surface px-3 py-2.5">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-primaryText">{member.name}</div>
                    <div className="mt-0.5 text-xs text-tertiaryText">项目成员</div>
                  </div>
                  {member.editable === false ? (
                    <span className="px-3 text-sm text-tertiaryText">{member.roleLabel || member.permission}</span>
                  ) : <Select
                    variant="borderless"
                    value={member.permission}
                    options={permissionActionOptions}
                    onChange={(action) => {
                      void runMemberAction(member.id, String(action));
                    }}
                    disabled={Boolean(busyAction)}
                    className="member-permission-action-select w-[84px]"
                    classNames={{ popup: { root: 'project-member-permission-dropdown' } }}
                    getPopupContainer={() => document.body}
                  />}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-borderSoft px-3 py-5 text-center text-sm text-tertiaryText">暂无成员</div>
          )}
        </section>
      </div>
    </BaseModal>
  );
}
