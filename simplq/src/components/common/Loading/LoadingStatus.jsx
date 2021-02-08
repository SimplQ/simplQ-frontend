import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';

export default ({ children, dependsOn }) => {
  const actionName = Object.keys(dependsOn)[0];
  const actionStatus = useSelector((state) => state.actionStatus[actionName]);

  return <Loading actionStatus={actionStatus}>{children}</Loading>;
};
