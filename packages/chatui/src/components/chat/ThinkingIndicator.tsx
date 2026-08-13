import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  CircleCheckBig,
  CircleHelp,
  CircleX,
  Clock3,
  Globe,
  ListChecks,
  Loader2,
  Minus,
  Search,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from 'lucide-react';

/**
 * 任务状态阶段枚举，对齐豆包的交互范式：
 *   thinking  → 模型正在推理
 *   analyzing → 正在分析任务、上下文或规划
 *   searching → 正在检索知识库 / 网络
 *   executing → 正在执行工具、技能或动作
 *   generating → 正在生成回复
 */
export type StatusPhase =
  | 'queued'
  | 'thinking'
  | 'analyzing'
  | 'searching'
  | 'executing'
  | 'generating'
  | 'awaiting_clarification'
  | 'awaiting_confirmation'
  | 'awaiting_approval'
  | 'warning'
  | 'failed';

export interface SearchStep {
  /** 稳定步骤标识，用于流式更新同一条子状态 */
  id?: string;
  /** 步骤类型 */
  type: 'knowledge' | 'web' | 'tool' | 'planning' | 'context' | 'generation' | 'action';
  /** 步骤描述文案 */
  label: string;
  /** 当前步骤状态 */
  status?: 'running' | 'completed' | 'failed' | 'skipped' | 'warning';
  /** 服务端提供的安全补充说明 */
  detail?: string;
  /** 检索或工具结果数量 */
  resultCount?: number;
}

export interface ThinkingIndicatorProps {
  /** 当前阶段 */
  phase: StatusPhase;
  /** 搜索/工具调用步骤列表 */
  searchSteps?: SearchStep[];
  /** 服务端提供的当前状态文案 */
  label?: string;
  /** 是否默认展开搜索步骤，默认 true */
  defaultExpanded?: boolean;
  /** 当前回复在本地经过的秒数 */
  elapsedSeconds?: number;
  /** Current live reasoning content for the active reply. */
  reasoning?: string;
}

/* ── 阶段对应文案 ── */
const PHASE_LABEL: Record<StatusPhase, string> = {
  queued: '等待中…',
  thinking: '思考中…',
  analyzing: '分析中…',
  searching: '搜索中…',
  executing: '执行中…',
  generating: '生成中…',
  awaiting_clarification: '等待补充信息',
  awaiting_confirmation: '等待确认',
  awaiting_approval: '等待审批',
  warning: '处理时出现提醒',
  failed: '处理失败',
};

const PHASE_ICON: Record<StatusPhase, React.ReactNode> = {
  queued: <Clock3 size={14} className="text-tertiaryText" />,
  thinking: <Loader2 size={14} className="animate-spin text-primary" />,
  analyzing: <Loader2 size={14} className="animate-spin text-primary" />,
  searching: <Loader2 size={14} className="animate-spin text-primary" />,
  executing: <Loader2 size={14} className="animate-spin text-primary" />,
  generating: <Sparkles size={14} className="animate-pulse text-primary" />,
  awaiting_clarification: <CircleHelp size={14} className="text-warning" />,
  awaiting_confirmation: <CircleCheckBig size={14} className="text-primary" />,
  awaiting_approval: <ShieldCheck size={14} className="text-warning" />,
  warning: <TriangleAlert size={14} className="text-warning" />,
  failed: <CircleX size={14} className="text-danger" />,
};

/* ── 步骤类型 → 图标 + 颜色 ── */
const STEP_META: Record<
  SearchStep['type'],
  { icon: React.ReactNode; colorClass: string }
> = {
  knowledge: {
    icon: <BookOpen size={13} />,
    colorClass: 'text-primary',
  },
  web: {
    icon: <Globe size={13} />,
    colorClass: 'text-chatWebStep',
  },
  tool: {
    icon: <Search size={13} />,
    colorClass: 'text-chatToolStep',
  },
  planning: {
    icon: <ListChecks size={13} />,
    colorClass: 'text-chatToolStep',
  },
  context: {
    icon: <BookOpen size={13} />,
    colorClass: 'text-primary',
  },
  generation: {
    icon: <Sparkles size={13} />,
    colorClass: 'text-primary',
  },
  action: {
    icon: <Search size={13} />,
    colorClass: 'text-chatToolStep',
  },
};

const STEP_STATUS_META: Record<
  NonNullable<SearchStep['status']>,
  { icon: React.ReactNode; colorClass: string }
