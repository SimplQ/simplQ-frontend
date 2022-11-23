import React from 'react';
import HistoryRow from './HistoryRow';

export default (props) => (
  <div>
    {props.data.map((item) => (
      <HistoryRow data={item} />
    ))}
  </div>
);
