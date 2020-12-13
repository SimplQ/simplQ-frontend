import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';

export default () => {
  return (
    <SidePanelItem
      Icon={ChatIcon}
      title="Contact Admin"
      description="Contact the queue admin for queries"
    />
  );
};
