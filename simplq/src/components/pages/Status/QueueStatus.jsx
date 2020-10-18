import React, { useState, useEffect, useCallback } from 'react';
import * as TokenService from '../../../services/token';
import { handleApiErrors } from '../../ErrorHandler';
import styles from '../../../styles/statusPage.module.scss';
import HeaderSection from '../../common/HeaderSection';
import StatusContainer from './StatusContainer';
import LoadingIndicator from '../../common/LoadingIndicator';
import StatusSidePanel from './StatusSidePanel';
import TokenNumber from './TokenNumber';

const TIMEOUT = 10000;
let timeoutId;

function QueueStatus(props) {
  const tokenId = props.match.params.tokenId;
  const [tokenStatusResponse, setTokenStatusResponse] = useState();
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

  const onDeleteClick = async () => {
    setUpdateInProgress(true);
    await TokenService.remove(tokenId)
      .then((response) => {
        setTokenStatusResponse({ ...tokenStatusResponse, tokenStatus: response.tokenStatus });
        setUpdateInProgress(false);
      })
      .catch(handleApiErrors);
  };

  if (!tokenStatusResponse) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <HeaderSection queueName={tokenStatusResponse.queueName} />
      <div className={styles['main-body']}>
        <TokenNumber tokenNumber={tokenStatusResponse.tokenNumber} />
        <StatusContainer
          name={tokenStatusResponse.name}
          updateInProgress={updateInProgress}
          tokenStatus={tokenStatusResponse.tokenStatus}
          aheadCount={tokenStatusResponse.aheadCount}
        />
        <StatusSidePanel leaveQueueHandler={onDeleteClick} queueId={tokenStatusResponse.queueId} />
      </div>
    </>
  );
}
export default QueueStatus;
