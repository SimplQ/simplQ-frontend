import React from 'react';
import styles from '../../../styles/adminPage.module.scss';
import AddMember from './AddMember';
import PauseQueue from './PauseQueue';
import DeleteQueue from './DeleteQueue';
import QueueHistory from './QueueHistory';

export default (props) => (
  <>
    <div className={styles['sidebar']}>
      <div className={styles['card']}>
        <AddMember queueId={props.queueId} joinQueueHandler={props.joinQueueHandler} />
      </div>
      <div className={styles['card']}>
        <PauseQueue />
      </div>
      <div className={styles['card']}>
        <DeleteQueue />
      </div>
      <div className={styles['card']}>
        <QueueHistory />
      </div>
    </div>
  </>
);
