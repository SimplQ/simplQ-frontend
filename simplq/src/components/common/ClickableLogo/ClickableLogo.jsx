/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router';
import { smoothScrollToHomePageTop } from 'utils/scrollingOperations';
import styles from './ClickableLogo.module.scss';

export default (props) => {
  const navigate = useNavigate();
  const defaultOnClick = () => {
    smoothScrollToHomePageTop(navigate);
  };
  return (
    <div className={styles['logo']} onClick={props.onClick ? props.onClick : defaultOnClick}>
      <img src="/images/Simple-Q.png" alt="Home" />
      <p>SimplQ</p>
    </div>
  );
};
