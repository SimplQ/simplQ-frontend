import React from 'react';
import HistoryRow from './HistoryRow';

class QueueHistory extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <div>
          {this.props.data.map (item => <HistoryRow data={item} />)}
        </div>
      </React.Fragment>
    );
  }
}

export default QueueHistory;
