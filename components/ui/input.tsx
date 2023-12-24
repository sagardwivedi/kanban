import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string[] | null;
  ariaError?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, label, ariaError, error, ...props }, ref) => {
    return (
      <div className="min-w-[90%] max-w-full">
        {label && (
          <label htmlFor={id} className="mb-1 block select-none">
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          className={cn(
            'form-input min-w-full rounded-md focus:ring-purple-600',
            error ? 'border-red-500 focus:border-red-500 focus:ring-0' : '',
            className,
          )}
          ref={ref}
          aria-describedby={ariaError}
          {...props}
        />
        <div id={ariaError} aria-live="polite" aria-atomic="true">
          {error &&
            error.map((e) => (
              <p className="mt-1 text-sm text-red-500" key={e}>
                {e}
              </p>
            ))}
        </div>
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
