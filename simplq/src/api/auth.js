import { useAuth0 } from '@auth0/auth0-react';

import axios from 'axios';
// TODO: Read base url from env
const baseURL = 'https://devbackend.simplq.me/v1';

/**
 * Async function for sending request with Auth0
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

export { makeAuthedRequest };
export default useAuth0;
