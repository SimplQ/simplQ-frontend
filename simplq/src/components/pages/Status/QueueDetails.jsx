import React, { useState, useEffect } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import * as QueueService from '../../../services/queue';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';
import QueueStats from '../../common/QueueStats';

export default (props) => {
  const [queueStatusResponse, setQueueStatusResponse] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await QueueService.getStatus(props.queueId);
      setQueueStatusResponse(response);
    }
    fetchData();
  }, [props.queueId]);

  return (
    <SidePanelItem
      Icon={InfoIcon}
      title="Queue Details"
      description="Other information about the queue"
      expandable
      loading={!queueStatusResponse}
    >
      <QueueStats queueStatus={queueStatusResponse} />
    </SidePanelItem>
  );
};
