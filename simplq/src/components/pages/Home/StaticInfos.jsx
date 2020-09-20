import React from 'react';
import styles from '../../../styles/homePage.module.scss';
import { CreatorSlider, JoinerSlider } from '../../common/slider';
import { ForkOnGithubButton } from '../../common/Button/Button.stories';

export const BenefitsInfo = () => (
  <div className={styles['benefits-info']}>
    <div>
      <img src="/images/minimize_crowding.svg" alt="mimimze crowding" />
      <p>Minimize crowding by keeping your queue virtual</p>
    </div>
    <div>
      <img src="/images/enforce_social_dist.svg" alt="Enforce social distancing" />
      <p>Enforce social distancing effectively</p>
    </div>
    <div>
      <img src="/images/check_status.svg " alt="Check your current status" />
      <p>Check your current status in the queue</p>
    </div>
  </div>
);

export const HowToCreate = () => (
  <div className={styles.slider}>
    <h2>Create a Queue at the click of a button</h2>
    <CreatorSlider />
  </div>
);

export const HowToJoin = () => (
  <div className={styles.slider}>
    <h2>Join a queue without being there</h2>
    <JoinerSlider />
  </div>
);

export const ExtraInfo = () => (
  <div className={styles['extra-info']}>
    <div>
      <img src="/images/free.svg" alt="free" />
      <p>Always free</p>
    </div>
    <div>
      <img src="/images/secure.svg" alt="secure" />
      <p>Data security</p>
    </div>
    <div>
      <img src="/images/easy.svg" alt="easy to use" />
      <p>Easy to use</p>
    </div>
  </div>
);

export const Footer = () => (
  <div className={styles.footer}>
    <div className={styles['main-card-container']}>
      <div className={styles.card}>
        <div className={styles['card-header']}>
          <div className={styles.simpleQ_image_container}>
            <img
              src="/images/new_logo.svg"
              className={styles['new-logo-image']}
              alt="simplQ new logo"
            />
          </div>
          <div className={styles.logo_header_container}>
            <h1>SimplQ</h1>
          </div>
        </div>
        <div className={styles['card-body']}>
          <div className={styles['description-content-container']}>
            <b className={styles['description-content']}>
              SimplQ is a completely web based queue management solution that anyone can use to
              create instant virtual queues.
            </b>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles['card-header']}>
          <div>
            <h1>Open source</h1>
          </div>
        </div>
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

      <div className={styles.card}>
        <div className={styles['card-header']}>
          <div>
            <h1>Keep in touch</h1>
          </div>
        </div>
        <div className={styles['card-body']}>
          <div className={styles['list-container']}>
            <ul>
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
  </div>
);
