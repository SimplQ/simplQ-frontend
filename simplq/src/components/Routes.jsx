import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateQueue from './pages/CreateQueue';
import { JoinQueueWithDetails, JoinQueueWithLink } from './pages/Join';
import QueueStatus from './pages/Status/QueueStatus';
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
          <Route path="/queue/:queueId" exact component={AdminQueue} />
          <Route path="/j/:queueId" exact component={JoinQueueWithDetails} />
          <Route path="/join" exact component={JoinQueueWithLink} />
          <Route path="/status" exact component={QueueStatus} />
          <Route component={PageNotFound} />
        </Switch>
        <ErrorNotification />
      </ErrorBoundary>
    </>
  );
};
