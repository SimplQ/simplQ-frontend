/* eslint-disable  react/jsx-one-expression-per-line */

import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router';
import { useDeleteQueue } from 'store/asyncActions';
import { selectQueues } from 'store/queues';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.module.scss';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const queues = useSelector(selectQueues);
  const deleteQueue = useDeleteQueue();

  const handleDelete = (e, queue) => {
    // Don't trigger parent's onClick
    e.stopPropagation();
    dispatch(deleteQueue({ queueId: queue.queueId, goHome: false }));
  };

  return (
    <div className={styles['my-queue']}>
      <p>
        {queues.length === 0 ? (
          <span>
            Are you <b>hospital</b> or <b>vaccine center</b>? Start by createing queue:
          </span>
        ) : (
          <span>
            <u>
              <b>Your Queues</b>
            </u>
          </span>
        )}
      </p>
      {queues.map((queue) => {
        const handler = () => history.push(`/queue/${queue.queueId}`);
        return (
          <div
            key={queue.queueId}
            tabIndex="0"
            role="button"
            onKeyDown={handler}
            onClick={handler}
            className={styles['my-queue-item']}
          >
            <div>{queue.queueName}</div>
            <IconButton onClick={(e) => handleDelete(e, queue)}>
              <DeleteIcon />
            </IconButton>
          </div>
        );
      })}
    </div>
  );
};
