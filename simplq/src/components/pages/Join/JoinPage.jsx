import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetQueueInfoByName, useJoinQueue } from 'store/asyncActions';
import { selectQueueInfo } from 'store/queueInfo';
import HeaderSection from 'components/common/HeaderSection';
import QueueInfo from 'components/common/QueueInfo';
import LoadingStatus from 'components/common/Loading';

import JoinQueueForm from './JoinForm';
import styles from './JoinPage.module.scss';

export default ({ match }) => {
  const queueName = match.params.queueName;
  const getQueueInfoByName = useCallback(useGetQueueInfoByName(), []);
  const joinQueue = useJoinQueue();
  const dispatch = useDispatch();
  const queueInfo = useSelector(selectQueueInfo);

  useEffect(() => {
    dispatch(getQueueInfoByName({ queueName }));
  }, [queueName, dispatch, getQueueInfoByName]);

  const queueId = queueInfo.queueId;

  const joinQueueHandler = (name, contactNumber) => {
    dispatch(joinQueue({ name, contactNumber, notifiable: true, queueId, goToStatusPage: true }));
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
          <p className={styles['message']}>Please enter your contact details to join this queue</p>
          <JoinQueueForm
            queueId={queueId}
            joinQueueHandler={joinQueueHandler}
            buttonText="Join Queue"
          />
        </LoadingStatus>
      </div>
    </div>
  );
};
