import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { handleEnterPress } from '../../common/utilFns';
import InputField from '../../common/InputField';
import styles from '../../../styles/joinPage.module.scss';
import { JoinQButton } from '../../common/Button';
import LoadingIndicator from '../../common/LoadingIndicator';
import { PhoneNumberUtil } from 'google-libphonenumber';

export function JoinQueueForm(props) {
  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [contact, setContact] = useState('');
  const [invalidContact, setInvalidContact] = useState(false);
  const [addingInProgress, setAddingInProgress] = useState(false);

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
      const phoneNr = '+' + value;

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
    } else if (invalidContact) {
      return;
    }

    setAddingInProgress(true);

    props.joinQueueHandler(name, contact).then(() => {
      setName('');
      setContact('');
      setAddingInProgress(false);
    });
  };

  const JoinButton = () => (
    <div>{addingInProgress ? <LoadingIndicator /> : <JoinQButton onClick={handleClick} />}</div>
  );
  return (
    <div className={styles.form}>
      <InputField
        placeholder="Name"
        value={name}
        onKeyPress={(e) => handleEnterPress(e, handleClick)}
        onChange={handleNameChange}
        error={invalidName}
        helperText={invalidName ? 'Enter a valid name' : ''}
      />
      <PhoneInput
        placeholder="Phone Number"
        country="in"
        value={contact}
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true,
        }}
        inputStyle={{
          width: '100%',
        }}
        isValid={() => (invalidContact ? 'Phone number is not valid' : true)}
        onChange={handleContactChange}
        onKeyDown={(e) => handleEnterPress(e, handleClick)}
      />
      <JoinButton />
    </div>
  );
}

export default JoinQueueForm;
