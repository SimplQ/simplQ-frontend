import React, { useEffect, useCallback } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import QueueInfo from 'components/common/QueueInfo';
import { useGetQueueInfo } from 'store/asyncActions';
import { selectQueueInfo } from 'store/queueInfo';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'store/token';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';

export default () => {
  const queueInfo = useSelector(selectQueueInfo);
  const dispatch = useDispatch();
  const getQueueInfo = useCallback(useGetQueueInfo(), []);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token.queueId) {
      dispatch(getQueueInfo({ queueId: token.queueId }));
    }
  }, [token, dispatch, getQueueInfo]);

  return (
    <SidePanelItem
      Icon={InfoIcon}
      title="Queue Information"
      description="Other information about the queue"
      expandable
    >
      <QueueInfo queueInfo={queueInfo} />
    </SidePanelItem>
  );
};
