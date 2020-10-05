import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import SidePanelButton from '../../common/SidePanelButton';

export default () => {
  return (
    <SidePanelButton
      Icon={ChatIcon}
      title="Contact Admin"
      description="Contact the queue admin for queries"
    />
  );
};
