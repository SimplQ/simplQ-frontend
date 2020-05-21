import React from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { useSelector } from 'react-redux';

export default () => {

    const currentJoinerStep = useSelector((state) => state.appReducer.currentJoinerStep);

    return <Stepper style={{ padding: "50px 5px" }} activeStep={currentJoinerStep} alternativeLabel>
        <Step key={1} >
            <StepLabel>Join the queue</StepLabel>
        </Step>
        <Step key={2}>
            <StepLabel>Wait for your turn</StepLabel>
        </Step>
        <Step key={3}>
            <StepLabel>Yay! your wait is over.</StepLabel>
        </Step>
    </Stepper>;
}