import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useGetQueueInfoByName, useJoinQueue } from 'store/asyncActions';
import { selectQueueInfo } from 'store/queueInfo';
import HeaderSection from 'components/common/HeaderSection';
import QueueInfo from 'components/common/QueueInfo';
import LoadingStatus from 'components/common/Loading';
import Button from 'components/common/Button';
import JoinQueueForm from './JoinForm';
import styles from './JoinPage.module.scss';

export default ({ match }) => {
  const queueName = match.params.queueName;
  const getQueueInfoByName = useCallback(useGetQueueInfoByName(), []);
  const joinQueue = useJoinQueue();
  const dispatch = useDispatch();
  const queueInfo = useSelector(selectQueueInfo);

  const history = useHistory();

  useEffect(() => {
    if (history.action === 'POP') {
      history.push('/');
    } else dispatch(getQueueInfoByName({ queueName }));
  }, [queueName, dispatch, getQueueInfoByName]);

  const queueId = queueInfo.queueId;

  const joinQueueHandler = (name, contactNumber) => {
    dispatch(joinQueue({ name, contactNumber, notifiable: true, queueId, goToStatusPage: true }));
  };

  const onRefreshClick = () => {
    dispatch(getQueueInfoByName({ queueName }));
  };
  const getJoinQueueOptions = () => {
    if (queueInfo.status === 'PAUSED') {
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
        <LoadingStatus dependsOn="getQueueInfoByName">
          <div className={styles['queue-stats']}>
            <QueueInfo queueInfo={queueInfo} />
          </div>
          {getJoinQueueOptions()}
        </LoadingStatus>
      </div>
    </div>
  );
};
