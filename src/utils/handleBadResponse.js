/* eslint-disable import/no-cycle */
import history from '../history';
import store from '../store';
import { errorToast, logout } from '../actions';

/*
 * Handle response from API
 */
export default function handleBadResponse(response) {
  const { status } = response;
  const { console } = window;
  switch (status) {
    case 400:
      response.json().then(({ message }) => {
        store.dispatch(errorToast(message));
      });
      break;
    case 401:
      store.dispatch(logout());
      store.dispatch(errorToast('Authentication failed'));
      history.replace('/');
      break;
    case 404:
      console.log(response);
      break;
    case 422:
      console.log(response);
      break;
    case 500:
      console.log(response);
      break;
    default:
  }
}
