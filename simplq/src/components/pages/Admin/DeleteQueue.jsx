import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import SidePanelButton from '../../common/SidePanelButton';
import { deleteQueue } from '../../../services/queue';

export default ({ queueId }) => {
  return (
    <SidePanelButton
      Icon={DeleteIcon}
      title="Delete Queue"
      description="Permanently delete queue"
      onClick={() => deleteQueue(queueId)}
    />
  );
};
