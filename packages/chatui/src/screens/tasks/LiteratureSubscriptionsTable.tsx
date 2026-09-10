import React, { useMemo, useState } from 'react';
import { MessageCircle, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import { BaseActionMenu, BaseTable, BaseToggle } from '../../components/common';
import type { BaseActionMenuItem, BaseTableColumn } from '../../components/common';

export interface LiteratureSubscriptionListItemViewModel extends Record<string, unknown> {
  id: string;
  name: string;
  source: string;
  keywords: string;
  nextRun: string;
  scheduleEnd?: string;
  trigger: string;
  itemStats: string;
  projectStats: string;
  mainSessionId?: string;
  isEnabled: boolean;
}

export interface LiteratureSubscriptionsTableProps {
  items: LiteratureSubscriptionListItemViewModel[];
  loading?: boolean;
  pendingId?: string | null;
  onOpenChat(sessionId: string): void;
  onToggle(id: string): void;
  onEdit(id: string): void;
  onDelete(id: string): void;
}

export function LiteratureSubscriptionsTable({
  items,
  loading = false,
  pendingId,
  onOpenChat,
  onToggle,
  onEdit,
  onDelete,
}: LiteratureSubscriptionsTableProps) {
  const [actionMenuId, setActionMenuId] = useState<string | null>(null);
  const columns = useMemo<BaseTableColumn<LiteratureSubscriptionListItemViewModel>[]>(() => [
    {
      title: '订阅名称',
      dataIndex: 'name',
      width: '19%',
      render: (value, item) => {
        const title = String(value);
        return <div className="w-full min-w-0 overflow-hidden"><div className="truncate font-medium text-primaryText" title={title}>{title}</div><div className="mt-1 text-xs text-tertiaryText">{item.source}</div></div>;
      },
    },
    {
      title: '关键词',
      dataIndex: 'keywords',
      width: '36%',
      render: (value, item) => <div><span className="line-clamp-2 break-all text-secondaryText">{String(value) || '未设置'}</span><div className="mt-1 text-xs text-tertiaryText">{item.itemStats} · {item.projectStats}</div></div>,
    },
    {
      title: '下次运行',
      dataIndex: 'nextRun',
      width: '16%',
      render: (value, item) => <span><span className="block text-secondaryText">{String(value)}</span>
        {item.scheduleEnd && <span className="mt-1 block text-xs text-tertiaryText">{item.scheduleEnd}</span>}
      </span>,
    },
    {
      title: '触发方式',
      dataIndex: 'trigger',
      width: '14%',
      render: (value) => <span className="text-secondaryText">{String(value)}</span>,
    },
    {
      title: '状态',
      dataIndex: 'isEnabled',
      width: '7%',
      render: (_, item) => <BaseToggle size="small" checked={item.isEnabled} disabled={pendingId === item.id}
        onChange={() => onToggle(item.id)} aria-label={item.isEnabled ? '停用文献订阅' : '启用文献订阅'} />,
    },
    {
      title: '操作',
      dataIndex: 'id',
      width: '8%',
      align: 'right',
      render: (_, item) => {
        const actions: BaseActionMenuItem[] = [
          { key: 'chat', label: '打开对话', icon: <MessageCircle size={14} />, disabled: !item.mainSessionId },
          { key: 'edit', label: '编辑', icon: <Pencil size={14} /> },
          { key: 'delete', label: '删除', icon: <Trash2 size={14} />, danger: true },
        ];
        return <BaseActionMenu open={actionMenuId === item.id} onOpenChange={(open) => setActionMenuId(open ? item.id : null)}
          placement="bottom-end" width={140} portal menuClassName="!min-w-[140px]"
          trigger={<span className="inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText"><MoreHorizontal size={16} /></span>}
          items={actions} onItemClick={(action) => {
            setActionMenuId(null);
            if (action.key === 'chat' && item.mainSessionId) onOpenChat(item.mainSessionId);
            else if (action.key === 'edit') onEdit(item.id);
            else onDelete(item.id);
          }} />;
      },
    },
  ], [actionMenuId, onDelete, onEdit, onOpenChat, onToggle, pendingId]);

  return (
    <section>
      <div className="border-b border-borderGray bg-white">
        <BaseTable className="task-table-scroll w-full [&_table]:min-w-[1080px] [&_table]:table-fixed" columns={columns}
          dataSource={items} rowKey="id" striped={false} loading={loading} />
      </div>
    </section>
  );
}
