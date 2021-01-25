import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';
import { QueueRequestFactory } from '../../../api/requestFactory';
import { setInfoPopupMessage } from '../../../store/appSlice';
import useRequest from '../../../api/useRequest';

export default ({ queueId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { requestMaker } = useRequest();
  const onDeleteClick = () => {
    requestMaker(QueueRequestFactory.deleteQueue(queueId)).then(() => {
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
