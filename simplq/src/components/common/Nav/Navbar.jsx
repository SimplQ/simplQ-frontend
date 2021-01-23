import React from 'react';
import styles from './nav.module.scss';
import Burger from './Burger';
import Logo from '../ClickableLogo';
import { smoothScrollToHomePageTop } from '../utilFns';
import { useOktaAuth } from '@okta/okta-react';

export const Navbar = () => {
  const { authState, authService } = useOktaAuth();
  const login = () => authService.login();

  console.log("authState: ", authState);
  console.log("authService: ", authService)
  
  return (
    <nav className={styles['navbar']}>
      <Logo onClick={smoothScrollToHomePageTop} />
      <Burger />
    </nav>
  );
};

export default Navbar;
