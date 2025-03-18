import React from 'react';

function TaskItem({ task, onDelete }) {
  return (
    <li>
      {task.text}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;