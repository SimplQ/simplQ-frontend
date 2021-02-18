import LoadingStatus from 'components/common/Loading';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'store/token';
import styles from './status.module.scss';

export default () => {
  const token = useSelector(selectToken);

  return (
    <div className={styles['token-number']}>
      <div className={styles['hanging-threads']} />
      <div className={styles['token-container']}>
        <span className={styles['token']}>Token No</span>
      </div>
      <div className={styles['separator']} />
      <div className={styles['count-container']}>
        <span className={styles['count']}>
          <LoadingStatus dependsOn="getToken">{token.tokenNumber}</LoadingStatus>
        </span>
      </div>
    </div>
  );
};
