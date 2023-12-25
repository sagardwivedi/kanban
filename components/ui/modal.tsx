'use client';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useCallback, useEffect, useRef } from 'react';

interface ModalProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function Modal({ children, title, description }: ModalProps) {
  const overlay = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.target === overlay.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-black/50"
      onClick={onClick}
    >
      <div>
        <div>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
