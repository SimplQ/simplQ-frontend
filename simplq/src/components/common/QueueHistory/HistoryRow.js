import React from 'react';
import './QHistory.css';
import moment from 'moment';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DeleteIcon from '@material-ui/icons/Delete';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import UpdateIcon from '@material-ui/icons/Update';

export default (props) => {

  const getMessage = () => {
    var message = '';
    console.log(props);
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

  const getIcon = () => {
    return props.data.action === 'ADDED'
      ? <AddIcon fontSize="medium" />
      : props.data.action === 'REMOVED'
          ? <DeleteIcon fontSize="medium" />
          : props.data.action === 'NOTIFIED'
              ? <NotificationsIcon fontSize="medium" />
              : props.data.action === 'JOINED'
                  ? <TouchAppIcon fontSize="medium" />
                  : props.data.action === 'PAUSED'
                      ? <PauseIcon fontSize="medium" />
                      : props.data.action === 'RESUMED'
                          ? <PlayArrowIcon fontSize="medium" />
                          : props.data.action === 'UPDATED'
                              ? <UpdateIcon fontSize="medium" />
                              : null;
  }

  return (
    <React.Fragment>
      <div className="background-color-red history-row">
        <div className="history-row-icon">
          {getIcon ()}
        </div>
        <div className="history-row-info">
          <span className="history-row-info-topic">{getMessage ()}</span>
          <br />
          <span className="history-row-info-timestamp">
            {moment (props.data.actionTimestamp).format (
              'hh:mm a, MMMM DD, YYYY'
            )}
          </span>
          <br />
        </div>
        <div className="history-row-token">
          {props.data.tokenNumber}
        </div>
      </div>
    </React.Fragment>
  );
}
