import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import styles from '../../../styles/statusPage.module.scss';

export default (props) => {
  const history = useHistory();
  function handleClick() {
    props.leaveQueueHandler().then(() => history.push(`/`));
  }

  return (
    <button type="button" onClick={handleClick} className={styles['user-action']}>
      <CloseIcon />

      <div>
        <h2>Leave Queue</h2>
        <p>Exit from the queue</p>
      </div>
    </button>
  );
};
