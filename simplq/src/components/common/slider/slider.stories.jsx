import React from 'react';
import Slider from './index';

export default {
  component: Slider,
  title: 'Slider',
};

const joinerSlides = [
  {
    imgSrc: 'http://localhost:3000/images/queue_creation.svg',
    imgAlt: 'create',
    title: 'Create Queue',
    subtitle: 'Enter queue name and create a queue totally free of cost',
  },
  {
    imgSrc: 'http://localhost:3000/images/queue_creation.svg',
    imgAlt: 'create',
    title: 'Create Queue',
    subtitle: 'Enter queue name and create a queue totally free of cost',
  },
  {
    imgSrc: 'http://localhost:3000/images/queue_creation.svg',
    imgAlt: 'create',
    title: 'Create Queue',
    subtitle: 'Enter queue name and create a queue totally free of cost',
  },
  {
    imgSrc: 'http://localhost:3000/images/queue_creation.svg',
    imgAlt: 'create',
    title: 'Create Queue',
    subtitle: 'Enter queue name and create a queue totally free of cost',
  },
];

export const JoinerSlider = () => {
  return <Slider slides={joinerSlides} />;
};
