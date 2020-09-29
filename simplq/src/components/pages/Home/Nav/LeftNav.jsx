import React from 'react';
import styles from '../../../../styles/homePage.module.scss';

const LeftNav = ({ open }) => {
  return (
    <ul className={styles['left-nav']} open={open}>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>How it works</a>
      </li>
      <li>
        <a>My Queues</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
      <li>
        <a>Sign In/Sign Up</a>
      </li>
    </ul>
  );
};

export default LeftNav;
