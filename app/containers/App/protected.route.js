import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);
ProtectedRoute.propTypes = {
  component: PropTypes.string,
};
