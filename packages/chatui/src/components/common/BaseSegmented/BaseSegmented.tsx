import { useState } from 'react';
import classNames from 'classnames';
import styles from './BaseSegmented.module.css';
import type { BaseSegmentedProps, BaseSegmentedSize } from './BaseSegmented.types';

const sizeClassMap: Record<BaseSegmentedSize, string> = {
  small: styles.sizeSmall,
  middle: styles.sizeMiddle,
  large: styles.sizeLarge,
};

export function BaseSegmented({
  options,
  value,
  defaultValue,
  onChange,
  size = 'middle',
  disabled = false,
  className,
}: BaseSegmentedProps) {
  const [internalValue, setInternalValue] = useState<string | number>(
    defaultValue ?? options[0]?.value ?? '',
  );
  const selectedValue = value ?? internalValue;

  const handleClick = (optionValue: string | number) => {
    if (disabled) return;
    if (value === undefined) setInternalValue(optionValue);
    onChange?.(optionValue);
  };

  return (
    <div className={classNames(styles.container, sizeClassMap[size], className)}>
      {options.map((option) => {
        const active = selectedValue === option.value;
        return (
          <button
            key={option.value}
            type="button"
            className={classNames(styles.item, active && styles.itemActive, disabled && styles.itemDisabled)}
            onClick={() => handleClick(option.value)}
            disabled={disabled}
            aria-pressed={active}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
