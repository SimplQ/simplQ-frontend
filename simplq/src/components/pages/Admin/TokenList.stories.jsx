import React from 'react';

import { queue } from '__mocks__/data';
import TokenList from './TokenList';

export default {
  component: TokenList,
  title: 'TokenList',
};

const Template = (args) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <TokenList {...args} />
);

export const Loading = Template.bind({});

export const Empty = Template.bind({});
Empty.args = {
  tokens: [],
};

export const NotEmpty = Template.bind({});
NotEmpty.args = {
  tokens: queue.tokens,
};
