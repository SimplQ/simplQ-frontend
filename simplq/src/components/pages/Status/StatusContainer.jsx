import React from 'react';
import { useDispatch } from 'react-redux';
import { setJoinerStep } from '../../../store/appSlice';
import styles from '../../../styles/statusPage.module.scss';
import LoadingIndicator from '../../common/LoadingIndicator';

export default (props) => {
  const dispatch = useDispatch();

  let status = null;
  if (props.updateInProgress) {
    status = null;
  } else if (props.tokenStatus === 'REMOVED') {
    status = <p>You have been removed from the queue</p>;
  } else if (props.tokenStatus === 'NOTIFIED') {
    dispatch(setJoinerStep(3));
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
