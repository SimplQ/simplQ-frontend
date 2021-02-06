import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetQueueStatusByName, useJoinQueue } from 'store/asyncActions';
import { selectQueueStatus } from 'store/queueStatus';
import JoinQueueForm from './Form';
import styles from './join.module.scss';
import LoadingIndicator from '../../common/LoadingIndicator';
import HeaderSection from '../../common/HeaderSection';
import QueueStats from '../../common/QueueStats';

export default ({ history, match }) => {
  const queueName = match.params.queueName;
  const getQueueStatusByName = useCallback(useGetQueueStatusByName(), []);
  const joinQueue = useJoinQueue();
  const dispatch = useDispatch();
  const queueStatus = useSelector(selectQueueStatus);

  useEffect(() => {
    dispatch(getQueueStatusByName({ queueName }));
  }, [queueName, dispatch, getQueueStatusByName, history]);

  if (!queueStatus.status) {
    return <LoadingIndicator />;
  }

  const queueId = queueStatus.queueId;

  const joinQueueHandler = (name, contactNumber) => {
    // TODO: Refactor JoinQueueForm to get state from redux.
    // TODO: remove return
    return dispatch(joinQueue({ name, contactNumber, notifiable: true, queueId }));
  };

  return (
    <div>
      <HeaderSection queueName={queueStatus.queueName} history={history} />
      <div className={styles['main-content']}>
        <div className={styles['queue-stats']}>
          <QueueStats queueStatus={queueStatus} />
        </div>
        <p className={styles['message']}>Please enter your contact details to join this queue</p>
        <JoinQueueForm
          queueId={queueId}
          joinQueueHandler={joinQueueHandler}
          buttonText="Join Queue"
        />
      </div>
    </div>
  );
};
