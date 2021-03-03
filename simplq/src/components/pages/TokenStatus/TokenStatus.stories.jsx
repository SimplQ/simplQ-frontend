import React from 'react';
import { createdToken as token } from '__mocks__/data';
import TokenStatus from './TokenStatus';

export default {
  component: TokenStatus,
  title: 'TokenStatus',
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <TokenStatus {...args} />
);

export const Waiting = Template.bind({});
Waiting.parameters = {
  state: {
    token,
  },
};

export const Notified = Template.bind({});
Notified.parameters = {
  state: {
    token: {
      ...token,
      tokenStatus: 'NOTIFIED',
    },
  },
};

export const Removed = Template.bind({});
Removed.parameters = {
  state: {
    token: {
      ...token,
      tokenStatus: 'REMOVED',
    },
  },
};
