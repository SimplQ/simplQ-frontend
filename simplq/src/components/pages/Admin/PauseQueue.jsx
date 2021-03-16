import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import { usePauseQueue } from 'store/asyncActions/pauseQueue';

export default ({ queueId }) => {
  const dispatch = useDispatch();
  const pauseQueue = usePauseQueue();

  const [description, setDescription] = useState('Temporarily stop people from joining');
  const [isActive, setIsActive] = useState(false);

  const onPanelClick = (chosenStatus) => {
    dispatch(pauseQueue({ queueId, status: chosenStatus }));
  };

  // TODO: clean up this implementation
  const getPausedOptions = () => {
    if (!isActive) {
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
      Icon={isActive ? PlayArrowIcon : PauseIcon}
      title={isActive ? 'Resume Queue' : 'Pause Queue'}
      description={description}
      onClick={getPausedOptions}
    />
  );
};
