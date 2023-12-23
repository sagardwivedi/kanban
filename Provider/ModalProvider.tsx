'use client';

import { Modal } from '@/components/ui/modal';
import { useSearchParams } from 'next/navigation';

export function ModalProvider() {
  const params = useSearchParams().get('show');

  switch (params) {
    case 'createBoard':
      return <Modal />;
    default:
      return null;
  }
}
