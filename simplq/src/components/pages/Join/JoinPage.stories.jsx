import React from 'react';

import * as QueueStatsStories from 'components/common/QueueStats/QueueStats.stories';
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
    queueStatus: QueueStatsStories.Active.args.queueStatus,
  },
};

export const Joining = Template.bind({});
Joining.parameters = {
  state: {
    actionStatus: {
      getQueueStatusByName: 'fulfilled',
      joinQueue: 'pending',
    },
    queueStatus: QueueStatsStories.Active.args.queueStatus,
  },
};
