import React from 'react';
import Loading from './Loading';

export default {
  component: Loading,
  title: 'Loading',
};

const Template = (args) => (
  <Loading actionStatus={args.actionStatus}>
    <p>Some child component to display</p>
  </Loading>
);

export const StateUnknown = Template.bind({});

export const StatePending = Template.bind({});
StatePending.args = { actionStatus: 'pending' };

export const StateFulfilled = Template.bind({});
StateFulfilled.args = { actionStatus: 'fullfiled' };

export const StateRejected = Template.bind({});
StateRejected.args = { actionStatus: 'rejected' };
