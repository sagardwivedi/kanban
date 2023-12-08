'use client';

import { usePathname } from 'next/navigation';
import { AddNewTaskButton, LogOutButton } from '../buttons';
import { SelectOption } from './SelectOption';

export function Side() {
  const path = usePathname();

  const isProject = /^\/board\/[a-f\d-]+$/i.test(path);

  return (
    <>
      {isProject ? (
        <>
          <AddNewTaskButton />
          <SelectOption />
        </>
      ) : (
        <LogOutButton />
      )}
    </>
  );
}
