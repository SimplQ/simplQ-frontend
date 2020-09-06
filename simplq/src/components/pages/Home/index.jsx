import React from 'react';
import { BenefitsInfo, HowToCreate, HowToJoin, ExtraInfo } from './StaticInfos';
import { CreateQButton, JoinQButton } from '../../common/Button';
import Header from '../../common/Header';
import styles from '../../../styles/homePage.module.scss';

const Home = (props) => {
  return (
    <>
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
            d="M0,224L80,192C160,160,320,96,480,101.3C640,107,800,181,960,181.3C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
      <BenefitsInfo />
      <HowToCreate />
      <HowToJoin />
      <ExtraInfo />
    </>
  );
};

export default Home;
