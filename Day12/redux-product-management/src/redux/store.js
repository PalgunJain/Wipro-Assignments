import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Corrected import
import rootReducer from './reducers/rootReducer'; // corrected path.

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;