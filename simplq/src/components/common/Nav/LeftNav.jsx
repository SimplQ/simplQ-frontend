/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import styles from './nav.module.scss';
import { smoothScrollTo } from '../../../utils/scrollingOperations';
import LoginButton from '../LoginButton';

const LeftNav = ({ open, toggleClose }) => {
  const scrollToHowItWorks = () => {
    // Close the navbar on click
    toggleClose();
    // get the target div by ID
    const element = document.getElementById('target_how_it_works');
    if (element) {
      // element is on the current page, just have to scroll to it
      smoothScrollTo(element);
    } else {
      window.location.href = '/#target_how_it_works';
    }
  };
  return (
    <div>
      <ul className={styles['left-nav']} open={open}>
        <li>
          <a tabIndex={0} href="/">
            Home
          </a>
        </li>
        <li>
          <a role="link" tabIndex={0} onKeyDown={scrollToHowItWorks} onClick={scrollToHowItWorks}>
            How it Works
          </a>
        </li>
        <li>
          <a tabIndex={0} href="https://iimb.qualtrics.com/jfe/form/SV_aY8FY91ztRX9NvD">
            Contact Us
          </a>
        </li>
        <li>
          <LoginButton />
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
