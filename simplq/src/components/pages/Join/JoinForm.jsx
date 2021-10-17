import React, { useState, useCallback, useEffect } from 'react';
import PhoneInput from 'components/common/PhoneInput';
import StandardButton from 'components/common/Button';
import { useGetTokenByContactNumber } from 'store/asyncActions/getTokenByContactNumber';
import { useDispatch } from 'react-redux';
import { handleEnterPress } from 'utils/eventHandling';
import InputField from 'components/common/InputField';
import Checkbox from 'components/common/Checkbox/Checkbox';
import { useJoinQueue } from 'store/asyncActions';

export function JoinQueueForm({ queueId, isAdmin }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [invalidContact, setInvalidContact] = useState(false);
  const getTokenByContactNumber = useCallback(useGetTokenByContactNumber(), []);
  const dispatch = useDispatch();
  const [saveToLocalStorage, setSaveToLocalStorage] = useState(true);
  const joinQueue = useJoinQueue();
  const isTokenFound = undefined;

  useEffect(() => {
    const localStorageName = localStorage.getItem('name');
    const localStorageContact = localStorage.getItem('contact');
    if (localStorageName) {
      setName(localStorageName);
    }
    if (localStorageContact) {
      setContact(localStorageContact);
    }
  }, []);

  const onSubmit = () => {
    if (invalidContact) return;

    if (contact === '') {
      setInvalidContact(true);
      return;
    }

    if (saveToLocalStorage) {
      localStorage.setItem('contact', contact);
    } else {
      localStorage.removeItem('contact');
    }

    if (!isAdmin && isTokenFound === undefined) {
      dispatch(getTokenByContactNumber({ queueId, contact, redirectToTokenPageOnSuccess: true }));
      return;
    }

    if (invalidName) return;

    if (name === '') {
      setInvalidName(true);
      return;
    }

    if (saveToLocalStorage) {
      localStorage.setItem('name', name);
    } else {
      localStorage.removeItem('name');
    }

    dispatch(
      joinQueue({
        name,
        contactNumber: contact,
        notifiable: true,
        queueId,
        goToStatusPage: !isAdmin,
      })
    );
  };

  return (
    <div>
      <div>
        <PhoneInput
          isValid={!invalidContact}
          setInvalidContact={setInvalidContact}
          contact={contact}
          onChange={setContact}
          autoFocus
        />
      </div>
      {isTokenFound === false ? (
        <div>
          <InputField
            placeholder="Name"
            value={name}
            onKeyPress={(e) => handleEnterPress(e, onSubmit)}
            onChange={(e) => setName(e.target.value)}
            error={invalidName}
            helperText={invalidName ? 'Enter a valid name' : ''}
          />
        </div>
      ) : null}
      <div>
        <StandardButton disabled={invalidContact} onClick={onSubmit}>
          Next
        </StandardButton>
      </div>
      <Checkbox
        name="saveToLocalStorage"
        label="Save for later use"
        checked={saveToLocalStorage}
        onChange={() => {
          setSaveToLocalStorage(!saveToLocalStorage);
        }}
      />
    </div>
  );
}

export default JoinQueueForm;
