import React, { useEffect, useCallback } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import QueueStats from 'components/common/QueueStats';
import { useGetQueueStatus } from 'store/asyncActions';
import { selectQueueStatus } from 'store/queueStatus';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'store/token';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';

export default () => {
  const queueStatus = useSelector(selectQueueStatus);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const getQueueStatus = useCallback(useGetQueueStatus(), []);

  useEffect(() => {
    dispatch(getQueueStatus({ queueId: token.queueId }));
  }, [token, dispatch, getQueueStatus]);

  return (
    <SidePanelItem
      Icon={InfoIcon}
      title="Queue Details"
      description="Other information about the queue"
      expandable
      loading={false} // TODO: Should be queueStatus's loading
    >
      <QueueStats queueStatus={queueStatus} />
    </SidePanelItem>
  );
};
