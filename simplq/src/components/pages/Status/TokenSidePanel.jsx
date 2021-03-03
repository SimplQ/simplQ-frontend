import React from 'react';
import SidePanel from 'components/common/SidePanel';
import LeaveQueue from './LeaveQueue';
import ContactAdmin from './ContactAdmin';
import QueueDetails from './QueueDetails';
import NotificationContainer from './NotificationContainer';

export default () => (
  <SidePanel>
    <LeaveQueue />
    <ContactAdmin />
    <QueueDetails />
    <NotificationContainer />
  </SidePanel>
);
