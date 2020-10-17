import React from 'react';
import styles from '../../../styles/navbar.module.scss';
import Burger from './Burger';
import Logo from '../ClickableLogo';
import { smoothScrollTo } from '../utilFns';

const Navbar = () => {
  const scrollToTop = () => {
    const element = document.getElementById('target_top');
    smoothScrollTo(element);
  };

  return (
    <nav className={styles['navbar']}>
      <Logo onClick={scrollToTop} />
      <Burger />
    </nav>
  );
};

export default Navbar;
