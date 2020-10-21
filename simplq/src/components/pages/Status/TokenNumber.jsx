import React from 'react';
import styles from '../../../styles/statusPage.module.scss';

export default (props) => (
  <div className={styles['token-number']}>
    <p>Token No: </p>
    <p className={styles['count']}>{props.tokenNumber}</p>
  </div>
);
