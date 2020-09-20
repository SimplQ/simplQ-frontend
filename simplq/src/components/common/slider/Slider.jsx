import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import styles from '../../../styles/slider.module.scss';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slide = (props) => {
  return (
    <div className={styles['slider-content']}>
      <img src={props.slide.imgSrc} alt={props.slide.imgAlt} />
      <h4>{props.slide.title}</h4>
      <p>{props.slide.subtitle}</p>
    </div>
  );
};

const StandardSlider = (props) => {
  const slides = props.slides.map((slide) => (
    <div>
      <Slide key={slide.imgSrc} slide={slide} />
    </div>
  ));
  return (
    <AutoplaySlider
      play
      cancelOnInteraction // should stop playing on user interaction
      interval={6000}
      bullets={false}
      className={styles['aws-btn']}
    >
      {slides}
    </AutoplaySlider>
  );
};

export default StandardSlider;
