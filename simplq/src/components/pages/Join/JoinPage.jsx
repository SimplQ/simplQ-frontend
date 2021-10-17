import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetQueueInfoByName, useJoinQueue } from 'store/asyncActions';
import { selectQueueInfo } from 'store/queueInfo';
import HeaderSection from 'components/common/HeaderSection';
import QueueInfo from 'components/common/QueueInfo';
import LoadingStatus from 'components/common/Loading';
import Button from 'components/common/Button';
import { useGetTokenByContactNumber } from 'store/asyncActions/getTokenByContactNumber';
import JoinQueueForm from './JoinForm';
import styles from './JoinPage.module.scss';
import MyTokens from './MyTokens';

export default ({ match }) => {
  const queueName = match.params.queueName;
  const getQueueInfoByName = useCallback(useGetQueueInfoByName(), []);
  const getTokenByContactNumber = useCallback(useGetTokenByContactNumber(), []);
  const joinQueue = useJoinQueue();
  const dispatch = useDispatch();
  const queueInfo = useSelector(selectQueueInfo);

  useEffect(() => {
    dispatch(getQueueInfoByName({ queueName }));
  }, [queueName, dispatch, getQueueInfoByName]);

  const queueId = queueInfo.queueId;

  const joinQueueHandler = async (name1, contactNumber1, emailId1) => {
    const queue = await dispatch(
      joinQueue({
        name: name1,
        contactNumber: contactNumber1,
        notifiable: true,
        queueId,
        emailId: emailId1,
        goToStatusPage: true,
      })
    );
    return queue;
  };

  const onRefreshClick = () => {
    dispatch(getQueueInfoByName({ queueName }));
  };

  const onSubmitGetToken = (contactNumber) => {
    dispatch(
      getTokenByContactNumber({ queueId, contactNumber, redirectToTokenPageOnSuccess: true })
    );
  };

  const getJoinQueueOptions = () => {
    if (queueInfo.status === 'PAUSED') {
      return (
        /* eslint-disable react/jsx-one-expression-per-line */
        <>
          <p className={styles['message']}>
            Hi! The line is currently not accepting people currently.
          </p>
          <p className={styles['message']}>
            Wait until the line starts accepting people again, or contact the queue manager
          </p>
          <div className={styles.form}>
            <Button onClick={onRefreshClick}>Check Again</Button>
          </div>
        </>
      );
    }
    return (
      <>
        <p className={styles['message']}>Please enter your contact details to join this line</p>
        <JoinQueueForm
          queueId={queueId}
          joinQueueHandler={joinQueueHandler}
          onSubmitGetToken={onSubmitGetToken}
          buttonText="Join Queue"
        />
        <p className={styles['message']}>
          Please make sure the contact number is correct and is available, you might be called on
          the number when your turn comes.
        </p>
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
          <MyTokens queueInfo={queueInfo} />
          <div className={styles['queue-stats']}>
            <QueueInfo queueInfo={queueInfo} />
          </div>
          {getJoinQueueOptions()}
        </LoadingStatus>
      </div>
    </div>
  );
};
