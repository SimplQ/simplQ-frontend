import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import SidePanelButton from '../../common/SidePanelButton';

export default () => {
  return (
    <SidePanelButton
      Icon={DeleteIcon}
      title="Delete Queue"
      description="Permanently delete queue"
    />
  );
};
