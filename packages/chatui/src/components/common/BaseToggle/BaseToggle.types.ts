import type React from 'react';

export type BaseToggleSize = 'small' | 'medium';

export interface BaseToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked?: boolean;
  defaultChecked?: boolean;
  size?: BaseToggleSize;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}
