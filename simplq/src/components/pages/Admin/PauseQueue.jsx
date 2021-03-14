import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PauseIcon from '@material-ui/icons/Pause';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import { usePauseQueue } from 'store/asyncActions/pauseQueue';

export default ({ queueId }) => {
  const dispatch = useDispatch();
  const pauseQueue = usePauseQueue();

  const [description, setDescription] = useState('Temporarily stop people from joining');
  const [paused, setPaused] = useState(false);

  const onPauseClick = (chosenStatus) => {
    console.log('dispatch for pause: ', chosenStatus);
    dispatch(pauseQueue({ queueId, status: chosenStatus }));
  };

  // TODO: clean up this implementation
  const getPausedOptions = () => {
    if (!paused) {
      console.log('Pause click');
      setDescription('Start allowing people to join the queue');
      onPauseClick('PAUSED');
      setPaused(true);
    } else {
      console.log('Active click');
      setDescription('Temporarily stop people from joining');
      onPauseClick('ACTIVE');
      setPaused(false);
    }
  };

  return (
    <SidePanelItem
      Icon={PauseIcon}
      title="Pause Queue"
      description={description}
      onClick={getPausedOptions}
    />
  );
};
