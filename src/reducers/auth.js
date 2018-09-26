import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, GET_PROFILE, LOGIN_ERROR,
} from '../actions';
import Auth from '../Auth';

const initialState = {
  user: {},
  token: Auth.getToken(),
  isFetching: false,
  isFetched: false,
  isAuthenticated: Auth.isUserAuthenticated(),
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state, isFetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user.user,
        token: action.user.token,
        isFetching: false,
        isFetched: true,
        isAuthenticated: true,
        error: {},
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case LOGOUT:
      return {
        ...state, user: {}, token: null, isFetched: false, isAuthenticated: false,
      };
    case GET_PROFILE:
      return {
        ...state,
        user: action.profile,
        isFetched: true,
      };
    default:
      return state;
  }
};
