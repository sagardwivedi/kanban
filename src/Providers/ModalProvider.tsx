'use client';

import { BoardModal } from '@/components/ui/board/BoardModal';
import { NewTaskModal } from '@/components/ui/board/NewTaskModal';
import { useEffect, useState } from 'react';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <BoardModal />
      <NewTaskModal />
    </>
  );
};
