import React from 'react';
import PageNotFound from './pages/PageNotFound';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorNotifOpen } from '../store/appSlice';
import { store } from '../store'; //TODO: Use Hooks

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log('In getDerivedStateFromError');
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
    console.log('In componentDidCatch');
    useDispatch(setErrorNotifOpen(true));
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <PageNotFound />;
    }
    return this.props.children;
  }
}

export const ErrorNotification = (props) => {
  const errorText = useSelector((state) => state.appReducer.errorText);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    store.dispatch(setErrorNotifOpen(false));
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  return (
    <Snackbar open={errorText.length > 0} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {errorText}
      </Alert>
    </Snackbar>
  );
};

export const handleApiErrors = (err) => {
  if (!err.response) {
    store.dispatch(setErrorNotifOpen('You are offline. Please reconnect to the internet'));
  } else if (err.response.status === 422) {
    store.dispatch(
      setErrorNotifOpen(
        `There's a problem with the data you've entered ${err.response.data.message}`
      )
    );
  } else {
    store.dispatch(setErrorNotifOpen('An error occured. Please try again'));
  }
};
