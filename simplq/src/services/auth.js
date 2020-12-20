import { store } from '../store';
import { setIsLoggedIn, setMyQueues } from '../store/appSlice';

let resolveGoogleUser = null;
let googleUserPromise = null;

/**
 * We initilise googleUserPromise to a Promise and resolve it inside logIn() and logOut() functions below.
 * This is required as otherwise a request might be send to the backend before the login
 * completes, and the call will fail. This will allow us to wait till the promise resolves.
 * This function should be called before every login attempt, as well as at app start so that a new
 * promise is initilised.
 * https://stackoverflow.com/questions/26150232/resolve-javascript-promise-outside-function-scope
 */
export function init() {
  googleUserPromise = new Promise(function (resolve) {
    resolveGoogleUser = resolve;
  });
}
init();

export function isLoggedIn() {
  return store.getState().appReducer.isLoggedIn;
}

export function getAccessToken() {
  return googleUserPromise.then((googleUser) =>
    googleUser ? googleUser.getAuthResponse().id_token : 'anonymous'
  );
}

export function logIn(newGoogleUser) {
  resolveGoogleUser(newGoogleUser);
  store.dispatch(setIsLoggedIn(true));
}

export function logOut() {
  resolveGoogleUser(null);
  store.dispatch(setIsLoggedIn(false));
  store.dispatch(setMyQueues([]));
}

/**
 * Below functions should be called only if logged in, otherwise googleUser will resolve to null.
 */
export function getName() {
  return googleUserPromise.then((googleUser) => googleUser.getBasicProfile().getName());
}

export function getGivenName() {
  return googleUserPromise.then((googleUser) => googleUser.getBasicProfile().getGivenName());
}

export function getImageUrl() {
  return googleUserPromise.then((googleUser) => googleUser.getBasicProfile().getImageUrl());
}

export default getAccessToken;
