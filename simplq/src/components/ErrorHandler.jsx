/* eslint-disable */ // todo enable it back

import React from 'react';
import PageNotFound from './pages/PageNotFound';
import { setErrorPopupMessage } from '../store/appSlice';
import { store } from '../store'; // TODO: Use Hooks

// ToDo: make functional
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
    // logErrorToMyService(error, errorInfo);
    console.log('In componentDidCatch');
    store.dispatch(setErrorPopupMessage('An error occured. Please try again'));
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <PageNotFound />;
    }
    return this.props.children;
  }
}

export const handleApiErrors = (err) => {
  if (!err.response) {
    store.dispatch(setErrorPopupMessage('You are offline. Please reconnect to the internet'));
  } else if (err.response.status === 422) {
    store.dispatch(
      setErrorPopupMessage(
        `There's a problem with the data you've entered ${err.response.data.message}`
      )
    );
  } else {
    store.dispatch(setErrorPopupMessage('An error occured. Please try again'));
  }
};
