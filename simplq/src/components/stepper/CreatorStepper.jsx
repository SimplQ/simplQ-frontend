import React from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { useSelector } from 'react-redux';

export default () => {
  const currentCreationStep = useSelector((state) => state.appReducer.currentCreationStep);

  return (
    <Stepper style={{ padding: '30px 5px' }} activeStep={currentCreationStep} alternativeLabel>
      <Step key={1}>
        <StepLabel>Create your virtual queue</StepLabel>
      </Step>
      <Step key={2}>
        <StepLabel>Share link to invite people </StepLabel>
      </Step>
      <Step key={3}>
        <StepLabel>Notify people about their turn</StepLabel>
      </Step>
    </Stepper>
  );
};
