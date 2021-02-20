/**
 * ```js
 * const {
 *   // Auth state:
 *   error,
 *   isAuthenticated,
 *   isLoading,
 *   user,
 *   // Auth methods:
 *   getAccessTokenSilently,
 *   getAccessTokenWithPopup,
 *   getIdTokenClaims,
 *   loginWithRedirect,
 *   loginWithPopup,
 *   logout,
 * } = useAuth0();
 * ```
 *
 * Use the `useAuth0` hook in your components to access the auth state and methods.
 */

const initAuth0 = {
  // Auth state:
  error: undefined,
  isAuthenticated: false,
  isLoading: true,
  user: undefined,
};

let nextAuth0 = { ...initAuth0 };

export const useAuth0 = () => {
  return nextAuth0;
};

const auth0Decorator = (Story, { parameters }) => {
  nextAuth0 = { ...initAuth0 };

  if (parameters && parameters.auth0) {
    nextAuth0 = parameters.auth0;
  }

  if (parameters && parameters.user) {
    nextAuth0 = {
      ...nextAuth0,
      user: parameters.user,
    };
  }

  return Story();
};

export default auth0Decorator;
