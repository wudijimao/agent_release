import React, { useCallback } from 'react';
import classNames from 'classnames';

export interface BaseSelectOption {
  label: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface BaseSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'size'> {
  options?: BaseSelectOption[];
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  size?: 'small' | 'medium' | 'large';
  clearable?: boolean;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  onChange?: (value: string | number) => void;
}

const sizeClasses = { small: 'h-8', medium: 'h-9', large: 'h-14' } as const;

export const BaseSelect = React.forwardRef<HTMLSelectElement, BaseSelectProps>(
  ({ options = [], value, defaultValue, placeholder, disabled = false, error = false, size = 'medium', label, helperText, onChange, className, ...rest }, ref) => {
    const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
      const nextValue = event.target.value;
      const selectedOption = options.find((option) => String(option.value) === nextValue);
      onChange?.(nextValue === '' ? '' : selectedOption?.value ?? nextValue);
    }, [onChange, options]);

    return (
      <div className="flex flex-col gap-1">
        {label && <label className="mb-2 block text-sm font-medium text-primaryText">{label}</label>}
        <div className="relative">
          <select
            ref={ref}
            className={classNames(
              'w-full cursor-pointer appearance-none rounded-lg border border-controlBorderDefault bg-surface px-5 pr-11 text-sm leading-5 text-primaryText shadow-sm outline-none transition-all duration-200 hover:border-controlBorderHover focus:border-controlBorderHover disabled:cursor-not-allowed disabled:bg-surfaceMuted disabled:text-mutedText',
              error && 'border-danger focus:border-danger focus:ring-2 focus:ring-dangerFocus',
              sizeClasses[size], className,
            )}
            value={value ?? defaultValue ?? ''}
            disabled={disabled}
            onChange={handleChange}
            {...rest}
          >
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options.map((option) => <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>)}
          </select>
          <svg aria-hidden="true" className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondaryText" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        {helperText && <div className={classNames('text-xs leading-6', error ? 'text-danger' : 'text-mutedText')}>{helperText}</div>}
      </div>
    );
  },
);

BaseSelect.displayName = 'BaseSelect';
