import React from 'react';

import * as QueueInfoStories from 'components/common/QueueInfo/QueueInfo.stories';
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
      getQueueInfoByName: 'pending',
    },
  },
};

export const Loaded = Template.bind({});
Loaded.parameters = {
  state: {
    actionStatus: {
      getQueueInfoByName: 'fulfilled',
    },
    queueInfo: QueueInfoStories.Active.args.queueInfo,
  },
};

export const Joining = Template.bind({});
Joining.parameters = {
  state: {
    actionStatus: {
      getQueueInfoByName: 'fulfilled',
      joinQueue: 'pending',
    },
    queueInfo: QueueInfoStories.Active.args.queueInfo,
  },
};
