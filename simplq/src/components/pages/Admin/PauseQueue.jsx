import React from 'react';
import PauseIcon from '@material-ui/icons/Pause';
import styles from '../../../styles/adminPage.module.scss';

export default () => {
  //   const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className={styles['admin-action']}>
        <PauseIcon fontSize="large" />
        <div>
          <h2>Pause Queue</h2>
          <p>Temporarily stop people from joining</p>
        </div>
      </div>
    </>
  );
};
