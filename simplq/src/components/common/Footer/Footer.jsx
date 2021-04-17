import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import styles from './Footer.module.scss';
import ClickableLogo from '../ClickableLogo';
import StandardButton from '../Button';

const dayOfWeek = () => new Intl.DateTimeFormat('default', { weekday: 'long' }).format(new Date());

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
            <br />
            <a href="/privacy">Privacy Policy</a>
            <br />
            <a href="/privacy#terms-of-service">Terms of Service</a>
            <br />
            <br />
            <i>{`Enjoy the rest of your ${dayOfWeek()}!`}</i>
          </b>
        </div>
      </div>
    </div>

    <div className={styles['card']}>
      <h1>
        Open source
        <br />
        <a
          className="github-button"
          href="https://github.com/simplQ/simplQ-frontend"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-show-count="true"
          aria-label="Star simplQ/simplQ-frontend on GitHub"
        >
          Star
        </a>
      </h1>
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

          <StandardButton
            icon={<GitHubIcon />}
            onClick={() => {
              window.location.href = 'https://github.com/SimplQ/simplQ-frontend';
            }}
          >
            Contribute on Github
          </StandardButton>
        </div>
      </div>
    </div>

    <div className={styles['card']}>
      <h1>Keep in touch</h1>
      <div className={styles['card-body']}>
        <div className={styles['list-container']}>
          <div className={styles['list-container-item']}>
            <a href="https://github.com/SimplQ/simplQ-frontend">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
          <div className={styles['list-container-item']}>
            <a href="https://medium.com/@raimazach/virtualizing-queues-a-long-overdue-alternative-to-physical-queues-bfdc4b51070f">
              <img alt="medium-link" src="/images/ICON-MEDIUM.svg" />
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
