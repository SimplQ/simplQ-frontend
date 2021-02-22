import React from 'react';

import { queue } from '__mocks__/data';
import AdminPage from './AdminPage';

export default {
  component: AdminPage,
  title: 'AdminPage',
  args: {
    match: {
      params: {
        queueId: 'xxx-xxx',
      },
    },
  },
  parameters: {
    state: {
      selectedQueue: { ...queue },
    },
  },
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <AdminPage {...args} />
);

export const Default = Template.bind({});
