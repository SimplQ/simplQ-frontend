import React, { useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { isLoggedIn } from '../../../services/auth';
import styles from './ribbon.module.scss';

export default () => {
  const [open, setOpen] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    setLoginStatus(isLoggedIn() === null ? false : isLoggedIn());
    return () => setLoginStatus(null);
  }, []);
  if (loginStatus || !open) return null;
  return (
    <div className={styles['ribbon-warning']}>
      <div className={styles['ribbon-container']}>
        <div className={styles['ribbon-text']}>
          <span style={{ fontWeight: 'bold' }}>Temporary queue warning!&emsp;</span>
          <span>{'Please sign up to make your queue permanent.'}</span>
        </div>
        <div className={styles['ribbon-button']}>
          <CloseIcon
            className={styles['clickable-icon']}
            fontSize="inherit"
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};
