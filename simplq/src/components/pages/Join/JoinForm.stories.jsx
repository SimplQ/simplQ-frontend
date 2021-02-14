import React from 'react';

import JoinForm from './JoinForm';

export default {
  component: JoinForm,
  title: 'JoinForm',
  args: {
    buttonText: 'Add To Queue',
  },
};

const Template = (args) => (
  /* eslint-disable-next-line */
  <JoinForm {...args} />
);

export const Basic = Template.bind({});

export const AddingMemeber = Template.bind({});
AddingMemeber.parameters = {
  state: {
    actionStatus: {
      joinQueue: 'pending',
    },
  },
};
