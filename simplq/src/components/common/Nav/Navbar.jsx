import React from 'react';
import styles from '../../../styles/navbar.module.scss';
import Burger from './Burger';
import Logo from '../ClickableLogo';
import { scrollToHomePageTop } from '../utilFns';

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <Logo onClick={scrollToHomePageTop} />
      <Burger />
    </nav>
  );
};

export default Navbar;
