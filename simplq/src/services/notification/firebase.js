import { getToken } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';
import { setErrorPopupMessage } from 'store/appSlice';
import { store } from 'store';
import { raiseException } from 'services/alerts';
import { useLinkDevice } from 'store/asyncActions';

// Public key generated from firebase console
const vapidKey =
  'BCAlBO-AnqZIo_3MEiR5zEwJTFNNWBR6MdmZ5RpStXxTN6vfgUV2mL3c_hz8vQkcQ2bb_a7IMlGUhAnaw3eBZm4';
// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCCW7gmWZli24N61NShh-8ALxVy3WtjqNU',
  authDomain: 'simplq-fe712.firebaseapp.com',
  projectId: 'simplq-fe712',
  storageBucket: 'simplq-fe712.appspot.com',
  messagingSenderId: '348531792421',
  appId: '1:348531792421:web:c481f1740405522d0f3dcc',
  measurementId: 'G-8N2SDV8VF5',
};

// Initialize Firebase
initializeApp(firebaseConfig);

/**
 * React hook that lets you register for notifications.
 */
export function useRegisterNotifications() {
  const linkDevice = useLinkDevice();

  const registerNotifications = () => {
    getToken({ vapidKey })
      .then((deviceId) => {
        store.dispatch(linkDevice(deviceId));
      })
      .catch((ex) => {
        store.dispatch(
          setErrorPopupMessage(
            'Your browser has disabled notifications, please enable from Browser Settings'
          )
        );
        raiseException(ex, 'firebase/registerNotifications');
      });
  };

  return registerNotifications;
}

export function useDeregisterNotifications() {}
