import { createSelector } from 'reselect';
import initialState from './reducer';

const selectData = state => state.guests || initialState;

const makeSelectGuests = () =>
  createSelector(
    selectData,
    guestsData => guestsData.dataGuests,
  );

export { makeSelectGuests };
