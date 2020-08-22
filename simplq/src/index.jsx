import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import Layout from './components/Layout';
import awsconfig from './aws-exports';
import { loginElseCreateAnonAccount } from './services/auth';

Amplify.configure(awsconfig);

(async function loginInit() {
  await loginElseCreateAnonAccount();
})();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3A3768',
    },
  },
});

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <Layout />
        </Provider>
      </Router>
      <GitHubForkRibbon href="//github.com/SimplQ/simplQ-frontend" target="_blank" position="right">
        Fork me on GitHub
      </GitHubForkRibbon>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
