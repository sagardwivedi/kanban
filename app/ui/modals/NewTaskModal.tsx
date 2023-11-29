'use client';

import {
  ChevronDownIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import {
  Content,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Portal,
  Root,
  Trigger,
  Value,
  Viewport,
} from '@radix-ui/react-select';

import { useNewTaskModal } from '@/hooks/useNewTaskModal';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import Input from '../Input';
import Modal from '../Modal';

export function NewTaskModal() {
  const { isOpen, onClose } = useNewTaskModal();
  const [isLoading, setIsLoading] = useState(false);

  const { control, register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      task_name: '',
      description: '',
      subtasks: [{ subtask_name: '' }],
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
            name="Description"
            id="description"
            rows={6}
            placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"
            className="w-full resize-none  rounded-md border border-gray-950 bg-transparent p-2 placeholder:text-gray-500 focus:outline-none dark:border-gray-50"
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
          <StatusSelect />
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

export const StatusSelect = ({ value }: { value?: string }) => {
  return (
    <Root defaultValue={value}>
      <Trigger
        className="flex w-full flex-row items-center justify-between rounded-md border border-neutral-500 bg-transparent p-2"
        aria-label="Status"
      >
        <Value placeholder="Select a Status" />
        <Icon>
          <ChevronDownIcon className="h-5 w-5" />
        </Icon>
      </Trigger>
      <Portal>
        <Content
          position="popper"
          className="bg-primary-background w-full rounded-md"
        >
          <Viewport className="w-[27rem] p-2">
            <Item
              className="flex w-full flex-row items-center justify-between gap-x-2"
              value="TODO"
            >
              <ItemText>TODO</ItemText>
              <ItemIndicator>
                <CheckIcon className="h-5 w-5" />
              </ItemIndicator>
            </Item>
            <Item className="flex flex-row items-center gap-x-2" value="DOING">
              <ItemText>DOING</ItemText>
              <ItemIndicator>
                <CheckIcon className="h-5 w-5" />
              </ItemIndicator>
            </Item>
            <Item className="flex flex-row items-center gap-x-2" value="DONE">
              <ItemText>DONE</ItemText>
              <ItemIndicator>
                <CheckIcon className="h-5 w-5" />
              </ItemIndicator>
            </Item>
          </Viewport>
        </Content>
      </Portal>
    </Root>
  );
};
