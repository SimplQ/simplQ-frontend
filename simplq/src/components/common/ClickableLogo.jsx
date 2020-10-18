/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useHistory } from 'react-router';
import styles from '../../styles/logo.module.scss';
import { scrollToHomePageTop } from './utilFns';

export default (props) => {
  const history = useHistory();
  const defaultOnClick = () => {
    history.push('/');
    scrollToHomePageTop();
  };
  return (
    <div className={styles['logo']} onClick={props.onClick ? props.onClick : defaultOnClick}>
      <img src="/Simple-Q.png" alt="Home" />
      <p>SimplQ</p>
    </div>
  );
};
