import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import StandardButton from '.';

export default {
  component: StandardButton,
  title: 'Button',
};

export const Normal = () => <StandardButton>Click me</StandardButton>;
export const Outlined = () => <StandardButton outlined>Click me</StandardButton>;
export const NormalWithIcon = () => (
  <StandardButton icon={<RefreshIcon />}>Click me</StandardButton>
);
export const OutlinedWithIcon = () => (
  <StandardButton icon={<RefreshIcon />} outlined>
    Click me
  </StandardButton>
);
export const Disabled = () => <StandardButton disabled>Disabled</StandardButton>;
