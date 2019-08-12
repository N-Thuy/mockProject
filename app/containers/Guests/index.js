import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { makeSelectGuests } from './selector';
import { loadData } from './action';

const key = 'guests';

export function Guests(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    props.onLoadData();
  }, []);
  return (
    <MaterialTable
      title="Simple Action Preview"
      columns={[
        { title: 'Tên', field: 'name' },
        { title: 'Ngày Sinh', field: 'birdthday', type: 'numeric' },
        { title: 'Giới Tính', field: 'sex' },
        { title: 'Vị Trí', field: 'position' },
      ]}
      data={[]}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  dataGuests: makeSelectGuests(),
});

const mapDispatchToProps = dispatch => ({
  onLoadData: () => {
    dispatch(loadData());
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
Guests.propTypes = {
  onLoadData: PropTypes.func,
};

export default compose(
  withConnect,
  memo,
)(Guests);
