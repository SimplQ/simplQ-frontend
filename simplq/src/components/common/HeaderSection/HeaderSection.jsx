import React from 'react';
import styles from './HeaderSection.module.scss';
import Header from '../Header';

export default (props) => (
  <div className={styles['header-bar']}>
    <div className={styles['queue']}>
      <div className={styles['header-title']}>
        <Header className={styles['header']}>{props.queueName}</Header>
      </div>
      <div className={styles['sub-header']}>
        <h2>Ready to join</h2>
      </div>
    </div>
  </div>
);
