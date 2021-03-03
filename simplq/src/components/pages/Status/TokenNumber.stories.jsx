import React from 'react';
import { createdToken as token } from '__mocks__/data';
import TokenNumber from './TokenNumber';

export default {
  component: TokenNumber,
  title: 'TokenNumber',
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <TokenNumber {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
  state: {
    token,
  },
};
