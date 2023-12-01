'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { postBoard } from '@/actions/crudAction';
import { Button } from '@/components/Button';
import Input from '@/components/Input';
import { Modal } from '@/components/Modal';
import { useBoardModal } from '@/hooks/useNewTaskModal';

const BoardSchema = z.object({
  board: z.string().min(1, { message: 'Please enter board name' }),
});

export type BoardField = z.infer<typeof BoardSchema>;

export function BoardModal() {
  const { isOpen, onClose } = useBoardModal();
  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm<BoardField>({
    shouldUseNativeValidation: true,
    resolver: zodResolver(BoardSchema),
    defaultValues: {
      board: '',
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const FormSubmit = async (data: BoardField) => {
    await postBoard(data);
    reset();
    onClose();
  };

  return (
    <Modal title="Add New Board" onChange={onChange} isOpen={isOpen}>
      <form
        onSubmit={handleSubmit((data) => FormSubmit(data))}
        className="space-y-4"
      >
        <Input
          label="Board"
          id="board"
          type="text"
          placeholder="e.g. Add a board name"
          {...register('board', { required: true })}
        />
        <Button isSubmitting={isSubmitting} text="Add Board" />
      </form>
    </Modal>
  );
}
