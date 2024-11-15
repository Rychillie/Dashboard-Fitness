import { Title } from '../components';

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Title>Welcome to Fit Dash</Title>
      <p>
        Fit Dash is your personal fitness dashboard designed to help you track
        your workouts and progress effectively.
      </p>
      <h2>Features</h2>
      <ul className="list-disc pl-5">
        <li>
          <strong>Task Management:</strong> Create and manage your workout tasks
          easily.
        </li>
        <li>
          <strong>Progress Tracking:</strong> Visualize your workout progress
          with interactive charts.
        </li>
        <li>
          <strong>Goal Setting:</strong> Set daily fitness goals and track your
          achievements.
        </li>
        <li>
          <strong>Theme Toggle:</strong> Switch between light and dark themes
          for a personalized experience.
        </li>
      </ul>
      <p>Start your fitness journey today and stay motivated with Fit Dash!</p>
    </div>
  );
}
