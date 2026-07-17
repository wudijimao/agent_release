import React, { useMemo } from 'react';
import classNames from 'classnames';
import type { BaseButtonProps } from './BaseButton.types';
import styles from './BaseButton.module.css';

const variantClasses = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
  danger: styles.danger,
} as const;

const sizeClasses = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
} as const;

const radiusClasses = {
  square: styles.roundedSquare,
  small: styles.roundedSmall,
  medium: styles.roundedMedium,
  large: styles.roundedLarge,
  full: styles.roundedFull,
} as const;

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      type = 'primary',
      size = 'medium',
      isLoading,
      loading,
      disabled = false,
      children,
      icon,
      iconPosition = 'left',
      className,
      fullWidth = false,
      rounded = 'medium',
      onClick,
      ...rest
    },
    ref,
  ) => {
    const finalLoading = isLoading ?? loading ?? false;
    const finalDisabled = disabled || finalLoading;

    const content = useMemo(() => {
      if (finalLoading) {
        return (
          <>
            <span className={styles.loadingSpinner} />
            <span>{children}</span>
          </>
        );
      }

      if (!icon) return children;

      return (
        <>
          {iconPosition === 'left' && (
            <span className={styles.icon}>{icon}</span>
          )}
          {children && <span>{children}</span>}
          {iconPosition === 'right' && (
            <span className={styles.icon}>{icon}</span>
          )}
        </>
      );
    }, [children, finalLoading, icon, iconPosition]);

    return (
      <button
        ref={ref}
        className={classNames(
          styles.button,
          variantClasses[type],
          sizeClasses[size],
          radiusClasses[rounded],
          {
            [styles.fullWidth]: fullWidth,
            [styles.loading]: finalLoading,
            [styles.disabled]: finalDisabled,
          },
          className,
        )}
        disabled={finalDisabled}
        onClick={onClick}
        {...rest}
      >
        {content}
      </button>
    );
  },
);

BaseButton.displayName = 'BaseButton';
