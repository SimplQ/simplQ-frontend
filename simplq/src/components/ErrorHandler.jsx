/* eslint-disable */ // todo enable it back

import React from 'react';
import PageNotFound from './pages/PageNotFound';
import { setErrorPopupMessage } from 'store/appSlice';
import { store } from 'store';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log('Something caused a crash, falling back to 404 url, sorry...');
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
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
