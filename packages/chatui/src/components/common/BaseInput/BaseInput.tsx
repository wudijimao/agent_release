import React, { useCallback, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

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

const sizeClasses = { small: 'h-8', medium: 'h-9', large: 'h-14' } as const;

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      type = 'text', placeholder, value, defaultValue, disabled = false, readOnly = false,
      error = false, size = 'medium', prefix, suffix, prefixIcon, suffixIcon,
      onChange, onFocus, onBlur, onClear, className, containerClassName,
      clearable = false, label, helperText, ...rest
    },
    forwardedRef,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const internalRef = useRef<HTMLInputElement | null>(null);

    const setInputRef = useCallback((element: HTMLInputElement | null) => {
      internalRef.current = element;
      if (typeof forwardedRef === 'function') forwardedRef(element);
      else if (forwardedRef) forwardedRef.current = element;
    }, [forwardedRef]);

    const handleClear = useCallback(() => {
      const input = internalRef.current;
      if (!input) return;
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, '');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.focus();
      onClear?.();
    }, [onClear]);

    const showClearButton = useMemo(
      () => clearable && isFocused && String(value ?? internalRef.current?.value ?? '').length > 0,
      [clearable, isFocused, value],
    );

    return (
      <div className="flex flex-col gap-1">
        {label && <label className="mb-2 block text-sm font-medium text-primaryText">{label}</label>}
        <div
          className={classNames(
            'flex items-center rounded-lg border border-controlBorderDefault bg-surface px-5 shadow-sm transition-all duration-200',
            sizeClasses[size],
            !disabled && !error && 'hover:border-controlBorder',
            isFocused && !disabled && !error && 'border-primary ring-2 ring-brandFocus',
            error && 'border-danger',
            error && isFocused && 'ring-2 ring-dangerFocus',
            disabled && 'cursor-not-allowed bg-surfaceMuted',
            containerClassName,
          )}
        >
          {(prefix || prefixIcon) && <div className="mr-2 flex shrink-0 items-center justify-center text-mutedText">{prefix || prefixIcon}</div>}
          <input
            ref={setInputRef}
            type={type}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            readOnly={readOnly}
            className={classNames('min-w-0 flex-1 border-0 bg-transparent p-0 text-sm leading-5 text-primaryText outline-none placeholder:text-tertiaryText disabled:cursor-not-allowed disabled:text-mutedText', className)}
            onFocus={(event) => { setIsFocused(true); onFocus?.(event); }}
            onBlur={(event) => { setIsFocused(false); onBlur?.(event); }}
            onChange={onChange}
            {...rest}
          />
          <div className="ml-2 flex shrink-0 items-center justify-center gap-2 text-mutedText">
            {showClearButton && (
              <button type="button" className="flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0 text-mutedText transition-colors hover:text-primaryText" onMouseDown={(event) => event.preventDefault()} onClick={handleClear} aria-label="清空">✕</button>
            )}
            {suffix || suffixIcon}
          </div>
        </div>
        {helperText && <div className={classNames('text-xs leading-6', error ? 'text-danger' : 'text-mutedText')}>{helperText}</div>}
      </div>
    );
  },
);

BaseInput.displayName = 'BaseInput';
