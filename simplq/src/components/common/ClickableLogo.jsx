/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styles from '../../styles/logo.module.scss';

export default (props) => {
  return (
    <div className={styles['logo']} onClick={() => (props.history ? props.history.push('/') : {})}>
      <img src="/LogoLight.png" alt="Home" />
      <p>SimplQ</p>
    </div>
  );
};
