'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Hook for handling click events outside a specified component.
 * @returns {Object} An object containing the state, toggle function, and ref for the target element.
 */
export const useOutsideClickListener = (): {
  isOpen: boolean;
  toggle: () => void;
  selectOptionRef: React.MutableRefObject<HTMLDivElement | null>;
} => {
  // State to manage the open/closed state of the component
  const [isOpen, setIsOpen] = useState(false);

  // Reference to the component that triggers the open/close behavior
  const selectOptionRef = useRef<HTMLDivElement | null>(null);

  /**
   * Callback to handle click events outside the specified component.
   * @param {MouseEvent} event - The click event.
   */
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      // Check if the component exists and the click is outside of it
      if (
        selectOptionRef.current &&
        !selectOptionRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [setIsOpen],
  );

  /**
   * Callback to handle click events on the document, ensuring the component is still mounted.
   * @param {MouseEvent} event - The click event.
   */
  const handleDocumentClick = useCallback(
    (event: MouseEvent) => {
      // Check if the component is still mounted before handling the click
      if (document.body.contains(selectOptionRef.current as Node)) {
        handleClickOutside(event);
      }
    },
    [handleClickOutside, selectOptionRef],
  );

  // Effect to add and remove the click event listener on document mount/unmount
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [handleDocumentClick]);

  /**
   * Toggle function to change the open/closed state of the component.
   */
  const toggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, [setIsOpen]);

  // Return values for the component using the hook
  return { isOpen, toggle, selectOptionRef };
};
