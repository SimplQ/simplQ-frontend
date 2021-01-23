import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import JoinQueueWithDetails from '../pages/Join';
import QueueStatus from '../pages/Status';
import AdminQueue from '../pages/Admin';
import PageNotFound from '../pages/PageNotFound';
import { ErrorBoundary } from '../ErrorHandler';
import PopupNotifications from '../common/Popup';
import Home from '../pages/Home';
import TermsOfService from '../pages/TermsOfService';
import Navbar from '../common/Nav/Navbar';
import { Security, LoginCallback  } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';

const config = {
  issuer: 'https://dev-98826368.okta.com/oauth2/default',
  clientId: "0oa48de0mFaP5PGG05d6",
  redirectUri: 'http://' + window.location.host+'/login/callback',
  scopes: 'openid profile email'.split(/\s+/)
};
const oktaAuth = new OktaAuth(config);

export default () => {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Security oktaAuth={oktaAuth}>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/queue/:queueId" exact component={AdminQueue} />
              <Route path="/j/:queueName" exact component={JoinQueueWithDetails} />
              <Route path="/token/:tokenId" exact component={QueueStatus} />
              <Route path="/privacy" exact component={TermsOfService} />
              <Route path="/login/callback" component={LoginCallback}/>
              <Route component={PageNotFound} />
            </Switch>
          </Security>
        </Router>
        <PopupNotifications />
      </ErrorBoundary>
    </>
  );
};
