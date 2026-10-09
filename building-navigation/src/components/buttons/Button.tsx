import React from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'base'
  | 'alt'
  | 'outline'
  | 'ghost'
  | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'icon';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      isLoading = false,
      fullWidth = false,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      'inline-flex items-center justify-center font-sans tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none select-none cursor-pointer';

    // Variant styles
    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-primary text-white hover:bg-secondary focus:ring-primary shadow-sm hover:shadow active:scale-[0.98]',
      secondary:
        'bg-secondary text-white hover:bg-tertiary focus:ring-secondary shadow-sm hover:shadow active:scale-[0.98]',
      tertiary:
        'bg-tertiary text-white hover:bg-base focus:ring-tertiary shadow-sm hover:shadow active:scale-[0.98]',
      base:
        'bg-base text-slate-900 hover:bg-alt focus:ring-base shadow-sm hover:shadow active:scale-[0.98]',
      alt:
        'bg-alt text-slate-800 hover:bg-slate-200 focus:ring-alt shadow-xs active:scale-[0.98]',
      outline:
        'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary active:scale-[0.98]',
      ghost:
        'bg-transparent text-slate-700 hover:bg-slate-200/60 focus:ring-slate-400 active:scale-[0.98]',
      danger:
        'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 shadow-sm active:scale-[0.98]',
    };

    // Size styles
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-3 py-1.5 text-xs font-medium rounded-lg gap-1.5',
      md: 'px-4 py-2 text-sm font-semibold rounded-xl gap-2',
      lg: 'px-6 py-2.5 text-base font-bold rounded-xl gap-2.5',
      xl: 'px-8 py-3.5 text-lg font-extrabold rounded-2xl gap-3',
      icon: 'p-2.5 rounded-xl aspect-square',
    };

    // Width style
    const widthStyle = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim()}
        {...props}
      >
        {/* Loading Spinner */}
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}

        {/* Left Icon */}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}

        {/* Button Content */}
        {children && <span>{children}</span>}

        {/* Right Icon */}
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
