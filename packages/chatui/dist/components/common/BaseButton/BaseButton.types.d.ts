import type React from 'react';
export interface BaseButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'size'> {
    buttonType?: 'primary' | 'secondary' | 'ghost' | 'danger';
    type?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    loading?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    className?: string;
    fullWidth?: boolean;
    rounded?: 'square' | 'small' | 'medium' | 'large' | 'full';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
//# sourceMappingURL=BaseButton.types.d.ts.map