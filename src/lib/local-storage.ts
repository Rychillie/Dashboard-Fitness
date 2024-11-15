export const saveGoal = (goal: string) => {
  const existingGoals = JSON.parse(localStorage.getItem('goals') || '[]');
  existingGoals.push(goal);
  localStorage.setItem('goals', JSON.stringify(existingGoals));
};

export const loadGoals = () => {
  const goals = JSON.parse(localStorage.getItem('goals') || '[]');
  return goals;
};
