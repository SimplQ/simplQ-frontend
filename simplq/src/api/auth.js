import { useAuth0 } from '@auth0/auth0-react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import * as Sentry from '@sentry/react';

// config.js is generated at runtime, so disabling eslint warning
/* eslint-disable  import/no-unresolved, import/extensions */
import { baseURL } from '../config';

const ANONYMOUS_DEVICE_ID_KEY = 'anonymous-device-id';

/**
 * Gets the authorization header value to be used to make the request.
 *
 * @param {Object} auth object returned by useAuth() from @auth0/auth0-react.
 */
const getAuthHeaderValue = async (auth) => {
  // If user is logged in, get the token from the login provider.
  if (auth.isAuthenticated) {
    return `Bearer ${await auth.getAccessTokenSilently({ audience: baseURL })}`;
  }

  // Generate and store a unique identifier for the device and also persist
  // it to local storage for later use.
  if (localStorage.getItem(ANONYMOUS_DEVICE_ID_KEY) === null) {
    localStorage.setItem(ANONYMOUS_DEVICE_ID_KEY, `anonymous-${uuidv4()}`);
  }

  return `Anonymous ${localStorage.getItem(ANONYMOUS_DEVICE_ID_KEY)}`;
};

/**
 * A hook to access the makeAuthedRequest function.
 *
 * @returns — makeAuthedRequest async request
 */
const useMakeAuthedRequest = () => {
  const auth = useAuth0();

  /**
   * Async function for sending request authorized with Auth0
   *
   * @param {Object} request object created by requestFactory.
   * @returns {Object} request response data as a Promise.
   */
  const makeAuthedRequest = async (request) => {
    const { data } = await axios({
      baseURL,
      ...request,
      headers: {
        ...request.headers,
        // Add the Authorization header to the existing headers
        Authorization: await getAuthHeaderValue(auth),
      },
    }).catch((error) => {
      // log error to sentry for alerting
      Sentry.captureException(error);
      // In case of request failure, extract error from response body
      if (error.response) {
        // Response has been received from the server
        const message = error.response.data.message;
        throw new Error(message || 'Unknown error occured. We are looking into this.');
      } else {
        // No response from server, should be a network issue
        throw new Error('Are you offline? Check your internet connection and try again.');
      }
    });

    return data;
  };

  return makeAuthedRequest;
};

export { useMakeAuthedRequest };
export default useAuth0;
