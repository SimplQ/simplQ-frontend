import React from 'react';
import styles from '../../../styles/statusPage.module.scss';

export default (props) => (
  <div className={styles['token-number']}>
    <div className={styles['hanging-threads']} />
    <div className={styles['token-container']}>
      <span className={styles['token']}>Token No</span>
    </div>
    <div className={styles['separator']} />
    <div className={styles['count-container']}>
      <span className={styles['count']}>{props.tokenNumber}</span>
    </div>
  </div>
);
