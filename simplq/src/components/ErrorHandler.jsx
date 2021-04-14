import React from 'react';
import * as Sentry from '@sentry/react';
import PageNotFound from './pages/PageNotFound';

// eslint-disable-next-line import/prefer-default-export
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    // eslint-disable-next-line no-console
    console.log(
      'Something caused a crash during rendering, falling back to 404 url, please try again...'
    );
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    // log error to sentry for alerting
    let eventId;
    Sentry.withScope((scope) => {
      scope.setTag('Caught-at', 'Error Boundary');
      scope.setExtras(errorInfo);
      eventId = Sentry.captureException(error);
    });
    // eslint-disable-next-line no-console
    console.log(`Sentry exception captured, event id is ${eventId}`);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <PageNotFound />;
    }
    return this.props.children;
  }
}
