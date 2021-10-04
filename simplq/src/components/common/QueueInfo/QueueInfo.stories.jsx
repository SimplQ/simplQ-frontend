import React from 'react';
import QueueInfo from '.';

export default {
  component: QueueInfo,
  title: 'QueueInfo',
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <QueueInfo {...args} />
);

export const Active = Template.bind({});
Active.args = {
  queueInfo: {
    queueId: '49b1ffa6-87fd-4a46-b95f-5588711cecca',
    queueName: 'aa',
    status: 'ACTIVE',
    lastRemovedTokenNumber: 3,
    numberOfActiveTokens: 0,
    totalNumberOfTokens: 0,
    queueCreationTimestamp: '2020-12-15T08:07:55.374+0000',
  },
};

export const Paused = Template.bind({});
Paused.args = {
  queueInfo: {
    ...Active.args.queueInfo,
    status: 'PAUSED',
  },
};

export const Deleted = Template.bind({});
Deleted.args = {
  queueInfo: {
    ...Active.args.queueInfo,
    status: 'DELETED',
  },
};
