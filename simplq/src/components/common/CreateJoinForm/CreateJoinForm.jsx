import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { handleEnterPress } from 'utils/eventHandling';
import { isQueueNameValid } from 'utils/textOperations';
import { useCreateQueue } from 'store/asyncActions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'components/common/Loading/Loading';
import styles from './CreateJoinForm.module.scss';
import InputField from '../InputField';
import StandardButton from '../Button';

const CreateJoinForm = (props) => {
  const [textFieldValue, setTextFieldValue] = useState(props.defaultTextFieldValue);
  const [invalidMsg, setInvalidMsg] = useState('');
  const history = useHistory();
  const createQueue = useCreateQueue();
  const dispatch = useDispatch();
  const actionStatus = useSelector((state) => state.actionStatus['createQueue']);

  const handleCreateClick = () => {
    if (!textFieldValue) {
      setInvalidMsg('Queue name is required');
      return;
    }
    dispatch(createQueue(textFieldValue));
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
        <Loading isLoading={actionStatus === 'pending'}>
          <div>
            <StandardButton onClick={handleCreateClick}>Create Queue</StandardButton>
          </div>
          <div>
            <StandardButton onClick={handleJoinClick}>Join Queue</StandardButton>
          </div>
        </Loading>
      </div>
    </div>
  );
};

export default CreateJoinForm;
