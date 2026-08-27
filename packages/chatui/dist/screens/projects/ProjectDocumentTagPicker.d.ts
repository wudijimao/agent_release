import React from 'react';
export declare const PROJECT_DOCUMENT_TAG_CANDIDATES: readonly ["文献", "实验记录", "实验方案", "Protocol", "SOP", "工作总结"];
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
export declare function ProjectDocumentTagPicker({ id, label, options, value, onChange, }: ProjectDocumentTagPickerProps): React.JSX.Element;
//# sourceMappingURL=ProjectDocumentTagPicker.d.ts.map