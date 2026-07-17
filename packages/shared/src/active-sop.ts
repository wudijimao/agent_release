export type ActiveSopTone = 'green' | 'neutral';

export type ActiveSopRuntimeEngine = 'pyodide';
export type ActiveSopRuntimeLanguage = 'python';

export type ActiveSopInputType = 'number' | 'text' | 'select' | 'boolean';
export type ActiveSopChartType = 'line' | 'bar' | 'scatter';

export type ActiveSopRequestStatus = 'idle' | 'generating' | 'error';
export type ActiveSopRunStatus = 'idle' | 'running' | 'done' | 'error';

export interface ActiveSopOption {
  label: string;
  value: string;
}

export interface ActiveSopInputDefinition {
  key: string;
  label: string;
  type: ActiveSopInputType;
  unit?: string;
  default?: number | string | boolean;
  required?: boolean;
  placeholder?: string;
  description?: string;
  options?: ActiveSopOption[];
}

export interface ActiveSopOutputDefinition {
  key: string;
  label: string;
  type: 'number' | 'text' | 'boolean';
  unit?: string;
  description?: string;
}

export interface ActiveSopChartDefinition {
  key: string;
  label: string;
  type: ActiveSopChartType;
  xLabel?: string;
  yLabel?: string;
}

export interface ActiveSopChartResult {
  key: string;
  type: ActiveSopChartType;
  x?: Array<number | string>;
  y?: number[];
  points?: Array<{ x: number; y: number; label?: string }>;
}

export interface ChartPoint {
  x: number | string;
  y: number;
  label?: string;
}

export interface ChartSeries {
  key: string;
  label: string;
  color?: string;
  points: ChartPoint[];
}

export interface ActiveSopDataset {
  key: string;
  label: string;
  defaultChartType?: ActiveSopChartType;
  xLabel?: string;
  yLabel?: string;
  series: ChartSeries[];
}

export interface ActiveSopRunResult {
  fields?: Record<string, number | string | boolean | null>;
  datasets?: ActiveSopDataset[];
  charts?: ActiveSopChartResult[];
  notes?: string[];
}

export interface PlayRequestPayload {
  promptText: string;
  status: ActiveSopRequestStatus;
  errorMessage: string;
}

export interface ActiveSopPayload {
  title: string;
  description: string;
  tone: ActiveSopTone;
  collapsed: boolean;
  promptText: string;
  runtimeEngine: ActiveSopRuntimeEngine;
  runtimeLanguage: ActiveSopRuntimeLanguage;
  entryFunction: string;
  codeSource: string;
  inputs: ActiveSopInputDefinition[];
  outputs: ActiveSopOutputDefinition[];
  charts: ActiveSopChartDefinition[];
  draftInputs: Record<string, unknown>;
  lastRunInputs: Record<string, unknown>;
  lastRunResult: ActiveSopRunResult;
  lastRunStatus: ActiveSopRunStatus;
  lastRunErrorMessage: string;
  lastRunAt: string;
  lastRunBy: string;
}

export interface ActiveSopAgentDefinition {
  type: 'activeSop';
  version: 1;
  title: string;
  description: string;
  appearance?: {
    tone?: ActiveSopTone;
  };
  runtime?: {
    engine?: ActiveSopRuntimeEngine;
    language?: ActiveSopRuntimeLanguage;
    entry?: string;
  };
  inputs: ActiveSopInputDefinition[];
  outputs?: ActiveSopOutputDefinition[];
  charts?: ActiveSopChartDefinition[];
  code: {
    source: string;
  };
}

export type PlayCalculatorTemplateCategory =
  | 'solution'
  | 'molecular'
  | 'cell'
  | 'protein'
  | 'analysis';

export interface PlayCalculatorTemplate {
  id: string;
  name: string;
  description: string;
  category: PlayCalculatorTemplateCategory;
  aliases: string[];
  defaultPromptText: string;
  activeSopDefinition: ActiveSopAgentDefinition;
  linkedWikiTemplates: string[];
  safetyNotes: string[];
}

export type ExperimentCalculatorSource =
  | 'official_static'
  | 'user_custom'
  | 'ai_generated';

export type ExperimentCalculatorVisibility =
  | 'official'
  | 'private'
  | 'workspace';

export type ExperimentCalculatorStatus =
  | 'draft'
  | 'validated'
  | 'submitted'
  | 'approved'
  | 'rejected'
  | 'archived';

export interface ExperimentCalculatorValidationReport {
  ok: boolean;
  errors: string[];
  warnings: string[];
}

