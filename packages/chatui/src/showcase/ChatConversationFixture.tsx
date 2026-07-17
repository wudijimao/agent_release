import { useEffect, useRef, useState } from 'react';
import {
  AppShell,
  ChatConversationViewport,
  InputArea,
  type AppShellChat,
  type ChatMessage,
  type InputSendPayload,
} from '..';

const logoUrl = new URL('../../../../src/assets/deptrace-logo.png', import.meta.url).href;

const initialChats: AppShellChat[] = [
  { id: 'chat-fixture', title: 'CRISPR 实验条件分析', date: '刚刚', count: 2 },
  { id: 'chat-history', title: '文献汇总整理', date: '今天 10:25', count: 3 },
];

const initialMessages: ChatMessage[] = [
  {
    role: 'user',
    content: '请帮我梳理 CRISPR 敲除实验中需要优先控制的变量。',
  },
  {
    role: 'assistant',
    content: [
      '可以先从以下四组变量着手：',
      '',
      '1. **gRNA 设计**：优先评估靶向效率、脱靶风险和转录本覆盖范围。',
      '2. **递送条件**：固定细胞密度、转染试剂比例与孵育时间。',
      '3. **检测窗口**：分别设置早期编辑效率和后期表型检测时间点。',
      '4. **对照组**：保留阴性 gRNA、mock 和阳性编辑对照。',
    ].join('\n'),
  },
];

const fixtureReply = '收到。我会按 gRNA、递送、检测窗口和对照组四个维度继续整理。';

export function ChatConversationFixture() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [currentPath, setCurrentPath] = useState('/chat/chat-fixture');
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const replyTimerRef = useRef<number>();

  useEffect(() => () => {
    if (replyTimerRef.current) window.clearTimeout(replyTimerRef.current);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (payload: InputSendPayload) => {
    if (isTyping || !payload.content.trim()) return;

    setMessages((current) => [
      ...current,
      {
        role: 'user',
        content: payload.content.trim(),
        attachments: payload.attachments,
        references: payload.references,
      },
    ]);
    setIsTyping(true);

    replyTimerRef.current = window.setTimeout(() => {
      setMessages((current) => [...current, { role: 'assistant', content: fixtureReply }]);
      setIsTyping(false);
    }, 700);
  };

  const handleCancel = () => {
    if (replyTimerRef.current) {
      window.clearTimeout(replyTimerRef.current);
      replyTimerRef.current = undefined;
    }
    setIsTyping(false);
  };

  return (
    <AppShell
      currentPath={currentPath}
      projects={[]}
      initialChats={initialChats}
      logoUrl={logoUrl}
      user={{ name: '研究员', avatarText: '研' }}
      onNavigate={setCurrentPath}
      onLogout={() => undefined}
    >
      <div className="flex h-full w-full flex-col bg-white">
        <header className="z-10 flex h-16 shrink-0 items-center justify-between bg-homeHeaderSurface px-6 backdrop-blur-sm">
          <h1 className="truncate text-sm font-medium text-primaryText">CRISPR 实验条件分析</h1>
        </header>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="relative min-h-0 flex-1">
            <ChatConversationViewport
              messages={messages}
              isTyping={isTyping}
              statusPhase="thinking"
              scrollContainerRef={scrollContainerRef}
              getMessageKey={(_message, index) => `fixture-message-${index}`}
            />
          </div>

          <div className="mx-auto w-full max-w-[840px] shrink-0 bg-gradient-to-t from-white via-white to-transparent px-6 pb-6 pt-2">
            <InputArea
              onSend={handleSend}
              onCancel={handleCancel}
              disabled={isTyping}
              isStreaming={isTyping}
            />
            <div className="mt-3 text-center text-xs text-tertiaryText">
              AI 内容可能有误差，请在实验前核实。
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
