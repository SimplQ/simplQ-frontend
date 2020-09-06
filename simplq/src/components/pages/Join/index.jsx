import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import JoinQueueForm from './Form';
import { setJoinerStep } from '../../../store/appSlice';
import * as TokenService from '../../../services/token';
import * as QueueService from '../../../services/queue';
import { handleApiErrors } from '../../ErrorHandler';
import Header, { SimplQHeader } from '../../common/Header';
import styles from '../../../styles/joinPage.module.scss';
import JoinerStepper from '../../common/stepper/JoinerStepper';
import { JoinQButton } from '../../common/Button';
import { handleEnterPress } from '../../common/utilFns';
import InputField from '../../common/InputField';
import PageNotFound from '../PageNotFound';
import LoadingIndicator from '../../common/LoadingIndicator';

export function JoinQueueWithDetails(props) {
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
  const dispatch = useDispatch();
  dispatch(setJoinerStep(0));

  const joinQueueHandler = (name, contactNumber) => {
    return TokenService.create(name, contactNumber, true, queueId)
      .then((response) => {
        dispatch(setJoinerStep(1));
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
      <JoinerStepper />
      <JoinQueueForm queueId={queueId} joinQueueHandler={joinQueueHandler} />
    </div>
  );
}

export function JoinQueueWithLink(props) {
  const [queueLink, setQueueLink] = useState('');

  const handleClick = (link) => {
    const queueId = link.split('/').pop();
    props.history.push(`/j/${queueId}`);
  };

  return (
    <div className={styles.main}>
      <InputField
        placeholder="Enter queue link"
        onKeyPress={(e) => handleEnterPress(e, () => handleClick(queueLink))}
        value={queueLink}
        onChange={(e) => setQueueLink(e.target.value)}
        className={styles.input}
        // error={invalidName}
        // helperText={invalidName ? 'Enter a valid name' : ''}
      />
      <div className={styles['join-button']}>
        <JoinQButton onClick={() => handleClick(queueLink)} />
      </div>
    </div>
  );
}
