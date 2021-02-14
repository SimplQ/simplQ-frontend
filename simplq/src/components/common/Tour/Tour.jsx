import React, { useState } from 'react';
import Tour from 'reactour';
import * as Sentry from '@sentry/react';
import { enableScroll, disableScroll } from './ControlScroll';

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

  const closeTour = () => setTourOpen(false);

  const stepChange = (stepNumber) => {
    const leftArrow = document.querySelector("[data-tour-elem='left-arrow']");
    const rightArrow = document.querySelector("[data-tour-elem='right-arrow']");

    if (leftArrow && rightArrow) {
      if (stepNumber === 0) {
        leftArrow.childNodes[0].style.color = 'grey';
        rightArrow.childNodes[0].style.color = 'white';
      } else if (stepNumber === props.toursteps.length - 1) {
        leftArrow.childNodes[0].style.color = 'white';
        rightArrow.childNodes[0].style.color = 'grey';
      }
    } else {
      Sentry.captureMessage('left-arrow or right-arrow selectors of reatTour package not found');
    }
  };

  return (
    <Tour
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
    />
  );
};
