import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import styles from '../../../styles/adminPage.module.scss';
import JoinQueueForm from '../Join/Form';

export default (props) => {
  const [hide, setHide] = useState(true);
  const expandIcon = document.querySelector('#admin-join-queue-form');
  const handleOnClick = () => {
    if (hide) {
      expandIcon.style.display = 'flex';
    } else {
      expandIcon.style.display = 'none';
    }
    setHide(!hide);
  };

  const ExpandButton = () => (
    <div
      role="button"
      tabIndex={0}
      className={styles['expand-icon']}
      onClick={handleOnClick}
      onKeyDown={handleOnClick}
    >
      <img src="/images/expand_more.svg" alt="expand" />
    </div>
  );

  return (
    <>
      <div className={styles['admin-action']}>
        <AddIcon fontSize="large" />
        <div>
          <h2>Add Member</h2>
          <p>Add a person to this queue manually</p>
        </div>
        <ExpandButton />
      </div>

      <div id="admin-join-queue-form" className={styles['admin-join-queue-form']}>
        <JoinQueueForm
          buttonName="Add"
          queueId={props.queueId}
          joinQueueHandler={props.joinQueueHandler}
        />
      </div>
    </>
  );
};
