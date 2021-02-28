import React from 'react';
import styles from './Nav.module.scss';
import Burger from './Burger';
import Logo from '../ClickableLogo';

export const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <Logo />
      <Burger />
    </nav>
  );
};

export default Navbar;
