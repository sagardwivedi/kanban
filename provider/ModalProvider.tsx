'use client';

import { BoardModal } from '@/app/ui/modals/BoardModal';
import { NewTaskModal } from '@/app/ui/modals/NewTaskModal';
import { TaskModal } from '@/app/ui/modals/TaskModal';
import { useTaskModal } from '@/hooks/useTaskModal';
import { useEffect, useState } from 'react';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { task } = useTaskModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewTaskModal />
      <BoardModal />
      <TaskModal task={task} />
    </>
  );
};
