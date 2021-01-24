import React, { useMemo } from 'react';
import moment from 'moment';
import styles from './queueStats.module.scss';

const DetailRow = ({ title, value, large }) => (
  <div className={styles['detail-row']}>
    <span className={styles['detail-name']}>{title}</span>
    <span className={`${styles['detail-value']} ${large ? styles['large-value'] : ''}`}>
      {value}
    </span>
  </div>
);

export default (props) => {
  const {
    status,
    queueCreationTimestamp,
    numberOfActiveTokens,
    totalNumberOfTokens,
  } = props.queueStatus;

  const creationTime = useMemo(() => {
    if (!queueCreationTimestamp) return '';

    const localTimeStamp = moment(queueCreationTimestamp); // TODO: Make sure the local time is always displayed
    return `${localTimeStamp.format('LT')} ${localTimeStamp.format('ll')}`;
  }, [queueCreationTimestamp]);

  return (
    <div>
      <div className={styles['detail']}>
        <DetailRow title="Queue status:" value={status} />
        <DetailRow title="People currently in queue:" value={numberOfActiveTokens} large />
        <DetailRow title="Queue creation time:" value={creationTime} />
        <DetailRow title="Total number of people joined in queue:" value={totalNumberOfTokens} />
      </div>
    </div>
  );
};
