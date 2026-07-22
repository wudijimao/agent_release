export interface ManagedChatAttachment {
    id: string;
    name: string;
    mimeType: string;
    fileSize: number;
    contextEnabled: boolean;
}
export interface ChatAttachmentManagerProps {
    attachments: readonly ManagedChatAttachment[];
    loading?: boolean;
    error?: string;
    pendingAttachmentId?: string;
    onClose?(): void;
    onToggleContext(attachment: ManagedChatAttachment, enabled: boolean): void;
    onDelete(attachment: ManagedChatAttachment): void;
}
export interface ChatAttachmentManagerTriggerProps {
    active?: boolean;
    count?: number;
    onClick(): void;
}
export declare function ChatAttachmentManagerTrigger({ active, count, onClick, }: ChatAttachmentManagerTriggerProps): import("react").JSX.Element;
export declare function ChatAttachmentManager({ attachments, loading, error, pendingAttachmentId, onClose, onToggleContext, onDelete, }: ChatAttachmentManagerProps): import("react").JSX.Element;
//# sourceMappingURL=ChatAttachmentManager.d.ts.map