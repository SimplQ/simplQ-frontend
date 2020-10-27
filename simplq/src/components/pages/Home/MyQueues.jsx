import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import styles from '../../../styles/homePage.module.scss';
import { deleteQueue } from '../../../services/queue';

export default () => {
  const history = useHistory();
  const myQueues = useSelector((state) => state.appReducer.myQueues);

  return (
    <div className={styles['my-queue']}>
      <p>
        {myQueues.length === 0
          ? "Looks like you don't have any active queues. Start by creating one..."
          : 'What would you like to do today? Here are your active queues:'}
      </p>
      {myQueues.map((queue) => {
        const handler = () => history.push(`/queue/${queue.queueId}`);
        return (
          <div
            tabIndex="0"
            role="button"
            onKeyDown={handler}
            onClick={handler}
            className={styles['my-queue-item']}
          >
            <div>{queue.queueName}</div>
            <IconButton onClick={() => deleteQueue(queue.queueId)}>
              <DeleteIcon />
            </IconButton>
          </div>
        );
      })}
    </div>
  );
};
