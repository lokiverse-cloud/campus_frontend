import React from 'react';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'outline' | 'filled' | 'unstyled';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  sizeVariant?: InputSize;
  variant?: InputVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      sizeVariant = 'md',
      variant = 'outline',
      leftIcon,
      rightIcon,
      fullWidth = true,
      className = '',
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    // Generate unique ID for label coupling if not provided
    const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    // Size mappings for input padding & text
    const sizeClasses: Record<InputSize, string> = {
      sm: 'py-1.5 text-xs rounded-lg',
      md: 'py-2.5 text-sm rounded-xl',
      lg: 'py-3.5 text-base rounded-xl',
    };

    // Padding adjustments when icons are present
    const leftPadding: Record<InputSize, string> = {
      sm: leftIcon ? 'pl-8' : 'pl-3',
      md: leftIcon ? 'pl-10' : 'pl-4',
      lg: leftIcon ? 'pl-12' : 'pl-4',
    };

    const rightPadding: Record<InputSize, string> = {
      sm: rightIcon ? 'pr-8' : 'pr-3',
      md: rightIcon ? 'pr-10' : 'pr-4',
      lg: rightIcon ? 'pr-12' : 'pr-4',
    };

    // Variant mappings
    const variantClasses: Record<InputVariant, string> = {
      outline:
        'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 shadow-2xs',
      filled:
        'bg-slate-100 border border-transparent text-slate-900 placeholder-slate-400 focus:bg-white focus:border-tertiary focus:ring-2 focus:ring-tertiary/20',
      unstyled:
        'bg-transparent border-0 text-slate-900 placeholder-slate-400 focus:ring-0 p-0',
    };

    // Error styling override
    const errorClasses = error
      ? 'border-red-500 text-red-900 focus:border-red-500 focus:ring-red-500/20'
      : '';

    // Container width
    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <div className={`flex flex-col gap-1.5 ${widthClass}`}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-bold text-slate-700 tracking-wide select-none"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Wrapper for positioning icons */}
        <div className="relative flex items-center w-full">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3.5 flex items-center pointer-events-none text-slate-400">
              {leftIcon}
            </div>
          )}

          {/* Core HTML Input */}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={`w-full font-sans transition-all duration-200 outline-none disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed ${sizeClasses[sizeVariant]} ${leftPadding[sizeVariant]} ${rightPadding[sizeVariant]} ${variantClasses[variant]} ${errorClasses} ${className}`.trim()}
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div className="absolute right-3.5 flex items-center text-slate-400">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Helper Text / Error Message */}
        {error ? (
          <p className="text-xs text-red-600 font-medium flex items-center gap-1">
            <span>{error}</span>
          </p>
        ) : helperText ? (
          <p className="text-xs text-slate-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
