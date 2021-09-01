import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import JoinQueueWithDetails from 'components/pages/Join/JoinPage';
import TokenStatusPage from 'components/pages/TokenStatus/TokenStatusPage';
import AdminPage from 'components/pages/Admin/AdminPage';
import PageNotFound from 'components/pages/PageNotFound';
import PopupNotifications from 'components/common/Popup';
import HomePage from 'components/pages/Home/HomePage';
import TermsOfService from 'components/pages/TermsOfService';
import Navbar from 'components/common/Nav/Navbar';
import { ErrorBoundary } from '../ErrorHandler';
import QrScanner from 'components/common/QrScanner/QrScanner';

export default () => {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/queue/:queueId" exact component={AdminPage} />
            <Route path="/j/:queueName" exact component={JoinQueueWithDetails} />
            <Route path="/token/:tokenId" exact component={TokenStatusPage} />
            <Route path="/privacy" exact component={TermsOfService} />
            <Route path="/scanQr" exact component={QrScanner} />
            <Route path="/pageNotFound/queueName=:queueName" exact component={PageNotFound} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
        <PopupNotifications />
      </ErrorBoundary>
    </>
  );
};
