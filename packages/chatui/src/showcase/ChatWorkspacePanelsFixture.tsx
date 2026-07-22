import { useMemo, useState } from 'react';
import {
  ChatPreviewPanel,
  ChatProjectFilesPanel,
  ChatWorkspaceFrame,
  ChatWorkspaceSidePanel,
  type ChatPreviewItemViewModel,
  type ChatProjectExperimentItemViewModel,
  type ChatProjectKnowledgeItemViewModel,
} from '..';

const knowledgeDocs: ChatProjectKnowledgeItemViewModel[] = [
  { id: 'doc-1', title: '细胞裂解方式对比分析', tags: ['文献'] },
  { id: 'doc-2', title: '实验采样流程规范', tags: ['方法'] },
];

const experiments: ChatProjectExperimentItemViewModel[] = [
  { id: 'exp-1', title: '胃癌模型治疗方案探索', status: '实验结束', tags: ['实验记录'] },
  { id: 'exp-2', title: 'CRISPR 修复蛋白实验', status: '进行中', tags: ['湿试验'] },
];

export function ChatWorkspacePanelsFixture() {
  const [query, setQuery] = useState('');
  const [tabs, setTabs] = useState<ChatPreviewItemViewModel[]>([]);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [event, setEvent] = useState('等待面板交互');
  const normalizedQuery = query.trim().toLowerCase();

  const filteredKnowledge = useMemo(
    () => knowledgeDocs.filter((item) => item.title.toLowerCase().includes(normalizedQuery)),
    [normalizedQuery],
  );
  const filteredExperiments = useMemo(
    () => experiments.filter((item) => item.title.toLowerCase().includes(normalizedQuery)),
    [normalizedQuery],
  );

  const openItem = (item: ChatPreviewItemViewModel) => {
    setTabs((current) => current.some((tab) => tab.key === item.key) ? current : [...current, item]);
    setActiveKey(item.key);
    setEvent(`打开预览：${item.title}`);
  };

  const closeTab = (key: string) => {
    setTabs((current) => {
      const next = current.filter((tab) => tab.key !== key);
      setActiveKey((active) => active === key ? next[0]?.key ?? null : active);
      return next;
    });
    setEvent(`关闭标签：${key}`);
  };

  return (
    <main className="h-screen">
      <ChatWorkspaceFrame
        header={null}
        sidePanels={<>
          <ChatWorkspaceSidePanel open width={360}>
            <ChatPreviewPanel
              tabs={tabs}
              activeKey={activeKey}
              onSelectTab={setActiveKey}
              onCloseTab={closeTab}
              onClose={() => {
                setTabs([]);
                setActiveKey(null);
                setEvent('关闭预览面板');
              }}
              onResizeStart={() => setEvent('调整预览面板')}
            />
          </ChatWorkspaceSidePanel>
          <ChatWorkspaceSidePanel open width={300}>
            <ChatProjectFilesPanel
              projectName="CRISPR 基因编辑研究"
              searchQuery={query}
              knowledgeDocs={filteredKnowledge}
              experiments={filteredExperiments}
              activePreviewKey={activeKey}
              onSearchQueryChange={setQuery}
              onOpenKnowledge={(id) => {
                const item = knowledgeDocs.find((document) => document.id === id);
                if (!item) return;
                openItem({
                  key: `knowledge:${item.id}`,
                  type: 'knowledge',
                  title: item.title,
                  subtitle: `CRISPR 基因编辑研究 · ${item.tags.join(' · ')}`,
                  content: `文档标题：${item.title}\n标签：${item.tags.join(' / ')}\n\n摘要：固定预览内容。`,
                });
              }}
              onOpenExperiment={(id) => {
                const item = experiments.find((experiment) => experiment.id === id);
                if (!item) return;
                openItem({
                  key: `experiment:${item.id}`,
                  type: 'experiment-log',
                  title: item.title,
                  subtitle: `CRISPR 基因编辑研究 · ${item.tags.join(' · ')}`,
                  content: `实验标题：${item.title}\n标签：${item.tags.join(' / ')}\n\n摘要：固定预览内容。`,
                  status: item.status,
                });
              }}
              onResizeStart={() => setEvent('调整项目面板')}
            />
          </ChatWorkspaceSidePanel>
        </>}
      >
        <div className="min-h-0 flex-1 bg-bgLight" />
      </ChatWorkspaceFrame>
      <output className="sr-only" aria-live="polite">{event}</output>
    </main>
  );
}
