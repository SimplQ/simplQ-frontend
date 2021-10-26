import React from 'react';
import { raiseException } from 'services/alerts';
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
    // log the error to our error reporting service
    raiseException(error, 'Error Boundary', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <PageNotFound />;
    }
    return this.props.children;
  }
}
