import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import
import authReducer from './reducers/authReducer';
import tasksReducer from './reducers/tasksReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;