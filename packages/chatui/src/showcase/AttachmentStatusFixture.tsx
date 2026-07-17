import { MessageItem, type ChatMessage } from '..';

const uploadingMessage: ChatMessage = {
  role: 'user',
  content: '请分析这份实验记录。',
  attachments: [
    {
      id: 'fixture-uploading',
      name: '正在解析的实验记录.pdf',
      mimeType: 'application/pdf',
      status: 'uploading',
    },
  ],
};

const failedMessage: ChatMessage = {
  role: 'user',
  content: '请分析这份失败附件。',
  attachments: [
    {
      id: 'fixture-error',
      name: '无法读取的附件.csv',
      mimeType: 'text/csv',
      status: 'error',
      errorMessage: '附件上传失败，请重试',
    },
  ],
};

export function AttachmentStatusFixture() {
  return (
    <main className="min-h-screen bg-bgLight px-8 py-12">
      <div className="mx-auto max-w-[960px] space-y-8 rounded-2xl border border-borderGray bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-primaryText">附件上传状态</h1>
        <MessageItem msg={uploadingMessage} />
        <MessageItem msg={failedMessage} />
      </div>
    </main>
  );
}
