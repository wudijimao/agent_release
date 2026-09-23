import React from 'react';

export interface ProjectDocumentIndexViewModel extends Record<string, unknown> {
  status: 'disabled' | 'pending' | 'indexed';
  statusLabel: string;
  detail: string;
}

export interface ProjectDocumentMetadataProps {
  createdByName?: string;
  updatedByName?: string;
  updatedAt?: string;
}

export function ProjectDocumentMetadata({
  createdByName,
  updatedByName,
  updatedAt,
}: ProjectDocumentMetadataProps) {
  if (!createdByName && !updatedByName && !updatedAt) return null;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-tertiaryText">
      {createdByName && <span>创建人: {createdByName}</span>}
      {updatedByName && <span>最近修改: {updatedByName}</span>}
      {updatedAt && <span>{updatedAt}</span>}
    </div>
  );
}
