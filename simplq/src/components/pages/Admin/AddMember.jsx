import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Collapse } from '@material-ui/core';
import styles from '../../../styles/adminPage.module.scss';
import JoinQueueForm from '../Join/Form';

export default (props) => {
  const [open, setOpen] = useState(false);
  const handleOnClick = () => {
    setOpen(!open);
  };

  const ExpandButton = ({ isOpen }) => (
    <div
      role="button"
      tabIndex={0}
      className={
        isOpen ? `${styles['expand-icon']} ${styles['expand-icon-opened']}` : styles['expand-icon']
      }
      onClick={handleOnClick}
      onKeyDown={handleOnClick}
    >
      <img src="/images/expand_more.svg" alt="expand" />
    </div>
  );

  return (
    <>
      <button type="button" className={styles['admin-action']}>
        <div className={styles['collapsable']}>
          <div className={styles['collapsable-header']}>
            <AddIcon fontSize="large" />
            <div>
              <h2>Add Member</h2>
              <p>Add a person to this queue manually</p>
            </div>
            <ExpandButton isOpen={open} />
          </div>
          <div className={styles['collapsable-content']}>
            <Collapse timeout="auto" in={open}>
              <div className={styles['admin-join-queue-form']}>
                <JoinQueueForm
                  buttonName="Add"
                  queueId={props.queueId}
                  joinQueueHandler={props.joinQueueHandler}
                />
              </div>
            </Collapse>
          </div>
        </div>
      </button>
    </>
  );
};
