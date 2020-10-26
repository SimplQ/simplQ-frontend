import React, { useState } from 'react';
import * as QueueService from '../../../services/queue';
import { handleApiErrors } from '../../ErrorHandler';
import { CreateQButton, JoinQButton } from '../../common/Button';
import styles from '../../../styles/homePage.module.scss';
import { handleEnterPress, isQueueNameValid } from '../../common/utilFns';
import InputField from '../../common/InputField';
import LoadingIndicator from '../../common/LoadingIndicator';

const CreateJoinForm = ({ history }) => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [invalidMsg, setInvalidMsg] = useState('');
  const [createInProgress, setCreateInProgress] = useState(false);

  const handleCreateClick = () => {
    if (textFieldValue === '') setInvalidMsg('Queue name is required');
    else {
      setCreateInProgress(true);
      QueueService.create(textFieldValue)
        .then((response) => {
          history.push(`/queue/${response.queueId}`);
        })
        .catch((err) => {
          handleApiErrors(err);
        });
      setCreateInProgress(false);
    }
  };

  const handleJoinClick = () => {
    if (textFieldValue === '') setInvalidMsg('Queue name is required');
    else {
      history.push(`/j/${textFieldValue}`);
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
    <div className={styles['create-join-form']}>
      <div className={styles['input-box']}>
        <InputField
          placeholder="Enter a name for your new queue"
          value={textFieldValue}
          onChange={handleTextFieldChange}
          onKeyPress={(e) => handleEnterPress(e, handleCreateClick)}
          error={invalidMsg.length > 0}
          helperText={invalidMsg}
          autoFocus
        />
      </div>
      <div className={styles['button-group']}>
        <div>
          {createInProgress ? <LoadingIndicator /> : <CreateQButton onClick={handleCreateClick} />}
        </div>
        <div>
          <JoinQButton onClick={handleJoinClick} />
        </div>
      </div>
    </div>
  );
};

export default CreateJoinForm;
