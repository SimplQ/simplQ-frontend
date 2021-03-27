import React from 'react';
import SidePanel from 'components/common/SidePanel';
import QueueDetails from './QueueInfo';
import AddMember from './AddMember';
import PauseQueue from './PauseQueue';
import DeleteQueue from './DeleteQueue';
import QueueHistory from './QueueHistory';

export default ({ queueId }) => (
  <SidePanel>
    <AddMember queueId={queueId} />
    <PauseQueue queueId={queueId} />
    <DeleteQueue queueId={queueId} />
    <QueueHistory />
    <QueueDetails queueId={queueId} />
  </SidePanel>
);
