import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JoinQueueForm from './Form';
import { setTokenId, setJoinerStep, setAheadCount, setQueueId } from '../../../store/appSlice';
import * as TokenService from '../../../services/token';
import { handleApiErrors } from '../../ErrorHandler';
import { SimplQHeader } from '../../common/Header';
import Header from '../../common/Header';
import styles from '../../../styles/joinPage.module.scss';
import JoinerStepper from '../../common/stepper/JoinerStepper';

export function JoinQueue(props) {
  const queueId = props.match.params.queueId;
  const queueName = useSelector((state) => state.appReducer.queueName);
  const dispatch = useDispatch();
  dispatch(setJoinerStep(0));
  dispatch(setQueueId(queueId));

  const joinQueueHandler = (name, contact) => {
    return TokenService.create(name, contact, true, queueId)
      .then((response) => {
        dispatch(setTokenId(response.tokenId));
        dispatch(setAheadCount(response.aheadCount));
        dispatch(setJoinerStep(1));
        props.history.push('/status');
      })
      .catch((err) => {
        handleApiErrors(err);
      });
  };

  return (
    <div>
      <SimplQHeader />
      <Header className={styles.header} text={queueName} />
      <JoinerStepper />
      <JoinQueueForm queueId={queueId} joinQueueHandler={joinQueueHandler} />
    </div>
  );
}

export default JoinQueue;
