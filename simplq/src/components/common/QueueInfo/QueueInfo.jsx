import React, { useEffect, useCallback, useMemo } from 'react';
import moment from 'moment';
import { useGetQueueInfo } from 'store/asyncActions';
import { selectQueueInfo } from 'store/queueInfo';
import { useDispatch, useSelector } from 'react-redux';
import { selectTokens } from 'store/selectedQueue';
import styles from './QueueInfo.module.scss';

const DetailRow = ({ title, value, large }) => (
  <div className={styles['detail-row']}>
    <span className={styles['detail-name']}>{title}</span>
    <span className={`${styles['detail-value']} ${large ? styles['large-value'] : ''}`}>
      {value}
    </span>
  </div>
);

export default ({ queueId }) => {
  const dispatch = useDispatch();
  const getQueueInfo = useCallback(useGetQueueInfo(), []);
  const tokens = useSelector(selectTokens);

  useEffect(() => {
    if (queueId) {
      dispatch(getQueueInfo({ queueId }));
    }
  }, [queueId, tokens, dispatch, getQueueInfo]);

  const { status, queueCreationTimestamp, numberOfActiveTokens, totalNumberOfTokens } = useSelector(
    selectQueueInfo
  );

  const creationTime = useMemo(() => {
    if (!queueCreationTimestamp) return '';

    const localTimeStamp = moment(queueCreationTimestamp);
    return `${localTimeStamp.format('LT')} ${localTimeStamp.format('ll')}`;
  }, [queueCreationTimestamp]);

  return (
    <div className={styles['detail']}>
      <DetailRow title="Queue status:" value={status} />
      <DetailRow title="People currently in queue:" value={numberOfActiveTokens} large />
      <DetailRow title="Total number of people joined in queue:" value={totalNumberOfTokens} />
      <DetailRow title="Queue creation time:" value={creationTime} />
    </div>
  );
};
