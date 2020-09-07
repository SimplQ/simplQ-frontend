import React, { useState, useEffect } from 'react';
import JoinQueueForm from './Form';
import * as TokenService from '../../../services/token';
import * as QueueService from '../../../services/queue';
import { handleApiErrors } from '../../ErrorHandler';
import Header, { SimplQHeader } from '../../common/Header';
import styles from '../../../styles/joinPage.module.scss';
import PageNotFound from '../PageNotFound';
import LoadingIndicator from '../../common/LoadingIndicator';

export default function JoinQueueWithDetails(props) {
  const queueId = props.match.params.queueId;
  const [queueStatusResponse, setQueueStatusResponse] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const response = await QueueService.getStatus(queueId).catch((e) => {
        handleApiErrors(e);
        setError(true);
      });
      setQueueStatusResponse(response);
    }
    fetchData();
  }, [queueId]);

  const joinQueueHandler = (name, contactNumber) => {
    return TokenService.create(name, contactNumber, true, queueId)
      .then((response) => {
        props.history.push(`/token/${response.tokenId}`);
      })
      .catch((err) => {
        handleApiErrors(err);
      });
  };

  if (error) {
    return <PageNotFound history={props.history} />;
  }

  if (!queueStatusResponse) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <SimplQHeader />
      <Header className={styles.header} text={queueStatusResponse.queueName} />
      <JoinQueueForm queueId={queueId} joinQueueHandler={joinQueueHandler} />
    </div>
  );
}
