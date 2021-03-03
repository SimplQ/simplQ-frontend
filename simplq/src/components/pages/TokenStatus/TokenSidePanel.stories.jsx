import React from 'react';
import { createdToken as token } from '__mocks__/data';
import TokenSidePanel from './TokenSidePanel';

export default {
  component: TokenSidePanel,
  title: 'TokenSidePanel',
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <TokenSidePanel {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
  state: {
    token,
  },
};
