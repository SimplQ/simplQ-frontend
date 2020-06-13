import { Auth } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

async function getAccessToken() {
  const token = await Auth.currentSession();
  return token
    .getAccessToken()
    .getJwtToken()
    .toString();
};

async function loginElseCreateAnonAccount() {
  const currentUser = await Auth.currentUserInfo();
  if (currentUser) {
    // user already logged in.
    Promise.resolve(true);
  }

  var userId = localStorage.getItem('userId');
  var tempKey = localStorage.getItem('tempKey');

  if (!userId || !tempKey) {
    userId = uuidv4();
    tempKey = uuidv4();

    await Auth.signUp({
      username: userId,
      password: tempKey
    }).then(user => {
      localStorage.setItem('userId', userId);
      localStorage.setItem('tempKey', tempKey);
      return user;
    }).catch((err) => {
      throw Error("Anon user registration failed: ", err);
    });
  } 
  await Auth.signIn(userId, tempKey);
  Promise.resolve(true);
}

export { getAccessToken, loginElseCreateAnonAccount }