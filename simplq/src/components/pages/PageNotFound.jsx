import React from 'react';
import Button from '../common/Button';
import styles from '../../styles/pageNotFound.module.scss';

function PageNotFound(props) {
  return (
    <div className={styles.main}>
      <h1>404: Page not found</h1>
      <Button onClick={() => props.history.push('/')}>Go home</Button>
    </div>
  );
}

export default PageNotFound;
