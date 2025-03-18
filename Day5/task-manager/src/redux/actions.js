import { v4 as uuidv4 } from 'uuid';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const CHECK_AUTH = 'CHECK_AUTH';

export const login = (credentials) => {
  return (dispatch) => {
    // Simulate authentication
    if (credentials.username && credentials.password) {
      localStorage.setItem('isAuthenticated', 'true');
      dispatch({ type: LOGIN_SUCCESS });
    }
  };
};

export const logout = () => {
  localStorage.removeItem('isAuthenticated');
  return { type: LOGOUT };
};

export const addTask = (text) => {
  return {
    type: ADD_TASK,
    payload: { id: uuidv4(), text },
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const fetchTasksSuccess = (tasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: tasks,
  };
};

export const fetchTasks = () => {
  return (dispatch) => {
    // Simulate fetching tasks (replace with API call)
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(fetchTasksSuccess(storedTasks));
  };
};

export const checkAuth = () => {
  return (dispatch) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      dispatch({ type: LOGIN_SUCCESS });
    }
  };
};