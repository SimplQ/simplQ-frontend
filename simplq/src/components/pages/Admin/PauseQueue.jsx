/* eslint-disable */ // TODO: Remove this
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import { useUpdateQueueStatus } from 'store/asyncActions/updateQueueStatus';
import { selectQueueDetails } from 'store/selectedQueue';

export default ({ queueId }) => {
  const dispatch = useDispatch();
  const updateQueueStatus = useUpdateQueueStatus();
  const queueDetails = useSelector((state) => state.selectQueueDetails);
  // const queueDetailsIsActive = useSelector((state) => state.selectQueueDetails);
  // const queueDetailsDescription = useSelector((state) => state.selectQueueDetails);

  const [description, setDescription] = useState('Temporarily stop people from joining');
  const [isActive, setIsActive] = useState(false);

  const onPanelClick = (chosenStatus) => {
    dispatch(updateQueueStatus({ queueId, status: chosenStatus }));
  };

  // TODO: clean up this implementation
  const getPausedOptions = () => {
    if (!queueDetails.isActive) {
      setDescription('Start allowing people to join the queue');
      onPanelClick('PAUSED');
      setIsActive(true);
    } else {
      setDescription('Temporarily stop people from joining');
      onPanelClick('ACTIVE');
      setIsActive(false);
    }
  };

  return (
    <SidePanelItem
      Icon={queueDetails.isActive ? PlayArrowIcon : PauseIcon}
      title={queueDetails.isActive ? 'Resume Queue' : 'Pause Queue'}
      description={queueDetails.description}
      onClick={getPausedOptions}
      style={!queueDetails.isActive ? 'side-panel-item-active' : 'side-panel-item-paused'}
    />
  );
};
