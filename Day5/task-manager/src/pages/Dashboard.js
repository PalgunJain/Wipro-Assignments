import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, fetchTasks } from '../redux/actions';
import TaskList from '../components/TaskList';

function Dashboard() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <TaskList tasks={tasks} onDelete={(id) => dispatch(deleteTask(id))} />
    </div>
  );
}

export default Dashboard;