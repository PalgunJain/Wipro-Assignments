import { useTasksContext } from '../contexts/TaskContext';

export const useTasks = () => {
  const { tasks, addTask, removeTask, toggleTask, setTasks } = useTasksContext();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return {
    tasks,
    addTask,
    removeTask,
    toggleTask,
    totalTasks,
    completedTasks,
    setTasks
  };
};