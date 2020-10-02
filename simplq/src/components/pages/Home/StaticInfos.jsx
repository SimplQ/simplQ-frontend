import React from 'react';
import styles from '../../../styles/homePage.module.scss';
import { CreatorSlider, JoinerSlider } from '../../common/slider';

export const BenefitsInfo = () => (
  <div className={styles['benefits-info']}>
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-1']} />
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-2']} />
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-3']} />
    <h2>Why SimplQ ?</h2>
    <div className={styles['benefits-container']}>
      <div className={styles.benefit}>
        <img src="/images/minimize_crowding.svg" alt="mimimze crowding" />
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
);
