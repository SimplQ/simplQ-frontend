function checkNotificationPromise() {
  try {
    Notification.requestPermission().then();
  } catch (e) {
    return false;
  }

  return true;
}

function askNotificationPermission() {
  // function to actually ask the permissions
  function handlePermission(permission) {
    // Whatever the user answers, we make sure Chrome stores the information
    if (!('permission' in Notification)) {
      Notification.permission = permission;
    }

    // set the button to shown or hidden, depending on what the user answers
    if (Notification.permission === 'denied' || Notification.permission === 'default') {
      console.log('Notifications disabled');
    } else {
      console.log('Notifications enabled');
    }
  }

  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications.');
  } else if (checkNotificationPromise()) {
    Notification.requestPermission().then((permission) => {
      handlePermission(permission);
    });
  } else {
    Notification.requestPermission(function (permission) {
      handlePermission(permission);
    });
  }
}
export default askNotificationPermission;
