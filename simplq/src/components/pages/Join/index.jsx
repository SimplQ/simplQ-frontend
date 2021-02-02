import React, { useState, useEffect } from 'react';
import JoinQueueForm from './Form';
import { TokenRequestFactory, QueueRequestFactory } from '../../../api/requestFactory';
import styles from './join.module.scss';
import LoadingIndicator from '../../common/LoadingIndicator';
import HeaderSection from '../../common/HeaderSection';
import QueueStats from '../../common/QueueStats';
import useRequest from '../../../api/useRequest';

export default (props) => {
  const queueName = props.match.params.queueName;
  const [queueStatusResponse, setQueueStatusResponse] = useState();
  const { requestMaker } = useRequest();
  useEffect(() => {
    async function fetchData() {
      const response = await requestMaker(QueueRequestFactory.getStatusByName(queueName));
      if (response) {
        setQueueStatusResponse(response);
      } else {
        props.history.push(`/pageNotFound/queueName=${queueName}`);
      }
    }
    fetchData();
  }, [queueName, requestMaker, props.history]);

  if (!queueStatusResponse) {
    return <LoadingIndicator />;
  }

  const queueId = queueStatusResponse.queueId;

  const joinQueueHandler = (name, contactNumber) => {
    return requestMaker(TokenRequestFactory.create(name, contactNumber, true, queueId)).then(
      (response) => {
        if (response) {
          props.history.push(`/token/${response.tokenId}`);
        }
      }
    );
  };

  return (
    <div>
      <HeaderSection queueName={queueStatusResponse.queueName} history={props.history} />
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
