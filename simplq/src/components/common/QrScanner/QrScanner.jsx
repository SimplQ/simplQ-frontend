// Component responsible for the /scanQr route

import React, { useEffect } from 'react';
import QrReader from 'react-qr-scanner';
import styles from './QrScanner.module.scss';

export default () => {
  useEffect(() => {
    window.scrollTo('40px', '0px');
  });

  const handleScan = (data) => {
    if (data != null) {
      const res = this.getRoute(window.location.origin, data.text);

      if (res.verdict) {
        this.props.history.push(res.targetRoute);
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
