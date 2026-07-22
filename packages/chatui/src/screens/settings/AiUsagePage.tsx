import React, { useCallback, useMemo, useState } from 'react';
import { ChevronDown, CircleHelp, Menu } from 'lucide-react';
import { BaseActionMenu, BaseTable } from '../../components/common';
import type { BaseActionMenuItem, BaseTableColumn } from '../../components/common';

export interface AiUsageOverviewCard {
  title: string;
  value: string;
  helper?: string;
  tooltip?: string;
  warningLabel?: string;
}

export interface AiUsageFilterOption {
  label: string;
  value: string;
}

export interface AiUsageRechargeRecord extends Record<string, unknown> {
  id: string;
  amount: string;
  rechargeTime: string;
}

export interface AiUsagePageProps {
  isSidebarOpen: boolean;
  overviewCards: AiUsageOverviewCard[];
  memberOptions: AiUsageFilterOption[];
  monthOptions: AiUsageFilterOption[];
  selectedMember: string;
  selectedMonth: string;
  trendPoints: number[];
  trendLabels: string[];
  trendTotal: number;
  rechargeRecords: AiUsageRechargeRecord[];
  onOpenSidebar(): void;
  onMemberChange(value: string): void;
  onMonthChange(value: string): void;
}

const formatNumber = (value: number) => new Intl.NumberFormat('en-US').format(Math.round(value));

