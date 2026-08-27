import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { BaseButton } from '../../components/common';

const COVER_CONTENT_SCALE = 0.62;
const COVER_VERTICAL_PADDING_PX = 20;
const COVER_BODY_LINE_HEIGHT_PX = 20;
const COVER_FALLBACK_LINE_COUNT = 20;
const COVER_CHARACTERS_PER_LINE = 48;

function getCoverMarkdown(markdown: string, lineCount: number) {
  const sourceLines = markdown.split(/\r?\n/, lineCount);
  return sourceLines.join('\n').slice(0, lineCount * COVER_CHARACTERS_PER_LINE);
}

export interface ProjectDocumentTemplateCardViewModel {
  id: string;
  name: string;
  description: string;
  markdown: string;
  scope?: 'personal';
  source?: 'system' | 'workspace';
  createdByName?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProjectDocumentTemplateCardProps {
  template?: ProjectDocumentTemplateCardViewModel;
  create?: boolean;
  disabled?: boolean;
  onOpen(): void;
}

export function ProjectDocumentTemplateCard({
  template,
  create = false,
  disabled = false,
  onOpen,
}: ProjectDocumentTemplateCardProps) {
  const coverRef = useRef<HTMLDivElement>(null);
  const [coverLineCount, setCoverLineCount] = useState(COVER_FALLBACK_LINE_COUNT);
  const coverMarkdown = useMemo(
    () => getCoverMarkdown(template?.markdown ?? '', coverLineCount),
    [coverLineCount, template?.markdown],
  );

  useEffect(() => {
    const cover = coverRef.current;
    if (!cover || create) return;

    const updateLineCount = () => {
      const contentHeight = cover.clientHeight / COVER_CONTENT_SCALE - COVER_VERTICAL_PADDING_PX;
      const nextLineCount = Math.max(1, Math.floor(contentHeight / COVER_BODY_LINE_HEIGHT_PX));
      setCoverLineCount((current) => current === nextLineCount ? current : nextLineCount);
    };

    updateLineCount();
    const observer = new ResizeObserver(updateLineCount);
    observer.observe(cover);
    return () => observer.disconnect();
  }, [create]);

  if (create) {
    return (
      <button
        type="button"
        disabled={disabled}
        onClick={onOpen}
        className="group flex flex-col overflow-hidden rounded-lg border border-dashed border-borderSoft bg-surfaceMuted text-left transition-colors hover:border-primary disabled:cursor-not-allowed disabled:opacity-50"
      >
        <div className="px-3 pt-3">
          <span className="truncate text-sm font-semibold text-primaryText">新建模板</span>
        </div>
        <div className="relative mx-3 mb-3 mt-2.5 aspect-[4/5] overflow-hidden rounded-md bg-surface">
          <div className="flex h-full w-full items-center justify-center">
            <Plus size={28} className="text-controlBorder transition-colors group-hover:text-primary" />
          </div>
        </div>
      </button>
    );
  }

  if (!template) return null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-lineSubtle bg-surfaceMuted">
      <div className="px-3 pt-3">
        <h3 className="truncate text-sm font-semibold text-primaryText">{template.name}</h3>
      </div>
      <div ref={coverRef} className="relative mx-3 mb-3 mt-2.5 aspect-[4/5] overflow-hidden rounded-md bg-surface">
        <div className="pointer-events-none origin-top-left scale-[0.62] px-3 py-2.5" style={{ width: '161%' }}>
          <div className="prose prose-slate max-w-none text-primaryText prose-p:my-1.5 prose-p:text-xs prose-p:leading-5 prose-li:text-xs prose-li:leading-5 prose-headings:text-primaryText prose-h2:mb-1.5 prose-h2:mt-0 prose-h2:text-sm prose-h2:font-semibold prose-h3:mb-1 prose-h3:mt-2 prose-h3:text-xs prose-h3:font-semibold prose-strong:text-primaryText prose-hr:my-2 prose-li:my-0.5 prose-ol:pl-4 prose-ul:pl-4 prose-table:text-xs prose-th:py-1 prose-td:py-1 prose-blockquote:border-l-2 prose-blockquote:pl-2 prose-blockquote:text-secondaryText">
            {coverMarkdown.trim() ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{coverMarkdown}</ReactMarkdown> : <p>{template.description || '暂无内容'}</p>}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-overlaySurface opacity-0 backdrop-blur-[1px] transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
          <BaseButton type="primary" size="small" rounded="large" onClick={onOpen}>查看</BaseButton>
        </div>
      </div>
    </article>
  );
}
