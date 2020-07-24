import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import '../../../styles/slider.module.scss';

const slider = () => (
  <AwesomeSlider>
    <div>
      <img
        style={{ height: '15rem' }}
        src="http://localhost:3000/images/queue_creation.svg"
        alt="create"
      />
      <h4>Expreimetal title belo</h4>
      <p>Expreimetal text below</p>
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
