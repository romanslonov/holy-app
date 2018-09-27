import { TOAST_SUCCESS, TOAST_ERROR, TOAST_CLEAR } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case TOAST_SUCCESS:
      return {
        type: 'success',
        message: action.message,
      };
    case TOAST_ERROR:
      return {
        type: 'error',
        message: action.message,
      };
    case TOAST_CLEAR:
      return {};
    default:
      return state;
  }
};
