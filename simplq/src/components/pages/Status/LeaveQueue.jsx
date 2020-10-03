import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
import styles from '../../../styles/statusPage.module.scss';

export default () => {
  const history = useHistory();

  return (
    <li className={styles['user-action']}>
      <IconButton onClick={() => history.push(`/`)} aria-label="Leave Queue">
        <CloseIcon />
      </IconButton>

      <div>
        <h2>Leave Queue</h2>
        <p>Exit from the queue</p>
      </div>
    </li>
  );
};
