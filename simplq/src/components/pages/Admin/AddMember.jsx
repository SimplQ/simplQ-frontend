import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import styles from '../../../styles/adminPage.module.scss';

export default () => {
  return (
    <>
      <button type="button" className={styles['admin-action']}>
        <AddIcon fontSize="large" />
        <div>
          <h2>Add Member Manually</h2>
          <p>Add a person to this queue manually</p>
        </div>
      </button>
    </>
  );
};
