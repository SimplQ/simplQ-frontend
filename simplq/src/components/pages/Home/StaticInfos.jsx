import React from 'react';
import { CreateQButton, JoinQButton } from '../../common/Button';
import Header from '../../common/Header';
import styles from '../../../styles/homePage.module.scss';
import { CreatorSlider, JoinerSlider } from '../../common/slider';

export const Landing = (props) => (
  <div className={styles['landing-page']}>
    <div>
      <Header className={styles['main-header']} text="SimplQ" />
      <h3 className={styles.center}>A long overdue alternative to physical Queues</h3>
    </div>
    <div className={styles['button-group']}>
      <div>
        <CreateQButton onClick={() => props.history.push('/create')} />
      </div>
      <div>
        <JoinQButton onClick={() => props.history.push('/join/')} />
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#6C63FF29"
        fillOpacity="1"
        d="M0,256L60,245.3C120,235,240,213,360,202.7C480,192,600,192,720,197.3C840,203,960,213,1080,192C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </svg>
  </div>
);

export const BenefitsInfo = () => (
  <>
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
  </>
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
