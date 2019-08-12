import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogin = state => state.login || initialState;

const makeSelectUsers = () =>
  createSelector(
    selectLogin,
    loginState => loginState.email,
  );
const makeSelectPassword = () =>
  createSelector(
    selectLogin,
    loginState => loginState.password,
  );
const makeSelectErr = () =>
  createSelector(
    selectLogin,
    loginState => loginState.err,
  );
const makeSelectLogged = () =>
  createSelector(
    selectLogin,
    loginState => loginState.isLoggedIn,
  );
// export { selectLog };
export {
  selectLogin,
  makeSelectUsers,
  makeSelectPassword,
  makeSelectErr,
  makeSelectLogged,
};
