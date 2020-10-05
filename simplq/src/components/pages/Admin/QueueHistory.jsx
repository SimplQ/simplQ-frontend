import React from 'react';
import HistoryIcon from '@material-ui/icons/History';
import SidePanelButton from '../../common/SidePanelButton';

export default () => {
  return (
    <SidePanelButton
      Icon={HistoryIcon}
      title="Queue History"
      description="History of events in the queue"
    />
  );
};
