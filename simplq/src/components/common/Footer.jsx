import React from 'react'
import styles from './../../styles/footer.module.scss';
import { ForkOnGithubButton } from './Button/Button.stories';


export const Footer = () => (
    <div className={styles['footer']}>
      <div className={styles['main-card-container']}>
        <div className={styles['card']}>
          <div className={styles['card-header']}>
            <div className={styles['simpleQ-image-container']}>
              <img
                src="/images/new_logo.svg"
                className={styles['new-logo-image']}
                alt="simplQ new logo"
              />
            </div>
            <div className={styles['logo-header-container']}>
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
  
        <div className={styles['card']}>
          <div className={styles['card-header']}>
            <div className={styles['center-horizontally']}>
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
  
        <div className={styles['card']}>
          <div className={styles['card-header']}>
            <div className={styles['center-horizontally']}>
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
  