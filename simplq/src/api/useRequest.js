import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';
import makeRequest from './axios';

// Use this hook to get a function that can be used to make
// authenticated API calls from inside functional components.
// Example:
//
// import { QueueRequestFactory } from 'api/requestFactory';  // Request structure is defined here.
//
// const MyAwesomeComponent = () => {
//   const { requestMaker } = useRequest();
//   ...
//   requestMaker(QueueRequestFactory.create(textFieldValue))
//     .then((response) => {
//       // Handle response here
//       ...
//     });
// }
//
export const useRequest = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  // memoized the function, as otherwise if the hook is used inside
  // a useEffect, it will lead to an infinite loop
  const memoizedFn = useCallback(
    async (request) => {
      const accessToken = isAuthenticated
        ? await getAccessTokenSilently({ audience: 'https://devbackend.simplq.me/v1' })
        : 'anonymous';
      // TODO sent unique id instead of anonymous as discussed with @maaverik
      return makeRequest({
        ...request,
        headers: {
          ...request.headers,
          // Add the Authorization header to the existing headers
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    [isAuthenticated, getAccessTokenSilently]
  );
  return {
    requestMaker: memoizedFn,
  };
};

export default useRequest;
