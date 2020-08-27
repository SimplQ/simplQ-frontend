import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import * as QueueService from '../../services/queue';
import { setCreationStep } from '../../store/appSlice';
import CreatorStepper from '../common/stepper/CreatorStepper';
import { handleApiErrors } from '../ErrorHandler';
import { CreateQButton } from '../common/Button';
import styles from '../../styles/createPage.module.scss';
import { SimplQHeader } from '../common/Header';
import { handleEnterPress, isQueueNameValid } from '../common/utilFns';
import InputField from '../common/InputField';

const CreateQueue = ({ history }) => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [invalidMsg, setInvalidMsg] = useState('');
  const [createInProgress, setCreateInProgress] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCreationStep(0));
  }, [dispatch]);
  const handleClick = (queueName) => {
    if (textFieldValue === '') setInvalidMsg('Queue name is required');
    else {
      setCreateInProgress(true);
      QueueService.create(queueName)
        .then((response) => {
          dispatch(setCreationStep(1));
          history.push(`/queue/${response.queueId}`);
        })
        .catch((err) => {
          handleApiErrors(err);
        });
      setCreateInProgress(false);
    }
  };

  const handleTextFieldChange = (e) => {
    const queueName = e.target.value;
    if (isQueueNameValid(queueName)) {
      setTextFieldValue(queueName);
      setInvalidMsg('');
    } else {
      setInvalidMsg("Only alphabets, numbers and '-' allowed");
    }
  };

  return (
    <div className={styles.main}>
      <SimplQHeader />
      <CreatorStepper />
      <InputField
        placeholder="Enter a name for your new queue"
        value={textFieldValue}
        onChange={handleTextFieldChange}
        onKeyPress={
          (e) => handleEnterPress(e, () => handleClick(textFieldValue))
          // eslint-disable-next-line react/jsx-curly-newline
        }
        error={invalidMsg.length > 0}
        helperText={invalidMsg}
        className={styles.input}
      />
      <div className={styles['create-button']}>
        {createInProgress ? (
          <CircularProgress size={30} />
        ) : (
          <CreateQButton onClick={() => handleClick(textFieldValue)} />
        )}
      </div>
    </div>
  );
};

export default CreateQueue;
