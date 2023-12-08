'use client';

import { useOutsideClickListener } from '@/hooks/useOutSideClickListener';

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children, trigger }) => {
  const { isOpen, ref, toggle } = useOutsideClickListener();

  return (
    <div ref={ref} className="relative inline-block">
      <div className="cursor-pointer" onClick={toggle}>
        {trigger}
      </div>
      {isOpen && (
        <div
          style={{ width: '150px' }}
          className="absolute right-2 mt-2 animate-contentShow rounded border bg-white p-2 text-black shadow-md"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
