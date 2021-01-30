import React, { useState, useEffect } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import QueueStats from '../../common/QueueStats';
import { QueueRequestFactory } from '../../../api/requestFactory';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';
import useRequest from '../../../api/useRequest';

export default (props) => {
  const [queueStatusResponse, setQueueStatusResponse] = useState();
  const { requestMaker } = useRequest();

  useEffect(() => {
    async function fetchData() {
      const response = await requestMaker(QueueRequestFactory.getStatus(props.queueId));
      setQueueStatusResponse(response);
    }
    fetchData();
  }, [props.queueId, requestMaker]);

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
