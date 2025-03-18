import { LOGIN_SUCCESS, LOGOUT, CHECK_AUTH } from '../actions'; // Import action types

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    case CHECK_AUTH:
      return {...state, isAuthenticated: localStorage.getItem('isAuthenticated') === 'true'};
    default:
      return state;
  }
};

export default authReducer;