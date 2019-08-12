import { put, takeLatest, select } from 'redux-saga/effects';
import * as type from './constants';
import { loginSuccess, loginErro } from './actions';
import { makeSelectUsers, makeSelectPassword } from './selectors';
// import { fetchUser } from '../App/actions';
// import { getMaxListeners } from 'cluster';

export function* login() {
  const data = [...type.USERS];
  const emailUser = yield select(makeSelectUsers());
  const passwordUser = yield select(makeSelectPassword());
  let user = {};
  yield data.forEach(element => {
    if (element.email === emailUser) user = { ...element };
  });
  if (Object.keys(user).length) {
    yield user.password === passwordUser
      ? put(loginSuccess(user.role))
      : put(loginErro('Password không đúng'));
  } else {
    yield put(loginErro('Email không tồn tại'));
  }
}

export default function* sagaWatcher() {
  yield takeLatest(type.LOGIN_LOAD, login);
}
