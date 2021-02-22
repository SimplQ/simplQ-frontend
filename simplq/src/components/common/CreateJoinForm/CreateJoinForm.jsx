import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { handleEnterPress } from 'utils/eventHandling';
import { isQueueNameValid } from 'utils/textOperations';
import { useCreateQueue } from 'store/asyncActions';
import { useDispatch } from 'react-redux';
import LoadingStatus from 'components/common/Loading';
import styles from './CreateJoinForm.module.scss';
import InputField from '../InputField';
import StandardButton from '../Button';

const CreateJoinForm = (props) => {
  const [textFieldValue, setTextFieldValue] = useState(props.defaultTextFieldValue);
  const [invalidMsg, setInvalidMsg] = useState('');
  const history = useHistory();
  const createQueue = useCreateQueue();
  const dispatch = useDispatch();

  const handleCreateClick = () => {
    if (!textFieldValue) {
      setInvalidMsg('Queue name is required');
      return;
    }
    dispatch(createQueue({ queueName: textFieldValue }));
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
        <LoadingStatus dependsOn="createQueue">
          <div>
            <StandardButton onClick={handleCreateClick}>Create Queue</StandardButton>
          </div>
          <div>
            <StandardButton onClick={handleJoinClick}>Join Queue</StandardButton>
          </div>
        </LoadingStatus>
      </div>
    </div>
  );
};

export default CreateJoinForm;
