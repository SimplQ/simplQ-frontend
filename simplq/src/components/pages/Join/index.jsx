import React, { useState, useEffect } from 'react';
import JoinQueueForm from './Form';
import * as TokenService from '../../../services/token';
import * as QueueService from '../../../services/queue';
import { handleApiErrors } from '../../ErrorHandler';
import styles from '../../../styles/joinPage.module.scss';
import PageNotFound from '../PageNotFound';
import LoadingIndicator from '../../common/LoadingIndicator';
import HeaderSection from '../../common/HeaderSection';

export default function JoinQueueWithDetails(props) {
  const queueName = props.match.params.queueName;
  const [queueStatusResponse, setQueueStatusResponse] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const response = await QueueService.getStatusByName(queueName).catch((e) => {
        handleApiErrors(e);
        setError(true);
      });
      setQueueStatusResponse(response);
    }
    fetchData();
  }, [queueName]);

  if (error) {
    return <PageNotFound history={props.history} />;
  }

  if (!queueStatusResponse) {
    return <LoadingIndicator />;
  }

  const queueId = queueStatusResponse.queueId;

  const joinQueueHandler = (name, contactNumber) => {
    return TokenService.create(name, contactNumber, true, queueId)
      .then((response) => {
        props.history.push(`/token/${response.tokenId}`);
      })
      .catch((err) => {
        handleApiErrors(err);
      });
  };

  return (
    <div>
      <HeaderSection queueName={queueStatusResponse.queueName} history={props.history} />
      <p className={styles['message']}>Please enter your contact details to join this queue</p>
      <JoinQueueForm queueId={queueId} joinQueueHandler={joinQueueHandler} />
    </div>
  );
}
