import { LOAD_DATA, LOAD_DATA_SUCCESS } from './constants';

export function loadData(data) {
  return {
    type: LOAD_DATA,
    data,
  };
}
export function loadDataSuccess(data) {
  return {
    type: LOAD_DATA_SUCCESS,
    data,
  };
}
