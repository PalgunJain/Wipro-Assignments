import { ADD_TASK, DELETE_TASK, FETCH_TASKS_SUCCESS } from '../actions';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return { ...state, tasks: filteredTasks };
    case FETCH_TASKS_SUCCESS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default tasksReducer;