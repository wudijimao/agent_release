import React from 'react';
export interface BaseDocumentUploadProps {
    value?: File[];
    defaultValue?: File[];
    onChange?: (files: File[]) => void;
    onError?: (error: Error) => void;
    accept?: string;
    maxSize?: number;
    maxCount?: number;
    disabled?: boolean;
    className?: string;
    uploadTitle?: React.ReactNode;
    uploadDescription?: React.ReactNode;
    uploadIcon?: React.ReactNode;
}
export declare const BaseDocumentUpload: React.ForwardRefExoticComponent<BaseDocumentUploadProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BaseDocumentUpload.d.ts.map