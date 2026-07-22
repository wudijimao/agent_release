export interface ChatTimelineItem {
    messageIndex: number;
    preview: string;
}
export interface ChatTimelineNavigationProps {
    items: readonly ChatTimelineItem[];
    activeMessageIndex: number;
    initiallyExpanded?: boolean;
    onSelect(messageIndex: number): void;
}
export declare function ChatTimelineNavigation({ items, activeMessageIndex, initiallyExpanded, onSelect, }: ChatTimelineNavigationProps): import("react").JSX.Element | null;
//# sourceMappingURL=ChatTimelineNavigation.d.ts.map