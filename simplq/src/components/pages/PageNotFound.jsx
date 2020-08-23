import React from 'react';
import Button from '../common/Button';
import styles from '../../styles/pageNotFound.module.scss';

function PageNotFound(props) {
  return (
    <div className={styles.main}>
      <h1>404: Page not found</h1>
      <div>
        <div>
          <Button onClick={() => props.history.push('/')}>Go home</Button>
        </div>
        <div>
          <a
            href="https://github.com/SimplQ/simplQ-frontend/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Report a bug</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
