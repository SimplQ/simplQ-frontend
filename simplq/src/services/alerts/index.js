import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://b95e1a087d284ecca9a50909d2a792e8@o444913.ingest.sentry.io/5420492',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

/**
 * Send exception to monitoring framework.
 *
 * @param {Exception} ex - exception that was captured.
 * @param {string} caughtAt - Optional. A tag indicating where the exception was caught.
 * @param {object} extras - Optional. Set an object that will be merged sent as extra data with the event.
 */
export function raiseException(ex, caughtAt, extras) {
  Sentry.withScope((scope) => {
    if (caughtAt) {
      scope.setTag('Caught-at', caughtAt);
    }
    if (extras) {
      scope.setExtras(extras);
    }

    const eventId = Sentry.captureException(ex);

    // eslint-disable-next-line no-console
    console.log(`Sentry exception captured, event id is ${eventId}`);
    // eslint-disable-next-line no-console
    console.error(ex);
  });
}

export default raiseException;
