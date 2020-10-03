import React from 'react';
import styles from '../../../styles/statusPage.module.scss';

export default () => {
  return (
    <>
      <div className={styles['user-action']}>
        {/* icon */}
        <div>
          <h2>Leave Queue</h2>
          <p>Exit from the queue</p>
        </div>
      </div>
    </>
  );
};
