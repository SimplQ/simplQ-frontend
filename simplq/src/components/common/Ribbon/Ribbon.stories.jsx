import React from 'react';
import Ribbon from '.';

export default {
  component: Ribbon,
  title: 'Ribbon',
};

const args = {
  title: 'Some title',
  subTitle: 'Some longer subtitle text!',
};

export const MainRibbon = () => <Ribbon title={args.title} subTitle={args.subTitle} />;
