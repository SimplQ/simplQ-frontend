import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../../common/SidePanel/SidePanel.module.scss';
import itemStyles from './QueueHistory.module.scss';

export default ({ name, tokenNumber, creationTime, tokenCreationTimestamp }) => {
  return (
    <>
      <div className={itemStyles['queue-history-item']}>
        <DeleteIcon className={styles['icon']} fontSize="large" />
        <div className={itemStyles['center-content']}>
          <p>
            <strong>
              {name}
              was Removed
            </strong>
          </p>
          <p>{creationTime(tokenCreationTimestamp)}</p>
        </div>
        <p className={itemStyles['token-number']}>{tokenNumber}</p>
      </div>
    </>
  );
};
