import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout';
import * as serviceWorker from './serviceWorker';
import GitHubForkRibbon from 'react-github-fork-ribbon';

import {
  BrowserRouter as Router
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store'

const Content = () => (
  <GitHubForkRibbon href="//github.com/SimplQ/simplQ-frontend"
    target="_blank"
    position="right">
    Fork me on GitHub
  </GitHubForkRibbon>
);

ReactDOM.render(
  <>
    <Router>
      <Provider store={store}> <Layout /> </Provider>
    </Router>
    <Content />
  </>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
