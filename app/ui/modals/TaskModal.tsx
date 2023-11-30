'use client';

import { Task } from '@/app/lib/definition';
import { useTaskModal } from '@/hooks/useTaskModal';
import Modal from '../Modal';

export function TaskModal({ task }: { task: Task | null }) {
  const { isOpen, onClose } = useTaskModal();

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
          </div>
        </form>
      </div>
    </Modal>
  );
}
