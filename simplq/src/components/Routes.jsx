import React from 'react';
import { Route, Switch } from 'react-router-dom';
import JoinQueueWithDetails from './pages/Join';
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
          <Route path="/queue/:queueId" exact component={AdminQueue} />
          <Route path="/j/:queueId" exact component={JoinQueueWithDetails} />
          <Route path="/token/:tokenId" exact component={QueueStatus} />
          <Route component={PageNotFound} />
        </Switch>
        <ErrorNotification />
      </ErrorBoundary>
    </>
  );
};
