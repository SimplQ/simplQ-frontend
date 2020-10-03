import React from 'react';
import SidePanel from '../../common/SidePanel';
import LeaveQueue from './LeaveQueue';
import ContactAdmin from './ContactAdmin';
import QueueDetails from './QueueDetails';

export default (props) => (
  <SidePanel>
    <LeaveQueue />
    <ContactAdmin />
    <QueueDetails queueId={props.queueId} />
  </SidePanel>
);
