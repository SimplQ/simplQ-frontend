import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const LoadingStatus = ({ children, dependsOn }) => {
  const actionName = Object.keys(dependsOn)[0];
  const actionStatus = useSelector((state) => state.actionStatus[actionName]);

  return <Loading actionStatus={actionStatus}>{children}</Loading>;
};

LoadingStatus.propTypes = {
  dependsOn: PropTypes.objectOf(PropTypes.function).isRequired,
};

export default LoadingStatus;
