import { forwardRef } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
  text: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isSubmitting, text, ...props }, ref) => {
    return (
      <button
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        ref={ref}
        className="w-full rounded-md bg-primary-color p-2 text-white disabled:opacity-75"
      >
        {text}
      </button>
    );
  },
);

Button.displayName = 'Button';