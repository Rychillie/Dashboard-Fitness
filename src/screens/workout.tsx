import TaskManager from '../components/task-manager';

export default function Workout() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <p className="text-neutral-600 dark:text-neutral-300">
        Plan your workouts and track your progress effectively. Use the task
        manager below to add, complete, and manage your workout tasks.
      </p>
      <div>
        <TaskManager />
      </div>
    </div>
  );
}
