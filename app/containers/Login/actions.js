import { LOGIN_LOAD, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

export function loginLoad(email, password, submit) {
  return {
    type: LOGIN_LOAD,
    email,
    password,
    submit,
  };
}

export function loginSuccess(role) {
  return {
    type: LOGIN_SUCCESS,
    role,
  };
}

export function loginErro(err) {
  return {
    type: LOGIN_ERROR,
    err,
  };
}
