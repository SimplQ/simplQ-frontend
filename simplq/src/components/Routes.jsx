import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateQueue from './pages/CreateQueue';
import { JoinQueueDetails, JoinQueueLink } from './pages/Join';
import QueueStatus from './pages/QueueStatus';
import AdminQueue from './pages/Admin';
import PageNotFound from './pages/PageNotFound';
import { ErrorBoundary, ErrorNotification } from './ErrorHandler';
import Home from './pages/Home';

export default () => {
  return (
    <>
      <ErrorBoundary>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={CreateQueue} />
          <Route path="/admin" exact component={AdminQueue} />
          <Route path="/j/:queueId" exact component={JoinQueueDetails} />
          <Route path="/join" exact component={JoinQueueLink} />
          <Route path="/status" exact component={QueueStatus} />
          <Route component={PageNotFound} />
        </Switch>
        <ErrorNotification />
      </ErrorBoundary>
    </>
  );
};
