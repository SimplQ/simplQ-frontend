import React from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { useSelector } from 'react-redux';

export default () => {
  const currentJoinerStep = useSelector((state) => state.appReducer.currentJoinerStep);

  return (
    <Stepper style={{ padding: '30px 5px' }} activeStep={currentJoinerStep} alternativeLabel>
      <Step key={1}>
        <StepLabel>Enter your contact details and join!!</StepLabel>
      </Step>
      <Step key={2}>
        <StepLabel>Relax and wait for your turn</StepLabel>
      </Step>
      <Step key={3}>
        <StepLabel>Your turn is up!</StepLabel>
      </Step>
    </Stepper>
  );
};
