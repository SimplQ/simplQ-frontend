import React from 'react';
import * as Sentry from '@sentry/react';

export const getToursteps = (screenInnerWidth) => {
  const tourProperties = {
    fontSize: '1.563rem',
    isArrowVisible: screenInnerWidth >= 1275,
  };
  return [
    {
      selector: '[reactour-selector="reactour__addMember"]',
      content: () => (
        <>
          {tourProperties.isArrowVisible ? (
            <>
              <span style={{ padding: '4.375rem' }}>
                <img
                  src="/images/sharequeueArrow.png"
                  alt="share queue arrow"
                  height="80"
                  width="120"
                />
              </span>
              <br />
            </>
          ) : null}
          <div style={{ transform: 'rotate(-5deg)' }}>Add users to the queue manually</div>
        </>
      ),
      style: {
        fontFamily: 'Pacifico',
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: tourProperties.fontSize,
        boxShadow: 'none',
      },
      position: 'left',
    },
    {
      selector: '[reactour-selector="reactour__shareQueue"]',
      content: () => (
        <>
          {tourProperties.isArrowVisible ? (
            <img
              src="/images/sharequeueArrow.png"
              alt="share queue arrow"
              height="80"
              width="120"
              style={{ transform: 'rotate(-10deg)' }}
            />
          ) : null}
          <div style={{ transform: 'rotate(-10deg)' }}>Share Queue</div>
        </>
      ),
      style: {
        fontFamily: 'Pacifico',
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: '1.563rem',
        boxShadow: 'none',
      },
      position: 'top',
    },
  ];
};

export const stepChange = (stepNumber) => {
  const leftArrow = document.querySelector("[data-tour-elem='left-arrow']");
  const rightArrow = document.querySelector("[data-tour-elem='right-arrow']");

    if (leftArrow && rightArrow) {
      if (stepNumber === 0) {
          leftArrow.childNodes[0].style.color = 'grey';
          rightArrow.childNodes[0].style.color = 'white';
        }
      else if (stepNumber === 1) {
          leftArrow.childNodes[0].style.color = 'white';
          rightArrow.childNodes[0].style.color = 'grey';
      }
  }
  else
  {
    Sentry.captureMessage("left-arrow or right-arrow selectors of reatTour package not found");
  }

}