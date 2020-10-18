import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { useDispatch } from 'react-redux';
import { Avatar, Button } from '@material-ui/core';
import { setErrorNotifOpen } from '../../store/appSlice';
import styles from '../../styles/loginButton.module.scss';

const LoginButton = () => {
  const [profileObj, setProfileObj] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const dispatch = useDispatch();

  const onSuccessCallback = (response) => {
    setProfileObj(response.profileObj);
    setIsUserLoggedIn(true);
    setLoadingIndicator(false);
  };

  const onFailureCallback = () => {
    setProfileObj(null);
    setIsUserLoggedIn(false);
    dispatch(setErrorNotifOpen('Login Failed. Please try again.'));
    setLoadingIndicator(false);
  };

  const onLogoutCallback = () => {
    setIsUserLoggedIn(false);
    setProfileObj(null);
    setLoadingIndicator(false);
  };

  if (loadingIndicator) {
    // todo Use spinner
    return <div>Loading...</div>;
  }

  if (isUserLoggedIn) {
    return (
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
    );
  }
  return (
    <GoogleLogin
      clientId="113171837606-3ohbbjtobt1989o9miv2gtko7ok7tt1h.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={onSuccessCallback}
      onFailure={onFailureCallback}
      onRequest={() => setLoadingIndicator(true)}
      isSignedIn
      cookiePolicy="single_host_origin"
    />
  );
};

export default LoginButton;
