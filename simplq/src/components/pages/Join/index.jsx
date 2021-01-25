import React, { useState, useEffect } from 'react';
import JoinQueueForm from './Form';
import * as TokenService from '../../../services/token';
import * as QueueService from '../../../services/queue';
import styles from './join.module.scss';
import LoadingIndicator from '../../common/LoadingIndicator';
import HeaderSection from '../../common/HeaderSection';

export default (props) => {
  const queueName = props.match.params.queueName;
  const [queueStatusResponse, setQueueStatusResponse] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await QueueService.getStatusByName(queueName);
      if (response) {
        setQueueStatusResponse(response);
      } else {
        props.history.push(`/pageNotFound/queueName=${queueName}`);
      }
    }
    fetchData();
  }, [queueName]);

  if (!queueStatusResponse) {
    return <LoadingIndicator />;
  }

  const queueId = queueStatusResponse.queueId;

  const joinQueueHandler = (name, contactNumber) => {
    return TokenService.create(name, contactNumber, true, queueId).then((response) => {
      if (response) {
        props.history.push(`/token/${response.tokenId}`);
      }
    });
  };

  return (
    <div>
      <HeaderSection queueName={queueStatusResponse.queueName} history={props.history} />
      <div className={styles['main-content']}>
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
