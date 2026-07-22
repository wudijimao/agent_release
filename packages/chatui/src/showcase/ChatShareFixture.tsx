import { useState } from 'react';
import { ChatShareControls } from '..';

const fixtureLink = 'http://localhost:5174/share/chat-fixture?sid=showcase';

export function ChatShareFixture() {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [event, setEvent] = useState('等待分享交互');

  return (
    <main className="flex h-screen flex-col bg-white">
      <div className="flex flex-1 items-center justify-center text-sm text-secondaryText">
        对话选择区域
      </div>
      <ChatShareControls
        selectedCount={3}
        shareLink={fixtureLink}
        modalOpen={modalOpen}
        copied={copied}
        onCancel={() => setEvent('取消分享')}
        onCreateLink={() => {
          setCopied(false);
          setModalOpen(true);
          setEvent('创建分享链接');
        }}
        onCloseModal={() => {
          setModalOpen(false);
          setEvent('关闭分享弹窗');
        }}
        onCopyLink={() => {
          setCopied(true);
          setEvent('复制分享链接');
        }}
      />
      <output className="sr-only" aria-live="polite">{event}</output>
    </main>
  );
}
