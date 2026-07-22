import { useState } from 'react';
import { ChatTimelineNavigation, type ChatTimelineItem } from '..';

const timelineItems: ChatTimelineItem[] = Array.from({ length: 12 }, (_, index) => ({
  messageIndex: index * 2,
  preview: `第 ${index + 1} 个科研问题：验证时间线导航的展开、滚动与定位行为`,
}));

export function ChatTimelineFixture() {
  const [activeMessageIndex, setActiveMessageIndex] = useState(timelineItems[5].messageIndex);

  return (
    <main className="relative h-screen overflow-hidden bg-white">
      <div className="mx-auto flex h-full max-w-[800px] flex-col gap-8 overflow-hidden px-8 py-16">
        {timelineItems.map((item) => (
          <section key={item.messageIndex} className="rounded-xl border border-lineSubtle p-5">
            <h2 className="text-sm font-semibold text-primaryText">{item.preview}</h2>
            <p className="mt-2 text-sm text-secondaryText">用于固定验证时间线定位与高保真视觉。</p>
          </section>
        ))}
      </div>
      <ChatTimelineNavigation
        items={timelineItems}
        activeMessageIndex={activeMessageIndex}
        initiallyExpanded
        onSelect={setActiveMessageIndex}
      />
      <output className="sr-only" aria-live="polite">已定位消息：{activeMessageIndex}</output>
    </main>
  );
}
