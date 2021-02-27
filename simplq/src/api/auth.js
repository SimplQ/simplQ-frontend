import { useAuth0 } from '@auth0/auth0-react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

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

  return Promise.resolve(`Anonymous ${localStorage.getItem(ANONYMOUS_DEVICE_ID_KEY)}`);
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
    const authedRequest = axios({
      baseURL,
      ...request,
      headers: {
        ...request.headers,
        // Add the Authorization header to the existing headers
        Authorization: await getAuthHeaderValue(auth),
      },
    });
    const response = await authedRequest;
    return response.data;
  };

  return makeAuthedRequest;
};

/**
 * Async function for sending request with Auth0
 * TODO: Remove this function if not used.
 *
 * Since @auth0/auth0-react can work only wthin a component,
 * the whole auth object created with useAuth() must be
 * passed as parameter.
 *
 * @param {Object} auth object returned by useAuth() from @auth0/auth0-react.
 * @param {Object} request object created by requestFactory.
 */
const makeAuthedRequest = async (auth, request) => {
  return axios({
    baseURL,
    ...request,
    headers: {
      ...request.headers,
      // Add the Authorization header to the existing headers
      Authorization: await getAuthHeaderValue(auth),
    },
  }).then((response) => {
    return response.data;
  });
};

export { makeAuthedRequest, useMakeAuthedRequest };
export default useAuth0;
