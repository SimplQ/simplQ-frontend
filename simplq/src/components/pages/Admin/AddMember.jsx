import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import styles from '../../../styles/adminPage.module.scss';

const stylesExpand = {
  height: '10vh',
  width: '10vw',
  background: '#f00',
};

export default () => {
  return (
    <>
      <div className={styles['admin-action']}>
        <AddIcon fontSize="large" />
        <div>
          <h2>Add Member Manually</h2>
          <p>Add a person to this queue manually</p>
        </div>
        <div>
          <img src="/images/expand_more.svg" alt="expand" />
        </div>
      </div>

      <div style={stylesExpand} />
    </>
  );
};
