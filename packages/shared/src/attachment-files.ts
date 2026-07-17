export type AttachmentFileKind = 'txt' | 'md' | 'csv' | 'image' | 'pdf' | 'office';

export interface AttachmentFileLike {
  name: string;
  type?: string | null;
  size: number;
}

export interface AttachmentUploadItemLike {
  size: number;
  status?: string;
}

export const ATTACHMENT_TEXT_MAX_BYTES = 2 * 1024 * 1024;
export const ATTACHMENT_IMAGE_MAX_BYTES = 10 * 1024 * 1024;
export const ATTACHMENT_DOCUMENT_MAX_BYTES = 100 * 1024 * 1024;
export const ATTACHMENT_TOTAL_MAX_BYTES = ATTACHMENT_DOCUMENT_MAX_BYTES;
export const ATTACHMENT_MAX_ITEMS = 5;

interface AttachmentFileRule {
  kind: AttachmentFileKind;
  extensions: readonly string[];
  acceptFragments: readonly string[];
  matchesMimeType: (mimeType: string) => boolean;
  maxBytes: number;
}

const OFFICE_MIME_TYPES = [
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
] as const;
export const ATTACHMENT_UNSUPPORTED_OFFICE_EXTENSIONS = new Set([
  '.doc',
  '.ppt',
  '.xls',
  '.docm',
  '.pptm',
  '.xlsm',
]);

