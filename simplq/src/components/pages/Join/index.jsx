import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JoinQueueForm from './Form';
import { setTokenId, setJoinerStep, setAheadCount, setQueueId } from '../../../store/appSlice';
import * as TokenService from '../../../services/token';
import { handleApiErrors } from '../../ErrorHandler';
import Header, { SimplQHeader } from '../../common/Header';
import styles from '../../../styles/joinPage.module.scss';
import JoinerStepper from '../../common/stepper/JoinerStepper';
import { Banner } from '../Home/StaticInfos';
import { JoinQButton } from '../../common/Button';
import { handleEnterPress } from '../../common/utilFns';
import InputField from '../../common/InputField';

export function JoinQueueWithDetails(props) {
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

export function JoinQueueWithLink(props) {
  const [queueLink, setQueueLink] = useState('');

  const handleClick = (link) => {
    const queueId = link.split('/').pop();
    props.history.push(`/j/${queueId}`);
  };

  return (
    <>
      <Banner />
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
    </>
  );
}

// export default JoinQueue;
