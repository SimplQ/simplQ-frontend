import React from 'react';
import Slider from './index';

export default {
  component: Slider,
  title: 'Slider',
};

const creatorSlides = [
  {
    imgSrc: 'http://localhost:3000/images/queue_creation.svg',
    imgAlt: 'create',
    title: 'Create Queue',
    subtitle: 'Enter queue name and create a queue totally free of cost',
  },
  {
    imgSrc: 'http://localhost:3000/images/check_status.svg',
    imgAlt: 'create',
    title: 'Should Fill',
    subtitle: 'Fill the description',
  },
  {
    imgSrc: 'http://localhost:3000/images/minimize_crowding.svg',
    imgAlt: 'create',
    title: 'Should Fill',
    subtitle: 'Fill the description',
  },
];

export const CreatorSlider = () => {
  return <Slider slides={creatorSlides} />;
};

const joinerSlides = [
  {
    imgSrc: 'http://localhost:3000/images/queue_creation.svg',
    imgAlt: 'create',
    title: 'Create Queue',
    subtitle: 'Enter queue name and create a queue totally free of cost',
  },
  {
    imgSrc: 'http://localhost:3000/images/check_status.svg',
    imgAlt: 'create',
    title: 'Should Fill',
    subtitle: 'Fill the description',
  },
  {
    imgSrc: 'http://localhost:3000/images/minimize_crowding.svg',
    imgAlt: 'create',
    title: 'Should Fill',
    subtitle: 'Fill the description',
  },
];

export const JoinerSlider = () => {
  return <Slider slides={joinerSlides} />;
};
