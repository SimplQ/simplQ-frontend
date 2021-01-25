import React from 'react';
import styles from './home.module.scss';
import StandardButton from '../../common/Button';
import { smoothScrollToHomePageTop } from '../../../utils/scrollingOperations';

export const BenefitsInfo = () => (
  <div className={`${styles['section']} ${styles['benefits-info']}`}>
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-1']} />
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-2']} />
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-3']} />
    <h2 data-aos="zoom-in">Why SimplQ ?</h2>
    <div data-aos="zoom-in" className={`${styles['container']} ${styles['benefits-container']}`}>
      <div className={styles.benefit}>
        <img src="/images/minimize_crowding.svg" alt="minimize crowding" />
        <p>No more waiting in long lines</p>
      </div>
      <div className={styles.benefit}>
        <img src="/images/enforce_social_dist.svg" alt="Enforce social distancing" />
        <p>Enforce social distancing effectively</p>
      </div>
      <div className={styles.benefit}>
        <img src="/images/check_status.svg " alt="Check your current status" />
        <p>Check your current status in the queue</p>
      </div>
    </div>
  </div>
);

export const HowToCreate = () => (
  <>
    <div
      data-aos="fade-up"
      id="target_how_it_works"
      className={`${styles['section']} ${styles['queue-info']}`}
    >
      <h2>Create a Queue at the click of a button</h2>
      <div className={`${styles['container']} ${styles['queue-container']}`}>
        <div className={styles.queue}>
          <img src="/images/queue_creation.svg" alt="Queue creation" />
        </div>
        <div className={styles.queue}>
          <ul className={styles['list-info']}>
            <img src="/images/wand.svg" alt="Wand" />
            <li>
              <h3>Create Queue</h3>
              <p>
                Enter queue name of your choice and create a brand new queue totally free of cost
              </p>
            </li>
            <img src="/images/share-24px.svg" alt="Share" />
            <li>
              <h3>Share queue</h3>
              <p>Click the share button and send the queue link to your users for them to join</p>
            </li>
            <img src="/images/people-24px.svg" alt="People" />
            <li>
              <h3>Manage queue</h3>
              <p>
                Manage your queues seamlessly and efficiently to provide a better user experience
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <svg id={styles['curved-div-2']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 50">
      <path
        fill="#6C63FF29"
        fillOpacity="1"
        d="M0,32L120,26.7C240,21,480,11,720,10.7C960,11,1200,21,1320,26.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
    </svg>
  </>
);

export const HowToJoin = () => (
  <div className={`${styles['section']} ${styles['join-info']}`}>
    <h2 data-aos="zoom-in">Join a queue without being there</h2>
    <div className={`${styles['container']} ${styles['queue-container']}`}>
      <div data-aos="fade-right" className={styles['queue']}>
        <ul className={styles['list-info']}>
          <img src="/images/mobile_friendly-24px.svg" alt="Mobile friendly" />
          <li>
            <h3>Join a queue</h3>
            <p>Get the shared queue link and enter your details to join a queue</p>
          </li>
          <img src="/images/alarm-24px.svg" alt="Alarm" />
          <li>
            <h3>Waiting for your turn</h3>
            <p>Check your token status in queue and get notified when your turn is up</p>
          </li>
        </ul>
      </div>
      <div data-aos="zoom-in" className={styles['queue']}>
        <img src="/images/join.svg" alt="Join" />
      </div>
    </div>
  </div>
);

export const ExtraInfo = () => (
  <div className={`${styles['section']} ${styles['extra-info']}`}>
    <div className={`${styles['container']} ${styles['extra-container']}`}>
      <div className={styles['card']}>
        <img src="/images/free.svg" alt="free" />
        <p className={styles['brief-description']}>Always free</p>
        <p className={styles['detailed-description']}>
          We are a team of enthusiastic developers who want to give back to society and do not
          prioritize monetary gains
        </p>
      </div>
      <div className={styles['card']}>
        <img src="/images/secure.svg" alt="secure" />
        <p className={styles['brief-description']}>Data security</p>
        <p className={styles['detailed-description']}>
          Security is paramount and we take data security seriously
        </p>
      </div>
      <div className={styles['card']}>
        <img src="/images/easy.svg" alt="easy to use" />
        <p className={styles['brief-description']}>Easy to use</p>
        <p className={styles['detailed-description']}>
          We provide free queue management thereby allowing you to focus on better things
        </p>
      </div>
    </div>
  </div>
);

export const GetStarted = () => (
  <div data-aos="fade-up" className={`${styles['section']} ${styles['get-started']}`}>
    <h2 data-aos="zoom-in">Ready to get started with SimplQ?</h2>
    <div className={`${styles['button-group']}`}>
      <StandardButton onClick={smoothScrollToHomePageTop}>Start Now</StandardButton>
    </div>
  </div>
);
