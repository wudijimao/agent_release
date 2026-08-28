import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { BaseActionMenu, BaseModal, type BaseActionMenuItem } from '../common';
import {
  PROJECT_DOCUMENT_TAG_CANDIDATES,
  ProjectDocumentTagPicker,
  type ProjectDocumentTagSelection,
} from '../../screens/projects/ProjectDocumentTagPicker';

export interface MiraDraftSaveProjectOption {
  id: string;
  name: string;
  selectable?: boolean;
}

export interface MiraDraftSaveModalProps {
  visible: boolean;
  projects: readonly MiraDraftSaveProjectOption[];
  selectedProjectId?: string;
  tags: readonly string[];
  saving?: boolean;
  onProjectChange(projectId: string): void;
  onTagsChange(tags: string[]): void;
  onCancel(): void;
  onConfirm(): void | Promise<void>;
}

export function MiraDraftSaveModal({
  visible,
  projects,
  selectedProjectId,
  tags,
  saving = false,
  onProjectChange,
  onTagsChange,
  onCancel,
  onConfirm,
}: MiraDraftSaveModalProps) {
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);
  const selectableProjects = useMemo(
    () => projects.filter((project) => project.selectable !== false),
    [projects],
  );
  const selectedProject = selectableProjects.find((project) => project.id === selectedProjectId);
  const tagOptions = useMemo(
    () => PROJECT_DOCUMENT_TAG_CANDIDATES.map((tag) => ({ value: tag, label: tag })),
    [],
  );
  const tagSelection = useMemo<ProjectDocumentTagSelection>(
    () => {
      const selectedTag = tags[0];
      if (!selectedTag) return { optionValues: [], customTags: [] };
      return PROJECT_DOCUMENT_TAG_CANDIDATES.includes(
        selectedTag as (typeof PROJECT_DOCUMENT_TAG_CANDIDATES)[number],
      )
        ? { optionValues: [selectedTag], customTags: [] }
        : { optionValues: [], customTags: [selectedTag] };
    },
    [tags],
  );
  const projectItems = useMemo<BaseActionMenuItem[]>(
    () => selectableProjects.map((project) => ({
      key: project.id,
      label: project.name,
      active: project.id === selectedProjectId,
    })),
    [selectableProjects, selectedProjectId],
  );

  useEffect(() => {
    if (!visible) return;
    setProjectMenuOpen(false);
  }, [visible]);

  return (
    <BaseModal
      visible={visible}
      title="保存文档"
      width={520}
      maskClosable={!saving}
      okText="保存"
      cancelText="取消"
      confirmLoading={saving}
      okButtonProps={{ disabled: !selectedProjectId || saving }}
      cancelButtonProps={{ disabled: saving }}
      onCancel={onCancel}
      onConfirm={onConfirm}
      bodyClassName="!px-6 !py-5"
    >
      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-primaryText">保存到项目</label>
          <BaseActionMenu
            open={projectMenuOpen}
            onOpenChange={setProjectMenuOpen}
            placement="bottom-start"
            matchTriggerWidth
            portal
            trigger={(
              <span className="flex h-10 w-full items-center justify-between rounded-lg border border-lineSubtle bg-white px-3 text-sm text-primaryText transition-colors hover:border-controlBorderHover">
                <span className="truncate">{selectedProject?.name ?? '选择项目'}</span>
                <ChevronDown size={16} className={`shrink-0 text-tertiaryText transition-transform ${projectMenuOpen ? 'rotate-180' : ''}`} />
              </span>
            )}
            items={projectItems}
            onItemClick={(item) => {
              onProjectChange(item.key);
              setProjectMenuOpen(false);
            }}
            className="block w-full"
            triggerClassName="!flex !w-full"
            listClassName="max-h-[220px] overflow-y-auto"
          />
        </div>

        <ProjectDocumentTagPicker
          id="mira-draft-tag-input"
          label="设置项目标签"
          options={tagOptions}
          value={tagSelection}
          onChange={(selection) => onTagsChange([
            ...selection.optionValues,
            ...selection.customTags,
          ].slice(0, 1))}
        />
      </div>
    </BaseModal>
  );
}
