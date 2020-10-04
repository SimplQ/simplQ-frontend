import React from 'react';
import styles from '../../../../styles/homePage.module.scss';
import Burger from './Burger';

const Logo = () => (
  <div className={styles['logo']}>
    <img src="LogoLight.png" alt="Home" />
    <p>SimplQ</p>
  </div>
);

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <Logo />
      <Burger />
    </nav>
  );
};

export default Navbar;
