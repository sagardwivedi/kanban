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

import { useTaskModal } from '@/hooks/useTaskModal';
import { CheckIcon } from '@heroicons/react/24/outline';
import Modal from './Modal';

export function TaskModal() {
  const { isOpen, onClose } = useTaskModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal title="Add New Task" isOpen={isOpen} onChange={onChange}>
      <form className="flex flex-col gap-3">
        <div>
          <label className="mb-1 block" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="Title"
            id="title"
            placeholder="e.g. Take coffee break"
            className="w-full rounded-md border border-gray-50 bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
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
            className="w-full resize-none  rounded-md border border-gray-50 bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block" htmlFor="subtasks">
            Subtasks
          </label>
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row items-center gap-2">
              <input
                type="text"
                name="Subtasks"
                id="subtasks"
                placeholder="e.g. Make Coffee"
                className="w-full rounded-md border border-gray-50 bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
              />
              <XMarkIcon className="h-8 w-8 cursor-pointer font-semibold text-white/50 hover:text-white" />
            </div>
            <div className="flex flex-row items-center gap-2">
              <input
                type="text"
                name="Subtasks"
                id="subtasks"
                placeholder="e.g. Make Coffee"
                className="w-full rounded-md border border-gray-50 bg-transparent p-2 placeholder:text-gray-500 focus:outline-none"
              />
              <XMarkIcon className="h-8 w-8 cursor-pointer font-semibold text-white/50 hover:text-white" />
            </div>
          </div>
          <button
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
          <Select />
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-full bg-primary-color  p-2 font-semibold text-white"
        >
          Create Task
        </button>
      </form>
    </Modal>
  );
}

const Select = () => {
  return (
    <Root>
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
          className="w-full rounded-md bg-primary-background"
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
