import React from 'react';
import * as Tokens from './TokenStatus.stories';
import TokenStatusPage from './TokenStatusPage';

export default {
  component: TokenStatusPage,
  title: 'TokenStatusPage',
  args: {
    match: {
      params: {
        tokenId: 'xxx',
      },
    },
  },
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <TokenStatusPage {...args} />
);

export const Waiting = Template.bind({});
Waiting.parameters = {
  state: {
    token: Tokens.Waiting.parameters.state.token,
  },
};

export const Notified = Template.bind({});
Notified.parameters = {
  state: {
    token: Tokens.Notified.parameters.state.token,
  },
};

export const Removed = Template.bind({});
Removed.parameters = {
  state: {
    token: Tokens.Removed.parameters.state.token,
  },
};
