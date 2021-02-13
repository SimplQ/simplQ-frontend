import { useAuth0 } from '@auth0/auth0-react';

import axios from 'axios';

// config.js is generated at runtime, so disabling eslint warning
/* eslint-disable  import/no-unresolved, import/extensions */
import { baseURL } from '../config';

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
    const accessToken = auth.isAuthenticated
      ? await auth.getAccessTokenSilently({ audience: baseURL })
      : 'anonymous';

    const authedRequest = axios({
      baseURL,
      ...request,
      headers: {
        ...request.headers,
        // Add the Authorization header to the existing headers
        Authorization: `Bearer ${accessToken}`,
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
  const accessToken = auth.isAuthenticated
    ? await auth.getAccessTokenSilently({ audience: baseURL })
    : 'anonymous';
  return axios({
    baseURL,
    ...request,
    headers: {
      ...request.headers,
      // Add the Authorization header to the existing headers
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((response) => {
    return response.data;
  });
};

export { makeAuthedRequest, useMakeAuthedRequest };
export default useAuth0;