export const ATTACHMENT_FILE_RULES: Record<AttachmentFileKind, AttachmentFileRule> = {
  txt: {
    kind: 'txt',
    extensions: ['.txt'],
    acceptFragments: ['.txt', 'text/plain'],
    matchesMimeType: (mimeType) => mimeType === 'application/octet-stream' || mimeType.startsWith('text/'),
    maxBytes: ATTACHMENT_TEXT_MAX_BYTES,
  },
  md: {
    kind: 'md',
    extensions: ['.md'],
    acceptFragments: ['.md', 'text/markdown', 'text/x-markdown', 'text/plain'],
    matchesMimeType: (mimeType) => mimeType === 'application/octet-stream' || mimeType.startsWith('text/'),
    maxBytes: ATTACHMENT_TEXT_MAX_BYTES,
  },
  csv: {
    kind: 'csv',
    extensions: ['.csv'],
    acceptFragments: ['.csv', 'text/csv', 'application/csv', 'application/vnd.ms-excel'],
    matchesMimeType: (mimeType) =>
      [
        'text/csv',
        'application/csv',
        'application/vnd.ms-excel',
        'text/plain',
        'application/octet-stream',
      ].includes(mimeType),
    maxBytes: ATTACHMENT_DOCUMENT_MAX_BYTES,
  },
  image: {
    kind: 'image',
    extensions: ['.jpg', '.jpeg', '.png', '.webp'],
    acceptFragments: ['.jpg', '.jpeg', '.png', '.webp', 'image/jpeg', 'image/png', 'image/webp'],
    matchesMimeType: (mimeType) =>
      ['image/jpeg', 'image/png', 'image/webp', 'application/octet-stream'].includes(mimeType),
    maxBytes: ATTACHMENT_IMAGE_MAX_BYTES,
  },
  pdf: {
    kind: 'pdf',
    extensions: ['.pdf'],
    acceptFragments: ['.pdf', 'application/pdf'],
    matchesMimeType: (mimeType) => ['application/pdf', 'application/octet-stream'].includes(mimeType),
    maxBytes: ATTACHMENT_DOCUMENT_MAX_BYTES,
  },
  office: {
    kind: 'office',
    extensions: ['.docx', '.pptx', '.xlsx'],
    acceptFragments: [
      '.docx',
      '.pptx',
      '.xlsx',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    matchesMimeType: (mimeType) => [...OFFICE_MIME_TYPES, 'application/octet-stream'].includes(mimeType),
    maxBytes: ATTACHMENT_DOCUMENT_MAX_BYTES,
  },
};

const DEFAULT_ATTACHMENT_FILE_KINDS: readonly AttachmentFileKind[] = [
  'txt',
  'md',
  'csv',
  'image',
  'pdf',
  'office',
] as const;

export const ATTACHMENT_IMAGE_ACCEPT_FRAGMENTS = ['image/*'] as const;
export const ATTACHMENT_WIKI2_AI_RECOGNITION_EXTRA_ACCEPT_FRAGMENTS = [
  'image/*',
  '.gb',
  '.gbk',
  '.genbank',
  '.fasta',
  '.fa',
  '.fna',
  '.faa',
  '.dna',
] as const;
export const ATTACHMENT_FUZZY_IMPORT_ACCEPT_FRAGMENTS = ['.tsv', 'text/*', 'image/*'] as const;

function normalizeMimeType(mimeType?: string | null) {
  return (mimeType || 'application/octet-stream').trim().toLowerCase().split(';')[0] || 'application/octet-stream';
}

function getExtension(fileName: string) {
  const lower = fileName.trim().toLowerCase();
  const dotIndex = lower.lastIndexOf('.');
  return dotIndex >= 0 ? lower.slice(dotIndex) : '';
}

export function isUnsupportedOfficeFileName(fileName: string) {
  return ATTACHMENT_UNSUPPORTED_OFFICE_EXTENSIONS.has(getExtension(fileName));
}

function uniqueFragments(fragments: readonly string[]) {
  return Array.from(
    new Set(
      fragments
        .map((fragment) => fragment.trim())
        .filter(Boolean),
    ),
  );
}

export function getAttachmentUploadLimitLabel(maxBytes: number) {
  return `${Math.floor(maxBytes / 1024 / 1024)}MB`;
}

export function inferAttachmentFileKind(fileName: string, mimeType?: string | null): AttachmentFileKind | null {
  const normalizedMime = normalizeMimeType(mimeType);
  const extension = getExtension(fileName);

  for (const kind of DEFAULT_ATTACHMENT_FILE_KINDS) {
    const rule = ATTACHMENT_FILE_RULES[kind];
    if (!rule.extensions.includes(extension)) continue;
    if (!rule.matchesMimeType(normalizedMime)) continue;
    return kind;
  }

  return null;
}

export function getAttachmentFileSizeError(kind: AttachmentFileKind, fileSize: number) {
  const maxBytes = ATTACHMENT_FILE_RULES[kind].maxBytes;
  if (fileSize <= maxBytes) return null;

  if (kind === 'txt' || kind === 'md') {
    return 'TXT / Markdown 文件不能超过 2MB。';
  }

  if (kind === 'image') {
    return '图片不能超过 10MB。';
  }

  return '文档不能超过 100MB。';
}

export function buildAttachmentAcceptString(options?: {
  kinds?: readonly AttachmentFileKind[];
  extraFragments?: readonly string[];
}) {
  const kinds = options?.kinds || DEFAULT_ATTACHMENT_FILE_KINDS;
  const fragments = kinds.flatMap((kind) => ATTACHMENT_FILE_RULES[kind].acceptFragments);
  return uniqueFragments([...(fragments || []), ...(options?.extraFragments || [])]).join(',');
}

export function getAttachmentUploadBatchError(
  currentAttachments: readonly AttachmentUploadItemLike[],
  nextFileSize: number,
  options?: {
    maxAttachments?: number;
    maxTotalBytes?: number;
    ignoreStatuses?: readonly string[];
    maxAttachmentsMessage?: string;
    maxTotalBytesMessage?: string;
  },
) {
  const ignoredStatuses = new Set(options?.ignoreStatuses || ['deleting']);
  const activeAttachments = currentAttachments.filter(
    (attachment) => !attachment.status || !ignoredStatuses.has(attachment.status),
  );

  if (
    typeof options?.maxAttachments === 'number' &&
    activeAttachments.length >= options.maxAttachments
  ) {
    return options.maxAttachmentsMessage || `每个会话最多上传 ${options.maxAttachments} 个附件。`;
  }

  if (typeof options?.maxTotalBytes === 'number') {
    const totalBytes = activeAttachments.reduce((sum, attachment) => sum + attachment.size, 0) + nextFileSize;
    if (totalBytes > options.maxTotalBytes) {
      return (
        options.maxTotalBytesMessage ||
        `附件总大小不能超过 ${getAttachmentUploadLimitLabel(options.maxTotalBytes)}。`
      );
    }
  }

  return '';
}
