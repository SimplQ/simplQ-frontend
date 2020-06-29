import React from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { useSelector } from 'react-redux';

export default () => {
  const currentJoinerStep = useSelector((state) => state.appReducer.currentJoinerStep);

  return (
    <Stepper style={{ padding: '30px 5px' }} activeStep={currentJoinerStep} alternativeLabel>
      <Step key={1}>
        <StepLabel>Enter details and join queue</StepLabel>
      </Step>
      <Step key={2}>
        <StepLabel>Check your queue status</StepLabel>
      </Step>
      <Step key={3}>
        <StepLabel>Wait to get notified</StepLabel>
      </Step>
    </Stepper>
  );
};
