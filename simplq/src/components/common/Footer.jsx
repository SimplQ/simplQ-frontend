import React from 'react';
import styles from '../../styles/footer.module.scss';
import { ForkOnGithubButton } from './Button/Button.stories';
import ClickableLogo from './ClickableLogo';

export default () => (
  <div id="target_contact_us" className={styles['footer']}>
    <div className={styles['card']}>
      <ClickableLogo />
      <div className={styles['card-body']}>
        <div className={styles['description-content-container']}>
          <b>
            SimplQ is a completely web based queue management solution that anyone can use to create
            instant virtual queues.
            <br />
            <a href="/privacy">Privacy Policy</a>
            <br />
            <a href="/privacy#terms-of-service">Terms of Service</a>
          </b>
        </div>
      </div>
    </div>

    <div className={styles['card']}>
      <h1>Open source</h1>
      <div className={styles['card-body']}>
        <div className={styles['open-source-content-container']}>
          <p>
            <b>
              <span>SimplQ </span>
              is open source. Be part of the
              <span> SimplQ </span>
              community.
            </b>
          </p>
          <ForkOnGithubButton />
        </div>
      </div>
    </div>

    <div className={styles['card']}>
      <h1>Keep in touch</h1>
      <div className={styles['card-body']}>
        <div className={styles['list-container']}>
          <ul>
            <li>
              <a href="https://iimb.qualtrics.com/jfe/form/SV_aY8FY91ztRX9NvD">Contact Us</a>
            </li>
            <li>
              <a href="https://github.com/SimplQ/simplQ-frontend">Github</a>
            </li>
            <li>
              <a href="https://medium.com/@raimazach/virtualizing-queues-a-long-overdue-alternative-to-physical-queues-bfdc4b51070f">
                Medium
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCAb9PSXvrGZ4vvSneK1Nrow">Youtube</a>
            </li>
            <li>
              <a href="https://www.facebook.com/simplq/">Facebook</a>
            </li>
            <li>
              <a href="mailto:contact@simplq.me">Gmail</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
