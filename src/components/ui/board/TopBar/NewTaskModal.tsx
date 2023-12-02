'use client';

import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';

import { Button } from '@/components/Button';
import Input from '@/components/Input';
import { Modal } from '@/components/Modal';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNewTaskModal } from '@/hooks/useNewTaskModal';

const TaskSchema = z.object({
  task_name: z.string().min(1, { message: 'Task title is required' }),
  description: z.string(),
  subtasks: z.array(
    z.object({
      subtask_name: z.string().min(1, { message: 'Subtask name is required' }),
    }),
  ),
  status: z.enum(['pending', 'in progress', 'completed']),
});

export type TaskField = z.infer<typeof TaskSchema>;

export function NewTaskModal() {
  const { isOpen, onClose } = useNewTaskModal();

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TaskField>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      description: '',
      subtasks: [{ subtask_name: '' }],
      task_name: '',
      status: 'pending',
    },
    shouldUseNativeValidation: true,
  });

  const { append, remove, fields } = useFieldArray({
    control,
    name: 'subtasks',
  });

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const onSubmit = (data: FieldValues) => console.log('data', data);

  return (
    <Modal title="Add New Task" isOpen={isOpen} onChange={onChange}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <Input
          label="Title"
          id="task_name"
          placeholder="e.g. Take coffee break"
          className="border-primary-background_dark focus:outline-white"
          {...register('task_name', { required: true })}
        />
        <div>
          <label className="mb-1 block" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            {...register('description')}
            rows={6}
            placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"
            className="w-full resize-none rounded-md border border-primary-background_dark bg-transparent p-2"
          />
        </div>
        <div className="w-full">
          <label className="mb-1 block" htmlFor="subtasks">
            Subtasks
          </label>
          <div className="space-y-2">
            {fields.map((f, index) => (
              <div key={f.id} className="flex w-full items-center gap-2">
                <Input
                  className="w-max"
                  {...register(`subtasks.${index}.subtask_name`, {
                    required: true,
                  })}
                />
                <XMarkIcon
                  onClick={() => remove(index)}
                  className="h-8 w-8 cursor-pointer text-gray-500 hover:text-primary-color"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => append({ subtask_name: '' })}
            type="button"
            className="mt-4 flex w-full flex-row items-center justify-center gap-x-1 rounded-full bg-white p-2 font-semibold text-primary-color"
          >
            <PlusIcon className="h-5 w-5" />
            Add New Subtask
          </button>
        </div>
        <div>
          <label className="mb-1 block" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            {...register('status', { required: true })}
            className="w-full rounded-md border border-primary-background_dark bg-transparent p-2 focus:outline-none"
          >
            <option
              className="bg-secondary-background_light text-black dark:bg-secondary-background_dark dark:text-white"
              value="pending"
            >
              Pending
            </option>
            <option
              className="bg-secondary-background_light text-black dark:bg-secondary-background_dark dark:text-white"
              value="in progress"
            >
              IN PROGRESS
            </option>
            <option
              className="bg-secondary-background_light text-black dark:bg-secondary-background_dark dark:text-white"
              value="completed"
            >
              Completed
            </option>
          </select>
        </div>
        <Button
          isSubmitting={isSubmitting}
          text="Create Task"
          className="rounded-full"
        />
      </form>
    </Modal>
  );
}
