import React from 'react';
import styles from '../../../styles/statusPage.module.scss';

export default () => {
  return (
    <>
      <div className={styles['user-action']}>
        {/* icon */}
        <div>
          <h2>Contact Admin</h2>
          <p>Contact the queue admin for queries</p>
        </div>
      </div>
    </>
  );
};
