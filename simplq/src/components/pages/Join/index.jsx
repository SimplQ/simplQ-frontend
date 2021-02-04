import React, { useState, useEffect, useCallback } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useGetQueueStatusByName } from 'store/queues';
import { useDispatch } from 'react-redux';
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
  const [queueStatusResponse, setQueueStatusResponse] = useState();
  const { requestMaker } = useRequest();

  useEffect(() => {
    dispatch(getQueueStatusByName({ queueName }))
      .then(unwrapResult)
      .then((status) => {
        if (status) {
          setQueueStatusResponse(status);
        } else {
          history.push(`/pageNotFound/queueName=${queueName}`);
        }
      });
  }, [queueName, dispatch, getQueueStatusByName, history]);

  if (!queueStatusResponse) {
    return <LoadingIndicator />;
  }

  const queueId = queueStatusResponse.queueId;

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
      <HeaderSection queueName={queueStatusResponse.queueName} history={history} />
      <div className={styles['main-content']}>
        <div className={styles['queue-stats']}>
          <QueueStats queueStatus={queueStatusResponse} />
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
