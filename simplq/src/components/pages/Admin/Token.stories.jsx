import React from 'react';

import { queue } from '__mocks__/data';
import Token from './Token';

const queueToken = queue.tokens[0];
export default {
  component: Token,
  title: 'Token',
  args: {
    token: queueToken,
    removeTokenHandler: () => {},
  },
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <Token {...args} />
);

export const NonNotifiableWaiting = Template.bind({});

export const Waiting = Template.bind({});
Waiting.args = {
  token: {
    ...queueToken,
    notifiable: true,
  },
};

export const NotifyInProgress = Template.bind({});
NotifyInProgress.args = {
  token: {
    ...Waiting.args.token,
  },
};
NotifyInProgress.parameters = {
  state: {
    actionStatus: {
      notifyToken: 'pending',
    },
  },
};

export const DeleteInProgress = Template.bind({});
NotifyInProgress.args = {
  token: {
    ...Waiting.args.token,
  },
};
DeleteInProgress.parameters = {
  state: {
    actionStatus: {
      deleteToken: 'pending',
    },
  },
};

export const Notified = Template.bind({});
Notified.args = {
  token: {
    ...Waiting.args.token,
    tokenStatus: 'NOTIFIED',
  },
};
