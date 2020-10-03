import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import styles from '../../../styles/adminPage.module.scss';
import JoinQueueForm from '../Join/Form';

const stylesExpand = {
  height: 'max-content',
  width: '100%',
};

export default (props) => {
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

      <div style={stylesExpand}>
        <JoinQueueForm
          buttonName="Add"
          queueId={props.queueId}
          joinQueueHandler={props.joinQueueHandler}
        />
      </div>
    </>
  );
};
