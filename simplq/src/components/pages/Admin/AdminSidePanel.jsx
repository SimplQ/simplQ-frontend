import React from 'react'
import SidePanel from 'components/common/SidePanel'
import QueueDetails from './QueueInfo'
import AddMember from './AddMember'
import PauseQueue from './PauseQueue'
import DeleteQueue from './DeleteQueue'
import QueueSettings from './QueueSettings'
import QueueHistoryPanel from './QueueHistoryPanel'

export default ({ queueId }) => (
    <SidePanel>
        <AddMember queueId={queueId} />
        <PauseQueue queueId={queueId} />
        <DeleteQueue queueId={queueId} />
        <QueueDetails queueId={queueId} />
        <QueueSettings queueId={queueId} />
        <QueueHistoryPanel queueId={queueId} />
    </SidePanel>
)
