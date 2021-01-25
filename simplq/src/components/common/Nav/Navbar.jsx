import React from 'react';
import styles from './nav.module.scss';
import Burger from './Burger';
import Logo from '../ClickableLogo';
import { smoothScrollToHomePageTop } from '../../../utils/scrollingOperations';

export const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <Logo onClick={smoothScrollToHomePageTop} />
      <Burger />
    </nav>
  );
};

export default Navbar;
