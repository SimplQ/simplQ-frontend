import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button } from '@material-ui/core';
import { setErrorPopupMessage, setMyQueues } from '../../store/appSlice';
import * as Auth from '../../services/auth';
import LoadingIndicator from './LoadingIndicator';
import styles from '../../styles/loginButton.module.scss';
import { getMyQueues } from '../../services/queue';

const LoginButton = () => {
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.appReducer.isLoggedIn);
  const history = useHistory();

  const onSuccessCallback = (googleUser) => {
    Auth.logIn(googleUser);
    getMyQueues().then((queues) => dispatch(setMyQueues(queues)));
    setLoadingIndicator(false);
  };

  const onFailureCallback = () => {
    Auth.logOut();
    dispatch(setErrorPopupMessage('Login Failed. Please try again.'));
    setLoadingIndicator(false);
  };

  const onLogoutCallback = () => {
    Auth.logOut();
    history.push('/');
    setLoadingIndicator(false);
  };

  if (loadingIndicator) {
    return LoadingIndicator;
  }

  if (isLoggedIn) {
    return (
      <GoogleLogout
        render={(renderProps) => (
          <Button color="primary" onClick={renderProps.onClick} variant="outlined">
            <Avatar id={styles.avatar} alt={Auth.getName()} src={Auth.getImageUrl()} />
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
      responseType="id_token permission"
    />
  );
};

export default LoginButton;
