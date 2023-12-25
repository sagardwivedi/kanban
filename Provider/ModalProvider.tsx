'use client';

import AddTask from '@/components/board/addTask';
import CreateBoard from '@/components/board/createBoard';
import { useSearchParams } from 'next/navigation';

export function ModalProvider() {
  const params = useSearchParams().get('show');

  switch (params) {
    case 'createBoard':
      return <CreateBoard />;
    case 'addTask':
      return <AddTask />;
    default:
      return null;
  }
}
