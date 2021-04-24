import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { handleEnterPress } from 'utils/eventHandling';
import InputField from 'components/common/InputField';
import PhoneInput from 'components/common/PhoneInput';
import Button from 'components/common/Button';
import LoadingStatus from 'components/common/Loading';
import styles from './JoinPage.module.scss';

export function JoinQueueForm({ joinQueueHandler, buttonText }) {
  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [invalidContact, setInvalidContact] = useState(false);
  const [contact, setContact] = useState('');
  const actionStatus = useSelector((state) => state.actionStatus['joinQueue']);
  const prevActionStatus = useRef();

  // TODO: check if this works when admin page is refactored to use actions
  useEffect(() => {
    // Reset form only after successful action
    if (prevActionStatus.current === 'pending' && actionStatus === 'fulfilled') {
      setContact('');
      setName('');
    }

    // Set previous action status for next render
    prevActionStatus.current = actionStatus;
  }, [actionStatus]);

  function handleNameChange(e) {
    if (name.match('^[A-Za-z0-9 ]*$')) {
      setName(e.target.value);
      setInvalidName(false);
    } else {
      setInvalidName(true);
    }
  }

  const onSubmit = () => {
    if (name === '') {
      setInvalidName(true);
      return;
    }
    if (contact === '') {
      setInvalidContact(true);
      return;
    }
    if (invalidContact) {
      return;
    }

    joinQueueHandler(name, contact);
  };

  return (
    <div className={styles.form}>
      <InputField
        placeholder="Name"
        value={name}
        onKeyPress={(e) => handleEnterPress(e, onSubmit)}
        onChange={handleNameChange}
        error={invalidName}
        helperText={invalidName ? 'Enter a valid name' : ''}
        autoFocus
      />
      <PhoneInput
        isValid={!invalidContact}
        contact={contact}
        onChange={setContact}
        onKeyDown={onSubmit}
      />
      <LoadingStatus dependsOn="joinQueue">
        <Button onClick={onSubmit}>{buttonText}</Button>
      </LoadingStatus>
    </div>
  );
}

export default JoinQueueForm;
