import React from 'react';
import { useDispatch } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import { useGetToken } from 'store/asyncActions';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';
import { setInfoPopupMessage } from '../../../store/appSlice';

export default (props) => {
  const deleteToken = useGetToken(); // fix
  const history = useHistory();
  const dispatch = useDispatch();
  const onDeleteClick = () => {
    dispatch(deleteToken(props.tokenId));
    dispatch(setInfoPopupMessage('Successfully left queue'));
    history.push(`/`);
  };

  return (
    <SidePanelItem
      onClick={onDeleteClick}
      Icon={CloseIcon}
      title="Leave Queue"
      description="Exit from the queue"
    />
  );
};
