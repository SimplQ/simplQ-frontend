import React from 'react';
import PauseIcon from '@material-ui/icons/Pause';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';

export default () => {
  return (
    <SidePanelItem
      Icon={PauseIcon}
      title="Pause Queue"
      description="Temporarily stop people from joining"
    />
  );
};
