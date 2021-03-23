/* eslint-disable */ // TODO: Remove this
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import { useUpdateQueueStatus } from 'store/asyncActions/updateQueueStatus';
import { selectQueueStatus } from 'store/selectedQueue';

export default ({ queueId }) => {
  const dispatch = useDispatch();
  const updateQueueStatus = useUpdateQueueStatus();
  const queueStatus = useSelector(selectQueueStatus);
  const activeDescription = 'Temporarily stop people from joining';
  const pausedDescription = 'Start allowing people to join the queue';
  const paused = queueStatus === 'PAUSED';

  const onPanelClick = (chosenStatus) => {
    dispatch(updateQueueStatus({ queueId, status: chosenStatus }));
  };

  const getPausedOptions = () => {
    paused ? onPanelClick('ACTIVE') : onPanelClick('PAUSED');
  };

  return (
    <SidePanelItem
      Icon={paused ? PlayArrowIcon : PauseIcon}
      title={paused ? 'Resume Queue' : 'Pause Queue'}
      description={paused ? activeDescription : pausedDescription}
      onClick={getPausedOptions}
      style={paused ? 'side-panel-item-paused' : 'side-panel-item-active'}
    />
  );
};
