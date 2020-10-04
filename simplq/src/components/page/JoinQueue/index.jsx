import React from 'react';
import CentralSection from '../../CentralSection';
import JoinQueueForm from './Form';
import { useDispatch } from 'react-redux';
import { setTokenId, setJoinerStep, setAheadCount, setQueueId } from '../../../store/appSlice';
import * as TokenService from '../../../services/token';
import JoinerStepper from '../../stepper/JoinerStepper';
import { handleApiErrors } from '../../ErrorHandler';

export function JoinQueue(props) {
  const queueId = props.match.params.queueId;
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
    <CentralSection heading="Join Queue">
      <JoinerStepper />
      <JoinQueueForm queueId={queueId} joinQueueHandler={joinQueueHandler} />
    </CentralSection>
  );
}

export default JoinQueue;
