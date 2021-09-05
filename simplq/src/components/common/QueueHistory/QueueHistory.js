import React from 'react';
import HistoryRow from './HistoryRow';

export default (props) => {
  return (
    <React.Fragment>
      <div>
        {props.data.map (item => <HistoryRow data={item} />)}
      </div>
    </React.Fragment>
  );
}
