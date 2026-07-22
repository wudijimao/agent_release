import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import type { BaseToggleProps } from './BaseToggle.types';
import styles from './BaseToggle.module.css';

export const BaseToggle: React.FC<BaseToggleProps> = ({
  checked,
  defaultChecked = false,
  size = 'medium',
  disabled = false,
  onChange,
  className,
  ...buttonProps
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;
  const sizeSuffix = `${size.charAt(0).toUpperCase()}${size.slice(1)}`;

  const handleClick = useCallback(() => {
    if (disabled) return;
    const nextChecked = !isChecked;
    if (!isControlled) setInternalChecked(nextChecked);
    onChange?.(nextChecked);
  }, [disabled, isChecked, isControlled, onChange]);

  const toggleClassName = useMemo(
    () => classNames(
      styles.toggle,
      styles[`toggle${sizeSuffix}`],
      isChecked ? styles.toggleOn : styles.toggleOff,
      disabled && styles.toggleDisabled,
      className,
    ),
    [className, disabled, isChecked, sizeSuffix],
  );
  const thumbClassName = useMemo(
    () => classNames(
      styles.thumb,
      styles[`thumb${sizeSuffix}`],
      styles[`thumb${isChecked ? 'On' : 'Off'}${sizeSuffix}`],
    ),
    [isChecked, sizeSuffix],
  );

  return (
    <button
      {...buttonProps}
      type="button"
      role="switch"
      aria-checked={isChecked}
      className={toggleClassName}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className={thumbClassName} />
    </button>
  );
};

BaseToggle.displayName = 'BaseToggle';
