import React, { useState, useEffect, useCallback } from 'react';
import { TokenRequestFactory } from '../../../api/requestFactory';
import styles from './status.module.scss';
import HeaderSection from '../../common/HeaderSection';
import StatusContainer from './StatusContainer';
import LoadingIndicator from '../../common/LoadingIndicator';
import StatusSidePanel from './StatusSidePanel';
import TokenNumber from './TokenNumber';
import { notify } from '../../../services/notification';
import useRequest from '../../../api/useRequest';

const TIMEOUT = 10000;
let timeoutId;

function QueueStatus(props) {
  const tokenId = props.match.params.tokenId;
  const [tokenStatusResponse, setTokenStatusResponse] = useState();
  const [updateInProgress, setUpdateInProgress] = useState(false);
  const { requestMaker } = useRequest();

  const showNotification = useCallback(() => {
    notify(`${tokenStatusResponse.queueName}: You've been notified by the queue manager.`);
  }, [tokenStatusResponse]);

  const oldTokenStatus = tokenStatusResponse ? tokenStatusResponse.tokenStatus : undefined;
  const update = useCallback(() => {
    clearTimeout(timeoutId);
    requestMaker(TokenRequestFactory.get(tokenId)).then((response) => {
      if (response) {
        setTokenStatusResponse(response);
        if (response.tokenStatus === 'NOTIFIED' && oldTokenStatus === 'WAITING') {
          showNotification();
        }
      }
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
    await requestMaker(TokenRequestFactory.remove(tokenId)).then((response) => {
      if (response) {
        setTokenStatusResponse({ ...tokenStatusResponse, tokenStatus: response.tokenStatus });
      }
      setUpdateInProgress(false);
    });
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
          update={update}
        />
        <StatusSidePanel leaveQueueHandler={onDeleteClick} queueId={tokenStatusResponse.queueId} />
      </div>
    </>
  );
}
export default QueueStatus;
