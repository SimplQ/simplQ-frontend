import React from 'react';
import { Route, Switch } from 'react-router-dom';
import JoinQueueWithDetails from './pages/Join';
import QueueStatus from './pages/Status';
import AdminQueue from './pages/Admin';
import PageNotFound from './pages/PageNotFound';
import { ErrorBoundary, ErrorNotification } from './ErrorHandler';
import Home from './pages/Home';
import TermsOfService from './pages/TermsOfService';

export default () => {
  return (
    <>
      <ErrorBoundary>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/queue/:queueId" exact component={AdminQueue} />
          <Route path="/j/:queueName" exact component={JoinQueueWithDetails} />
          <Route path="/token/:tokenId" exact component={QueueStatus} />
          <Route path="/privacy" exact component={TermsOfService} />
          <Route component={PageNotFound} />
        </Switch>
        <ErrorNotification />
      </ErrorBoundary>
    </>
  );
};
