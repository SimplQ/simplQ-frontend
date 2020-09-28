import React from 'react';
import AddIcon from '@material-ui/icons/Add';
// import JoinQueueForm from '../Join/Form';
import styles from '../../../styles/adminPage.module.scss';

export default () => {
  // const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className={styles['admin-action']}>
        <AddIcon fontSize="large" />
        <div>
          <h2>Add Member Manually</h2>
          <p>Add a person to this queue manually</p>
        </div>
      </div>
    </>
  );
};
