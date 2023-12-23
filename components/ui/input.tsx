import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string[] | null;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, label, error, ...props }, ref) => {
    return (
      <div className="min-w-full">
        {label && (
          <label htmlFor={id} className="mb-1 block">
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
          {...props}
        />
        {error &&
          error.map((e, index) => (
            <p key={index} className="mt-px text-sm text-red-500">
              {e}
            </p>
          ))}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
