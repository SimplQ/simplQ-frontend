import React from 'react';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

const label = 'label';

export const Checked = () => <Checkbox checked label={label} />;
export const Unchecked = () => <Checkbox checked={false} label={label} />;
