import React, { useState, useEffect, useCallback } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import InfoIcon from '@material-ui/icons/Info';
import QueueStats from 'components/common/QueueStats';
import { useGetQueueStatus } from 'store/queues';
import { useDispatch } from 'react-redux';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';

export default ({ queueId }) => {
  const [queueStatus, setQueueStatus] = useState();
  const dispatch = useDispatch();
  const getQueueStatus = useCallback(useGetQueueStatus(), []);

  useEffect(() => {
    // TODO: Can this state be reused? Do we need a reducer for it?
    dispatch(getQueueStatus({ queueId }))
      .then(unwrapResult)
      .then((status) => {
        setQueueStatus(status);
      });
  }, [queueId, dispatch, getQueueStatus]);

  return (
    <SidePanelItem
      Icon={InfoIcon}
      title="Queue Details"
      description="Other information about the queue"
      expandable
      loading={!queueStatus}
    >
      <QueueStats queueStatus={queueStatus} />
    </SidePanelItem>
  );
};
