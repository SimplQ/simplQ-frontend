import React from 'react';
import styles from '../../../styles/navbar.module.scss';
import Burger from './Burger';
import Logo from '../ClickableLogo';
import { smoothScrollToHomePageTop } from '../utilFns';

const Navbar = ({ page }) => {
  return (
    <nav className={styles['navbar']}>
      <Logo onClick={smoothScrollToHomePageTop} />
      <Burger page={page} />
    </nav>
  );
};

export const AdminNavbar = () => <Navbar page="admin" />;
export const HomeNavbar = () => <Navbar page="home" />;
