import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import SidePanelButton from '../../common/SidePanelButton';
import { deleteQueue, getMyQueues } from '../../../services/queue';
import { handleApiErrors } from '../../ErrorHandler';
import { setMyQueues } from '../../../store/appSlice';

export default ({ queueId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onDeleteClick = () => {
    deleteQueue(queueId)
      .then(() =>
        getMyQueues()
          .then((myQueues) => dispatch(setMyQueues(myQueues)))
          .catch((err) => handleApiErrors(err))
      )
      .catch((err) => handleApiErrors(err))
      .then(() => history.push('/'));
  };
  return (
    <SidePanelButton
      Icon={DeleteIcon}
      title="Delete Queue"
      description="Permanently delete queue"
      onClick={() => onDeleteClick()}
    />
  );
};
