import React, { createContext, useReducer, useContext } from 'react';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'SET_TASKS':
      return action.payload;
    default:
      return state;
  }
};

export const TaskProvider = ({ children, initialTasks = [] }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const addTask = (text) => {
    dispatch({ type: 'ADD_TASK', payload: text });
  };

  const removeTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  const toggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const setTasks = (tasks) => {
    dispatch({type: 'SET_TASKS', payload: tasks});
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasksContext = () => {
  return useContext(TaskContext);
};