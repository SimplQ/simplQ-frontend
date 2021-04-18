import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from 'components/common/Header';
import QueueForm from 'components/common/CreateJoinForm';
import styles from './Home.module.scss';
import MyQueues from './MyQueues';

export default () => {
  let subtitle = 'Give Your Customers a Delightful Customer Waiting Experience.';
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    subtitle = `Hi ${user.name}, welcome back!`;
  }

  return (
    <div id="target_top" className={styles['landing-page']}>
      <div data-aos="zoom-in">
        <Header className={styles['main-header']}>SimplQ</Header>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>
          Web based free queue management software to let your customers feel more relaxed and
          delighted.
        </p>
      </div>
      <MyQueues />
      <QueueForm />
      <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6C63FF29"
          fillOpacity="1"
          d="M0,224L80,192C160,160,320,96,480,101.3C640,107,800,181,960,181.3C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  );
};
