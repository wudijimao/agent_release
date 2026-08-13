export type AssistantFeedback = 'like' | 'dislike';

export interface ChatAttachment {
  id: string;
  name: string;
  mimeType: string;
  previewUrl?: string;
  status?: 'uploading' | 'ready' | 'error';
  errorMessage?: string;
  /** 原始文件仅在用户本地选择后存在，组件库不会自行上传。 */
  file?: File;
}

export interface ChatReference {
  id: string;
  type: 'skill' | 'doc';
  label: string;
  /** 宿主提供的稳定资源标识；UI 不解释也不请求该资源。 */
  sourceId?: string;
}

export interface MiraDraftCardViewModel {
  actionKey: string;
  title: string;
  /** 已保存文档的稳定标识；组件库只负责透传，不读取文档。 */
  documentId?: string;
  targetLabel?: string;
  summary?: string;
  status: 'waiting' | 'saving' | 'saved' | 'error';
  errorMessage?: string;
  previewable?: boolean;
  actionable?: boolean;
}

export interface ChatDisplayCardLink {
  label: string;
  href: string;
}

export interface ChatDisplayCardAction {
  id: string;
  label: string;
  tone?: 'primary' | 'secondary' | 'danger';
}

export interface ChatDisplayCardViewModel {
  kind: 'clarification' | 'confirmation' | 'approval' | 'result' | 'warning' | 'blocked' | 'info';
  title: string;
  summary?: string;
  items?: string[];
  links?: ChatDisplayCardLink[];
  statusLabel?: string;
  actionKey?: string;
  actions?: ChatDisplayCardAction[];
}

export interface ChatMessage {
  id?: string;
  role: 'user' | 'assistant';
  content: string;
  reasoning?: string;
  attachments?: ChatAttachment[];
  references?: ChatReference[];
  miraDraft?: MiraDraftCardViewModel;
  displayCard?: ChatDisplayCardViewModel;
}
