import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { BaseEmpty } from '../../components/common';
import { ProjectDocumentAttachments } from './ProjectDocumentAttachments';
import type { ProjectDocumentAttachmentUploadViewModel } from './ProjectDocumentAttachments';
import { ProjectDocumentMetadata } from './ProjectDocumentMetadata';
import type { ProjectDocumentPreviewViewModel } from './ProjectDocumentPreview';
import markdownStyles from './ProjectDocumentMarkdown.module.css';

const markdownComponents: Components = {
  table: ({ node: _node, ...props }) => (
    <div className={markdownStyles.tableContainer}>
      <table {...props} />
    </div>
  ),
};

export interface ProjectDocumentPreviewContentProps {
  document: ProjectDocumentPreviewViewModel;
  layout?: 'page' | 'panel';
  onDownloadAttachment?(attachmentId: string): void;
  attachmentUploads?: ProjectDocumentAttachmentUploadViewModel[];
  showTags?: boolean;
  showDocumentHeader?: boolean;
}

export function ProjectDocumentPreviewContent({
  document,
  layout = 'page',
  onDownloadAttachment,
  attachmentUploads = [],
  showTags = true,
  showDocumentHeader = true,
}: ProjectDocumentPreviewContentProps) {
  const [isContentScrolling, setIsContentScrolling] = useState(false);
  const contentScrollTimerRef = useRef<number | null>(null);
  const contentInset = layout === 'page' ? 'px-[120px]' : 'px-6 md:px-8';

  useEffect(() => () => {
    if (contentScrollTimerRef.current !== null) window.clearTimeout(contentScrollTimerRef.current);
  }, []);

  const handleContentScroll = () => {
    setIsContentScrolling(true);
    if (contentScrollTimerRef.current !== null) window.clearTimeout(contentScrollTimerRef.current);
    contentScrollTimerRef.current = window.setTimeout(() => setIsContentScrolling(false), 700);
  };

  return (
    <div className="flex h-full min-h-0 flex-col">
      {showDocumentHeader && <section className={`mb-4 shrink-0 ${contentInset}`}>
          <h1 className="break-words text-2xl font-semibold text-primaryText">{document.title}</h1>
          <ProjectDocumentMetadata
            createdByName={document.createdByName}
            updatedByName={document.updatedByName}
            updatedAt={document.updatedAt}
            index={document.index}
          />
          {showTags && <div className="mt-4 flex flex-wrap items-center gap-2">
            {(document.tags?.length ?? 0) > 0 ? document.tags?.map((tag) => <span key={tag} className="inline-flex items-center rounded-full border border-lineSubtle bg-bgLight px-2.5 py-1 text-xs text-secondaryText">{tag}</span>) : <span className="text-xs text-tertiaryText">暂无标签</span>}
          </div>}
          <div className="mt-4 h-px bg-lineSubtle" />
        </section>}

      <section
        onScroll={handleContentScroll}
        className={`document-preview-scrollbar min-h-0 flex-1 overflow-y-auto pr-1 ${isContentScrolling ? 'is-scrolling' : ''}`}
      >
        {document.markdown.trim() ? (
          <div className={`${markdownStyles.preview} ${contentInset}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {document.markdown}
            </ReactMarkdown>
          </div>
        ) : (
          <div className={`${layout === 'page' ? 'mx-[120px]' : 'mx-6 md:mx-8'} rounded-lg border border-dashed border-borderSoft`}>
            <BaseEmpty description="正文暂无内容" />
          </div>
        )}

        {(document.attachments.length > 0 || attachmentUploads.length > 0) && <ProjectDocumentAttachments
          attachments={document.attachments}
          uploads={attachmentUploads}
          onDownloadAttachment={onDownloadAttachment}
          className={`${layout === 'page' ? 'mx-[120px]' : 'mx-6 md:mx-8'} mb-6 mt-8 border-t border-lineSubtle pt-6`}
        />}
      </section>
    </div>
  );
}
