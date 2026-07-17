export const PRESENTATION_REPORT_TYPES = [
  'group_meeting',
  'project_weekly',
  'experiment_result',
  'decision_report',
] as const;

export const PRESENTATION_JOB_STATUSES = [
  'drafting',
  'needs_review',
  'exporting',
  'exported',
  'failed',
  'cancelled',
] as const;

export const PRESENTATION_SLIDE_TYPES = [
  'cover',
  'agenda',
  'section',
  'summary',
  'image_text',
  'chart',
  'comparison',
  'table',
  'decision',
  'next_steps',
  'appendix',
] as const;

export const PRESENTATION_SOURCE_TYPES = [
  'mira',
  'tracking',
  'analysis',
  'evidence',
  'future_task',
  'attachment',
  'structural',
  'cloning',
  'calculator',
] as const;

export const PRESENTATION_ASSET_KINDS = ['image', 'table', 'chart', 'file'] as const;

export const PRESENTATION_EXPORT_STATUSES = ['queued', 'running', 'completed', 'failed'] as const;

export type PresentationReportType = (typeof PRESENTATION_REPORT_TYPES)[number];
export type PresentationJobStatus = (typeof PRESENTATION_JOB_STATUSES)[number];
export type PresentationSlideType = (typeof PRESENTATION_SLIDE_TYPES)[number];
export type PresentationSourceType = (typeof PRESENTATION_SOURCE_TYPES)[number];
export type PresentationAssetKind = (typeof PRESENTATION_ASSET_KINDS)[number];
export type PresentationExportStatus = (typeof PRESENTATION_EXPORT_STATUSES)[number];
export type PresentationDemandAction =
  | 'create_presentation'
  | 'patch_existing_draft'
  | 'export_existing_draft'
  | 'archive_existing_export'
  | 'not_presentation';
export type PresentationThemePreference =
  | 'scientific_default'
  | 'simple_white'
  | 'dark_meeting'
  | 'lab_brand';
export type PresentationLayoutPreset =
  | 'evidence_first'
  | 'result_first'
  | 'decision_first'
  | 'weekly_update';
export type PresentationSourceFamily =
  | 'mira'
  | 'tracking'
  | 'analysis'
  | 'evidence'
  | 'future_task'
  | 'attachment';

export interface PresentationSourceRef {
  type: PresentationSourceType | string;
  id: string;
  title: string;
  summary?: string;
  href?: string;
  sourcePath?: string;
  sourceObjectId?: string;
  permission: 'allowed' | 'blocked';
  reason?: string;
}

export type PresentationBackgroundKind = 'solid' | 'subtle_texture' | 'image_wash' | 'brand_band';

export interface PresentationBackgroundToken {
  kind: PresentationBackgroundKind;
  color?: string;
  assetId?: string;
  opacity?: number;
  bandPosition?: 'left' | 'top' | 'bottom';
}

export interface PresentationSpacingTokens {
  pageMargin: number;
  sectionGap: number;
  columnGap: number;
  blockGap: number;
  captionGap: number;
}

export interface PresentationShapeTokens {
  borderRadius: number;
  borderWidth: number;
  shadowLevel: 'none' | 'subtle' | 'medium';
}

export interface PresentationChartTokens {
  palette: string[];
  axisColor: string;
  gridColor: string;
  errorBarColor: string;
  significanceColor: string;
}

export interface PresentationFooterTokens {
  showSource: boolean;
  showPageNumber: boolean;
  showConfidentialLabel: boolean;
  sourceStyle?: 'compact' | 'expanded';
  labBrandStyle?: 'none' | 'wordmark' | 'logo';
}

export interface PresentationVisualWarning {
  id: string;
  slideId: string;
  severity: 'info' | 'warning' | 'blocking';
  code:
    | 'TEXT_OVERFLOW'
    | 'IMAGE_MISSING_CAPTION'
    | 'IMAGE_MAY_CROP_LABEL'
    | 'CHART_TOO_SMALL'
    | 'CHART_MISSING_TAKEAWAY'
    | 'TABLE_TOO_WIDE'
    | 'SOURCE_MISSING'
    | 'CONTRAST_LOW'
    | 'FOOTER_OVERLAP';
  message: string;
  suggestedAction?: 'split_slide' | 'summarize_table' | 'add_caption' | 'switch_layout' | 'review_crop';
}

export interface PresentationSourceCandidate {
  ref: PresentationSourceRef;
  score: number;
  matchReason: string;
}

export interface PresentationSourceQueryPlan {
  provider: string;
  query: string;
  timeWindow?: {
    start?: string;
    end?: string;
  };
  projectHint?: string;
  limit?: number;
  priority: number;
}

export interface PresentationDemandIntent {
  action: PresentationDemandAction;
  confidence: number;
  reportType?: PresentationReportType;
  targetDraftId?: string;
  missingSlots: Array<'project' | 'time_window' | 'source_scope' | 'draft_reference'>;
  rationale: string;
}

