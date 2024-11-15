import { useEffect, useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState<
    { text: string; completed: boolean; date: string }[]
  >([]);
  const [newTask, setNewTask] = useState<string>('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  const addTask = () => {
    if (newTask.trim() === '') return; // Prevent adding empty tasks
    const task = {
      text: newTask,
      completed: false,
      date: new Date().toISOString().split('T')[0],
    };
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setNewTask(''); // Clear input after adding
  };

  const toggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-center text-2xl font-bold">Workout Tasks</h2>

      <div className="flex flex-col gap-4">
        <div className="flex w-full gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-1 py-1.5 px-3 text-base rounded bg-neutral-200 dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-600"
          />
          <button
            onClick={addTask}
            className="py-1.5 px-3 text-base rounded bg-green-500 font-bold"
          >
            Add Task
          </button>
        </div>

        {tasks.length > 0 && (
          <div className="bg-neutral-200/40 dark:bg-neutral-800/40 p-4 rounded-lg shadow-inner">
            <h3 className="text-center text-xl font-bold">To Do</h3>
            <ul>
              {tasks
                .filter((task) => !task.completed)
                .map((task, index) => (
                  <li key={index} onClick={() => toggleTask(index)}>
                    {task.text}
                  </li>
                ))}
            </ul>
          </div>
        )}

        {tasks.filter((task) => task.completed).length > 0 && (
          <div className="bg-neutral-200/40 dark:bg-neutral-800/40 p-4 rounded-lg shadow-inner">
            <h3 className="text-center text-xl font-bold">Completed</h3>
            <ul>
              {tasks
                .filter((task) => task.completed)
                .map((task, index) => (
                  <li key={index}>{task.text}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
