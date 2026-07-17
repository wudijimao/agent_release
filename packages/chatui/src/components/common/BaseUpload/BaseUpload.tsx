import React, { useCallback, useRef, useState } from 'react';
import classNames from 'classnames';

export interface BaseUploadProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onChange?: (files: FileList) => void;
  onError?: (error: Error) => void;
  maxSize?: number;
  children?: React.ReactNode;
  className?: string;
  dragable?: boolean;
  placeholderTitle?: React.ReactNode;
  placeholderDescription?: React.ReactNode;
  placeholderIcon?: React.ReactNode;
  maxCount?: number;
}

const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(0)} MB`;
};

export const BaseUpload = React.forwardRef<HTMLDivElement, BaseUploadProps>(
  ({ accept, multiple = false, disabled = false, onChange, onError, maxSize, children, className, dragable = true, placeholderTitle, placeholderDescription, placeholderIcon, maxCount }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const handleFiles = useCallback((files: FileList) => {
      if (maxCount && files.length > maxCount) {
        onError?.(new Error(`单次最多上传 ${maxCount} 个文件`));
        return;
      }
      if (maxSize) {
        for (const file of Array.from(files)) {
          if (file.size > maxSize) {
            onError?.(new Error(`文件“${file.name}”超过大小限制（${formatSize(maxSize)}）`));
            return;
          }
        }
      }
      onChange?.(files);
    }, [maxCount, maxSize, onChange, onError]);

    const openPicker = () => { if (!disabled) inputRef.current?.click(); };
    return (
      <div
        ref={ref}
        className={classNames(
          'cursor-pointer rounded-md border border-dashed border-borderSoft bg-surface px-4 py-5 text-center transition-all duration-200 hover:border-primary hover:bg-primary-soft',
          isDragging && 'border-primary bg-primary-soft-strong ring-2 ring-brandFocus',
          disabled && 'cursor-not-allowed opacity-60', className,
        )}
        onClick={openPicker}
        onKeyDown={(event) => {
          if (!disabled && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); openPicker(); }
        }}
        onDragOver={(event) => {
          if (dragable && !disabled) { event.preventDefault(); setIsDragging(true); }
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          if (dragable && !disabled) { event.preventDefault(); setIsDragging(false); handleFiles(event.dataTransfer.files); }
        }}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
      >
        <input ref={inputRef} type="file" accept={accept} multiple={multiple} disabled={disabled} onChange={(event) => event.target.files && handleFiles(event.target.files)} className="hidden" />
        {children || (
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="inline-flex h-12 w-12 items-center justify-center text-primary" aria-hidden>
              {placeholderIcon ?? <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3"><path d="M24 8v21M16 16l8-8 8 8M10 27v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            </span>
            <div className="text-lg font-semibold leading-7 text-primaryText">{placeholderTitle ?? '点击或拖拽文件到此处上传'}</div>
            <div className="text-sm leading-6 text-mutedText">{placeholderDescription ?? '支持单文件或批量上传'}</div>
          </div>
        )}
      </div>
    );
  },
);

BaseUpload.displayName = 'BaseUpload';
