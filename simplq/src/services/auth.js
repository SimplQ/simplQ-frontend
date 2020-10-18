import { store } from '../store';

export async function getAccessToken() {
  const loggedInUser = store.getState().appReducer.loggedInUser;
  if (loggedInUser) {
    return loggedInUser.getAuthResponse().id_token;
  }
  return 'anonymous';
}

export default getAccessToken;
