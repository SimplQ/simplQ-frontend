import React from 'react';
import { useDispatch } from 'react-redux';
import { useGetToken } from 'store/asyncActions';
import LoadingIndicator from '../../common/LoadingIndicator';
import Button from '../../common/Button';
import styles from './status.module.scss';

export default ({ token }) => {
  const dispatch = useDispatch();
  const getToken = useGetToken();

  const onRefreshClick = () => {
    dispatch(getToken({ tokenId: token.tokenId }));
  };

  let status = null;
  if (false) {
    status = null; // TODO
  } else if (token.tokenStatus === 'REMOVED') {
    status = <p>You have been removed from the queue, have a nice day</p>;
  } else if (token.tokenStatus === 'NOTIFIED') {
    status = <p>Your turn is up, please proceed to the counter</p>;
  } else if (token.aheadCount === 0) {
    status = <p>There is no one ahead of you. Please wait to be notified by the queue manager.</p>;
  } else {
    /* eslint-disable react/jsx-one-expression-per-line */
    status = (
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
  }

  // TODO
  if (!status) return <LoadingIndicator />;

  return <div className={styles['status-box']}>{status}</div>;
};
