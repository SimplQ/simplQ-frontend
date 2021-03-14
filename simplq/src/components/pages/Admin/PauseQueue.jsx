import React, { useState } from 'react';
import PauseIcon from '@material-ui/icons/Pause';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';

export default () => {
  const [description, setDescription] = useState('Temporarily stop people from joining');
  const [paused, setPaused] = useState(false);

  // TODO: clean up this implementation
  const getPausedOptions = () => {
    if (!paused) {
      setDescription('Start allowing people to join the queue');
      setPaused(true);
    } else {
      setDescription('Temporarily stop people from joining');
      setPaused(false);
    }
  };

  return (
    <SidePanelItem
      Icon={PauseIcon}
      title="Pause Queue"
      description={description}
      onClick={() => getPausedOptions()}
    />
  );
};
