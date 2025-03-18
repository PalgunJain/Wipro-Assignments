import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;