import React from 'react';
import styles from './sidePanel.module.scss';

export default (props) => (
  <>
    <div className={styles['side-panel']}>{props.children}</div>
  </>
);
