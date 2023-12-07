import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
  text: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isSubmitting, className, text, ...props }, ref) => {
    return (
      <button
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        ref={ref}
        className={cn(
          'w-full rounded-md bg-primary-color p-2 text-white disabled:opacity-75',
          className,
        )}
      >
        {text}
      </button>
    );
  },
);

Button.displayName = 'Button';
