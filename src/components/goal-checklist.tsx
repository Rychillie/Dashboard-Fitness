import { useEffect, useState } from 'react';

const GoalChecklist = () => {
  const [goalList, setGoalList] = useState<string[]>([]);
  const [newGoal, setNewGoal] = useState<string>('');
  const [completedGoals, setCompletedGoals] = useState<number>(0);

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem('goals') || '[]');
    setGoalList(storedGoals);
    setCompletedGoals(
      storedGoals.filter((goal: string | string[]) =>
        goal.includes('(Completed)')
      ).length
    );
  }, []);

  const addGoal = () => {
    if (newGoal.trim() === '') return; // Prevent adding empty goals
    const updatedGoals = [...goalList, newGoal];
    setGoalList(updatedGoals);
    localStorage.setItem('goals', JSON.stringify(updatedGoals));
    setNewGoal(''); // Clear input after adding
  };

  const toggleGoal = (index: number) => {
    const updatedGoals = [...goalList];
    updatedGoals[index] = updatedGoals[index].includes('(Completed)')
      ? updatedGoals[index].replace(' (Completed)', '')
      : updatedGoals[index] + ' (Completed)';
    setGoalList(updatedGoals);
    localStorage.setItem('goals', JSON.stringify(updatedGoals));
    setCompletedGoals(
      updatedGoals.filter((goal) => goal.includes('(Completed)')).length
    );
  };

  return (
    <div>
      <h2>Daily Goals Checklist</h2>
      <input
        type="text"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        placeholder="Enter a new goal"
      />
      <button onClick={addGoal}>Add Goal</button>
      <ul>
        {goalList.map((goal, index) => (
          <li key={index} onClick={() => toggleGoal(index)}>
            {goal}
          </li>
        ))}
      </ul>
      <p>Completed Goals: {completedGoals}</p>
    </div>
  );
};

export default GoalChecklist;