export interface PresentationSourceIntent {
  sourceFamilies: PresentationSourceFamily[];
  explicitRefs: PresentationSourceRef[];
  queryPlan: PresentationSourceQueryPlan[];
  missingSlots: Array<'project' | 'time_window' | 'specific_artifact' | 'source_confirmation'>;
  selectionPolicy: 'explicit_first' | 'context_first' | 'recent_project_first' | 'ask_user';
  rationale: string;
}

export interface PresentationStyleIntent {
  reportType: PresentationReportType;
  audience?: 'pi' | 'lab_meeting' | 'project_team' | 'external_partner';
  slideCountTarget?: number;
  density: 'brief' | 'standard' | 'detailed';
  tone: 'concise' | 'formal' | 'discussion';
  focusSections: string[];
  emphasis: string[];
  themePreference?: PresentationThemePreference;
  layoutPreset?: PresentationLayoutPreset;
  rationale: string;
}

export interface PresentationIntentBundle {
  demand: PresentationDemandIntent;
  source: PresentationSourceIntent;
  style: PresentationStyleIntent;
}

export interface PresentationSourceRecord {
  ref: PresentationSourceRef;
  contentText?: string;
  markdown?: string;
  metadata?: Record<string, unknown>;
  assets?: PresentationSlideAsset[];
}

export interface PresentationSourceQuery {
  labId: string;
  userId?: string | null;
  sessionId?: string | null;
  query: string;
  reportType?: PresentationReportType;
  sourceTypes?: string[];
  queryPlan?: PresentationSourceQueryPlan[];
  limit?: number;
  timeWindow?: {
    start?: string;
    end?: string;
  };
}

export interface PresentationSourceScope {
  query: string;
  sourceRefs: PresentationSourceRef[];
  blockedSources: PresentationSourceRef[];
  generatedAt: string;
  sourceFamilies?: PresentationSourceFamily[];
  queryPlan?: PresentationSourceQueryPlan[];
  selectionPolicy?: PresentationSourceIntent['selectionPolicy'];
  missingSlots?: PresentationSourceIntent['missingSlots'];
  rationale?: string;
  traceId?: string;
}

export interface ReportTheme {
  id: string;
  name: string;
  scope: 'system' | 'lab' | 'project' | 'user';
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface?: string;
    text: string;
    muted: string;
    border?: string;
    risk?: string;
    success?: string;
    warning?: string;
  };
  fonts: {
    heading: string;
    body: string;
    mono?: string;
    fallbackChinese?: string;
  };
  logoAssetId?: string;
  chartPalette: string[];
  spacing?: PresentationSpacingTokens;
  shape?: PresentationShapeTokens;
  chart?: PresentationChartTokens;
  background?: {
    cover: PresentationBackgroundToken;
    content: PresentationBackgroundToken;
    section: PresentationBackgroundToken;
  };
  footer: PresentationFooterTokens;
}

export interface PresentationSlideAsset {
  kind: PresentationAssetKind;
  assetId: string;
  sourceRef: string;
  title?: string;
  caption?: string;
  cropHint?: { x: number; y: number; width: number; height: number };
  fit?: 'contain' | 'cover' | 'fill';
  renderMode?: 'original' | 'cropped' | 'thumbnail';
  metadata?: Record<string, unknown>;
}

export interface SlideDraft {
  id: string;
  slideType: PresentationSlideType;
  title: string;
  bullets?: string[];
  body?: string;
  assets?: PresentationSlideAsset[];
  sourceRefs: PresentationSourceRef[];
  speakerNotes?: string;
  layoutHint?: string;
  riskFlags?: string[];
}

export interface DraftValidationState {
  status: 'valid' | 'warning' | 'blocked';
  warnings: string[];
  visualWarnings?: PresentationVisualWarning[];
  missingItems: string[];
  overflowSlideIds: string[];
}

export interface PresentationDraft {
  id: string;
  jobId: string;
  title: string;
  subtitle?: string;
  reportType: PresentationReportType;
  theme: ReportTheme;
  slides: SlideDraft[];
  sourceSummary: PresentationSourceRef[];
  validation: DraftValidationState;
  revision: number;
  updatedAt: string;
  intentSnapshot?: PresentationIntentBundle;
}

