import React from 'react';
import styles from '../../../styles/statusPage.module.scss';
import LoadingIndicator from '../../common/LoadingIndicator';

export default (props) => {
  let status = null;
  if (props.updateInProgress) {
    status = null;
  } else if (props.tokenStatus === 'REMOVED') {
    status = <p>You have been removed from the queue</p>;
  } else if (props.tokenStatus === 'NOTIFIED') {
    status = <p>Your turn is up </p>;
  } else if (props.aheadCount === 0) {
    status = <p>There is no one ahead of you. Please wait to be notified by the queue manager.</p>;
  } else {
    /* eslint-disable react/jsx-one-expression-per-line */
    status = (
      <p>
        People ahead of you :<span className={styles.count}>{props.aheadCount}</span>
      </p>
    );
  }

  if (!status) return <LoadingIndicator />;

  return <div className={styles['status-box']}>{status}</div>;
};
