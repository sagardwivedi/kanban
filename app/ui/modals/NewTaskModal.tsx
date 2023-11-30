'use client';

import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';

import { useNewTaskModal } from '@/hooks/useNewTaskModal';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import Input from '../Input';
import Modal from '../Modal';
import { Select } from '../Select';

export function NewTaskModal() {
  const { isOpen, onClose } = useNewTaskModal();

  const { control, register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      task_name: '',
      description: '',
      status: '',
    },
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
        <div>
          <label className="mb-1 block" htmlFor="task_name">
            Title
          </label>
          <Input
            id="task_name"
            placeholder="e.g. Take coffee break"
            {...register('task_name')}
          />
        </div>
        <div>
          <label className="mb-1 block" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            rows={6}
            placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"
            className="w-full resize-none  rounded-md border border-gray-950 bg-transparent p-2 placeholder:text-gray-500 focus:outline-none dark:border-gray-50"
            {...register('description')}
          />
        </div>
        <div>
          <label className="mb-1 block" htmlFor="subtasks">
            Subtasks
          </label>
          <div className="flex flex-col gap-y-2">
            {fields.map((item, index) => {
              return (
                <div key={item.id} className="flex flex-row items-center gap-2">
                  <Input
                    placeholder="e.g. Make a coffee"
                    {...register(`subtask.${index}.name`, { required: true })}
                  />
                  <XMarkIcon
                    onClick={() => remove(index)}
                    className="h-8 w-8 cursor-pointer font-semibold text-white/50 hover:text-white"
                  />
                </div>
              );
            })}
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
          <Select id="status" {...register('status', { required: true })}>
            <option value="hello">Hello</option>
          </Select>
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded-full bg-primary-color  p-2 font-semibold text-white"
        >
          Create Task
        </button>
      </form>
    </Modal>
  );
}
