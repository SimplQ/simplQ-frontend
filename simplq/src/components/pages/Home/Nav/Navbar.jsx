import React from 'react';
import styles from '../../../../styles/homePage.module.scss';
import Burger from './Burger';
import Logo from '../../../common/ClickableLogo';
import { smoothScrollTo } from '../../../common/utilFns';

const Navbar = () => {
  const scrollToTop = () => {
    const element = document.getElementById('target_top');
    smoothScrollTo(element);
  };

  return (
    <nav className={styles['navbar']}>
      <Logo onClick={scrollToTop} type="light" />
      <Burger />
    </nav>
  );
};

export default Navbar;
