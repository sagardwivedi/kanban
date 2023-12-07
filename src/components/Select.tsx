'use client';

import React from 'react';

import { useOutsideClickListener } from '@/hooks/useOutSideClickListener';
import { cn } from '@/lib/utils';

/**
 * Props for the SelectOption component.
 */
interface SelectOptionProps {
  onClick?: () => void;
  children: React.ReactNode;
}

/**
 * SelectOption component represents an option in the dropdown menu of the Select component.
 */
const SelectOption: React.FC<SelectOptionProps> = ({ onClick, children }) => (
  <div
    onClick={onClick}
    className="cursor-pointer rounded-md p-1 dark:hover:bg-primary-color dark:hover:text-white"
  >
    {children}
  </div>
);

/**
 * Props for the Select component.
 */
interface SelectProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string; // Make className optional
}

/**
 * Select component is a customizable dropdown menu.
 */
const Select: React.FC<SelectProps> = ({ children, trigger, className }) => {
  const { isOpen, selectOptionRef, toggle } = useOutsideClickListener();

  return (
    <div className="relative">
      <div onClick={toggle} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={selectOptionRef}
          className={cn(
            'absolute right-4 w-36 animate-contentShow rounded-md bg-primary-background_light p-2 shadow dark:bg-primary-background_dark',
            className,
          )}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              // Pass onClick and toggle function to child elements
              return React.cloneElement(child as React.ReactElement<any>);
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export { Select, SelectOption };
