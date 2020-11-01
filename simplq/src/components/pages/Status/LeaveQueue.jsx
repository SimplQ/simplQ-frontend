import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';
import { setInfoPopupMessage } from '../../../store/appSlice';

export default (props) => {
  const history = useHistory();
  const handleClick = () => {
    props.leaveQueueHandler().then(() => {
      history.push(`/`);
      setInfoPopupMessage('Successfully left queue');
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
