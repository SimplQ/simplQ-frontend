import React from 'react';
import styles from '../../../../styles/homePage.module.scss';

const RightNav = ({ open }) => {
  return (
    <ul className={styles['menu-list']} open={open}>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
    </ul>
  );
};

export default RightNav;
