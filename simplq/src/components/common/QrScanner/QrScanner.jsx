// Component responsible for the /scanQr route

import React, { useEffect } from 'react';
import QrReader from 'react-qr-scanner';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setErrorPopupMessage } from 'store/appSlice';
import styles from './QrScanner.module.scss';

export default () => {
  useEffect(() => {
    window.scrollTo('40px', '0px');
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleScan = (data) => {
    if (data != null) {
      const baseurl = window.location.origin;
      const isValid = data.text.startsWith(baseurl); // QR code is on same origin

      if (isValid) {
        const route = data.text.substring(baseurl.length);
        history.push(route);
      } else {
        dispatch(setErrorPopupMessage('The QR code contains an invalid URL'));
      }
    }
  };

  const handleError = (err) => {
    dispatch(setErrorPopupMessage('An error occured, more details can be found in the console'));
    console.error(err);
  };

  return (
    <>
      <div className={styles['scan-window']}>
        <div className={styles['description-panel']}>
          <p className={styles['description-para']}>Scan a QR-Code</p>
          <p className={styles['description-para']}>Allow access to your camera</p>
        </div>
        <div className={styles['qrscan-panel']}>
          <QrReader
            delay={100}
            onError={handleError}
            onScan={handleScan}
            className={styles['scan']}
            facingMode="rear"
            legacyMode
          />
        </div>
      </div>
    </>
  );
};
