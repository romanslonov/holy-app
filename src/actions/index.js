/*
 * Actions types
 */

export const SET_USER = 'SET_USER';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

/*
 * Actions generators
 */

export function setUser(user) {
  return { type: SET_USER, user };
}

export function authenticateUser() {
  return { type: AUTHENTICATE_USER };
}
