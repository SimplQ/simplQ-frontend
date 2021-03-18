import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetToken } from 'store/asyncActions';
import { selectToken } from 'store/token';
import { selectQueueStatus } from 'store/queueStatus';
import LoadingStatus from 'components/common/Loading/LoadingStatus';
import Button from 'components/common/Button';
import styles from './status.module.scss';

export default () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const getToken = useGetToken();
  const queueStatus = useSelector(selectQueueStatus);

  const onRefreshClick = () => {
    dispatch(getToken({ tokenId: token.tokenId }));
  };

  const getTokenStatus = () => {
    if (token.tokenStatus === 'REMOVED') {
      return <p>You have been removed from the queue, have a nice day</p>;
    }
    if (token.tokenStatus === 'NOTIFIED') {
      return <p>Your turn is up, please proceed to the counter</p>;
    }
    if (queueStatus.status === 'PAUSED') {
      return <p>Paused.</p>;
    }
    if (token.aheadCount === 0) {
      return <p>There is no one ahead of you. Please wait to be notified by the queue manager.</p>;
    }
    /* eslint-disable react/jsx-one-expression-per-line */
    return (
      <>
        <p>Hello {token.name}, </p>
        <br />
        <p>People waiting in front of you:</p>
        <p className={styles['count']}>{token.aheadCount}</p>
        <p>Please wait for your turn. You will be notified here.</p>
        <div className={styles['refresh-button']}>
          <Button onClick={onRefreshClick}>Refresh status</Button>
        </div>
      </>
    );
  };

  return (
    <div className={styles['status-box']}>
      <LoadingStatus dependsOn="getToken">{getTokenStatus()}</LoadingStatus>
    </div>
  );
};
