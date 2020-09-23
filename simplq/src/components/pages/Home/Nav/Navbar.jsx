import React from 'react';
import styles from '../../../../styles/homePage.module.scss';
import Burger from './Burger';

const Navbar = () => {
    return (
        <nav className={styles['Navbar-style']}>
            <img src="LogoLight.png" className="logo" height="50" width="50" />

            <Burger />
        </nav>
    )
}

export default Navbar