> = {
  running: {
    icon: <Loader2 size={13} className="animate-spin" />,
    colorClass: 'text-primary',
  },
  completed: {
    icon: <CircleCheckBig size={13} />,
    colorClass: 'text-primary',
  },
  failed: {
    icon: <CircleX size={13} />,
    colorClass: 'text-danger',
  },
  skipped: {
    icon: <Minus size={13} />,
    colorClass: 'text-tertiaryText',
  },
  warning: {
    icon: <TriangleAlert size={13} />,
    colorClass: 'text-warning',
  },
};

export const ThinkingIndicator: React.FC<ThinkingIndicatorProps> = ({
  phase,
  searchSteps = [],
  label,
  defaultExpanded = true,
  elapsedSeconds,
  reasoning,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [reasoningExpanded, setReasoningExpanded] = useState(false);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  /* 当步骤列表变化时自动展开 */
  useEffect(() => {
    if (searchSteps.length > 0) {
      setExpanded(true);
    }
  }, [searchSteps.length]);

  const hasSteps = searchSteps.length > 0;
  const elapsedLabel =
    elapsedSeconds === undefined
      ? undefined
      : `${Math.floor(elapsedSeconds / 60)}:${String(elapsedSeconds % 60).padStart(2, '0')}`;
  const reasoningLines = reasoning?.split(/\r?\n/).map((line) => line.trim()).filter(Boolean) ?? [];
  const reasoningLastLine = reasoningLines[reasoningLines.length - 1] ?? '';

  return (
    <div className="flex w-full flex-col items-start">
      {/* ── 主状态行 ── */}
      <div className="flex items-center gap-2">
        {/* 旋转动画图标 */}
        <span className="relative flex h-4 w-4 items-center justify-center">
          {PHASE_ICON[phase]}
        </span>

        {/* 阶段文案 */}
        <span className="text-[13px] leading-5 text-secondaryText select-none">
          {label || PHASE_LABEL[phase]}
        </span>

        {elapsedLabel && (
          <span
            className="text-[12px] tabular-nums leading-5 text-tertiaryText select-none"
            aria-label={`已用时 ${elapsedLabel}`}
          >
            {elapsedLabel}
          </span>
        )}

        {/* 搜索步骤折叠按钮 */}
        {hasSteps && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="ml-0.5 inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[12px] text-tertiaryText hover:bg-bgLight hover:text-secondaryText transition-colors"
          >
            {expanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
            <span>{searchSteps.length} 条进度</span>
          </button>
        )}
      </div>

      {/* ── 搜索步骤列表（可折叠） ── */}
      {reasoning && (
        <div className="mt-1 w-full max-w-[680px] rounded-xl border border-lineSubtle bg-surfaceMuted px-3 py-2.5">
          <button
            type="button"
            onClick={() => setReasoningExpanded((current) => !current)}
            className="flex w-full items-center gap-1.5 text-left text-[13px] font-medium text-secondaryText"
            aria-expanded={reasoningExpanded}
          >
            {reasoningExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            <span className="shrink-0">Thinking</span>
            {!reasoningExpanded && reasoningLastLine && (
              <span className="relative ml-2 min-w-0 flex-1 overflow-hidden text-left text-[12px] font-normal text-tertiaryText">
                <span className="block whitespace-nowrap">{reasoningLastLine}</span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-surfaceMuted"
                />
              </span>
            )}
          </button>
          {reasoningExpanded && (
            <div className="mt-2 whitespace-pre-wrap border-t border-lineSubtle pt-2 text-[13px] leading-6 text-secondaryText">
              {reasoning}
            </div>
          )}
        </div>
      )}

      {hasSteps && (
        <div
          ref={stepsContainerRef}
          className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-out ${
            expanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {searchSteps.map((step, idx) => {
            const meta = STEP_META[step.type] ?? STEP_META.tool;
            const statusMeta = step.status
              ? STEP_STATUS_META[step.status]
              : undefined;
            return (
              <div
                key={step.id ?? `${step.type}-${idx}-${step.label}`}
                className="flex items-start gap-2 text-[13px] leading-5 text-secondaryText"
              >
                <span className={`mt-1 ${meta.colorClass}`}>{meta.icon}</span>
                <span className="min-w-0 max-w-[480px]">
                  <span className="flex items-center gap-1.5">
                    <span className="block min-w-0 truncate">{step.label}</span>
                    {statusMeta && (
                      <span
                        className={`shrink-0 ${statusMeta.colorClass}`}
                        aria-label={step.status}
                      >
                        {statusMeta.icon}
                      </span>
                    )}
                  </span>
                  {(step.detail || step.resultCount !== undefined) && (
                    <span className="block truncate text-[12px] text-tertiaryText">
                      {step.detail}
                      {step.detail && step.resultCount !== undefined ? ' · ' : ''}
                      {step.resultCount !== undefined ? `${step.resultCount} 条结果` : ''}
                    </span>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(ThinkingIndicator);
