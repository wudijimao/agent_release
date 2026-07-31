import React from 'react';
import { CheckCircle2, Clock3, SearchX } from 'lucide-react';

export interface ProjectDocumentIndexViewModel extends Record<string, unknown> {
  status: 'disabled' | 'pending' | 'indexed';
  statusLabel: string;
  detail: string;
}

export interface ProjectDocumentMetadataProps {
  createdByName?: string;
  updatedByName?: string;
  updatedAt?: string;
  index?: ProjectDocumentIndexViewModel;
}

const indexIcon = {
  disabled: <SearchX size={14} />,
  pending: <Clock3 size={14} />,
  indexed: <CheckCircle2 size={14} />,
};

export function ProjectDocumentMetadata({
  createdByName,
  updatedByName,
  updatedAt,
  index,
}: ProjectDocumentMetadataProps) {
  if (!createdByName && !updatedByName && !updatedAt && !index) return null;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText">
      {createdByName && <span>创建人: {createdByName}</span>}
      {updatedByName && <span>最近修改: {updatedByName}</span>}
      {updatedAt && <span>{updatedAt}</span>}
      {index && (
        <span className="inline-flex items-center gap-1.5" title={index.detail}>
          {indexIcon[index.status]}
          {index.statusLabel}
        </span>
      )}
    </div>
  );
}
