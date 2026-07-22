export interface ChatShareControlsProps {
    selectedCount: number;
    shareLink: string;
    modalOpen: boolean;
    copied?: boolean;
    contentMaxWidth?: number | string;
    onCancel(): void;
    onCreateLink(): void;
    onCloseModal(): void;
    onCopyLink(): void;
}
export declare function ChatShareControls({ selectedCount, shareLink, modalOpen, copied, contentMaxWidth, onCancel, onCreateLink, onCloseModal, onCopyLink, }: ChatShareControlsProps): import("react").JSX.Element;
//# sourceMappingURL=ChatShareControls.d.ts.map