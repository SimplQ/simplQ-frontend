import React from 'react';
 
export const getToursteps = (screenInnerWidth) => {
  //console.log(screenInnerWidth);
  let tourProperties = {
    fontSize: "25px",//screenInnerWidth / 30,
    isArrowVisible: screenInnerWidth >=1275
  };
  console.log(screenInnerWidth,tourProperties.isArrowVisible);
  return [
    {
      selector: '[reactour-selector="reactour__addMember"]',
      content:  ()=> (
        <>
          { tourProperties.isArrowVisible && 
              <>
              <span style={{padding:"70px" }} >
              <img  src=" /images/sharequeueArrow.png"  height="80" width="120" />
              </span>
              <br/>
               </>
            }
          <div style={{transform: "rotate(-5deg)" }}>
            Add users to the queue manually
          </div>
        </>
      ),
      style: {
        fontFamily: "Pacifico",
        backgroundColor: "transparent",
        color: "white",
        fontSize: tourProperties.fontSize, // "25px",
        boxShadow: "none"
      },
      position: 'left'
    },
    {
      selector: '[reactour-selector="reactour__shareQueue"]',
      content: () => (
        <>
           { tourProperties.isArrowVisible && 
            <img  src=" /images/sharequeueArrow.png"  height="80" width="120" />
           }
          <div style={{transform: "rotate(-10deg)"}}>Share Queue</div>
        </>),
        style: {
                  fontFamily: "Pacifico",
                  backgroundColor: "transparent",
                  color: "white",
                  fontSize:"25px",
                  boxShadow: "none"
                },
                position: 'top'
    }
  ];
}

  export const hasUserBeenOnTour = () => {
    let isuserBeenOnTour = localStorage.getItem("__user_been_on_tour__");
    if(isuserBeenOnTour === null)
    {
      localStorage.setItem("__user_been_on_tour__",true);
      return true;
    }
    else
    return false;
  }