import React, { useState } from 'react';
import { useTasksContext } from '../contexts/TaskContext';

const AddTask = () => {
  const [newTask, setNewTask] = useState('');
  const { addTask } = useTasksContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;