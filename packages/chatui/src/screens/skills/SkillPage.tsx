import React, { useMemo, useState } from 'react';
import { Menu, Plus, Search } from 'lucide-react';

export type SkillRiskLevel = 'low' | 'medium' | 'high';
export type SkillTab = 'installed' | 'uninstalled';

export interface SkillCardViewModel {
  id: string;
  name: string;
  source: string;
  description: string;
  tags: string[];
  riskLevel: SkillRiskLevel;
  installed: boolean;
}

export interface SkillPageProps {
  isSidebarOpen: boolean;
  skills: SkillCardViewModel[];
  loading?: boolean;
  error?: string;
  pendingSkillIds?: readonly string[];
  onOpenSidebar(): void;
  onCreateSkill(): void;
  onInstall(skillIds: string[]): void;
  onUninstall(skillIds: string[]): void;
  onRetry?(): void;
}

const riskLabelMap: Record<SkillRiskLevel, string> = { low: '低风险', medium: '中风险', high: '高风险' };
const riskClassMap: Record<SkillRiskLevel, string> = {
  low: 'bg-skillRiskLow text-primary',
  medium: 'bg-skillRiskMedium text-warning',
  high: 'bg-danger-soft text-danger',
};

export function SkillPage({
  isSidebarOpen,
  skills,
  loading = false,
  error,
  pendingSkillIds = [],
  onOpenSidebar,
  onCreateSkill,
  onInstall,
  onUninstall,
  onRetry,
}: SkillPageProps) {
  const [activeTab, setActiveTab] = useState<SkillTab>('installed');
  const [keyword, setKeyword] = useState('');
  const [isBatchMode, setIsBatchMode] = useState(false);
  const [selectedSkillIds, setSelectedSkillIds] = useState<string[]>([]);
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);
  const pendingSkillIdSet = useMemo(() => new Set(pendingSkillIds), [pendingSkillIds]);
  const filteredSkills = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();
    return skills.filter((skill) => {
      if ((activeTab === 'installed') !== skill.installed) return false;
      if (!normalizedKeyword) return true;
      return [skill.name, skill.source, skill.description, ...skill.tags].join(' ').toLowerCase().includes(normalizedKeyword);
    });
  }, [activeTab, keyword, skills]);

  const changeTab = (tab: SkillTab) => { setActiveTab(tab); setIsBatchMode(false); setSelectedSkillIds([]); };
  const toggleBatchMode = () => { setIsBatchMode((current) => !current); setSelectedSkillIds([]); };
  const toggleSelection = (skillId: string) => setSelectedSkillIds((current) => current.includes(skillId) ? current.filter((id) => id !== skillId) : [...current, skillId]);
  const runSingleAction = (skill: SkillCardViewModel) => skill.installed ? onUninstall([skill.id]) : onInstall([skill.id]);
  const runBatchAction = () => {
    if (!selectedSkillIds.length) return;
    if (activeTab === 'installed') onUninstall(selectedSkillIds);
    else onInstall(selectedSkillIds);
    setSelectedSkillIds([]);
    setIsBatchMode(false);
  };

  return (
    <div className="relative flex h-full w-full flex-col bg-surface">
      <header className="z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-4 backdrop-blur-sm">
        <div className="flex min-w-0 items-center gap-3">
          {!isSidebarOpen && <button type="button" onClick={onOpenSidebar} className="-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight" title="展开边栏"><Menu size={20} /></button>}
          <div className="flex items-center gap-2 text-sm"><span className="text-tertiaryText">系统设置</span><span className="text-tertiaryText">/</span><span className="font-medium text-primaryText">Skill</span></div>
        </div>
        <button
          type="button"
          className="inline-flex h-7 shrink-0 items-center justify-center gap-2 rounded-md border border-skillCreate bg-skillCreate px-3 py-1 text-xs font-medium text-white transition-all hover:border-skillCreateHover hover:bg-skillCreateHover"
          onClick={onCreateSkill}
        >
          <Plus size={14} />
          新建 Skill
        </button>
      </header>

      <div className={`flex-1 overflow-y-scroll px-4 pt-4 md:px-8 md:pt-6 lg:px-10 ${isBatchMode ? 'pb-32' : 'pb-12'}`}>
        <div className="mx-auto max-w-[1240px]">
          <section>
            <h2 className="text-center text-2xl font-semibold text-primaryText">Skills, Agent 能力扩展</h2>
            <p className="mt-2 text-center text-sm text-tertiaryText">模块化、可复用的能力单元，用于扩展 Agent 功能，使其具备跨领域能力与多维指令执行专家。</p>
            <div className="mx-auto mt-4 w-full max-w-[600px]"><div className="flex items-center gap-2 rounded-full border border-lineSubtle bg-surface px-4 py-2.5"><Search size={16} className="text-tertiaryText" /><input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="输入关键词，查找你需要的 Skills" className="w-full bg-transparent text-sm text-primaryText outline-none placeholder:text-tertiaryText" /></div></div>
          </section>

          <section className="mt-5">
            <div className="flex items-end justify-between border-b border-lineSubtle">
              <div className="flex items-end gap-8">
                <button type="button" onClick={() => changeTab('installed')} className={`border-b-2 pb-2 text-sm font-medium transition-colors ${activeTab === 'installed' ? 'border-primary text-primaryText' : 'border-transparent text-tertiaryText'}`}>已安装</button>
                <button type="button" onClick={() => changeTab('uninstalled')} className={`border-b-2 pb-2 text-sm font-medium transition-colors ${activeTab === 'uninstalled' ? 'border-primary text-primaryText' : 'border-transparent text-tertiaryText'}`}>未安装</button>
              </div>
              <label className="mb-2 inline-flex items-center gap-2 text-sm text-tertiaryText"><span className="relative inline-flex h-4 w-4 items-center justify-center rounded-sm"><input type="checkbox" checked={isBatchMode} onChange={(event) => { setIsBatchMode(event.target.checked); setSelectedSkillIds([]); }} className="peer absolute inset-0 cursor-pointer opacity-0" /><span className="pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border border-skillCheckbox bg-surface text-transparent transition-colors peer-checked:border-transparent peer-checked:bg-primary peer-checked:text-white"><svg className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 8.2L6.5 11.1L12.5 5.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span></span>批量操作</label>
            </div>

            {error && (
              <div role="alert" className="mt-4 flex min-h-24 items-center justify-center gap-2 rounded-lg border border-danger bg-danger-soft px-4 text-sm text-danger">
                <span>{error}</span>
                {onRetry && <button type="button" className="font-medium underline" onClick={onRetry}>重新加载</button>}
              </div>
            )}

            {!error && loading && (
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3" aria-label="正在加载 Skills" aria-busy="true">
                {Array.from({ length: 6 }, (_, index) => (
                  <div key={index} className="h-[168px] animate-pulse rounded-lg border border-lineSubtle bg-skillTagSurface" />
                ))}
              </div>
            )}

            {!error && !loading && filteredSkills.length ? (
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3" aria-busy={pendingSkillIds.length > 0}>
                {filteredSkills.map((skill) => {
                  const selected = selectedSkillIds.includes(skill.id);
                  const pending = pendingSkillIdSet.has(skill.id);
                  const cardClass = selected ? 'border-skillSelectedBorder bg-skillSelectedSurface' : hoveredSkillId === skill.id ? 'border-lineSubtle bg-skillCardHover' : 'border-lineSubtle bg-surface';
                  return (
                    <article key={skill.id} className={`rounded-lg border p-4 transition-shadow hover:shadow-sm ${cardClass}`} onMouseEnter={() => setHoveredSkillId(skill.id)} onMouseLeave={() => setHoveredSkillId((current) => current === skill.id ? null : current)}>
                      <div className="flex items-start justify-between gap-3"><div className="min-w-0"><div className="truncate text-base font-medium text-primaryText">{skill.name}</div><div className="mt-1 text-xs text-tertiaryText">{skill.source}</div></div><div className="flex items-center gap-2"><span className={`rounded px-2 py-1 text-xs font-medium ${riskClassMap[skill.riskLevel]}`}>{riskLabelMap[skill.riskLevel]}</span>{isBatchMode && <button type="button" onClick={() => toggleSelection(skill.id)} className="relative inline-flex h-4 w-4 items-center justify-center rounded-sm" aria-label={selected ? `取消选择 ${skill.name}` : `选择 ${skill.name}`}><span className={`pointer-events-none inline-flex h-full w-full items-center justify-center rounded-sm border transition-colors ${selected ? 'border-transparent bg-primary text-white' : 'border-skillCheckbox bg-surface text-transparent'}`}><svg className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 8.2L6.5 11.1L12.5 5.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span></button>}</div></div>
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-secondaryText">{skill.description}</p>
                      <div className="mt-4 flex items-center justify-between gap-3"><div className="flex flex-wrap gap-2">{skill.tags.map((tag) => <span key={`${skill.id}-${tag}`} className="inline-flex items-center rounded-full bg-skillTagSurface px-3 py-1.5 text-xs text-tertiaryText">{tag}</span>)}</div>{!isBatchMode && <button type="button" disabled={pending} onClick={() => runSingleAction(skill)} className={`shrink-0 items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${(hoveredSkillId === skill.id || pending) ? 'inline-flex' : 'hidden'} ${skill.installed ? 'bg-skillTagSurface text-primaryText' : 'bg-primary text-white'}`}>{pending ? '处理中...' : skill.installed ? '卸载' : '安装'}</button>}</div>
                    </article>
                  );
                })}
              </div>
            ) : !error && !loading ? <div className="mt-4 flex h-36 items-center justify-center rounded-lg border border-lineSubtle text-sm text-tertiaryText">暂无匹配的 Skills</div> : null}
          </section>
        </div>
      </div>

      {isBatchMode && <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-lineSubtle bg-surface"><div className="pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-8 lg:px-10"><span className="text-sm text-secondaryText">已选择 {selectedSkillIds.length} 条 Skill</span><div className="flex items-center gap-2"><button type="button" onClick={toggleBatchMode} disabled={pendingSkillIds.length > 0} className="rounded-md border border-lineSubtle bg-surface px-3 py-1 text-sm text-secondaryText transition-colors hover:bg-skillCancelHover disabled:cursor-wait disabled:opacity-60">取消</button><button type="button" onClick={runBatchAction} disabled={!selectedSkillIds.length || pendingSkillIds.length > 0} className="rounded-md bg-primary px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-skillActionDisabled">{pendingSkillIds.length > 0 ? '处理中...' : activeTab === 'installed' ? '批量卸载' : '批量安装'}</button></div></div></div>}
    </div>
  );
}
