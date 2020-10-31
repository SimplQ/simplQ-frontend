import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';
import { deleteQueue } from '../../../services/queue';

export default ({ queueId }) => {
  const history = useHistory();
  return (
    <SidePanelItem
      Icon={DeleteIcon}
      title="Delete Queue"
      description="Permanently delete queue"
      onClick={() => deleteQueue(queueId).then(history.push('/'))}
    />
  );
};
