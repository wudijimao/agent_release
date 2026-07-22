import React from 'react';
import type { ChatAttachment, ChatReference } from './chat.types';
export type InputAttachment = ChatAttachment;
export type InputReference = ChatReference;
export interface InputSendPayload {
    content: string;
    attachments: InputAttachment[];
    references: InputReference[];
}
export interface InputAreaProps {
    onSend: (payload: InputSendPayload) => void;
    disabled: boolean;
    isStreaming?: boolean;
    onCancel?: () => void;
    leadingControls?: React.ReactNode;
    skillOptions?: readonly ChatSkillOption[];
    fileOptions?: readonly ChatFileOption[];
}
export interface ChatSkillOption {
    id: string;
    badge: string;
    description: string;
    source: string;
    disabled?: boolean;
    disabledReason?: string;
}
export interface ChatFileOption {
    id: string;
    name: string;
    projectId: string;
    projectName: string;
    sourceType: '最近操作' | '项目文件';
    isRecent: boolean;
    operatorName?: string;
    operatedAt?: string;
}
export declare const CHAT_INPUT_GUIDE_TEXT = "\u23CE\u53D1\u9001 | \u21E7+\u23CE\u6362\u884C | @\u5F15\u7528 | /skill";
export declare const CHAT_SKILL_OPTIONS: ChatSkillOption[];
export declare const resolveSlashQuery: (text: string, cursor: number) => string | null;
export declare const resolveAtQuery: (text: string, cursor: number) => string | null;
export declare const insertSkillCommand: (text: string, start: number, end: number, skillId: string) => {
    value: string;
    cursor: number;
};
export declare const insertFileReference: (text: string, start: number, end: number, fileName: string) => {
    value: string;
    cursor: number;
};
export declare const CHAT_FILE_OPTIONS: readonly ChatFileOption[];
export declare const CHAT_RECENT_FILE_OPTIONS: readonly ChatFileOption[];
export declare const InputArea: ({ onSend, disabled, isStreaming, onCancel, leadingControls, skillOptions, fileOptions, }: InputAreaProps) => React.JSX.Element;
declare const _default: React.MemoExoticComponent<({ onSend, disabled, isStreaming, onCancel, leadingControls, skillOptions, fileOptions, }: InputAreaProps) => React.JSX.Element>;
export default _default;
//# sourceMappingURL=InputArea.d.ts.map