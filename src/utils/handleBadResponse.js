import history from '../history';
import Auth from '../Auth';

/*
 * Handle response from API
 */
export default function handleBadResponse(response) {
  const { status } = response;
  const { console } = window;
  switch (status) {
    case 400:
      response.json().then((resp) => {
        console.log(resp.message);
      });
      break;
    case 401:
      Auth.deauthenticateUser();
      history.replace('/');
      console.log('Authentication failed');
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
