'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import { addBoardName } from '@/app/lib/utils';
import { useBoardModal } from '@/hooks/useBoardModal';
import Modal from '../Modal';

export function BoardModal() {
  const { isOpen, onClose } = useBoardModal();
  const [boardName, setBoardName] = useState('');

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBoardName(boardName);
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
          className="w-full rounded-md  border border-gray-500 bg-transparent p-2 focus:outline-none"
          placeholder="e.g. Add a board name"
        />
        <button className="mt-3 w-full rounded-full bg-primary-color p-2">
          Add Board
        </button>
      </form>
    </Modal>
  );
}
