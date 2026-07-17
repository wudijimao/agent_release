import { ChatConversationViewport, type ChatMessage } from '..';

const richMarkdown = [
  '# CRISPR 阴性对照分析',
  '',
  '这是一条用于验证 **Markdown/GFM**、公式、代码与流程图的固定助手消息。',
  '',
  '## 核心检查项',
  '',
  '- [x] 阴性 gRNA 对照',
  '- [x] Mock 转染对照',
  '- [ ] 独立生物学重复',
  '',
  '| 条件 | 建议 | 目的 |',
  '| --- | --- | --- |',
  '| 阴性 gRNA | 与实验组同剂量 | 排除递送背景 |',
  '| Mock | 仅加转染试剂 | 评估试剂毒性 |',
  '',
  '> 结论必须同时参考编辑效率与细胞活性，不能只看单一终点。',
  '',
  '行内代码示例：`controlGroup.filter(Boolean)`。',
  '',
  '```ts',
  'const controls = ["negative-gRNA", "mock", "positive-control"];',
  'const ready = controls.every((name) => name.length > 0);',
  '```',
  '',
  '编辑率可写为 $E = \\frac{N_{edited}}{N_{total}}$，区间估计为：',
  '',
  '$$CI = \\hat{p} \\pm 1.96 \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$',
  '',
  '缓冲液示例：$\\ce{NaCl + H2O}$。',
  '',
  '```mermaid',
  'flowchart LR',
  '  A[样本准备] --> B{质控通过?}',
  '  B -->|是| C[测序分析]',
  '  B -->|否| D[重新制备]',
  '```',
  '',
  '外部资料：[DOI 文献](https://doi.org/10.1038/s41587-020-00746-x)',
  '',
  '[实验报告 PDF](https://example.com/crispr-control-report.pdf)',
].join('\n');

const messages: ChatMessage[] = [
  {
    role: 'user',
    content: '请给我一份包含公式、代码和流程图的阴性对照说明。',
  },
  {
    role: 'assistant',
    content: richMarkdown,
  },
];

export function RichMessageFixture() {
  return (
    <main className="flex h-screen min-h-[720px] flex-col bg-white text-primaryText">
      <header className="flex h-16 shrink-0 items-center border-b border-lineSubtle bg-homeHeaderSurface px-8">
        <div>
          <h1 className="m-0 text-sm font-medium text-primaryText">富文本消息验收</h1>
          <p className="m-0 mt-1 text-xs text-tertiaryText">Markdown / GFM / Highlight / KaTeX / Mermaid / PDF</p>
        </div>
      </header>
      <div className="min-h-0 flex-1">
        <ChatConversationViewport
          messages={messages}
          isTyping={false}
          contentMaxWidth={920}
          getMessageKey={(_message, index) => `rich-message-${index}`}
        />
      </div>
    </main>
  );
}
