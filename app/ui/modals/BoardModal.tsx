'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import { createClient, getUserIdClinet } from '@/app/lib/supabase/client';
import { useBoardModal } from '@/hooks/useBoardModal';
import { useRouter } from 'next/navigation';
import Modal from '../Modal';

export function BoardModal() {
  const { isOpen, onClose } = useBoardModal();
  const { refresh, push } = useRouter();
  const [boardName, setBoardName] = useState('');

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const supabase = createClient();
    const id = await getUserIdClinet();

    const { error } = await supabase
      .from('projects')
      .insert({ project_name: boardName, user_id: id });

    if (error) {
      push('/board?message=Could not add board name');
    } else {
      // Redirect to the desired page after a successful insert.
      push('/board?message=Board added successfully');
      // Optionally, you can perform other actions on success.
      refresh();
    }

    // Close the modal regardless of success or failure.
    onClose();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBoardName(e.target.value);
  };

  return (
    <Modal title="Add New Board" onChange={onChange} isOpen={isOpen}>
      <form onSubmit={onSubmit}>
        <label htmlFor="board" className="mb-1 block">
          Board
        </label>
        <input
          type="text"
          name="Board"
          id="board"
          value={boardName}
          onChange={handleInputChange}
          className="w-full rounded-md border border-gray-500 bg-transparent p-2 focus:outline-none"
          placeholder="e.g. Add a board name"
          required
        />
        <button className="mt-3 w-full rounded-full bg-primary-color p-2">
          Add Board
        </button>
      </form>
    </Modal>
  );
}
