import React from 'react';
import Button from '../../common/Button';
import styles from './pageNotFound.module.scss';

function PageNotFound(props) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.errtext}>
          <h1>Oops 404!</h1>
          <h3>Looks like the bugs stole that page.</h3>
          <div className={styles.buttondiv}>
            <div>
              <Button onClick={() => props.history.push('/')}>Return home</Button>
            </div>
            <div>
              <a
                href="https://github.com/SimplQ/simplQ-frontend/issues/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button outlined>Report a bug</Button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img className={styles.errorimg} src="/images/error404.svg" alt="Error 404" />
        </div>
      </div>
      <img src="/images/wavecurve.svg" alt="Error 404" />
    </>
  );
}

export default PageNotFound;
