import React, { useEffect, useCallback } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import QueueStats from 'components/common/QueueStats';
import { useGetQueueStatus } from 'store/asyncActions';
import { selectQueueStatus } from 'store/queueStatus';
import { useDispatch, useSelector } from 'react-redux';
import { selectTokens } from 'store/selectedQueue';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';

export default ({ queueId }) => {
  const queueStatus = useSelector(selectQueueStatus);
  const dispatch = useDispatch();
  const getQueueStatus = useCallback(useGetQueueStatus(), []);
  const tokens = useSelector(selectTokens);

  useEffect(() => {
    dispatch(getQueueStatus({ queueId }));
  }, [queueId, tokens, dispatch, getQueueStatus]);

  return (
    <SidePanelItem
      Icon={InfoIcon}
      title="Queue Details"
      description="Other information about the queue"
      expandable
    >
      <QueueStats queueStatus={queueStatus} />
    </SidePanelItem>
  );
};
