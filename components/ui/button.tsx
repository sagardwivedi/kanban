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
        className={cn(
          'min-w-[90%] max-w-full rounded-md bg-purple-700 p-2 text-white disabled:cursor-not-allowed',
          isSubmitting ? 'opacity-50' : 'hover:bg-purple-800',
          className,
        )}
        ref={ref}
        {...props}
      >
        {text}
      </button>
    );
  },
);

Button.displayName = 'Button';
