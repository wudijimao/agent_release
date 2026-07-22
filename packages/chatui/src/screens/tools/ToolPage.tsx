import React from 'react';
import { ArrowLeft, Menu, Play, Trash2 } from 'lucide-react';

export interface ToolPageProps {
  isSidebarOpen: boolean;
  result?: string | null;
  onOpenSidebar(): void;
  onBack(): void;
  onRun(): void;
  onReset?(): void;
}

export function ToolPage({ isSidebarOpen, result, onOpenSidebar, onBack, onRun, onReset }: ToolPageProps) {
  const inputClassName = 'h-28 w-full resize-none rounded-lg border border-borderGray bg-surface p-4 font-mono text-base text-primaryText outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary';
  return (
    <div className="h-full w-full overflow-y-auto bg-surface p-8 md:p-12">
      <div className="mx-auto max-w-[800px]">
        <div className="mb-2 flex items-center gap-4">
          {!isSidebarOpen && <button type="button" onClick={onOpenSidebar} className="-ml-2 rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight" title="展开边栏"><Menu size={20} /></button>}
          <button type="button" onClick={onBack} className={`rounded-full p-2 text-secondaryText transition-colors hover:bg-bgLight ${isSidebarOpen ? '-ml-2' : ''}`} aria-label="返回任务列表"><ArrowLeft size={20} /></button>
          <h1 className="text-3xl font-normal text-primaryText">序列比对助手</h1>
        </div>
        <p className="mb-10 ml-10 text-base text-secondaryText">快速进行 DNA/RNA 序列比对与同源性分析</p>

        <div className="space-y-6 rounded-2xl border border-borderGray p-8">
          <div><label className="mb-3 block text-base font-medium text-primaryText">输入序列 1</label><textarea className={inputClassName} placeholder="ATCGATCGATCG..." /></div>
          <div><label className="mb-3 block text-base font-medium text-primaryText">输入序列 2</label><textarea className={inputClassName} placeholder="ATCGATCGATCG..." /></div>
          <div className="flex gap-4 pt-2">
            <button type="button" onClick={onRun} className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-base font-medium text-white transition-all hover:opacity-90 active:scale-95"><Play size={16} className="fill-current" />运行比对</button>
            <button type="button" onClick={onReset} className="flex items-center gap-2 rounded-full bg-transparent px-4 py-2 text-base font-medium text-secondaryText transition-colors hover:bg-bgLight"><Trash2 size={16} />重置</button>
          </div>

          {result && <div className="mt-8 border-t border-borderGray pt-8"><h3 className="mb-4 font-medium text-primaryText">运行结果</h3><div className="my-4 overflow-hidden rounded-lg border border-borderGray bg-toolCodeSurface"><div className="border-b border-borderGray bg-bgLight px-4 py-2 text-xs font-medium text-secondaryText">结果</div><div className="overflow-x-auto whitespace-pre-line p-4 font-mono text-sm text-primaryText">{result}</div></div></div>}
        </div>
      </div>
    </div>
  );
}
