import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetQueueStatusByName, useJoinQueue } from 'store/asyncActions';
import { selectQueueStatus } from 'store/queueStatus';
import HeaderSection from 'components/common/HeaderSection';
import QueueStats from 'components/common/QueueStats';
import LoadingStatus from 'components/common/Loading';
import Button from 'components/common/Button';
import JoinQueueForm from './JoinForm';
import styles from './JoinPage.module.scss';

export default ({ match }) => {
  const queueName = match.params.queueName;
  const getQueueStatusByName = useCallback(useGetQueueStatusByName(), []);
  const joinQueue = useJoinQueue();
  const dispatch = useDispatch();
  const queueStatus = useSelector(selectQueueStatus);

  useEffect(() => {
    dispatch(getQueueStatusByName({ queueName }));
  }, [queueName, dispatch, getQueueStatusByName]);

  const queueId = queueStatus.queueId;

  const joinQueueHandler = (name, contactNumber) => {
    dispatch(joinQueue({ name, contactNumber, notifiable: true, queueId, goToStatusPage: true }));
  };

  const onRefreshClick = () => {
    dispatch(getQueueStatusByName({ queueName }));
  };
  const getJoinQueueOptions = () => {
    if (queueStatus.status === 'PAUSED') {
      return (
        /* eslint-disable react/jsx-one-expression-per-line */
        <>
          <p className={styles['message']}>
            Hi! The queue is currently not accepting people currently.
          </p>
          <p className={styles['message']}>
            Wait until the queue starts accepting people again, or contact the queue manager
          </p>
          <div className={styles.form}>
            <Button onClick={onRefreshClick}>Check Again</Button>
          </div>
        </>
      );
    }
    return (
      <>
        <p className={styles['message']}>Please enter your contact details to join this queue</p>
        <JoinQueueForm
          queueId={queueId}
          joinQueueHandler={joinQueueHandler}
          buttonText="Join Queue"
        />
      </>
    );
  };
  // TODO: If HeaderSection is used just in JoinPage
  // it should be renamed into something else and moved
  // closer to JoinPage
  return (
    <div>
      <HeaderSection queueName={queueName} />
      <div className={styles['main-content']}>
        <LoadingStatus dependsOn="getQueueStatusByName">
          <div className={styles['queue-stats']}>
            <QueueStats queueStatus={queueStatus} />
          </div>
          {getJoinQueueOptions()}
        </LoadingStatus>
      </div>
    </div>
  );
};
