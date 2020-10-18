/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styles from '../../styles/logo.module.scss';

export default (props) => {
  let onClick = () => {
    window.location = '/';
  };
  if (props.onClick) {
    // if a handler provided, use it
    onClick = props.onClick;
  } else if (props.history) {
    // If react router history is present, push to it home page go home
    onClick = () => props.history.push('/');
  }

  return (
    <div className={styles['logo']} onClick={onClick}>
      <img src="/Simple-Q.png" alt="Home" />
      <p>SimplQ</p>
    </div>
  );
};
