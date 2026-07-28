import React, { useMemo, useState } from 'react';
import { MoreHorizontal, Pencil, RefreshCw, Trash2 } from 'lucide-react';
import { BaseActionMenu, BaseButton, BaseTable, BaseToggle } from '../../components/common';
import type { BaseActionMenuItem, BaseTableColumn } from '../../components/common';

export interface LiteratureSubscriptionListItemViewModel extends Record<string, unknown> {
  id: string;
  name: string;
  source: string;
  keywords: string;
  schedule: string;
  lastFetch: string;
  itemStats: string;
  projectStats: string;
  isEnabled: boolean;
}

export interface LiteratureSubscriptionsTableProps {
  items: LiteratureSubscriptionListItemViewModel[];
  loading?: boolean;
  pendingId?: string | null;
  onCreate(): void;
  onFetch(id: string): void;
  onToggle(id: string): void;
  onEdit(id: string): void;
  onDelete(id: string): void;
}

export function LiteratureSubscriptionsTable({
  items,
  loading = false,
  pendingId,
  onCreate,
  onFetch,
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
      render: (value, item) => <div className="min-w-0"><div className="truncate font-medium text-primaryText">{String(value)}</div><div className="mt-1 text-xs text-tertiaryText">{item.source}</div></div>,
    },
    {
      title: '关键词',
      dataIndex: 'keywords',
      width: '22%',
      render: (value) => <span className="line-clamp-2 break-all text-secondaryText">{String(value) || '未设置'}</span>,
    },
    {
      title: '抓取设置',
      dataIndex: 'schedule',
      width: '14%',
      render: (value) => <span className="text-secondaryText">{String(value)}</span>,
    },
    {
      title: '内容统计',
      dataIndex: 'itemStats',
      width: '16%',
      render: (value, item) => <div><div className="text-secondaryText">{String(value)}</div><div className="mt-1 text-xs text-tertiaryText">{item.projectStats}</div></div>,
    },
    {
      title: '最近抓取',
      dataIndex: 'lastFetch',
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
          { key: 'fetch', label: '立即抓取', icon: <RefreshCw size={14} /> },
          { key: 'edit', label: '编辑', icon: <Pencil size={14} /> },
          { key: 'delete', label: '删除', icon: <Trash2 size={14} />, danger: true },
        ];
        return <BaseActionMenu open={actionMenuId === item.id} onOpenChange={(open) => setActionMenuId(open ? item.id : null)}
          placement="bottom-end" width={140} portal menuClassName="!min-w-[140px]"
          trigger={<span className="inline-flex rounded-md p-1 text-secondaryText transition-colors hover:bg-bgLight hover:text-primaryText"><MoreHorizontal size={16} /></span>}
          items={actions} onItemClick={(action) => {
            setActionMenuId(null);
            if (action.key === 'fetch') onFetch(item.id);
            else if (action.key === 'edit') onEdit(item.id);
            else onDelete(item.id);
          }} />;
      },
    },
  ], [actionMenuId, onDelete, onEdit, onFetch, onToggle, pendingId]);

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-[15px] font-medium text-primaryText">文献订阅</h2>
          <p className="mt-1 text-xs text-tertiaryText">按来源和关键词定期抓取文献，字段与旧版知识追踪保持一致。</p>
        </div>
        <BaseButton type="secondary" size="small" onClick={onCreate}>新建订阅</BaseButton>
      </div>
      <div className="border-b border-borderGray bg-white">
        <BaseTable className="task-table-scroll w-full [&_table]:min-w-[1080px]" columns={columns}
          dataSource={items} rowKey="id" striped={false} loading={loading} />
      </div>
    </section>
  );
}
