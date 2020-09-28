import React from 'react';
import styles from '../../../../styles/homePage.module.scss';

const RightNav = ({ open }) => {
    return (
        <ul className={styles['right-nav']} open={open} >
            <li><a>Sign In/Sign Up</a></li>
        </ul>
    )
}

export default RightNav
