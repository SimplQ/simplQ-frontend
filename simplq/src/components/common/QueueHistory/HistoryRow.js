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

class QueueRow extends React.PureComponent {
  getMessage = () => {
    this.message = '';
    if (this.props.data.action === 'ADDED') {
      this.message = this.props.data.name.trim () + ' was added';
    } else if (this.props.data.action === 'REMOVED') {
      this.message = this.props.data.name.trim () + ' was removed';
    } else if (this.props.data.action === 'NOTIFIED') {
      this.message = this.props.data.name.trim () + ' was notified';
    } else if (this.props.data.action === 'JOINED') {
      this.message = this.props.data.name.trim () + ' joined the queue';
    } else if (this.props.data.action === 'PAUSED') {
      this.message = 'The queue was paused';
    } else if (this.props.data.action === 'RESUMED') {
      this.message = 'The queue was resumed back';
    } else if (this.props.data.action === 'UPDATED') {
      this.message = 'Queue Settings was updated';
    } else {
      this.message = null;
    }
    return this.message;
  };

  getIcon () {
    return this.props.data.action === 'ADDED'
      ? <AddIcon fontSize="medium" />
      : this.props.data.action === 'REMOVED'
          ? <DeleteIcon fontSize="medium" />
          : this.props.data.action === 'NOTIFIED'
              ? <NotificationsIcon fontSize="medium" />
              : this.props.data.action === 'JOINED'
                  ? <TouchAppIcon fontSize="medium" />
                  : this.props.data.action === 'PAUSED'
                      ? <PauseIcon fontSize="medium" />
                      : this.props.data.action === 'RESUMED'
                          ? <PlayArrowIcon fontSize="medium" />
                          : this.props.data.action === 'UPDATED'
                              ? <UpdateIcon fontSize="medium" />
                              : null;
  }

  render () {
    return (
      <React.Fragment>
        <div className="background-color-red history-row">
          <div className="history-row-icon">
            {this.getIcon ()}
          </div>
          <div className="history-row-info">
            <span className="history-row-info-topic">{this.getMessage ()}</span>
            <br />
            <span className="history-row-info-timestamp">
              {moment (this.props.data.actionTimestamp).format (
                'hh:mm a, MMMM DD, YYYY'
              )}
            </span>
            <br />
          </div>
          <div className="history-row-token">
            {this.props.data.tokenNumber}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default QueueRow;
