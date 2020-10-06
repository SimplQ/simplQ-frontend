import React from 'react';
import PauseIcon from '@material-ui/icons/Pause';
import SidePanelButton from '../../common/SidePanelButton';

export default () => {
  return (
    <SidePanelButton
      Icon={PauseIcon}
      title="Pause Queue"
      description="Temporarily stop people from joining"
    />
  );
};
