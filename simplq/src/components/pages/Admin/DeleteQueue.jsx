import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';
import { deleteQueue } from '../../../services/queue';
import { setInfoPopupMessage } from '../../../store/appSlice';

export default ({ queueId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onDeleteClick = () => {
    deleteQueue(queueId).then(() => {
      dispatch(setInfoPopupMessage('Successfully deleted queue'));
      history.push('/');
    });
  };

  return (
    <SidePanelItem
      Icon={DeleteIcon}
      title="Delete Queue"
      description="Permanently delete queue"
      onClick={onDeleteClick}
    />
  );
};
