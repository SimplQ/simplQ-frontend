import React from 'react';
import HistoryIcon from '@material-ui/icons/History';
import styles from '../../../styles/adminPage.module.scss';

export default () => {
  return (
    <>
      <button type="button" className={styles['admin-action']}>
        <HistoryIcon fontSize="large" />
        <div>
          <h2>Queue History</h2>
          <p>History of events in the queue</p>
        </div>
      </button>
    </>
  );
};
