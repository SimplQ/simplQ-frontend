import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { useDeleteToken } from 'store/asyncActions';
import { selectToken } from 'store/token';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';

export default () => {
  const dispatch = useDispatch();
  const deleteToken = useDeleteToken();
  const token = useSelector(selectToken);

  const onDeleteClick = () => {
    dispatch(deleteToken({ tokenId: token.tokenId, goHome: true }));
  };

  // TODO: The item should be disabled if token is already deteled
  return (
    <SidePanelItem
      onClick={onDeleteClick}
      Icon={CloseIcon}
      title="Leave Queue"
      description="Exit from the queue"
    />
  );
};
