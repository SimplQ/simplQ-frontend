import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styles from '../../../styles/slider.module.scss';

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
  return <AwesomeSlider className={styles['aws-btn']}>{slides}</AwesomeSlider>;
};

export default StandardSlider;
