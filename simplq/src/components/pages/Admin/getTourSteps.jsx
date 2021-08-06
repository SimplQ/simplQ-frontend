import React from 'react';

const getToursteps = (screenInnerWidth) => {
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
    {
      selector: '[reactour-selector="reactour__printQRCode"]',
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
          <div style={{ transform: 'rotate(-10deg)' }}>Print QR Code</div>
        </>
      ),
      style: {
        fontFamily: 'Pacifico',
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: '1.563rem',
        boxShadow: 'none',
      },
      position: 'left',
    },
  ];
};
export default getToursteps;
