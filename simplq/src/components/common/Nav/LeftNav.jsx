/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { smoothScrollTo, smoothScrollToHomePageTop, onLoadById } from 'utils/scrollingOperations';
import { useHistory } from 'react-router';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import styles from './Nav.module.scss';
import LoginButton from '../LoginButton';

const LeftNav = ({ open, toggleClose }) => {
  const history = useHistory();
  let typeformEmbed = null;

  const scrollToHowItWorks = () => {
    // Close the navbar on click
    toggleClose();
    // get the target div by ID
    const element = document.getElementById('target_how_it_works');
    if (element) {
      // element is on the current page, just have to scroll to it
      smoothScrollTo(element);
    } else {
      history.push('/');
      // wait till page loads before getting element
      onLoadById('target_how_it_works', smoothScrollTo);
    }
  };

  const openContactUs = () => {
    typeformEmbed.typeform.open();
  };
  return (
    <div>
      <ul className={styles['left-nav']} open={open}>
        <li>
          <a
            role="link"
            tabIndex={0}
            onKeyDown={() => smoothScrollToHomePageTop(history)}
            onClick={() => smoothScrollToHomePageTop(history)}
          >
            Home
          </a>
        </li>
        <li>
          <a role="link" tabIndex={0} onKeyDown={scrollToHowItWorks} onClick={scrollToHowItWorks}>
            How it Works
          </a>
        </li>
        <li>
          <a role="link" tabIndex={0} onKeyDown={openContactUs} onClick={openContactUs}>
            Contact Us
          </a>
        </li>
        <li>
          <LoginButton />
        </li>
      </ul>
      <ReactTypeformEmbed
        popup
        url="https://kss9gyhvcy3.typeform.com/to/kHJHPLEr"
        hideHeaders
        hideFooter
        style={{ top: -100 }}
        ref={(tf) => {
          typeformEmbed = tf;
        }}
      />
    </div>
  );
};

export default LeftNav;
