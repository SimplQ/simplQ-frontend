import { store } from '../store';
import { setIsLoggedIn } from '../store/appSlice';

let googleUser = null;

export function isLoggedIn() {
  return store.getState().appReducer.isLoggedIn;
}

export function getAccessToken() {
  if (!isLoggedIn()) {
    return 'anonymous';
  }
  return googleUser.getAuthResponse().id_token;
}

export function logIn(newGoogleUser) {
  googleUser = newGoogleUser;
  store.dispatch(setIsLoggedIn(true));
}

export function logOut() {
  googleUser = null;
  store.dispatch(setIsLoggedIn(false));
}

export function getName() {
  return googleUser.getBasicProfile().getName();
}

export function getImageUrl() {
  return googleUser.getBasicProfile().getImageUrl();
}

export default getAccessToken;
