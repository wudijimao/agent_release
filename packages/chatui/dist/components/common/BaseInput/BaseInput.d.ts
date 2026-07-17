import React from 'react';
export interface BaseInputProps {
    type?: string;
    placeholder?: string;
    value?: string | number;
    defaultValue?: string | number;
    id?: string;
    name?: string;
    disabled?: boolean;
    readOnly?: boolean;
    error?: boolean;
    size?: 'small' | 'medium' | 'large';
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onClear?: () => void;
    className?: string;
    containerClassName?: string;
    clearable?: boolean;
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    autoComplete?: string;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    tabIndex?: number;
    title?: string;
    autoFocus?: boolean;
}
export declare const BaseInput: React.ForwardRefExoticComponent<BaseInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=BaseInput.d.ts.map