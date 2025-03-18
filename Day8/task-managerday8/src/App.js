import './App.css'; // Import the CSS file
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { useTasks } from './hooks/useTasks';

function App() {
  const { totalTasks, completedTasks } = useTasks();

  return (
    <div className="container"> {/* Wrap content with a container */}
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
      <div className="status">
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Tasks: {completedTasks}</p>
      </div>
    </div>
  );
}

export default App;