export interface PresentationJob {
  id: string;
  labId: string;
  userId?: string | null;
  status: PresentationJobStatus;
  reportType: PresentationReportType;
  themeId: string;
  sourceScope: PresentationSourceScope;
  draftId?: string;
  exportArtifactId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PresentationExport {
  id: string;
  jobId: string;
  draftId: string;
  revision: number;
  artifactId?: string;
  status: PresentationExportStatus;
  errorCode?: string;
  errorMessage?: string;
  createdAt: string;
  completedAt?: string;
}

export interface PresentationDraftCardPayload {
  jobId: string;
  draftId: string;
  reportType: PresentationReportType;
  title: string;
  slideCount: number;
  sourceCount: number;
  blockedSourceCount: number;
  status: PresentationJobStatus;
  validation: DraftValidationState;
  themeId: string;
  revision: number;
  sidePanelState: 'open' | 'closed';
  intentSnapshot?: PresentationIntentBundle;
  exportArtifactId?: string;
  exportId?: string;
  exportDownloadUrl?: string;
  previewSlides: Array<{
    id: string;
    slideType: PresentationSlideType;
    title: string;
    bullets: string[];
    sourceTitles: string[];
    assetCount: number;
    riskFlags: string[];
  }>;
  actions: Array<{
    id: 'open_draft' | 'adjust_sources' | 'confirm_export' | 'cancel' | 'save_to_mira';
    label: string;
    disabled?: boolean;
  }>;
}

export function createDefaultReportTheme(): ReportTheme {
  return {
    id: 'system-scientific-default',
    name: '默认科研',
    scope: 'system',
    colors: {
      primary: '#00685f',
      secondary: '#334155',
      accent: '#8a6f2a',
      background: '#faf9f7',
      surface: '#ffffff',
      text: '#111827',
      muted: '#6b7280',
      border: '#d8e1de',
      risk: '#dc2626',
      success: '#16a34a',
      warning: '#d97706',
    },
    fonts: {
      heading: 'Aptos Display',
      body: 'Aptos',
      mono: 'Cascadia Mono',
      fallbackChinese: 'Microsoft YaHei',
    },
    chartPalette: ['#00685f', '#3b82f6', '#8a6f2a', '#dc2626', '#7c3aed'],
    spacing: {
      pageMargin: 0.72,
      sectionGap: 0.32,
      columnGap: 0.38,
      blockGap: 0.22,
      captionGap: 0.12,
    },
    shape: {
      borderRadius: 0.08,
      borderWidth: 0.75,
      shadowLevel: 'none',
    },
    chart: {
      palette: ['#00685f', '#3b82f6', '#8a6f2a', '#dc2626', '#7c3aed'],
      axisColor: '#334155',
      gridColor: '#d8e1de',
      errorBarColor: '#334155',
      significanceColor: '#dc2626',
    },
    background: {
      cover: { kind: 'brand_band', color: '#faf9f7', bandPosition: 'left', opacity: 1 },
      content: { kind: 'solid', color: '#faf9f7' },
      section: { kind: 'brand_band', color: '#faf9f7', bandPosition: 'left', opacity: 1 },
    },
    footer: {
      showSource: true,
      showPageNumber: true,
      showConfidentialLabel: true,
      sourceStyle: 'compact',
      labBrandStyle: 'wordmark',
    },
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function stringValue(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback;
}

function stringArray(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    : [];
}

function numberValue(value: unknown, fallback = 0) {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function enumValue<T extends readonly string[]>(value: unknown, values: T, fallback: T[number]): T[number] {
  return typeof value === 'string' && (values as readonly string[]).includes(value)
    ? (value as T[number])
    : fallback;
}

export function normalizePresentationSourceRef(value: unknown): PresentationSourceRef | null {
  if (!isRecord(value)) return null;
  const id = stringValue(value.id).trim();
  const title = stringValue(value.title).trim();
  if (!id || !title) return null;
  const permission = enumValue(value.permission, ['allowed', 'blocked'] as const, 'allowed');
  return {
    type: stringValue(value.type, 'mira'),
    id,
    title,
    ...(stringValue(value.summary).trim() ? { summary: stringValue(value.summary).trim() } : {}),
    ...(stringValue(value.href).trim() ? { href: stringValue(value.href).trim() } : {}),
    ...(stringValue(value.sourcePath).trim() ? { sourcePath: stringValue(value.sourcePath).trim() } : {}),
    ...(stringValue(value.sourceObjectId).trim() ? { sourceObjectId: stringValue(value.sourceObjectId).trim() } : {}),
    permission,
    ...(stringValue(value.reason).trim() ? { reason: stringValue(value.reason).trim() } : {}),
  };
}

export function normalizeDraftValidationState(value: unknown): DraftValidationState {
  const record = isRecord(value) ? value : {};
  const visualWarnings = normalizePresentationVisualWarnings(record.visualWarnings);
  return {
    status: enumValue(record.status, ['valid', 'warning', 'blocked'] as const, 'valid'),
    warnings: stringArray(record.warnings),
    ...(visualWarnings.length ? { visualWarnings } : {}),
    missingItems: stringArray(record.missingItems),
    overflowSlideIds: stringArray(record.overflowSlideIds),
  };
}

function normalizePresentationVisualWarnings(value: unknown): PresentationVisualWarning[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!isRecord(item)) return null;
      const id = stringValue(item.id).trim();
      const slideId = stringValue(item.slideId).trim();
      const message = stringValue(item.message).trim();
      if (!id || !slideId || !message) return null;
      const suggestedActionValues = ['split_slide', 'summarize_table', 'add_caption', 'switch_layout', 'review_crop'] as const;
      const suggestedAction =
        typeof item.suggestedAction === 'string' && (suggestedActionValues as readonly string[]).includes(item.suggestedAction)
          ? (item.suggestedAction as PresentationVisualWarning['suggestedAction'])
          : undefined;
      return {
        id,
        slideId,
        severity: enumValue(item.severity, ['info', 'warning', 'blocking'] as const, 'warning'),
        code: enumValue(
          item.code,
          [
            'TEXT_OVERFLOW',
            'IMAGE_MISSING_CAPTION',
            'IMAGE_MAY_CROP_LABEL',
            'CHART_TOO_SMALL',
            'CHART_MISSING_TAKEAWAY',
            'TABLE_TOO_WIDE',
            'SOURCE_MISSING',
            'CONTRAST_LOW',
            'FOOTER_OVERLAP',
          ] as const,
          'TEXT_OVERFLOW',
        ),
        message,
        ...(suggestedAction ? { suggestedAction } : {}),
      };
    })
    .filter((item): item is PresentationVisualWarning => Boolean(item));
}

export function normalizePresentationDraftCardPayload(value: unknown): PresentationDraftCardPayload | null {
  if (!isRecord(value)) return null;
  const jobId = stringValue(value.jobId).trim();
  const draftId = stringValue(value.draftId).trim();
  const title = stringValue(value.title).trim();
  if (!jobId || !draftId || !title) return null;
  const actions = Array.isArray(value.actions)
    ? value.actions
        .map((item) => {
          if (!isRecord(item)) return null;
          const id = enumValue(
            item.id,
            ['open_draft', 'adjust_sources', 'confirm_export', 'cancel', 'save_to_mira'] as const,
            'open_draft',
          );
          const label = stringValue(item.label).trim();
          if (!label) return null;
          return { id, label, ...(item.disabled === true ? { disabled: true } : {}) };
        })
        .filter((item): item is PresentationDraftCardPayload['actions'][number] => Boolean(item))
    : [];
  return {
    jobId,
    draftId,
    reportType: enumValue(value.reportType, PRESENTATION_REPORT_TYPES, 'group_meeting'),
    title,
    slideCount: Math.max(0, Math.trunc(typeof value.slideCount === 'number' ? value.slideCount : 0)),
    sourceCount: Math.max(0, Math.trunc(typeof value.sourceCount === 'number' ? value.sourceCount : 0)),
    blockedSourceCount: Math.max(0, Math.trunc(typeof value.blockedSourceCount === 'number' ? value.blockedSourceCount : 0)),
    status: enumValue(value.status, PRESENTATION_JOB_STATUSES, 'needs_review'),
    validation: normalizeDraftValidationState(value.validation),
    themeId: stringValue(value.themeId, 'system-scientific-default'),
    revision: Math.max(0, Math.trunc(typeof value.revision === 'number' ? value.revision : 0)),
    sidePanelState: enumValue(value.sidePanelState, ['open', 'closed'] as const, 'open'),
    ...(isRecord(value.intentSnapshot) ? { intentSnapshot: value.intentSnapshot as unknown as PresentationIntentBundle } : {}),
    ...(stringValue(value.exportArtifactId).trim() ? { exportArtifactId: stringValue(value.exportArtifactId).trim() } : {}),
    ...(stringValue(value.exportId).trim() ? { exportId: stringValue(value.exportId).trim() } : {}),
    ...(stringValue(value.exportDownloadUrl).trim() ? { exportDownloadUrl: stringValue(value.exportDownloadUrl).trim() } : {}),
    previewSlides: Array.isArray(value.previewSlides)
      ? value.previewSlides
          .map((item) => {
            if (!isRecord(item)) return null;
            const slideId = stringValue(item.id).trim();
            const slideTitle = stringValue(item.title).trim();
            if (!slideId || !slideTitle) return null;
            return {
              id: slideId,
              slideType: enumValue(item.slideType, PRESENTATION_SLIDE_TYPES, 'summary'),
              title: slideTitle,
              bullets: stringArray(item.bullets).slice(0, 6),
              sourceTitles: stringArray(item.sourceTitles).slice(0, 6),
              assetCount: Math.max(0, Math.trunc(numberValue(item.assetCount))),
              riskFlags: stringArray(item.riskFlags),
            };
          })
          .filter((item): item is PresentationDraftCardPayload['previewSlides'][number] => Boolean(item))
      : [],
    actions,
  };
}
