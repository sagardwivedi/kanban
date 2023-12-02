'use client';

import { Modal } from '@/components/Modal';
import { useTaskModal } from '@/hooks/useTaskModal';

export function TaskModal() {
  const { isOpen, onClose, task } = useTaskModal();

  if (task === null) {
    return null;
  }

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      title={task.task_name}
      description={task.description}
      onChange={onChange}
      isOpen={isOpen}
    >
      <div className="space-y-4">
        <h2>Subtasks ({task.subtasks.length})</h2>
        <form className="space-y-4">
          <div className="flex flex-col gap-y-1">
            {task.subtasks.map((task) => (
              <div
                key={task.subtask_id}
                className="flex flex-row items-center gap-x-2 rounded-md bg-neutral-900 px-3 py-2"
              >
                <input type="checkbox" className="peer accent-primary-color" />
                <p className="peer-checked:text-white/50 peer-checked:line-through">
                  {task.subtask_name}
                </p>
              </div>
            ))}
          </div>
          <div>
            <label className="mb-1 block" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              defaultValue={task.status}
              className="w-full rounded-md border border-primary-background_dark bg-transparent p-2 focus:outline-none"
            >
              <option
                className="bg-secondary-background_light text-black dark:bg-secondary-background_dark dark:text-white"
                value="Pending"
              >
                Pending
              </option>
              <option
                className="bg-secondary-background_light text-black dark:bg-secondary-background_dark dark:text-white"
                value="In Progress"
              >
                In Progress
              </option>
              <option
                className="bg-secondary-background_light text-black dark:bg-secondary-background_dark dark:text-white"
                value="Completed"
              >
                Completed
              </option>
            </select>
          </div>
        </form>
      </div>
    </Modal>
  );
}
