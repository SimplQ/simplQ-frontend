import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button } from '@material-ui/core';
import { setErrorNotifOpen, setLoggedInUser } from '../../store/appSlice';
import styles from '../../styles/loginButton.module.scss';

const LoginButton = () => {
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.appReducer.loggedInUser);

  const onSuccessCallback = (response) => {
    dispatch(setLoggedInUser(response.profileObj));
    setLoadingIndicator(false);
  };

  const onFailureCallback = () => {
    dispatch(setLoggedInUser(null));
    dispatch(setErrorNotifOpen('Login Failed. Please try again.'));
    setLoadingIndicator(false);
  };

  const onLogoutCallback = () => {
    dispatch(setLoggedInUser(null));
    setLoadingIndicator(false);
  };

  if (loadingIndicator) {
    // todo Use spinner
    return <div>Loading...</div>;
  }

  if (loggedInUser) {
    return (
      <GoogleLogout
        render={(renderProps) => (
          <Button color="primary" onClick={renderProps.onClick} variant="outlined">
            <Avatar
              id={styles.avatar}
              alt={`${loggedInUser.givenName} ${loggedInUser.familyName}`}
              src={loggedInUser.imageUrl}
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
