import React, { useState } from 'react';
import moment from 'moment';
import Header from '../../common/Header';
import styles from '../../../styles/statusPage.module.scss';
import * as QueueService from '../../../services/queue';
import { handleApiErrors } from '../../ErrorHandler';

export default (props) => {
  // https://dabblet.com/gist/1506530 --> checkbox hack
  const [details, setDetails] = useState();
  QueueService.getStatus(props.queueId).then(setDetails).catch(handleApiErrors);
  if (!details) {
    return <div>Loading</div>;
  }
  const timeStamp = moment(details.queueCreationTimestamp);
  const creationTime = `${timeStamp.format('LT')} ${timeStamp.format('ll')}`;
  return (
    /* eslint-disable jsx-a11y/label-has-associated-control */
    <div>
      <label htmlFor="toggle">
        <Header text="Queue Details" className={styles['details-header']} />
      </label>
      <input type="checkbox" id="toggle" className={styles['visually-hidden']} />
      <div className={styles.details}>
        <table>
          <tr>
            <p>
              Queue Name:
              <span className={styles['info-string']}>{details.queueName}</span>
            </p>
          </tr>
          <tr>
            <p>
              People currently in queue:
              <span className={styles['info-string']}>{details.numberOfActiveTokens}</span>
            </p>
          </tr>
          <tr>
            <p>
              Creation time:
              <span className={styles['info-string']}>{creationTime}</span>
            </p>
          </tr>
          <tr>
            <p>
              Total number of people joined so far in queue:
              <span className={styles['info-string']}>{details.totalNumberOfTokens}</span>
            </p>
          </tr>
        </table>
      </div>
    </div>
  );
};
