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
      {props.type === 'light' && <img src="/LogoLight.png" alt="Home" />}
      {props.type === 'Dark' && <img src="/Simple-Q.png" alt="Home" />}
      <p>SimplQ</p>
    </div>
  );
};
