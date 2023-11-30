import { SelectHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, disabled, children, ...props }, ref) => {
    return (
      <select
        {...props}
        ref={ref}
        disabled={disabled}
        className={twMerge('border p-2', disabled && 'opacity-75', className)}
      >
        {children}
      </select>
    );
  },
);

Select.displayName = 'Select';
