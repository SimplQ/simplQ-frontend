import React from 'react';
import moment from 'moment';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DeleteIcon from '@material-ui/icons/Delete';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import UpdateIcon from '@material-ui/icons/Update';
import styles from './HistoryRow.module.scss';

export default (props) => {
  // Returns the message to be displayed in the history information

  const getMessage = () => {
    let message = '';
    if (props.data.eventType === 'TOKEN_ADDED') {
      message = `${props.data.tokenName.trim()} was added`;
    } else if (props.data.eventType === 'TOKEN_REMOVED') {
      message = `${props.data.tokenName.trim()} was removed`;
    } else if (props.data.eventType === 'NOTIFIED') {
      message = `${props.data.tokenName.trim()} was notified`;
    } else if (props.data.eventType === 'JOINED') {
      message = `${props.data.tokenName.trim()} joined the queue`;
    } else if (props.data.eventType === 'PAUSED') {
      message = 'The queue was paused';
    } else if (props.data.eventType === 'RESUMED') {
      message = 'The queue was resumed back';
    } else if (props.data.eventType === 'UPDATED') {
      message = 'Queue Settings was updated';
    } else {
      message = null;
    }
    return message;
  };

  // for medium-sized to larger-sized devices, function returns a larger icon
  const getIcon = () => {
    const fontSize = '180%';
    return props.data.eventType === 'TOKEN_ADDED' ? (
      <AddIcon style={{ fontSize }} />
    ) : props.data.eventType === 'TOKEN_REMOVED' ? (
      <DeleteIcon style={{ fontSize }} />
    ) : props.data.eventType === 'NOTIFIED' ? (
      <NotificationsIcon style={{ fontSize }} />
    ) : props.data.eventType === 'JOINED' ? (
      <TouchAppIcon style={{ fontSize }} />
    ) : props.data.eventType === 'PAUSED' ? (
      <PauseIcon style={{ fontSize }} />
    ) : props.data.eventType === 'RESUMED' ? (
      <PlayArrowIcon style={{ fontSize }} />
    ) : props.data.eventType === 'UPDATED' ? (
      <UpdateIcon style={{ fontSize }} />
    ) : null;
  };

  // for medium-sized to larger-sized devices, function returns a
  // comparatively smaller icon
  const getSmallIcon = () => {
    const fontSize = '120%';
    return props.data.eventType === 'TOKEN_ADDED' ? (
      <AddIcon style={{ fontSize }} />
    ) : props.data.eventType === 'TOKEN_REMOVED' ? (
      <DeleteIcon style={{ fontSize }} />
    ) : props.data.eventType === 'NOTIFIED' ? (
      <NotificationsIcon style={{ fontSize }} />
    ) : props.data.eventType === 'JOINED' ? (
      <TouchAppIcon style={{ fontSize }} />
    ) : props.data.eventType === 'PAUSED' ? (
      <PauseIcon style={{ fontSize }} />
    ) : props.data.eventType === 'RESUMED' ? (
      <PlayArrowIcon style={{ fontSize }} />
    ) : props.data.eventType === 'UPDATED' ? (
      <UpdateIcon style={{ fontSize }} />
    ) : null;
  };

  return (
    <>
      <section className={styles['history-row']}>
        <div className={styles['history-row-icon']}>
          {window.innerWidth >= 700 ? getIcon() : getSmallIcon()}
        </div>
        <div className={styles['history-row-info']} id="history-row-info">
          <div className={styles['history-row-info-content']}>
            <span className={styles['history-row-info-topic']}>{getMessage()}</span>

            <span className={styles['history-row-info-timestamp']}>
              {moment(props.data.eventTimestamp).format('hh:mm a, MMMM DD, YYYY')}
            </span>
          </div>
        </div>
        <div className={styles['history-row-token']}>{props.data.tokenNumber}</div>
      </section>
    </>
  );
};
