// Component responsible for the /scanQr route

import React, { useEffect } from 'react';
import QrReader from 'react-qr-scanner';
import { useHistory } from 'react-router';
import styles from './QrScanner.module.scss';

export default () => {
  useEffect(() => {
    window.scrollTo('40px', '0px');
  });

  const history = useHistory();

  // eslint-disable-next-line consistent-return
  const getRoute = (baseurl, targeturl) => {
    for (let i = 0; i < baseurl.length; i += 1) {
      if (baseurl.charAt(i) !== targeturl.charAt(i)) {
        return {
          verdict: false,
          targetRoute: '',
        };
      }
    }
    return {
      verdict: true,
      targetRoute: targeturl.substring(baseurl.length),
    };
  };

  const handleScan = (data) => {
    if (data != null) {
      const res = getRoute(window.location.origin, data.text);

      if (res.verdict) {
        history.push(res.targetRoute);
      } else {
        window.location.href = data.text;
      }
    }
  };

  const handleError = (err) => {
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
            legacyMode
          />
        </div>
      </div>
    </>
  );
};
