import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Header from '../../common/Header';
import styles from '../../../styles/statusPage.module.scss';
import * as QueueService from '../../../services/queue';
import { handleApiErrors } from '../../ErrorHandler';
import LoadingIndicator from '../../common/LoadingIndicator';

export default (props) => {
  // https://dabblet.com/gist/1506530 --> checkbox hack
  const [queueStatusResponse, setQueueStatusResponse] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await QueueService.getStatus(props.queueId).catch(handleApiErrors);
      setQueueStatusResponse(response);
    }
    fetchData();
  }, [props.queueId]);

  if (!queueStatusResponse) {
    return <LoadingIndicator />;
  }

  const localTimeStamp = moment(queueStatusResponse.queueCreationTimestamp); // TODO: Make sure the local time is always displayed
  const creationTime = `${localTimeStamp.format('LT')} ${localTimeStamp.format('ll')}`;

  return (
    /* eslint-disable jsx-a11y/label-has-associated-control */
    <div>
      <label htmlFor="toggle">
        <Header text="Queue Details" className={styles['details-header']} />
      </label>
      <input type="checkbox" id="toggle" className={styles['visually-hidden']} />
      <div className={styles.details}>
        <table className={styles['center-table']}>
          <tbody>
            <tr>
              <td>
                Queue Name:
                <span className={styles['detail-value']}>{queueStatusResponse.queueName}</span>
              </td>
            </tr>
            <tr>
              <td>
                People currently in queue:
                <span className={styles['detail-value']}>
                  {queueStatusResponse.numberOfActiveTokens}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                Creation time:
                <span className={styles['detail-value']}>{creationTime}</span>
              </td>
            </tr>
            <tr>
              <td>
                Total number of people joined so far in queue:
                <span className={styles['detail-value']}>
                  {queueStatusResponse.totalNumberOfTokens}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
