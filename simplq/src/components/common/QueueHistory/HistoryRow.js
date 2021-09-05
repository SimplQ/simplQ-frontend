import React from 'react';
import styles from './HistoryRow.module.scss';
import moment from 'moment';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DeleteIcon from '@material-ui/icons/Delete';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import UpdateIcon from '@material-ui/icons/Update';

export default (props) => {
  //Returns the message to be displayed in the history information
  const getMessage = () => {
    var message = '';
    if (props.data.action === 'ADDED') {
      message = props.data.name.trim () + ' was added';
    } else if (props.data.action === 'REMOVED') {
      message = props.data.name.trim () + ' was removed';
    } else if (props.data.action === 'NOTIFIED') {
      message = props.data.name.trim () + ' was notified';
    } else if (props.data.action === 'JOINED') {
      message = props.data.name.trim () + ' joined the queue';
    } else if (props.data.action === 'PAUSED') {
      message = 'The queue was paused';
    } else if (props.data.action === 'RESUMED') {
      message = 'The queue was resumed back';
    } else if (props.data.action === 'UPDATED') {
      message = 'Queue Settings was updated';
    } else {
      message = null;
    }
    return message;
  };

  //for medium-sized to larger-sized devices, function returns a larger icon
  const getIcon = () => {
    const fontSize = "180%";
    return props.data.action === 'ADDED'
      ? <AddIcon  style={{fontSize: fontSize}} />
      : props.data.action === 'REMOVED'
          ? <DeleteIcon style={{fontSize: fontSize}} />
          : props.data.action === 'NOTIFIED'
              ? <NotificationsIcon style={{fontSize: fontSize}} />
              : props.data.action === 'JOINED'
                  ? <TouchAppIcon style={{fontSize: fontSize}} />
                  : props.data.action === 'PAUSED'
                      ? <PauseIcon style={{fontSize: fontSize}} />
                      : props.data.action === 'RESUMED'
                          ? <PlayArrowIcon style={{fontSize: fontSize}}/>
                          : props.data.action === 'UPDATED'
                              ? <UpdateIcon style={{fontSize: fontSize}} />
                              : null;
  }

  //for medium-sized to larger-sized devices, function returns a 
  //comparatively smaller icon
  const getSmallIcon = () => {
    const fontSize = "120%";
    return props.data.action === 'ADDED'
      ? <AddIcon  style={{fontSize: fontSize}} />
      : props.data.action === 'REMOVED'
          ? <DeleteIcon style={{fontSize: fontSize}} />
          : props.data.action === 'NOTIFIED'
              ? <NotificationsIcon style={{fontSize: fontSize}} />
              : props.data.action === 'JOINED'
                  ? <TouchAppIcon style={{fontSize: fontSize}} />
                  : props.data.action === 'PAUSED'
                      ? <PauseIcon style={{fontSize: fontSize}} />
                      : props.data.action === 'RESUMED'
                          ? <PlayArrowIcon style={{fontSize: fontSize}}/>
                          : props.data.action === 'UPDATED'
                              ? <UpdateIcon style={{fontSize: fontSize}} />
                              : null;
  }

  return (
    <React.Fragment>
      <div className={styles["history-row"]}>
        <div className={styles["history-row-icon"]}>
          {window.innerWidth>=700?getIcon ():getSmallIcon()}
        </div>
        <div className={styles["history-row-info"]}>
          <span className={styles["history-row-info-topic"]}>{getMessage ()}</span>
          <br />
          <span className={styles["history-row-info-timestamp"]}>
            {moment (props.data.actionTimestamp).format (
              'hh:mm a, MMMM DD, YYYY'
            )}
          </span>
          <br />
        </div>
        <div className={styles["history-row-token"]}>
          {props.data.tokenNumber}
        </div>
      </div>
    </React.Fragment>
  );
}
