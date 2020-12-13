import React from 'react';
import PauseIcon from '@material-ui/icons/Pause';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';

export default () => {
  return (
    <SidePanelItem
      Icon={PauseIcon}
      title="Pause Queue"
      description="Temporarily stop people from joining"
    />
  );
};
