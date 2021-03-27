import React, { useEffect } from 'react';
import { useGetUserQueues } from 'store/asyncActions';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from 'components/common/Footer';
import Loading from 'components/common/Loading/Loading';
import Routes from './Routes';
import styles from './Layout.module.scss';

function Layout() {
  const { isLoading, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const getUserQueues = useGetUserQueues();

  useEffect(() => {
    // All the backend API calls that should happen at the start goes here.
    // They will the dispached as soon as Auth0 has initilised.
    if (isLoading === false) {
      dispatch(getUserQueues());
    }
  }, [isLoading, isAuthenticated, getUserQueues, dispatch]);

  return (
    <div className={styles['box']}>
      <div className={styles['content']}>
        {/* We load the main app content only after Auth0 has been initilised. 
        This helps ensure that no backend API calls are made before auth the initilisation */}
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
