import { SET_USER, AUTHENTICATE_USER } from '../actions';

const initialState = {
  user: {},
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case AUTHENTICATE_USER:
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
};
