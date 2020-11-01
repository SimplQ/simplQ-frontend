import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';
import { deleteQueue } from '../../../services/queue';
import { setInfoPopupMessage } from '../../../store/appSlice';

export default ({ queueId }) => {
  const history = useHistory();

  const onDeleteClick = () => {
    deleteQueue(queueId).then(() => {
      history.push('/');
      setInfoPopupMessage('Successfully left queue');
    });
  };

  return (
    <SidePanelItem
      Icon={DeleteIcon}
      title="Delete Queue"
      description="Permanently delete queue"
      onClick={() => onDeleteClick}
    />
  );
};
