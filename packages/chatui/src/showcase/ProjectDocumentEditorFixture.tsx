import React, { useState } from 'react';

import { ProjectDocumentEditor } from '../screens/projects';
import type { ProjectDocumentAttachmentViewModel } from '../screens/projects';

export function ProjectDocumentEditorFixture() {
  const [title, setTitle] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [attachments, setAttachments] = useState<ProjectDocumentAttachmentViewModel[]>([
    {
      id: 'attachment-1',
      name: '实验数据.csv',
      mimeType: 'text/csv',
      sizeLabel: '18 KB',
      status: 'ready' as const,
      statusLabel: '内容识别完成',
    },
  ]);
  const [closed, setClosed] = useState(false);

  if (closed) {
    return (
      <main className="flex h-screen items-center justify-center bg-white">
        <button
          type="button"
          className="rounded-lg border border-lineSubtle px-4 py-2 text-sm text-primaryText"
          onClick={() => setClosed(false)}
        >
          重新打开编辑器
        </button>
      </main>
    );
  }

  return (
    <div className="h-screen">
      <ProjectDocumentEditor
        projectName="肿瘤免疫项目"
        title={title}
        initialMarkdown=""
        createdByName="王平"
        updatedByName="王平"
        updatedAt="2026.07.28 14:30"
        index={{
          status: 'indexed',
          statusLabel: '索引已完成',
          detail: '已生成 2 个索引片段，覆盖 2 个内容块。',
        }}
        attachments={attachments}
        attachmentAccept=".txt,.md,.csv,.jpg,.jpeg,.png,.webp,.pdf,.docx,.pptx,.xlsx"
        onTitleChange={setTitle}
        onMarkdownChange={setMarkdown}
        onUploadAttachments={(files) => {
          setAttachments((current) => [
            ...current,
            ...files.map((file, index) => ({
              id: `fixture-${Date.now()}-${index}`,
              name: file.name,
              mimeType: file.type,
              sizeLabel: `${Math.max(1, Math.round(file.size / 1024))} KB`,
              status: 'processing' as const,
              statusLabel: '正在识别内容',
            })),
          ]);
        }}
        onDeleteAttachment={(attachmentId) => {
          setAttachments((current) =>
            current.filter((attachment) => attachment.id !== attachmentId),
          );
        }}
        onSave={() => undefined}
        onClose={() => setClosed(true)}
      />
    </div>
  );
}
