import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from 'components/common/Footer';
import Loading from 'components/common/Loading/Loading';
import Routes from './Routes';
import styles from './Layout.module.scss';

function Layout() {
  const { isLoading } = useAuth0();

  return (
    <div className={styles['box']}>
      <div className={styles['content']}>
        {/* TODO:  Since we have better way for managing loading status
        remove conditional loading of the layout once it is handled elswhere */}
        <Loading isLoading={isLoading}>
          <Routes />
        </Loading>
      </div>
      <div className={styles['footer']}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
