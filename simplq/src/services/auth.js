import { store } from '../store';
import { setIsLoggedIn, setMyQueues } from '../store/appSlice';

let resolveGoogleUser = null;
let googleUserPromise = null;

export function init() {
  googleUserPromise = new Promise(function (resolve) {
    resolveGoogleUser = resolve;
  });
}

/**
 * We initilise googleUserPromise to a Promise and resolve it inside logIn() and logOut(). It is initilised to a new pending promise at start.
 */
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
 * Below functions will crash if called when user is not logged in, as googleUser will be null.
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
