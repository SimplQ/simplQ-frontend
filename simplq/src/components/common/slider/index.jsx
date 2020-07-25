import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styles from '../../../styles/slider.module.scss';

const Slide = (props) => {
  console.log('This is something tiny missing somehwere...');
  return (
    <div>
      <img src={props.slide.imgSrc} alt={props.slide.imgAlt} />
      <h4>{props.slide.title}</h4>
      <p>{props.slide.subtitle}</p>
    </div>
  );
};

const Slider = (props) => {
  const slides = props.slides.map((slide) => (
    <div>
      <Slide key={slide.imgSrc} slide={slide} />
    </div>
  ));
  console.log(slides);
  return <AwesomeSlider className={styles['aws-btn']}>{slides}</AwesomeSlider>;
};

export default Slider;
