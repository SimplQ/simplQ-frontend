import React from 'react';
import SidePanel from 'components/common/SidePanel';
import AddMember from './AddMember';
import PauseQueue from './PauseQueue';
import DeleteQueue from './DeleteQueue';
import QueueHistory from './QueueHistory';
import QueueDetails from '../Status/QueueDetails';

export default ({ queueId }) => (
  <SidePanel>
    <AddMember queueId={queueId} />
    <PauseQueue />
    <DeleteQueue queueId={queueId} />
    <QueueHistory />
    <QueueDetails queueId={queueId} />
  </SidePanel>
);
