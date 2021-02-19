import React from 'react';
import MyQueues from './MyQueues';

export default {
  component: MyQueues,
  title: 'MyQueues',
  parameters: {
    state: {
      queues: [],
    },
  },
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <MyQueues {...args} />
);

export const Empty = Template.bind({});

export const NotEmpty = Template.bind({});
NotEmpty.parameters = {
  state: {
    queues: [
      {
        queueId: '49891e84-63a5-4c7b-9200-0c1e65393572',
        queueName: 'QueueI',
        queueCreationTimestamp: '2021-02-14T04:28:59.776+0000',
      },
      {
        queueId: 'cef39fc3-f947-450b-ad69-0e18dc406653',
        queueName: 'QueueII',
        queueCreationTimestamp: '2021-02-14T08:47:29.988+0000',
      },
      {
        queueId: '7121848f-023b-482a-9b9c-f7e7cd7b8904',
        queueName: 'QueueIII',
        queueCreationTimestamp: '2021-02-14T11:50:09.218+0000',
      },
    ],
  },
};
