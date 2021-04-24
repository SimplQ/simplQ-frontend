import React from 'react';
import SidePanel from 'components/common/SidePanel';
import ContactAdmin from './ContactAdmin';
import QueueDetails from './QueueInfo';
import NotificationContainer from './NotificationContainer';

export default () => (
  <SidePanel>
    <ContactAdmin />
    <QueueDetails />
    <NotificationContainer />
  </SidePanel>
);
