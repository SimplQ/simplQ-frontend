import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import QueueStats from 'components/common/QueueStats';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';

export default ({ queueId }) => {
  return (
    <SidePanelItem
      Icon={InfoIcon}
      title="Queue Details"
      description="Other information about the queue"
      expandable
    >
      <QueueStats queueId={queueId} />
    </SidePanelItem>
  );
};
