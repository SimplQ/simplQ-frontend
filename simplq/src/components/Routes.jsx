import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateQueue from './pages/CreateQueue';
import JoinQueue from './pages/JoinQueue';
import QueueStatus from './pages/QueueStatus';
import AdminQueue from './pages/AdminQueue';
import PageNotFound from './pages/PageNotFound';
import { ErrorBoundary, ErrorNotification } from './ErrorHandler';

export default () => {
  return (
    <>
      <ErrorBoundary>
        <Switch>
          <Route path="/" exact component={CreateQueue} />
          <Route path="/admin" exact component={AdminQueue} />
          <Route path="/j/:queueId" exact component={JoinQueue} />
          <Route path="/status" exact component={QueueStatus} />
          <Route component={PageNotFound} />
        </Switch>
        <ErrorNotification />
      </ErrorBoundary>
    </>
  );
};
