import { Title } from '../components';
import ResponsiveChart from '../components/responsive-chart';

const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const completedTasksByDate: { date: string; count: number }[] = [];
  const completedTasks: { date: string; text: string }[] = [];

  tasks.forEach((task: { completed: boolean; date: string; text: string }) => {
    if (task.completed) {
      const existing = completedTasksByDate.find(
        (item) => item.date === task.date
      );
      if (existing) {
        existing.count += 1;
      } else {
        completedTasksByDate.push({ date: task.date, count: 1 });
      }
      completedTasks.push({ date: task.date, text: task.text });
    }
  });

  return { completedTasksByDate, completedTasks };
};

export default function Progress() {
  const { completedTasksByDate, completedTasks } = loadTasks();

  return (
    <>
      <Title>Progress</Title>
      <ResponsiveChart data={completedTasksByDate} />
      <h3>Completed Tasks Timeline</h3>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>
            <strong>{task.date}:</strong> {task.text}
          </li>
        ))}
      </ul>
    </>
  );
}
