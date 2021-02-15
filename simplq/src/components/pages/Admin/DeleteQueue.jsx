import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import { useDeleteQueue } from 'store/asyncActions';

export default ({ queueId }) => {
  const dispatch = useDispatch();
  const { deleteQueue } = useDeleteQueue();
  const onDeleteClick = () => {
    dispatch(deleteQueue({ queueId, popUp: true, goHome: true }));
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
