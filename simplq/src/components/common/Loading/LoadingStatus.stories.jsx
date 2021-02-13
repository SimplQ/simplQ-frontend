import React from 'react';

import LoadingStatus from './LoadingStatus';

export default {
  component: LoadingStatus,
  title: 'LoadingStatus',
  args: { dependsOn: 'actionName' },
  argTypes: {
    dependsOn: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <LoadingStatus {...args}>
    <p>Some child component to display</p>
  </LoadingStatus>
);

export const Pending = Template.bind({});
Pending.parameters = {
  state: {
    actionStatus: {
      actionName: 'pending',
    },
  },
};

export const Fulfilled = Template.bind({});
Fulfilled.parameters = {
  state: {
    actionStatus: {
      actionName: 'fulfilled',
    },
  },
};

export const Rejected = Template.bind({});
Rejected.parameters = {
  state: {
    actionStatus: {
      actionName: 'rejected',
    },
  },
};
