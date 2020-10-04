import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../../../styles/adminPage.module.scss';

export default () => {
  return (
    <>
      <button type="button" className={styles['admin-action']}>
        <DeleteIcon fontSize="large" />
        <div>
          <h2>Delete Queue</h2>
          <p>Permanently delete queue</p>
        </div>
      </button>
    </>
  );
};
