'use client';

import {
  PlusIcon,
  PlusSmallIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  Button,
  Dialog,
  Flex,
  IconButton,
  Select,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';

export function AddTaskDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button radius="full" size={'3'}>
          <PlusSmallIcon className="h-5 w-5" /> Add New Task
        </Button>
      </Dialog.Trigger>
      <Dialog.Content
        style={{
          backgroundColor: '#2c2c38',
          color: 'white',
          maxWidth: '450px',
        }}
      >
        <Dialog.Title weight={'medium'} size={'3'} mb={'4'}>
          Add New Task
        </Dialog.Title>
        <Flex direction={'column'} gap="3">
          <label>
            <Text as="div" size={'2'} mb={'1'} weight={'bold'}>
              Title
            </Text>
            <TextField.Input
              placeholder="e.g. Take coffee break"
              style={{ backgroundColor: '#2c2c38', border: '1px solid gray' }}
            />
          </label>
          <label>
            <Text as="div" size={'2'} mb={'1'} weight={'bold'}>
              Description
            </Text>
            <TextArea />
          </label>
          <label>
            <Text as="div" size={'2'} mb={'1'} weight={'bold'}>
              Subtasks
            </Text>
            <Flex direction={'column'} gap={'2'}>
              <Flex direction={'row'} gap={'2'} align={'center'} grow={'1'}>
                <TextField.Input
                  variant="surface"
                  color="amber"
                  className="w-full"
                  style={{ width: '360px' }}
                  placeholder="e.g. Take coffee break"
                />
                <IconButton>
                  <XMarkIcon className="h-5 w-5" />
                </IconButton>
              </Flex>
              <Button
                radius="full"
                style={{ backgroundColor: 'white', color: 'rgb(98, 96, 200)' }}
              >
                <PlusIcon className="h-5 w-5" />
                Add New Subtask
              </Button>
            </Flex>
          </label>
          <label>
            <Text as="div" size={'2'} mb={'1'} weight={'bold'}>
              Status
            </Text>
            <Status />
          </label>
          <Button radius="full">Create Task</Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export function Status() {
  return (
    <Select.Root defaultValue="TODO">
      <Select.Trigger style={{ width: '400px' }} />
      <Select.Content position="popper">
        <Select.Item value="TODO">TODO</Select.Item>
        <Select.Item value="DOING">DOING</Select.Item>
        <Select.Item value="DONE">DONE</Select.Item>
      </Select.Content>
    </Select.Root>
  );
}
