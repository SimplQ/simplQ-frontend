import React from 'react';
import SidePanel from '../../common/SidePanel';
import AddMember from './AddMember';
import PauseQueue from './PauseQueue';
import DeleteQueue from './DeleteQueue';
import QueueHistory from './QueueHistory';
import QueueDetails from '../Status/QueueDetails';

export default (props) => (
  <SidePanel>
    <AddMember queueId={props.queueId} joinQueueHandler={props.joinQueueHandler} />
    <PauseQueue />
    <DeleteQueue queueId={props.queueId} />
    <QueueHistory />
    <QueueDetails queueId={props.queueId} />
  </SidePanel>
);
