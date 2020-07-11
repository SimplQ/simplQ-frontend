import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { CircularProgress } from '@material-ui/core';
import { handleEnterPress } from '../../common/utilFns';
import { InputField } from '../../common/utils';

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

  function handleContactChange(e) {
    setContact(e);
    setInvalidContact(false);
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

    setAddingInProgress(true);

    props.joinQueueHandler(name, contact).then(() => {
      setName('');
      setContact('');
      setAddingInProgress(false);
    });
  };

  return (
    <>
      {/* {renderHeaderOrInput()} */}
      <InputField
        placeholder="Your Name"
        value={name}
        onKeyPress={(e) => handleEnterPress(e, handleClick)}
        onChange={handleNameChange}
        error={invalidName}
        helperText={invalidName ? 'Enter a valid name' : ''}
      />
      <PhoneInput
        // containerClass={classes.textField}
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
      <div>
        {addingInProgress ? (
          <CircularProgress size={30} style={{ padding: '6px 16px' }} />
        ) : (
          <Button variant="contained" color="primary" onClick={handleClick}>
            {props.buttonName ? props.buttonName : 'Join'}
          </Button>
        )}
      </div>
    </>
  );
}

export default JoinQueueForm;
