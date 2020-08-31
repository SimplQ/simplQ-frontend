import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import styles from '../../styles/loading.module.scss';

export default () => {
  return (
    <div className={styles.main}>
      <HashLoader />
    </div>
  );
};
