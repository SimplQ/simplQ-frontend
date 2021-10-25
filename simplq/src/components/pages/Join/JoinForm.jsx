import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { useJoinQueue } from 'store/asyncActions';
import { useGetTokenByContactNumber } from 'store/asyncActions/getTokenByContactNumber';
import styles from './JoinForm.module.scss';
import Checkbox from '../../common/Checkbox/Checkbox';
import { selectQueueInfo } from '../../../store/queueInfo';

export function JoinQueueForm({ queueId, isAdminPage, buttonText }) {
  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [contactNumber, setContactNumber] = useState('');
  const [invalidContactNumber, setInvalidContactNumber] = useState(false);
  const [emailId, setEmailId] = useState('');
  const [invalidEmailId, setInvalidEmailId] = useState(false);
  const joinQueueActionStatus = useSelector((state) => state.actionStatus['joinQueue']);
  const prevActionStatus = useRef();
  const [activeStep, setActiveStep] = React.useState(0);
  const queueInfo = useSelector(selectQueueInfo);
  const [saveToLocalStorage, setSaveToLocalStorage] = useState(true);
  const getTokenByContactNumber = useCallback(useGetTokenByContactNumber(), []);

  const { notifyByEmail } = useSelector(selectQueueInfo);
  const collectEmail = !!notifyByEmail;

  const joinQueue = useJoinQueue();
  const dispatch = useDispatch();

  const joinQueueHandler = () => {
    dispatch(
      joinQueue({
        name,
        contactNumber,
        queueId,
        emailId: collectEmail ? emailId : undefined,
        goToStatusPage: !isAdminPage,
      })
    );
  };

  const onSubmitGetToken = () => {
    dispatch(
      getTokenByContactNumber({ queueId, contactNumber, redirectToTokenPageOnSuccess: true })
    );
  };

  const handleNext = async () => {
    if (invalidContactNumber) return;
    if (contactNumber === '') {
      setInvalidContactNumber(true);
      return;
    }

    // check if user is on admin page (pages/Admin/AddMember.jsx) where each step (contact + name) is necessary
    if (!isAdminPage) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      return;
    }
    onSubmitGetToken(contactNumber);
    if (queueInfo.selfJoinAllowed) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    // Reset form only after successful action
    if (prevActionStatus.current === 'pending' && joinQueueActionStatus === 'fulfilled') {
      setContactNumber('');
      setName('');
      setEmailId('');
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
      setContactNumber(localStorageContact);
    }
    if (localStorageEmail) {
      setEmailId(localStorageEmail);
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
    setEmailId(e.target.value);
  }

  const onSubmit = () => {
    if (invalidContactNumber || invalidName) return;
    if (name === '') {
      setInvalidName(true);
      return;
    }
    if (contactNumber === '') {
      setInvalidContactNumber(true);
      return;
    }

    if (collectEmail && emailId === '') {
      setInvalidEmailId(true);
      return;
    }

    if (saveToLocalStorage) {
      localStorage.setItem('contact', contactNumber);
      localStorage.setItem('name', name);
      localStorage.setItem('email', emailId);
    } else {
      localStorage.removeItem('contact');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    joinQueueHandler();
    // reset to first step on queue page (pages/Admin/AddMember.jsx)
    if (isAdminPage) setActiveStep(0);
  };

  const checkJoinDisabled = () => {
    return (
      invalidContactNumber ||
      invalidName ||
      contactNumber === '' ||
      name === '' ||
      (collectEmail && (emailId === '' || invalidEmailId))
    );
  };

  const checkNextDisabled = () => {
    return invalidContactNumber || contactNumber === '';
  };

  const steps = [
    {
      id: 'phone',
      label: 'Enter phone number',
      item: (
        <div className={styles.formItem}>
          <PhoneInput
            isValid={!invalidContactNumber}
            setInvalidContact={setInvalidContactNumber}
            contact={contactNumber}
            onChange={(val) => setContactNumber(val)}
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
                value={emailId}
                onKeyPress={(e) => handleEnterPress(e, onSubmit)}
                onChange={handleEmailChange}
                error={invalidEmailId}
                helperText={invalidEmailId ? 'Enter a valid name' : ''}
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
    const isSubmitStep = index === steps.length - 1 && (queueInfo.selfJoinAllowed || isAdminPage);
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
              {buttonText}
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
