import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Hook for managing click events outside a specified component.
 *
 * @returns {Object} An object containing the state, toggle function, and ref for the target element.
 */
export const useOutsideClickListener = () => {
  // State to manage the open/closed state of the component
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Reference to the component that triggers the open/close behavior
  const ref = useRef<HTMLDivElement | null>(null);

  /**
   * Callback to handle click events outside the specified component.
   *
   * @param {MouseEvent} event - The click event.
   */
  const handleClick = useCallback(
    (event: MouseEvent) => {
      // Check if the component is open, the ref exists, and the click is outside of it
      if (isOpen && ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  /**
   * Effect to add and remove the click event listener on document mount/unmount.
   *
   * This ensures the listener is only added and removed when the component is mounted and unmounted,
   * preventing memory leaks and performance issues.
   */
  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  /**
   * Toggle function to change the open/closed state of the component.
   */
  const toggle = useCallback(() => setIsOpen((prevIsOpen) => !prevIsOpen), []);

  // Return values for the component using the hook
  return { isOpen, toggle, ref };
};
