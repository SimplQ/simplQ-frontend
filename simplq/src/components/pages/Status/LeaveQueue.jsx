import React from 'react';
import { useDispatch } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';
import { setInfoPopupMessage } from '../../../store/appSlice';

export default (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    props.leaveQueueHandler().then(() => {
      dispatch(setInfoPopupMessage('Successfully left queue'));
      history.push(`/`);
    });
  };

  return (
    <SidePanelItem
      onClick={handleClick}
      Icon={CloseIcon}
      title="Leave Queue"
      description="Exit from the queue"
    />
  );
};
