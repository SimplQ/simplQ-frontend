import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import styles from '../../../styles/adminPage.module.scss';
import JoinQueueForm from '../Join/Form';
import SidePanelButton from '../../common/SidePanelButton';

export default (props) => {
  return (
    <SidePanelButton
      Icon={AddIcon}
      title="Add Member"
      description="Add a person to this queue manually"
      expandable
    >
      <div className={styles['admin-join-queue-form']}>
        <JoinQueueForm
          buttonName="Add"
          queueId={props.queueId}
          joinQueueHandler={props.joinQueueHandler}
        />
      </div>
    </SidePanelButton>
  );
};
