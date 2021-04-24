import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetQueueInfoByName, useJoinQueue } from 'store/asyncActions';
import { selectQueueInfo } from 'store/queueInfo';
import HeaderSection from 'components/common/HeaderSection';
import QueueInfo from 'components/common/QueueInfo';
import LoadingStatus from 'components/common/Loading';
import Button from 'components/common/Button';
import PhoneInput from 'components/common/PhoneInput';
import { useGetTokenByContactNumber } from 'store/asyncActions/getTokenByContactNumber';
import JoinQueueForm from './JoinForm';
import styles from './JoinPage.module.scss';

export default ({ match }) => {
  const queueName = match.params.queueName;
  const getQueueInfoByName = useCallback(useGetQueueInfoByName(), []);
  const getTokenByContactNumber = useCallback(useGetTokenByContactNumber(), []);
  const joinQueue = useJoinQueue();
  const dispatch = useDispatch();
  const queueInfo = useSelector(selectQueueInfo);
  const [invalidContactNumber, setInvalidContactNumber] = useState(false);
  const [contactNumber, setContactNumber] = useState('');

  useEffect(() => {
    dispatch(getQueueInfoByName({ queueName }));
  }, [queueName, dispatch, getQueueInfoByName]);

  const queueId = queueInfo.queueId;

  const joinQueueHandler = (name1, contactNumber1) => {
    dispatch(
      joinQueue({
        name: name1,
        contactNumber: contactNumber1,
        notifiable: true,
        queueId,
        goToStatusPage: true,
      })
    );
  };

  const onRefreshClick = () => {
    dispatch(getQueueInfoByName({ queueName }));
  };

  const onSubmitGetToken = () => {
    if (contactNumber === '') {
      setInvalidContactNumber(true);
      return;
    }

    if (invalidContactNumber) {
      return;
    }

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
    if (queueInfo.selfJoinAllowed) {
      return (
        <>
          <p className={styles['message']}>Please enter your contact details to join this queue</p>
          <JoinQueueForm
            queueId={queueId}
            joinQueueHandler={joinQueueHandler}
            buttonText="Join Queue"
          />
          <p className={styles['message']}>
            Please make sure the contact number is correct and is available, you might be called on
            the number when your turn comes.
          </p>
        </>
      );
    }

    return (
      <div className={styles['phone-only-container']}>
        <p className={styles['message']}>
          Enter the contact number you gave while joining the queue.
        </p>
        <div className={styles['phone-input']}>
          <PhoneInput isValid={!invalidContactNumber} onChange={setContactNumber} />
        </div>
        <LoadingStatus dependsOn="getTokenByContactNumber">
          <Button onClick={onSubmitGetToken}>Get Token</Button>
        </LoadingStatus>
      </div>
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
