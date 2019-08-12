import * as type from './constants';

export const initialState = { dataGuest: [] };

const gestReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOAD_DATA:
      return { ...state };
    case type.LOAD_DATA_SUCCESS:
      return { dataGuest: [...action.data] };
    default:
      return { ...state };
  }
};

export default gestReducer;
