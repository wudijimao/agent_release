import assert from 'node:assert/strict';
import test from 'node:test';
import type { ResearchAnswer } from './research-answer';
import { buildResearchWikiMarkdown, getVisibleResearchSources } from './research-answer';

function buildAnswer(): ResearchAnswer {
  return {
    status: 'success',
    title: 'EGFR 研究报告',
    summary: ['总结可用证据。'],
    keyFindings: [
      {
        text: 'Paper 6 supports the conclusion.',
        citations: [6, 9],
      },
    ],
    bodyMarkdown: '',
    papers: Array.from({ length: 6 }, (_, index) => ({
      id: index + 1,
      title: `Paper ${index + 1}`,
      database: 'PubMed',
      relevance: index < 4 ? 'high' : 'medium',
      relevanceReason: `来自本轮第 ${index + 1} 篇文献。`,
    })),
    limitations: [],
    sources: [
      { id: 1, title: 'Paper 1', type: 'paper', relevance: 'high' },
      { id: 9, title: 'UniProt EGFR', type: 'database', relevance: 'medium' },
    ],
    suggestedWikiTitle: 'EGFR 研究笔记',
  };
}

test('visible research sources drop paper duplicates', () => {
  const answer = buildAnswer();
  const sources = getVisibleResearchSources(answer);

  assert.deepEqual(sources.map((source) => source.title), ['UniProt EGFR']);
});

test('wiki markdown keeps cited overflow papers', () => {
  const answer = buildAnswer();
  const markdown = buildResearchWikiMarkdown(answer);

  assert.match(markdown, /6\. Paper 6/);
  assert.match(markdown, /## 来源/);
  assert.match(markdown, /UniProt EGFR/);
});
