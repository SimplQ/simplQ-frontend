import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import QueueInfo from 'components/common/QueueInfo';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';

export default ({ queueId }) => {
  return (
    <SidePanelItem
      Icon={InfoIcon}
      title="Queue Information"
      description="Other information about the queue"
      expandable
    >
      <QueueInfo queueId={queueId} />
    </SidePanelItem>
  );
};
