import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Routes from './Routes';
import Footer from '../common/Footer';
import styles from './layout.module.scss';
import LoadingIndicator from '../common/LoadingIndicator';

function Layout() {
  const { isLoading } = useAuth0();

  return (
    <div className={styles['box']}>
      <div className={styles['content']}>{isLoading ? <LoadingIndicator /> : <Routes />}</div>
      <div className={styles['footer']}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
