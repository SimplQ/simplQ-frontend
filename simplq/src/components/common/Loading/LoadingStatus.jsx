import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const LoadingStatus = ({ children, dependsOn }) => {
  const actionName = dependsOn;
  const actionStatus = useSelector((state) => state.actionStatus[actionName]);

  return <Loading actionStatus={actionStatus}>{children}</Loading>;
};

LoadingStatus.propTypes = {
  dependsOn: PropTypes.string.isRequired,
};

export default LoadingStatus;
