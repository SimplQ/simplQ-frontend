import React from 'react';
import Loading from './Loading';

export default {
  component: Loading,
  title: 'Loading',
  argTypes: {
    actionStatus: {
      control: {
        type: 'select',
        options: ['pending', 'fulfilled', 'rejected'],
      },
    },
  },
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <Loading {...args}>
    <p>Some child component to display</p>
  </Loading>
);

export const StatusUnknown = Template.bind({});

export const IsLoading = Template.bind({});
IsLoading.args = { isLoading: true };

export const StatusPending = Template.bind({});
StatusPending.args = { actionStatus: 'pending' };

export const StatusFulfilled = Template.bind({});
StatusFulfilled.args = { actionStatus: 'fulfilled' };

export const StatusRejected = Template.bind({});
StatusRejected.args = { actionStatus: 'rejected' };
