import React from 'react';
import QueueStats from '.';

export default {
  component: QueueStats,
  title: 'QueueStats',
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <QueueStats {...args} />
);

export const Active = Template.bind({});
Active.args = {
  queueStatus: {
    queueId: '49b1ffa6-87fd-4a46-b95f-5588711cecca',
    queueName: 'aa',
    status: 'ACTIVE',
    numberOfActiveTokens: 0,
    totalNumberOfTokens: 0,
    queueCreationTimestamp: '2020-12-15T08:07:55.374+0000',
  },
};

export const Paused = Template.bind({});
Paused.args = {
  queueStatus: {
    ...Active.args.queueStatus,
    status: 'PAUSED',
  },
};

export const Deleted = Template.bind({});
Deleted.args = {
  queueStatus: {
    ...Active.args.queueStatus,
    status: 'DELETED',
  },
};