function UsageAmountBarChart({ points, labels, totalAmount }: { points: number[]; labels: string[]; totalAmount: number }) {
  const chartLeft = 52;
  const chartRight = 980;
  const chartTop = 18;
  const chartBottom = 156;
  const chartHeight = chartBottom - chartTop;
  const chartWidth = chartRight - chartLeft;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxAmount = useMemo(() => Math.max(...points, 1), [points]);
  const labelStep = useMemo(() => points.length <= 10 ? 1 : Math.ceil(points.length / 6), [points.length]);
  const barGap = useMemo(() => points.length <= 1 ? 0 : Math.min(6, chartWidth / points.length / 2.5), [chartWidth, points.length]);
  const barWidth = useMemo(() => points.length === 0 ? 0 : Math.max(3, (chartWidth - (points.length - 1) * barGap) / points.length), [barGap, chartWidth, points.length]);
  const formatAxisAmount = (value: number) => value >= 10_000 ? `￥${(value / 10_000).toFixed(1)}万` : `￥${formatNumber(value)}`;

  return (
    <div>
      <div className="mb-3">
        <div className="text-sm font-semibold text-primaryText">月度用量</div>
        <div className="mt-1 text-xs text-tertiaryText">消耗金额<span className="ml-1 text-primaryText">￥{formatNumber(totalAmount)}</span></div>
      </div>
      <div className="relative h-[190px] w-full">
        <svg viewBox="0 0 1000 190" preserveAspectRatio="none" className="h-full w-full">
          {[maxAmount, 0].map((tick) => {
            const y = chartBottom - (tick / maxAmount) * chartHeight;
            return (
              <g key={tick}>
                <line x1={chartLeft} x2={chartRight} y1={y.toFixed(2)} y2={y.toFixed(2)} stroke="var(--chatui-color-line-subtle)" strokeWidth="1" />
                <text x={chartLeft - 8} y={y + 4} textAnchor="end" fill="var(--chatui-color-text-tertiary)" fontSize="11">{formatAxisAmount(tick)}</text>
              </g>
            );
          })}
          {points.map((point, index) => {
            const barHeight = (point / maxAmount) * chartHeight;
            const x = chartLeft + index * (barWidth + barGap);
            const y = chartBottom - barHeight;
            const label = labels[index] ?? '';
            const showLabel = index % labelStep === 0 || index === points.length - 1;
            return (
              <g key={`${label}-${index}`} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                <rect x={x.toFixed(2)} y={y.toFixed(2)} width={barWidth.toFixed(2)} height={Math.max(1, barHeight).toFixed(2)} rx="1.5" fill={hoveredIndex === index ? 'var(--chatui-color-ai-usage-bar-hover)' : 'var(--chatui-color-ai-usage-bar)'} />
                {showLabel && <text x={(x + barWidth / 2).toFixed(2)} y={chartBottom + 14} textAnchor="middle" fill="var(--chatui-color-text-tertiary)" fontSize="11">{label}</text>}
              </g>
            );
          })}
        </svg>
        {hoveredIndex !== null && (
          <div className="pointer-events-none absolute top-0 z-20 -translate-x-1/2 rounded-lg bg-aiUsageTooltip px-2.5 py-2 text-xs text-white shadow-md" style={{ left: `${((chartLeft + hoveredIndex * (barWidth + barGap) + barWidth / 2) / 1000) * 100}%` }}>
            <div className="text-tertiaryText">{labels[hoveredIndex]}</div>
            <div className="mt-0.5 font-semibold text-aiUsageBar">￥{formatNumber(points[hoveredIndex])}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export function AiUsagePage({
  isSidebarOpen,
  overviewCards,
  memberOptions,
  monthOptions,
  selectedMember,
  selectedMonth,
  trendPoints,
  trendLabels,
  trendTotal,
  rechargeRecords,
  onOpenSidebar,
  onMemberChange,
  onMonthChange,
}: AiUsagePageProps) {
  const [activeTab, setActiveTab] = useState<'analysis' | 'recharge'>('analysis');
  const [memberMenuOpen, setMemberMenuOpen] = useState(false);
  const [monthMenuOpen, setMonthMenuOpen] = useState(false);
  const selectedMemberLabel = memberOptions.find((option) => option.value === selectedMember)?.label ?? '全部成员';
  const selectedMonthLabel = monthOptions.find((option) => option.value === selectedMonth)?.label ?? selectedMonth;
  const memberMenuItems = useMemo<BaseActionMenuItem[]>(() => memberOptions.map((option) => ({ key: `member-${option.value}`, label: option.label, active: option.value === selectedMember })), [memberOptions, selectedMember]);
  const monthMenuItems = useMemo<BaseActionMenuItem[]>(() => monthOptions.map((option) => ({ key: `month-${option.value}`, label: option.label, active: option.value === selectedMonth })), [monthOptions, selectedMonth]);
  const handleMemberClick = useCallback((item: BaseActionMenuItem) => { onMemberChange(item.key.replace('member-', '')); setMemberMenuOpen(false); }, [onMemberChange]);
  const handleMonthClick = useCallback((item: BaseActionMenuItem) => { onMonthChange(item.key.replace('month-', '')); setMonthMenuOpen(false); }, [onMonthChange]);
  const rechargeColumns = useMemo<BaseTableColumn<AiUsageRechargeRecord>[]>(() => [
    { title: '充值金额', dataIndex: 'amount', width: '50%', render: (value) => <span className="font-medium text-primaryText">{String(value)}</span> },
    { title: '充值时间', dataIndex: 'rechargeTime', width: '50%', render: (value) => <span className="text-secondaryText">{String(value)}</span> },
  ], []);
  const menuClasses = '!min-w-[172px] !rounded-lg !border !border-borderGray !p-1.5 !shadow-md';

  return (
    <div className="flex h-full w-full flex-col bg-surface">
      <header className="z-10 flex h-16 shrink-0 items-center bg-homeHeaderSurface px-4 backdrop-blur-sm">
        <div className="flex min-w-0 items-center gap-3">
          {!isSidebarOpen && <button type="button" onClick={onOpenSidebar} className="-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight" title="展开边栏"><Menu size={20} /></button>}
          <div className="flex items-center gap-2 text-sm"><span className="text-tertiaryText">系统设置</span><span className="text-tertiaryText">/</span><span className="font-medium text-primaryText">AI用量</span></div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 pb-10 pt-2 md:px-8 md:pb-12 md:pt-3 lg:px-10">
        <div className="mx-auto max-w-[1240px] space-y-5">
          <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {overviewCards.map((card) => (
              <div key={card.title} className="h-[118px] rounded-xl bg-aiUsageCard px-4">
                <div className="flex h-full flex-col justify-center">
                  <div className="flex items-center gap-1 text-sm text-tertiaryText">
                    <span>{card.title}</span>
                    {card.tooltip && <div className="group relative inline-flex"><CircleHelp size={14} className="cursor-help text-tertiaryText opacity-80" /><div className="pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 w-max -translate-x-1/2 rounded-md bg-aiUsageTooltip px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">{card.tooltip}</div></div>}
                  </div>
                  <div className="mt-2 flex items-center gap-2"><div className="overflow-hidden text-ellipsis whitespace-nowrap text-[30px] font-semibold leading-none text-primaryText">{card.value}</div>{card.warningLabel && <span className="inline-flex shrink-0 items-center rounded-full bg-danger-soft px-2 py-0.5 text-xs font-medium text-danger">{card.warningLabel}</span>}</div>
                  {card.helper && <div className="mt-2 text-sm text-tertiaryText">{card.helper}</div>}
                </div>
              </div>
            ))}
          </section>

          <section className="rounded-xl bg-surface">
            <div className="flex items-center justify-between border-b border-lineSubtle pt-3">
              <div className="flex items-center gap-5">
                <button type="button" onClick={() => setActiveTab('analysis')} className={`border-b-2 pb-2.5 text-sm font-medium transition-colors ${activeTab === 'analysis' ? 'border-primary text-primaryText' : 'border-transparent text-tertiaryText'}`}>消耗分析</button>
                <button type="button" onClick={() => setActiveTab('recharge')} className={`border-b-2 pb-2.5 text-sm font-medium transition-colors ${activeTab === 'recharge' ? 'border-primary text-primaryText' : 'border-transparent text-tertiaryText'}`}>充值记录</button>
              </div>
            </div>

            {activeTab === 'analysis' && <div className="py-5"><div className="flex flex-wrap items-center gap-2 text-sm text-secondaryText">
              <BaseActionMenu open={memberMenuOpen} onOpenChange={setMemberMenuOpen} items={memberMenuItems} onItemClick={handleMemberClick} placement="bottom-start" width={172} portal menuClassName={menuClasses} listClassName="max-h-[240px] overflow-y-auto" trigger={<span className="inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary"><span className="truncate">{selectedMemberLabel}</span><ChevronDown size={16} className={`ml-2 shrink-0 text-secondaryText transition-transform ${memberMenuOpen ? 'rotate-180' : ''}`} /></span>} />
              <BaseActionMenu open={monthMenuOpen} onOpenChange={setMonthMenuOpen} items={monthMenuItems} onItemClick={handleMonthClick} placement="bottom-start" width={172} portal menuClassName={menuClasses} listClassName="max-h-[240px] overflow-y-auto" trigger={<span className="inline-flex h-10 min-w-[172px] items-center justify-between rounded-xl border border-borderGray bg-surface px-4 text-sm text-primaryText transition-colors hover:border-primary"><span className="truncate">{selectedMonthLabel}</span><ChevronDown size={16} className={`ml-2 shrink-0 text-secondaryText transition-transform ${monthMenuOpen ? 'rotate-180' : ''}`} /></span>} />
            </div></div>}
            {activeTab === 'analysis' ? <div className="py-4"><UsageAmountBarChart points={trendPoints} labels={trendLabels} totalAmount={trendTotal} /></div> : <div className="pb-5 pt-4"><div className="border-b border-borderGray bg-surface"><BaseTable className="task-table-scroll min-w-[760px]" columns={rechargeColumns} dataSource={rechargeRecords} rowKey="id" /></div></div>}
          </section>
        </div>
      </div>
    </div>
  );
}
