import React from 'react';
import styles from '../../styles/sidePanel.module.scss';

export default (props) => (
  <>
    <ul className={styles['side-panel']}>{props.children}</ul>
  </>
);
