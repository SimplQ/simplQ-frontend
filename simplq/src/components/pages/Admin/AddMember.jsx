import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import JoinQueueForm from 'components/pages/Join/JoinForm';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import { useDispatch } from 'react-redux';
import { useJoinQueue } from 'store/asyncActions';
import styles from './admin.module.scss';

export default ({ queueId }) => {
  const joinQueue = useJoinQueue();
  const dispatch = useDispatch();

  const joinQueueHandler = (name, contactNumber) => {
    dispatch(joinQueue({ name, contactNumber, notifiable: false, queueId, goToStatusPage: false }));
    // Notifiable false since the user was added by the admin, so he/she might not have an open instance of the website
  };
  return (
    <SidePanelItem
      Icon={AddIcon}
      title="Add Member"
      description="Add a person to this queue manually"
      expandable
      tourTag="reactour__addMember"
    >
      <div className={styles['admin-join-queue-form']}>
        <JoinQueueForm
          buttonText="Add To Queue"
          queueId={queueId}
          joinQueueHandler={joinQueueHandler}
        />
      </div>
    </SidePanelItem>
  );
};
