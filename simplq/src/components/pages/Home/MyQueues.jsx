import React, { useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router';
import styles from '../../../styles/homePage.module.scss';
import * as QueueService from '../../../services/queue';

export default () => {
  const [myQueues, setMyQueues] = useState([]);
  const history = useHistory();

  useEffect(() => {
    QueueService.getMyQueues().then((queues) => setMyQueues(queues));
  }, [myQueues]);

  return (
    <div className={styles['my-queue']}>
      <p>What would you like to do today? Here are your active queues:</p>
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
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
        );
      })}
    </div>
  );
};
