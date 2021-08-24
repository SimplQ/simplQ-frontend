import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import styles from '../../common/SidePanel/SidePanel.module.scss';
import itemStyles from './QueueHistory.module.scss';

export default ({ name, tokenNumber, creationTime, tokenCreationTimestamp, tokenStatus }) => {
  return (
    <>
      <div className={itemStyles['queue-history-item']}>
        {tokenStatus === 'WAITING' ? (
          <AddIcon className={styles['icon']} fontSize="large" />
        ) : (
          <DeleteIcon className={styles['icon']} fontSize="large" />
        )}

        <div className={itemStyles['center-content']}>
          {tokenStatus === 'WAITING' ? (
            <p>
              <strong>
                {name}
                &nbsp;was Added
              </strong>
            </p>
          ) : (
            <p>
              <strong>
                <span className={name.length > 40 ? itemStyles['name-short'] : ''}>{name}</span>
                &nbsp;was Removed
              </strong>
            </p>
          )}
          <p>{creationTime(tokenCreationTimestamp)}</p>
        </div>
        <p className={itemStyles['token-number']}>{tokenNumber}</p>
      </div>
    </>
  );
};
