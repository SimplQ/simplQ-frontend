import React from 'react';
export const toursteps = [
    {
      selector: '[data-tut="reactour__addMember"]',
      content:  ()=> (
        <div>
          <span style={{padding:"70px" }} >
            <img src=" /images/sharequeueArrow.png"  height="80" width="120" />
          </span>
          <br/>
          <div style={{transform: "rotate(-5deg)" }}>
            Add users to the queue manually
          </div>
        </div>
      ),
      style: {
        fontFamily: "Pacifico",
        backgroundColor: "transparent",
        color: "white",
        fontSize:"25px",
        boxShadow: "none"
      },
      position: 'left'
    },
    {
      selector: '[data-tut="reactour__shareQueue"]',
      content: () => (
        <div>
            <img  src=" /images/sharequeueArrow.png"  height="80" width="120" />
          <div style={{transform: "rotate(-10deg)"}}>Share Queue</div>
        </div>),
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

  export function checkUserTourStatus() {
    var isuserBeenOnTour = localStorage.getItem("__user_been_on_tour__");
    if(isuserBeenOnTour === null)
    {
      localStorage.setItem("__user_been_on_tour__",true);
      return true;
    }
    else
    return false;
  }