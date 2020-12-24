/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { useHistory } from 'react-router';
import styles from './nav.module.scss';
import { smoothScrollTo } from '../utilFns';

import LoginButton from '../LoginButton';

const LeftNav = ({ open, toggleClose }) => {
  const history = useHistory();
  const scrollToHowItWorks = () => {
    // Close the navbar on click
    toggleClose();
    // get the target div by ID
    const element = document.getElementById('target_how_it_works');
    if (element) {
      // element is on the current page, just have to scroll to it
      smoothScrollTo(element);
    } else {
      history.push('/#target_how_it_works');
    }
  };
  return (
    <div>
      <ul className={styles['left-nav']} open={open}>
        <li>
          <a tabIndex={0} role="link" onKeyDown={scrollToHowItWorks} onClick={scrollToHowItWorks}>
            How it works
          </a>
        </li>
        <li>
          <a tabIndex={0} href="/">
            My Queues
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
