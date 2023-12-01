import { forwardRef } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, label, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="mb-1 block">
          {label}
        </label>
        <input
          type={type}
          id={id}
          className="w-full rounded-md border bg-transparent p-2 focus:outline-primary-color"
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
