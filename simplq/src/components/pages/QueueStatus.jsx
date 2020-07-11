import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { CircularProgress, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import * as TokenService from '../../services/token';
import CentralSection from '../CentralSection';
import JoinerStepper from '../common/stepper/JoinerStepper';
import { setAheadCount, setJoinerStep } from '../../store/appSlice';
import { handleApiErrors } from '../ErrorHandler';
import NotificationButton from '../common/NotificationButton';

const TIMEOUT = 10000;
let timeoutId;

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
  content: {
    minHeight: theme.spacing(16),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function QueueStatus() {
  const dispatch = useDispatch();
  const [tokenStatus, setTokenStatus] = useState();
  const tokenId = useSelector((state) => state.appReducer.tokenId);
  const aheadCount = useSelector((state) => state.appReducer.aheadCount);
  const [updateInProgress, setUpdateInProgress] = useState(false);
  const classes = useStyles();

  const update = useCallback(() => {
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
  }, [tokenId, dispatch]);

  useEffect(() => {
    update();
    return () => clearTimeout(timeoutId);
  }, [update]);

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

  const showNotification = () => {
    const n = new Notification('My Great Song');
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        // The tab has become visible so clear the now-stale Notification.
        n.close();
      }
    });
  };

  let status = null;
  if (updateInProgress) {
    status = <CircularProgress />;
  } else if (tokenStatus === 'REMOVED') {
    status = <Typography align="center">You have been removed from the queue</Typography>;
  } else if (tokenStatus === 'NOTIFIED') {
    showNotification();
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
      <JoinerStepper />
      <CentralSection heading="Thanks for waiting!">
        <div className={classes.content}>{status}</div>
        <NotificationButton buttonClass={classes.button} buttonGroupClass={classes.buttonGroup} />
        {!(tokenStatus === 'REMOVED') && !updateInProgress ? (
          <div className={classes.buttonGroup}>
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              onClick={() => update()}
            >
              Check Status
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              onClick={onDeleteClick}
            >
              Leave Queue
            </Button>
          </div>
        ) : (
          <div />
        )}
      </CentralSection>
    </>
  );
}

export default QueueStatus;
