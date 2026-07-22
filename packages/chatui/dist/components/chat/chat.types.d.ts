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
export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    attachments?: ChatAttachment[];
    references?: ChatReference[];
}
//# sourceMappingURL=chat.types.d.ts.map