import React, { useEffect, useCallback } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useGetQueueStatusByName } from 'store/asyncActions';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedQueue } from 'store/selectedQueue';
import JoinQueueForm from './Form';
import { TokenRequestFactory } from '../../../api/requestFactory';
import styles from './join.module.scss';
import LoadingIndicator from '../../common/LoadingIndicator';
import HeaderSection from '../../common/HeaderSection';
import QueueStats from '../../common/QueueStats';
import useRequest from '../../../api/useRequest';

export default ({ history, match }) => {
  const queueName = match.params.queueName;
  const getQueueStatusByName = useCallback(useGetQueueStatusByName(), []);
  const dispatch = useDispatch();
  const queueStatus = useSelector(selectSelectedQueue);
  const { requestMaker } = useRequest();

  useEffect(() => {
    dispatch(getQueueStatusByName({ queueName }))
      .then(unwrapResult)
      // TODO: Do this in async action
      .catch(() => {
        history.push(`/pageNotFound/queueName=${queueName}`);
      });
  }, [queueName, dispatch, getQueueStatusByName, history]);

  if (!queueStatus.status) {
    return <LoadingIndicator />;
  }

  const queueId = queueStatus.queueId;

  const joinQueueHandler = (name, contactNumber) => {
    return requestMaker(TokenRequestFactory.create(name, contactNumber, true, queueId)).then(
      (response) => {
        if (response) {
          history.push(`/token/${response.tokenId}`);
        }
      }
    );
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
