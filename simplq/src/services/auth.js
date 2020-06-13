import { Auth } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

async function getAccessToken() {
  const token = await Auth.currentSession();
  console.dir(token);
  debugger;
  return token
    .getAccessToken()
    .getJwtToken()
    .toString();
};

async function SignIn(username, password) {
  return await Auth.signIn(username, password);
}

async function loginElseCreateAnonAccount() {
  var userId = localStorage.getItem('userId');
  var tempKey = localStorage.getItem('tempKey');

  if (!userId || !tempKey) {
    userId = uuidv4();
    tempKey = uuidv4();

    return await Auth.signUp({
      password: tempKey
    }).then(user => {
      debugger;
      localStorage.setItem('userId', 'todo'); // TODO!!
      localStorage.setItem('tempKey', tempKey);
      return user;
    }).catch((err) => {
      throw Error("Anon user registration failed: ", err);
    });
  } else {
    return await SignIn(userId, tempKey);
  }
}

export { getAccessToken, loginElseCreateAnonAccount }