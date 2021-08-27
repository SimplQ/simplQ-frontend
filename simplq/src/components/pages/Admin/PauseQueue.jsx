import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import { useSetQueueStatus } from 'store/asyncActions/setQueueStatus';
import { selectQueueStatus } from 'store/selectedQueue';

export default ({ queueId }) => {
  const dispatch = useDispatch();
  const setQueueStatus = useSetQueueStatus();
  const queueStatus = useSelector(selectQueueStatus);
  const activeDescription = 'Temporarily stop people from joining';
  const pausedDescription = 'Start allowing people to join the queue';
  const paused = queueStatus === 'PAUSED';

  const toggleQueueStatus = () => {
    const status = paused ? 'ACTIVE' : 'PAUSED';
    dispatch(setQueueStatus({ queueId, status }));
  };

  return (
    <SidePanelItem
      Icon={paused ? PlayArrowIcon : PauseIcon}
      title={paused ? 'Resume Queue' : 'Pause Queue'}
      description={paused ? pausedDescription : activeDescription}
      onClick={toggleQueueStatus}
      style={paused ? 'side-panel-item-selected' : 'side-panel-item'}
    />
  );
};
