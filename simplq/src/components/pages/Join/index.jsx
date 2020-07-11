import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import JoinQueueForm from './Form';
import { setTokenId, setJoinerStep, setAheadCount, setQueueId } from '../../../store/appSlice';
import * as TokenService from '../../../services/token';
import { handleApiErrors } from '../../ErrorHandler';
import Header, { SimplQHeader } from '../../common/Header';
import styles from '../../../styles/joinPage.module.scss';
import JoinerStepper from '../../common/stepper/JoinerStepper';
import { Banner } from '../Home/StaticInfos';
import { JoinQButton } from '../../common/Button';
import { handleEnterPress } from '../../utilFns';

export function JoinQueueDetails(props) {
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

export function JoinQueueLink(props) {
  const [queueLink, setQueueLink] = useState('');

  const handleClick = (link) => {
    const queueId = link.split('/').pop();
    props.history.push(`/j/${queueId}`);
  };

  return (
    <>
      <Banner />
      <TextField
        placeholder="Enter queue link"
        fullWidth
        required
        variant="outlined"
        onKeyPress={(e) => handleEnterPress(e, () => handleClick(queueLink))}
        value={queueLink}
        onChange={(e) => setQueueLink(e.target.value)}
        // error={invalidName}
        // helperText={invalidName ? 'Enter a valid name' : ''}
      />
      <JoinQButton onClick={() => handleClick(queueLink)} />
    </>
  );
}

// export default JoinQueue;
