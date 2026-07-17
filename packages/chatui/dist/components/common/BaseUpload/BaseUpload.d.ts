import React from 'react';
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
export declare const BaseUpload: React.ForwardRefExoticComponent<BaseUploadProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BaseUpload.d.ts.map