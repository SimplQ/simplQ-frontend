import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';
import SidePanelButton from '../../common/SidePanelButton';
import { deleteQueue } from '../../../services/queue';

export default ({ queueId }) => {
  const history = useHistory();
  return (
    <SidePanelButton
      Icon={DeleteIcon}
      title="Delete Queue"
      description="Permanently delete queue"
      onClick={() => deleteQueue(queueId).then(history.push('/'))}
    />
  );
};
