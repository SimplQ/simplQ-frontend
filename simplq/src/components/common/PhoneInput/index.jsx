import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { PhoneNumberUtil } from 'google-libphonenumber';
import 'react-phone-input-2/lib/material.css';
import { handleEnterPress } from 'utils/eventHandling';

export default (props) => {
  function handleContactChange(value, country) {
    // to make sure that the number is parsed as an international number, prepend +.
    const phoneNr = `+${value}`;
    props.onChange(phoneNr);
    const phoneUtil = PhoneNumberUtil.getInstance();

    if (country != null) {
      try {
        const isValidNumber = phoneUtil.isValidNumberForRegion(
          phoneUtil.parse(phoneNr, country.countryCode),
          country.countryCode
        );
        props.setInvalidContact(!isValidNumber);
      } catch (error) {
        props.setInvalidContact(true);
      }
    } else {
      props.setInvalidContact(true);
    }
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <PhoneInput
      placeholder="Phone Number"
      country="in"
      value={props.contact}
      inputProps={{
        name: 'phone',
        required: true,
      }}
      inputStyle={{
        width: '100%',
      }}
      isValid={() => (!props.isValid ? 'Phone number is not valid' : true)}
      onChange={handleContactChange}
      onKeyDown={(e) => handleEnterPress(e, props.onKeyDown)}
    />
  );
};
