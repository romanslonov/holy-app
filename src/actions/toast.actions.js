export const TOAST_SUCCESS = 'TOAST_SUCCESS';
export const TOAST_ERROR = 'TOAST_ERROR';
export const TOAST_CLEAR = 'TOAST_CLEAR';

export function successToast(message) {
  return { type: TOAST_SUCCESS, message };
}

export function errorToast(message) {
  return { type: TOAST_ERROR, message };
}

export function clearToast() {
  return { type: TOAST_CLEAR };
}
