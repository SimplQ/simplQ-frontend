/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import styles from '../../../../styles/homePage.module.scss';
import { smoothScrollTo } from '../../../common/utilFns';

const scrollToHowItWorks = () => {
  // get the target div by ID
  const element = document.getElementById('target_how_it_works');
  smoothScrollTo(element);
};

const LeftNav = ({ open }) => {
  return (
    <div>
      <ul className={styles['left-nav']} open={open}>
        <li>
          <a tabIndex={0} role="link" onKeyDown={scrollToHowItWorks} onClick={scrollToHowItWorks}>
            How it works
          </a>
        </li>
        <li>
          <a>My Queues</a>
        </li>
        <li>
          <a tabIndex={-1} href="https://iimb.qualtrics.com/jfe/form/SV_aY8FY91ztRX9NvD">
            Contact Us
          </a>
        </li>
        <li>
          <a>Sign In/Sign Up</a>
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
