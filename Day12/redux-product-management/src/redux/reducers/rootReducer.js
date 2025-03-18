import { combineReducers } from 'redux';
import productReducer from './productReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
  products: productReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;