import { useState, useRef, useEffect } from 'react';

export const useOutsideClickListener = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectOptionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectOptionRef.current &&
        !selectOptionRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return { isOpen, toggle, selectOptionRef };
};
