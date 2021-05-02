import React, { useState } from 'react';
import Tour from 'reactour';
import DoneIcon from '@material-ui/icons/DoneRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { enableScroll, disableScroll } from './ControlScroll';
import styles from './Tour.module.scss';

export default (props) => {
  const hasUserBeenOnTour = () => {
    const tourStatus = localStorage.getItem('__user_been_on_tour__');
    if (tourStatus === null) {
      localStorage.setItem('__user_been_on_tour__', true);
      return true;
    }
    return false;
  };
  const [tourOpen, setTourOpen] = useState(hasUserBeenOnTour());
  const [stepNumber, setStepNumber] = useState(0);

  const closeTour = () => setTourOpen(false);

  const stepChange = (step) => {
    setStepNumber(step);
  };

  const PrevNavButton = (
    <ArrowBackRoundedIcon
      className={stepNumber ? styles['nav-button'] : styles['disabled-nav-button']}
    />
  );

  return (
    <Tour
      className={styles['tour-box']}
      showNavigation={false}
      steps={props.toursteps}
      showNavigationNumber={false}
      showNumber={false}
      showCloseButton={false}
      isOpen={tourOpen}
      rounded={10}
      onRequestClose={closeTour}
      onAfterOpen={disableScroll}
      onBeforeClose={enableScroll}
      getCurrentStep={stepChange}
      prevButton={PrevNavButton}
      nextButton={<ArrowForwardRoundedIcon className={styles['nav-button']} />}
      lastStepNextButton={<DoneIcon className={styles['nav-button']} />}
    />
  );
};
