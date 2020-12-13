import React, { useState, useEffect, useMemo } from 'react';
import moment from 'moment';
import InfoIcon from '@material-ui/icons/Info';
import styles from './status.module.scss';
import * as QueueService from '../../../services/queue';
import { handleApiErrors } from '../../ErrorHandler';
import SidePanelItem from '../../common/SidePanel/SidePanelItem';

const DetailRow = ({ title, value, large }) => (
  <div className={styles['detail-row']}>
    <span className={styles['detail-name']}>{title}</span>
    <span className={`${styles['detail-value']} ${large ? styles['large-value'] : ''}`}>
      {value}
    </span>
  </div>
);

export default (props) => {
  const [queueStatusResponse, setQueueStatusResponse] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await QueueService.getStatus(props.queueId).catch(handleApiErrors);
      setQueueStatusResponse(response);
    }
    fetchData();
  }, [props.queueId]);

  const creationTime = useMemo(() => {
    if (!queueStatusResponse) return '';

    const localTimeStamp = moment(queueStatusResponse.queueCreationTimestamp); // TODO: Make sure the local time is always displayed
    return `${localTimeStamp.format('LT')} ${localTimeStamp.format('ll')}`;
  }, [queueStatusResponse]);

  return (
    <SidePanelItem
      Icon={InfoIcon}
      title="Queue Details"
      description="Other information about the queue"
      expandable
      loading={!queueStatusResponse}
    >
      <div className={styles['detail']}>
        <DetailRow
          title="People currently in queue:"
          value={queueStatusResponse?.numberOfActiveTokens}
          large
        />
        <DetailRow title="Queue creation time:" value={creationTime} />
        <DetailRow
          title="Total number of people joined in queue:"
          value={queueStatusResponse?.totalNumberOfTokens}
        />
      </div>
    </SidePanelItem>
  );
};
