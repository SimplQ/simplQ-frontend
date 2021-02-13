import React from 'react';
import LoadingIndicator from 'components/common/LoadingIndicator';
import Button from 'components/common/Button';
import styles from './status.module.scss';

export default (props) => {
  let status = null;
  if (props.updateInProgress) {
    status = null;
  } else if (props.tokenStatus === 'REMOVED') {
    status = <p>You have been removed from the queue, have a nice day</p>;
  } else if (props.tokenStatus === 'NOTIFIED') {
    status = <p>Your turn is up, please proceed to the counter</p>;
  } else if (props.aheadCount === 0) {
    status = <p>There is no one ahead of you. Please wait to be notified by the queue manager.</p>;
  } else {
    /* eslint-disable react/jsx-one-expression-per-line */
    status = (
      <>
        <p>Hello {props.name}, </p>
        <br />
        <p>People waiting in front of you:</p>
        <p className={styles['count']}>{props.aheadCount}</p>
        <p>Please wait for your turn. You will be notified here.</p>
        <div className={styles['refresh-button']}>
          <Button onClick={props.update}>Refresh status</Button>
        </div>
      </>
    );
  }

  if (!status) return <LoadingIndicator />;

  return <div className={styles['status-box']}>{status}</div>;
};
