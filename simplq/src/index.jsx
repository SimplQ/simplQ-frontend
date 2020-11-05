import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import AOS from 'aos';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import Layout from './components/Layout';

AOS.init();

Sentry.init({
  dsn: 'https://b95e1a087d284ecca9a50909d2a792e8@o444913.ingest.sentry.io/5420492',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

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
      <Provider store={store}>
        <Layout />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
