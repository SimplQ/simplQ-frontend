import React from 'react';
import SidePanel from 'components/common/SidePanel';
import QueueDetails from './QueueInfo';
import AddMember from './AddMember';
import QueueHistory from './QueueHistory';
import DeleteQueue from './DeleteQueue';
import QueueSettings from './QueueSettings';

export default ({ queueId }) => (
  <SidePanel>
    <AddMember queueId={queueId} />
    <DeleteQueue queueId={queueId} />
    <QueueHistory queueId={queueId} />
    <QueueDetails queueId={queueId} />
    <QueueSettings queueId={queueId} />
  </SidePanel>
);
