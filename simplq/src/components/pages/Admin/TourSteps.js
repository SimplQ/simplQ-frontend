import React from 'react';

export const getToursteps = (screenInnerWidth) => {
  let tourProperties = {
    fontSize: "1.563rem",
    isArrowVisible: screenInnerWidth >=1275
  };
  return [
    {
      selector: '[reactour-selector="reactour__addMember"]',
      content:  ()=> (
        <>
          { 
          tourProperties.isArrowVisible && 
              <>
              <span style={{padding:"4.375rem" }} >
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
        fontSize: tourProperties.fontSize, 
        boxShadow: "none"
      },
      position: 'left'
    },
    {
      selector: '[reactour-selector="reactour__shareQueue"]',
      content: () => (
        <>
           {tourProperties.isArrowVisible && <img  src=" /images/sharequeueArrow.png"  height="80" width="120" style={{transform: "rotate(-10deg)"}} /> }
          <div style={{transform: "rotate(-10deg)"}}>Share Queue</div>
        </>),
        style: {
                  fontFamily: "Pacifico",
                  backgroundColor: "transparent",
                  color: "white",
                  fontSize:"1.563rem",
                  boxShadow: "none",
                },
                position: 'top'
    }
  ];
}

  export const hasUserBeenOnTour = () => {
    const tourStatus = localStorage.getItem("__user_been_on_tour__");
    if(tourStatus === null)
    {
      localStorage.setItem("__user_been_on_tour__",true);
      return true;
    }
    else
    return false;
  }

  export const stepChange = (stepNumber) => {
    if(stepNumber == 0)
    {
      let leftArrow = document.querySelector("[data-tour-elem='left-arrow']");
      let rightArrow = document.querySelector("[data-tour-elem='right-arrow']");
      if(leftArrow && rightArrow)
      {
        leftArrow.childNodes[0].style.color = "grey";
        rightArrow.childNodes[0].style.color = "White";
      }
    }
    else if(stepNumber == 1)
    {
      let leftArrow = document.querySelector("[data-tour-elem='left-arrow']");
      let rightArrow = document.querySelector("[data-tour-elem='right-arrow']");

      if(leftArrow && rightArrow)
      {
        leftArrow.childNodes[0].style.color = "White";
        rightArrow.childNodes[0].style.color = "Grey";
      }
    }
  }
  