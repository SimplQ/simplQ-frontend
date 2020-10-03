import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import styles from '../../../styles/statusPage.module.scss';

export default () => {
  return (
    <li className={styles['user-action']}>
      <IconButton aria-label="Chat">
        <ChatIcon />
      </IconButton>

      <div>
        <h2>Contact Admin</h2>
        <p>Contact the queue admin for queries</p>
      </div>
    </li>
  );
};
