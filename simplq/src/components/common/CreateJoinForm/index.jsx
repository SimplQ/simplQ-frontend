import React, { useState } from 'react';
import { useHistory } from 'react-router';
import * as QueueService from '../../../services/queue';
import styles from './createJoinForm.module.scss';
import { handleEnterPress } from '../../../utils/eventHandling';
import { isQueueNameValid } from '../../../utils/textOperations';
import InputField from '../InputField';
import LoadingIndicator from '../LoadingIndicator';
import StandardButton from '../Button';

const CreateJoinForm = (props) => {
  const [textFieldValue, setTextFieldValue] = useState(props.defaultTextFieldValue);
  const [invalidMsg, setInvalidMsg] = useState('');
  const [createInProgress, setCreateInProgress] = useState(false);
  const history = useHistory();

  const handleCreateClick = () => {
    if (!textFieldValue) setInvalidMsg('Queue name is required');
    else {
      setCreateInProgress(true);
      QueueService.create(textFieldValue).then((response) => {
        if (response) {
          history.push(`/queue/${response.queueId}`);
        }
        setCreateInProgress(false);
      });
    }
  };

  const handleJoinClick = () => {
    if (!textFieldValue) setInvalidMsg('Queue name is required');
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
    <div data-aos="zoom-in" className={styles['create-join-form']}>
      <div className={styles['input-box']}>
        <InputField
          placeholder="Queue Name"
          value={textFieldValue}
          onChange={handleTextFieldChange}
          onKeyPress={(e) => handleEnterPress(e, handleCreateClick)}
          error={invalidMsg.length > 0}
          helperText={invalidMsg}
          autoFocus
        />
      </div>
      <div className={styles['button-group']}>
        {createInProgress ? (
          <LoadingIndicator />
        ) : (
          <>
            <div>
              <StandardButton onClick={handleCreateClick}>Create Queue</StandardButton>
            </div>
            <div>
              <StandardButton onClick={handleJoinClick}>Join Queue</StandardButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateJoinForm;
