import React, { useState, useEffect } from 'react';
import JoinQueueForm from './Form';
import * as TokenService from '../../../services/token';
import * as QueueService from '../../../services/queue';
import { handleApiErrors } from '../../ErrorHandler';
import Header from '../../common/Header';
import styles from '../../../styles/joinPage.module.scss';
import PageNotFound from '../PageNotFound';
import LoadingIndicator from '../../common/LoadingIndicator';
import Logo from '../../common/ClickableLogo';

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
      <div className={styles['header-bar']}>
        <div className={styles['simplq-logo']}>
          <Logo history={props.history} type="Dark" />
        </div>
        <div className={styles['queue']}> 
          <div className={styles['header-title']}>
            <Header className={styles['header']}>{queueStatusResponse.queueName}</Header>
          </div>
          <div className={styles['sub-header']}>
            <h2>a short description</h2>
          </div>
        </div>
      </div>
      <p className={styles['message']}>Please enter your contact details to join this queue</p>
      <JoinQueueForm queueId={queueId} joinQueueHandler={joinQueueHandler} />
    </div>
  );
}
