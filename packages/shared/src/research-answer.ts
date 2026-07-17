export const RESEARCH_ANSWER_STATUSES = [
  'success',
  'no_relevant_result',
  'needs_clarification',
] as const;

export const RESEARCH_RELEVANCES = ['high', 'medium', 'low'] as const;

export const RESEARCH_SOURCE_TYPES = ['paper', 'database', 'wiki', 'web'] as const;

export const RESEARCH_RESPONSE_MODES = [
  'literature_search_results',
  'evidence_synthesis',
  'needs_clarification',
  'no_relevant_result',
  'not_searched',
] as const;

export const RESEARCH_RESULT_QUALITIES = ['strong', 'usable', 'weak', 'failed'] as const;

export const RESEARCH_TOOL_PROVENANCE_STATUSES = ['completed', 'failed', 'skipped'] as const;

export const RESEARCH_PRIMARY_ACTIONS = [
  'summarize_papers',
  'import_to_wiki',
  'add_to_evidence_board',
  'refine_query',
] as const;

export type ResearchAnswerStatus = (typeof RESEARCH_ANSWER_STATUSES)[number];
export type ResearchRelevance = (typeof RESEARCH_RELEVANCES)[number];
export type ResearchSourceType = (typeof RESEARCH_SOURCE_TYPES)[number];
export type ResearchResponseMode = (typeof RESEARCH_RESPONSE_MODES)[number];
export type ResearchResultQuality = (typeof RESEARCH_RESULT_QUALITIES)[number];
export type ResearchToolProvenanceStatus = (typeof RESEARCH_TOOL_PROVENANCE_STATUSES)[number];
export type ResearchPrimaryAction = (typeof RESEARCH_PRIMARY_ACTIONS)[number];

export interface ResearchPaper {
  id: number;
  title: string;
  authors?: string;
  journal?: string;
  year?: string;
  database?: string;
  doi?: string;
  pmid?: string;
  url?: string;
  relevance: ResearchRelevance;
  relevanceReason: string;
}

export interface ResearchSource {
  id: number;
  title: string;
  type: ResearchSourceType;
  url?: string;
  relevance: ResearchRelevance;
}

export interface ResearchKeyFinding {
  text: string;
  citations: number[];
}

export interface ResearchAnswer {
  status: ResearchAnswerStatus;
  title: string;
  summary: string[];
  keyFindings: ResearchKeyFinding[];
  bodyMarkdown: string;
  papers: ResearchPaper[];
  limitations: string[];
  sources: ResearchSource[];
  suggestedWikiTitle?: string;
  meta?: {
    candidateSourceCount?: number;
    retainedSourceCount?: number;
    generatedAt?: string;
    query?: string;
    formatter?: 'deterministic' | 'llm_json';
  };
}

export interface ResearchToolProvenance {
  toolName: string;
  query?: string;
  database?: string;
  status: ResearchToolProvenanceStatus;
  resultCount?: number;
  errorMessage?: string;
}

export interface ResearchPreliminaryInsight {
  text: string;
  paperIds: number[];
}

export interface ResearchRenderPaper extends ResearchPaper {
  publishedAt?: string;
  database: string;
  initialRelevance: ResearchRelevance;
  relevanceSignals: string[];
}

export interface ResearchRenderPayload {
  responseMode: ResearchResponseMode;
  resultQuality: ResearchResultQuality;
  title: string;
  query: string;
  searches: ResearchToolProvenance[];
  summary: string[];
  preliminaryInsights: ResearchPreliminaryInsight[];
  keyFindings: ResearchKeyFinding[];
  bodyMarkdown: string;
  papers: ResearchRenderPaper[];
  limitations: string[];
  sources: ResearchSource[];
  suggestedWikiTitle?: string;
  renderWarnings?: string[];
  primaryAction?: ResearchPrimaryAction;
}

export interface ResearchAnswerStructuredPayload {
  kind: 'research_answer';
  data: ResearchAnswer;
}

export interface ResearchRenderStructuredPayload {
  kind: 'research_render';
  data: ResearchRenderPayload;
}

export type ResearchStructuredPayload = ResearchAnswerStructuredPayload | ResearchRenderStructuredPayload;

export type ResearchWikiImportScope = 'summary' | 'full' | 'full_with_sources';

export interface ResearchWikiMarkdownOptions {
  scope?: ResearchWikiImportScope;
  title?: string;
  query?: string;
  selectedPaperIds?: number[];
  selectedSourceIds?: number[];
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function asString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback;
}

function asOptionalString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value : undefined;
}

