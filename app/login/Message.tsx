'use client';

import { useSearchParams } from 'next/navigation';

export function Message() {
  const params = useSearchParams();
  const message = params.get('message');

  return <>{message && <p className="mt-4 p-4 text-center">{message}</p>}</>;
}
