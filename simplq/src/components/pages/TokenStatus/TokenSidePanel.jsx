import React from 'react';
import SidePanel from 'components/common/SidePanel';
import QueueDetails from './QueueInfo';
import NotificationContainer from './NotificationContainer';

export default () => (
  <SidePanel>
    <QueueDetails />
    <NotificationContainer />
  </SidePanel>
);
