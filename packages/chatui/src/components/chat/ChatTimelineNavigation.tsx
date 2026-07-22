import { useCallback, useEffect, useRef, useState } from 'react';

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

export function ChatTimelineNavigation({
  items,
  activeMessageIndex,
  initiallyExpanded = false,
  onSelect,
}: ChatTimelineNavigationProps) {
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const [hoveredMessageIndex, setHoveredMessageIndex] = useState<number | null>(null);
  const [scrollThumbHeight, setScrollThumbHeight] = useState(0);
  const [scrollThumbTop, setScrollThumbTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);
  const markerRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const scrollHideTimerRef = useRef<number | null>(null);

  const updateScrollThumb = useCallback(() => {
    const container = listRef.current;
    if (!container) {
      setScrollThumbHeight(0);
      setScrollThumbTop(0);
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollHeight <= clientHeight || clientHeight <= 0) {
      setScrollThumbHeight(0);
      setScrollThumbTop(0);
      return;
    }

    const nextThumbHeight = Math.max((clientHeight / scrollHeight) * clientHeight, 24);
    const maxTravel = clientHeight - nextThumbHeight;
    const progress = scrollTop / Math.max(scrollHeight - clientHeight, 1);
    setScrollThumbHeight(nextThumbHeight);
    setScrollThumbTop(maxTravel * progress);
  }, []);

  const handleScroll = useCallback(() => {
    updateScrollThumb();
    setScrolling(true);
    if (scrollHideTimerRef.current !== null) window.clearTimeout(scrollHideTimerRef.current);
    scrollHideTimerRef.current = window.setTimeout(() => setScrolling(false), 650);
  }, [updateScrollThumb]);

  const handleMouseLeave = () => {
    if (scrollHideTimerRef.current !== null) {
      window.clearTimeout(scrollHideTimerRef.current);
      scrollHideTimerRef.current = null;
    }
    setExpanded(false);
    setHoveredMessageIndex(null);
    setScrolling(false);
  };

  useEffect(() => {
    if (!expanded) return;
    const frameId = window.requestAnimationFrame(updateScrollThumb);
    return () => window.cancelAnimationFrame(frameId);
  }, [expanded, items.length, updateScrollThumb]);

  useEffect(() => {
    const container = listRef.current;
    const activeMarker = markerRefs.current[activeMessageIndex];
    if (!container || !activeMarker) return;

    const viewTop = container.scrollTop;
    const viewBottom = viewTop + container.clientHeight;
    const markerTop = activeMarker.offsetTop;
    const markerBottom = markerTop + activeMarker.offsetHeight;
    const padding = 16;

    if (markerTop < viewTop + padding) {
      container.scrollTo({ top: Math.max(markerTop - padding, 0), behavior: 'auto' });
    } else if (markerBottom > viewBottom - padding) {
      container.scrollTo({
        top: Math.max(markerBottom - container.clientHeight + padding, 0),
        behavior: 'auto',
      });
    }
  }, [activeMessageIndex, items.length]);

  useEffect(() => () => {
    if (scrollHideTimerRef.current !== null) window.clearTimeout(scrollHideTimerRef.current);
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="pointer-events-none absolute right-6 top-1/2 z-[5] -translate-y-1/2">
      <div
        className="pointer-events-auto relative"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={listRef}
          onScroll={handleScroll}
          className={`ml-auto max-h-[332px] overflow-y-auto rounded-lg border [scrollbar-width:none] transition-[width,padding,background-color,border-color,box-shadow] duration-200 [&::-webkit-scrollbar]:hidden ${
            expanded
              ? 'w-[244px] border-chatTimelineBorder bg-white px-4 py-4 shadow-chatTimeline'
              : 'w-[12px] border-transparent bg-transparent px-0 py-0 shadow-none'
          }`}
        >
          <div className="relative">
            <div className="flex flex-col items-end gap-5">
              {items.map((item) => {
                const active = item.messageIndex === activeMessageIndex;
                const hovered = hoveredMessageIndex === item.messageIndex;
                return (
                  <button
                    key={item.messageIndex}
                    ref={(element) => {
                      markerRefs.current[item.messageIndex] = element;
                    }}
                    type="button"
                    onClick={() => onSelect(item.messageIndex)}
                    onMouseEnter={() => setHoveredMessageIndex(item.messageIndex)}
                    onMouseLeave={() => setHoveredMessageIndex(null)}
                    className={`flex h-4 items-center justify-end transition-[width,gap] duration-200 ${
                      expanded ? 'w-full gap-2' : 'w-[12px] gap-0'
                    }`}
                    style={{ fontFamily: '"Inter", "PingFang SC", "Microsoft YaHei", sans-serif' }}
                    aria-label={`定位到第 ${item.messageIndex + 1} 条用户消息`}
                    title={item.preview}
                  >
                    <span
                      className={`min-w-0 overflow-hidden whitespace-nowrap text-right text-sm leading-4 transition-[max-width,opacity,color] duration-200 ${
                        expanded ? 'max-w-[190px] opacity-100' : 'max-w-0 opacity-0'
                      } ${active ? 'text-primary' : hovered ? 'text-chatTimelineTextHover' : 'text-chatTimelineText'}`}
                    >
                      {item.preview}
                    </span>
                    <span
                      className={`shrink-0 rounded-full transition-colors duration-200 ${
                        active
                          ? 'h-[4px] w-[12px] bg-primary'
                          : hovered
                            ? 'h-[2px] w-[8px] bg-chatTimelineTextHover'
                            : 'h-[2px] w-[8px] bg-chatTimelineMarker'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {expanded && scrollThumbHeight > 0 && (
              <div
                className={`pointer-events-none absolute right-[-2px] top-0 w-[4px] rounded-full bg-chatTimelineScrollbar transition-opacity duration-200 ${
                  scrolling ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ height: scrollThumbHeight, transform: `translateY(${scrollThumbTop}px)` }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
