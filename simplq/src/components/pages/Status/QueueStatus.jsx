import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import * as TokenService from '../../../services/token';
import JoinerStepper from '../../common/stepper/JoinerStepper';
import { setJoinerStep } from '../../../store/appSlice';
import { handleApiErrors } from '../../ErrorHandler';
import styles from '../../../styles/statusPage.module.scss';
import Button from '../../common/Button';
import Header, { SimplQHeader } from '../../common/Header';
import StatusContainer from './StatusContainer';
import QueueDetails from './QueueDetails';

const TIMEOUT = 10000;
let timeoutId;

function QueueStatus(props) {
  const tokenId = props.match.params.tokenId;
  const [tokenStatusResponse, setTokenStatusResponse] = useState();
  const dispatch = useDispatch();
  dispatch(setJoinerStep(2));
  const [updateInProgress, setUpdateInProgress] = useState(false);

  const showNotification = useCallback(() => {
    const notificationImage = '/LogoLight.png';
    const notificationText = `${tokenStatusResponse.queueName}: You've been notified by the queue manager.`;
    const notification = new Notification('SimplQ', {
      body: notificationText,
      icon: notificationImage,
    });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        // The tab has become visible so clear the now-stale Notification.
        notification.close();
      }
    });
  }, [tokenStatusResponse]);

  const oldTokenStatus = tokenStatusResponse ? tokenStatusResponse.tokenStatus : undefined;
  const update = useCallback(() => {
    clearTimeout(timeoutId);
    TokenService.get(tokenId)
      .then((response) => {
        setTokenStatusResponse(response);
        if (response.tokenStatus === 'NOTIFIED' && oldTokenStatus === 'WAITING') {
          showNotification();
        }
        timeoutId = setTimeout(update, TIMEOUT);
      })
      .catch((err) => {
        handleApiErrors(err);
        timeoutId = setTimeout(update, TIMEOUT);
      });
    // eslint-disable-next-line
  }, [tokenId, oldTokenStatus]); // don't add showNotification, will result in infinite loop

  useEffect(() => {
    update();
    return () => clearTimeout(timeoutId);
  }, [update]);

  const onDeleteClick = () => {
    setUpdateInProgress(true);
    TokenService.remove(tokenId)
      .then((response) => {
        setTokenStatusResponse({ ...tokenStatusResponse, tokenStatus: response.tokenStatus });
        setUpdateInProgress(false);
      })
      .catch(handleApiErrors);
  };

  const renderButtons = () => {
    if (tokenStatusResponse.tokenStatus !== 'REMOVED' && !updateInProgress) {
      return (
        <div className={styles['button-group']}>
          <div>
            <Button onClick={update}>Check Status</Button>
          </div>
          <div>
            <Button onClick={onDeleteClick}>Leave Queue</Button>
          </div>
        </div>
      );
    }
    return <div />;
  };

  const renderDetails = () => {
    if (tokenStatusResponse.tokenStatus !== 'REMOVED') {
      return <QueueDetails queueId={tokenStatusResponse.queueId} />;
    }
    return <div />;
  };

  if (!tokenStatusResponse) {
    return <CircularProgress />; // Todo(https://github.com/SimplQ/simplQ-frontend/issues/162)
  }

  return (
    <>
      <SimplQHeader />
      <Header text={tokenStatusResponse.queueName} className={styles.header} />
      <JoinerStepper />
      <StatusContainer
        updateInProgress={updateInProgress}
        tokenStatus={tokenStatusResponse.tokenStatus}
        aheadCount={tokenStatusResponse.aheadCount}
      />
      {renderButtons()}
      {renderDetails()}
    </>
  );
}
export default QueueStatus;
