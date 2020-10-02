import React from 'react';
import styles from '../../../../styles/homePage.module.scss';
import Burger from './Burger';

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>  
      <img src="LogoLight.png" alt="Home" />
      <Burger />
    </nav>
  );
};

export default Navbar;
