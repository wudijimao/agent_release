export const HISTORICAL_ARCHIVE_BATCH_STATUSES = [
  'uploaded',
  'scanning',
  'scan_ready',
  'queued',
  'processing',
  'review_ready',
  'publishing',
  'completed',
  'paused',
  'canceled',
  'error',
] as const;

export type HistoricalArchiveBatchStatus = (typeof HISTORICAL_ARCHIVE_BATCH_STATUSES)[number];

export const HISTORICAL_ARCHIVE_ITEM_STATUSES = [
  'pending',
  'unsupported',
  'duplicate',
  'queued',
  'recognizing',
  'draft_ready',
  'publish_ready',
  'published',
  'skipped',
  'retryable_error',
  'fatal_error',
] as const;

export type HistoricalArchiveItemStatus = (typeof HISTORICAL_ARCHIVE_ITEM_STATUSES)[number];

export const HISTORICAL_ARCHIVE_ITEM_CONVERT_STATUSES = [
  'pending',
  'processing',
  'done',
  'error',
] as const;

export type HistoricalArchiveItemConvertStatus =
  (typeof HISTORICAL_ARCHIVE_ITEM_CONVERT_STATUSES)[number];

export const HISTORICAL_ARCHIVE_ITEM_STAGES = [
  'pending',
  'scanning',
  'queued',
  'fetching',
  'submitting',
  'processing',
  'extracting',
  'ocr_images',
  'assembling',
  'storing',
  'draft_ready',
  'publishing',
  'published',
  'skipped',
  'done',
  'error',
] as const;

export type HistoricalArchiveItemStage = (typeof HISTORICAL_ARCHIVE_ITEM_STAGES)[number];

export const HISTORICAL_ARCHIVE_ERROR_STAGES = [
  'upload',
  'scan',
  'unzip',
  'classify',
  'recognition',
  'draft',
  'publish',
] as const;

export type HistoricalArchiveErrorStage = (typeof HISTORICAL_ARCHIVE_ERROR_STAGES)[number];

export const HISTORICAL_ARCHIVE_RECOGNITION_ENGINES = [
  'auto',
  'docling',
  'llm',
] as const;

export type HistoricalArchiveRecognitionEngine =
  (typeof HISTORICAL_ARCHIVE_RECOGNITION_ENGINES)[number];

export const HISTORICAL_ARCHIVE_RECOGNITION_RESULT_ENGINES = [
  'docling',
  'llm',
  'office',
  'text',
] as const;

export type HistoricalArchiveRecognitionResultEngine =
  (typeof HISTORICAL_ARCHIVE_RECOGNITION_RESULT_ENGINES)[number];

export interface HistoricalArchiveBatchSummary {
  id: string;
  status: HistoricalArchiveBatchStatus;
  archiveFileName: string;
  targetFolderId?: string | null;
  totalFiles: number;
  supportedFiles: number;
  unsupportedFiles: number;
  duplicateFiles: number;
  failedFiles: number;
  scanProgress: number;
  recognitionProgress: number;
  publishProgress: number;
  errorSummary?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface HistoricalArchiveItemSummary {
  id: string;
  batchId: string;
  sourcePath: string;
  normalizedPath: string;
  fileName: string;
  mimeType: string;
  fileSize?: number | null;
  sha256?: string | null;
  objectKey?: string | null;
  storageUrl?: string | null;
  status: HistoricalArchiveItemStatus;
  scanReason?: string | null;
  convertStatus: HistoricalArchiveItemConvertStatus;
  convertStage: HistoricalArchiveItemStage;
  convertProgress: number;
  convertError?: string | null;
  draftTitle?: string | null;
  targetParentId?: string | null;
  publishedNodeId?: string | null;
  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface HistoricalArchiveItemDetail extends HistoricalArchiveItemSummary {
  draftMarkdownContent?: string | null;
  draftExtractedText?: string | null;
  draftLayout?: Record<string, unknown> | null;
  metadata?: Record<string, unknown> | null;
}

export interface HistoricalArchiveBatchDetail extends HistoricalArchiveBatchSummary {
  archiveSize?: number | null;
  archiveSha256?: string | null;
  preserveTree: boolean;
  defaultTemplateId?: string | null;
  recognitionEngine: HistoricalArchiveRecognitionEngine;
  startedAt?: string | null;
  finishedAt?: string | null;
}

export interface HistoricalArchiveBatchResponse {
  batch: HistoricalArchiveBatchDetail;
}

export interface HistoricalArchiveItemsResponse {
  items: HistoricalArchiveItemSummary[];
  total: number;
}

export interface HistoricalArchiveBatchDetailProgressSummary {
  totalFiles: number;
  supportedFiles: number;
  unsupportedFiles: number;
  duplicateFiles: number;
  failedFiles: number;
  queuedItems: number;
  recognizingItems: number;
  draftReadyItems: number;
  publishedItems: number;
  retryableErrorItems: number;
  fatalErrorItems: number;
  scanProgress: number;
  recognitionProgress: number;
  publishProgress: number;
}

export interface HistoricalArchiveBatchDetailError {
  itemId: string;
  fileName: string;
  sourcePath: string;
  status: Extract<HistoricalArchiveItemStatus, 'retryable_error' | 'fatal_error'>;
  stage: HistoricalArchiveItemStage;
  message: string;
  retryable: boolean;
}

export interface HistoricalArchiveBatchDetailResponse {
  batch: HistoricalArchiveBatchDetail;
  items: HistoricalArchiveItemSummary[];
  totalItems: number;
  currentStage: HistoricalArchiveBatchStatus;
  summary: HistoricalArchiveBatchDetailProgressSummary;
  errors: HistoricalArchiveBatchDetailError[];
}

export interface HistoricalArchiveItemDetailResponse {
  item: HistoricalArchiveItemDetail;
}

export interface HistoricalArchiveItemUpdateResponse {
  item: HistoricalArchiveItemDetail;
  batch: HistoricalArchiveBatchDetailResponse | null;
}
