import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

export const PROJECT_DOCUMENT_TAG_CANDIDATES = [
  '文献', '实验记录', '实验方案', 'Protocol', 'SOP', '工作总结',
] as const;

export interface ProjectDocumentTagOption {
  value: string;
  label: string;
  description?: string;
}

export interface ProjectDocumentTagSelection {
  optionValues: string[];
  customTags: string[];
}

export interface ProjectDocumentTagPickerProps {
  id?: string;
  label?: string;
  options: ProjectDocumentTagOption[];
  value: ProjectDocumentTagSelection;
  onChange(value: ProjectDocumentTagSelection): void;
}

function normalizeTag(value: string) {
  return value.trim().replace(/\s+/g, ' ');
}

export function ProjectDocumentTagPicker({
  id = 'document-tag-input',
  label = '设置文档标签',
  options,
  value,
  onChange,
}: ProjectDocumentTagPickerProps) {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [creating, setCreating] = useState(false);
  const [input, setInput] = useState('');
  const [customOptions, setCustomOptions] = useState<string[]>([]);
  const listRef = useRef<HTMLDivElement | null>(null);

  const optionValues = useMemo(() => new Set(options.map((option) => option.value)), [options]);
  const candidates = useMemo(() => [
    ...options.map((option) => ({ value: option.value, label: option.label, custom: false })),
    ...Array.from(new Set([...customOptions, ...value.customTags]))
      .filter((tag) => !options.some((option) => option.label === tag || option.value === tag))
      .map((tag) => ({ value: tag, label: tag, custom: true })),
  ], [customOptions, options, value.customTags]);
  const candidateSignature = candidates.map((tag) => `${tag.custom ? 'c' : 'o'}:${tag.value}`).join('\u0000');

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;
    const updateOverflow = () => setShowToggle(container.scrollHeight > 72);
    updateOverflow();
    const observer = new ResizeObserver(updateOverflow);
    observer.observe(container);
    return () => observer.disconnect();
  }, [candidateSignature, creating]);

  const toggleTag = (tag: { value: string; label: string; custom: boolean }) => {
    const selected = tag.custom
      ? value.customTags.includes(tag.label)
      : value.optionValues.includes(tag.value);
    if (selected) {
      onChange(tag.custom
        ? { ...value, customTags: value.customTags.filter((item) => item !== tag.label) }
        : { ...value, optionValues: value.optionValues.filter((item) => item !== tag.value) });
      return;
    }
    if (tag.custom || !optionValues.has(tag.value)) {
      onChange({ optionValues: [], customTags: [tag.label] });
      return;
    }
    onChange({ optionValues: [tag.value], customTags: [] });
  };

  const createTag = () => {
    const tag = normalizeTag(input);
    if (tag) {
      setCustomOptions((current) => current.includes(tag) ? current : [...current, tag]);
      onChange({ optionValues: [], customTags: [tag] });
    }
    setInput('');
    setCreating(false);
  };

  return (
    <div>
      {label && <label htmlFor={id} className="mb-2 block text-sm font-medium text-primaryText">{label}</label>}
      <div ref={listRef} className={`flex flex-wrap gap-2 overflow-hidden transition-[max-height] duration-200 ${expanded ? 'max-h-64 overflow-y-auto pr-1' : 'max-h-[72px]'}`}>
        {creating ? (
          <input
            id={id}
            autoFocus
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') { event.preventDefault(); createTag(); }
              if (event.key === 'Escape') { setInput(''); setCreating(false); }
            }}
            onBlur={() => { if (!input.trim()) setCreating(false); }}
            placeholder="输入标签名称"
            className="box-border h-8 w-32 shrink-0 rounded-md border border-primary px-2 text-sm text-primaryText outline-none"
          />
        ) : (
          <button type="button" onClick={() => { setCreating(true); setExpanded(true); }} className="inline-flex box-border h-[30px] shrink-0 items-center gap-1 self-center rounded-md border border-dashed border-controlBorder px-2.5 text-sm text-tertiaryText transition-colors hover:border-primary hover:text-primary">
            <Plus size={14} />新建标签
          </button>
        )}
        {candidates.map((tag) => {
          const selected = tag.custom ? value.customTags.includes(tag.label) : value.optionValues.includes(tag.value);
          return (
            <button
              key={`${tag.custom ? 'custom' : 'option'}-${tag.value}`}
              type="button"
              onClick={() => toggleTag(tag)}
              className={`group grid h-8 grid-cols-1 items-center rounded-md border border-transparent px-2.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary-soft-strong ${selected
                ? 'bg-primary-soft text-primary'
                : 'bg-bgLight text-secondaryText hover:bg-primary-soft hover:text-primary'
              }`}
              aria-pressed={selected}
            >
              <span aria-hidden="true" className="invisible col-start-1 row-start-1 font-semibold">{tag.label}</span>
              <span className={`col-start-1 row-start-1 ${selected ? 'font-semibold' : 'font-normal group-hover:font-semibold'}`}>{tag.label}</span>
            </button>
          );
        })}
      </div>
      {showToggle && (
        <div className="mt-5 flex justify-center">
          <button type="button" onClick={() => setExpanded((current) => !current)} className="inline-flex items-center gap-1.5 text-sm text-tertiaryText transition-colors hover:text-secondaryText">
            {expanded ? '收起标签' : '展开全部标签'}
            <ChevronDown size={13} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}
    </div>
  );
}
