'use client';

import { useParams } from 'next/navigation';

import { Board } from '@/lib/definition';

export function BoardName({ boards }: { boards: Board[] }) {
  const params = useParams();

  const name = boards.find((b) => b.project_id === params.id)?.project_name;

  return (
    <h2 className="text-3xl font-bold text-black dark:text-white">{name}</h2>
  );
}
