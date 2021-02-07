import React, { useEffect, useCallback } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import QueueStats from 'components/common/QueueStats';
import { useGetQueueStatus } from 'store/asyncActions';
import { selectQueueStatus } from 'store/queueStatus';
import { useDispatch, useSelector } from 'react-redux';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';

export default ({ queueId }) => {
  const queueStatus = useSelector(selectQueueStatus);
  const dispatch = useDispatch();
  const getQueueStatus = useCallback(useGetQueueStatus(), []);

  useEffect(() => {
    dispatch(getQueueStatus({ queueId }));
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
