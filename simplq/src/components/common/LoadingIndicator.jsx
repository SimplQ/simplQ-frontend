import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import styles from '../../styles/loading.module.scss';

export default () => {
  return (
    <div className={styles.main}>
      <PropagateLoader color="#3a3768" />
    </div>
  );
};
