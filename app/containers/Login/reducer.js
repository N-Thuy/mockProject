import * as type from './constants';

export const initialState = {};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_LOAD:
      return { ...action, submit: true };
    case type.LOGIN_SUCCESS:
      localStorage.setItem(
        'token',
        JSON.stringify({ email: state.email, role: state.role }),
      );
      return { ...state, isLoggedIn: true, role: action.role };
    case type.LOGIN_ERROR:
      return { err: action.err };
    default:
      return { ...state };
  }
};

export default loginReducer;
