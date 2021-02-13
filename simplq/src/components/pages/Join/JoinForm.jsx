import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { PhoneNumberUtil } from 'google-libphonenumber';

import { handleEnterPress } from 'utils/eventHandling';
import InputField from 'components/common/InputField';
import Button from 'components/common/Button';
import Loading from 'components/common/Loading/Loading';
import styles from './JoinPage.module.scss';

export function JoinQueueForm({ joinQueueHandler, buttonText }) {
  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [contact, setContact] = useState('');
  const [invalidContact, setInvalidContact] = useState(false);
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

  function handleContactChange(value, country) {
    setContact(value);
    const phoneUtil = PhoneNumberUtil.getInstance();

    if (country != null) {
      // to make sure that the number is parsed as an international number, prepend +.
      const phoneNr = `+${value}`;

      try {
        const isValidNumber = phoneUtil.isValidNumberForRegion(
          phoneUtil.parse(phoneNr, country.countryCode),
          country.countryCode
        );
        setInvalidContact(!isValidNumber);
      } catch (error) {
        setInvalidContact(true);
      }
    } else {
      setInvalidContact(true);
    }
  }

  const handleClick = () => {
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
        onKeyPress={(e) => handleEnterPress(e, handleClick)}
        onChange={handleNameChange}
        error={invalidName}
        helperText={invalidName ? 'Enter a valid name' : ''}
        autoFocus
      />
      <PhoneInput
        placeholder="Phone Number"
        country="in"
        value={contact}
        inputProps={{
          name: 'phone',
          required: true,
        }}
        inputStyle={{
          width: '100%',
        }}
        isValid={() => (invalidContact ? 'Phone number is not valid' : true)}
        onChange={handleContactChange}
        onKeyDown={(e) => handleEnterPress(e, handleClick)}
      />
      <Loading isLoading={actionStatus === 'pending'}>
        <Button onClick={handleClick}>{buttonText}</Button>
      </Loading>
    </div>
  );
}

export default JoinQueueForm;
