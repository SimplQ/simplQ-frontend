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
  const handleClick = () => {
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
      <InputField
        placeholder="Enter a name for your new queue"
        value={textFieldValue}
        onChange={handleTextFieldChange}
        onKeyPress={
          (e) => handleEnterPress(e, () => handleClick())
          // eslint-disable-next-line react/jsx-curly-newline
        }
        error={invalidMsg.length > 0}
        helperText={invalidMsg}
        className={styles.input}
      />
      <div className={styles['button-group']}>
        <div>
          {createInProgress ? (
            <LoadingIndicator />
          ) : (
            <CreateQButton onClick={() => handleClick()} />
          )}
        </div>
        <div>
          <JoinQButton onClick={() => history.push('/join/')} />
          {/* FIXME */}
        </div>
      </div>
    </div>
  );
};

export default CreateJoinForm;
