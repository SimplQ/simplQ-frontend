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

  const getIcon = (fontSize = '180%') => {
    let icon;
    if (props.data.eventType === 'TOKEN_ADDED') {
      icon = <AddIcon fontSize={fontSize} />;
    } else if (props.data.eventType === 'TOKEN_REMOVED') {
      icon = <DeleteIcon fontSize={fontSize} />;
    } else if (props.data.eventType === 'NOTIFIED') {
      icon = <NotificationsIcon fontSize={fontSize} />;
    } else if (props.data.eventType === 'JOINED') {
      icon = <TouchAppIcon fontSize={fontSize} />;
    } else if (props.data.eventType === 'PAUSED') {
      icon = <PauseIcon fontSize={fontSize} />;
    } else if (props.data.eventType === 'RESUMED') {
      icon = <PlayArrowIcon fontSize={fontSize} />;
    } else if (props.data.eventType === 'UPDATED') {
      icon = <UpdateIcon fontSize={fontSize} />;
    } else {
      icon = null;
    }
    return icon;
  };

  // for medium-sized to larger-sized devices, function returns a larger icon
  const getLargeIcon = () => {
    return getIcon('180%');
  };

  // for medium-sized to larger-sized devices, function returns a
  // comparatively smaller icon
  const getSmallIcon = () => {
    return getIcon('120%');
  };

  return (
    <>
      <section className={styles['history-row']}>
        <div className={styles['history-row-icon']}>
          {window.innerWidth >= 700 ? getLargeIcon() : getSmallIcon()}
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
