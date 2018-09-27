import request from '../request';
import Auth from '../Auth';

/*
 * Actions types
 */
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const GET_PROFILE = 'GET_PROFILE';

/*
 * Actions generators
 */
export function loginRequest() {
  return { type: LOGIN_REQUEST };
}

export function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, user };
}

export function loginError() {
  return { type: LOGIN_ERROR };
}

export function logout() {
  Auth.deauthenticateUser();
  return { type: LOGOUT };
}

export function getProfile(profile) {
  return { type: GET_PROFILE, profile };
}

export function login(credentials) {
  return (dispatch) => {
    dispatch(loginRequest());
    return request('http://localhost:9000/auth/login/', {
      method: 'POST',
      hasToken: false,
      fullPath: true,
      body: JSON.stringify(credentials),
    })
      .then(response => response.json())
      .then(({ token, user }) => {
        Auth.authenticateUser(token);
        dispatch(loginSuccess({ user, token }));
      })
      .catch((err) => {
        dispatch(loginError());
        throw err;
      });
  };
}

export function fetchProfile() {
  return dispatch => request('/profile/')
    .then(response => response.json())
    .then(({ profile }) => dispatch(getProfile(profile)));
}
