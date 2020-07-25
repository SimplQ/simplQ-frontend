import React from 'react';
import Slider from './Slider';

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
    imgSrc: 'http://localhost:3000/images/share.svg',
    imgAlt: 'share',
    title: 'Share Queue',
    subtitle: 'Share the queue to your users for them to join',
  },
  {
    imgSrc: 'http://localhost:3000/images/manage.svg',
    imgAlt: 'manage',
    title: 'Manage Queue',
    subtitle: 'Manage your queue seamlessly and efficiently',
  },
];

export const CreatorSlider = () => {
  return <Slider slides={creatorSlides} />;
};

const joinerSlides = [
  {
    imgSrc: 'http://localhost:3000/images/join.svg',
    imgAlt: 'join',
    title: 'Join Queue',
    subtitle: 'Get the queue link and join from anywhere',
  },
  {
    imgSrc: 'http://localhost:3000/images/finish.svg',
    imgAlt: 'wait',
    title: 'Wait for your turn',
    subtitle: 'Get notified when your turn is up without physically being there',
  },
];

export const JoinerSlider = () => {
  return <Slider slides={joinerSlides} />;
};
