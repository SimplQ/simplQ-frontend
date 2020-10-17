/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { GoogleLogin } from 'react-google-login';
import styles from '../../../styles/navbar.module.scss';
import { smoothScrollTo } from '../utilFns';

const LeftNav = ({ open, toggleClose }) => {
  const scrollToHowItWorks = () => {
    // Close the navbar on click
    toggleClose();
    // get the target div by ID
    const element = document.getElementById('target_how_it_works');
    smoothScrollTo(element);
  };

  const responseGoogle = (response) => {
    console.log(response);
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
          <a>My Queues</a>
        </li>
        <li>
          <a tabIndex={-1} href="https://iimb.qualtrics.com/jfe/form/SV_aY8FY91ztRX9NvD">
            Contact Us
          </a>
        </li>
        <li>
          <GoogleLogin
            clientId="113171837606-3ohbbjtobt1989o9miv2gtko7ok7tt1h.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
