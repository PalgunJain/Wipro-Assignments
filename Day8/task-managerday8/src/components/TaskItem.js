// src/components/TaskItem.js
import React from 'react';
import { useTasksContext } from '../contexts/TaskContext';

const TaskItem = ({ task }) => {
  const { removeTask, toggleTask } = useTasksContext();

  return (
    <li className={task.completed ? 'completed' : ''}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => toggleTask(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => removeTask(task.id)}>Remove</button>
      </div>
    </li>
  );
};

export default TaskItem;