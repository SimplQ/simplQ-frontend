import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import JoinQueueWithDetails from './pages/Join';
import QueueStatus from './pages/Status';
import AdminQueue from './pages/Admin';
import PageNotFound from './pages/PageNotFound';
import { ErrorBoundary } from './ErrorHandler';
import ErrorNotification from './common/Popups/errorPopup';
import InfoNotification from './common/Popups/infoPopup';
import Home from './pages/Home';
import TermsOfService from './pages/TermsOfService';

export default () => {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/queue/:queueId" exact component={AdminQueue} />
            <Route path="/j/:queueName" exact component={JoinQueueWithDetails} />
            <Route path="/token/:tokenId" exact component={QueueStatus} />
            <Route path="/privacy" exact component={TermsOfService} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
        <ErrorNotification />
        <InfoNotification />
      </ErrorBoundary>
    </>
  );
};
