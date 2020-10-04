import React from 'react';
import PauseIcon from '@material-ui/icons/Pause';
import styles from '../../../styles/adminPage.module.scss';

export default () => {
  return (
    <>
      <button type="button" className={styles['admin-action']}>
        <PauseIcon fontSize="large" />
        <div>
          <h2>Pause Queue</h2>
          <p>Temporarily stop people from joining</p>
        </div>
      </button>
    </>
  );
};
