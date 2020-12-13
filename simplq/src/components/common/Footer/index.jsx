import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import styles from './footer.module.scss';
import { ForkOnGithubButton } from '../Button/Button.stories';
import ClickableLogo from '../ClickableLogo';

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
          <div className={styles['list-container-item']}>
            <a href="https://iimb.qualtrics.com/jfe/form/SV_aY8FY91ztRX9NvD">
              <PhoneIcon fontSize="large" />
            </a>
          </div>
          <div className={styles['list-container-item']}>
            <a href="https://github.com/SimplQ/simplQ-frontend">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
          <div className={styles['list-container-item']}>
            <a href="https://medium.com/@raimazach/virtualizing-queues-a-long-overdue-alternative-to-physical-queues-bfdc4b51070f">
              <img alt="medium-link" src="/images/ICON-MEDIUM.jpg" />
            </a>
          </div>
          <div className={styles['list-container-item']}>
            <a href="https://www.youtube.com/channel/UCAb9PSXvrGZ4vvSneK1Nrow">
              {/* Youtube Icon was looking smaller that others, setting height/width manually via css to match other icons */}
              <YouTubeIcon className={styles['youtube-icon']} fontSize="large" />
            </a>
          </div>
          <div className={styles['list-container-item']}>
            <a href="https://www.facebook.com/simplq/">
              <FacebookIcon fontSize="large" />
            </a>
          </div>
          <div className={styles['list-container-item']}>
            <a href="mailto:contact@simplq.me">
              <MailIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
