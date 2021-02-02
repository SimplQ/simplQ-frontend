import React, { useState } from 'react';
import Tour from 'reactour';
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
      getCurrentStep={props.stepChange}
    />
  );
};
