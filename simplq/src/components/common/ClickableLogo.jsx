/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styles from '../../styles/logo.module.scss';

export default (props) => {
  let onClick = {};
  if (props.history) {
    onClick = () => props.history.push('/');
  } else if (props.onClick) {
    onClick = props.onClick;
  }
  return (
    <div className={styles['logo']} onClick={onClick}>
      <img src="/Simple-Q.png" alt="Home" />
      <p>SimplQ</p>
    </div>
  );
};
