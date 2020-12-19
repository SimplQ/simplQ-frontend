import React from 'react';
import HistoryIcon from '@material-ui/icons/History';
import PauseIcon from '@material-ui/icons/Pause';
import SidePanel from '.';
import SidePanelItem from './SidePanelItem';

export default {
  component: SidePanel,
  title: 'SidePanel',
};

export const Panel = () => (
  <SidePanel>
    <SidePanelItem Icon={PauseIcon} title="Sample item1" description="Description of item" />
    <SidePanelItem Icon={HistoryIcon} title="Sample item2" description="Description of item" />
  </SidePanel>
);
