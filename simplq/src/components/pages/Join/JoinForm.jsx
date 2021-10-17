import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { handleEnterPress } from 'utils/eventHandling';
import InputField from 'components/common/InputField';
import PhoneInput from 'components/common/PhoneInput';
import StandardButton from 'components/common/Button';
import LoadingStatus from 'components/common/Loading';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import Box from '@material-ui/core/Box';
import { Stepper } from '@material-ui/core';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import styles from './JoinForm.module.scss';
import Checkbox from '../../common/Checkbox/Checkbox';
import { selectQueueInfo } from '../../../store/queueInfo';

export function JoinQueueForm(props) {
  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [contact, setContact] = useState('');
  const [invalidContact, setInvalidContact] = useState(false);
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const joinQueueActionStatus = useSelector((state) => state.actionStatus['joinQueue']);
  const prevActionStatus = useRef();
  const [activeStep, setActiveStep] = React.useState(0);
  const queueInfo = useSelector(selectQueueInfo);
  const [saveToLocalStorage, setSaveToLocalStorage] = useState(true);

  const { notifyByEmail } = useSelector(selectQueueInfo);
  const collectEmail = !!notifyByEmail;

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
      setEmail('');
    }

    // Set previous action status for next render
    prevActionStatus.current = joinQueueActionStatus;
  }, [joinQueueActionStatus]);

  useEffect(() => {
    const localStorageName = localStorage.getItem('name');
    const localStorageContact = localStorage.getItem('contact');
    const localStorageEmail = localStorage.getItem('email');
    if (localStorageName) {
      setName(localStorageName);
    }
    if (localStorageContact) {
      setContact(localStorageContact);
    }
    if (localStorageEmail) {
      setEmail(localStorageEmail);
    }
  }, []);

  function handleNameChange(e) {
    if (name.match('^[A-Za-z0-9 ]*$')) {
      setName(e.target.value);
      setInvalidName(false);
    } else {
      setInvalidName(true);
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
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

    if (collectEmail && email === '') {
      setInvalidEmail(true);
      return;
    }

    if (saveToLocalStorage) {
      localStorage.setItem('contact', contact);
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('contact');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    props.joinQueueHandler(name, contact, collectEmail ? email : undefined);
    // reset to first step on queue page (pages/Admin/AddMember.jsx)
    if (props.queuePage) setActiveStep(0);
  };

  const checkJoinDisabled = () => {
    return (
      invalidContact ||
      invalidName ||
      contact === '' ||
      name === '' ||
      (collectEmail && (email === '' || invalidEmail))
    );
  };

  const checkNextDisabled = () => {
    return invalidContact || contact === '';
  };

  const steps = [
    {
      id: 'phone',
      label: 'Enter phone number',
      item: (
        <div className={styles.formItem}>
          <PhoneInput
            isValid={!invalidContact}
            setInvalidContact={setInvalidContact}
            contact={contact}
            onChange={(val) => setContact(val)}
            onKeyDown={handleNext}
          />
        </div>
      ),
    },
    {
      id: 'rest-info',
      label: 'Enter name',
      item: (
        <>
          <div className={styles.formItem}>
            <InputField
              placeholder="Name"
              value={name}
              onKeyPress={(e) => handleEnterPress(e, onSubmit)}
              onChange={handleNameChange}
              error={invalidName}
              helperText={invalidName ? 'Enter a valid name' : ''}
              autoFocus
            />
          </div>
          {collectEmail ? (
            <div className={styles.formItem}>
              <InputField
                placeholder="Email"
                value={email}
                onKeyPress={(e) => handleEnterPress(e, onSubmit)}
                onChange={handleEmailChange}
                error={invalidEmail}
                helperText={invalidEmail ? 'Enter a valid name' : ''}
              />
            </div>
          ) : null}
        </>
      ),
    },
  ];
  const renderBox = (index) => {
    const backButton =
      index === 0 ? null : (
        <StandardButton outlined disabled={index === 0} onClick={handleBack}>
          Back
        </StandardButton>
      );
    const isSubmitStep =
      index === steps.length - 1 && (queueInfo.selfJoinAllowed || props.queuePage);
    const boxContent = isSubmitStep ? (
      <>
        <Checkbox
          name="saveToLocalStorage"
          label="Save for later use"
          checked={saveToLocalStorage}
          onChange={() => {
            setSaveToLocalStorage(!saveToLocalStorage);
          }}
        />
        <div className={styles.formBoxVerticalButtons}>
          <LoadingStatus dependsOn="joinQueue">
            <StandardButton disabled={checkJoinDisabled()} onClick={onSubmit}>
              {props.buttonText}
            </StandardButton>
          </LoadingStatus>
          <span className={styles.formButtonsSpace} />
          {backButton}
        </div>
      </>
    ) : (
      <>
        <StandardButton disabled={checkNextDisabled()} variant="contained" onClick={handleNext}>
          Next
        </StandardButton>
        <span className={styles.formButtonsSpace} />
        {backButton}
      </>
    );
    const boxClasses = isSubmitStep
      ? `${styles.formBox} ${styles.formBoxVertical}`
      : `${styles.formBox}`;
    return <Box className={boxClasses}>{boxContent}</Box>;
  };
  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.id}>
            <StepLabel
              optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}
            >
              {step.label}
            </StepLabel>
            <StepContent className={styles.stepTopSpace}>
              {step.item}
              {renderBox(index)}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default JoinQueueForm;
