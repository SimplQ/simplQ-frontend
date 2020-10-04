import React from 'react';
import styles from '../../../../styles/homePage.module.scss';
import Burger from './Burger';
import Logo from '../../../common/ClickableLogo';

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <Logo />
      <Burger />
    </nav>
  );
};

export default Navbar;
