import { combineReducers } from 'redux';
import auth from './user.reducer';
import toast from './toast.reducer';

const rootReducer = combineReducers({
  auth,
  toast,
});

export default rootReducer;
