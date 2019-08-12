import { put, takeLatest, select } from 'redux-saga/effects';
import * as type from './constants';
// import { loginSuccess, loginErro } from './actions';
import { makeSelectGuests } from './selector';
// import from './db.json';

export function* guests() {
  const data = [];
  try {
  } catch() {
  }
}

export default function* sagaWatcher() {
  yield takeLatest(type.LOAD_DATA, guests);
}
