import React from 'react';
import SidePanel from 'components/common/SidePanel';
import LeaveQueue from './LeaveQueue';
import ContactAdmin from './ContactAdmin';
import QueueDetails from './QueueDetails';
import NotificationContainer from './NotificationContainer';

export default (props) => (
  <SidePanel>
    <LeaveQueue leaveQueueHandler={props.leaveQueueHandler} />
    <ContactAdmin />
    <QueueDetails queueId={props.queueId} />
    <NotificationContainer />
  </SidePanel>
);
