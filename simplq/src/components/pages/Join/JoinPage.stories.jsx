import React from 'react';

import JoinPage from './JoinPage';

export default {
  component: JoinPage,
  title: 'JoinPage',
  args: {
    match: {
      params: {
        queueName: 'MockQueue',
      },
    },
  },
};

const Template = (args) => (
  /* eslint-disable-next-line */
  <JoinPage {...args} />
);

export const Loading = Template.bind({});
Loading.parameters = {
  state: {
    actionStatus: {
      getQueueStatusByName: 'pending',
    },
  },
};

export const Loaded = Template.bind({});
Loaded.parameters = {
  state: {
    actionStatus: {
      getQueueStatusByName: 'fulfilled',
    },
    queueStatus: {
      queueId: '49b1ffa6-87fd-4a46-b95f-5588711cecca',
      queueName: 'MockQueue',
      status: 'ACTIVE',
      numberOfActiveTokens: 0,
      totalNumberOfTokens: 0,
      queueCreationTimestamp: '2020-12-15T08:07:55.374+0000',
    },
  },
};
