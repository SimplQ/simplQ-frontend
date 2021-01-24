import React from 'react';
import Button from '../../common/Button';
import styles from './unauthorized.module.scss';

function Unauthorized(props) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.errtext}>
          <h1>Oops!</h1>
          <h3>Looks like you don&apost have permission to access this page.</h3>
          <div className={styles.buttondiv}>
            <div>
              <Button onClick={() => props.history.push('/')}>Return home</Button>
            </div>
          </div>
        </div>
      </div>

      <img src="/images/wavecurve.svg" alt="Unauthorized" />
    </>
  );
}

export default Unauthorized;
