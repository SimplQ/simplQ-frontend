import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { handleEnterPress } from 'utils/eventHandling';
import InputField from 'components/common/InputField';
import PhoneInput from 'components/common/PhoneInput';
import StandardButton from 'components/common/Button';
import LoadingStatus from 'components/common/Loading';
import styles from './JoinForm.module.scss';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import Box from '@material-ui/core/Box';
import { Stepper } from '@material-ui/core';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { selectQueueInfo } from '../../../store/queueInfo';

export function JoinQueueForm(props) {
  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [invalidContact, setInvalidContact] = useState(false);
  const [contact, setContact] = useState('');
  const joinQueueActionStatus = useSelector((state) => state.actionStatus['joinQueue']);
  const prevActionStatus = useRef();
  const [activeStep, setActiveStep] = React.useState(0);
  const queueInfo = useSelector(selectQueueInfo);

  const handleNext = async () => {
    if (invalidContact) return;
    if (contact === '') {
      setInvalidContact(true);
      return;
    }

    // check if user is on queue page (pages/Admin/AddMember.jsx) where each step (contact + name) is necessary
    if (props.queuePage) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      return;
    }

    props.onSubmitGetToken(contact);
    if (queueInfo.selfJoinAllowed) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    // Reset form only after successful action
    if (prevActionStatus.current === 'pending' && joinQueueActionStatus === 'fulfilled') {
      setContact('');
      setName('');
    }

    // Set previous action status for next render
    prevActionStatus.current = joinQueueActionStatus;
  }, [joinQueueActionStatus]);

  function handleNameChange(e) {
    if (name.match('^[A-Za-z0-9 ]*$')) {
      setName(e.target.value);
      setInvalidName(false);
    } else {
      setInvalidName(true);
    }
  }

  const onSubmit = () => {
    if (invalidContact || invalidName) return;
    if (name === '') {
      setInvalidName(true);
      return;
    }
    if (contact === '') {
      setInvalidContact(true);
      return;
    }

    props.joinQueueHandler(name, contact);
    // reset to first step on queue page (pages/Admin/AddMember.jsx)
    if (props.queuePage) setActiveStep(0);
  };

  const checkJoinDisabled = () => {
    return invalidContact || invalidName || contact === '' || name === '';
  };

  const checkNextDisabled = () => {
    return invalidContact || contact === '';
  };

  let steps = [
    {
      label: 'Enter phone number',
      item: (
        <PhoneInput
          isValid={!invalidContact}
          setInvalidContact={setInvalidContact}
          contact={contact}
          onChange={(val) => setContact(val)}
          onKeyDown={handleNext}
        />
      ),
    },
    {
      label: 'Enter name',
      item: (
        <InputField
          placeholder="Name"
          value={name}
          onKeyPress={(e) => handleEnterPress(e, onSubmit)}
          onChange={handleNameChange}
          error={invalidName}
          helperText={invalidName ? 'Enter a valid name' : ''}
          autoFocus
        />
      ),
    },
  ];

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}
            >
              {step.label}
            </StepLabel>
            <StepContent className={styles.stepTopSpace}>
              {step.item}
              <Box className={styles.formBox}>
                {index === steps.length - 1 && (queueInfo.selfJoinAllowed || props.queuePage) ? (
                  <LoadingStatus dependsOn="joinQueue">
                    <StandardButton disabled={checkJoinDisabled()} onClick={onSubmit}>
                      {props.buttonText}
                    </StandardButton>
                  </LoadingStatus>
                ) : (
                  <StandardButton
                    disabled={checkNextDisabled()}
                    variant="contained"
                    onClick={handleNext}
                  >
                    Next
                  </StandardButton>
                )}

                <span className={styles.formButtonsSpace} />

                {index === 0 ? null : (
                  <StandardButton outlined disabled={index === 0} onClick={handleBack}>
                    Back
                  </StandardButton>
                )}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default JoinQueueForm;
