import React, { useEffect } from 'react';
import { BenefitsInfo, HowToCreate, HowToJoin, ExtraInfo, GetStarted } from './StaticInfos';
import LandingPage from './LandingPage';
import { smoothScrollToHomePageTop } from '../../../utils/scrollingOperations';

const Home = () => {
  // Scroll to top whenever home page is mounted
  useEffect(smoothScrollToHomePageTop, []);
  return (
    <>
      <LandingPage />
      <BenefitsInfo />
      <HowToCreate />
      <HowToJoin />
      <ExtraInfo />
      <GetStarted />
    </>
  );
};

export default Home;
