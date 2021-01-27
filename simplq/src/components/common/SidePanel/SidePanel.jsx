import React from 'react';
import styles from './SidePanel.module.scss';

export default (props) => (
  <>
    <div className={styles['side-panel']}>{props.children}</div>
  </>
);
