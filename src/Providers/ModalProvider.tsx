'use client';

import { BoardModal } from '@/components/ui/board/Sidebar/BoardModal';
import { TaskModal } from '@/components/ui/board/TaskModal';
import { NewTaskModal } from '@/components/ui/board/TopBar/NewTaskModal';
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
      <TaskModal />
    </>
  );
};
