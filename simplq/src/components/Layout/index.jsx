import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from 'components/common/Footer';
import LoadingIndicator from 'components/common/LoadingIndicator';
import Routes from './Routes';
import styles from './layout.module.scss';

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