export interface ExperimentCalculatorTemplate {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: PlayCalculatorTemplateCategory;
  aliases: string[];
  source: ExperimentCalculatorSource;
  visibility: ExperimentCalculatorVisibility;
  status: ExperimentCalculatorStatus;
  version: number;
  readOnly: boolean;
  defaultPromptText?: string;
  linkedWikiTemplates?: string[];
  safetyNotes: string[];
  activeSopDefinition: ActiveSopAgentDefinition;
  validation?: ExperimentCalculatorValidationReport;
  ownerUserId?: string | null;
  createdAt?: string;
  updatedAt?: string;
  submittedAt?: string | null;
  approvedAt?: string | null;
}

export function createDefaultPlayRequestPayload(
  overrides: Partial<PlayRequestPayload> = {},
): PlayRequestPayload {
  return {
    promptText: '',
    status: 'idle',
    errorMessage: '',
    ...overrides,
  };
}

export function createDefaultActiveSopPayload(
  overrides: Partial<ActiveSopPayload> = {},
): ActiveSopPayload {
  return {
    title: '',
    description: '',
    tone: 'green',
    collapsed: false,
    promptText: '',
    runtimeEngine: 'pyodide',
    runtimeLanguage: 'python',
    entryFunction: 'run',
    codeSource: '',
    inputs: [],
    outputs: [],
    charts: [],
    draftInputs: {},
    lastRunInputs: {},
    lastRunResult: {},
    lastRunStatus: 'idle',
    lastRunErrorMessage: '',
    lastRunAt: '',
    lastRunBy: '',
    ...overrides,
  };
}

export function activeSopPayloadFromAgentDefinition(
  definition: ActiveSopAgentDefinition,
  overrides: Partial<ActiveSopPayload> = {},
): ActiveSopPayload {
  return createDefaultActiveSopPayload({
    title: definition.title,
    description: definition.description,
    tone: definition.appearance?.tone || 'green',
    runtimeEngine: definition.runtime?.engine || 'pyodide',
    runtimeLanguage: definition.runtime?.language || 'python',
    entryFunction: definition.runtime?.entry || 'run',
    codeSource: definition.code.source,
    inputs: definition.inputs || [],
    outputs: definition.outputs || [],
    charts: definition.charts || [],
    ...overrides,
  });
}

export function legacyChartResultToDataset(chart: ActiveSopChartResult): ActiveSopDataset {
  const key = chart.key || 'dataset';
  const label = chart.key || 'Dataset';

  if (chart.type === 'scatter') {
    return {
      key,
      label,
      defaultChartType: 'scatter',
      series: [
        {
          key: `${key}_series`,
          label,
          points: Array.isArray(chart.points)
            ? chart.points
                .filter(
                  (point): point is { x: number; y: number; label?: string } =>
                    !!point && typeof point.x === 'number' && typeof point.y === 'number',
                )
                .map((point) => ({
                  x: point.x,
                  y: point.y,
                  label: point.label,
                }))
            : [],
        },
      ],
    };
  }

  const xs = Array.isArray(chart.x) ? chart.x : [];
  const ys = Array.isArray(chart.y) ? chart.y : [];
  const length = Math.min(xs.length, ys.length);

  return {
    key,
    label,
    defaultChartType: chart.type,
    series: [
      {
        key: `${key}_series`,
        label,
        points: Array.from({ length }, (_, index) => ({
          x: xs[index],
          y: typeof ys[index] === 'number' ? ys[index] : Number(ys[index] || 0),
        })).filter((point) => Number.isFinite(point.y)),
      },
    ],
  };
}

export function getActiveSopDatasets(result?: ActiveSopRunResult | null): ActiveSopDataset[] {
  if (!result) return [];
  if (Array.isArray(result.datasets) && result.datasets.length > 0) {
    return result.datasets
      .map((dataset) => ({
        ...dataset,
        key: dataset.key || 'dataset',
        label: dataset.label || dataset.key || 'Dataset',
        series: Array.isArray(dataset.series)
          ? dataset.series
              .map((series) => ({
                ...series,
                key: series.key || 'series',
                label: series.label || series.key || 'Series',
                points: Array.isArray(series.points)
                  ? series.points.filter(
                      (point): point is ChartPoint =>
                        !!point &&
                        (typeof point.x === 'number' || typeof point.x === 'string') &&
                        typeof point.y === 'number' &&
                        Number.isFinite(point.y),
                    )
                  : [],
              }))
              .filter((series) => series.points.length > 0)
          : [],
      }))
      .filter((dataset) => dataset.series.length > 0);
  }

  if (!Array.isArray(result.charts) || result.charts.length === 0) {
    return [];
  }

  return result.charts.map(legacyChartResultToDataset).filter((dataset) => dataset.series.length > 0);
}
