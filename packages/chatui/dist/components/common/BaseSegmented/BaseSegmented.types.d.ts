import type { ReactNode } from 'react';
export interface BaseSegmentedOption {
    label: ReactNode;
    value: string | number;
}
export type BaseSegmentedSize = 'small' | 'middle' | 'large';
export interface BaseSegmentedProps {
    options: readonly BaseSegmentedOption[];
    value?: string | number;
    defaultValue?: string | number;
    onChange?(value: string | number): void;
    size?: BaseSegmentedSize;
    disabled?: boolean;
    className?: string;
}
//# sourceMappingURL=BaseSegmented.types.d.ts.map