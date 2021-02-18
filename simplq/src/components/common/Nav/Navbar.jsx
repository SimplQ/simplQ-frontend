import React from 'react';
import { smoothScrollToHomePageTop } from 'utils/scrollingOperations';
import styles from './Nav.module.scss';
import Burger from './Burger';
import Logo from '../ClickableLogo';

export const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <Logo onClick={smoothScrollToHomePageTop} />
      <Burger />
    </nav>
  );
};

export default Navbar;
