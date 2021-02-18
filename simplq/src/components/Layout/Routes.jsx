import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import JoinQueueWithDetails from 'components/pages/Join/JoinPage';
import QueueStatus from 'components/pages/Status';
import AdminQueue from 'components/pages/Admin';
import PageNotFound from 'components/pages/PageNotFound';
import PopupNotifications from 'components/common/Popup';
import Home from 'components/pages/Home';
import TermsOfService from 'components/pages/TermsOfService';
import Navbar from 'components/common/Nav/Navbar';
import { ErrorBoundary } from '../ErrorHandler';

export default () => {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/queue/:queueId" exact component={AdminQueue} />
            <Route path="/j/:queueName" exact component={JoinQueueWithDetails} />
            <Route path="/token/:tokenId" exact component={QueueStatus} />
            <Route path="/privacy" exact component={TermsOfService} />
            <Route path="/pageNotFound/queueName=:queueName" exact component={PageNotFound} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
        <PopupNotifications />
      </ErrorBoundary>
    </>
  );
};
