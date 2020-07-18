import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import '../../../styles/slider.module.scss';

const slider = () => (
  <AwesomeSlider>
    <div>
      <img
        style={{ height: '15rem' }}
        src="http://localhost:3000/images/queue_creation.svg"
        alt="create"
      />
    </div>
    <div>
      <img
        style={{ height: '15rem' }}
        src="http://localhost:3000/images/check_status.svg"
        alt="check status"
      />
    </div>
    <div>
      <img
        style={{ height: '15rem' }}
        src="http://localhost:3000/images/queue_creation.svg"
        alt="queue creation"
      />
    </div>
  </AwesomeSlider>
);

export default slider;
