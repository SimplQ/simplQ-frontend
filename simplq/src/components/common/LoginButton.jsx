/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { useDispatch } from 'react-redux';
import { Avatar, Button } from '@material-ui/core';
import { setErrorNotifOpen } from '../../store/appSlice';
import styles from '../../styles/loginButton.module.scss';

const LoginButton = () => {
  const [profileObj, setProfileObj] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const onSuccessCallback = (response) => {
    setProfileObj(response.profileObj);
    setIsUserLoggedIn(true);
    dispatch(setErrorNotifOpen('Login Success'));
  };

  const onFailureCallback = () => {
    setProfileObj(null);
    setIsUserLoggedIn(false);
    dispatch(setErrorNotifOpen('Login Failed'));
  };

  const onLogoutCallback = () => {
    setIsUserLoggedIn(false);
    setProfileObj(null);
    dispatch(setErrorNotifOpen('Bye'));
  };

  return (
    <div>
      {!isUserLoggedIn && (
        <GoogleLogin
          clientId="113171837606-3ohbbjtobt1989o9miv2gtko7ok7tt1h.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={onSuccessCallback}
          onFailure={onFailureCallback}
          isSignedIn
          cookiePolicy="single_host_origin"
        />
      )}
      {isUserLoggedIn && (
        <GoogleLogout
          render={(renderProps) => (
            <Button color="primary" onClick={renderProps.onClick} variant="outlined">
              <Avatar
                id={styles.avatar}
                alt={`${profileObj.givenName} ${profileObj.familyName}`}
                src={profileObj.imageUrl}
              />
              &nbsp;&nbsp;Logout
            </Button>
          )}
          onLogoutSuccess={onLogoutCallback}
          buttonText="Logout"
        />
      )}
    </div>
  );
};

export default LoginButton;