function asNumber(value: unknown, fallback = 0) {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function asStringArray(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    : [];
}

function asNumberArray(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is number => typeof item === 'number' && Number.isFinite(item))
    : [];
}

function asEnumValue<T extends readonly string[]>(
  value: unknown,
  allowed: T,
  fallback: T[number],
): T[number] {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value)
    ? (value as T[number])
    : fallback;
}

function asOptionalEnumValue<T extends readonly string[]>(value: unknown, allowed: T): T[number] | undefined {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value)
    ? (value as T[number])
    : undefined;
}

function asObjectArray<T>(value: unknown, mapper: (item: unknown, index: number) => T): T[] {
  return Array.isArray(value) ? value.map(mapper) : [];
}

function compactLines(lines: Array<string | undefined | null | false>) {
  return lines
    .filter((line): line is string => typeof line === 'string')
    .map((line) => line.trimEnd())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function formatCitationIds(citations: number[], allowedIds?: Set<number>) {
  const ids = citations.filter((id) => Number.isFinite(id) && (!allowedIds || allowedIds.has(id)));
  return Array.from(new Set(ids))
    .map((id) => `[${id}]`)
    .join(' ');
}

export function normalizeResearchPaper(value: unknown, index = 0): ResearchPaper {
  const record = asRecord(value) || {};
  return {
    id: asNumber(record.id, index + 1),
    title: asString(record.title, 'Untitled paper'),
    authors: asOptionalString(record.authors),
    journal: asOptionalString(record.journal),
    year: asOptionalString(record.year),
    database: asOptionalString(record.database),
    doi: asOptionalString(record.doi),
    pmid: asOptionalString(record.pmid),
    url: asOptionalString(record.url),
    relevance: asEnumValue(record.relevance, RESEARCH_RELEVANCES, 'low'),
    relevanceReason: asString(record.relevanceReason),
  };
}

export function normalizeResearchSource(value: unknown, index = 0): ResearchSource {
  const record = asRecord(value) || {};
  return {
    id: asNumber(record.id, index + 1),
    title: asString(record.title, 'Untitled source'),
    type: asEnumValue(record.type, RESEARCH_SOURCE_TYPES, 'web'),
    url: asOptionalString(record.url),
    relevance: asEnumValue(record.relevance, RESEARCH_RELEVANCES, 'low'),
  };
}

export function normalizeResearchKeyFinding(value: unknown): ResearchKeyFinding {
  const record = asRecord(value) || {};
  return {
    text: asString(record.text),
    citations: asNumberArray(record.citations),
  };
}

export function normalizeResearchToolProvenance(value: unknown): ResearchToolProvenance {
  const record = asRecord(value) || {};
  const toolName = asString(record.toolName || record.name, 'unknown').trim() || 'unknown';

  return {
    toolName,
    query: asOptionalString(record.query),
    database: asOptionalString(record.database),
    status: asEnumValue(record.status, RESEARCH_TOOL_PROVENANCE_STATUSES, 'completed'),
    resultCount: typeof record.resultCount === 'number' ? record.resultCount : undefined,
    errorMessage: asOptionalString(record.errorMessage),
  };
}

export function normalizeResearchRenderPaper(value: unknown, index = 0): ResearchRenderPaper {
  const record = asRecord(value) || {};
  const base = normalizeResearchPaper(value, index);
  const database = asString(record.database, base.database || 'Unknown').trim() || 'Unknown';

  return {
    ...base,
    database,
    publishedAt: asOptionalString(record.publishedAt),
    initialRelevance: asEnumValue(record.initialRelevance, RESEARCH_RELEVANCES, base.relevance),
    relevanceSignals: asStringArray(record.relevanceSignals),
  };
}

export function normalizeResearchPreliminaryInsight(
  value: unknown,
  allowedPaperIds?: Set<number>,
): ResearchPreliminaryInsight {
  const record = asRecord(value) || {};
  const paperIds = asNumberArray(record.paperIds)
    .filter((id) => !allowedPaperIds || allowedPaperIds.has(id));

  return {
    text: asString(record.text).trim(),
    paperIds: Array.from(new Set(paperIds)),
  };
}

export function normalizeResearchAnswer(value: unknown): ResearchAnswer | null {
  const record = asRecord(value);
  if (!record) return null;

  const meta = asRecord(record.meta) || {};
  const title = asString(record.title, '研究报告').trim() || '研究报告';

  return {
    status: asEnumValue(record.status, RESEARCH_ANSWER_STATUSES, 'success'),
    title,
    summary: asStringArray(record.summary),
    keyFindings: asObjectArray(record.keyFindings, normalizeResearchKeyFinding).filter(
      (item) => item.text.trim().length > 0,
    ),
    bodyMarkdown: asString(record.bodyMarkdown),
    papers: asObjectArray(record.papers, normalizeResearchPaper),
    limitations: asStringArray(record.limitations),
    sources: asObjectArray(record.sources, normalizeResearchSource),
    suggestedWikiTitle: asOptionalString(record.suggestedWikiTitle),
    meta: {
      candidateSourceCount:
        typeof meta.candidateSourceCount === 'number' ? meta.candidateSourceCount : undefined,
      retainedSourceCount:
        typeof meta.retainedSourceCount === 'number' ? meta.retainedSourceCount : undefined,
      generatedAt: asOptionalString(meta.generatedAt),
      query: asOptionalString(meta.query),
      formatter:
        meta.formatter === 'deterministic' || meta.formatter === 'llm_json'
          ? meta.formatter
          : undefined,
    },
  };
}

export function normalizeResearchRenderPayload(value: unknown): ResearchRenderPayload | null {
  const record = asRecord(value);
  if (!record) return null;

  const responseMode = asEnumValue(record.responseMode, RESEARCH_RESPONSE_MODES, 'not_searched');
  const normalizedResultQuality = asEnumValue(
    record.resultQuality,
    RESEARCH_RESULT_QUALITIES,
    responseMode === 'not_searched' ? 'failed' : 'weak',
  );
  const resultQuality = responseMode === 'not_searched' ? 'failed' : normalizedResultQuality;
  const title = asString(record.title, '科研检索结果').trim() || '科研检索结果';
  const papers = asObjectArray(record.papers, normalizeResearchRenderPaper);
  const visiblePaperIds = new Set(
    papers
      .filter((paper) => isVisibleResearchRelevance(paper.relevance))
      .map((paper) => paper.id),
  );
  const preliminaryInsights = asObjectArray(
    record.preliminaryInsights,
    (item) => normalizeResearchPreliminaryInsight(item, visiblePaperIds),
  ).filter((item) => item.text.length > 0 && item.paperIds.length > 0);

  return {
    responseMode,
    resultQuality,
    title,
    query: asString(record.query),
    searches: asObjectArray(record.searches, normalizeResearchToolProvenance),
    summary: asStringArray(record.summary),
    preliminaryInsights:
      resultQuality === 'strong'
        ? preliminaryInsights.slice(0, 3)
        : resultQuality === 'usable'
          ? preliminaryInsights.slice(0, 1)
          : [],
    keyFindings: asObjectArray(record.keyFindings, normalizeResearchKeyFinding).filter(
      (item) => item.text.trim().length > 0,
    ),
    bodyMarkdown: asString(record.bodyMarkdown),
    papers,
    limitations: asStringArray(record.limitations),
    sources: asObjectArray(record.sources, normalizeResearchSource),
    suggestedWikiTitle: asOptionalString(record.suggestedWikiTitle),
    renderWarnings: asStringArray(record.renderWarnings),
    primaryAction: asOptionalEnumValue(record.primaryAction, RESEARCH_PRIMARY_ACTIONS),
  };
}

export function normalizeResearchStructuredPayload(value: unknown): ResearchStructuredPayload | null {
  const record = asRecord(value);
  if (!record) return null;

  if (record.kind === 'research_render') {
    const data = normalizeResearchRenderPayload(record.data);
    return data ? { kind: 'research_render', data } : null;
  }

  if (record.kind !== 'research_answer') return null;

  const dataRecord = asRecord(record.data);
  if (dataRecord?.responseMode) {
    const data = normalizeResearchRenderPayload(record.data);
    return data ? { kind: 'research_render', data } : null;
  }

  const data = normalizeResearchAnswer(record.data);
  return data ? { kind: 'research_answer', data } : null;
}

export function isVisibleResearchRelevance(relevance: ResearchRelevance) {
  return relevance === 'high' || relevance === 'medium';
}

export function getVisibleResearchPapers(answer: ResearchAnswer, limit = 5) {
  return answer.papers.filter((paper) => isVisibleResearchRelevance(paper.relevance)).slice(0, limit);
}

function collectCitationIds(findings: ResearchKeyFinding[]) {
  const ids = new Set<number>();
  for (const finding of findings) {
    for (const id of finding.citations) {
      if (Number.isFinite(id)) ids.add(id);
    }
  }
  return ids;
}

export function getCitationAwareResearchPapers(answer: ResearchAnswer, limit = 5) {
  const visible = answer.papers.filter((paper) => isVisibleResearchRelevance(paper.relevance));
  const citedIds = collectCitationIds(answer.keyFindings);
  const selected = visible.slice(0, limit);
  const selectedIds = new Set(selected.map((paper) => paper.id));
  const citedOverflow = visible.filter((paper) => citedIds.has(paper.id) && !selectedIds.has(paper.id));

  return [...selected, ...citedOverflow];
}

function normalizeReferenceKey(value?: string) {
  return (value || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function getReferenceKey(value: { title?: string; url?: string }) {
  return normalizeReferenceKey(value.url) || normalizeReferenceKey(value.title);
}

function getSupplementalResearchSources(sources: ResearchSource[], visiblePapers: ResearchPaper[]) {
  const paperKeys = new Set(visiblePapers.map(getReferenceKey).filter(Boolean));
  const seen = new Set<string>();

  return sources
    .filter((source) => isVisibleResearchRelevance(source.relevance))
    .filter((source) => {
      const key = getReferenceKey(source);
      if (key && paperKeys.has(key)) return false;

      const dedupeKey = `${source.type}:${key || source.id}`;
      if (seen.has(dedupeKey)) return false;
      seen.add(dedupeKey);

      return true;
    });
}

export function getVisibleResearchSources(answer: ResearchAnswer) {
  return getSupplementalResearchSources(
    answer.sources,
    getVisibleResearchPapers(answer, Number.MAX_SAFE_INTEGER),
  );
}

function formatPaperMarkdown(paper: ResearchPaper) {
  const meta = [paper.authors, paper.journal, paper.year, paper.database].filter(Boolean).join(' · ');
  const ids = [paper.pmid ? `PMID: ${paper.pmid}` : '', paper.doi ? `DOI: ${paper.doi}` : '']
    .filter(Boolean)
    .join(' · ');
  return compactLines([
    `${paper.id}. ${paper.title}`,
    meta ? `   - ${meta}` : '',
    ids ? `   - ${ids}` : '',
    paper.relevanceReason ? `   - 相关性：${paper.relevanceReason}` : '',
    paper.url ? `   - ${paper.url}` : '',
  ]);
}

function formatSourceMarkdown(source: ResearchSource) {
  return compactLines([
    `[${source.id}] ${source.title}`,
    source.url ? `    ${source.url}` : '',
  ]);
}

export function buildResearchWikiMarkdown(
  answer: ResearchAnswer,
  options: ResearchWikiMarkdownOptions = {},
) {
  const scope = options.scope || 'full_with_sources';
  const title = (options.title || answer.suggestedWikiTitle || answer.title).trim() || '研究笔记';
  const query = options.query || answer.meta?.query || '';
  const visiblePapers = getCitationAwareResearchPapers(answer).filter(
    (paper) => !options.selectedPaperIds || options.selectedPaperIds.includes(paper.id),
  );
  const visibleSources = getVisibleResearchSources(answer).filter(
    (source) => !options.selectedSourceIds || options.selectedSourceIds.includes(source.id),
  );
  const allowedCitationIds =
    scope === 'full_with_sources'
      ? new Set([...visiblePapers.map((paper) => paper.id), ...visibleSources.map((source) => source.id)])
      : new Set<number>();

  const summaryLines = answer.summary.map((item) => `- ${item}`);
  const findingLines = answer.keyFindings.map((finding, index) => {
    const citationText = formatCitationIds(finding.citations, allowedCitationIds);
    return `${index + 1}. ${finding.text}${citationText ? ` ${citationText}` : ''}`;
  });

  if (scope === 'summary') {
    return compactLines([
      `# ${title}`,
      query ? `\n## 研究问题\n${query}` : '',
      summaryLines.length ? `\n## 结论摘要\n${summaryLines.join('\n')}` : '',
    ]);
  }

  return compactLines([
    `# ${title}`,
    query ? `\n## 研究问题\n${query}` : '',
    summaryLines.length ? `\n## 结论摘要\n${summaryLines.join('\n')}` : '',
    findingLines.length ? `\n## 关键发现\n${findingLines.join('\n')}` : '',
    answer.bodyMarkdown.trim() ? `\n## 分析说明\n${answer.bodyMarkdown.trim()}` : '',
    scope === 'full_with_sources' && visiblePapers.length
      ? `\n## 相关文献\n${visiblePapers.map(formatPaperMarkdown).join('\n\n')}`
      : '',
    answer.limitations.length ? `\n## 局限性\n${answer.limitations.map((item) => `- ${item}`).join('\n')}` : '',
    scope === 'full_with_sources' && visibleSources.length
      ? `\n## 来源\n${visibleSources.map(formatSourceMarkdown).join('\n\n')}`
      : '',
  ]);
}
