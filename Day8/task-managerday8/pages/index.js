import AddTask from '../src/components/AddTask';
import TaskList from '../src/components/TaskList';
import { useTasks } from '../src/hooks/useTasks';

function Home({initialTasks}) {
  const { totalTasks, completedTasks } = useTasks();

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // Simulate fetching initial tasks from an API or database
  const initialTasks = [
    { id: 1, text: 'Learn React Hooks', completed: true },
    { id: 2, text: 'Implement Context API', completed: false },
  ];

  return {
    props: {
        initialTasks,
    },
  };
}

export default Home;