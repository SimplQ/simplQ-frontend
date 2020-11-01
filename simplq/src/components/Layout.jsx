import React from 'react';
import Routes from './Routes';
import Footer from './common/Footer';
import styles from '../styles/layout.module.scss';

function Layout() {
  return (
    <div className={styles['box']}>
      <div className={styles['content']}>
        <Routes />
      </div>
      <div className={styles['footer']}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
