import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import styles from './Ribbon.module.scss';

export default ({ title, subTitle }) => {
  const [open, setOpen] = useState(true);

  if (!open) {
    return null;
  }

  return (
    <div className={styles['ribbon-warning']}>
      <div className={styles['ribbon-container']}>
        <div className={styles['ribbon-text']}>
          <span style={{ fontWeight: 'bold' }}>
            {title}
            &emsp;
          </span>
          <span>{subTitle}</span>
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
