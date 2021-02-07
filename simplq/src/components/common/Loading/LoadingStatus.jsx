import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';

export default ({ children, dependsOn }) => {
  const actionStatus = useSelector((state) => state.actionStatus[dependsOn]);

  return <Loading actionStatus={actionStatus}>{children}</Loading>;
};
