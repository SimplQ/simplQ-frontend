/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import styles from '../../../../styles/homePage.module.scss';

function smoothScrollTo(targetElement) {
  // offset to avoid the sticky header on top to block the "Create a Queue at the click of a button" text
  const offset = 45;
  // setting the exact position on the document to scroll to
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = targetElement.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;
  // scroll to the exact position
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
function scrollToHowItWorks() {
  // get the target div by ID
  const element = document.getElementById('target_how_it_works');
  smoothScrollTo(element);
}

function scrollToContactUs() {
  // get the target div by ID
  const element = document.getElementById('target_contact_us');
  smoothScrollTo(element);
}

const LeftNav = ({ open }) => {
  return (
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
        <a tabIndex={-1} role="link" onKeyDown={scrollToContactUs} onClick={scrollToContactUs}>
          Contact Us
        </a>
      </li>
      <li>
        <a>Sign In/Sign Up</a>
      </li>
    </ul>
  );
};

export default LeftNav;
