import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import * as TokenService from '../../services/token';
import JoinerStepper from '../common/stepper/JoinerStepper';
import { setAheadCount, setJoinerStep } from '../../store/appSlice';
import { handleApiErrors } from '../ErrorHandler';
import styles from '../../styles/statusPage.module.scss';
import Button from '../common/Button';
import Header, { SimplQHeader } from '../common/Header';

const TIMEOUT = 10000;
let timeoutId;

function QueueStatus() {
  const dispatch = useDispatch();
  const queueName = useSelector((state) => state.appReducer.queueName);
  const [tokenStatus, setTokenStatus] = useState();
  const tokenId = useSelector((state) => state.appReducer.tokenId);
  const aheadCount = useSelector((state) => state.appReducer.aheadCount);
  const [updateInProgress, setUpdateInProgress] = useState(false);

  const update = () => {
    clearTimeout(timeoutId);
    if (tokenId) {
      TokenService.get(tokenId)
        .then((response) => {
          dispatch(setAheadCount(response.aheadCount));
          setTokenStatus(response.tokenStatus);
          timeoutId = setTimeout(update, TIMEOUT);
        })
        .catch((err) => {
          handleApiErrors(err);
          timeoutId = setTimeout(update, TIMEOUT);
        });
    }
  };

  useEffect(() => {
    update();
    return () => clearTimeout(timeoutId);
  }, [tokenId]);

  const onDeleteClick = () => {
    setUpdateInProgress(true);
    TokenService.remove(tokenId)
      .then(() => {
        setTokenStatus('REMOVED');
        setUpdateInProgress(false);
      })
      .catch((err) => {
        handleApiErrors(err);
      });
  };

  let status = null;
  if (updateInProgress) {
    status = <CircularProgress />;
  } else if (tokenStatus === 'REMOVED') {
    status = <Typography align="center">You have been removed from the queue</Typography>;
  } else if (tokenStatus === 'NOTIFIED') {
    dispatch(setJoinerStep(3));
    status = <img src="/tenor.gif" alt="Your turn is up" />;
  } else if (aheadCount === 0) {
    status = (
      <Alert severity="success">
        <Typography variant="h6" align="center" color="textSecondary" component="p">
          There is no one ahead of you. Please wait to be notified by the queue manager.
        </Typography>
      </Alert>
    );
  } else {
    status = (
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        {`People infront of you :${aheadCount}`}
      </Typography>
    );
  }

  return (
    <>
      <SimplQHeader />
      <Header text={queueName} className={styles.header} />
      <JoinerStepper />
      <div>{status}</div>
      {!(tokenStatus === 'REMOVED') && !updateInProgress ? (
        <div className={styles['button-group']}>
          <div>
            <Button text="Check Status" onClick={() => update()} />
          </div>
          <div>
            <Button text="Leave Queue" onClick={onDeleteClick} />
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}

export default QueueStatus;
