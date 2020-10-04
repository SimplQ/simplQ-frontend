import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import styles from '../../../styles/statusPage.module.scss';

export default () => {
  return (
    <button type="button" className={styles['user-action']}>
      <ChatIcon />

      <div>
        <h2>Contact Admin</h2>
        <p>Contact the queue admin for queries</p>
      </div>
    </button>
  );
};
