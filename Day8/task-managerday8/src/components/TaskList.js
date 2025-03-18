import React from 'react';
import { useTasksContext } from '../contexts/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTasksContext();
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;