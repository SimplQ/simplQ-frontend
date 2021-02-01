import React, { useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router';
import { useFetchQueues, selectQueues } from 'store/queues';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import styles from './home.module.scss';
import { QueueRequestFactory } from '../../../api/requestFactory';
import useRequest from '../../../api/useRequest';

export default () => {
  const history = useHistory();
  const { requestMaker } = useRequest();
  const [myQueues, setMyQueues] = useState([]);
  const dispatch = useDispatch();
  const queues = useSelector(selectQueues);
  const fetchQueues = useFetchQueues();

  useEffect(() => {
    dispatch(fetchQueues())
      // Optinal way to retrive results without useSelector()
      .then(unwrapResult)
      .then((payload) => setMyQueues(payload.queues));
  }, [dispatch]);

  const handleDelete = (e, queue) => {
    // Don't trigger parent's onClick
    e.stopPropagation();
    requestMaker(QueueRequestFactory.deleteQueue(queue.queueId)).then(() => history.push('/'));
  };
  return (
    <div className={styles['my-queue']}>
      <p>
        {myQueues.length === 0
          ? "Looks like you don't have any active queues. Start by creating one..."
          : 'What would you like to do today? Here are your active queues:'}
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
